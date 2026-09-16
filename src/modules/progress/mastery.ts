export type MasteryEvidence = { proportion: number; difficulty: "foundation" | "standard" | "challenge"; occurredAt: string };
const difficultyWeight = { foundation: 0.9, standard: 1, challenge: 1.15 };
export function calculateMastery(evidence: MasteryEvidence[]): number {
  const recent = [...evidence].sort((a,b) => b.occurredAt.localeCompare(a.occurredAt)).slice(0, 10);
  if (!recent.length) return 0;
  let numerator = 0, denominator = 0;
  recent.forEach((item, index) => { const recency = Math.max(0.55, 1 - index * 0.05); const weight = recency * difficultyWeight[item.difficulty]; numerator += Math.max(0, Math.min(1, item.proportion)) * weight; denominator += weight; });
  const confidence = Math.min(1, recent.length / 5);
  return Math.round((numerator / denominator) * confidence * 100);
}
export const masteryLabel = (score: number) => score >= 85 ? "Strong" : score >= 65 ? "Secure" : score >= 40 ? "Developing" : "Needs attention";
