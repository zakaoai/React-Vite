
import { LoginRequest } from "@/interfaces/services/Login/LoginRequest"
import { LoginResponse } from "@/interfaces/services/Login/LoginResponse"
import RDQAppService from "@/services/RDQAppService"
import { useMutation } from "@tanstack/react-query"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "@/hooks/contexts/useUserContext"

const useLogin = () => {

    const { setUser } = useUserContext()
    const navigate = useNavigate()

    const postLogin = useCallback(
        (loginRequest: LoginRequest) => RDQAppService.login(loginRequest),
        [],
    )

    const onLoginSucess = useCallback(
        (user: LoginResponse) => {
            setUser?.(user)
            navigate("/listRdq")
        },
        [setUser, navigate],
    )


    const { mutate: submitLogin } = useMutation({
        mutationFn: postLogin,
        onSuccess: onLoginSucess
    })

    return { submitLogin }
}

export default useLogin