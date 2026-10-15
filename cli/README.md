# sujal-nag (CLI Portfolio Card)

> Interactive developer portfolio business card for **Sujal Nag**, executable directly from any terminal using `npx sujal-nag`.

---

## 🚀 Quick Run

Run straight from your terminal with zero installations required:

```bash
npx sujal-nag
```

Or get JSON output programmatically:

```bash
npx sujal-nag --json
```

---

## 🛠️ Features

- **Interactive Terminal Menu**: Open GitHub, LinkedIn, email, or live deployed projects directly in your default browser.
- **Career & Architecture Breakdown**: Detailed breakdown of backend experience, Kafka pipelines, and Gemini multi-agent systems.
- **Zero External Dependencies**: Uses built-in Node.js runtime APIs for instant execution (<250ms).
- **Cross-Platform**: Works smoothly on Windows, macOS, and Linux.

---

## 📦 How to Publish to npm

Follow these simple steps to publish your package so anyone in the world can run `npx sujal-nag`:

### Step 1: Open Terminal in this folder
```bash
cd "g:\virtual intern\projects\portfolio\portfolio\cli"
```

### Step 2: Login to your npm account
*(If you don't have an npm account, create a free one at [npmjs.com](https://www.npmjs.com/signup))*

```bash
npm login
```
*(Enter your username, password, and email verification code)*

### Step 3: Publish to npm
```bash
npm publish --access public
```

Done! Within seconds, anyone can type:
```bash
npx sujal-nag
```
and view your interactive terminal card anywhere in the world!

---

## 💻 Local Testing

Test the package locally before publishing:

```bash
# Direct run
node bin/index.js

# Or link globally on your machine
npm link
sujal-nag
```
