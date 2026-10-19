export interface ExampleConfig {
  /** Matches the radio input id (`ex-${id}`) the picker CSS relies on. */
  id: string;
  /** Short label for the picker pill. */
  label: string;
  /** Section heading shown when selected. */
  title: string;
  /** Explanation shown when selected. */
  description: string;
  /** CSS snippet shown when selected. */
  code: string;
}

export const EXAMPLES: ExampleConfig[] = [
  {
    id: 'equal',
    label: 'equal width',
    title: 'Divide the row by the count',
    description:
      'sibling-count() returns how many siblings an element has, so a single rule can split a row into equal parts without knowing how many parts there will be. The width subtracts the gaps first, so the items still fit exactly however many there are — compare the five-item and eight-item rosters below.',
    code: `.item {
  inline-size: calc(
    (100% - (sibling-count() - 1) * 0.75rem) / sibling-count()
  );
}`,
  },
  {
    id: 'stagger',
    label: 'stagger',
    title: 'Sequential animation from the index',
    description:
      'sibling-index() returns the element’s 1-based position among its siblings, so a delay can be derived from DOM order alone. Each item starts a beat after the one before it, with no nth-child() list and no per-item class — and the sequence restarts when you switch back to this pill.',
    code: `.item {
  animation: rise 0.5s backwards;
  animation-delay: calc((sibling-index() - 1) * 120ms);
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }
}`,
  },
  {
    id: 'hue',
    label: 'hue ramp',
    title: 'Distribute a ramp across the count',
    description:
      'Combining both functions spreads a value evenly across however many siblings exist. Here the hue step is 360° divided by the count, then multiplied by the index, so the first item is red and the last lands just before red again — add or remove a sibling and the whole ramp re-spaces itself.',
    code: `.item {
  background: hsl(
    calc(360deg / sibling-count() * (sibling-index() - 1)) 70% 60%
  );
}`,
  },
  {
    id: 'grow',
    label: 'grow',
    title: 'Growth proportional to the index',
    description:
      'sibling-index() is an ordinary number, so it can drive any property that takes one. Setting flex-grow to the index makes each item claim a larger share of the leftover space than the one before it — a staircase that scales to any number of siblings without overflow.',
    code: `.item {
  flex-grow: sibling-index();
  flex-basis: 2rem;
}`,
  },
  {
    id: 'pyramid',
    label: 'pyramid',
    title: 'Symmetric shape from both functions',
    description:
      'The two functions compose inside other math functions. This block size takes the smaller of the index and the distance from the end (count − index + 1), so the height rises to the middle and falls again — a pyramid that stays centred no matter how many siblings there are.',
    code: `.item {
  block-size: calc(
    min(sibling-index(), sibling-count() - sibling-index() + 1) * 1.5rem + 2rem
  );
  align-self: end;
}`,
  },
  {
    id: 'deck',
    label: 'deck',
    title: 'Stacking order from the index',
    description:
      'sibling-index() can also feed an integer property directly. Here each item is pulled over the previous one with a negative margin and raised with a matching z-index, so the deck stacks in source order — first item at the bottom, last at the top.',
    code: `.item {
  position: relative;
  margin-inline-start: -1.5rem;
  z-index: sibling-index();
}

.item:first-child {
  margin-inline-start: 0;
}`,
  },
];
