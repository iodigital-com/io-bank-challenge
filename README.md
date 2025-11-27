# iO Bank - Technical Challenge

A multi-framework banking transaction manager interview challenge for **iO**. This monorepo contains identical implementations across Angular, React, and Vue to test candidates in their framework of choice.

## 📁 Structure

```
apps/
├── angular-banking/   # Angular 20+ with Signals
├── react-banking/     # React 19 + Next.js 16 with App Router
└── vue-banking/       # Vue 3 + Nuxt 3 with Composition API
```

## 🚀 Quick Start

### Prerequisites

- Node.js 22+ (LTS)
- npm

### Installation

```bash
npm install
```

### Running Applications

Each application runs on its own port:

```bash
# Angular (http://localhost:4200)
npm run angular

# React/Next.js (http://localhost:3000)
npm run react

# Vue/Nuxt (http://localhost:3001)
npm run vue
```

## 🎯 For Interviewers

Each app is a standalone interview challenge where candidates need to implement the same iO Bank transaction manager using framework-specific patterns.

### Challenge Overview

- **Time Limit:** 60 minutes
- **Goal:** Implement a working banking transaction manager with deposits, withdrawals, and transaction history

### What's Pre-built

- Project structure and configuration
- Empty component files with imports
- TypeScript interfaces
- iO-branded styling with company color scheme
- Basic scaffolding

### What Candidates Must Build

- State management (Signals/Context/Composables)
- Transaction form with validation
- Transaction history display
- Balance calculations
- Error handling (overdraft protection)

### Evaluation Criteria

1. **Technical Skills (40%)** - Framework-specific patterns and best practices
2. **Problem Solving (30%)** - Business logic and edge cases
3. **Code Quality (20%)** - Clean, readable, maintainable code
4. **Time Management (10%)** - Working solution within time limit

## 📚 Documentation

Each app contains a `README.md` with an overview, quick start guide, and complete business requirements.

## 🛠️ Technology Stack

### Angular App

- Angular 20+
- Signals for state management
- Standalone components
- Reactive forms
- Modern control flow (@if, @for)

### React App

- React 19
- Next.js 16 App Router
- Context API
- Hooks (useState, useContext, useMemo)
- TypeScript

### Vue App

- Vue 3
- Nuxt 3
- Composition API
- Composables
- TypeScript

## 📋 Business Requirements (All Apps)

- Starting balance: $1,000
- Support deposits and withdrawals
- Validate: positive amounts, required fields
- Prevent overdraft
- Display transaction history (newest first)
- Show running balance
- Calculate totals (bonus)

## 📝 Notes

- Each app is completely independent
- No shared code between apps
- Candidates only need to work in one app folder
- All three implement the same functionality with framework-specific approaches

---

**iO Technical Challenge** | Built with Nx for monorepo management
