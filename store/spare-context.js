"use client"

// provide all available spare, loads when the app intially loads and allows caching

import {createContext, useState, useEffect} from 'react'

export const SpareContext = createContext()

export function SpareProvider({children}){
    const [spareParts, setSpareParts] = useState([])

    useEffect(()=>{
        const fetchSpareParts = async ()=>{

            const res = await fetch('/api/spare')
            const data = await res.json()
            setSpareParts(data)
        }

        fetchSpareParts()
    }, [])

    return (
        <SpareContext.Provider value={{spareParts, setSpareParts}}>
            {children}
        </SpareContext.Provider>
    )
}