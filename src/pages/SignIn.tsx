import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { signIn } from "~/data/api";
import { AppInput } from "~/components/AppInput";
import { AppButton } from "~/components/AppButton";

type SignInInfo = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const { register, handleSubmit } = useForm<SignInInfo>();
  const mutation = useMutation({
    mutationFn: (info: SignInInfo) => {
      return signIn(info.email, info.password);
    },
    onSuccess: (data) => {
      setResult(JSON.stringify(data));
    },
  });
  const [result, setResult] = useState("");
  const onSubmit: SubmitHandler<SignInInfo> = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6"
    >
      <AppInput
        label="メールアドレス"
        id="email"
        type="email"
        placeholder="メールアドレス"
        required
        {...register("email", { required: true })}
      />
      <AppInput
        label="パスワード"
        id="password"
        type="password"
        placeholder="パスワード"
        required
        {...register("password", { required: true })}
      />
      <AppButton type="submit">ログイン</AppButton>
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}

      {mutation.isSuccess ? (
        <div>sign in was successed! data:{result}</div>
      ) : null}
    </form>
  );
};
