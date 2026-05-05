import { Product } from './types';

// Sample product data - replace with database queries
export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    description: 'High-quality cotton t-shirt, comfortable for everyday wear. Available in various colors.',
    price: 22500,
    image: '/images/tshirt-1.jpg',
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy', 'Gray', 'Red'],
    stock: 50,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: '2',
    name: 'Elegant Blazer',
    description: 'Sophisticated blazer perfect for formal occasions and professional settings.',
    price: 97500,
    image: '/images/blazer-1.jpg',
    category: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Burgundy', 'Gray'],
    stock: 30,
    rating: 4.8,
    reviews: 95,
  },
  {
    id: '3',
    name: 'Skinny Jeans',
    description: 'Classic skinny jeans with comfortable stretch fabric.',
    price: 45000,
    image: '/images/jeans-1.jpg',
    category: 'Bottoms',
    sizes: ['24', '25', '26', '27', '28', '29', '30', '32'],
    colors: ['Dark Blue', 'Light Blue', 'Black', 'Gray'],
    stock: 45,
    rating: 4.6,
    reviews: 156,
  },
  {
    id: '4',
    name: 'Summer Floral Dress',
    description: 'Beautiful floral dress perfect for summer occasions and casual outings.',
    price: 60000,
    image: '/images/dress-1.jpg',
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Floral Pink', 'Floral Blue', 'Floral Green'],
    stock: 25,
    rating: 4.7,
    reviews: 82,
  },
  {
    id: '5',
    name: 'Sneaker Collection',
    description: 'Comfortable and stylish sneakers for everyday wear and sports.',
    price: 67500,
    image: '/images/sneakers-1.jpg',
    category: 'Footwear',
    sizes: ['5', '6', '7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Navy', 'Gray', 'Pink'],
    stock: 60,
    rating: 4.4,
    reviews: 203,
  },
  {
    id: '6',
    name: 'Wool Cardigan',
    description: 'Cozy wool cardigan for layering and warmth in cooler months.',
    price: 75000,
    image: '/images/cardigan-1.jpg',
    category: 'Knitwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Charcoal', 'Burgundy', 'Navy'],
    stock: 35,
    rating: 4.9,
    reviews: 67,
  },
];

export function getProductById(id: string): Product | undefined {
  return sampleProducts.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return sampleProducts.filter(product => product.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return sampleProducts.filter(
    product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
  );
}

export function getAllCategories(): string[] {
  return [...new Set(sampleProducts.map(p => p.category))];
}
