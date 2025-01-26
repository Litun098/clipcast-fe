const UserCard = () => {
  return (
    <div className="flex w-full justify-between place-items-center border-1 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0 md:m-auto">
      <div className="flex items-center gap-x-2">
        <div className="h-14 w-14 shrink-0">
          <img
            src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="React Ninja"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="block">
          <h6 className="font-semibold">React Ninja</h6>
          <p className="text-sm text-gray-300">40K Subscribers</p>
        </div>
      </div>
      <div className="block">
        <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
          <span className="group-focus/btn:hidden">Subscribe</span>
          <span className="hidden group-focus/btn:inline">Subscribed</span>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
