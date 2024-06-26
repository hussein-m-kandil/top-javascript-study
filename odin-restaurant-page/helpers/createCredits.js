import createElement from './createElement.js';

/**
 * Creates 'credits' in any given html element tag.
 * @param {string} containerTag - Tag name to be the container of the credits
 * @param {string?} className - A value for class attribute on credits container
 * @param {{
 *    subject: string?,
 *    owner: { name: string?, url: string? }?,
 *    site: { name: string?, url: string? }?
 *   }?} creditsData
 * Object that has credits data.
 * - i.e. {subject, owner:{name,url},site:{name, url}} (notice the keys' names).
 * Note: 'subject' is credits text that appear before owner's name.
 * Note: The 'creditsData' key and all its nested keys are optional.
 * @returns {HTMLElement}
 * Returns credits:
 * - Like "Image by owner.name from site.name".
 * - Has the names as '<a>' the 'url' key is present.
 */
export default function createCredits(containerTag, className, creditsData) {
  if (typeof containerTag !== 'string') {
    throw TypeError(
      "Type of 'createCredits' 1st argument must be 'string' (HTML tag name)",
    );
  }
  const credits = createElement(containerTag, className ? className : null);
  let subject = 'Image by ';
  if (
    creditsData &&
    creditsData.subject &&
    typeof creditsData.subject === 'string'
  ) {
    subject = creditsData.subject;
  }
  if (credits) {
    if (creditsData.owner.name && creditsData.owner.url) {
      credits.appendChild(document.createTextNode(subject));
      credits.appendChild(
        createElement('a', 'credits-owner', creditsData.owner.name, [
          'href',
          creditsData.owner.url,
        ]),
      );
    } else if (creditsData.owner.name) {
      credits.appendChild(
        document.createTextNode(subject + creditsData.owner.name),
      );
    }
    if (creditsData.site.name && creditsData.site.url) {
      credits.appendChild(document.createTextNode(' from '));
      credits.appendChild(
        createElement('a', 'credits-site', creditsData.site.name, [
          'href',
          creditsData.site.url,
        ]),
      );
    } else if (creditsData.site.name) {
      credits.appendChild(
        document.createTextNode(' from ' + creditsData.site.name),
      );
    }
  }
  return credits;
}

export { createCredits };
