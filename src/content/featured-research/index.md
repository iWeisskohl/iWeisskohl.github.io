---
title: 'Deep Evidential Fusion for Multimodal Medical Image Segmentation'
description: |
    My 2024 paper in *Information Fusion* introduces a deep evidential fusion framework for multimodal medical image segmentation. It addresses the "black box" problem by explicitly quantifying uncertainty and learning the reliability of each imaging source — shifting the emphasis from raw accuracy to clinical trustworthiness.
heroImage: '../../assets/featured-research.png'
---

### The "black box" problem in medical AI

Doctors rely on several imaging types — MRI, CT, PET — to diagnose and treat conditions such as cancer. Deep learning can automatically segment (outline) tumours from these scans, but the models usually act as black boxes: they give an answer without saying how confident they are. With noisy or conflicting data, blindly trusting that answer can lead to clinical errors.

### Deep evidential fusion

With my collaborators, I developed **Deep Evidential Fusion with Uncertainty Quantification and Reliability Learning**, published in *Information Fusion*. Instead of outputting a single segmentation mask, the model learns the *reliability* of each imaging modality — for example, trusting MRI over PET for a given tissue type — and quantifies *uncertainty*, explicitly highlighting the regions where it is unsure.

### Key ideas

* **Uncertainty quantification:** clear maps of where the model is uncertain, so clinicians can focus their time on the hardest parts of a scan.
* **Reliability learning:** noisy or misleading modalities are down-weighted before fusion, improving the final prediction.
* **Trustworthy by design:** the emphasis moves from accuracy alone toward clinical reliability.

The work is a step toward reliable AI-driven decision support — algorithms that support, rather than replace, clinical judgement.
