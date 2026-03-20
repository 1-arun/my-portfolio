


const OnlineStatus = ({ isOnline = false }) => {
  if (!isOnline) return null;
  
  return (
    <div className="flex items-center justify-center gap-2 ml-3">
      <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-fade-green shadow-lg shadow-green-400/30"></span>
      <span className="text-[#D1D5D3] text-base font-light ">Online</span>
    </div>
  );
};

export default OnlineStatus;