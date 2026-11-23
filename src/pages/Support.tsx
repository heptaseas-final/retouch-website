import Faq from "../components/Faq";
import useDocumentMeta from "../useDocumentMeta";
import { faq } from "../content";
import { SUPPORT_EMAIL, hasSupportEmail } from "../config";

export default function Support() {
  useDocumentMeta({
    title: "Re-touch Support",
    description:
      "Answers about camera permission, auto lighting, gesture zoom, and supported devices, plus how to reach the Re-touch team.",
    path: "/support",
  });

  return (
    <section className="band">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Re-touch Support</h1>
          <p className="lede">
            Something not working as you expect? Start with the questions below.
            If none of them covers it, write to us.
          </p>
          {hasSupportEmail ? (
            <p>
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </p>
          ) : (
            <p className="notice">
              The support address has not been set yet. Add it to
              <code> src/config.ts </code> before the production build.
            </p>
          )}
        </div>

        <h2 className="visually-hidden">Frequently asked questions</h2>
        <Faq items={faq} />
      </div>
    </section>
  );
}
