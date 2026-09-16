# Basic mastery

Mastery is a transparent, recomputable projection—not a scientific judgement. For each objective, take at most the 10 most recent answer proportions. Multiply each by recency weight (`1.0`, reducing by `0.05` to a floor of `0.55`) and difficulty weight (foundation `0.9`, standard `1.0`, challenge `1.15`). Divide the weighted sum by total weight, then multiply by confidence `min(attempt_count / 5, 1)` and round to 0–100.

Raw immutable `attempt_answers` remain the evidence. `learner_objective_states` is only a cached projection, records evidence count and calculation version, and can be rebuilt. Labels are Needs attention (0–39), Developing (40–64), Secure (65–84), and Strong (85–100).
