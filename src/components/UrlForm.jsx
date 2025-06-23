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
    setError("");

    // Input validation
    if (!inputUrl.trim()) {
      setError("Please add a link");
      return;
    }

    // Helper function to normalize URL
    const normalizeUrl = (url) => {
      return url.replace(/^https?:\/\//, "").toLowerCase();
    };

    // Check for duplicate URLs excluding protocols
    const isDuplicate = links.some(
      (link) => normalizeUrl(link.original) === normalizeUrl(inputUrl)
    );
    if (isDuplicate) {
      setError("This URL has already been shortened");
      return;
    }

    try {
      // TinyURL API call
      const res = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(inputUrl)}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const shortUrl = await res.text();

      if (
        !shortUrl.startsWith("https://tinyurl.com/") &&
        !shortUrl.startsWith("http://tinyurl.com/")
      ) {
        throw new Error("Invalid response from TinyURL");
      }

      const newLink = {
        original: inputUrl,
        short: shortUrl,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };

      setLinks((prev) => [newLink, ...prev]);
      setInputUrl("");
    } catch (err) {
      console.error("Error shortening URL:", err);
    }
  };

  // Save to localStorage whenever links change
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  // Clear error when user starts typing
  const handleInputChange = (e) => {
    setInputUrl(e.target.value);
    if (error) setError("");
  };

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
        <div className="w-full flex-1 relative">
          <input
            type="text"
            placeholder="Shorten a link here... (e.g., example.com)"
            value={inputUrl}
            onChange={handleInputChange}
            className={`
              w-full p-3 rounded border-3
              bg-white text-neutral-very-dark-blue
              placeholder:text-gray-400
              focus:outline-none focus:ring-2
              ${
                error
                  ? "border-secondary-red placeholder:text-secondary-red focus:ring-red-500"
                  : "border-transparent focus:ring-primary-cyan"
              }
            `}
            aria-describedby={error ? "url-error" : undefined}
            aria-invalid={error ? "true" : "false"}
          />
        </div>

        {/* Error for small screens only */}
        {error && (
          <p
            id="url-error"
            className="font-medium italic self-start text-secondary-red text-[12px] leading-4 tracking-[0.08px] md:hidden"
            role="alert"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          className="
            bg-primary-cyan text-white px-4 py-2 rounded w-full
            cursor-pointer whitespace-nowrap hover:bg-cyan-hover
            md:w-auto md:px-8
            transition-colors duration-200
          "
        >
          Shorten it!
        </button>
      </form>

      {/* Error for medium+ screens only */}
      {error && (
        <p
          id="url-error-desktop"
          className="font-medium italic self-start text-secondary-red text-[12px] leading-4 tracking-[0.08px] hidden md:block"
          role="alert"
        >
          {error}
        </p>
      )}

      {/* Show list of links */}
      <UrlList links={links} />
    </section>
  );
};

export default UrlForm;
