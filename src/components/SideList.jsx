const SideList = () => {
  return (
    <div className="w-[50%] max-h-[150px] gap-x-2 border pr-2 mt-2 md:flex ">
      <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
        <div className="w-full pt-[56%]">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Getting Started with Express.js"
              className="h-full w-full"
            />
          </div>
          <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
            22:18
          </span>
        </div>
      </div>
      <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
        <div className="h-12 w-12 shrink-0 md:hidden">
          <img
            src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="reactpatterns"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full pt-1 md:pt-0">
          <h6 className="mb-1 text-sm font-semibold">
            Getting Started with Express.js
          </h6>
          <p className="mb-0.5 mt-2 text-sm text-gray-200">Express Learner</p>
          <p className="flex text-sm text-gray-200">11.k Views · 5 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default SideList;
