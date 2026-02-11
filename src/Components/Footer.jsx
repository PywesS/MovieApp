import React from "react";

function Footer() {
  return (
    <footer id="footer" className="bg-[#0F0E0E] border-t border-white/5 mt-40">
      {/* Footer Top */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {/* Link1 */}
        <div>
          <h2 className="text-white font-bold text-xl xl:text-2xl">
            Cine<span className="text-[#008BFF]">Vault</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Discover trending, popular, and top-rated movies from around the
            world.
          </p>
        </div>

        {/* Link2 */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider xl:text-base">
            Explore
          </h3>
          <ul className="mt-4 space-y-2">
            {["Home", "Movies", "Popular", "Genres"].map((name) => (
              <li key={name}>
                <a
                  href={`#${name}`}
                  className="text-gray-400 text-sm hover:text-[#008BFF] transition"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider xl:text-base">
            About
          </h3>
          <ul className="mt-4 space-y-2">
            {["About", "Contact", "FAQ", "Blog"].map((name) => (
              <li key={name}>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-[#008BFF] transition"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider xl:text-base">
            Movie Updates
          </h3>
          <p className="mt-4 text-gray-400 text-sm">
            Get updates on trending and upcoming movies.
          </p>

          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 rounded-l-md focus:outline-none"
            />
            <button className="bg-[#008BFF] hover:bg-blue-500 transition px-4 text-sm rounded-r-md text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © 2026 PywesS. Powered by{" "}
            <span className="text-[#008BFF]">TMDB API</span>
          </p>
          <ul className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((name) => (
              <li key={name}>
                <a href="#" className="hover:text-[#008BFF] transition">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
