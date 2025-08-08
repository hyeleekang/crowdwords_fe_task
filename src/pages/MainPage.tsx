import type { JSX } from "react";


export const MainPage = (): JSX.Element => {


  return (
    <div className="flex flex-row items-center justify-center h-full w-full ">
      <div className="flex flex-row items-center justify-center h-full w-full">
        <div className="h-full w-full flex items-center justify-center bg-[#f3f5f7] border-r-1 border-gray-300 z-10">
          <div>pdf viewer</div>
        </div>
        <div className="h-full w-full flex flex-col items-center justify-center bg-[#f3f5f7] gap-10">
          <div className="w-900 flex items-center justify-start text-center">
            <span className="h-30 w-100 bg-white rounded-10 text-18">JSON</span>
          </div>
          <div className="h-800 w-900 p-30 bg-white">
          </div>
        </div>
      </div>
    </div>
  );
};