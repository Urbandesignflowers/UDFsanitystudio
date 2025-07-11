// Currency code (ISO 4217) to use when displaying prices in the studio
// https://en.wikipedia.org/wiki/ISO_4217
export const DEFAULT_CURRENCY_CODE = 'GBP'

// Document ids which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_IDS = ['home', 'settings']

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_TYPES = ['media.tag']

// References to include in 'internal' links
export const PAGE_REFERENCES = [
  { type: 'collection' },
  { type: 'home' },
  { type: 'page' },
  { type: 'product' }
]

// API version to use when using the Sanity client within the studio
// https://www.sanity.io/help/studio-client-specify-api-version
export const SANITY_API_VERSION = '2021-06-07'

// Your Shopify store ID.
// This is your unique store URL (e.g. 'my-store-name.myshopify.com').
// Set this to enable helper links in document status banners and shortcut links on products and collections.
export const SHOPIFY_STORE_ID = 'admin.shopify.com/store/urban-design-flowers'

export const BLOCKS = [
  {type: 'pageBannerExtended'},
  { type: 'imagesBanner' },
  { type: 'pageBanner' },
  { type: 'productCarousel' },
  { type: 'textContent' },
  { type: 'posts' },
  {type: 'blogPosts'},
  { type: 'reviews' },
  { type: 'collectionsBanner' },
  { type: 'contactBanner' },
  { type: 'textImage' },
  { type: 'pageHeader' },
  { type: 'gallery' },
  { type: 'contentBanner' }
]
