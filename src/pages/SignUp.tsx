import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { signUp } from "~/data/api";
import { AppInput } from "~/components/AppInput";
import { AppButton } from "~/components/AppButton";

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
    onSuccess: (data) => {
      setResult(JSON.stringify(data));
    },
  });
  const [result, setResult] = useState("");
  const onSubmit: SubmitHandler<SignUpInfo> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6 h-fit"
    >
      <AppInput
        label="ユーザー名"
        placeholder="ユーザー名"
        id="name"
        autoComplete="off"
        {...register("name", { required: true })}
      />
      <AppInput
        label="メールアドレス"
        type="email"
        id="email"
        autoComplete="off"
        placeholder="メールアドレス"
        {...register("email", { required: true })}
      />
      <AppInput
        label="パスワード"
        id="password"
        type="password"
        placeholder="パスワード"
        {...register("password", { required: true })}
      />
      <AppButton type="submit">ユーザー作成</AppButton>
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}

      {mutation.isSuccess ? (
        <div>sign up was successed! data:{result}</div>
      ) : null}
    </form>
  );
};
