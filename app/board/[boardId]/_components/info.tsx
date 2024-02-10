
export const Info = () => {
    return (
        <div  className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
            Todo: Information of the board
        </div>
    );
};

Info.Skeloton = function InfoSkeloton() {
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />   
    );
};