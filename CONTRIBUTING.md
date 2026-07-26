# Contributing to ChandaLGx 🪶

Thank you for your interest in contributing to **ChandaLGx — Sanskrit Prosody Intelligence**! We welcome contributions from developers, linguists, and Sanskrit scholars.

## How Can You Contribute?

### 1. Reporting Bugs
If you find an incorrect meter identification, syllable weight miscalculation, or UI glitch:
- Open a [GitHub Issue](https://github.com/indulekha0606S/ChandaLGx/issues).
- Provide the input verse (in Devanagari, IAST, or ASCII), expected output, and actual output.

### 2. Adding New Meters
We are actively expanding the prosody engine to support additional Sanskrit meters (*Vrttas* and *Jatis*).
- Check `detector.js` for meter definition patterns.
- Ensure any new meter includes sample verses for verification.

### 3. Submitting Pull Requests
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-meter-support`).
3. Commit your changes (`git commit -m 'feat: add Vasantatilaka meter detection'`).
4. Push to your branch (`git push origin feature/new-meter-support`).
5. Open a Pull Request on the main repository.

## Coding Standards
- Keep `detector.js` pure JavaScript with zero external dependencies.
- Ensure all prosody rules follow traditional Sanskrit *Chandas* literature (e.g., *Pingala Chandas Sutra*).
- Maintain responsive, accessible CSS in `style.css`.
