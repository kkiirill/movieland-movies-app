import { useState } from "react";
import { Modal } from "../../UI/Modal/Modal";

export const Subscribe: React.FC = () => {
  const [email, setEmail] = useState<string>('');
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
            className="mr-1 w-full shadow-inner text-gray rounded px-3 text-sm bg-white border-b border-gray2"
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Modal text={'Subscribe'} email={email} setEmail={setEmail} />
        </div>
      </div>
    </article>
  );
};
