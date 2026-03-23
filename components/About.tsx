export default function About() {
  return (
    <section id="about" className="py-20 bg-honey-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-honey-700 mb-4">
            Our Story 🌻
          </h2>
          <p className="text-honey-700/60 max-w-2xl mx-auto text-lg">
            Meet the beekeeping duo behind Happy Hives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="bg-honey-100 rounded-3xl aspect-square flex items-center justify-center border-2 border-dashed border-honey-300">
            <div className="text-center p-8">
              <span className="text-6xl block mb-4">🐝🌸</span>
              <p className="text-honey-700/50 font-heading text-lg">
                Photo of Helen & Mike
              </p>
              <p className="text-honey-700/40 text-sm mt-2">
                Add your photo here
              </p>
            </div>
          </div>

          {/* Story text */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-honey-700">
              A Beekeeping Duo on a Mission
            </h3>
            <p className="text-honey-700/70 leading-relaxed text-lg">
              We&apos;re Helen and Mike — two nature lovers from Missouri who fell head
              over heels for beekeeping. What started as a backyard hobby quickly
              turned into a passion for protecting pollinators and producing the
              purest honey around.
            </p>
            <p className="text-honey-700/70 leading-relaxed text-lg">
              Every jar of Happy Hives honey comes straight from our Missouri bee
              farm, where our bees forage on wildflowers and untouched meadows.
              No additives, no shortcuts — just the way nature intended.
            </p>
            <p className="text-honey-700/70 leading-relaxed text-lg">
              Our mission is simple: save the bees, one happy hive at a time.
              When you support Happy Hives, you&apos;re supporting sustainable
              beekeeping and healthier ecosystems. 🐝
            </p>

            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <span className="font-heading text-3xl font-bold text-honey-500">📍</span>
                <p className="text-sm text-honey-700/60 mt-1">Missouri</p>
              </div>
              <div className="text-center">
                <span className="font-heading text-3xl font-bold text-honey-500">🌿</span>
                <p className="text-sm text-honey-700/60 mt-1">All Natural</p>
              </div>
              <div className="text-center">
                <span className="font-heading text-3xl font-bold text-honey-500">💛</span>
                <p className="text-sm text-honey-700/60 mt-1">Made with Love</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
