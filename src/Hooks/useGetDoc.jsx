import React, { useEffect } from 'react'
import { useState } from 'react'
import {doc,onSnapshot} from "firebase/firestore";
import { db } from '../firebase';

export default function useGetDoc(collec, docId) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    // collection ref
    const colRef = doc(db, collec, docId)

    // realtime collection data
    useEffect(()=>{
        onSnapshot(colRef, (doc) => {
            setData(doc.data())
            setLoading(false)
        })
    },[])

    return [data, loading]
}
