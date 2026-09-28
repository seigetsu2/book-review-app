import { BookReview } from "~/components/BookReview";
import { Pagination } from "~/components/Pagination";
import { getBooks } from "~/data/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
export const Home = () => {
  const [offset, setOffset] = useState(0);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["books", offset],
    queryFn: () => getBooks(offset),
  });
  const isActivePrev = offset >= 10;
  const handleClickPrev = () => {
    setOffset((prev) => {
      if (isActivePrev) return prev - 10;
      else return 0;
    });
  };
  const handleClickNext = () => {
    setOffset((prev) => prev + 10);
  };
  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className="space-y-6 p-6 pb-0 after:block after:h-6">
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
      <Pagination
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        isDisabledPrev={!isActivePrev}
      />
    </div>
  );
};
