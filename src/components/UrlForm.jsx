import { useState, useEffect } from "react";

import UrlList from "./UrlList";

const getLocalStorage = () => {
  const saved = localStorage.getItem("links");
  return saved ? JSON.parse(saved) : [];
};

const UrlForm = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [error, setError] = useState("");
  const [links, setLinks] = useState(getLocalStorage());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputUrl.trim()) {
      setError("Please add a link");
      return;
    }

    try {
      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${inputUrl}`
      );
      const data = await res.json();

      if (!data.ok) throw new Error("Failed to shorten");

      const newLink = {
        original: data.result.original_link,
        short: data.result.full_short_link,
      };

      setLinks((prev) => [newLink, ...prev]);
      setInputUrl("");
    } catch (err) {
      console.error("Error fetching shortened URL:", err);
      alert(`Something went wrong: ${err.message}`);
    }
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <section
      className="
    mt-12
    bg-no-repeat bg-cover bg-center
    bg-[url('/bg-shorten-mobile.svg')]
    md:bg-[url('/bg-shorten-desktop.svg')]
    px-4 py-6 md:px-12 md:py-10
    rounded-lg
    text-white
    bg-primary-dark-violet
    flex flex-col justify-between gap-4 w-full
    "
    >
      <form
        onSubmit={handleSubmit}
        className="w-full mt-6 flex flex-col items-center gap-4 md:flex-row md:items-stretch"
      >
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          className={`
    w-full flex-1 p-3 rounded border-3
    bg-white text-neutral-very-dark-blue
    placeholder:text-gray-400
    focus:outline-none focus:ring-2
    ${
      error
        ? "border-secondary-red placeholder:text-secondary-red"
        : "border-transparent"
    }
  `}
        />
        {/* Error for small screens only */}

        {error && (
          <p className="font-medium italic self-start text-secondary-red text-[12px] leading-4 tracking-[0.08px] md:hidden">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="bg-primary-cyan text-white px-4 py-2 rounded w-full cursor-pointer whitespace-nowrap hover:bg-cyan-hover md:w-auto md:px-8"
        >
          Shorten it!
        </button>
      </form>
      {/* Error for medium+ screens only */}
      {error && (
        <p className="font-medium italic self-start text-secondary-red text-[12px] leading-4 tracking-[0.08px] hidden md:block">
          {error}
        </p>
      )}
      {/* Show list of links */}
      <UrlList links={links} />
    </section>
  );
};

export default UrlForm;
