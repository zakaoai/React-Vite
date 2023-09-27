import { RDQAppBarContext } from "@/contexts/RDQAppBarContext"
import { useContext } from "react"

export const useRDQAppBarContext = () => {
    const context = useContext(RDQAppBarContext)
    if (context === undefined) {
        throw new Error("useRDQAppBarContext must be used within a RDQAppBarProvider")
    }
    return context
}
