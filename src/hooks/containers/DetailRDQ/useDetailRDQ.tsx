import { useRDQAppContext } from '@/hooks/contexts/useRDQAppContext'
import RDQAppService from '@/services/RDQAppService'
import { useParams } from 'react-router'
import { useCallback } from 'react'
import { DetailRDQResponse } from '@/interfaces/services/DetailRDQ/DetailRDQResponse'
import { useQuery } from '@tanstack/react-query'
import { RDQ } from '@/interfaces/services/dto/RDQ'
import { useRDQAppBarContext } from '@/hooks/contexts/useRDQAppBarContext'
import { useEffect, useMemo } from 'react'
import BackLink from '@/components/BackLink/BackLink'

const useDetailRDQ = () => {
    const params = useParams()
    const rdqId = Number(params.rdqId)

    const { rdqs, setRdqs } = useRDQAppContext()

    const { setBarTitle, setLeftActionNode } = useRDQAppBarContext()

    useEffect(() => {
        setBarTitle?.('Detail RDQ')

        setLeftActionNode?.(<BackLink to="/listRdq" />)
    }, [])

    const onGetDetailRDQSucess = useCallback(
        (detailRdq: DetailRDQResponse) =>
            setRdqs?.((listRDQ) => {
                const newList = listRDQ.map((rdq) =>
                    rdq.id === detailRdq.id
                        ? ({ ...rdq, ...detailRdq } as RDQ)
                        : rdq
                )

                if (newList.length === listRDQ.length) {
                    newList.push(detailRdq)
                }
                return newList
            }),
        [setRdqs]
    )

    const { isFetched } = useQuery({
        queryFn: () => RDQAppService.getDetailRdq(rdqId),
        onSuccess: onGetDetailRDQSucess,
        enabled: setRdqs != undefined,
    })

    const rdq = useMemo(() => rdqs.find((e) => e.id === rdqId), [rdqId, rdqs])

    return { rdq, isFetched }
}

export default useDetailRDQ
