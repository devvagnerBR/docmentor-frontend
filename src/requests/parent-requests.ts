import { docmentorAPI, getCookie } from '@/services'
import { ParentsInterfaceWithStudentId, ParentsWithParentId } from '@/types/parent-interface'
import React from 'react'

export const parentRequests = () => {

    const token = getCookie( "token" )

    const getParentsByStudentId = async ( studentId: string ) => {

        try {
            const res = await docmentorAPI.get( `/parent/${studentId}`, { headers: { Authorization: token } } )
            return res.data[0]

        } catch ( error: any ) {
            throw new Error( error.response.data )
        }
    }


    const updateParents = async ( data: ParentsWithParentId ) => {


        try {
            const res = await docmentorAPI.put( `/parent/${data.parentId}`,
                {
                    address: data.address || undefined,
                    father_name: data.father_name || undefined,
                    mother_name: data.mother_name || undefined,
                    phone_number1: data.phone_number1 || undefined,
                    phone_number2: data.phone_number2 || undefined,
                },
                { headers: { Authorization: token } },

            )

            return res.data

        } catch ( error: any ) {
            throw new Error( error.response.data )
        }
    }

    const registerParents = async ( data: ParentsInterfaceWithStudentId ) => {
        try {

            const res = await docmentorAPI.post( `/parent/${data.studentId}`,
                {
                    address: data.address || undefined,
                    father_name: data.father_name || undefined,
                    mother_name: data.mother_name || undefined,
                    phone_number1: data.phone_number1 || undefined,
                    phone_number2: data.phone_number2 || undefined,
                },
                { headers: { Authorization: token } },

            )

            return res.data


        } catch ( error: any ) {
            throw new Error( error.response.data )
        }
    }


    return {
        updateParents,
        getParentsByStudentId,
        registerParents
    }
}
