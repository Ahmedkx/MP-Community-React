// import React, { useEffect, useState } from 'react'
// import { db } from '../firebase';
// import {collection,getCountFromServer,snapshot} from "firebase/firestore";



// export default function useGetCount() {
//     const [data,setData] = useState()

//     useEffect(()=>{
//         const coll = collection(db, "Tickets");
//         async function coun(){
//             const snapshot = await getCountFromServer(coll);
//             console.log('count: ', snapshot.data().count);
//         }
//     },[])

//     return [data]
// }
