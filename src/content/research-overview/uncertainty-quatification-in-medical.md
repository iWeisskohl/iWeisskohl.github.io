---
title: 'Uncertainty Quantification in Medical Image Analysis'
description: 'Deep evidential learning frameworks and belief-function theory to quantify uncertainty and improve reliability in medical image segmentation.'
pubDate: 'Feb 2 2026'
challenge: 'Medical images such as MRI and PET scans are often degraded by noise, artefacts, or ambiguous tissue boundaries. Standard deep learning models output deterministic segmentation masks without indicating their confidence, and can produce highly confident but incorrect predictions in exactly the cases that matter for patient safety.'
approach: 'Integrating belief-function theory with deep neural networks to build deep evidential networks. The approach uses mechanisms such as contextual discounting to manage conflicting multi-modality data, alongside semi-supervised learning to make the most of limited expert-annotated data.'
keyFindings: 'By modelling masses of belief, these frameworks achieve accurate segmentation while also producing spatial uncertainty maps. The models down-weight unreliable imaging contexts and can explicitly signal "ignorance" when data is insufficient, flagging high-risk regions for clinical review.'
relatedPublication: 'A review of uncertainty quantification in medical image analysis: probabilistic and non-probabilistic methods (Medical Image Analysis, 2024) | Deep evidential fusion with uncertainty quantification and reliability learning for multimodal medical image segmentation (Information Fusion, 2024)'
heroImage: '../../assets/project-2.png'
---

### The "black box" problem in medical imaging

In oncology and radiology, segmenting structures — drawing exact boundaries around tumours — is a key step in treatment planning. Deep learning automates this well, but usually as a black box: it returns a segmentation mask without communicating how confident it is. On fuzzy boundaries or poor-quality scans, a standard network can be wrong while appearing fully certain.

My research aims to build models that know what they *don't* know.

### Deep evidential networks and belief functions

To close the gap between raw accuracy and clinical trust, my work integrates belief-function theory into deep networks. These *deep evidential networks* output more than a boundary: they produce a spatial uncertainty map. In lymphoma segmentation from 3D PET-CT, rather than forcing a decision on every pixel, the network assigns a "mass of belief"; where the PET and CT evidence conflicts or is ambiguous, it allocates belief to "ignorance" — in effect telling the clinician which regions to review.

### Contextual discounting and multi-modality fusion

Diagnosis often fuses several imaging modalities (e.g. T1, T2, and FLAIR MRI), but not every scan is equally informative for every tissue type. I introduced fusion mechanisms such as *contextual discounting*, which let the model assess the reliability of a given imaging context and down-weight a modality corrupted by patient motion or artefacts before fusing it with cleaner data. Because expert pixel-level annotations are costly, I have also applied these belief-function methods to semi-supervised learning, achieving accurate brain-tumour segmentation with limited labelled data.

### Foundations for trustworthy AI

Beyond individual architectures, I have helped structure the broader area of reliable AI: my 2024 review in *Medical Image Analysis* covers both probabilistic and non-probabilistic methods for uncertainty quantification and serves as a reference for researchers in the field. The aim across this work is to make automated diagnostic tools transparent, safe, and interpretable partners in patient care.
