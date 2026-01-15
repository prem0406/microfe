# microfe

> A demo Micro‑Frontend application / example project ⚡

This repository contains a demonstration of a **micro‑frontend (MicroFE / microfe) architecture** — showcasing how to structure, develop and run modular frontend applications that can be composed together. Micro‑frontend architectures help build scalable and independently deployable UI components or applications.

## 🧱 What Is This?

This project is a **Micro‑Frontend demo app** that illustrates how you can split a frontend application into separate modules which can be developed, built and deployed independently.

Micro‑Frontend is a design pattern inspired by microservices where a frontend app is composed of multiple smaller apps, each owning its own codebase and lifecycle.

## 🚀 Features

- Modular frontend structure
- Multiple independently running packages (under `packages/`)
- Example setup using modern tooling

## 📁 Project Structure

```
microfe/
├── packages/                  # Each front‑end app/module
│   ├── <module‑name>/         # E.g. home, dashboard, auth, etc.
│   └── ...
├── .gitignore
├── package.json
├── pnpm‑lock.yaml
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- pnpm

### Install Dependencies

```bash
pnpm install
```

### Run Locally

```bash
pnpm dev
```

## 📦 Build

```bash
pnpm build
```

## ⚙️ Architecture Overview

Each micro‑frontend:
- Can be developed independently
- Can be deployed independently
- Is composed together via a host/shell application

## 🧡 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

## 📄 License

No license specified yet.
