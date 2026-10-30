import { useId, useState } from "react";

type Item = { q: string; a: string };

/**
 * Accordion built from buttons rather than <details>, so the expanded state is
 * announced through aria-expanded and the marker can animate consistently.
 * Several items can be open at once; closing one never closes another.
 */
export default function Faq({ items }: { items: Item[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (index: number) =>
    setOpen((current) =>
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index],
    );

  return (
    <div className="faq">
      {items.map((item, index) => {
        const expanded = open.includes(index);
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div className="faq-item" key={item.q}>
            <h3>
              <button
                type="button"
                id={buttonId}
                className="faq-question"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                {item.q}
                <span className="faq-marker" aria-hidden="true">
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq-answer"
              hidden={!expanded}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
