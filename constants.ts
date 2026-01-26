import { Product, Event } from './types';

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Blanket',
    price: 15.00,
    image: 'https://130353302.cdn6.editmysite.com/uploads/1/3/0/3/130353302/2WXIYFNUVPJDO55E7RKJMOVG.jpeg?width=2400&optimize=medium',
    description: 'Soft and warm blanket perfect for chemotherapy sessions, providing comfort and a sense of security.'
  },
  {
    id: '2',
    name: 'Tank Top',
    price: 16.00,
    image: 'https://130353302.cdn6.editmysite.com/uploads/1/3/0/3/130353302/KKZ6XTLADLHD73THQQPLGQCT.jpeg?width=2560&optimize=medium',
    description: 'A comfortable and stylish tank top with our signature ribbon, designed for ease and style during treatment.'
  },
  {
    id: '3',
    name: 'T-Shirt - Unisex',
    price: 20.00,
    image: 'https://130353302.cdn6.editmysite.com/uploads/1/3/0/3/130353302/6BT2I3V7OU3VHC4MD6N3CQXC.jpeg?width=2560&optimize=medium',
    description: 'Our classic unisex t-shirt, a staple for showing support and spreading awareness for the fight against cancer.'
  },
  {
    id: '4',
    name: 'Tote Bag',
    price: 8.00,
    image: 'https://130353302.cdn6.editmysite.com/uploads/1/3/0/3/130353302/A35H7BNWIQA4DL5RHRJJLAUD.jpeg?width=2560&optimize=medium',
    description: 'Durable and practical tote bag to carry all your essentials to and from medical appointments with style.'
  },
  {
    id: '5',
    name: 'Sticker',
    price: 1.00,
    image: 'https://130353302.cdn6.editmysite.com/uploads/1/3/0/3/130353302/VAB7BA7BN5UH6WCFT7ZWY4CA.jpeg?width=2560&optimize=medium',
    description: 'Small but powerful. High-quality stickers to personalize your items and help spread our message of hope.'
  }
];

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Bright Lips Gala 2024',
    date: 'SAT, NOV 16, 2024',
    time: '7:00 PM',
    location: 'Grand Ballroom, Miami, FL 33186',
    status: 'In Stock'
  },
  {
    id: '2',
    title: 'Survivors Wellness Brunch',
    date: 'SUN, DEC 08, 2024',
    time: '10:00 AM',
    location: 'The Garden Plaza, Miami, FL 33172',
    status: 'In Stock'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: '1',
    title: 'Maintaining Hope During Chemotherapy',
    excerpt: 'Discover strategies to stay positive and find small moments of joy during your treatment journey.',
    content: 'The journey through chemotherapy is as much emotional as it is physical. At Bright Lips, we believe that maintaining hope is a vital part of the healing process. Many patients find that focusing on small, daily victories helps maintain a positive outlook. Whether it is a conversation with a loved one, a favorite meal, or simply the comfort of a warm blanket, these moments matter. Our mission is to provide those small gestures of comfort that remind you that you are not alone in this fight. Remember, resilience is built one day at a time.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200'
  },
  {
    id: '2',
    title: 'The Impact of Community Support',
    excerpt: 'No one fights alone. Learn how collective action and small gestures can make a massive difference.',
    content: 'Community support is the backbone of recovery. When a patient feels the embrace of a supportive network, their ability to cope with treatment increases significantly. Bright Lips Against Cancer was founded on the principle that together, we are stronger. Through our recreational activities and gift distributions, we create a network of smiles that stretches across Miami and beyond. Supporting a survivor isn\'t just about the big gestures; it\'s about being there, listening, and offering a bright red smile when things get tough. Join our community today and help us paint the world with resilience.',
    date: 'April 02, 2024',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200'
  }
];

export const HERO_IMAGES = [
  'https://scontent.flas1-1.fna.fbcdn.net/v/t39.30808-6/481161146_1031096459065191_2304942133155110675_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8oo_PvTmlHkQ7kNvwFqEZl6&_nc_oc=Admkvr76NLuUo8wrl1BHv4nSZn0wF1q_s4n2L2M0_RDKmIwzKND94czGqPTTxnMRLc0&_nc_zt=23&_nc_ht=scontent.flas1-1.fna&_nc_gid=lmRin3UxYeAXIOSV6umaQw&oh=00_AfrQPLk0nXgXWdta0p_oBcCxosoLfk3o9zm8X2UJXXSrdA&oe=697D7B6D',
  'https://scontent.flas1-1.fna.fbcdn.net/v/t39.30808-6/468460525_2062378907526102_6464658632890423522_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=43pYHbDQJCcQ7kNvwFEmgOn&_nc_oc=AdnKBNunqO3hw91SaSUV4gGSUO9SzljEQz-JP315ODdoXwHi5FDPT6EbuGly0sgneEg&_nc_zt=23&_nc_ht=scontent.flas1-1.fna&_nc_gid=FgOO1bBBGeiagIkVw1wDRQ&oh=00_AfpV1b298WZAZnGs1ua5XQog_Ssa41Je3MnsBkbXwJ3i3w&oe=697D7DB0',
  'https://130353302.cdn6.editmysite.com/uploads/1/3/0/3/130353302/VAB7BA7BN5UH6WCFT7ZWY4CA.jpeg?width=2560&optimize=medium'
];