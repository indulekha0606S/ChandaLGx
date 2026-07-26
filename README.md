# ChandaLGx 🪶 — Sanskrit Prosody Intelligence

> **The Advanced Sanskrit Chandas (Meter) Detection Engine & Visualizer**

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

**ChandaLGx** is a high-precision engine and interactive web application designed to analyze Sanskrit verses (Shlokas), compute syllable weights (**Laghu** `l` / **Guru** `G`), perform Gana breakdown, and accurately identify classical Sanskrit meters (*Chandas*) such as **Anushtubh**, **Indravajra**, **Upendravajra**, **Upajati**, and more.

---

## ✨ Features

- **⚡ Instant Meter Detection**: Automatically detects meters across classical Sanskrit poetry formats.
- **📜 Multi-Script Support**: Accepts inputs in **Devanagari**, **IAST** (International Alphabet of Sanskrit Transliteration), and standard **ASCII** transliteration.
- **⚖️ Advanced Prosody Rule Engine (v2.0)**:
  - **Vowel Length Analysis**: Differentiates short vowels (`a, i, u, ṛ, ḷ`) and long vowels (`ā, ī, ū, e, ai, o, au`).
  - **Aspirated Digraphs**: Correctly handles 2-character Roman consonants (`kh, gh, ch, jh, th, dh, ph, bh, sh`) as single consonants.
  - **Anusvara & Visarga Weighting**: Accurately evaluates Guru weight additions from Anusvara (ं / `ṃ`) and Visarga (ः / `ḥ`).
  - **Conjunct & Sandhi Dynamics**: Evaluates syllable weight shifts before conjunct consonants across words.
- **📊 Gana & Syllable Breakdown**: Visualizes Laghu/Guru sequences and Gana groupings (Ya, Ma, Ta, Ra, Ja, Bha, Na, Sa).
- **🎨 Premium UI & Interactive Visualizer**: Modern interface built with clean typography, smooth animations, and dynamic responsive layouts.

---

## 🛠️ Project Structure

```
ChandaLGx/
├── index.html     # Main application UI layout
├── style.css      # Design system & responsive styling
├── detector.js    # ChandaLGx Core Prosody Engine (v2.0 logic)
├── app.js         # UI interactions, DOM binding, & result rendering
└── README.md      # Project documentation
```

---

## 🚀 Getting Started

### Running Locally
No complex installation or server setup required! Simply clone or download the repository and open `index.html` in any web browser:

1. Clone the repository:
   ```bash
   git clone https://github.com/indulekha0606S/ChandaLGx.git
   ```
2. Navigate into the directory:
   ```bash
   cd ChandaLGx
   ```
3. Open `index.html` in your browser.

---

## 📚 Supported Meters (Examples)

| Meter (छन्दस्) | Syllables / Quarter | Pattern & Characteristics |
| :--- | :---: | :--- |
| **Anushtubh (अनुष्टुभ्)** | 8 | 5th syllable Laghu, 6th Guru in each quarter |
| **Indravajra (इन्द्रवज्रा)** | 11 | Pattern: Ta - Ta - Ja - Ga - Ga |
| **Upendravajra (उपेन्द्रवज्रा)** | 11 | Pattern: Ja - Ta - Ja - Ga - Ga |
| **Upajati (उपजाति)** | 11 | Combination of Indravajra and Upendravajra quarters |

---

## 💻 Tech Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom Design System & Tokens)
- **Engine**: Pure JavaScript (ES6+ Class-based Prosody Rule Engine)
- **Deployment**: Vercel
- **Typography**: Google Fonts (Cinzel, Cormorant Garamond, Inter)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
