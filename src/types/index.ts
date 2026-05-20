export interface Section {
  id: string;
  label: string;
  shortLabel: string;
}

export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export interface Attraction {
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export interface EventType {
  name: string;
  description: string;
  icon: string;
}

export interface DiningCategory {
  name: string;
  description: string;
  image: string;
}

export interface RetailCategory {
  name: string;
  count: string;
  image: string;
}

export interface LeasingPath {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stats: Stat[];
  features: string[];
  image: string;
}

export interface VenueSpec {
  name: string;
  capacity: string;
  sqft: string;
  features: string[];
  image: string;
}

export type InquiryType = "lease" | "partner" | "event";
