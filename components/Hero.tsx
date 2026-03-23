export default function Hero() {
  return (
    <section className="hero-gradient honeycomb-bg min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center py-20">
        {/* Decorative bees */}
        <div className="absolute top-32 left-10 text-4xl animate-bounce opacity-60" style={{ animationDelay: "0.5s" }}>
          🐝
        </div>
        <div className="absolute top-48 right-16 text-3xl animate-bounce opacity-50" style={{ animationDelay: "1.2s" }}>
          🐝
        </div>
        <div className="absolute bottom-32 left-1/4 text-2xl animate-bounce opacity-40" style={{ animationDelay: "0.8s" }}>
          🍯
        </div>

        {/* Brand name */}
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold text-honey-700 mb-6 tracking-tight">
          Happy Hives
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-honey-700/80 font-heading font-normal mb-4">
          saving the bees one happy hive at a time ◡̈
        </p>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-honey-700/60 max-w-xl mx-auto mb-10 leading-relaxed">
          Fresh, raw honey straight from our Missouri bee farm.
          Crafted with love by a beekeeping duo passionate about bees and nature.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#shop"
            className="bg-honey-500 hover:bg-honey-600 text-white px-8 py-3.5 rounded-full text-lg font-heading font-semibold transition-all shadow-lg shadow-honey-500/30 hover:shadow-xl hover:shadow-honey-500/40 hover:-translate-y-0.5"
          >
            Shop Our Honey 🍯
          </a>
          <a
            href="https://www.instagram.com/happpyhives"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-honey-500/40 hover:border-honey-500 text-honey-700 px-8 py-3.5 rounded-full text-lg font-heading font-medium transition-all hover:-translate-y-0.5"
          >
            Follow Our Journey
          </a>
        </div>

        {/* Location badge */}
        <div className="mt-12 inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-honey-700/70">
          <span>📍</span>
          <span>Missouri Bee Farm</span>
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#FFFEF5" opacity=".8"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#FFFEF5" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#FFFEF5"></path>
        </svg>
      </div>
    </section>
  );
}
