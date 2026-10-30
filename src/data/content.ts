import type { Testimonial, ResourceItem, PodcastEpisode, EventItem } from '../types';
import { LINKS } from './links';

/** Client meeting (Oct 2026) — shared labels */
export const FINANCIAL_SUPPORT_CTA = 'Financial support for going self-employed';
export const PODCAST_NAME = 'Estate Agency Done Properly';export const SUNDAY_TIMES_BADGE_TITLE = 'Sunday Times 100';
export const SUNDAY_TIMES_BADGE_SUBLINE =
  "Britain's fastest-growing privately owned businesses";
export const SUNDAY_TIMES_ABOUT_LINE =
  "TAUK is ranked #74 on The Sunday Times 100 — Britain's fastest-growing privately owned businesses (2026).";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'james-hall',
    name: 'James Hall',
    role: 'Self-Employed Partner Agent',
    badge: '200% Increase in Property Sales',
    headlineResult: '200% Increase in Property Sales & Radical Confidence',
    content:
      "Chris Buckler is a true visionary. From the moment I met him, his passion and drive stood out — it was clear he was destined for something remarkable. Watching his journey unfold has only confirmed what I sensed early on: he's the real deal. I guess I can officially say I’m a pretty good judge of character! Working with him unlocked clarity in my agency marketing and exploded my personal transaction volume.",
    image: '/images/testimonials/james-hall.jpg',
  },
  {
    id: 'mark-stern',
    name: 'Mark Stern',
    role: 'Self-Employed Partner Agent',
    badge: 'Trusted Business Partner',
    headlineResult: 'Combines Deep Knowledge with True Professionalism',
    content:
      "I've had the pleasure of working with Chris over the past few months as a partner agent, and I can confidently say he is one of life's genuine 'good guys.' Chris combines deep knowledge with true professionalism and a sincere care for the people he works with. He doesn't just talk about getting things done – he delivers. Reliable, focused, and solutions-driven, Chris consistently follows through and makes things happen. In a relatively short space of time, I've come to regard him not only as a trusted business partner and mentor, but also as a friend.",
    image: '/images/testimonials/mark-stern.jpg',
  },
  {
    id: 'clifford-walker',
    name: 'Clifford Walker',
    role: 'London Estate Agent',
    badge: 'Putting Agents First',
    headlineResult: 'No Fluff, No Nonsense — Tells You Exactly How It Is',
    content:
      "Chris Buckler is the definition of a mentor. A proper family guy with solid morals, and someone who treats everyone the same, no matter who you are. He’s always been about putting agents first. No fluff, no nonsense — he tells you how it is, and that’s exactly what makes him so valuable. He gets involved, he backs you, and he makes you better at what you do.",
    image: '/images/testimonials/clifford-walker.jpg',
  },
  {
    id: 'nia-abrishami',
    name: 'Nia Abrishami',
    role: 'Personal Estate Agent',
    badge: 'Daily Accountability & Growth',
    headlineResult: 'Daily Kick-offs, Mentorship and Support',
    content:
      "I joined the TAUK London team at the start of the year not just because of the brand, but because of the level of input, mentorship and influence I knew Chris could bring in helping me take my own estate agency to the next level. The experience has far exceeded my expectations, from Chris's knowledge and constant support to our daily calls, Monday morning kick-offs and accountability meetings. He's been there every step of the way.",
    image: '/images/testimonials/nia-abrishami.jpg',
  },
  {
    id: 'tihon-aleksandrovich',
    name: 'Tihon Aleksandrovich',
    role: 'Business Partner at TAUK',
    badge: 'World-Class Expertise',
    headlineResult: 'Exceptional Strategic Thinking & Emotional Intelligence',
    content:
      "Chris is one of the most supportive, approachable, and professional people I have met in this industry. I have worked in different countries and had the chance to meet professionals at the highest level – his expertise in real estate is truly world-class. The level of support, market understanding, strategic thinking, and emotional intelligence he brings is exceptional. He has a unique ability not only to guide people toward success but to make them feel understood, supported, and confident throughout the process.",
    image: '/images/testimonials/tihon-aleksandrovich.png',
  },
  {
    id: 'sarah-gabb',
    name: 'Sarah Gabb',
    role: 'London Estate Agent',
    badge: 'Authentic Leadership',
    headlineResult: 'Bringing the London Team into an Exciting New Era',
    content:
      "A true inspiration and passionate towards growing a brand that elevates everyone's expectations. It's a great pleasure working with Chris in the London team at TAUK. He brings authenticity, knowledge and support and is bringing the London team into a new and exciting era.",
    image: '/images/testimonials/sarah-gabb.jpg',
  },
];

