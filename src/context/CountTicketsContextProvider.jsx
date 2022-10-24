import React from 'react'
import { createContext, useState,useEffect } from 'react'
import { collection } from 'firebase/firestore';
import { db } from '../firebase';

const CountTicketsContext = createContext();

export default function CountTicketsContextProvider({children}) {
    const [counttt, setCount] = useState(0)

    useEffect(()=>{
        async function snapShottt(){
            const coll = collection(db, "Tickets");
            // const snapshot = await getCountFromServer(coll);
            // console.log('count: ', snapshot.data().count);
        }
        snapShottt()
    },[])


    return (
        <CountTicketsContext.Provider value={ counttt }>
            {children}
        </CountTicketsContext.Provider>
    )
}
