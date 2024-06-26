import { gameEvents } from '../game-events';
import { GameBoard } from '../game-board';

/**
 * A factory creates player object. A call without argument creates player of type 'computer'.
 * @param {string?} type - The type of the returned player ['computer' | 'human']
 * @returns {Player}
 */
export default function Player(playerType) {
  // Assert that the given type is valid type or it is 'undefined', Otherwise, throw error
  if (
    playerType !== undefined &&
    playerType !== Player.TYPES.COMPUTER &&
    playerType !== Player.TYPES.HUMAN
  ) {
    throw TypeError(
      `Invalid type! Only '${Player.TYPES.COMPUTER}' & '${Player.TYPES.HUMAN}' are the valid types. Given: '${playerType}'`,
    );
  }

  const type = playerType === undefined ? Player.TYPES.COMPUTER : playerType;
  const gameBoard = GameBoard(type === Player.TYPES.COMPUTER);

  const player = {
    type,
    gameBoard,
  };

  // Add play method only to player type 'computer'
  if (player.type === Player.TYPES.COMPUTER) {
    const maxHeight = player.gameBoard.board.length;
    const maxWidth = player.gameBoard.board[0]?.length ?? 0;
    const opponentBoard = [];
    for (let i = 0; i < maxHeight; i++) {
      opponentBoard[i] = [];
      for (let j = 0; j < maxWidth; j++) {
        opponentBoard[i][j] = {
          attacked: false,
          missed: false,
        };
      }
    }
    const opponentSunkShipsAreas = [];
    const highPriorityTargetsQ = [];
    const validTargets = [];
    opponentBoard.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (!cell.attacked && !cell.missed) validTargets.push([i, j]);
      });
    });
    // Find, Smartly, empty cells around a ship that not sunk
    const findCellsAroundPartlySunkShip = () => {
      const V_DIR = 'V';
      const H_DIR = 'H';
      // Reset high priority targets
      highPriorityTargetsQ.splice(0);
      // Define search helpers
      const isPartOfSunkShip = ([i, j]) => {
        return opponentSunkShipsAreas.some((shipArea) => {
          return shipArea.some(([sunkI, sunkJ]) => sunkI === i && sunkJ === j);
        });
      };
      const isTrueCond = (condValue, boolOpt, condRef) => {
        if (boolOpt === 'gtOrEq') return condValue >= condRef;
        return condValue < condRef;
      };
      const searchInOneDir = (varI, constI, mod, dir, boolOpt, condRef) => {
        let x = varI + mod;
        let [newI, newJ] = dir === V_DIR ? [x, constI] : [constI, x];
        let newCell = opponentBoard[newI]?.[newJ];
        if (newCell && !isPartOfSunkShip([newI, newJ])) {
          while (isTrueCond(x, boolOpt, condRef) && newCell.attacked) {
            x += mod;
            [newI, newJ] = dir === V_DIR ? [x, constI] : [constI, x];
            newCell = opponentBoard[newI]?.[newJ];
          }
          const isEqualToThis = ([oldI, oldJ]) =>
            oldI === newI && oldJ === newJ;
          const notInHigh = highPriorityTargetsQ.findIndex(isEqualToThis) < 0;
          if (newCell && !newCell.attacked && !newCell.missed && notInHigh) {
            highPriorityTargetsQ.push([newI, newJ]);
          }
        }
      };
      // Search for high priority targets in the opponent's board
      opponentBoard.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell.attacked && !isPartOfSunkShip([i, j])) {
            const countOfHPT = highPriorityTargetsQ.length;
            // Look for high priority targets
            if (
              (opponentBoard[i - 1]?.[j]?.attacked &&
                !isPartOfSunkShip([i - 1, j])) ||
              (opponentBoard[i + 1]?.[j]?.attacked &&
                !isPartOfSunkShip([i + 1, j]))
            ) {
              searchInOneDir(i, j, -1, V_DIR, 'gtOrEq', 0); // TOP
              searchInOneDir(i, j, 1, V_DIR, 'lt', maxHeight); // DOWN
            } else if (
              (opponentBoard[i][j - 1]?.attacked &&
                !isPartOfSunkShip([i, j - 1])) ||
              (opponentBoard[i][j + 1]?.attacked &&
                !isPartOfSunkShip([i, j + 1]))
            ) {
              searchInOneDir(j, i, -1, H_DIR, 'gtOrEq', 0); // LEFT
              searchInOneDir(j, i, 1, H_DIR, 'lt', maxWidth); // RIGHT
            }
            // If not hight priority targets added, then just look everywhere
            if (countOfHPT === highPriorityTargetsQ.length) {
              searchInOneDir(i, j, -1, V_DIR, 'gtOrEq', 0);
              searchInOneDir(i, j, 1, V_DIR, 'lt', maxHeight);
              searchInOneDir(j, i, -1, H_DIR, 'gtOrEq', 0);
              searchInOneDir(j, i, 1, H_DIR, 'lt', maxWidth);
            }
          }
        });
      });
    };
    const updateHighPriorityTargets = () => findCellsAroundPartlySunkShip();
    // Create a flag distinguish our attacks
    let attacked = false;
    let smartTarget = null;
    let target = null;
    gameEvents.add(gameEvents.MISS, () => {
      if (attacked) {
        const [i, j] = target;
        opponentBoard[i][j].missed = true;
        attacked = false;
        updateHighPriorityTargets();
        if (highPriorityTargetsQ.length > 0) {
          smartTarget = highPriorityTargetsQ.shift();
        }
      }
    });
    gameEvents.add(gameEvents.HIT, () => {
      if (attacked) {
        const [i, j] = target;
        opponentBoard[i][j].attacked = true;
        attacked = false;
        if (highPriorityTargetsQ.length > 0) {
          smartTarget = highPriorityTargetsQ.shift();
        } else {
          updateHighPriorityTargets();
          if (highPriorityTargetsQ.length > 0) {
            smartTarget = highPriorityTargetsQ.shift();
          }
        }
      }
    });
    gameEvents.add(gameEvents.SHIP_IS_SUNK, (shipArea) => {
      const sunkShipArea = [];
      shipArea.forEach((shipCellPair) => sunkShipArea.push([...shipCellPair]));
      opponentSunkShipsAreas.push(sunkShipArea);
    });
    player.play = () => {
      if (validTargets.length > 0) {
        if (!smartTarget) {
          const randomTargetIndex = Math.floor(
            Math.random() * validTargets.length,
          );
          target = validTargets[randomTargetIndex];
        } else {
          target = smartTarget;
          smartTarget = null;
        }
        // Remove the current target from the set of the valid targets
        const validTargetIndex = validTargets.findIndex(
          ([i, j]) => i === target[0] && j === target[1],
        );
        if (validTargetIndex > -1) {
          validTargets.splice(validTargetIndex, 1);
        }
        attacked = true;
        gameEvents.emit(gameEvents.ATTACK, target);
      } else {
        attacked = false;
        gameEvents.emit(gameEvents.GAME_OVER);
      }
    };
  }

  // Make the player object an instance of 'Player'
  Object.setPrototypeOf(player, Player.prototype);
  // Set 'Player' as the constructor for the player object
  Object.defineProperty(player, 'constructor', {
    value: Player,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  Object.freeze(player);

  return player;
}

// Add TYPES as a static property on 'Player'
Player.TYPES = { COMPUTER: 'C', HUMAN: 'H' };

// Freeze Player & its prototype
Object.freeze(Player);
Object.freeze(Player.prototype);

export { Player };
