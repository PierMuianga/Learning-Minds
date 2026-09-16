import type { Unit } from "./types";

const objective = (id: string, topicId: string, title: string) => ({ id, topicId, title });
export const curriculum = { id: "moz-national-demo", name: "Mozambique National Curriculum", country: "Mozambique", level: "10ª Classe", subject: "Mathematics", scope: "Competition demo subset — not a complete official curriculum" } as const;
export const units: Unit[] = [
  { id: "algebra", title: "Algebra", order: 1, topics: [
    { id: "linear", slug: "linear-equations", unitId: "algebra", order: 1, title: "Linear equations", summary: "Form, rearrange and solve equations with one unknown.", objectives: [objective("linear-solve", "linear", "Solve linear equations with one unknown"), objective("linear-model", "linear", "Model a context using a linear equation")] },
    { id: "simultaneous", slug: "simultaneous-equations", unitId: "algebra", order: 2, title: "Simultaneous equations", summary: "Find values satisfying two equations together.", objectives: [objective("sim-eliminate", "simultaneous", "Solve simultaneous equations by elimination"), objective("sim-substitute", "simultaneous", "Solve simultaneous equations by substitution")] },
    { id: "quadratic", slug: "quadratic-equations", unitId: "algebra", order: 3, title: "Quadratic equations", summary: "Solve and interpret equations containing a squared term.", objectives: [objective("quad-factor", "quadratic", "Solve quadratic equations by factorisation"), objective("quad-formula", "quadratic", "Solve quadratic equations using the quadratic formula"), objective("quad-roots", "quadratic", "Interpret roots and the discriminant")], note: { version: 1, blocks: [
      { type: "introduction", body: "Quadratic equations describe many curved relationships. Their highest power of the unknown is two." },
      { type: "definition", title: "Standard form", body: "A quadratic equation is written as ax² + bx + c = 0, where a ≠ 0.", maths: ["ax² + bx + c = 0"] },
      { type: "explanation", title: "Factorisation", body: "Move every term to one side, factorise, then use the zero-product rule: if pq = 0, p = 0 or q = 0." },
      { type: "worked_example", title: "Solve x² − 5x + 6 = 0", body: "Find two numbers whose product is 6 and sum is −5. So (x − 2)(x − 3) = 0, giving x = 2 or x = 3.", maths: ["(x − 2)(x − 3) = 0", "x = 2 or x = 3"] },
      { type: "formula", title: "Quadratic formula", body: "Use this when factorisation is not convenient. Substitute a, b and c with their signs.", maths: ["x = (−b ± √(b² − 4ac)) / 2a"] },
      { type: "explanation", title: "The discriminant", body: "The value b² − 4ac predicts the roots: positive gives two real roots, zero gives one repeated root, and negative gives no real roots." },
      { type: "worked_example", title: "Solve 2x² + x − 3 = 0", body: "Here a = 2, b = 1, c = −3. Substitution gives x = (−1 ± 5)/4, so x = 1 or x = −3/2." },
      { type: "common_mistake", body: "Do not lose the ± sign, and put the whole numerator over 2a—not only the square root." },
      { type: "exam_tip", body: "Write down a, b and c before substitution. This protects the sign of a negative coefficient." },
      { type: "checkpoint", body: "Solve x² + 2x − 8 = 0. Then check each root by substitution.", maths: ["Answer: x = 2 or x = −4"] }
    ] } }
  ] },
  { id: "geometry-trig", title: "Geometry & Trigonometry", order: 2, topics: [
    { id: "pythagoras", slug: "pythagoras", unitId: "geometry-trig", order: 4, title: "Pythagoras", summary: "Relate the three sides of a right-angled triangle.", objectives: [objective("pyth-identify", "pythagoras", "Identify the hypotenuse"), objective("pyth-calculate", "pythagoras", "Calculate an unknown side using Pythagoras") ] },
    { id: "trigonometry", slug: "trigonometric-ratios", unitId: "geometry-trig", order: 5, title: "Trigonometric ratios", summary: "Use sine, cosine and tangent in right-angled triangles.", objectives: [objective("trig-identify", "trigonometry", "Identify opposite, adjacent and hypotenuse"), objective("trig-ratios", "trigonometry", "Choose and use sine, cosine and tangent"), objective("trig-side", "trigonometry", "Calculate unknown sides"), objective("trig-angle", "trigonometry", "Calculate unknown angles")], note: { version: 1, blocks: [
      { type: "introduction", body: "Trigonometric ratios connect an acute angle in a right-angled triangle to ratios of its side lengths." },
      { type: "definition", title: "Name the sides", body: "The hypotenuse is opposite the right angle and is always longest. Relative to angle θ, the opposite side faces θ and the adjacent side touches θ but is not the hypotenuse." },
      { type: "diagram", title: "Right-angled triangle", body: "A labelled triangle should show θ, the right angle, opposite, adjacent and hypotenuse." },
      { type: "formula", title: "SOH CAH TOA", body: "Choose the ratio containing the known and required sides.", maths: ["sin θ = opposite / hypotenuse", "cos θ = adjacent / hypotenuse", "tan θ = opposite / adjacent"] },
      { type: "worked_example", title: "Find an unknown side", body: "A right triangle has θ = 30° and hypotenuse 10 cm. Since opposite is required, use sine: opposite = 10 sin 30° = 5 cm." },
      { type: "worked_example", title: "Find an unknown angle", body: "If opposite = 6 and adjacent = 8, tan θ = 6/8. Apply inverse tangent: θ = tan⁻¹(0.75) ≈ 36.9°." },
      { type: "common_mistake", body: "Opposite and adjacent depend on the chosen angle. Label the triangle before selecting a ratio." },
      { type: "exam_tip", body: "Keep full calculator precision during working and round only the final answer. Check whether degree mode is selected." },
      { type: "checkpoint", body: "The adjacent side is 12 cm and hypotenuse is 15 cm. Find θ to one decimal place.", maths: ["Answer: cos⁻¹(12/15) = 36.9°"] }
    ] } },
    { id: "trig-applications", slug: "applications-of-trigonometry", unitId: "geometry-trig", order: 6, title: "Applications of trigonometry", summary: "Model heights, distances and bearings with triangles.", objectives: [objective("trig-model", "trig-applications", "Model a practical problem with a right triangle")] }
  ] }
];
export const topics = units.flatMap((unit) => unit.topics);
export const objectives = topics.flatMap((topic) => topic.objectives);
export const getTopic = (slugOrId: string) => topics.find((topic) => topic.slug === slugOrId || topic.id === slugOrId);
