EmCare – (AI-Assisted Build)

EmCare is an iOS-first maternal health reflection and communication app designed to help pregnant mothers log experiences, generate reflective summaries, and selectively share insights with healthcare providers and family — all with privacy-by-default and role-based access control (RBAC).

This repository contains the mobile app (React Native + Expo).

✨ Core Principles

Mother is the data owner

Privacy by default

Progressive disclosure

Role-based access control (RBAC)

AI is assistive, not diagnostic

iOS-first UX, Android-ready architecture

All architectural and ethical decisions are documented for AI-assisted development.

🧠 Canonical Architecture Context (IMPORTANT)

Before making any changes, read:

docs/CODEX_CONTEXT_EMCARE.md


This file is the single source of truth for:

Product intent

UX principles

Role definitions

Access rules

AI behaviour constraints

Engineering decisions

⚠️ Any AI tool (Codex) must follow this document.
If something is unclear, do not assume — ask.

🛠 Tech Stack
Frontend

React Native

Expo

TypeScript

React Navigation (Native Stack + Tabs)

State & Forms

Zustand – role & session state

react-hook-form + zod – validated inputs

Media & UX

expo-av – voice recording

expo-speech – playback & accessibility

expo-haptics – subtle iOS feedback

react-native-reanimated – animations

Backend (planned)

Supabase

Auth

Postgres (RLS)

Storage (audio / PDFs)

📁 Project Structure
src/
  design/
    tokens/          # colors, spacing, typography (NO raw values)
  components/        # reusable UI components
  navigation/        # RootNavigator, stacks, tabs
  screens/           # feature-based screens
  state/             # Zustand stores (auth, role)
  services/          # API & backend clients
  hooks/
  utils/

docs/
  CODEX_CONTEXT_EMCARE.md

🎨 Design System Rules

No hardcoded colors, spacing, or typography

Use tokens from src/design/tokens

Semantic mappings come later (semanticColors.ts)

UI must be SafeArea-aware

Subtle animations only (150–250ms)

🔐 Roles (RBAC Summary)
Role	Description
Mother	Primary user, full data ownership
Provider	Conditional, read-only summaries
Family	Simplified, non-clinical view
Admin	System & audit access only

RBAC is enforced at:

Data access

UI visibility

Language & framing

🚀 Getting Started
1️⃣ Install dependencies
npm install

2️⃣ Start Expo
npx expo start

3️⃣ Preview the app

Recommended: Expo Go on iPhone → scan QR

Or press i to open iOS Simulator

Always run Expo from the folder that contains package.json

🔁 Development Workflow (Recommended)
1. Update code (manually or via Codex)
2. Expo hot reloads
3. Preview on real iPhone (Expo Go)
4. Iterate

🤖 Using Codex (Mandatory Context)

Every Codex prompt must include:

Context:
This codebase is EmCare, a maternal health platform.
The mother is the data owner.
RBAC, privacy-by-default, and progressive disclosure are mandatory.
Refer to docs/CODEX_CONTEXT_EMCARE.md before making decisions.


Codex should:

Ask before assuming

Never invent roles or permissions

Never introduce diagnostic language

Never bypass consent flows

🧪 Current Build Phase

 Dependencies installed

 Design tokens extracted

 Canonical architecture documented

 Navigation skeleton

 Role & auth store

 First vertical slice: Mother → Daily Entry

⚠️ What NOT to Do (Yet)

❌ Don’t add analytics

❌ Don’t add AI inference on-device

❌ Don’t build all screens at once

❌ Don’t add Android-specific UI

❌ Don’t bypass design tokens

📌 Roadmap (High Level)

Mother daily entry (text + voice)

Local persistence

Weekly summaries

Controlled sharing

Provider read-only view

Family simplified view

Android support

👤 Maintainer

Yashraj Patil
Design-first product builder
EmCare – Maternal Health Platform