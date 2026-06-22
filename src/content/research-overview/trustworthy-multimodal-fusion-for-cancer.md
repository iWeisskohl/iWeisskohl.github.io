---
title: 'Trustworthy Multimodal Fusion for Cancer Survival Analysis'
description: 'Uncertainty-aware fusion architectures that integrate heterogeneous medical data for reliable, interpretable patient survival prediction.'
pubDate: 'Feb 3 2026'
challenge: 'Survival analysis relies on diverse, multimodal data (whole-slide images, clinical records, genomics) that is often noisy, conflicting, and right-censored. Standard deep models struggle to fuse these sources while providing the transparency and uncertainty quantification clinicians need to trust a prediction.'
approach: 'Evidential multimodal fusion frameworks, such as EsurvFusion and DPsurv, grounded in belief-function theory and epistemic random fuzzy sets. The models quantify both data and model uncertainty, and use reliability discounting and dual-prototype fusion to integrate complex data streams safely.'
keyFindings: 'The models reach state-of-the-art accuracy and interpretability for time-to-event prediction. By learning the reliability of each modality and quantifying uncertainty, they avoid overconfidence on noisy data and give clearer, clinically usable predictions.'
relatedPublication: 'EsurvFusion: An evidential multimodal survival fusion model based on Epistemic random fuzzy sets (IEEE Transactions on Fuzzy Systems, 2025) | DPsurv: Dual-Prototype Evidential Fusion for Uncertainty-Aware and Interpretable Whole-Slide Image Survival Prediction (ICML 2026)'
heroImage: '../../assets/project-1.png'
---

### The complexity of survival analysis

Predicting cancer survival — formally, time-to-event analysis — is one of the harder tasks in oncology. A prognosis rarely rests on a single data point; clinicians draw on whole-slide images (WSIs), genomic profiles, structured records, and free-text notes. Two problems make this hard for AI:

1. **Heterogeneity:** how to fuse a pixel-dense pathology slide with a text-based clinical record.
2. **Censoring and noise:** survival data is noisy and frequently censored (a patient leaves a study before an event occurs). Standard black-box models handle this poorly and tend to be overconfident.

### Evidential fusion and epistemic random fuzzy sets

My research builds models that represent their own uncertainty. Supported by the Dame Julia Higgins Fund for the project *"Revolutionizing Cancer Survival Analysis Through Trustworthy AI and Multimodal Integration"*, this work changes how models handle heterogeneous clinical data.

One example is **EsurvFusion**, an evidential multimodal survival model published in *IEEE Transactions on Fuzzy Systems*. Rather than forcing the modalities through a standard network, it uses epistemic random fuzzy sets — specifically Gaussian random fuzzy numbers — to quantify both data and model uncertainty. A reliability-discounting step down-weights a modality (say, a low-quality scan) when the model judges it unreliable, leaning instead on the clearer sources.

### Dual-prototype architectures for pathology

We also extend these methods to whole-slide pathology. In **DPsurv** (*Dual-Prototype Evidential Fusion for Uncertainty-Aware and Interpretable Whole-Slide Image Survival Prediction*), we handle the scale of whole-slide images with a dual-prototype evidential fusion that extracts survival-relevant features while keeping uncertainty explicit. Related work on time-to-event prediction (*International Journal of Approximate Reasoning*) keeps the quantified uncertainty well calibrated to real outcomes.

### Clinical impact

By centring uncertainty quantification and reliability, this work aims to make predictive models safe, transparent partners for oncologists — giving not just a survival estimate, but an indication of *why* the model reached it and *how confident* it is.
