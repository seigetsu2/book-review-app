export type AppButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const AppButton = (props: AppButtonProps) => {
  return (
    <button
      className="inline-flex items-center justify-center rounded-full border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none"
      {...props}
    ></button>
  );
};
