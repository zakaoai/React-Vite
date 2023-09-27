import { RDQAppContext } from "@/contexts/RDQAppContext"
import { useContext } from "react"

export const useRDQAppContext = () => {
    const context = useContext(RDQAppContext)
    if (context === undefined) {
        throw new Error("useRDQAppContext must be used within a RDQAppProvider")
    }
    return context
}
