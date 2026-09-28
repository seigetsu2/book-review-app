import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { signIn } from "~/data/api";
import { AppInput } from "~/components/AppInput";
import { AppButton } from "~/components/AppButton";
import { AppCard } from "~/components/AppCard";
import { LoginStateContext } from "~/pages/RootPage";

type SignInInfo = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const { register, handleSubmit } = useForm<SignInInfo>();
  const loginState = useContext(LoginStateContext);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (info: SignInInfo) => {
      return signIn(info.email, info.password);
    },
    onSuccess: (data) => {
      if (!loginState.loggedIn) {
        loginState.loginFn(data.token);
      }
      navigate("/", { replace: true });
    },
  });
  const onSubmit: SubmitHandler<SignInInfo> = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <AppCard>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
      </form>
    </AppCard>
  );
};
