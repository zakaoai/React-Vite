import { UserContext } from "@/contexts/UserContext"
import { useContext } from "react"

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error("useUserContext must be used within a UserProvider")
    }
    return context
}