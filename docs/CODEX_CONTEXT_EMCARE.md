0. Purpose of This Document

This document is the single source of truth for all architectural, UX, ethical, and implementation decisions in EmCare.

Any AI system (Codex) working on this codebase must comply with this document before making or suggesting changes.

If a decision is not explicitly allowed here, Codex should ask for clarification rather than assume.

1. Product Definition (High-Level Intent)
What EmCare Is

EmCare is a maternal health reflection and communication platform that enables pregnant mothers to:

log health and emotional experiences

reflect through AI-assisted summaries

selectively and progressively share information with trusted stakeholders

What EmCare Is Not

Not a diagnostic or clinical decision system

Not a social network

Not an electronic health record (EHR)

Not a default data-sharing platform

The mother is always the data owner.

2. Core Architectural Principle (Non-Negotiable)
Role-Based Access Control (RBAC) with Adaptive Interfaces

RBAC is enforced at three simultaneous layers:

Data access

UI visibility

Language and framing

A user’s role must always be known and checked before:

rendering UI

fetching data

performing actions

3. Canonical User Roles
3.1 Pregnant Mother (Primary User)

Authority: Full data ownership

Capabilities:

Create, edit, delete personal entries

Control sharing (who, what, when, duration)

View and edit AI-generated summaries

Revoke access at any time

UX rules:

Voice-first friendly

Low cognitive load

Non-clinical language by default

Emotionally reassuring tone

3.2 Healthcare Provider (OB/GYN, Midwife)

Authority: Conditional, read-only

Capabilities:

View summaries or auto-flagged insights only

View trends and red flags

Access short audio clips if explicitly enabled

Restrictions:

Cannot edit raw journal data

Cannot see unshared entries

UX rules:

Time-efficient

Actionable summaries only

No long narrative text

Clinically neutral language

3.3 Family Member (Secondary User)

Authority: Limited, non-clinical

Capabilities:

View simplified wellbeing indicators

Receive supportive suggestions

Restrictions:

No clinical terms

No scores, diagnoses, or symptom labels

UX rules:

Icons over text

Plain, supportive language

No alarming visuals

3.4 Administrator (System / Hospital Admin)

Authority: System-level only

Capabilities:

Role assignment

User management

Audit logs

Emergency overrides (must be logged)

Restrictions:

No access to personal health narratives

4. Canonical Feature Access Matrix
Feature	Mother	Provider	Family	Admin
Raw Journal Entries	Full	❌	❌	❌
AI Tags (pain, mood)	Editable	Summary only	❌	❌
Weekly Summary	Editable	Auto-flagged	Simplified	❌
Sharing Controls	Full	❌	❌	❌
Messaging	Opt-in	Secure	❌	❌
Clinical Notes	❌	Full	❌	❌
Audit Logs	❌	❌	❌	Full

Codex must never violate this table.

5. Canonical User Flow Logic
5.1 Daily Entry

Mother logs entry via text or voice

Entry is private by default

AI extracts tags (symptom, mood)

No automatic sharing

UX principle: Privacy by Default

5.2 Summary Generation

Weekly AI aggregation

Detects trends (e.g. ↑ pain days)

Summary is editable by mother

Provider access:

Only if risk threshold crossed

Read-only

UX principle: Progressive Disclosure

5.3 Share Flow

Mother explicitly selects recipient

Chooses level of detail

Chooses duration

System:

Sends encrypted output (PDF / secure link / SMS)

Logs sharing action

UX principle: Granular Consent (GDPR-aligned)

5.4 Provider View

Timeline of red flags

Trend indicators

Optional short audio clips

UX principle: Information Scent

5.5 Family View

Simplified wellbeing indicators

Supportive suggestions only

UX principle: Affordances (icons > text)

6. AI Behaviour Constraints (Critical)

AI outputs must:

Never diagnose

Never use definitive clinical language

Always frame insights as suggestions

Allowed phrasing:

“Detected pattern”

“May be helpful to reflect on…”

“You may want to discuss this with your provider”

AI is assistive, not authoritative.

7. Platform Strategy
Current

iOS-first implementation

Future

Android support using shared logic

Platform-specific UI adaptations allowed

No platform-specific business logic

8. UI & UX Implementation Rules

SafeArea-aware layouts (mandatory)

Voice input treated as first-class

Subtle animations only (150–250ms)

No panic colors or alerts unless clinically justified

Offline-first journaling with delayed sync

9. Engineering Rules (Low-Level)
General

Component-first architecture

Design tokens only (no hardcoded UI values)

Small, single-responsibility files

State

Shared state via Zustand (preferred)

Screen-local state kept local

Role always part of state context

Networking

No direct API calls inside UI components

Services layer required

All data access scoped by role

Navigation

Centralized route definitions

Typed route params

No inline route strings

10. Compliance & Ethics Assumptions

Codex must assume alignment with:

HIPAA-style privacy handling

Australian My Health Record interoperability (future)

Auditability of all access

Cultural safety for migrant users

This affects:

Logging

Encryption

Language tone

Access revocation

11. Codex Prompting Rule (Mandatory)

Every Codex prompt must include:

Context:
This codebase is EmCare, a maternal health platform.
The mother is the data owner.
RBAC, privacy-by-default, and progressive disclosure are mandatory.
Refer to CODEX_CONTEXT_EMCARE.md before making decisions.

12. What Codex Should Do If Unsure

Ask for clarification

Do not invent new roles

Do not expand access

Do not simplify consent flows

Do not assume clinical authority

End of Canonical Context

This document overrides all implicit assumptions.