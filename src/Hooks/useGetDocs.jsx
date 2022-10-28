import { useState, useEffect } from 'react'
import {collection,onSnapshot, query, where} from "firebase/firestore";
import { db } from '../firebase';

export default function useGetDocs(collec,ar1,ar2,ar3) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    // collection ref
    const colRef = collection(db, collec)
    // queries
    const q = query(colRef , where(ar1,ar2,ar3))

    // realtime collection data
    useEffect(()=>{
        setLoading(true)
        onSnapshot(q, (snapshot) => {
        let data = []
        snapshot.docs.forEach(doc => {
            data.push({ ...doc.data(), id: doc.id })
        })
        setData(data)
        setLoading(false)
        // console.log("Api Call")
        })
    },[])

    return [data, loading]
}