import { BookReview } from "~/components/BookReview";
import { getBooks } from "~/data/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
export const Home = () => {
  const [offset, _setOffset] = useState(0);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["books", offset],
    queryFn: () => getBooks(offset),
  });
  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className="space-y-6 p-6 pb-0 after:block after:h-6 h-screen">
      {data?.map((value) => {
        const { id, title, url, reviewer, review } = value;
        return (
          <BookReview
            key={id}
            title={title}
            url={url}
            reviewer={reviewer}
            review={review}
          />
        );
      })}
    </div>
  );
};
