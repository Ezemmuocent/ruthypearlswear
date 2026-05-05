import { NextRequest, NextResponse } from 'next/server';
import { sampleProducts, searchProducts, getAllCategories } from '@/lib/products';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');
  const category = searchParams.get('category');

  try {
    let products = sampleProducts;

    if (query) {
      products = searchProducts(query);
    } else if (category && category !== 'all') {
      products = sampleProducts.filter(p => p.category === category);
    }

    return NextResponse.json({
      success: true,
      data: products,
      count: products.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
