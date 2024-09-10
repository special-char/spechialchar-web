import React from "react";

type Props = {
  fileText: string;
  fileSize: number;
};

const BIFileAttach = ({ fileText, fileSize }: Props) => {
  return (
    <div className="w-max">
      <input type="file" id="file-upload" className="hidden" />
      <label
        htmlFor="file-upload"
        className="flex items-center flex-col py-2 cursor-pointer"
      >
        <div className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-blue-500"
            fill="none"
            stroke="#064EA4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <span className="text-sm font-medium text-white">
            {fileText || "Attach your file"}
          </span>
        </div>
        <span className="text-xs text-[#a1a1a1]">{`up to ${fileSize} MB`}</span>
      </label>
    </div>
  );
};

export default BIFileAttach;
