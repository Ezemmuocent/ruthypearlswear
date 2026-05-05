'use client';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About RuthyPearls Wear</h1>
        <p className="text-xl text-gray-600">
          Bringing quality fashion to every woman
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            RuthyPearls Wear was founded with a simple mission: to provide high-quality,
            affordable fashion for modern women. We believe that every woman deserves to
            feel confident and stylish without breaking the bank.
          </p>
          <p className="text-gray-600">
            Our carefully curated collection features pieces that are both trendy and timeless,
            ensuring that you'll find something perfect for any occasion.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">✓</span>
              <span className="text-gray-600"><strong>Quality:</strong> We use premium materials and craftsmanship</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">✓</span>
              <span className="text-gray-600"><strong>Affordability:</strong> Fashion shouldn't be expensive</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">✓</span>
              <span className="text-gray-600"><strong>Inclusivity:</strong> All sizes and styles welcome</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">✓</span>
              <span className="text-gray-600"><strong>Sustainability:</strong> Eco-friendly practices</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Get your orders delivered quickly and safely</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Easy Returns</h3>
            <p className="text-gray-600">30-day return policy for your peace of mind</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Customer Support</h3>
            <p className="text-gray-600">24/7 support to help with your needs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
