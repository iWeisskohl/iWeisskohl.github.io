---
title: 'Research Statement'
---

### Vision: From "Black Box" Algorithms to Trustworthy Clinical Partners

The rapid advancement of deep learning has demonstrated unprecedented accuracy in medical data analysis. However, a critical barrier prevents the widespread clinical adoption of these technologies: the lack of reliability and transparency. In high-stakes medical environments, a model that provides a highly accurate but unexplainable and overconfident prediction is fundamentally unsafe. 

My overarching research vision is to bridge this gap. I aim to transform artificial intelligence from opaque predictive engines into trustworthy, uncertainty-aware systems that empower clinicians. By operating at the intersection of **belief function theory, deep evidential learning, and multimodal data fusion**, my work focuses on developing AI architectures that not only deliver state-of-the-art accuracy but also explicitly quantify their own uncertainty and data reliability.

### Core Research Themes

#### 1. Uncertainty Quantification in Medical Image Analysis
Medical images are frequently compromised by noise, artifacts, and ambiguous tissue boundaries. Standard deep learning models often output deterministic segmentation masks without indicating their confidence levels, risking critical clinical errors. 

To address this, my foundational research integrates belief function theory with deep neural networks to create "deep evidential networks." For example, in my work on 3D PET-CT lymphoma segmentation and brain tumor analysis, these models do not simply force a classification on every pixel. Instead, they assign a "mass of belief," enabling the model to explicitly declare "ignorance" in highly ambiguous regions. By generating precise spatial uncertainty heatmaps and employing mechanisms like contextual discounting, these frameworks actively learn to ignore unreliable imaging contexts, thereby safeguarding the diagnostic process.

#### 2. Multimodal Evidential Fusion for Survival Analysis
In clinical practice, predicting patient outcomes (survival analysis) relies on a highly diverse, multimodal web of information—ranging from structured electronic health records (EHRs) and high-resolution whole-slide images to unstructured clinical notes. 

My research pioneers novel architectures to fuse these heterogeneous data sources safely. Most recently, I developed **EsurvFusion**, an evidential multimodal survival fusion model based on Epistemic random fuzzy sets (specifically Gaussian random fuzzy numbers). This framework actively quantifies both data and model uncertainty, utilizing a reliability discounting layer to reduce the impact of noisy or conflicting data streams. By employing dual-prototype evidential fusion, these models establish new benchmarks for interpretable time-to-event prediction, ensuring that oncologists understand exactly *why* a model is making a specific survival prediction.

#### 3. Advancing Clinical Decision Support Systems
Real-world hospital data extends far beyond imaging. I am deeply invested in building comprehensive Clinical Decision Support Systems (CDSS) that leverage both structured measurements and natural language. By applying evidential reasoning and domain adaptation to clinical foundation models, my research integrates EHRs with free-text notes to improve high-stakes predictions, such as intensive care unit (ICU) outcomes and chronic disease trajectories. My goal is to rigorously evaluate and guide the evolution of these multimodal foundation models so they achieve clinical utility without compromising patient safety.

### Future Directions

Looking forward, my research will increasingly focus on the seamless translation of trustworthy AI from computational theory to clinical reality. Supported by the Dame Julia Higgins Postdoc Collaborative Research Fund at Imperial College London, my current flagship project aims to revolutionize cancer survival analysis through trustworthy AI and multimodal integration. 

I plan to expand this work by:
* **Scaling Evidential Foundation Models:** Developing large-scale, uncertainty-aware clinical foundation models capable of processing population-level multimodal data (e.g., UK Biobank) to uncover gene-environment interactions in chronic and cardiovascular diseases.
* **Dynamic Reliability Learning:** Creating adaptive fusion models that can update their reliability metrics in real-time as a patient's clinical state evolves in the ICU.
* **Enhancing Human-AI Collaboration:** Designing interpretable interfaces that translate complex uncertainty quantification into actionable clinical insights, ensuring AI acts as a reliable "second opinion" rather than an autonomous decision-maker.

Ultimately, my research strives to build the mathematical and architectural foundations necessary for a new era of healthcare—one where artificial intelligence is fundamentally safe, transparent, and clinically reliable.