/** Client-provided external destinations (Oct 2026) */
export const LINKS = {
  discoveryCall:
    'https://links.chrisbuckler.co.uk/widget/bookings/discovery-with-chrisbucklerwpcd01',
  /** Advanced Commission guide download (existing GHL funnel) */
  advancedCommissionGuide:
    'https://funnels.chrisbuckler.co.uk/home-page-advanced-commission',
  /** Slug = team-prospectus → Partner Agent Prospectus */
  prospectus: 'https://funnels.chrisbuckler.co.uk/home-new-team-prospectus-2026',
  /** Slug = transition-plan → Transition Plan */
  transitionPlan:
    'https://funnels.chrisbuckler.co.uk/home-new-transition-plan-2026-453652',
  /** No new URL supplied — keep live funnel */
  businessPlan: 'https://funnels.chrisbuckler.co.uk/buisness-plan',
  spotify:
    'https://open.spotify.com/show/7IrN8tZ8CvDe0lOMC0ZCHf?si=50019468403143b8',
  youtube: 'https://www.youtube.com/@Chris_Buckler',
  applePodcasts:
    'https://podcasts.apple.com/za/podcast/eam-estate-agency-mastery-with-chris-buckler/id1732685652',
} as const;

export function openExternal(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openDiscoveryCall() {
  openExternal(LINKS.discoveryCall);
}
