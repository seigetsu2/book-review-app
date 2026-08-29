import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { signUp } from "~/data/api";

type SignUpInfo = {
  name: string;
  email: string;
  password: string;
};

export const SignUp = () => {
  const { register, handleSubmit } = useForm<SignUpInfo>();
  const mutation = useMutation({
    mutationFn: (info: SignUpInfo) => {
      return signUp(info.name, info.email, info.password);
    },
    onSuccess: async (data) => {
      const json = await data.json();
      setResult(JSON.stringify(json));
    },
  });
  const [result, setResult] = useState("");
  const onSubmit: SubmitHandler<SignUpInfo> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">ユーザー名</label>
        <input
          placeholder="ユーザー名"
          id="name"
          autoComplete="off"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          placeholder="メールアドレス"
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="password">パスワード</label>
        <input
          id="password"
          type="password"
          placeholder="パスワード"
          {...register("password", { required: true })}
        />
      </div>
      <button type="submit">ユーザー作成</button>
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}

      {mutation.isSuccess ? (
        <div>sign up was successed! data:{result}</div>
      ) : null}
    </form>
  );
};
