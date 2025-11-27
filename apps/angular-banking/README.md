# iO Bank - Angular Edition

A personal banking transaction manager built with Angular 20+, Signals, and TypeScript.

## 🎯 Overview

This application demonstrates modern Angular development practices including:
- ✅ Angular 20+ with Signals for state management
- ✅ Standalone components
- ✅ Reactive forms with validation
- ✅ Computed values for derived state
- ✅ Modern control flow syntax (@if, @for)
- ✅ Professional iO-branded UI/UX design

## ✨ Features

### Core Features
- **Real-time Balance Display** - Shows current account balance with live updates
- **Transaction Management** - Add deposits and withdrawals with validation
- **Transaction History** - View all transactions with timestamps
- **Overdraft Protection** - Prevents withdrawals exceeding available balance

### Bonus Features
- **Transaction Totals** - Displays total deposits and withdrawals using computed signals
- **Color Coding** - Visual distinction using iO's Energetic Blue for deposits
- **Professional Styling** - Modern, clean design with iO branding
- **Currency Formatting** - All amounts displayed with 2 decimal places

## 🚀 Quick Start

1. **Start the development server:**
```bash
npm run angular
```

2. **Open your browser:**
Navigate to `http://localhost:4200/`

## 📋 Business Requirements

- Starting balance: **$1,000**
- Minimum transaction amount: **$0.01**
- Cannot withdraw more than current balance
- All fields required for transactions
- Transactions displayed with most recent first
- Support deposits and withdrawals
- Validate positive amounts and required fields
- Prevent overdraft
- Display transaction history (newest first)
- Show running balance
- Calculate totals (bonus)


## 💻 Technologies Used

- **Angular 20+** - Latest version with Signals
- **TypeScript** - Strict mode enabled
- **RxJS** - Minimal usage (Signals preferred)
- **CSS** - Custom styling with iO brand colors

---

**Powered by Angular Signals**
