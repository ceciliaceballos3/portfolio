import type { CaseStudy } from '../types/case-study';

export const cultrData: CaseStudy = {
  title: 'CULTR — Cecilia Ceballos',
  description: 'CULTR: A UI/UX case study designing a subscription experience for Gen Z. By Cecilia Ceballos.',
  slides: [

    // 1 — Hero
    {
      type: 'text-image',
      text: {
        pretitle: 'CULTR:',
        tagline: 'Designing a Subscription Experience for Gen Z',
      },
      image: { src: '/images/cultr/s1-hero.webp', alt: 'CULTR app shown on a phone against a dark editorial background', fit: 'contain' },
    },

    // 2 — The Challenge
    {
      type: 'text-image',
      text: {
        heading: 'The Challenge',
        body: `<p>CULTR is a fictional fashion and culture media company targeting Gen Z (Capstone 3 project). The brief: introduce a premium subscription tier without alienating the existing free user base.</p>
<p><strong>Goal:</strong> Design an onboarding and subscription experience that converts free users into paying subscribers naturally — without pressure or distrust.</p>`,
      },
      image: { src: '/images/cultr/s2-photo.webp', alt: 'Editorial street photography used as CULTR brand imagery', fit: 'cover' },
    },

    // 3 — Understanding the Landscape
    {
      type: 'text-image',
      text: {
        heading: 'Understanding the Landscape',
        body: `<p>I researched 6 platforms to understand what converts users — and what pushes them away:</p>
<ul>
  <li><strong>Spotify:</strong> Reducing mobile friction + student pricing drove 40% conversion.</li>
  <li><strong>The New Yorker:</strong> Metered paywall + identity appeal ("I'm the kind of person who reads this").</li>
  <li><strong>YouTube:</strong> Premium feels like relief from friction, not a reward.</li>
  <li><strong>Substack:</strong> Users pay out of loyalty to a voice, not a brand.</li>
  <li><strong>i-D / Dazed:</strong> Strong cultural credibility, but no subscription revenue model to show for it.</li>
</ul>`,
      },
      image: { src: '/images/cultr/s3-landscape.webp', alt: '3×2 grid of competitor platform screenshots from competitive analysis', fit: 'contain' },
    },

    // 4 — The Design Priorities
    {
      type: 'text-image',
      text: {
        heading: 'The Design Priorities',
        body: `<ol>
  <li><strong>Social-first onboarding:</strong> Let users feel the culture before asking them to commit.</li>
  <li><strong>Keep free tier valuable:</strong> Premium should feel like a natural upgrade, not a gate.</li>
  <li><strong>Sell identity, not features:</strong> "Be the person who supports independent culture."</li>
  <li><strong>Lower the barrier to first payment:</strong> A $1 trial removes the risk.</li>
</ol>`,
      },
      image: { src: '/images/cultr/s4-instagram.webp', alt: 'Instagram-style user profile screen illustrating social-first onboarding', fit: 'contain', mobileSrc: '/images/cultr/mobile/s4-instagram.webp' },
    },

    // 5 — The Visual Identity (dark background)
    {
      type: 'text-image',
      text: {
        heading: 'The Visual Identity',
        body: `<p>The logo connects the letters into a wordmark and icon — immediately recognisable at any size.</p>
<p>The colour palette is restrained, letting imagery take the lead. Typography and iconography are simple and clear, keeping the focus on the content.</p>`,
      },
      image: { src: '/images/cultr/s5-identity.webp', alt: 'CULTR design system showing logo, colour palette, and typography', fit: 'contain' },
      bgColor: '#3E2424',
      textColor: '#EFECD7',
    },

    // 6 — The Solution
    {
      type: 'text-image',
      text: {
        heading: 'The Solution',
        body: `<p>Three user scenarios drove the flow architecture:</p>
<ol>
  <li>New user who upgrades to premium immediately.</li>
  <li>New user who explores the free tier first.</li>
  <li>Returning free user who encounters a premium offer organically.</li>
</ol>`,
      },
      image: { src: '/images/cultr/s6-solution.webp', alt: 'User flow diagram showing three subscription conversion paths', fit: 'contain' },
    },

    // 7 — What Testing Revealed (Round 1 — wireframes, video)
    {
      type: 'text-image',
      text: {
        heading: 'What Testing Revealed',
        body: `<p><strong>Round 1 — Wireframes</strong></p>
<p>Flows were clear and easy to navigate. But users wanted more: free content to explore before committing, and previews of what premium actually looks like.</p>
<p>Key insight: <strong>trials and sneak peeks aren't workarounds — they're conversion tools.</strong></p>`,
      },
      image: {
        src: '/images/cultr/phone-frame.webp',
        alt: 'Screen recording of wireframe prototype on an iPhone',
        fit: 'contain',
        videoSrc: '/images/cultr/s7-wireframe.mp4',
      },
    },

    // 8 — What Testing Revealed (Round 2 — hi-fi, video)
    {
      type: 'text-image',
      text: {
        heading: 'What Testing Revealed',
        body: `<p><strong>Round 2 — High-Fidelity</strong></p>
<p>Realistic visuals changed everything. Asking users to pay before experiencing the product creates distrust. The flow that showed pricing immediately was the least well-received.</p>
<p><strong>Product-first flows performed significantly better.</strong></p>`,
      },
      image: {
        src: '/images/cultr/phone-frame.webp',
        alt: 'Screen recording of high-fidelity prototype on an iPhone',
        fit: 'contain',
        videoSrc: '/images/cultr/s8-testing.mp4',
      },
    },

    // 9 — The Iterations #1 (video)
    {
      type: 'text-image',
      text: {
        heading: 'The Iterations',
        body: `<p><strong>Problem 1:</strong> Being asked to pay for something you've never used feels off.</p>
<p><strong>Fix:</strong> Introduce premium after a while in the feed, via a soft pop-up modal — not as an opening screen.</p>`,
      },
      image: {
        src: '/images/cultr/phone-frame.webp',
        alt: 'Screen recording showing the soft premium modal in the feed',
        fit: 'contain',
        videoSrc: '/images/cultr/s9-iteration.mp4',
      },
    },

    // 10 — Before/After screens (full-image)
    {
      type: 'full-image',
      src: '/images/cultr/s10-screens.webp',
      alt: "Three phones: before (splash paywall) → choose plan → soft 'Wanna know what's in Premium?' modal",
      mobileSrc: '/images/cultr/mobile/s10-screens.webp',
    },

    // 11 — The Iterations #2 (video, no heading)
    {
      type: 'text-image',
      text: {
        body: `<p><strong>Problem 2:</strong> A text-heavy screen didn't inspire users to pay.</p>
<p><strong>Fix:</strong> Take users straight to the real feed and let naturally placed paywall banners make the case for premium.</p>`,
      },
      image: {
        src: '/images/cultr/phone-frame.webp',
        alt: 'Screen recording of the new feed with embedded paywall banners',
        fit: 'contain',
        videoSrc: '/images/cultr/s11-iteration.mp4',
      },
    },

    // 12 — Before/After screens (full-image)
    {
      type: 'full-image',
      src: '/images/cultr/s12-screens.webp',
      alt: 'Three phones: old paywall flow → new feed with banners → subscriber-only modal',
      mobileSrc: '/images/cultr/mobile/s12-screens.webp',
    },

    // 13 — The Iterations #3 (video, no heading)
    {
      type: 'text-image',
      text: {
        body: `<p><strong>Problem 3:</strong> The free sign-up flow felt too long before reaching any content.</p>
<p><strong>Fix:</strong> Let users enter with just an email — or skip entirely — and go straight to the feed. Ask for commitment later.</p>`,
      },
      image: {
        src: '/images/cultr/phone-frame.webp',
        alt: 'Screen recording of the streamlined sign-up entering directly into the feed',
        fit: 'contain',
        videoSrc: '/images/cultr/s13-iteration.mp4',
      },
    },

    // 14 — Before/After screens (full-image)
    {
      type: 'full-image',
      src: '/images/cultr/s14-screens.webp',
      alt: 'Three phones: before → new welcome feed → daily digest end screen',
      mobileSrc: '/images/cultr/mobile/s14-screens.webp',
    },

    // 15 — What I Learned
    {
      type: 'text-image',
      text: {
        heading: 'What I Learned',
        body: `<p>Designing for conversion isn't about building a better paywall — it's about building trust.</p>
<p>Free trials, sneak peeks, and soft prompts aren't workarounds. They're the product. The best subscription experience is one where paying feels like a natural next step, not a demand.</p>`,
      },
      image: { src: '/images/cultr/s15-learned.webp', alt: 'Two phone screens showing the final CULTR subscription experience', fit: 'contain', mobileSrc: '/images/cultr/mobile/s15-learned.webp' },
    },

    // 16 — Thank You (blank left col, text right)
    {
      type: 'text-image',
      text: {
        heading: 'Thank You',
        body: `<ul>
  <li>Tools: Figma, Figjam, Quicktime.</li>
  <li>Methods: Competitive analysis, user journey mapping, user flow design, wireframing, high-fidelity prototyping, two rounds of usability testing, design iteration.</li>
</ul>`,
      },
      image: null,
      imageLeft: true,
    },

  ],
};
