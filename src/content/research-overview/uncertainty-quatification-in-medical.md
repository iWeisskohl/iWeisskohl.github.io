---
title: 'Uncertainty Quantification in Medical Image Analysis'
description: 'Developing deep evidential learning frameworks and belief function theories to quantify uncertainty and improve reliability in medical image segmentation.'
pubDate: 'Feb 2 2026'
challenge: 'Medical images, such as MRI and PET scans, are frequently degraded by noise, artifacts, or ambiguous tissue boundaries. Standard deep learning models output deterministic segmentation masks without indicating their confidence levels. In critical clinical scenarios, these "black box" models can produce highly confident but incorrect predictions, risking patient safety.'
approach: 'Integrating belief function theory with deep neural networks to create "deep evidential networks." This approach utilizes mechanisms like contextual discounting to intelligently manage conflicting multi-modality data, alongside semi-supervised learning to extract maximum value from limited expert-annotated datasets.'
keyFindings: 'By modeling "masses of belief," these frameworks achieve high segmentation accuracy while simultaneously generating spatial uncertainty heatmaps. The AI actively learns to discount unreliable imaging contexts and can explicitly declare "ignorance" when data is insufficient, directly flagging high-risk areas for clinical review.'
relatedPublication: 'A review of uncertainty quantification in medical image analysis: probabilistic and non-probabilistic methods (Medical Image Analysis, 2024) | Deep evidential fusion with uncertainty quantification and reliability learning for multimodal medical image segmentation (Information Fusion, 2024)'
heroImage: '../../assets/project-2.png'
---

### The "Black Box" Problem in Medical Imaging

In clinical oncology and radiology, segmenting complex structures—such as drawing exact boundaries around tumors—is a vital step for targeted treatment planning. While deep learning models excel at automating this process, they traditionally function as "black boxes." They provide a final segmentation mask but fail to communicate their internal confidence. When faced with fuzzy tissue boundaries or poor-quality scans, a standard neural network might guess incorrectly but present its answer with 100% certainty. 

Dr. Ling Huang's research aims to solve this by building AI that knows what it *doesn't* know.



### Deep Evidential Networks and Belief Functions

To bridge the gap between raw algorithmic accuracy and clinical trust, Dr. Huang's work heavily integrates belief function theory into modern deep learning architectures. By designing "deep evidential networks," her models are trained to output more than just a medical diagnosis or a tumor boundary—they generate precise, spatial uncertainty heatmaps.

A prime example of this is her research on lymphoma segmentation from 3D PET-CT images. Instead of forcing the model to make a definitive choice on every single pixel, the evidential network assigns a "mass of belief." If the combined PET and CT data is conflicting or highly ambiguous, the model explicitly allocates belief to "ignorance," effectively telling the clinician: *"I am unsure about this specific region, you need to review it."*

### Contextual Discounting and Multi-Modality Fusion

Modern diagnostics often rely on fusing multiple imaging modalities together (e.g., T1, T2, and FLAIR MRI sequences for brain scans). However, not every scan is equally useful for every type of tissue. 

Dr. Huang introduced advanced multi-modality fusion mechanisms, such as "contextual discounting," to handle this issue. This mechanism allows the AI to automatically assess the reliability of a specific imaging context. If one modality is corrupted by patient movement or artifacts, the model dynamically "discounts" that unreliable evidence before fusing it with the cleaner data streams. 

Furthermore, because acquiring pixel-perfect annotations from expert radiologists is incredibly time-consuming, Dr. Huang has successfully applied these belief function-based techniques to semi-supervised learning, enabling highly accurate brain tumor segmentation even when labeled data is scarce.

### Establishing the Gold Standard for Trustworthy AI

Beyond developing novel network architectures, Dr. Huang is a leading voice in structuring the broader landscape of reliable AI. Her highly cited 2024 publication in *Medical Image Analysis*—which provides a comprehensive review of both probabilistic and non-probabilistic methods for uncertainty quantification—serves as a foundational roadmap for researchers worldwide. 

By continuously pushing the boundaries of deep evidential learning, this research pillar ensures that the next generation of automated diagnostic tools will serve as transparent, safe, and highly interpretable partners in patient care.