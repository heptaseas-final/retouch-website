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
  headline: "Turn your phone into a real mirror with Retouch.",
  description:
    "An ergonomic beauty mirror for on-the-go makeup, with gesture zoom, auto lighting, and true-to-eye shades, so your blush never goes invisible again.",
  cta: "Try Retouch",
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
    caption: "Hold the brush near your eye. Retouch zooms in for you.",
    media: {
      kind: "video",
      src: zoomEyeLoop,
      alt: "An illustrated brush approaches an eye and the mirror view zooms to it.",
    },
  },
  {
    id: "light",
    label: "Light",
    caption: "Dim spot? Retouch lights you up.",
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
  cta: "Try Retouch",
};

export const faq = [
  {
    q: "Why does the camera need permission?",
    a: "Only to show you the mirror. The camera feed stays on your device. Nothing is saved and nothing is sent anywhere.",
  },
  {
    q: "Why is the screen brighter in dark places?",
    a: "That is auto lighting. In a dim spot Retouch raises the screen brightness and turns on an edge light so you can see your face. Your original brightness comes back when you leave the app.",
  },
  {
    q: "How does gesture zoom work?",
    a: "Hold a brush near an eye or near your lips and the view zooms to that feature. Turning your head zooms to that side of your face.",
  },
  {
    q: "Does Retouch save my photos?",
    a: "No. Retouch does not record, save, or transmit photos or video.",
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
  title: "Privacy Policy for Retouch",
  intro:
    "Retouch is an iOS app that works as a beauty mirror. This policy explains what the app does with your information.",
  sections: [
    {
      heading: "Camera",
      body: "Retouch uses the front camera to display a live mirror view and to adjust zoom and lighting. All camera processing happens on your device. Retouch does not record, save, or transmit photos or video.",
    },
    {
      heading: "Data collection",
      body: "Retouch does not collect, store, or share personal data. The app has no account system and no analytics.",
    },
    {
      heading: "Third parties",
      body: "Retouch contains no advertising and does not share data with third parties.",
    },
    {
      heading: "Screen brightness",
      body: "The app may temporarily raise your screen brightness in dim places and restores your original brightness when you leave the app.",
    },
    {
      heading: "Children",
      body: "Retouch does not knowingly collect information from anyone, including children.",
    },
    {
      heading: "Changes",
      body: "If this policy changes, the updated version will be posted on this page with a new date.",
    },
  ],
};
