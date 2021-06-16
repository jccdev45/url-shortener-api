export const ShortenerForm = ({
  linkValue,
  error,
  isLoading,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-between w-full px-6 bg-center bg-no-repeat rounded-lg py-7 lg:pt-14 lg:px-16 lg:pb-12 lg:flex-row bg-fill bg-primary-darkViolet bg-boost-desktop"
    >
      <label
        htmlFor="link"
        className="relative flex flex-col w-full lg:w-5/6 lg:flex-row lg:items-center"
      >
        <input
          type="text"
          name="link"
          placeholder="Shorten a link here"
          onChange={(e) => handleChange(e)}
          value={linkValue}
          className={`${
            error ? "ring-4 ring-secondary-red" : ""
          } w-full p-5 rounded-lg text-lg lg:w-full focus:outline-none`}
        ></input>
        <small className="absolute w-full h-2 mt-2 mb-4 italic font-semibold text-left -bottom-9 lg:left-4 text-secondary-red lg:transform lg:scale-105">
          {error}
        </small>
      </label>
      <button
        disabled={isLoading}
        className={`${
          !isLoading ? "btn" : "bg-neutral-darkBlue text-white"
        } w-full p-3 mx-4 mt-12 text-lg font-bold rounded-lg focus:outline-white lg:my-0 lg:py-5 lg:ml-7 lg:mr-2 lg:w-1/5`}
      >
        {isLoading ? "Loading..." : "Shorten it!"}
      </button>
    </form>
  );
};
