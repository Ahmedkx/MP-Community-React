import { useState, useEffect } from 'react'
import {collection,onSnapshot, query, where, startAt, orderBy, limit} from "firebase/firestore";
import { db } from '../../../firebase';

export default function useGetDocs(status,start) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    // collection ref
    const colRef = collection(db, "Tickets")
    // queries
    const q = query(colRef ,
            // where("status","==","open"),
            orderBy("name"),
            limit(3),
            startAt(""),
            )

    // realtime collection data
    useEffect(()=>{
        onSnapshot(q, (snapshot) => {
        let data = []
        snapshot.docs.forEach(doc => {
            data.push({ ...doc.data(), id: doc.id })
        })
        setData(data)
        setLoading(false)
        console.log("Api Call")
        })
    },[])

    return [data,loading]
}