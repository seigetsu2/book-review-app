import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { signUp } from "~/data/api";
import { AppInput } from "~/components/AppInput";
import { AppButton } from "~/components/AppButton";
import { AppCard } from "~/components/AppCard";
import { LoginStateContext } from "~/pages/RootPage";

type SignUpInfo = {
  name: string;
  email: string;
  password: string;
};

export const SignUp = () => {
  const { register, handleSubmit } = useForm<SignUpInfo>();
  const navigate = useNavigate();
  const loginState = useContext(LoginStateContext);
  const mutation = useMutation({
    mutationFn: (info: SignUpInfo) => {
      return signUp(info.name, info.email, info.password);
    },
    onSuccess: (data) => {
      if (!loginState.loggedIn) {
        loginState.loginFn(data.token);
      }
      navigate("/", { replace: true });
    },
  });
  const onSubmit: SubmitHandler<SignUpInfo> = (data) => {
    mutation.mutate(data);
  };

  return (
    <AppCard>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
      </form>
    </AppCard>
  );
};
