/**
 * Types for the comparison grid/table feature.
 */

/** Valid row keys for comparison table */
export type ComparisonRowKey = 
  | "Английский" 
  | "Ротации" 
  | "Репетиторство" 
  | "Старт" 
  | "€ / месяц";

/** A single row in the comparison table */
export type ComparisonRow = {
  k: ComparisonRowKey;
  v: string[];
};
