// import { LoaderIcon } from "../icons";

// export default function Loading() {
//     return (
//         <>
//             <div className="fixed inset-0 bg-black opacity-25 z-40"></div>
//             <div className="fixed inset-0 z-50">
//                 <div className="flex justify-center items-center min-h-full">
//                     <LoaderIcon className="fill-blue-600 animate-spin" />
//                 </div>
//             </div>
//         </>
//     );
// }
// import { LoaderIcon } from '../icons';

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 bg-base-100 opacity-50 z-40"></div>
      <div className="fixed inset-0 z-50">
        <div className="flex justify-center items-center min-h-full">
          <span className="loading loading-spinner text-white w-20 h-20 "></span>
          <div>
          </div>
        </div>
      </div>
    </>
  );
} 
