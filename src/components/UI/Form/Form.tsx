import { useState } from "react";

interface Props {
  handleData: (email: string, password: string) => void;
}
export const Form: React.FC<Props> = ({ handleData }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email && password) {
      handleData(email, password);
    }
  };
  return (
    <form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
      <input
        className="p-3 my-2 bg-gray rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="p-3 my-2 bg-gray rounded"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-currentRed py-3 my-6 rounded font-bold hover:bg-hoverRed">
        Sign Up
      </button>
    </form>
  );
};
