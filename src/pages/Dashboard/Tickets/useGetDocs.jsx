import { useState, useEffect } from 'react'
import {collection,onSnapshot, query, where, startAt, orderBy, limit, endAt,count} from "firebase/firestore";
import { db } from '../../../firebase';

export default function useGetDocs() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [reqData, setReqData] = useState({status:"open",order:"asc"})

    // collection ref
    const colRef = collection(db, "Tickets")

    // queries
    const q = query(colRef ,
            where("status","==", reqData.status),
            orderBy("index", reqData.order),
            limit(30),
            // startAt(reqData.start),
            // endAt(reqData.end)
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
    },[reqData])

    function changeStatus(status,order){
        setLoading(true)
        setReqData({status,order})
    }

    return [data,loading,changeStatus]
}