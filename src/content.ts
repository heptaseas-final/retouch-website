/**
 * Every piece of page copy and every media reference lives here, so swapping a
 * clip or rewording a caption never means touching a component.
 *
 * The clips are code-generated artwork, not recordings of a real person, so
 * there is no likeness to clear before publishing them.
 *
 * To swap a clip: drop the new file into src/assets/ and change the import.
 * To fill the one remaining gap, replace the `missing` entry on the shade
 * feature with { kind: "video" | "image", src: <import>, alt: "..." }.
 * Nothing else needs to change.
 */

import zoomEyeLoop from "./assets/zoom-eye-loop.mp4";
import zoomHeadTurnLoop from "./assets/zoom-head-turn-loop.mp4";
import autoLightLoop from "./assets/auto-light-loop.mp4";

export type Media =
  | { kind: "video"; src: string; poster?: string; alt: string }
  | { kind: "image"; src: string; alt: string }
  | { kind: "missing"; label: string; note: string };

export const hero = {
  headline: "Turn your phone into a real mirror with Re-touch.",
  description:
    "An ergonomic beauty mirror for on-the-go makeup, with gesture zoom, auto lighting, and no beauty filter, so your blush never goes invisible again.",
  cta: "Try Re-touch",
  media: {
    kind: "video",
    src: zoomEyeLoop,
    alt: "An illustrated face with a brush coming near one eye, and the mirror view zooming to it.",
  } satisfies Media,
  secondaryMedia: {
    kind: "video",
    src: zoomHeadTurnLoop,
    alt: "An illustrated face turning, with the mirror view following to that side.",
  } satisfies Media,
};

export const hook = {
  question: "What if you forgot your mirror?",
  answer: "Anywhere, anytime. Your phone is already your mirror.",
};

export type Feature = {
  id: string;
  label: string;
  caption: string;
  media: Media;
  /** "card" for clips that already show a phone in a scene. */
  frame?: "phone" | "card";
};

export const features: Feature[] = [
  {
    id: "zoom",
    label: "Zoom",
    caption: "Hold the brush near your eye. Re-touch zooms in for you.",
    media: {
      kind: "video",
      src: zoomEyeLoop,
      alt: "An illustrated brush approaches an eye and the mirror view zooms to it.",
    },
  },
  {
    id: "light",
    label: "Light",
    caption: "Dim spot? Re-touch lights you up.",
    frame: "card",
    media: {
      kind: "video",
      src: autoLightLoop,
      alt: "An illustrated figure holds up a phone in a dark room and the screen lights their face.",
    },
  },
  {
    id: "shade",
    label: "Shade",
    caption: "See every shade as your eyes do.",
    media: {
      kind: "missing",
      label: "Shade comparison",
      note: "Needs a before and after pair: washed-out blush next to true color.",
    },
  },
];

export const smoothZoom = "Zoom so smooth, you'll barely notice.";

export const roadmap = {
  line: "Building for iPhone, iPad, and MacBook, with voice control.",
  devices: [
    { name: "iPhone", status: "Available" },
    { name: "iPad", status: "In progress" },
    { name: "MacBook", status: "In progress" },
    { name: "Voice control", status: "Planned" },
  ],
};

export const finalCta = {
  headline: "Try it on your own face.",
  cta: "Try Re-touch",
};

export const faq = [
  {
    q: "Why does the camera need permission?",
    a: "Only to show you the mirror and to adjust zoom and lighting. The camera feed is processed on your device, and Re-touch does not upload photos or video.",
  },
  {
    q: "Why is the screen brighter in dark places?",
    a: "That is auto lighting. In a dim spot Re-touch raises the screen brightness and turns on an edge light so you can see your face. Your original brightness comes back when you leave the app.",
  },
  {
    q: "How does gesture zoom work?",
    a: "Hold a brush near an eye or near your lips and the view zooms to that feature. Turning your head zooms to that side of your face.",
  },
  {
    q: "Does Re-touch save my photos?",
    a: "Only if you tap Save on a highlight. Kept only for the replay. Saved only if you download it. It goes to your Photos library, and Re-touch can add items but cannot read your library. Re-touch does not upload photos or video.",
  },
  {
    q: "Which devices are supported?",
    a: "iPhone running iOS 26 or later. iPad and Mac are in progress.",
  },
  {
    q: "How do I report a bug?",
    a: "Email us and describe what you were doing when it happened. Your device model and iOS version help.",
  },
];

export const privacy = {
  title: "Privacy Policy for Re-touch",
  intro:
    "Re-touch is an iOS app that works as a beauty mirror. It is made by Heptaseas. This policy explains what the app does with your information.",
  sections: [
    {
      heading: "Camera",
      body: "Re-touch uses the front camera to display a live mirror view and to adjust zoom and lighting. Camera video, face and hand tracking, and tool detection are processed on your device. Re-touch does not upload photos or video.",
    },
    {
      heading: "Photos",
      body: "If you tap Save on a highlight, Re-touch saves it to your Photos library. This uses add-only permission: Re-touch can add items but cannot read your library. Saved highlights stay on your device.",
    },
    {
      heading: "Screen brightness",
      body: "The app may temporarily raise your screen brightness in dim places and restores your original brightness when you leave the app.",
    },
    {
      heading: "Information we collect",
      body: "Re-touch has no account system and does not ask for your name, email, or phone number. To understand how the app is used and to improve it, we use Mixpanel analytics, which receives:",
      items: [
        "A random device identifier (not linked to your name or account)",
        "Approximate location (city, region, and country, derived from your IP address)",
        "Device and app information (model, iOS version, app version, screen size, carrier, Wi-Fi status)",
        "Usage events (such as opening the mirror, using auto zoom, changing light color, and completing onboarding)",
        "Technical data (such as device heat state and face brightness reading)",
      ],
      after:
        "We use this data only for analytics. We do not use it for advertising, do not sell it, and do not combine it with other companies' data to track you.",
    },
    {
      heading: "Third parties",
      body: "Re-touch contains no advertising. Analytics data is processed by Mixpanel on its servers, which may be outside Indonesia. See Mixpanel's privacy policy at",
      link: "https://mixpanel.com/legal/privacy-policy",
    },
    {
      heading: "Retention and your choices",
      body: "Analytics data is kept for 12 months. To ask us to delete the analytics data linked to your device, email us at the address below.",
    },
    {
      heading: "Your rights",
      body: "You may ask us to access, correct, or delete your data, or withdraw your consent, in line with applicable law, including Indonesia's Personal Data Protection Law (Law No. 27 of 2022).",
    },
    {
      heading: "Children",
      body: "Re-touch is not directed at children and we do not knowingly collect personal information from children.",
    },
    {
      heading: "Changes",
      body: "If this policy changes, the updated version will be posted on this page with a new date.",
    },
  ] as {
    heading: string;
    body: string;
    items?: string[];
    after?: string;
    link?: string;
  }[],
};
