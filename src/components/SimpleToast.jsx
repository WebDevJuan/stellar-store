import {  Toast } from "flowbite-react";
import { FaTelegramPlane } from 'react-icons/fa';

export default function SimpleToast() {
    return (
      <div className="space-x-4 divide-x divide-gray-200 dark:divide-gray-700 flex absolute top-0 z-10 end-4 border-green-400 border-2 m-2">
        <Toast className="justify-end">
          <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
          <div className="pl-4 text-sm font-normal">
            Message sent successfully.
          </div>
        </Toast>
      </div>
    )
  }