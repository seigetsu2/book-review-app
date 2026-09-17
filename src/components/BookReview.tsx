export type BookReviewData = {
  title: string;
  url: string;
  reviewer: string;
  review: string;
};
export const BookReview = ({
  title,
  url,
  reviewer,
  review,
}: BookReviewData) => {
  return (
    <div className="box-border space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6 h-fit w-xl">
      <h1>{title}</h1>
      <h2>URL:{url}</h2>
      <h2>レビュワー:{reviewer}</h2>
      <p>{review}</p>
    </div>
  );
};
