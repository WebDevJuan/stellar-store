import { Card } from "flowbite-react";


export default function Cards({title, description, image}){
    console.log(image);
    return(
           <Card>
            <img height={100} width={100} src={image} className="w-full rounded"/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {title}
           </h5>
           <div className="flex justify-between">
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {description}
            </p>
            <p className="text-white">
                23€
            </p>
           </div>
         </Card>
    )
}