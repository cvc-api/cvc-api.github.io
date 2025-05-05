// "use client"
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { useState } from "react";

// export default function Demo(){
//     const [data, setData] = useState({})
//     const handleSearch = async () => {
//         const res = await getData()
//         setData(res)
//     }
//     return(
//         <div>
//             <div className="flex w-full max-w-sm items-center space-x-2">
//                 <Input type="text" placeholder="College Name" />
//                 <Input type="text" placeholder="Course ID" />
//                 <Input type="text" placeholder="Course Name" />
//                 <Input type="text" placeholder="C-ID" />
//                 <Button onClick={handleSearch}>Search</Button>
//             </div>
//             {Object.entries(data).length > 0 ? (
//             // Map over Object.entries if it's a single JSON object
//             Object.entries(data).map(([id, { cringe }]) => (
//               <div key={id}>
//                 <span className="font-medium">{cringe}</span>
//               </div>
//             ))
//           ) : (
//               <div className="text-center">
//                 No data found
//               </div>
//           )}
//         </div>
//     )
// }