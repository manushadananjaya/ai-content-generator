import React from "react";
import { RingLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 bg-opacity-80">
      <RingLoader loading={true} color="#123abc" />
    </div>
  );
}
