export type PageView = 'home' | 'about' | 'resources' | 'podcast' | 'events';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  badge: string;
  headlineResult?: string;
  content: string;
  image: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  pages: number;
  format: string;
  funnelUrl?: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  episodeNumber: string;
  guest: string;
  guestRole: string;
  duration: string;
  summary: string;
  topics: string[];
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl?: string;
}

export interface EventItem {
  id: string;
  title: string;
  type: 'Live Mastermind' | 'Strategy Intensive' | 'Keynote Speaking' | 'Agent Workshop';
  date: string;
  location: string;
  venue: string;
  capacity: string;
  description: string;
  keyTopics: string[];
  status: 'Open for Registration' | 'Waitlist Only' | 'By Invitation';
}

export interface BookingFormState {
  fullName: string;
  email: string;
  phone: string;
  currentRole: string;
  currentAgency: string;
  operatingArea: string;
  estimatedAnnualBillings: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
