import {  Toast } from "flowbite-react";
import { FaTelegramPlane } from 'react-icons/fa';

export default function SimpleToast() {
    return (
      <div className="animate-wiggle animate-once animate-duration-1000 rounded-sm space-x-4 divide-x divide-green-400 dark:divide-gray-600 flex absolute end-4 border-2">
        <Toast className="justify-end">
          <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
          <div className="pl-4 text-sm font-normal">
            Enviado correctamente
          </div>
        </Toast>
      </div>
    )
  }