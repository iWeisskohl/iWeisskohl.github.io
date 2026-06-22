---
title: 'Multimodal Learning for Clinical Decision Support Systems'
pubDate: 'Feb 1 2026'
description: 'Integrating structured electronic health records (EHRs) and free-text clinical notes with multimodal and foundation models to build reliable predictive systems for patient care.'
challenge: 'Hospital data is diverse, spanning structured clinical measurements (heart rate, lab results) and unstructured free text (clinical notes, discharge summaries). Most models handle these modalities separately and miss information held in the natural-language notes that matters for tasks such as ICU-outcome or chronic-disease prediction.'
approach: 'Using multimodal foundation models and belief-function theory to fuse structured EHRs with clinical text. Domain adaptation and evidential reasoning align the data streams while keeping an explicit measure of diagnostic reliability.'
keyFindings: 'The multimodal frameworks improve accuracy on tasks such as ICU-outcome and chronic-disease prediction. A systematic evaluation of clinical foundation models also maps what is needed for broadly capable healthcare AI without compromising clinical safety.'
relatedPublication: 'Towards accurate and reliable ICU outcome prediction: a multimodal learning framework based on belief function theory using structured EHRs and free-text notes (Journal of Healthcare Informatics Research, 2025) | Has multimodal learning delivered universal intelligence in healthcare? A comprehensive survey (Information Fusion, 2024)'
heroImage: '../../assets/project-3.png'
---

### Beyond the numbers: the reality of hospital data

In real healthcare settings, patient information is split across very different formats. Structured electronic health records (EHRs) — blood pressure, heart rate, lab results — are straightforward for models to use, but much of the clinically important context sits in unstructured, free-text notes written by clinicians.

A useful clinical decision support system (CDSS) has to read and combine both the numbers and the narrative.

### Predicting ICU outcomes with belief functions

Intensive care is a high-stakes, fast-moving setting. I have also worked on intelligent network infrastructure for healthcare, including telemedicine efforts such as the Cisco-Philips eICU project.

To support decisions in this setting, my collaborators and I developed a multimodal learning framework for ICU-outcome prediction, published in the *Journal of Healthcare Informatics Research*. It fuses structured EHRs with free-text clinical notes, and uses belief-function theory to weigh the evidence from the notes against the structured data, producing predictions with an explicit measure of reliability.

### Toward broadly capable healthcare AI

Large language models and foundation models have raised the prospect of "universal" clinical AI, but clinical use demands safety, transparency, and domain adaptation. In a survey in *Information Fusion*, I examine whether multimodal learning has actually delivered universal intelligence in healthcare, and map how clinical foundation models need to evolve to handle real patient care — from acute ICU monitoring to chronic-disease prediction.

### Clinical decision support

By connecting structured-data methods with natural-language processing, this line of work aims to ensure no part of a patient's record is left behind, giving the next generation of decision support systems a more complete and trustworthy view of each patient.
