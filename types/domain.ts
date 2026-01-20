/**
 * Domain types for the finalists application.
 * These types represent core business entities.
 */

/** Risk assessment level for a candidate */
export type RiskLevel = "low" | "med" | "high";

/** Tone indicator for highlights and other UI elements */
export type Tone = "pos" | "mid" | "neg";

/** A single highlight item for a candidate (e.g., "Английский: C2") */
export type CandidateHighlight = {
  k: string;
  v: string;
  tone: Tone;
};

/** Full candidate profile */
export type Candidate = {
  id: string;
  name: string;
  fullName: string;
  title: string;
  location: string;
  categoryLabel: string;
  locationLabel: string;
  compMonthlyEUR: number;
  availability: string;
  risk: RiskLevel;
  assistantRecommended?: boolean;
  decisionReadyBadges: string[];
  why: string[];
  whyText?: string;
  riskNotes: string[];
  highlights: CandidateHighlight[];
  introSeconds: number;
  hideIntro?: boolean;
  photoDataUri: string;
};

/** Position/vacancy being filled */
export type Position = {
  role: string;
  location: string;
  finalists: number;
  total: number;
  preparedBy: string;
  updatedAt: string;
};
