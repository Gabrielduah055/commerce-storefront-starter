# Commerce Storefront Starter

Angular 19 customer storefront for the separate commerce-backend-starter API.
Includes real catalog/category browsing, search/filter/sort, product details,
persistent cart, backend-hosted Paystack checkout, payment recovery, sharing,
purchase-linked reviews, public owner replies, and an optional shopping assistant.
Node 22. No client database, credentials, production endpoint, or branded imagery
is bundled. The catalog comes only from the connected backend; no demo records or
fabricated reviews are rendered as customer data.

Source: Gabrielduah055/Kawama, commit
`4784cf8903f3025d5f7f31c3efff4e5d1c34b166` (including merged review PR #12).
Existing checkout and review workflows are retained. This is an extraction with
source inspection only, not an end-to-end-verified release.

## Configure each client

| File | Set |
| --- | --- |
| `src/environments/backend.config.ts` | Development and production backend origins, WITHOUT `/api` or `/api/v1` |
| `src/app/core/storefront.config.ts` | Business name, tagline, descriptions, images, contacts, location, policies, and optional chatbot toggle |
| `src/styles/storefront.css` | Main `:root` design tokens such as `--primary`, `--primary-dark`, and surfaces |
| `src/styles.css` | Tailwind theme colors and typography; match the main design tokens |
| `src/index.html` | Static page-title/description fallback, theme color, fonts and icon links |
| `public/favicon.svg` | The business favicon |

Development defaults to `http://localhost:3000`. Production deliberately uses
`https://api.example.invalid`; replace it with the new backend's HTTPS origin.
Both `/api/v1` and `/api` are derived from that one origin. Never point a new store
at an existing client's backend. Use a separate deployment/database per client.

Configuration is public, compiled TypeScript. Editing these values requires a new
build/deployment. Adding similarly named Vercel environment variables or a `.env`
file alone will not change the Angular bundle. Never put MongoDB, JWT, Paystack,
Cloudinary, OrderBridge, Wasender, or OpenRouter secrets in this repository.

Leave contact/social values blank until known; optional links are hidden. WhatsApp
uses full international digits without + or spaces. A blank number does not block
checkout. The contact email/phone/location are optional. Default SVG illustrations
are placeholders; replace the files or configured image URLs/alt text with the new
business's approved imagery. Product/category images are supplied by its API.

Populate terms, privacy, delivery, and return text with the business's approved
content. Text renders through safe interpolation with line breaks. Blank sections
state that information is not yet published; they are not complete business policies.
Keep them consistent with the backend's approved STORE_* policy/contact settings.

## Connect the backend

On the commerce backend configure:

- A fresh MongoDB database supporting transactions, owner bootstrap account,
  unique JWT secret, store name/order prefix, and the business's Cloudinary settings.
- `FRONTEND_ORIGINS` containing the exact storefront and admin origins, comma-separated
  and without trailing slashes. Local defaults: ports 4200 and 4201.
- `STOREFRONT_BASE_URL` set to the storefront origin, and an HTTPS
  `STOREFRONT_PRODUCT_URL_TEMPLATE` matching `/product/{slug}` in production.
- `PAYSTACK_SECRET_KEY` from the client's matching test/live merchant account,
  `PAYSTACK_CALLBACK_URL=<storefront-origin>/checkout/result`, and the webhook in
  Paystack's matching mode: `https://YOUR-API-HOST/api/v1/webhooks/paystack`.
- A separate random `REVIEW_LINK_SECRET` of at least 32 characters.

The frontend needs no Paystack public key or browser SDK. Checkout sends only the
validated customer details and actual API product IDs/quantities. The backend
recalculates product prices and verifies payment. A redirect/reference query is not
payment proof. Uncertain attempts retain the same idempotency key and exact payload;
never replace them silently. Pending confirmation and `needs_attention` remain
separate from paid status. Cart reconciliation occurs once for a verified payment.

The existing flow uses GHS and Ghana local/international phone validation. Product
payment excludes delivery; fees are arranged separately. Other currencies, delivery
charging, tax, refunds, discounts, or different checkout rules require deliberate
backend and frontend work rather than changing a display label.

## OrderBridge and WhatsApp

The browser calls its backend, not OrderBridge directly. On the backend configure
`ORDERBRIDGE_BASE_URL`, the new `ORDERBRIDGE_BUSINESS_ID`, and its server-only
`ORDERBRIDGE_WEBSITE_INTEGRATION_KEY`. Configure the distinct incoming
`ORDERBRIDGE_API_KEY` in that business's commerce integration on OrderBridge.

For shopping chat, enable `AI_CHAT_ENABLED=true` on the backend, then set
`chatEnabled: true` in storefront.config.ts. The label follows the business name.
The widget keeps owner-bound chat identifiers in guarded session storage and passes
current product context. Product links use returned catalog slugs. Provider secrets,
models and knowledge remain server-side.

For post-payment PDF receipts, manager notifications, and review reminders, enable
`ORDERBRIDGE_PAID_ORDER_EVENTS_ENABLED=true` on the backend. Configure this business's
WhatsApp session, sending credentials, owner/manager recipients, paid-order toggle,
and receipt storage on the shared OrderBridge service. Product-media Cloudinary on
the commerce backend does not configure receipt storage on OrderBridge. PDF delivery
must be allowed in that account. Sending depends on the deployed OrderBridge version
and still needs the owner's manual end-to-end check.

Single-use review URLs have `/review/<slug>?token=...`. Opening does not consume a
link; a successful review save consumes it server-side and publishes immediately.
The page handles invalid, used, mismatched, and ineligible links. Do not strip the
token query when sharing or navigating. Each purchased product has its own invitation;
admin replies appear publicly on the corresponding product. There is no approval UI.

## Setup and hosting

After configuring the files, install dependencies with `npm ci` and use `npm start`
for local development. `npm run build` produces
`dist/commerce-storefront-starter/browser`. These are instructions, not commands run
while preparing this starter.

`vercel.json` selects Angular, that build output, and an index.html SPA rewrite so
product, payment-result, and review URLs can be opened directly. Connect this new
repository to its own Vercel project. There is no copied hosting project binding.
For another host, serve the browser output and configure the same SPA fallback.
Vercel configuration reference: https://vercel.com/docs/project-configuration/vercel-json

Browser storage keys use the generic commerce namespace. Give each client a separate
origin; clear local browser storage when switching local development between clients.
Synthetic product fixtures live under `src/app/testing` and are imported only by
specs, outside the production application import graph. No fixtures are live catalog data.

## Validation status

No tests, builds, typechecks, lint, installs, servers, seeds, pushes, or deployments
were run during extraction. Dependency versions and inherited specs are retained;
only renamed symbols, synthetic URLs/storage keys, and fixture paths were synchronized.
Before launch, manually check mobile navigation, real catalog/images, cart persistence,
checkout and delayed confirmation, customer receipt/review reminder delivery, direct
review URLs, single-use submission, public reviews, and owner replies.
