/**
 * The vintage vanity ornament set.
 *
 * Every piece here is decoration with no meaning for a screen reader, so each
 * one is aria-hidden and each takes its colour from currentColor, letting the
 * section that places it decide the tier. None of them is interactive and none
 * sits above text or a tap target: they are positioned behind content or in
 * the margins, and the stylesheet hides or shrinks the heavier ones on phones.
 *
 * The double hairline frame is deliberately CSS rather than SVG. Its box has
 * no fixed aspect ratio, and an SVG rect stretched to fit would thin its
 * stroke on one axis, so the 1.5px and 1px lines would stop being hairlines.
 * See .hairline-frame in styles.css.
 */

/** One rounded corner curl with its dot, repeated at all four corners. */
export function CornerCurls() {
  return (
    <span className="corner-curls" aria-hidden="true">
      {["tl", "tr", "br", "bl"].map((corner) => (
        <svg
          className={`corner-curl corner-curl-${corner}`}
          key={corner}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        >
          <path d="M1 15 V7 C1 3.7 3.7 1 7 1 H15" />
          <circle cx="5" cy="5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      ))}
    </span>
  );
}

/** A four point sparkle. Sized in px because it is an optical accent. */
export function Sparkle({ size = 14 }: { size?: number }) {
  return (
    <svg
      className="sparkle"
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M8 0 C8.6 5.4 10.6 7.4 16 8 C10.6 8.6 8.6 10.6 8 16 C7.4 10.6 5.4 8.6 0 8 C5.4 7.4 7.4 5.4 8 0 Z" />
    </svg>
  );
}

/**
 * The wax seal. The monogram is the site's only Pinyon Script besides the
 * ticket, and at the default 56px the 22 unit glyph in a 44 unit box renders
 * at 28px, which is the floor the direction sets for that face.
 */
export function WaxSeal({ size = 56 }: { size?: number }) {
  return (
    <svg
      className="wax-seal"
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 44 44"
    >
      <path
        fill="currentColor"
        d="M40.8 18.5 Q40.4 22 39.6 25.1 Q38.8 28.1 37.9 31.3 Q36.9 34.5 33.9 35.9 Q30.8 37.3 28.1 39 Q25.3 40.8 22 40.6 Q18.8 40.3 16 38.8 Q13.2 37.2 10.3 35.7 Q7.4 34.2 6.5 31.1 Q5.5 28 4.4 25 Q3.2 22 4.3 19 Q5.4 16 6.9 13.3 Q8.4 10.6 10.5 8.2 Q12.6 5.8 15.6 4 Q18.5 2.3 21.8 3.4 Q25.1 4.5 28.1 5.4 Q31.1 6.3 34 7.9 Q36.9 9.5 39 12.3 Q41.2 15 40.8 18.5 Z"
      />
      <circle
        cx="22"
        cy="22"
        r="13"
        fill="none"
        stroke="var(--wax-ring)"
        strokeWidth="1"
      />
      <text
        x="22"
        y="22"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-script)"
        fontSize="22"
        fill="var(--magenta-100)"
      >
        R
      </text>
    </svg>
  );
}
