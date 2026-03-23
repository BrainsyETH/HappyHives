export default function Footer() {
  return (
    <footer id="contact" className="bg-honey-700 text-honey-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Happy Hives" className="w-12 h-12 object-contain brightness-200" />
              <span className="font-heading text-2xl font-light text-honey-100 tracking-widest uppercase">
                Happy Hives
              </span>
            </div>
            <p className="text-honey-100/60 leading-relaxed italic">
              Saving the bees one happy hive at a time
            </p>
            <a
              href="https://www.google.com/maps/place/Cuba,+MO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-honey-100/40 text-sm mt-2 block hover:text-honey-100/70 transition-colors"
            >
              📍 Happy Hives — Cuba, MO
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-light tracking-wide uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-honey-100/60 hover:text-honey-100 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-honey-100/60 hover:text-honey-100 transition-colors text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#shop" className="text-honey-100/60 hover:text-honey-100 transition-colors text-sm">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-heading text-lg font-light tracking-wide uppercase mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/happpyhives"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-honey-100/60 hover:text-honey-100 transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @happpyhives
              </a>
              <p className="text-honey-100/40 text-sm">
                DM us on Instagram to place an order or ask questions!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-honey-100/10 mt-12 pt-8 text-center">
          <p className="text-honey-100/40 text-sm">
            &copy; {new Date().getFullYear()} Happy Hives. All rights reserved. Made with love in Cuba, Missouri.
          </p>
        </div>
      </div>
    </footer>
  );
}
