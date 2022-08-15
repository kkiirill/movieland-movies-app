interface Props {
  price: number;
  quality: string;
  format: number;
  title: string;
}

export const PricingItem: React.FC<Props> = ({ price, quality, format, title}) => {
  return (
    <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6 transition hover:scale-105  cursor-pointer">
      <div className="py-5 px-4 bg-gray3 border hover:bg-gray2 border-gray2 rounded-lg text-left shdow-xl">
        <h4 className="text-2xl text-gray font-semibold pb-8">{title}</h4>
        <ul className="flex flex-col mb-6">
          <li className="flex items-center mb-2.5">
            <img
              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
              className="mr-4"
              alt="check-mark"
            />
            <p className="text-gray text-base font-normal">24/7 access</p>
          </li>
          <li className="flex items-center mb-2.5">
            <img
              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
              className="mr-4"
              alt="check-mark"
            />
            <p className="text-gray text-base font-normal">
              {quality} video quality
            </p>
          </li>
          <li className="flex items-center mb-2.5">
            <img
              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
              className="mr-4"
              alt="check-mark"
            />
            <p className="text-gray text-base font-normal">
              Partnership + Discounts
            </p>
          </li>
          <li className="flex items-center mb-2.5">
            <img
              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
              className="mr-4"
              alt="check-mark"
            />
            <p className="text-gray text-base font-normal">Resolution {format}p</p>
          </li>
        </ul>
        <p className="text-base text-indigo-700 relative pl-3">
          <span className="font-light text-gray text-lg">$</span>
          <span className="text-2xl text-currentRed font-semibold">{price}</span>
          <span className="text-gray font-light text-lg">/month</span>
        </p>
        <button className="mt-5 w-full bg-gray hover:bg-footerColor focus:outline-none transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold py-3">
          Choose
        </button>
      </div>
    </div>
  );
};
