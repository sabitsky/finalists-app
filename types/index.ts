/**
 * Central type exports for the finalists application.
 * Import types from here: import type { Candidate, Position } from "@/types";
 */

// Domain types
export type {
  RiskLevel,
  Tone,
  CandidateHighlight,
  Candidate,
  Position,
} from "./domain";

// Comparison types
export type {
  ComparisonRowKey,
  ComparisonRow,
} from "./comparison";

// UI state types
export type {
  TabKey,
  ConfirmKey,
} from "./ui";
