import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useViewJunior = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const fetchJuniorView = async () => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/admin/juniorView', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({})
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok) {
            
            setIsLoading(false)
        }
    }

    return { json, isLoading, error }
}