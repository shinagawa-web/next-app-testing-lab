# 🧪 Next.js App Router Testing Lab

[![codecov](https://codecov.io/gh/shinagawa-web/next-app-testing-lab/graph/badge.svg?token=IHGARG4N9P)](https://codecov.io/gh/shinagawa-web/next-app-testing-lab)

This repository demonstrates how to structure and implement testing in a Next.js 13+ project using the **App Router**.

It includes practical examples of:

- ✅ Unit testing with **Jest** and **React Testing Library**
- 🔁 Integration testing with mocked **next/navigation**
- 🌐 End-to-end testing with **Playwright**
- 🧱 Coverage of **Client Components**, **Server Components**, and **Server Actions**

## 🔍 What's Inside

├── app/ # App Router structure 
├── components/ # Testable UI components 
├── tests/ # Unit and integration tests 
├── tests/ # Playwright E2E tests 
├── playwright.config.ts # Playwright configuration 
└── jest.config.ts # Jest configuration

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run unit/integration tests:


```bash
npm run test
```

Run E2E tests (Playwright):

```bash
npm run test:e2e
```

## Full Article (Recommended)
This repository is based on the following blog post.
It explains the testing strategies, test structure, and key implementation details step-by-step.

📖 Read the full guide here
👉 http://shinagawa-web.com/blogs/nextjs-app-router-testing-setup


## Requirements
- Node.js 18+
- Next.js 13+ (App Router)
- Playwright
- Jest + React Testing Library

## License
MIT
