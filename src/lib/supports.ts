/**
 * Feature-detection probe for the CSS `sibling-count()` / `sibling-index()`
 * tree-counting functions (CSS Values and Units Module Level 5).
 *
 * Both functions return an `<integer>`, so the smallest meaningful probe is a
 * `calc()` that multiplies the count by a length. Browsers that don't
 * implement the functions reject the value, so `CSS.supports` returns false.
 *
 * @see https://drafts.csswg.org/css-values-5/#tree-counting
 */
export const SIBLING_PROBE = 'calc(sibling-count() * 1px)';

/**
 * Determines whether the "unsupported browser" disclaimer should be shown.
 *
 * @param supportsSiblingCount - injectable `CSS.supports('width', SIBLING_PROBE)`
 */
export function shouldShowUnsupportedNotice(
  supportsSiblingCount: () => boolean,
): boolean {
  try {
    return !supportsSiblingCount();
  } catch {
    // Old browsers without CSS.supports — assume unsupported.
    return true;
  }
}
