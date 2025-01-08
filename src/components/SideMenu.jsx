const SideMenu = () => {
  return (
    <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
      <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
        <ul className="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
          {[
            {
              name: "Home",
              svgPath: "M6 15.9997H14M9.0177 1.76375L2.23539 7.03888...",
            },
            {
              name: "Liked Videos",
              svgPath: "M6 21V10M1 12V19C1 20.1046 1.89543 21...",
            },
            {
              name: "History",
              svgPath: "M20.7 11.5L18.7005 9.5L16.7 11.5M19 10...",
            },
            {
              name: "My Content",
              svgPath: "M21 4.93137C21 4.32555 21 4.02265 20.8802...",
            },
            {
              name: "Collections",
              svgPath: "M12 5L10.8845 2.76892C10.5634 2.1268...",
            },
            {
              name: "Subscribers",
              svgPath: "M11 13.5H6.5C5.10444 13.5 4.40665 13.5...",
            },
            {
              name: "Support",
              svgPath: "M8.09 8C8.3251 7.33167 8.78915 6.76811...",
            },
          ].map(({ name, svgPath }, index) => (
            <li
              key={index}
              className={index === 1 || index === 3 ? "hidden sm:block" : ""}
            >
              <button className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                  <svg
                    style={{ width: "100%" }}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={svgPath}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="block sm:hidden sm:group-hover:inline lg:inline">
                  {name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default SideMenu;
