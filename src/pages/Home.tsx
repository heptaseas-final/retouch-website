import CtaButton from "../components/CtaButton";
import MediaSlot from "../components/MediaSlot";
import useDocumentMeta from "../useDocumentMeta";
import appIcon from "../assets/app-icon.svg";
import {
  features,
  finalCta,
  hero,
  hook,
  roadmap,
  smoothZoom,
} from "../content";

export default function Home() {
  useDocumentMeta({
    title: "Retouch, a real mirror on your phone",
    description: hero.description,
    path: "/",
  });

  return (
    <>
      <section className="hero band">
        <div className="container">
          <div className="hero-copy">
            <p className="hero-wordmark">
              <img src={appIcon} alt="" width={52} height={52} />
              <span>Retouch</span>
            </p>
            <h1 className="hero-title">{hero.headline}</h1>
            <p className="lede">{hero.description}</p>
            <CtaButton label={hero.cta} />
          </div>
          <div className="hero-stage">
            <MediaSlot media={hero.media} tilt="left" />
            <MediaSlot media={hero.secondaryMedia} tilt="right" />
          </div>
        </div>
      </section>

      <section className="hook band" aria-labelledby="hook-heading">
        <div className="container">
          <h2 className="hook-question" id="hook-heading">
            {hook.question}
          </h2>
          <p className="hook-answer">{hook.answer}</p>
        </div>
      </section>

      <section className="band" aria-labelledby="features-heading">
        <div className="container">
          <h2 className="visually-hidden" id="features-heading">
            What Retouch does
          </h2>
          <div className="feature-list">
            {features.map((feature, index) => (
              <article
                className={`feature${index % 2 === 1 ? " feature-reverse" : ""}`}
                key={feature.id}
              >
                <div className="feature-copy">
                  <h3 className="feature-label">{feature.label}</h3>
                  <p className="feature-caption">{feature.caption}</p>
                </div>
                <div className="feature-media">
                  <MediaSlot media={feature.media} variant={feature.frame} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smooth band-tight">
        <div className="container">
          <p>{smoothZoom}</p>
        </div>
      </section>

      <section className="band" aria-labelledby="roadmap-heading">
        <div className="container">
          <p className="eyebrow">Roadmap</p>
          <h2 className="roadmap-line" id="roadmap-heading">
            {roadmap.line}
          </h2>
          <ul className="roadmap-grid">
            {roadmap.devices.map((device) => (
              <li className="roadmap-item" key={device.name}>
                <strong>{device.name}</strong>
                <span>{device.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band-tight">
        <div className="container">
          <div className="final-cta">
            <h2>{finalCta.headline}</h2>
            <CtaButton label={finalCta.cta} />
          </div>
        </div>
      </section>
    </>
  );
}
