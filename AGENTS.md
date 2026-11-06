# Commerce Storefront Starter

Angular 19 standalone components, strict TypeScript, RxJS, and Tailwind CSS 4.
This repo owns the customer UI; backend, admin screens, and shared OrderBridge
are separate projects. Keep existing architecture and use no new dependencies
without a concrete need. Source imports use the existing Angular conventions.

Branding, contacts, policies, hero imagery, and chat visibility belong in
src/app/core/storefront.config.ts. Backend origins belong in
src/environments/backend.config.ts; env files derive /api/v1 and /api.
Configuration is compiled/public. Never put provider or database secrets here.
No client-specific URLs, business records, branded media, or fake reviews/catalog.
Synthetic test fixtures must remain imported only by specs.

Preserve backend API contracts, pagination/caching behavior, precise integer-pesewa
cart arithmetic, GHS checkout, Ghana phone validation, guarded browser storage,
quantity/availability checks, and independent payment/fulfillment/delivery states.
Do not send client prices. The backend is authoritative for totals and payment.
Keep the original idempotency key and exact payload after uncertain checkout.
Browser callbacks never establish payment. Poll with limits and teardown; a timeout
is pending confirmation. Only server-confirmed payment reconciles the purchased
cart snapshot once, preserving unrelated/new quantities. Delivery is separate.

Review routes are /review/:slug?token=... . Safe invitation lookup does not consume
the link. Successful saving consumes it on the backend and publishes immediately.
Preserve used/missing/invalid/mismatched link states, trimmed validation, request
cleanup, duplicate-submit guards, and cache invalidation after known submission.
No login or admin approval is required. Public owner replies use safe interpolation.

The optional shopping assistant calls /api/ai/chat on this backend, using its guarded
session header. Never expose/log session credentials or review tokens. OrderBridge
owns Wasender, PDF receipts, manager alerts, and review reminders; do not implement
their provider logic in the browser. Missing optional WhatsApp links cannot block
checkout. Respect explicit checkout consent.

Keep semantic accessible controls, meaningful alt text, responsive layouts, safe
plain-text rendering, and honest loading/empty/error states. Respect the user's
validation scope: no tests, builds, lint, typechecks, installs, servers, or live
charges for this extraction. Do not claim runtime verification from reading source.
Leave git pushing and deployments to the user unless they instruct otherwise.
