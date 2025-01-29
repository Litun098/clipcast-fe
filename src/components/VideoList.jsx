import PropTypes from "prop-types";

const VideoList = ({ video }) => {
  return (
    <div className="mt-4 w-full max-h-52 max-w-3xl ml-2 gap-x-4 md:flex">
      <div className="relative mb-2 w-[600px] md:mb-0 md:w-5/12">
        <div className=" w-[360px] h-[202px] pt-[56%]">
          <div className="absolute inset-0">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
            {video.duration}
          </span>
        </div>
      </div>
      <div className="flex gap-x-2 md:w-7/12">
        <div className="h-10 w-10 shrink-0 md:hidden">
          <img
            src={video.owner.username}
            alt={video.owner.username}
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h6 className="mb-1 font-semibold md:max-w-[75%]">{video.title}</h6>
          <p className="flex text-sm text-gray-200 sm:mt-3">
            {video.views} Views · {video.createdAt || "34 minutes"} ago
          </p>
          <div className="flex items-center gap-x-4">
            <div className="mt-2 hidden h-10 w-10 shrink-0 md:block">
              <img
                src={video.owner.avatar}
                alt={video.owner.username}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-200">{video.owner.username}</p>
          </div>
          <p className="mt-2 hidden text-sm md:block">{video.description}</p>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for the `video` prop
VideoList.propTypes = {
  video: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    createdAt: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.shape({
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default VideoList;
