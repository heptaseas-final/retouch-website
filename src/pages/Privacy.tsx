import useDocumentMeta from "../useDocumentMeta";
import { privacy } from "../content";
import {
  PRIVACY_LAST_UPDATED,
  SUPPORT_EMAIL,
  hasSupportEmail,
} from "../config";

export default function Privacy() {
  useDocumentMeta({
    title: "Re-touch Privacy Policy",
    description:
      "What Re-touch does with your camera, photos, and analytics data: camera processing stays on your device, and Mixpanel analytics receives a random device identifier and usage data.",
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
              <p>
                {section.body}
                {section.link && (
                  <>
                    {" "}
                    <a href={section.link} target="_blank" rel="noopener noreferrer">
                      {section.link}
                    </a>
                    .
                  </>
                )}
              </p>
              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.after && <p>{section.after}</p>}
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
