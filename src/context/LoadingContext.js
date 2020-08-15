import React, {createContext, useContext, useState, useEffect} from 'react'

const LoadingContext = createContext({
    loading: false,
    setLoading: () => {}
})

export const LoadingProvider = ({children}) => {
    const [loading, setLoading] = useState(false)

    return (
        <LoadingContext.Provider value={{loading, setLoading}}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => {
    const {loading, setLoading} = useContext(LoadingContext)
    return [loading, setLoading]
}

export const useLoadingEffect = (loading) => {
    const [,setLoading] = useLoading()
    useEffect(()=> {
        setLoading(loading)
    })
}