import {
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import { PanelResizeHandle } from "react-resizable-panels";

const ResizeHandle = ({ direction, className }) => {
  return (
    <PanelResizeHandle
      className={`flex items-center justify-center text-center ${className}`}
    >
      {direction === "vertical" ? (
        <EllipsisHorizontalIcon className="text-gray-600 dark:text-white h-5 w-5" />
      ) : (
        <EllipsisVerticalIcon className="text-gray-600 dark:text-white  h-5 w-5" />
      )}
    </PanelResizeHandle>
  );
};

export default ResizeHandle;
