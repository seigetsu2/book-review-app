type PaginationProps = {
  handleClickPrev: () => void;
  handleClickNext: () => void;
  isDisabledPrev: boolean;
};
export const Pagination = ({
  handleClickPrev,
  handleClickNext,
  isDisabledPrev,
}: PaginationProps) => {
  return (
    <nav aria-label="Pagination">
      <ul className="flex justify-center gap-1 text-gray-900">
        <li>
          <button
            onClick={handleClickPrev}
            disabled={isDisabledPrev}
            className="grid size-8 place-content-center rounded border border-gray-200 transition-colors enabled:hover:bg-gray-50 rtl:rotate-180 disabled:opacity-50"
            aria-label="Previous page"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        <li>
          <button
            onClick={handleClickNext}
            className="grid size-8 place-content-center rounded border border-gray-200 transition-colors enabled:hover:bg-gray-50 rtl:rotate-180 disabled:opacity-50"
            aria-label="Next page"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};
