import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { memo } from "react";
import { LoaderButtonLogin } from "../Loaders/LoaderButtonLogin";

interface Props {
  handleData: (email: string, password: string) => void;
  title: string;
  loader: boolean;
}

type FormValues = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});

export const Form: React.FC<Props> = memo(({ handleData, title, loader }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
    if (email && password) {
      handleData(email, password);
    }
    reset();
  };
  return (
    <form
      className="w-full flex flex-col py-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="p-3 my-2 bg-gray rounded"
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      <p className="text-currentRed">{errors.email?.message}</p>
      <input
        className="p-3 my-2 bg-gray rounded"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        {...register("password")}
      />
      <p className="text-currentRed">{errors.password?.message}</p>
      {loader ? (
        <LoaderButtonLogin />
      ) : (
        <button
          type="submit"
          className="bg-currentRed py-3 my-6 rounded font-bold hover:bg-hoverRed"
        >
          {title}
        </button>
      )}
    </form>
  );
});
