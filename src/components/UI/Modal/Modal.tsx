import { memo, useState } from "react";

interface Props {
  text: string;
  email: string;
  setEmail: (value: string) => void;
}

export const Modal: React.FC<Props> = memo(({ text, email, setEmail }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <button
        className="border-t bg-currentRed hover:shadow-2xl text-white font-bold text-md rounded px-4 py-3 hover:bg-hoverRed"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {text}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-y-hidden  fixed inset-0 z-[1000] outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Subscription</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Excellent! You have subscribed. A letter with instructions
                    has been sent to your email {email}.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-currentRed bg-gray2 hover:scale-105 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setEmail("");
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-[999] bg-black/80"></div>
        </>
      ) : null}
    </>
  );
});
