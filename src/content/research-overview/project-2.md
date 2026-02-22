---
title: 'Trustworthy Medical Foundation Models: Taming Hallucinations in Clinical Text'
pubDate: 'Feb 2 2026'
description: Developing methods to align large language models (LLMs) with verified medical knowledge graphs to ensure accurate and safe clinical text generation.
challenge: While Large Language Models hold great promise for clinical documentation, they frequently "hallucinate" incorrect medical facts, making them unsafe for real-world hospital deployment.
approach: This project integrates structured medical knowledge graphs during model training and develops real-time uncertainty filtering layers to detect and flag potential hallucinations during text generation.
keyFindings: The developed prototype successfully highlights low-confidence phrases in automated medical reports, effectively reducing hallucination risks without compromising the model's diagnostic utility.
relatedPublication: Lin, Q., Zhao, T., He, K., Peng, Z., Xu, F., Huang, L., Ma, J., Feng, M. (2021). "Self-supervised quantized representation for seamlessly integrating knowledge graphs with large language models."
heroImage: '../../assets/project-2.png'
---

**The Challenge**: Large Language Models (LLMs) show immense promise for automating tasks like radiology report generation or summarizing patient histories. However, their tendency to "hallucinate"—confidently generating incorrect medical facts—makes them currently unsafe for real-world clinical deployment.

**My Approach**: This project focuses on aligning general-purpose medical foundation models with rigorous safety standards. I am investigating two primary avenues: 1) Integrating structured medical knowledge graphs during the fine-tuning process to ground the LLM's reasoning in verified facts, and 2) Developing layers that detect and flag potential hallucinations in real-time by analyzing the model's internal uncertainty activations during token generation.

**Current Impact**: Building a prototype system for automated radiology report drafting that highlights low-confidence phrases for human review, aiming to reduce the cognitive load on radiologists without compromising diagnostic accuracy.