const products = [
  {
    name: "Wildflower Honey",
    description: "Our signature raw honey, bursting with the flavors of Missouri wildflowers.",
    emoji: "🌸",
    badge: "Bestseller",
  },
  {
    name: "Raw Honey",
    description: "Pure, unfiltered honey straight from the hive. Rich, golden, and full of goodness.",
    emoji: "🍯",
    badge: "Pure",
  },
  {
    name: "Honeycomb",
    description: "Experience honey in its most natural form — straight from the comb.",
    emoji: "🐝",
    badge: "Natural",
  },
  {
    name: "Infused Honey",
    description: "Seasonal blends with lavender, cinnamon, or hot pepper for a unique twist.",
    emoji: "✨",
    badge: "Seasonal",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white honeycomb-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-honey-700 mb-4">
            Our Honey 🍯
          </h2>
          <p className="text-honey-700/60 max-w-2xl mx-auto text-lg">
            Straight from our hives to your home — pure, natural, and made with care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-honey-50/80 backdrop-blur-sm rounded-2xl p-6 border border-honey-200/50 hover:border-honey-300 hover:shadow-lg hover:shadow-honey-200/30 transition-all hover:-translate-y-1"
            >
              {/* Badge */}
              <span className="inline-block bg-honey-100 text-honey-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {product.badge}
              </span>

              {/* Emoji placeholder for product image */}
              <div className="text-5xl mb-4">{product.emoji}</div>

              <h3 className="font-heading text-xl font-semibold text-honey-700 mb-2">
                {product.name}
              </h3>
              <p className="text-honey-700/60 text-sm leading-relaxed mb-4">
                {product.description}
              </p>

              <a
                href="#shop"
                className="inline-flex items-center gap-1 text-honey-500 hover:text-honey-600 font-semibold text-sm transition-colors group-hover:gap-2"
              >
                Shop Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Shop CTA */}
        <div id="shop" className="text-center mt-12">
          <a
            href="https://www.instagram.com/happpyhives"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-honey-500 hover:bg-honey-600 text-white px-8 py-3.5 rounded-full text-lg font-heading font-semibold transition-all shadow-lg shadow-honey-500/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            Visit Our Shop
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-honey-700/50 text-sm mt-3">
            DM us on Instagram to order!
          </p>
        </div>
      </div>
    </section>
  );
}
