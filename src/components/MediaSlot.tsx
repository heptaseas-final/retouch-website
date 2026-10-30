import { useEffect, useState } from "react";
import type { Media } from "../content";

/**
 * Renders one media slot inside a phone frame.
 *
 * Videos autoplay silently so the page reads as a live mirror, except when the
 * visitor has asked for reduced motion. Then the clip is paused and gets
 * controls, so it is still reachable but never moves on its own.
 */

const motionQuery = "(prefers-reduced-motion: reduce)";

function usePrefersReducedMotion() {
  // Initialised from the live media query rather than set inside an effect, so
  // the first render already has the right answer and nothing cascades.
  const [reduced, setReduced] = useState(
    () => window.matchMedia(motionQuery).matches,
  );

  useEffect(() => {
    const query = window.matchMedia(motionQuery);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

type Props = {
  media: Media;
  tilt?: "left" | "right";
  /**
   * "phone" wraps the clip in a device frame, for screen recordings.
   * "card" leaves it unframed, for clips that already show a scene with a
   * phone in it. Framing one of those again gives you a phone inside a phone.
   */
  variant?: "phone" | "card";
};

export default function MediaSlot({ media, tilt, variant = "phone" }: Props) {
  const reducedMotion = usePrefersReducedMotion();

  if (media.kind === "missing") {
    return (
      <div className="media-missing" role="img" aria-label={media.label}>
        <strong>{media.label}</strong>
        <span>{media.note}</span>
      </div>
    );
  }

  const inner =
    media.kind === "video" ? (
      <video
        src={media.src}
        poster={media.poster}
        aria-label={media.alt}
        autoPlay={!reducedMotion}
        loop
        muted
        playsInline
        controls={reducedMotion}
        preload="metadata"
      />
    ) : (
      <img src={media.src} alt={media.alt} loading="lazy" decoding="async" />
    );

  if (variant === "card") {
    return <div className="media-card sheen">{inner}</div>;
  }

  const tiltClass = tilt ? ` phone-tilt-${tilt}` : "";

  return (
    <div className={`phone sheen${tiltClass}`}>
      <span className="phone-island" />
      <div className="phone-screen">{inner}</div>
    </div>
  );
}
