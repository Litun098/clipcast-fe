const Video = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
      <div className="w-full">
        <div className="relative mb-2 w-full pt-[56%]">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1144276/pexels-photo-1144276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Creating Interactive UIs with React and D3"
              className="h-full w-full"
            />
          </div>
          <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
            29:30
          </span>
        </div>
        <div className="flex gap-x-2">
          <div className="h-10 w-10 shrink-0">
            <img
              src="https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="reactd3"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="w-full">
            <h6 className="mb-1 font-semibold">
              Creating Interactive UIs with React and D3
            </h6>
            <p className="flex text-sm text-gray-200">
              20.1k Views · 14 hours ago
            </p>
            <p className="text-sm text-gray-200">ReactD3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
