import type { ReactNode } from "react";
export const AppCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};
