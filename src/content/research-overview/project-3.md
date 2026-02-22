---
title: 'Deep Uncertainty Quantification for Robust Cardiovascular Analysis'
pubDate: 'Feb 1 2026'
description: Applying evidential deep learning to complex cardiac imaging to distinguish true anatomical pathologies from image artifacts and system noise.
challenge: Cardiac imaging is inherently noisy and highly operator-dependent, often causing standard deep learning models to output overconfident and erroneous diagnostic measurements.
approach: By applying evidential deep learning to spatial-temporal medical data, the model learns to quantify both data noise and model ignorance, outputting a reliable distribution of possible measurements rather than a flawed point estimate.
keyFindings: The framework effectively separates genuine anatomical anomalies from image noise, providing robust and consistent diagnostic predictions even when the original image quality is sub-optimal.
relatedPublication: Huang, L., Ruan, S., Decazes, P., Denœux, T. (2022). "Deep evidential fusion with uncertainty quantification and reliability learning for multimodal medical image segmentation."
heroImage: '../../assets/project-3.png'
---

**The Challenge**: Echocardiograms (heart ultrasound) are notoriously noisy and operator-dependent, leading to high variability in interpreting critical metrics like Left Ventricular Ejection Fraction (LVEF). Standard deep learning models trained on this noisy data often yield overconfident, erroneous measurements.

**My Approach**: I am applying advanced Uncertainty Quantification (UQ) techniques, such as Bayesian Neural Networks and evidential deep learning, specifically tailored for 3D + time cardiac imaging data. The goal is to create models that can distinguish between genuine anatomical anomalies (pathology) and image artifacts (noise), providing a distribution of possible measurements rather than a single, potentially flawed point estimate.

**Current Impact**: Developing robust diagnostic tools for heart failure prediction that remain reliable even when image quality is sub-optimal, ensuring consistent care across different clinical settings and operator skill levels.
