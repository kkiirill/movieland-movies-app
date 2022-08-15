export const Subscribe: React.FC = () => {
  return (
    <article className="flex justify-center items-center pt-16 border-t-2 pb-20 wrapper" id="subscribe">
      <div className="flex justify-center flex-col mx-auto pt-8">
        <h2 className="text-center text-4xl w-full pb-3">Unlimited movies, TV shows, and more.</h2>
        <p className="flex justify-center t-white font-bold text-md pb-3">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="flex justify-center text-white font-bold text-md pb-3">
          Ready to watch? Enter your email to create or restart your
          membership.
        </p>
        <div className="flex mt-3">
          <input
            className="mr-1 w-full shadow-inner text-white rounded px-3 text-sm bg-gray-900 border-b border-gray-700"
            placeholder="Enter your email"
            type="text"
          />
          <button className="border-t bg-currentRed hover:shadow-2xl text-white font-bold text-sm rounded px-3 py-2 hover:animate-bounce">
            Subscribe
          </button>
        </div>
      </div>
    </article>
  );
};
