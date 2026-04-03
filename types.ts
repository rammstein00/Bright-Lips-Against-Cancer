
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

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar_url: string | null;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
  error?: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}
