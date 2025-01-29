import PropTypes from "prop-types";


const VideoCard = ({video}) => {
  return (
    <div className="flex h-[300px] w-[350px] sm:w-[400px] gap-4 cursor-pointer">
      <div className="w-full p-1">
        <div className="relative mb-2 w-full pt-[56%]">
          <div className="absolute inset-0">
            <img
              src={video.thumbnail}
              alt="Creating Interactive UIs with React and D3"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
            {video.duration}
          </span>
        </div>
        <div className="flex gap-x-2">
          <div className="h-10 w-10 shrink-0">
            <img
              src={video.owner.avatar}
              alt="reactd3"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="w-full">
            <h6 className="mb-1 font-semibold">
              {video.title}
            </h6>
            <p className="flex text-sm text-gray-200">
              {video.views} Views · {video.createdAt || "error"} ago
            </p>
            <p className="text-sm text-gray-200">{video.owner.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};



// Define PropTypes for the `video` prop
VideoCard.propTypes = {
  video: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    createdAt: PropTypes.string,
    owner: PropTypes.shape({
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default VideoCard;
