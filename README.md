# Aluvihare Household & Social Assistance Management System

A complete, production-ready household/person management system for the Aluvihare GN Division.
React + TypeScript + Tailwind CSS frontend, Supabase (PostgreSQL + Auth + RLS) backend, deployable to Vercel.

This is a **standalone** application. It does not modify or depend on any existing ID Lookup app.

---

## 1. Supabase Setup

1. Create a free project at [supabase.com](https://supabase.com).
2. Go to **SQL Editor** and run, in order:
   - `supabase/schema.sql` — all tables, indexes, RLS policies, triggers, seed beneficiary categories.
   - `supabase/seed_aluvihare.sql` — *(optional)* 1,423 households + 4,331 persons extracted from the Aluvihare voter list.
3. Go to **Authentication → Users → Add user** and create your first login (email + password).
4. Back in SQL Editor, give that user a role:
   ```sql
   insert into public.users (id, email, full_name, role)
   values ('<paste-auth-user-uuid>', 'admin@office.lk', 'Office Admin', 'admin');
   ```
   (Find the UUID in Authentication → Users.)
5. Copy your **Project URL** and **anon public key** from Project Settings → API.

> The frontend uses **only** the anon key. The `service_role` key is never used in frontend code.

## 2. Run Locally

```bash
cp .env.example .env
# edit .env with your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
npm install
npm run dev
```

Open http://localhost:5173 and log in.

## 3. Deploy to Vercel

**Option A — Vercel Dashboard:**
1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output: `dist`.
4. Add Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Deploy.

**Option B — Vercel CLI:**
```bash
npm i -g vercel
vercel
# answer prompts; add the two env vars when asked
vercel --prod
```

## 4. Features

- 🔐 Secure login (Supabase Auth), session persistence, role-based access (admin/staff)
- 🏠 Dashboard with live stat cards
- 🔎 Global Search — NIC (old/new auto-matched), name, HH number, phone; result appears directly below the search box
- 👤 Person profile — NIC old/new cross-identification, DOB/age auto-derived from NIC, Call/WhatsApp buttons
- 🏘️ Household Management — add/edit/remove households, link members, household detail view
- 👴 Elderly Allowance / 👵 Pensioners / ♿ Disabled Persons tabs
- 🔴 Red ELDERS ALLOWANCE badge auto-shown when anyone in the searched person's household is a beneficiary
- 🧩 Expandable beneficiary system (`beneficiary_categories` + `beneficiaries`) — add Samurdhi, Food, Housing… without schema changes
- 🔗 "Search IWMS" button — copies HH number and opens the IWMS household search
- 📥 Admin → Import (Excel/CSV with column mapping, duplicate detection, success/failed counts)
- 📊 Reports → Export (Excel/CSV for all lists)
- 🧾 Audit logs for every add/edit/remove
- 📱 Mobile-first responsive UI (cards instead of tables on phones)

## 5. Project Structure

```
supabase/
  schema.sql            # tables, indexes, RLS, triggers, seed categories
  seed_aluvihare.sql    # 4,331 persons + 1,423 households (optional seed)
src/
  lib/        # supabase client, NIC utils, file import/export, audit, types
  context/    # AuthContext
  components/ # Layout, PersonProfile, PersonForm, PersonPicker, ui kit
  pages/      # Login, Dashboard, GlobalSearch, Persons, Households,
              # HouseholdDetail, Elderly, Pensioners, Disabled, Reports, Admin
```

## 6. Security Notes

- RLS is enabled on every table.
- Authenticated staff can read/write operational data; only `admin` role can manage users and delete audit logs (`public.is_admin()`).
- Friendly Sinhala/English error messages — raw DB errors are never shown to users.
- To tighten further (e.g. read-only staff), edit the policies in `supabase/schema.sql`.
