import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useProfile = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const fetchProfile= async () => {
        setIsLoading(true)
        setError(null)

        const accountId = 1
        const response = await fetch('http://localhost:4000/admin/profile/${accountId}', {
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