import useDocumentMeta from "../useDocumentMeta";
import { privacy } from "../content";
import {
  PRIVACY_LAST_UPDATED,
  SUPPORT_EMAIL,
  hasSupportEmail,
} from "../config";

export default function Privacy() {
  useDocumentMeta({
    title: "Retouch Privacy Policy",
    description:
      "Retouch processes the camera on your device only. No recording, no accounts, no analytics, no advertising, and no data shared with third parties.",
    path: "/privacy",
  });

  return (
    <section className="band">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{privacy.title}</h1>
          <p className="meta">Last updated {PRIVACY_LAST_UPDATED}</p>
          <p className="lede">{privacy.intro}</p>
        </div>

        <div className="prose">
          {privacy.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <section>
            <h2>Contact</h2>
            {hasSupportEmail ? (
              <p>
                Questions about this policy:{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </p>
            ) : (
              <p className="notice">
                The contact address has not been set yet. Add it to
                <code> src/config.ts </code> before the production build.
              </p>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}
