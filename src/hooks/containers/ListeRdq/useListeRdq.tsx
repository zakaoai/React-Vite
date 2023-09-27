import { ListeRdqResponse } from "@/interfaces/services/ListeRDQ/ListeRdqResponse"
import RDQAppService from "@/services/RDQAppService"
import { useQuery } from "@tanstack/react-query"
import { useCallback, useEffect, useState } from "react"
import { useRDQAppContext } from "../../contexts/useRDQAppContext"
import { useRDQAppBarContext } from "../../contexts/useRDQAppBarContext"
import { useUserContext } from "@/hooks/contexts/useUserContext"
import { Employe } from "@/interfaces/services/dto/Employe"
import LogoutLink from "@/components/LogoutLink/LogoutLink"


const useListeRdq = () => {

    const { setBarTitle, setLeftActionNode } = useRDQAppBarContext()
    const { setUser, user } = useUserContext()

    useEffect(() => {
        setBarTitle?.("Liste des RDQ")
        setLeftActionNode?.(<LogoutLink to="/login" />)
    }, [])



    const { rdqs, setRdqs } = useRDQAppContext()

    const [historique, setHistorique] = useState<boolean>(false)

    const filteredListeRdq = rdqs.filter((rdq) => (rdq.cloture || false) === historique)

    const toggleHistorique = useCallback(
        () => setHistorique(a => !a),
        [setHistorique],
    )


    const onGetListeRDQSucess = useCallback(
        (listRDQ: ListeRdqResponse[]) => setRdqs?.(listRDQ),


        [setRdqs],
    )



    useQuery({
        queryFn: () => RDQAppService.getListRdq(),
        onSuccess: onGetListeRDQSucess,
        enabled: setRdqs != undefined
    })

    const onGetUserDetailSucess = useCallback(
        (userDetail: Employe) => setUser?.(currentUser => ({ ...currentUser, ...userDetail })),
        [setUser],
    )


    useQuery({
        queryKey: ['userDetail'],
        queryFn: () => RDQAppService.getUserDetail(),
        onSuccess: onGetUserDetailSucess,
    })

    return {
        listeRDQ: filteredListeRdq,
        toggleHistorique,
        user
    }
}

export default useListeRdq