import React, { memo } from "react";
interface Props {
  color: string;
  text: string;
}


export const Alert: React.FC<Props> = memo(({ color, text }) => {
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <>
      {showAlert ? (
        <div
          className={
            `first-line:text-white px-5 py-4 rounded relative bg-${color} z-[1000]`
          }
        >
          <span className="inline-block mr-1 align-middle">
            <img alt="" src={require('../../../images/hero-alert.png')} className="w-6 h-6"/>
          </span>
          <span className="inline-block align-middle mr-6">
            <b className="text-xs">{text}!</b>
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
});
