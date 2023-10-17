import { useStudentDetails } from '@/hooks/use-student-details'
import { useNavigate, useParams } from 'react-router-dom'
import * as Icon from "@phosphor-icons/react"
import { EditButton } from '@/components'
import { momentJS } from '@/services/moment-js'

export const StudentDetails = () => {

    const { studentId } = useParams()
    const navigate = useNavigate()
    const { student } = useStudentDetails( studentId! )

    const school = student?.school[0]
    const serviceDays = student?.service_days

    const res = serviceDays?.map( ( day, index ) => {
        const formattedDay = day.replace( /_/g, ' ' ).replace( /Ç/g, 'Ç' );
        return index === serviceDays.length - 1 ? formattedDay : formattedDay + ' | ';
    } ).join( "" )


    if ( student )
        return (
            <div className='w-full mb-4'>

                <header className='flex gap-4 items-center'>
                    <Icon.CaretLeft onClick={() => navigate( -1 )} size={32} weight='regular' className='fill-neutral-500 cursor-pointer' />
                    <h1 className='uppercase font-medium'>Informações do aluno</h1>
                </header>

                <section className='p-2 flex flex-col gap- mt-4'>
                    <div className='flex gap-2 items-center'>
                        <h6 className='font-semibold'>{student.name}</h6>
                        <EditButton
                            onClick={() => console.log( 'oi' )}
                            title='editar perfil'
                        />
                    </div>
                    <div className='flex gap-4'>
                        <p className='text-sm font-light'>ESCOLA {school?.name}</p>
                        <p className='text-sm font-light'>TURMA {student.school_grade}</p>
                    </div>
                </section>

                <section className='p-2 h-12 gap-4 divide-x-2 flex items-center'>
                    <div>
                        <h1 className='text-sm'>DIAS DE ATENDIMENTO</h1>
                        <p className='text-sm font-semibold'>{res}</p>
                    </div>
                    <div className='pl-4'>
                        <h1 className='text-sm'>IDADE</h1>
                        <p className='text-sm font-semibold'>{momentJS().diff( Number( student?.birthday ), 'years' )} anos</p>
                    </div>
                </section>
            </div>
        )
}