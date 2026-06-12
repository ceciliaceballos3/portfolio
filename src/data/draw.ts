import type { CaseStudy } from '../types/case-study';

export const drawData: CaseStudy = {
  title: 'DRAW — Cecilia Ceballos',
  description: 'DRAW: A UI/UX case study helping people who keep giving up on drawing. By Cecilia Ceballos.',
  slides: [

    // 1 — Hero
    {
      type: 'text-image',
      text: {
        pretitle: 'DRAW:',
        tagline: 'Helping people who keep giving up on drawing',
      },
      image: { src: '/images/draw/s1-hero.webp', alt: 'DRAW app shown on a phone resting in a sketchbook', fit: 'contain' },
    },

    // 2 — The cycle everyone knows
    {
      type: 'text-image',
      text: {
        heading: 'The cycle everyone knows',
        body: `<p>You download a tutorial app.</p>
<p>Watch a few videos.</p>
<p>Try to follow along.</p>
<p>Your sketch looks nothing like the instructor's.</p>
<p>You check Instagram, see flawless illustrations, and think:</p>
<p><em>I'll never get there.</em></p>
<p>A week passes. You haven't touched your sketchbook.</p>
<p>This cycle repeats for millions of aspiring artists, I designed <strong>Draw</strong> to break it.</p>`,
      },
      image: { src: '/images/draw/s2-photo.webp', alt: 'Sketchbook open on a desk with drawing tools', fit: 'cover' },
    },

    // 3 — What I set out to learn
    {
      type: 'text-image',
      text: {
        heading: 'What I set out to learn',
        body: `<p>Before designing anything, I needed to understand why this cycle keeps happening.</p>
<p><strong>The research</strong></p>
<ul>
  <li>Secondary research on habit formation and creative skill development.</li>
  <li>5 in-depth interviews with people trying to improve their drawing skills.</li>
  <li>Affinity mapping to find patterns across all the data.</li>
</ul>`,
      },
      image: { src: '/images/draw/s3-interviews.webp', alt: 'Three video call interview screenshots with research participants', fit: 'contain' },
    },

    // 4 — What the research revealed
    {
      type: 'text-image',
      text: {
        heading: 'What the research revealed',
        body: `<p>The real barriers aren't what you'd expect. People don't fail because they lack talent or tutorials.</p>
<p>They fail because:</p>
<ul>
  <li>They believe improvement requires hours they don't have.</li>
  <li>They measure success by the wrong metric. Every practice session gets judged by the final drawing. Bad result = motivation gone.</li>
  <li>They have no way to see their own progress. Without visible improvement, consistency feels pointless.</li>
  <li>Online content helps and hurts; endless tutorials create overwhelm, polished social media art creates impossible standards.</li>
</ul>`,
      },
      image: { src: '/images/draw/s4-affinity.webp', alt: 'Affinity map showing research findings organised by theme', fit: 'contain' },
    },

    // 5 — Two people, one problem
    {
      type: 'text-image',
      text: {
        heading: 'Two people, one problem',
        body: `<p>From the research, two distinct users emerged:</p>
<p><strong>Antonella, the aspiring professional</strong></p>
<p>Graphic designer in New York. Dreams of freelance illustration. Follows artists on Instagram and feels miles behind. Believes she needs hours of practice to catch up. Draws every other week, frustrated each time.</p>
<p><strong>Nick, the screen-fatigued explorer</strong></p>
<p>Marketing professional, fully remote. Spends evenings scrolling. Remembers loving to draw as a kid. Wants an analog hobby but doesn't know where to start. Lower pressure, but still compares himself to what he sees online.</p>
<p>Different motivations. Same pain points.</p>`,
      },
      image: { src: '/images/draw/s5-personas.webp', alt: 'User persona illustrations for Antonella and Nick', fit: 'contain' },
    },

    // 6 — Reframing the problem
    {
      type: 'text-image',
      text: {
        heading: 'Reframing the problem',
        body: `<p>The interviews made something clear: users don't just want to "learn to draw." They want to:</p>
<ul>
  <li>Live more creative lives.</li>
  <li>Feel like they're growing.</li>
  <li>Have a richer analog life.</li>
</ul>
<p><strong>The questions I needed to answer</strong></p>
<ul>
  <li>How might we show people that short, consistent practice beats long, sporadic sessions?</li>
  <li>How might we shift focus from end results to the act of practicing?</li>
  <li>How might we make progress visible without enabling comparison?</li>
  <li>How might we give structure without removing the joy?</li>
</ul>`,
      },
      image: { src: '/images/draw/s6-persona.webp', alt: 'Photo of a person drawing in a sketchbook', fit: 'cover' },
    },

    // 7 — Designing the solution
    {
      type: 'text-image',
      text: {
        heading: 'Designing the solution',
        body: `<p><strong>Four core tasks for the MVP</strong></p>
<ol>
  <li>Create a personalized routine: adapting to time, interests, and skill level.</li>
  <li>Stay accountable: tracking consistency, not perfection.</li>
  <li>Get guidance: structured practices, not endless browsing.</li>
  <li>See progress: comparing to yourself, not others.</li>
</ol>
<p><strong>From flows to screens</strong></p>
<p>I started with user flows, then sketched on paper, then moved to digital wireframes. Each round stripped away anything that didn't directly help the user succeed.</p>
<p>The test I applied to every element: Does this help them practice, or distract from it?</p>`,
      },
      image: { src: '/images/draw/s7-solution.webp', alt: 'Sketchbook with hand-drawn wireframes and user flow diagrams', fit: 'contain' },
    },

    // 8 — Wireframe sketches (full-image)
    {
      type: 'full-image',
      src: '/images/draw/s8-wireframes.webp',
      alt: 'Four hand-drawn wireframe spreads',
      mobileSrc: '/images/draw/mobile/s8-wireframes.webp',
    },

    // 9 — Digital wireframe screens (full-image)
    {
      type: 'full-image',
      src: '/images/draw/s9-wireframes.webp',
      alt: 'Four digital wireframe screens',
      mobileSrc: '/images/draw/mobile/s9-wireframes.webp',
    },

    // 10 — Giving Draw a personality
    {
      type: 'text-image',
      text: {
        heading: 'Giving Draw a personality',
        body: `<p>The visual identity needed to say: Relax. This is play, not pressure.</p>
<ul>
  <li><strong>Logo:</strong> A pencil doodle that forms the word "Draw".</li>
  <li><strong>Colors:</strong> Vibrant and unexpected, creativity should feel energising.</li>
  <li><strong>Shapes:</strong> Round, soft, approachable.</li>
  <li><strong>Illustrations:</strong> Hand-drawn marks that celebrate imperfection.</li>
</ul>
<p>The goal was to make users feel free to experiment. No judgment. No comparison. Just practice.</p>`,
      },
      image: { src: '/images/draw/s10-logo.webp', alt: 'Draw logo — a pencil doodle forming the word DRAW', fit: 'contain' },
      bgColor: '#9cd08a',
    },

    // 11 — Design system (full-image)
    {
      type: 'full-image',
      src: '/images/draw/s11-design-system.webp',
      alt: 'DRAW colour palette, typography, components and hand-drawn illustration set',
      mobileSrc: '/images/draw/mobile/s11-design-system.webp',
    },

    // 12 — The final product
    {
      type: 'text-image',
      text: {
        heading: 'The final product',
        body: `<p>High-fidelity screens for all four core flows, built into working prototypes.</p>
<ol>
  <li>Routine creation: personalised to time available and interests.</li>
  <li>Daily practice: guided sessions with clear start/end.</li>
  <li>Practice library: curated, not overwhelming.</li>
  <li>Progress tracking: consistency and personal growth.</li>
</ol>`,
      },
      image: { src: '/images/draw/s12-phone.webp', alt: 'iPhone mockup showing the Draw app routine confirmation screen', fit: 'contain', mobileSrc: '/images/draw/mobile/s12-phone.webp' },
    },

    // 13 — 4-phone hi-fi grid (full-image)
    {
      type: 'full-image',
      src: '/images/draw/slide-13.webp',
      alt: 'Four hi-fidelity phone screens displayed side by side',
      mobileSrc: '/images/draw/mobile/slide-13.webp',
    },

    // 14 — Testing with real users
    {
      type: 'text-image',
      text: {
        heading: 'Testing with real users',
        body: `<p><strong>What I learned (Round 1)</strong></p>
<ol>
  <li>Users expected routine settings in Settings: moved routine controls there, and eliminated Routine from tab bar.</li>
  <li>App Tour on Onboarding felt confusing: streamlined the tour.</li>
  <li>Unclear what materials were needed: added a notification before their first ever practice.</li>
  <li>Play button got lost visually: made it more prominent.</li>
</ol>
<p><strong>Validating the fixes (Round 2)</strong></p>
<p>Retested to confirm the changes resolved the friction.</p>`,
      },
      image: { src: '/images/draw/s14-phone.webp', alt: 'Draw app screen showing usability test revisions', fit: 'contain', mobileSrc: '/images/draw/mobile/s14-phone.webp' },
    },

    // 15 — Revised screens (full-image)
    {
      type: 'full-image',
      src: '/images/draw/slide-15.webp',
      alt: 'Four phone screens showing the revised UI after testing',
      mobileSrc: '/images/draw/mobile/slide-15.webp',
    },

    // 16 — What I learned
    {
      type: 'text-image',
      text: {
        heading: 'What I learned',
        body: `<ul>
  <li><strong>Research changes the problem.</strong> I started thinking users needed better content but they needed structure.</li>
  <li><strong>Personas are decision tools.</strong> Antonella and Nick helped me balance depth and approachability.</li>
  <li><strong>Subtraction is design work.</strong> Removing features that enable comparison was as important as building features that support practice.</li>
</ul>`,
      },
      image: { src: '/images/draw/s16-photo.webp', alt: 'Hands holding an open sketchbook', fit: 'cover' },
    },

    // 17 — Next steps
    {
      type: 'text-image',
      text: {
        heading: "Next steps I'd explore",
        body: `<ul>
  <li>Explore social features that encourage without enabling comparison.</li>
  <li>Design streak recovery to reduce pressure.</li>
  <li>Alternative ways to visualize progress.</li>
</ul>`,
      },
      image: { src: '/images/draw/s17-phone.webp', alt: 'Draw app screen showing a next-steps feature', fit: 'contain', mobileSrc: '/images/draw/mobile/s17-phone.webp' },
    },

    // 18 — Thank you (blank left col, text right)
    {
      type: 'text-image',
      text: {
        heading: 'Thank You',
        body: `<ul>
  <li>Tools used: Figma, FigJam, Quicktime</li>
  <li>Methods: Secondary research, user interviews, affinity mapping, personas, HMW statements, flowcharts, wireframes, hi-fi mockups, user testing.</li>
</ul>`,
      },
      image: null,
      imageLeft: true,
    },

  ],
};
