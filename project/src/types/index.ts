export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatHistory {
  messages: Message[];
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  description: string;
  supplierId: string;
}

export interface Supplier {
  id: string;
  name: string;
  contact: string;
  categories: string[];
}