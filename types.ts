
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status: 'In Stock' | 'Sold Out';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
