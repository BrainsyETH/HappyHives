"use client";

import { useEffect, useCallback } from "react";

export default function InstagramFeed() {
  const loadInstagramEmbed = useCallback(() => {
    // Process any new embeds
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  useEffect(() => {
    // Load Instagram embed script
    if (!(window as any).instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = loadInstagramEmbed;
      document.body.appendChild(script);
    } else {
      loadInstagramEmbed();
    }
  }, [loadInstagramEmbed]);

  return (
    <section id="instagram" className="py-20 bg-honey-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-light text-honey-700 mb-4 tracking-wide uppercase flex items-center justify-center gap-3">
            <svg className="w-9 h-9 sm:w-11 sm:h-11" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow Our Journey
          </h2>
          <p className="text-honey-700/60 max-w-2xl mx-auto text-lg mb-6">
            See what&apos;s buzzing at Happy Hives — from hive inspections to honey harvests
          </p>
        </div>

        {/* Main Instagram Profile Embed — renders the full profile widget with posts */}
        <div className="flex justify-center mb-12">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/happpyhives/"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "12px",
              boxShadow: "0 4px 24px rgba(74, 55, 40, 0.08)",
              margin: "0 auto",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
              width: "calc(100% - 2px)",
            }}
          >
            <div style={{ padding: "16px" }}>
              <a
                href="https://www.instagram.com/happpyhives/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-honey-700/60 py-12"
              >
                Loading @happpyhives...
              </a>
            </div>
          </blockquote>
        </div>

        {/* Additional post embeds in a responsive grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/*
            To show specific posts, add their URLs below.
            Replace these example URLs with real post URLs from @happpyhives.

            To find post URLs:
            1. Go to instagram.com/happpyhives
            2. Click on any post
            3. Copy the URL (e.g. https://www.instagram.com/p/ABC123/)
            4. Replace the href and data-instgrm-permalink below
          */}
          {[
            "https://www.instagram.com/happpyhives/",
            "https://www.instagram.com/happpyhives/",
            "https://www.instagram.com/happpyhives/",
          ].map((url, i) => (
            <div key={i} className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(74, 55, 40, 0.08)",
                  margin: 0,
                  maxWidth: "540px",
                  minWidth: "280px",
                  padding: 0,
                  width: "100%",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-honey-700/40 py-8 text-sm"
                  >
                    View post on Instagram
                  </a>
                </div>
              </blockquote>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/happpyhives"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-8 py-3.5 rounded-full font-heading font-medium tracking-wide transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            See All Posts @happpyhives
          </a>
        </div>

        {/* Instructions for customization */}
        <div className="mt-8 bg-honey-200/30 rounded-xl p-6 max-w-2xl mx-auto text-center">
          <p className="text-honey-700/50 text-sm">
            <strong>To show your posts here:</strong> Replace the placeholder URLs in{" "}
            <code className="bg-honey-200/50 px-1.5 py-0.5 rounded text-xs">components/InstagramFeed.tsx</code>{" "}
            with your real Instagram post URLs (e.g.{" "}
            <code className="bg-honey-200/50 px-1.5 py-0.5 rounded text-xs">https://www.instagram.com/p/ABC123/</code>).
            The embeds will automatically show your photos with captions.
          </p>
        </div>
      </div>
    </section>
  );
}
