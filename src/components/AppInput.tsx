export type AppInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  type?: "text" | "email" | "password";
};
export const AppInput = ({ label, ...props }: AppInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900">
        {label}
        <input
          className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
          {...props}
        />
      </label>
    </div>
  );
};
