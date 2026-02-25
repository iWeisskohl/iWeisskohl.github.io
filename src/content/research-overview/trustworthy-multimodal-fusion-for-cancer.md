---
title: 'Trustworthy Multimodal Fusion for Cancer Survival Analysis'
description: 'Pioneering uncertainty-aware AI architectures that integrate heterogeneous medical data to deliver reliable, interpretable patient survival predictions.'
pubDate: 'Feb 3 2026'
challenge: 'Clinical survival analysis relies on highly diverse, multimodal data (such as whole-slide images, clinical records, and genomics). However, this data is often noisy, conflicting, and right-censored. Traditional deep learning models struggle to fuse these heterogeneous sources effectively while providing the transparency and uncertainty quantification that clinicians require to trust the predictions.'
approach: 'Developing evidential multimodal fusion frameworks, such as EsurvFusion and DPsurv, grounded in belief function theory and epistemic random fuzzy sets. These models explicitly quantify both data and model uncertainty, utilizing reliability discounting and dual-prototype fusion to seamlessly and safely integrate complex data streams.'
keyFindings: 'The developed models establish new state-of-the-art benchmarks in predictive accuracy and interpretability for time-to-event prediction. By actively learning the reliability of different medical modalities and quantifying uncertainty, these frameworks prevent overconfidence in noisy data and provide clear, clinically actionable insights.'
relatedPublication: 'EsurvFusion: An evidential multimodal survival fusion model based on Epistemic random fuzzy sets (IEEE Transactions on Fuzzy Systems, 2025) | DPsurv: Dual-Prototype Evidential Fusion for Uncertainty-Aware and Interpretable Whole-Slide Image Survival Prediction (arXiv, 2025)'
heroImage: '../../assets/project-1.png'
---

### The Complexity of Survival Analysis

Predicting cancer survival outcomes - formally known as time-to-event prediction or survival analysis - is one of the most critical and complex tasks in oncology. In a real-world clinical setting, a patient's prognosis isn't determined by a single data point. Instead, doctors make decisions based on a vast, multimodal web of information: high-resolution whole-slide images (WSI), genomic profiles, structured electronic health records, and free-text clinical notes. 

The core challenge for artificial intelligence in this domain is twofold:
1. **Heterogeneity:** How do you mathematically fuse a pixel-dense pathology slide with a text-based clinical record?
2. **Censorship and Noise:** Medical data is inherently noisy, and survival data is frequently "censored" (meaning a patient drops out of a study before an event occurs). Traditional "black box" AI models cannot handle this uncertainty gracefully, often producing overconfident predictions that can mislead clinical judgment.

### Evidential Fusion and Epistemic Random Fuzzy Sets

Dr. Ling Huang's research addresses these exact limitations by building AI architectures that inherently understand their own uncertainty. Supported by the Dame Julia Higgins Fund for her project *"Revolutionizing Cancer Survival Analysis Through Trustworthy AI and Multimodal Integration"*, her work fundamentally shifts how models process heterogeneous clinical data.

A flagship example of this approach is **EsurvFusion**, an evidential multimodal survival fusion model recently published in *IEEE Transactions on Fuzzy Systems*. Rather than forcing different data modalities into a standard neural network, EsurvFusion utilizes "Epistemic Random Fuzzy Sets" - specifically Gaussian random fuzzy numbers - to meticulously quantify both data uncertainty and model uncertainty. 

The model features a reliability discounting mechanism. If the AI detects that a specific data stream (e.g., a blurry imaging scan) is unreliable, it automatically discounts its influence on the final prediction, relying more heavily on clearer, more trustworthy modalities.

### Bridging the Gap with Dual-Prototype Architectures

Dr. Huang is also extending these reliable fusion techniques directly to complex pathology data. In her 2025 paper, *"DPsurv: Dual-Prototype Evidential Fusion for Uncertainty-Aware and Interpretable Whole-Slide Image Survival Prediction"*, she and her collaborators tackle the immense scale of whole-slide images. By using a dual-prototype evidential fusion approach, the model extracts critical survival features from massive tissue slides while maintaining strict uncertainty awareness. 

Furthermore, her foundational frameworks for time-to-event prediction, including work published in the *International Journal of Approximate Reasoning*, ensure that the uncertainty quantified by the model is highly calibrated to real-world outcomes.

### Clinical Impact

By prioritizing uncertainty quantification and reliability learning, this research stream ensures that predictive models act as safe, transparent partners to oncologists. Clinicians are provided not only with an accurate survival prediction but also with a clear indication of *why* the model made its choice and *how confident* it is in that specific recommendation.