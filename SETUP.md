# Development setup

## Prerequisites

- Node.js and npm compatible with the dependencies in `package-lock.json`. A specific tested Node version has not yet been recorded.
- An isolated Supabase project containing only synthetic demo data, or a future local substitute.

## Install and configure

```bash
npm ci
cp .env.example .env.local
```

Set `SUPABASE_URL` and `SUPABASE_KEY` in `.env.local`. The accompanying `lib/supabase.js` reads both variables, replacing the old hard-coded project URL. These variables belong on the server; do not prefix the key with `NEXT_PUBLIC_`.

Use a demo-only project and review its access policies. No working authentication or authorization is established by this configuration. Do not point the prototype at an existing business database or grant it broad access to real records.

## Database gap to resolve

The current repository does not contain a complete Supabase migration/export or seed command. The routes reference `sales`, `employees`, `spareparts` and `carsystems`; nested queries require matching foreign-key relationships. Some referenced fields include `saleid`, `employeeid`, `employeename`, `spareid`, `partnum`, `partname` and `systemname`. This is a partial description of the code, not a complete schema specification.

Export the original schema only if it is yours and contains no confidential material, or implement and verify a fresh schema against the current UI and routes. Commit schema/migrations and a synthetic seed procedure. Do not export production records or credentials.

`db.sqlite` and `models/` belong to a separate Sequelize prototype. They do not provision the Supabase tables or establish a synchronization service. Importing the model code can perform inserts, so review it before running it repeatedly.

## Run and verify

```bash
npm run dev
```

Open http://localhost:3000. Once dependencies and the demo database are configured:

```bash
npm run lint
npm run build
```

These commands have not been executed successfully as part of preparing this documentation. Record the actual Node/npm versions and results after running them.

Walk through inventory loading/filtering, sale creation/editing/deletion, stock behavior and failure cases. The login UI is a navigation mockup, not access control. Service detail, users and settings screens are incomplete. Static dashboard figures are examples.
