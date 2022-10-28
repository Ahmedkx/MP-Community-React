import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import {collection,getCountFromServer, query, where} from "firebase/firestore";

export default function useGetCountTickets() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        const coll = collection(db, "Tickets");
        async function count(){
            const snapshot = await getCountFromServer(coll);
            setCount(snapshot.data().count)
        }
        count()
    },[])

    return [count]
}
