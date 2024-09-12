import React, { useRef, useState } from "react";
import { BuilderComponent } from "@builder.io/react";
import Image from "next/image";
import PaperclipIcon from "@/public.icons/paperclip-icon.svg";

interface CustomFileUploadProps {
  name: string;
  fileText: string;
  fileSize: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomFileUpload: React.FC<CustomFileUploadProps> = ({
  name,
  fileText,
  fileSize,
  onChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > fileSize * 1024 * 1024) {
        setError(`File size exceeds ${fileSize} MB limit`);
        event.target.value = "";
      } else {
        setError(null);
        onChange(event);
      }
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <input
        type="file"
        name={name}
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <label htmlFor="file-upload" className="flex py-2 gap-2 cursor-pointer">
        <PaperclipIcon width={25} height={25} className="mt-2 " />
        <div className="flex flex-col">
          {fileText && (
            <span className="text-caption1 font-medium text-white">
              {fileText}
            </span>
          )}
          {fileSize && (
            <span className="text-caption2 text-[#a1a1a1]">{`up to ${fileSize} MB`}</span>
          )}
        </div>
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {/* <BuilderComponent model="file-upload-section">
        <Image
          src="/path/to/upload-icon.png"
          alt="Upload"
          width={25}
          height={25}
        />
        <span>Click to upload file</span>
      </BuilderComponent> */}
    </div>
  );
};

export default CustomFileUpload;

// import React from "react";

// type Props = {
//   fileText: string;
//   fileSize: number;
// };

// const BIFileAttach = ({ fileText, fileSize }: Props) => {
//   return (
//     <div className="w-max">
//       <input type="file" id="file-upload" className="hidden" />
//       <label
//         htmlFor="file-upload"
//         className="flex items-center flex-col py-2 cursor-pointer"
//       >
//         <div className="flex items-center space-x-2">
//           <svg
//             className="w-8 h-8 text-blue-500"
//             fill="none"
//             stroke="#064EA4"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
//             />
//           </svg>
//           <span className="text-sm font-medium text-white">
//             {fileText || "Attach your file"}
//           </span>
//         </div>
//         <span className="text-xs text-[#a1a1a1]">{`up to ${fileSize} MB`}</span>
//       </label>
//     </div>
//   );
// };

// export default BIFileAttach;
