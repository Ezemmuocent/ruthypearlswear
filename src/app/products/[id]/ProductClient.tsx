"use client";

import React, { useState } from 'react';
import { Product, CartItem } from '@/lib/types';
import { formatPrice } from '@/lib/currency';

interface Props {
  product: Product;
}

export default function ProductClient({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  function handleAddToCart() {
    if (!product || !selectedSize || !selectedColor) {
      alert('Please select all options');
      return;
    }

    const cartItem: CartItem = {
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      size: selectedSize,
      color: selectedColor,
    };

    const existingCart = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
    const cart = existingCart ? JSON.parse(existingCart) : [];

    const existingItemIndex = cart.findIndex((item: CartItem) => item.id === cartItem.id);
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
          <span className="text-gray-400 text-lg">Product Image</span>
        </div>

        <div>
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="font-semibold">{product.rating}</span>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
              <span className="text-lg font-bold text-purple-600">{formatPrice(product.price)}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">Size</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg transition ${
                    selectedSize === size
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'border-gray-300 text-gray-700 hover:border-purple-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">Color</label>
            <div className="flex flex-wrap gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-lg transition ${
                    selectedColor === color
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'border-gray-300 text-gray-700 hover:border-purple-600'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
            <div className="flex items-center gap-4">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">−</button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">+</button>
              <span className="text-sm text-gray-600 ml-4">{product.stock} in stock</span>
            </div>
          </div>

          <button onClick={handleAddToCart} className={`w-full py-3 rounded-lg font-semibold text-white transition mb-4 ${addedToCart ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'}`}>
            {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
          </button>

          <div className="border-t pt-6 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Product Details</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Premium quality materials</li>
                <li>✓ Fast and free shipping on orders over $50</li>
                <li>✓ 30-day return policy</li>
                <li>✓ Secure payment processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
