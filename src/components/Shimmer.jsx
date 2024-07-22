

const ShimmerCard = ()=>{
    return (
      <div className="p-2 m-2 w-60">
        <div className="animate-pulse rounded-lg bg-gray-300 w-1uto h-40"></div>
        <div className="animate-pulse flex justify-start items-start mt-2">
          <div className="animate-pulse rounded-full bg-gray-300 w-10 h-9 mt-2 mr-2"></div>
          <div className=" flex flex-col items-start w-full">
            <div className="animate-pulse bg-gray-300 w-full h-3 mt-1"></div>
            <div className="animate-pulse bg-gray-300 w-1/3 h-2 mt-1"></div>
            <div className="animate-pulse bg-gray-300 w-1/2 h-2 mt-1"></div>
          </div>
        </div>
      </div>
    );
}


const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-start">
      {Array(20)
        .fill()
        .map((_, index) => {
          return <ShimmerCard key={index} />;
        })}
    </div>
  );
};

export default Shimmer;