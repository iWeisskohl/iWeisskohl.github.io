---
title: 'Evidential Multi-Modal Fusion for Reliable ICU Patient Monitoring'
pubDate: 'Feb 3 2026'
description: 'A novel AI framework that combines diverse intensive care data streams while explicitly quantifying uncertainty to support safe, human-in-the-loop clinical decision-making.'
challenge: 'ICU data is notoriously noisy, scattered across different formats (vitals, labs, text), and often missing, making it difficult for standard AI models to provide reliable, uncertainty-aware predictions.'
approach: 'Utilizing Belief Function Theory, this approach fuses structured electronic health records with unstructured clinical notes, explicitly modeling epistemic uncertainty (lack of knowledge) rather than forcing a single probability.'
keyFindings: 'The uncertainty-aware fusion model significantly improved the reliability of predicting patient outcomes in the ICU by successfully flagging low-confidence predictions and deferring to human clinicians.'
relatedPublication: 'Ruan, Y., Tan, D.J., Ng, S.K., Huang, L., & Feng, M. (2024). "Towards accurate and reliable ICU outcome prediction: a multimodal learning framework based on belief function theory using structured EHRs and free-text notes."'
heroImage: '../../assets/project-1.png'
pdfFile: '/public/cv.pdf'
---

**The Challenge**: Intensive Care Units generate massive amounts of disconnected data—noisy vitals from sensors, structured lab results from EHRs, and unstructured free-text notes from clinicians. Current AI models often struggle to integrate these diverse modalities and, critically, fail to communicate when their predictions are uncertain due to missing or conflicting data.

**My Approach**: I am developing a novel trustworthy fusion framework grounded in Belief Function Theory (Dempster-Shafer Theory). Unlike traditional deep learning that forces a single probability, this approach models evidence from imaging, EHRs, and clinical notes separately, explicitly quantifying epistemic uncertainty (lack of knowledge). The system fuses these distinct "opinions" to form a comprehensive patient view.

**Current Impact**: Preliminary results demonstrating that this uncertainty-aware fusion significantly improves the reliability of predicting patient deterioration events (like sepsis or cardiac arrest), providing clinicians with a "confidence score" alongside the prediction to ensure safe, human-in-the-loop decision-making.
