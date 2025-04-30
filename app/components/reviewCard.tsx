export default function ReviewCard({
  title,
  review,
  author,
  date,
  readingTime,
}: {
  title: string;
  review: string;
  author: string;
  date: string;
  readingTime?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <a
        href="#"
        className="group block rounded-md border bg-white border-gray-300 p-4 shadow-sm sm:p-6 hover:scale-105 transition-transform duration-300"
      >
        <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
          <div className="sm:order-last sm:shrink-0">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="size-16 rounded-full object-cover sm:size-[72px]"
            />
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-lg font-medium text-pretty text-gray-900">
              {title}
            </h3>

            <p className="mt-1 text-sm text-gray-700">By {author}</p>

            <p className="mt-4 text-sm text-pretty text-gray-700 transition-all duration-300 ease-in-out line-clamp-2 group-hover:line-clamp-none">
              {review}
            </p>
          </div>
        </div>

        <dl className="mt-6 flex gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <dt className="text-gray-700">
              <span className="sr-only"> Published on </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </dt>
            <dd className="text-xs text-gray-700">{date}</dd>
          </div>
        </dl>
      </a>
    </div>
  );
}
