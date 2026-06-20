import { notFound } from 'next/navigation';
import { Product } from '@/lib/types';
import { sampleProducts, getProductById } from '@/lib/products';
import ProductClient from './ProductClient';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return sampleProducts.map((p: Product) => ({ id: p.id }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = getProductById(id);

  if (!product) return notFound();

  return <ProductClient product={product} />;
}
