import { useState } from "react";

const UrlItem = ({ link: { original, short } }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(short);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <li className="flex flex-col md:flex-row md:justify-between items-center bg-white p-4 rounded shadow gap-3">
      <p className="text-neutral-very-dark-blue w-full break-words md:w-auto">
        {original}
      </p>

      <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
        <a
          href={short}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-cyan font-medium break-words"
        >
          {short}
        </a>
        <button
          onClick={handleCopy}
          aria-label="Copy shortened URL"
          className={`px-4 py-2 rounded text-white text-sm transition-all duration-200 ${
            copied ? "bg-primary-dark-violet" : "bg-primary-cyan hover:bg-cyan-hover"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </li>
  );
};

export default UrlItem;
