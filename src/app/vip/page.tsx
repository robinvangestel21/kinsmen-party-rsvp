"use client";

import postRSVP from "@/postRSVP";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type Inputs = {
  name: string;
  amount: number;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setError(null);
    setLoading(true);
    const result = await postRSVP(data);

    if (result) {
      router.push("/lets-party");
      setLoading(false);
    } else {
      setError("Something went wrong, please try again");
      setLoading(false);
    }
  };

  return (
    <main className="pt-10 pb-20 container px-4 space-y-8 max-w-[450px] text-center flex flex-col items-center text-2xl font-bold">
      <h1 className="whitespace-pre-line">
        {`Enter your full name to \n let us know if you'll be joining us:`}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-8"
      >
        <input
          {...register("name", { required: true })}
          className="bg-transparent text-white border-white border rounded-lg p-4 w-56 text-center"
        />
        {errors.name && (
          <span className="text-red-500 text-lg font-normal">
            Please fill in your name
          </span>
        )}

        <div className="flex flex-col gap-8">
          <div>Will you bring someone?</div>
          <div className="flex gap-3 justify-center">
            <input
              id="0"
              {...register("amount", { required: true })}
              type="radio"
              value="0"
              className="peer/0 hidden"
            />
            <label
              htmlFor="0"
              className="bg-transparent peer-checked/0:bg-blue-400 transition-colors text-white border-white border rounded-lg p-4 w-16 cursor-pointer"
            >
              +0
            </label>
            <input
              id="1"
              {...register("amount", { required: true })}
              type="radio"
              value="1"
              className="peer/1 hidden"
            />
            <label
              htmlFor="1"
              className="bg-transparent peer-checked/1:bg-blue-400 transition-colors text-white border-white border rounded-lg p-4 w-16 cursor-pointer"
            >
              +1
            </label>
            <input
              id="2"
              {...register("amount", { required: true })}
              type="radio"
              value="2"
              className="peer/2 hidden"
            />
            <label
              htmlFor="2"
              className="bg-transparent peer-checked/2:bg-blue-400 transition-colors text-white border-white border rounded-lg p-4 w-16 cursor-pointer"
            >
              +2
            </label>
          </div>
        </div>
        {errors.amount && (
          <span className="text-red-500 text-lg font-normal">
            {`Please let us know if you're bringing someone`}
          </span>
        )}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-400 disabled:animate-pulse transition-colors text-white border-white border rounded-lg p-4 mt-10 w-56 cursor-pointer gap-4 flex justify-center"
        >
          <span>Submit</span>
          <span>→</span>
        </button>
        {error && (
          <span className="text-red-500 text-lg font-normal">{error}</span>
        )}
      </form>
    </main>
  );
}
