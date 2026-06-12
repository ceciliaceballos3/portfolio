import type { CaseStudy } from '../types/case-study';

export const savrData: CaseStudy = {
  title: 'SAVR — Cecilia Ceballos',
  description: 'SAVR: A UI/UX case study making complex recipes easy to follow. By Cecilia Ceballos.',
  slides: [

    // 1 — Hero
    {
      type: 'text-image',
      text: {
        pretitle: 'SAVR:',
        tagline: 'Making Complex Recipes Easy to Follow',
      },
      image: { src: '/images/savr/s1-hero.webp', alt: 'SAVR app shown on a phone on a kitchen counter', fit: 'contain' },
    },

    // 2 — The problem
    {
      type: 'text-image',
      text: {
        heading: 'The problem',
        body: `<p>Savr's active community loves the app, but complex recipes are causing frustration.</p>
<ul>
  <li>Confusing step order.</li>
  <li>Difficult timing coordination.</li>
  <li>Unknown techniques with no visual guidance.</li>
  <li>Missing preparation before cooking begins.</li>
</ul>
<p>The challenge: Make cooking with the app easy and enjoyable, even for the most complicated dishes.</p>
<p>Method used: modified GV Design Sprint.</p>`,
      },
      image: { src: '/images/savr/s2-photo.webp', alt: 'Affinity map of sticky notes from user research session', fit: 'cover' },
    },

    // 3 — Day 1: Map
    {
      type: 'text-image',
      text: {
        heading: 'Day 1: Map',
        body: `<p><strong>Long-term goal:</strong> No matter how complex or new the recipe is, Home Chefs get amazing results every time.</p>
<p>User Journey:</p>
<ol>
  <li>Download the app.</li>
  <li>Browse recipes.</li>
  <li>Choose a dish.</li>
  <li>Check Ingredients and Kitchenware lists.</li>
  <li>Complete Pre-Cooking Steps (visual guidance).</li>
  <li>Follow Cooking Steps (visual + written format).</li>
  <li>Finish with confidence.</li>
  <li>Return to Savr regularly.</li>
</ol>`,
      },
      image: { src: '/images/savr/s3-map.webp', alt: 'Journey map with sticky notes on a whiteboard', fit: 'contain', mobileSrc: '/images/savr/mobile/s3-map.webp' },
    },

    // 4 — Day 2: Sketch
    {
      type: 'text-image',
      text: {
        heading: 'Day 2: Sketch',
        body: `<p><strong>Lightning Demos</strong></p>
<ul>
  <li><strong>Tasty:</strong> Video for each step + written instructions. Swipe to navigate.</li>
  <li><strong>Kitchen Stories:</strong> Progress indicator showing current position. Timers appear when needed. Time divided into Preparation, Baking, and Resting.</li>
</ul>
<p><strong>Key insight:</strong> Users need to know what to expect before they start.</p>`,
      },
      image: { src: '/images/savr/s4-demos.webp', alt: '2×4 grid of competitor app screenshots from lightning demo research', fit: 'contain' },
    },

    // 5 — Crazy 8's
    {
      type: 'text-image',
      text: {
        heading: "Crazy 8's",
        body: `<ol>
  <li>Clickable step images with numbers.</li>
  <li>Three-column grid (number, text, image).</li>
  <li>Video on top, written steps below.</li>
  <li>Expandable horizontal tabs ←</li>
  <li>Video + text for each step (vertical scroll).</li>
  <li>Step bar + video player.</li>
  <li>Two horizontal scroll bars (pre-cooking / cooking).</li>
  <li>Instagram-style grid.</li>
</ol>`,
      },
      image: { src: '/images/savr/s5-crazy8s.webp', alt: 'Eight rapid sketch concepts for the recipe step layout', fit: 'contain', mobileSrc: '/images/savr/mobile/s5-crazy8s.webp' },
    },

    // 6 — Solution Sketch
    {
      type: 'text-image',
      text: {
        heading: 'Solution Sketch',
        body: `<ul>
  <li><strong>Chosen concept:</strong> Expandable tabs.</li>
  <li><strong>Sections:</strong> Ingredients | Utensils | Pre-Cooking Steps | Cooking Steps | Reviews | Similar Recipes.</li>
</ul>
<p>Each section opens to reveal:</p>
<ul>
  <li>Visual content (photo/video).</li>
  <li>Written instructions.</li>
  <li>Step navigation (numbered + arrows).</li>
</ul>`,
      },
      image: { src: '/images/savr/s6-sketch.webp', alt: 'Three hand-drawn wireframe sketches of the expandable-tab solution', fit: 'contain', mobileSrc: '/images/savr/mobile/s6-sketch.webp' },
    },

    // 7 — Day 3: Storyboard
    {
      type: 'text-image',
      text: {
        heading: 'Day 3: Storyboard',
        body: `<p><strong>Why Expandable Sections?</strong></p>
<ul>
  <li><strong>Visibility:</strong> Users see all available information upfront — nothing gets overlooked when scrolling.</li>
  <li><strong>Visual guidance:</strong> Images or video for every step helps users learn new techniques and verify progress.</li>
  <li><strong>Pre-cooking section:</strong> Separates time-sensitive cooking from preparation (chop, wash, soak, preheat).</li>
</ul>`,
      },
      image: { src: '/images/savr/s7-storyboard.webp', alt: 'Storyboard sketches mapping the full user journey through the recipe flow', fit: 'contain', mobileSrc: '/images/savr/mobile/s7-storyboard.webp' },
    },

    // 8 — Storyboard spread (full-image)
    {
      type: 'full-image',
      src: '/images/savr/s8-storyboard.webp',
      alt: 'Two full storyboard sheets showing the annotated recipe step sequence',
      mobileSrc: '/images/savr/mobile/s8-storyboard.webp',
    },

    // 9 — Day 4: Prototype
    {
      type: 'text-image',
      text: {
        heading: 'Day 4: Prototype',
        body: `<p>Built in Figma with minimal elements for honest functionality feedback.</p>
<p><strong>Testing goal:</strong> Do users find expandable sections + horizontal navigation easier than traditional vertical scrolling?</p>`,
      },
      image: { src: '/images/savr/s9-prototype.webp', alt: 'Two prototype phone screens showing the expandable recipe tab layout', fit: 'contain', mobileSrc: '/images/savr/mobile/s9-prototype.webp' },
    },

    // 10 — 4 prototype screens (full-image)
    {
      type: 'full-image',
      src: '/images/savr/s10-screens.webp',
      alt: 'Four prototype screens: Utensils, Pre-Cooking steps, Cooking steps with timer, Bon Appétit',
      mobileSrc: '/images/savr/mobile/s10-screens.webp',
    },

    // 11 — Day 5: Validate
    {
      type: 'text-image',
      text: {
        heading: 'Day 5: Validate',
        body: `<p>I interviewed five participants with different cooking habits and tech comfort levels:</p>
<ul>
  <li>A 70-year-old engineer who bakes sourdough weekly.</li>
  <li>A 71-year-old daily cook who learns from YouTube.</li>
  <li>A 42-year-old IT specialist who meal preps on weekdays.</li>
  <li>A 40-year-old mom constantly finding new recipes for her kids.</li>
  <li>A 37-year-old musician who cooks to relax on weekends.</li>
</ul>`,
      },
      image: { src: '/images/savr/s11-validate.webp', alt: 'Three overlapping photos of usability test participants', fit: 'cover', mobileSrc: '/images/savr/mobile/s11-validate.webp' },
    },

    // 12 — Key Findings
    {
      type: 'text-image',
      text: {
        heading: 'Key Findings',
        body: `<ul>
  <li>✓ <strong>Expandable sections work</strong> — Users understood them after initial scroll attempt. Being "forced" to read sections helped them find all necessary info.</li>
  <li>✓ <strong>Pre-Cooking section valued</strong> — Users appreciated this addition not found in most apps.</li>
  <li>⚠ <strong>Navigation preference:</strong> Users tapped step numbers instead of arrows — consider adding both options or reevaluate conflicting navigation patterns (expand/collapse + swipe).</li>
  <li>⚠ <strong>Timer visibility issue:</strong> No participant noticed the timer until prompted. Needs more prominent design.</li>
</ul>`,
      },
      image: { src: '/images/savr/s12-findings.webp', alt: 'Two phone screens showing the recipe interface evaluated during testing', fit: 'contain', mobileSrc: '/images/savr/mobile/s12-findings.webp' },
    },

    // 13 — Next Steps
    {
      type: 'text-image',
      text: {
        heading: 'Next Steps',
        body: `<ol>
  <li>Make timer more visible (icon, color, size).</li>
  <li>Add number navigation alongside arrows before considering change navigation pattern.</li>
  <li>Improve navigation flows.</li>
  <li>Test with users while actually cooking.</li>
  <li>Iterate on visual hierarchy.</li>
</ol>`,
      },
      image: { src: '/images/savr/s13-nextsteps.webp', alt: 'Two phone screens highlighting next-step improvements to the SAVR recipe flow', fit: 'contain', mobileSrc: '/images/savr/mobile/s13-nextsteps.webp' },
    },

    // 14 — 4 revised screens (full-image)
    {
      type: 'full-image',
      src: '/images/savr/s14-screens.webp',
      alt: 'Four revised screens showing cooking steps, timer, and Bon Appétit completion screen',
      mobileSrc: '/images/savr/mobile/s14-screens.webp',
    },

    // 15 — 4 final screens (full-image)
    {
      type: 'full-image',
      src: '/images/savr/s15-screens.webp',
      alt: 'Four final screens showing recipe browsing, ingredients, and similar recipes',
      mobileSrc: '/images/savr/mobile/s15-screens.webp',
    },

    // 16 — Thank You (blank left col, text right)
    {
      type: 'text-image',
      text: {
        heading: 'Thank You',
        body: `<ul>
  <li>Tools used: Figma, Figjam, Fresco.</li>
  <li>Methods: Google Ventures Design sprint.</li>
</ul>`,
      },
      image: null,
      imageLeft: true,
    },

  ],
};
