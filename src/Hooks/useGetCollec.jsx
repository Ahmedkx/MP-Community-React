import React, { useEffect } from 'react'
import { useState } from 'react'
import {collection,onSnapshot} from "firebase/firestore";
import { db } from '../firebase';

export default function useGetCollec(collec) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    // collection ref
    const colRef = collection(db, collec)

    // realtime collection data
    useEffect(()=>{
        onSnapshot(colRef, (snapshot) => {
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