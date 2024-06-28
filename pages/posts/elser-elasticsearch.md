---
title: ELSER for Sparse Vectors
date: 2024/3/26
description: Looking at Elastic's v2 sparse vector model
tag: ELSER, Sparse Vectors
author: Michael Cizmar
---

## What are Sparse Vectors

Sparse Encoders like those found in Elastic's ELSER initially appeared to offer the best of both worlds, providing end users with semantic capabilities while maintaining the speed typical of traditional keyword searches. However, our recent findings suggest that this may not always necessarily be the case from a pure relevancy performance stand point. In this blog post, we will explore how ELSER handles these challenges.

### Reduced Computational Complexity:

Sparse vectors contain mostly zero values, which significantly reduces the computational burden. When performing operations on sparse vectors, we only need to consider the non-zero elements. This efficiency is particularly beneficial for large datasets, where faster computations and reduced memory requirements are crucial1.

### Improved Interpretability:

Sparse vectors focus on relative word weights per document. Each dimension corresponds to a word or subword, making it easier to interpret document rankings. In contrast, dense vectors from models like OpenAI Ada-002 or Sentence Transformers contain non-zero values for every element, which can be less interpretable2.

### Enhanced Robustness Against Noise and Interference:

Sparse vectors are like the Marie Kondo of data—they keep only what sparks joy (or relevance). By retaining only a few non-zero values, sparse vectors are less affected by noise and irrelevant features. This robustness is especially valuable in applications like search and recommendation systems2.
In summary, sparse vectors excel in handling large text data, making them crucial for modern data processing and an advancement over traditional methods like BM252. Their efficiency, interpretability, and noise resilience make them a powerful tool in various domains.

## What is Elastic's "Elastic Learned Sparse EncodeR" (ELSER) is a retrieval model developed by Elastic. Let’s dive into its workings:

The Elastic Learned Sparse EncodeR (ELSER) is a retrieval model developed by Elastic. Let’s dive into its workings:

Semantic Search:
ELSER enables semantic search, which goes beyond exact keyword matches. Instead of relying solely on literal matching, it considers contextual meaning and user intent when retrieving search results. This approach provides more relevant results based on the overall context of the query12.

Sparse Vector Representation:
ELSER expands indexed and searched passages into collections of terms. These terms are learned to co-occur frequently within a diverse set of training data.
Importantly, the expanded terms are not synonyms for the search terms; they capture relevance associations.
These terms are then weighted, with some being more significant than others.
Elasticsearch’s sparse vector field type stores these terms and weights at index time and allows efficient searching against them later1.

## Interpretation Complexity:
While ELSER’s approach provides a more understandable search experience compared to vector embeddings, directly interpreting the tokens and weights can be misleading.
The expansion results in a vector in a high-dimensional space, making it challenging to separate individual contributions.
Some tokens, especially those with low weight, contain information intertwined with other low-weight tokens in the representation1.

## Use Cases and Recommendations:
ELSER is recommended for English language documents and queries.
If you want to perform semantic search on non-English language documents, consider using the E5 model.
ELSER V2 offers improved retrieval accuracy and more efficient indexing compared to the initial version1.
In summary, ELSER’s sparse vector representation and semantic search capabilities make it a powerful tool for retrieving relevant information based on context and intent13.