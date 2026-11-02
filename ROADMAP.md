# mcparts roadmap

Proposed work for resuming the personal prototype. All items below remain open. Estimates are planning ranges, not completed hours or a commitment to a paid session. The owner should retain only work they genuinely plan to undertake.

| Work item | Completion criteria | Estimated hours |
| --- | --- | --- |
| Reproducible demo database | Versioned Supabase schema/migrations, synthetic seed script, documented access policies and a clean setup walkthrough | 4–6 |
| Reliable sales workflow | Await and return mutations; validate inputs; return correct HTTP error statuses; show loading/failure/success states; verify create/update/delete | 4–6 |
| Inventory and stock consistency | Complete add/edit flows; validate stock values; make sales and stock adjustments consistent, including simultaneous updates | 6–8 |
| Database-backed overview | Replace static dashboard totals and charts with verified queries and empty/error states | 4–6 |
| Meaningful verification | Cover invalid sales, insufficient stock, failed mutations and stock consistency; add a reproducible CI check | 5–8 |
| **Total** | | **23–34** |

## Order of work

1. Verify ownership, licensing, data provenance and repository hygiene before submission.
2. Restore a reproducible development environment with an isolated synthetic dataset.
3. Complete sales and inventory behavior, then reporting and regression coverage.

## Additional future work (not included in the estimate)

- Decide on the long-term database architecture; document or remove unused SQLite experiments.
- Implement authentication and authorization with fictitious demo identities; verify database policies.
- Complete service detail, users and settings screens.
- Review dependencies and validate production builds.
- Improve accessibility, mobile layouts and documentation.

No real customer records, employee records or payment/financial records are needed for this backlog.
