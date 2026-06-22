---
title: '**MICCAI 2026** - *Evidential Fusion Network for Multimodal Survival Prediction under Missing Modalities*'
pubDate: 'June 12 2026'
---

**Survival prediction that degrades gracefully when data is missing — instead of guessing.**

**The problem.** The best multimodal survival models combine pathology whole-slide images with transcriptomic (gene-expression) data — but in real clinics one modality is often missing (tissue exhausted, sequencing too costly). Common fixes either *impute* the missing data, which risks hallucinating biological signals that aren't there and adds computation, or simply mask it, without ever quantifying how much information was lost.

**Our idea.** EMMS (Evidential Missing-Modality Survival fusion) sidesteps reconstruction entirely. Built on Dempster–Shafer evidence theory and *Gaussian Random Fuzzy Numbers*, each modality's prediction is expressed as survival *evidence* carrying aleatoric and epistemic uncertainty. A missing modality is treated as **vacuous evidence** — its epistemic strength is set to zero, so it contributes nothing rather than being fabricated. The modalities are then fused with Dempster's rule, and the total evidential strength becomes a built-in, interpretable measure of the uncertainty that the missingness introduced.

**The result.** Across four TCGA cohorts (BRCA, STAD, KIRC, LUAD), EMMS achieves state-of-the-art discrimination and calibration under **both** fully-observed and heavily incomplete settings — holding up even when **60% of modalities are missing** (e.g. C-index ~0.80 on KIRC) — and does so with no extra computational overhead versus an imputation-free baseline.

![Overview of the EMMS framework: the pathology and genomics branches each produce survival evidence as a Gaussian Random Fuzzy Number; a missing modality is encoded as vacuous evidence (epistemic strength = 0); the two are combined via Dempster–Shafer fusion to yield a calibrated, uncertainty-aware survival prediction.](../../assets/emms-overview.png)

**MICCAI 2026** · Ling Huang (corresponding author)