export const FREE_RESOURCES: ResourceItem[] = [
  {
    id: 'advanced-commission',
    title: 'Advanced Commission',
    category: 'Cashflow & Revenue',
    tagline: 'Win the instruction, meet the criteria, and 30% of your commission arrives that week.',
    description:
      'Advanced Commission is a growth tool. Model your fee on a dedicated page, then download the free guide from our funnel.',
    highlights: [
      'Interactive Advanced Commission calculator on its own page',
      'Compare with vs without advanced commission on any fee',
      'Download the free Advanced Commission guide',
      'Book a Discovery Call directly with Chris',
    ],
    pages: 18,
    format: 'Dedicated page + PDF Guide',
    funnelUrl: LINKS.advancedCommissionGuide,
  },
  {
    id: 'prospectus',
    title: 'Partner Agent Prospectus',
    category: 'Agency Scaling',
    tagline: 'The blueprint for scaling from solo broker to a team of self-employed partners.',
    description:
      'Everything you need to attract, onboard, and retain high-performing estate agents under your personal umbrella brand.',
    highlights: [
      'Recruitment and onboarding for partner agents',
      'Commission split tiering while preserving margins',
      'Technology, compliance, and back-office stack',
      'Building an asset that pays overrides',
    ],
    pages: 24,
    format: 'Executive Prospectus',
    funnelUrl: LINKS.prospectus,
  },
  {
    id: 'transition-plan',
    title: 'Employed to Self-Employed Transition Plan',
    category: 'Career Transition',
    tagline: 'The zero-risk 90-day roadmap from employed negotiator to business owner.',
    description:
      'Leaving a salaried role with a company car and basic pay feels daunting. This step-by-step transition plan outlines how to prepare your personal finances, negotiate restrictive covenants, and hit month 1 with active listings.',
    highlights: [
      'The 90-day financial runway calculation before handing in notice',
      'Navigating restrictive covenants, non-competes, and local patch boundaries legally',
      'Securing your first 3 instructions in week 1 from your existing personal network',
      'How to preserve your family household income during the first quarter',
    ],
    pages: 16,
    format: 'Action Checklist & Spreadsheet',
    funnelUrl: LINKS.transitionPlan,
  },
  {
    id: 'business-plan',
    title: 'Self-Employed Agency Business Plan',
    category: 'Financial Modeling',
    tagline: 'The plug-and-play financial spreadsheet Chris gives his 1-on-1 coaching clients.',
    description:
      'No guesswork. Input your average local property price, your target instructions per month, and see your exact projected gross margin, portal overheads, and personal net take-home earnings.',
    highlights: [
      'Year 1, 2, and 3 volume and turnover financial projection models',
      'Portal listing fee allowances (Rightmove, Zoopla, OnTheMarket)',
      'Lead generation marketing budget ratios per completed deal',
      'Exit valuation multiple framework for self-employed agency books',
    ],
    pages: 12,
    format: 'Excel Spreadsheet + Video Walkthrough',
    funnelUrl: LINKS.businessPlan,
  },
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'ep-42',
    title: 'From Branch Manager to £250k Net: The Self-Employed Reality',
    episodeNumber: 'EP 42',
    guest: 'James Hall',
    guestRole: 'Self-Employed Partner Agent, TAUK',
    duration: '48 mins',
    summary:
      'James breaks down the exact emotional and commercial leap from managing a corporate branch on 60-hour weeks to generating over £250k in personal fee income in his first 18 months.',
    topics: ['Corporate branch burnout', 'The first 90 days', 'Winning instructions over 1.5%', 'Work-life balance with family'],
    spotifyUrl: LINKS.spotify,
    appleUrl: LINKS.applePodcasts,
    youtubeUrl: LINKS.youtube,
  },
  {
    id: 'ep-41',
    title: 'Building a Prime London Agency Brand Without a High-Street Office',
    episodeNumber: 'EP 41',
    guest: 'Clifford Walker',
    guestRole: 'London Estate Agent Specialist',
    duration: '52 mins',
    summary:
      'Why modern affluent vendors care about the personal broker representing their property rather than the physical shop window on the high street.',
    topics: ['High street obsolescence', 'Winning £5m+ stock', 'Personal branding on LinkedIn', 'Negotiating sole agency'],
    spotifyUrl: LINKS.spotify,
    appleUrl: LINKS.applePodcasts,
    youtubeUrl: LINKS.youtube,
  },
  {
    id: 'ep-40',
    title: 'The Sunday Times 100 Journey: Scaling TAUK & The Self-Employed Revolution',
    episodeNumber: 'EP 40',
    guest: 'Tihon Aleksandrovich',
    guestRole: 'Business Partner at TAUK',
    duration: '58 mins',
    summary:
      'Chris and Tihon discuss the commercial acquisition of The Estate Agency by TAUK, ranking #74 on the Sunday Times 100, and where the UK agency model is heading by 2030.',
    topics: ['Sunday Times 100 growth', 'Acquisition mechanics', 'The USA vs UK brokerage model', 'Broker equity and scale'],
    spotifyUrl: LINKS.spotify,
    appleUrl: LINKS.applePodcasts,
    youtubeUrl: LINKS.youtube,
  },
  {
    id: 'ep-39',
    title: 'Daily Accountability & Mental Toughness for Solo Agency Founders',
    episodeNumber: 'EP 39',
    guest: 'Nia Abrishami',
    guestRole: 'Personal Estate Agent',
    duration: '44 mins',
    summary:
      'How to structure your Monday morning kick-offs, maintain relentless prospecting momentum, and never fall into the trap of procrastination when you are your own boss.',
    topics: ['Daily routine breakdown', 'Dealing with rejected offers', 'Vendor management psychology', 'Pipeline discipline'],
    spotifyUrl: LINKS.spotify,
    appleUrl: LINKS.applePodcasts,
    youtubeUrl: LINKS.youtube,
  },
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'The Self-Employed Estate Agency Mastermind: Spring 2026',
    type: 'Live Mastermind',
    date: 'Thursday, 14 May 2026',
    location: 'London, Mayfair',
    venue: 'The Mayfair Townhouse, London W1J',
    capacity: 'Strictly 25 Agency Principals',
    description:
      'A full-day closed-door intensive for UK estate agents generating over £80k who are ready to transition or scale to multiple associates. No generic theory — walk away with battle-tested prospecting scripts, commission structures, and 12-month growth roadmaps.',
    keyTopics: [
      'The 70% commission economics model',
      'Advanced Commission implementation on live listings',
      'Attracting experienced negotiators from high-street chains',
      'Personal brand positioning that wins listings without pitching',
    ],
    status: 'Open for Registration',
  },
  {
    id: 'ev-2',
    title: 'Scaling from Solo Agent to 5-Broker Team Workshop',
    type: 'Strategy Intensive',
    date: 'Wednesday, 17 June 2026',
    location: 'Manchester Central',
    venue: 'The Edwardian, Free Trade Hall, Manchester',
    capacity: '30 Attendees',
    description:
      'A practical tactical workshop focusing on operational delegation, CRM systems, compliance protocols, and building a multi-broker revenue engine across regional UK territories.',
    keyTopics: [
      'Sub-brokering contracts and compliance standards',
      'Overriding fees without taking on payroll risk',
      'Shared portal economics and back-office cost sharing',
      'Local market share domination strategies',
    ],
    status: 'Open for Registration',
  },
  {
    id: 'ev-3',
    title: 'Keynote Speaking & Industry Panels',
    type: 'Keynote Speaking',
    date: 'Ongoing / By Invitation',
    location: 'UK Nationwide & International',
    venue: 'Industry Conferences, Franchise Summits & Corporate Days',
    capacity: '100 - 1,000+ Delegates',
    description:
      'Chris Buckler delivers high-energy, zero-fluff keynote presentations on the future of the self-employed estate agency model, how top performers achieve £250k+ net billings, and why traditional high-street branches are undergoing their biggest structural shift in 40 years.',
    keyTopics: [
      'The death of the high-street desk model',
      'Why top performers leave traditional employment',
      'Building genuine enterprise value in personal service businesses',
      'Lessons from building, scaling, and selling an agency to TAUK',
    ],
    status: 'By Invitation',
  },
];
