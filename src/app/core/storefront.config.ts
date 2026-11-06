import { environment } from '../../environments/environment';
import { resolveEndpoint } from './endpoint';

export interface StorefrontConfig {
  readonly businessName: string;
  readonly tagline: string;
  readonly description: string;
  readonly heroHeading: string;
  readonly heroDescription: string;
  readonly heroImageUrl: string;
  readonly heroImageAlt: string;
  readonly editorialHeading: string;
  readonly editorialDescription: string;
  readonly editorialImageUrl: string;
  readonly editorialImageAlt: string;
  readonly currencyCode: 'GHS';
  readonly locale: string;
  readonly whatsappNumber: string;
  readonly whatsappUrl: string;
  readonly email: string;
  readonly phone: string;
  readonly facebookUrl: string;
  readonly instagramUrl: string;
  readonly locationLabel: string;
  readonly termsText: string;
  readonly privacyText: string;
  readonly deliveryPolicy: string;
  readonly returnPolicy: string;
  readonly chatEnabled: boolean;
  readonly chatLabel: string;
}

const businessName = 'Your Store';
// Full international business contact number, digits only. Blank hides optional links.
const whatsappNumber = '';

export const STOREFRONT_CONFIG: StorefrontConfig = {
  businessName,
  tagline: 'Discover your next favourite',
  description: 'Browse our collection, compare products, and shop online.',
  heroHeading: 'Find something for you',
  heroDescription: 'Explore current products, compare clear details, and pay securely through Paystack.',
  heroImageUrl: '/images/store-hero.svg',
  heroImageAlt: 'Decorative shopping illustration',
  editorialHeading: 'Explore the collection',
  editorialDescription: 'Compare your options, save your cart, and shop at your own pace.',
  editorialImageUrl: '/images/store-editorial.svg',
  editorialImageAlt: 'Decorative shopping illustration',
  currencyCode: 'GHS',
  locale: 'en-GH',
  whatsappNumber,
  whatsappUrl: whatsappNumber
    ? resolveEndpoint(environment.externalEndpoints.whatsappChat, { number: whatsappNumber })
    : '',
  email: '',
  phone: '',
  facebookUrl: '',
  instagramUrl: '',
  locationLabel: '',
  // Plain text supplied and approved by this business. Keep consistent with backend policies.
  termsText: '',
  privacyText: '',
  deliveryPolicy: '',
  returnPolicy: '',
  // Enable after configuring AI_CHAT_ENABLED and this business's integration on the backend.
  chatEnabled: false,
  chatLabel: `Ask ${businessName}`,
};
