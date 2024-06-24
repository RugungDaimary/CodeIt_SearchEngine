# CodeIt-SearchEngine

CodeIt-SearchEngine is a high-performance search engine application designed to retrieve information from a corpus of 3023 programming problems using the BM25 algorithm. It provides efficient search capabilities over problems sourced from platforms like LeetCode, InterviewBit, and Codeforces.

## Features

- **BM25 Algorithm**: Implements BM25 for efficient document ranking based on query relevance.
- **Pre-saved Corpus**: Includes 3023 problems from LeetCode, InterviewBit, and Codeforces for comprehensive coverage.
- **Edge Case Handling**: Handles diverse search scenarios with techniques like number-word conversion, lemmatization, spell-checking, and camel case conversion.
- **Custom Scoring Metrics**: Utilizes custom metrics such as title matching and source reliability for accurate search results.
- **Optimized Search Speed**: Ensures quick response times using RAM-based indexes and TF-IDF indexes.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework for Node.js.
- **ejs**: Embedded JavaScript templates for dynamic HTML rendering.
