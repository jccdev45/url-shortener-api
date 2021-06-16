import { useState } from "react";

export const ShortenedLink = ({ link }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (link) => {
    setIsCopied(true);
    navigator.clipboard.writeText(link);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col bg-white rounded my-7 lg:flex-row lg:justify-between lg:items-center lg:p-2 lg:my-5">
      <h2 className="p-4 text-lg text-gray-700 lg:text-xl lg:w-7/12">
        {link.og}
      </h2>
      <hr className="w-full lg:hidden" />
      <div className="flex flex-col px-5 pb-5 lg:pb-0 lg:w-5/12 lg:flex-row lg:items-center lg:justify-end">
        <a
          href={link.short}
          className="my-3 text-lg lg:w-2/3 lg:mx-4 lg:text-right text-primary-cyan"
        >
          {link.short}
        </a>
        <button
          disabled={isCopied}
          onClick={() => handleCopy(link.short)}
          className={`${
            !isCopied ? "btn" : "bg-primary-darkViolet text-white font-bold "
          } text-lg p-2 lg:w-1/4 rounded-md`}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};
