/**
 * warmCardCrisperData.ts — 1-signal minimal reasoning for warm_profile_1_crisper.
 *
 * Source: Ambient_Feed_Copy_Recommendations_Full.docx — Akshay table.
 * Structure: 1 signal + 1 reasoning + CTA per card.
 * Copy used verbatim from document. No rewriting, no expansion.
 *
 * Character targets:
 *   signal:    1 sentence
 *   reasoning: 100–120 chars, max 140
 *   cta:       from document, verbatim
 */

export type WarmCardCrisperEntry = {
  signal:       string;
  signalHls:    string[];
  reasoning:    string;
  reasoningHls: string[];
  cta:          string;
};

export const WARM_CARD_CRISPER_DATA: Record<string, WarmCardCrisperEntry> = {

  // Card 1 — Sports · Live tonight
  'ws-india-afg': {
    signal:       "Big cricket nights are rarely something you miss.",
    signalHls:    ['Big cricket nights'],
    reasoning:    "Tonight's match matters before the next stage begins.",
    reasoningHls: ['next stage'],
    cta:          'Follow the action live',
  },

  // Card 2 — Sports · Local
  'ws-nandi-hills': {
    signal:       "Your triathlon plans make this worth a look.",
    signalHls:    ['triathlon plans'],
    reasoning:    "The Nandi loop remains one of Bangalore's favourite endurance rides.",
    reasoningHls: ['Nandi loop', 'favourite endurance rides'],
    cta:          'See the Sunday route',
  },

  // Card 3 — Wellness · Travel
  'ws-om-beach': {
    signal:       "You seem to prefer quieter escapes over crowded destinations.",
    signalHls:    ['quieter escapes'],
    reasoning:    "This season brings calmer beaches and fewer visitors.",
    reasoningHls: ['calmer beaches'],
    cta:          'Explore the weekend escape',
  },

  // Card 4 — Travel · Weekend
  'ws-coorg': {
    signal:       "Coffee has become more than just a morning drink for you.",
    signalHls:    ['more than just a morning drink'],
    reasoning:    "Monsoon is when these estates are at their most beautiful.",
    reasoningHls: ['most beautiful'],
    cta:          'Compare estate stays',
  },

  // Card 5 — Travel · Aspirational
  'ws-amalfi': {
    signal:       "That September trip is starting to take shape.",
    signalHls:    ['September trip'],
    reasoning:    "Shoulder season offers the best balance of weather and crowds.",
    reasoningHls: ['best balance of weather and crowds'],
    cta:          'Save for September',
  },

  // Card 6 — Wellness · Routine
  'ws-wind-down': {
    signal:       "Better sleep has been a recurring goal lately.",
    signalHls:    ['recurring goal'],
    reasoning:    "Small changes before bed often make the biggest difference.",
    reasoningHls: ['biggest difference'],
    cta:          'Try it tonight?',
  },

  // Card 7 — Music · Format
  'ws-vinyl-ritual': {
    signal:       "Some experiences are worth rediscovering properly.",
    signalHls:    ['worth rediscovering'],
    reasoning:    "A listening session is the easiest way to begin.",
    reasoningHls: ['easiest way to begin'],
    cta:          'Hear it before you buy it',
  },

  // Card 8 — Music · Trending
  'ws-gehra-hua': {
    signal:       "Your music taste sits comfortably between indie favourites and what's new.",
    signalHls:    ['indie favourites'],
    reasoning:    "This week's playlist brings both worlds together.",
    reasoningHls: ['both worlds together'],
    cta:          "Queue this week's playlist",
  },

};
