import type { CaseStudy } from '../types/case-study';

export const tiriVeloData: CaseStudy = {
  title: 'TiriVelo — Cecilia Ceballos',
  description: 'TiriVelo: A UI/UX case study designing an admin dashboard for a pet services booking platform. By Cecilia Ceballos.',
  slides: [

    // 1 — Hero (narrow-text, 1/3 | 2/3)
    {
      type: 'narrow-text',
      text: {
        pretitle: 'TiriVelo',
        heading: 'Admin Dashboard – Booking Flow',
        tagline: 'Designing the system behind the service',
      },
      image: {
        src: '/images/tirivelo/s1-hero.webp',
        alt: 'Admin dashboard overview screen for TiriVelo booking management',
        fit: 'contain',
        mobileSrc: '/images/tirivelo/mobile/s1-hero.webp',
      },
    },

    // 2 — The context (narrow-text, 1/3 | 2/3)
    {
      type: 'narrow-text',
      text: {
        heading: 'The context',
        body: `<p>The IDP is the final phase of the Springboard UI/UX Bootcamp, a one-month industry internship where students work with real companies to build job-ready portfolio pieces.</p>
<p><strong>The company:</strong> TiriVelo, a Canadian startup connecting pet owners with dog walkers and pet sitters.</p>
<p><strong>The assignment:</strong> design the internal admin system that keeps every booking on track.</p>`,
      },
      image: {
        src: '/images/tirivelo/s2-photo.webp',
        alt: 'Editorial photo of a dog walker with dogs in a park',
        fit: 'cover',
      },
    },

    // 3 — The brief (narrow-text, 1/3 | 2/3)
    {
      type: 'narrow-text',
      text: {
        heading: 'The brief',
        body: `<p>When something happens on the platform, what does admin need to do?</p>
<p>My job was to design that operational layer:</p>
<ul>
  <li>How bookings are tracked from request to payout.</li>
  <li>How admin monitors active, upcoming, and completed bookings.</li>
  <li>How issues like cancellations, no-shows or disputes get surfaced and resolved.</li>
</ul>
<p>Focus: visibility + control.</p>`,
      },
      image: {
        src: '/images/tirivelo/s3-services.webp',
        alt: 'TiriVelo platform service overview showing dog walking and pet sitting categories',
        fit: 'contain',
      },
    },

    // 4 — Where I started (narrow-text, 1/3 | 2/3)
    {
      type: 'narrow-text',
      text: {
        heading: 'Where I started',
        body: `<p><em>Understanding the platform before designing for it</em></p>
<p>Before touching Figma, I read everything:</p>
<ul>
  <li>Platform policies and operational rules.</li>
  <li>Admin dashboard instructions.</li>
  <li>Service life cycle and operational workflows.</li>
  <li>Roles, permissions, and system logic.</li>
</ul>
<p>Then I reviewed the existing designs: the Admin Dashboard Figma files, prototypes, and the website and mobile designs from other teams.</p>
<p>The goal was to find where the documented workflows and the existing UI aligned and where they didn't.</p>`,
      },
      image: {
        src: '/images/tirivelo/s4-screens.webp',
        alt: 'Existing TiriVelo admin and mobile screens used as reference during research',
        fit: 'contain',
        mobileSrc: '/images/tirivelo/mobile/s4-screens.webp',
      },
    },

    // 5 — Making it visible (stacked, 2-col text top | full-width image bottom)
    {
      type: 'stacked',
      heading: 'Making it visible',
      leftText: `<p>After reading all the documentation and reviewing the designs, I built a detailed workflow map of the entire booking life cycle.</p>`,
      rightText: `<p>This gave me:</p>
<ul>
  <li>A visual reference for every state transition.</li>
  <li>Clarity on which steps required admin attention and which were automatic.</li>
  <li>A foundation for designing screens that matched actual system logic – not assumptions.</li>
</ul>`,
      image: {
        src: '/images/tirivelo/s5-workflow.webp',
        alt: 'Full booking life cycle workflow map showing all states and transitions',
        mobileSrc: '/images/tirivelo/mobile/s5-workflow.webp',
        mobileScrollable: true,
      },
    },

    // 6 — Building a shared language (stacked)
    {
      type: 'stacked',
      heading: 'Building a shared language',
      leftText: `<p>Naming things well is a design decision. Admins have to learn these fast. The labels have to do the work at a glance.</p>`,
      rightText: `<p>Each lifecycle stage needed a name that was short, descriptive, and immediately readable as a colored label across the entire platform — not just bookings.</p>`,
      image: {
        src: '/images/tirivelo/s6-status.webp',
        alt: 'Booking status label system showing all lifecycle stages with color coding',
        mobileSrc: '/images/tirivelo/mobile/s6-status.webp',
      },
    },

    // 7 — When things go wrong (stacked, single left col)
    {
      type: 'stacked',
      heading: 'When things go wrong',
      leftText: `<p>The happy path is the easy part. Real operations run on edge cases. I designed screens for every state where the expected path breaks down:</p>`,
      image: {
        src: '/images/tirivelo/s7-errors.webp',
        alt: 'Table of exception states — cancellations, no-shows, disputes, and their variants',
        mobileSrc: '/images/tirivelo/mobile/s7-errors.webp',
      },
    },

    // 8 — An additional layer (stacked, single left col)
    {
      type: 'stacked',
      heading: 'An additional layer',
      leftText: `<p>Sometimes the state alone isn't enough. Flags sit on top of status labels to surface specific, time-sensitive issues without changing the booking's core state.</p>`,
      image: {
        src: '/images/tirivelo/s8-flags.webp',
        alt: 'Flag system overlay showing SLA breach, evidence pending, and escalation indicators',
        mobileSrc: '/images/tirivelo/mobile/s8-flags.webp',
      },
    },

    // 9 — The bookings dashboard (stacked)
    {
      type: 'stacked',
      heading: 'The bookings dashboard',
      leftText: `<p>The dashboard gives admins a clear overview and the ability to focus on what needs attention. Four filter cards:</p>`,
      rightText: `<p>The colored labels on Status and Flags columns make them the most visible and is where the most important information is.</p>`,
      image: {
        src: '/images/tirivelo/s9-dashboard.webp',
        alt: 'Bookings dashboard showing Active, Upcoming, Completed, and Canceled filter tabs',
        mobileSrc: '/images/tirivelo/mobile/s9-dashboard.webp',
      },
    },

    // 10 — The booking detail view (stacked-split)
    {
      type: 'stacked-split',
      heading: 'The booking detail view',
      topLeftText: `<p>The same structure, different content and actions at every state.</p>`,
      topRightText: `<p>Every booking detail page shares the same six-section layout. What changes is what's shown and what admin can do.</p>`,
      bottomText: `<ol>
  <li><strong>Booking Summary:</strong> service type, time, location, owner, provider, pet, payment method. Right column adapts to current state.</li>
  <li><strong>Timeline:</strong> chronological record of state transitions.</li>
  <li><strong>Documentation:</strong> the evidence trail. GPS check-in/out, care reports, dispute records, cancellation logs. Most critical when issues need to be reconstructed.</li>
  <li><strong>Contact &amp; Intervene:</strong> messaging plus state-appropriate admin actions.</li>
  <li><strong>Linked Records:</strong> owner and provider history, prior interactions between this pair. Surfaces context before admin takes action.</li>
  <li><strong>Audit &amp; Notify:</strong> admin notes and resolution log across the life cycle.</li>
</ol>`,
      image: {
        src: '/images/tirivelo/s10-detail.webp',
        alt: 'Booking detail page showing all six sections for an active booking state',
        mobileSrc: '/images/tirivelo/mobile/s10-detail.webp',
      },
    },

    // 11 — The happy path in practice (stacked, single left col)
    {
      type: 'stacked',
      heading: 'The happy path in practice',
      leftText: `<p>Most bookings need no admin attention at all. The system handles the transitions automatically. Admin visibility matters here, not because action is required, but because when something does go wrong, the paper trail is already there.</p>`,
      image: {
        src: '/images/tirivelo/s11-happy.webp',
        alt: 'Booking detail screens for the confirmed, in-progress, and completed states',
        mobileSrc: '/images/tirivelo/mobile/s11-happy.webp',
      },
    },

    // 12 — Disputed (stacked-split)
    {
      type: 'stacked-split',
      heading: 'Disputed, the hardest state to design',
      topLeftText: `<p>Payment frozen, two parties disagreeing and a 5-business-day clock. The Disputed state is the most admin-intensive in the system. Either party can file a dispute: service quality, billing or no-show contestation.</p>`,
      topRightText: `<p>The architecture is in place: investigation cards, three-way decision interface, SLA mechanics. The resolution modals, evidence linking, notification copy… are flagged for the next designer.</p>`,
      bottomText: `<p><strong>Admin must:</strong></p>
<ol>
  <li>Review evidence from both parties.</li>
  <li>Decide in favor of the owner, the provider, or split.</li>
  <li>Resolve within SLA or escalate to senior support.</li>
</ol>`,
      image: {
        src: '/images/tirivelo/s12-disputed.webp',
        alt: 'Disputed booking detail showing investigation cards and three-way resolution interface',
        mobileSrc: '/images/tirivelo/mobile/s12-disputed.webp',
      },
    },

    // 13 — What I handed off (stacked-split)
    {
      type: 'stacked-split',
      heading: 'What I handed off',
      topLeftText: `<p>All major state variants are designed, that means the full booking life cycle is covered. The next designer can focus on:</p>`,
      bottomText: `<ol>
  <li>Appeal sidebar for No-Show states: evidence review and decision interface, shared component across both variants.</li>
  <li>Audit &amp; Notify: state-specific fields and required inputs, especially for Disputed and No-Show.</li>
  <li>Documentation tabs: Conversation Log, Care Report, and GPS Data need a deeper pass; some may be conditional by state.</li>
  <li>Modal designs: Contact &amp; Intervene hold the follow-up actions, how do each one works.</li>
  <li>Disputed state refinement: resolution modal specifics, given the financial and potential legal stakes.</li>
</ol>`,
      image: {
        src: '/images/tirivelo/s13-handoff.webp',
        alt: 'Handoff overview showing all designed state variants across the booking life cycle',
        mobileSrc: '/images/tirivelo/mobile/s13-handoff.webp',
      },
    },

    // 14 — Reflection (narrow-text, 1/3 | 2/3)
    {
      type: 'narrow-text',
      text: {
        heading: 'Reflection',
        body: `<p><em>What this project taught me about designing for operations</em></p>
<p>Designing for admin users is different from designing for consumers. The goal isn't delight — it's clarity under pressure.</p>
<p>Every design decision I made came back to one question: when something goes wrong and an admin needs to resolve it fast, does this screen give them what they need?</p>
<p>The workflow map wasn't just a deliverable. It was the thinking tool that made everything else possible.</p>`,
      },
      image: {
        src: '/images/tirivelo/s14-reflection.webp',
        alt: 'MacBook mockup showing the TiriVelo admin dashboard in a workspace setting',
        fit: 'contain',
        mobileSrc: '/images/tirivelo/mobile/s14-reflection.webp',
      },
    },

    // 15 — Thank You (blank left col, text right)
    {
      type: 'text-image',
      text: {
        heading: 'Thank You',
        body: `<ul>
  <li>Tools used: Figma, Figjam, Quicktime.</li>
  <li>Methods: Documentation analysis, flow chart, high-fidelity prototyping, team presentation, design iteration.</li>
</ul>`,
      },
      image: null,
      imageLeft: true,
    },

  ],
};
