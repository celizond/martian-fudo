import { useEffect, useState } from "react";

export const useFetch = (url:any) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    })
    
    const onFetch = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            setState({
                data: data,
                isLoading: false,
                hasError: false,
                error: null,
            })
        } catch (error:any) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: error,
            })
        }
    }

    useEffect(() => {
        onFetch()

    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}