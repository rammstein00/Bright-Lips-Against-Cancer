import { Product, Event } from './types';

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
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
    excerpt: 'Discover strategies to stay positive and find small moments of joy during your treatment journey. Emotional resilience is just as important as medical care.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1579154273151-549b0485b0d6?q=80&w=800'
  },
  {
    id: '2',
    title: 'The Impact of Community Support',
    excerpt: 'No one fights alone. Learn how collective action and small gestures from organizations like Bright Lips can make a massive difference in a patient\'s life.',
    date: 'April 02, 2024',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800'
  }
];

export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1200',
  'https://images.unsplash.com/photo-1579154273151-549b0485b0d6?q=80&w=1200',
  'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200'
];