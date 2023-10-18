import { useStudentDetails } from '@/hooks/use-student-details'
import { useNavigate, useParams } from 'react-router-dom'
import * as Icon from "@phosphor-icons/react"
import { EditButton } from '@/components'
import { momentJS } from '@/services/moment-js'
import { limitText } from '@/utils'

export const StudentDetails = () => {

    const { studentId } = useParams()
    const navigate = useNavigate()
    const { student } = useStudentDetails( studentId! )

    const school = student?.school
    const parent = student?.parents
    const serviceDays = student?.service_days
    const reports = student?.reports

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
                        <h6 className='font-semibold '>{student.name}</h6>
                        <EditButton
                            onClick={() => console.log( 'editar aluno' )}
                            title='editar perfil'
                        />
                    </div>
                    <div className='flex gap-4 max-sm:flex-col max-sm:gap-1'>
                        <p className='text-sm font-light max-sm:text-xs max-sm:mt-2'>ESCOLA {school?.name}</p>
                        <p className='text-sm font-light max-sm:text-xs'>TURMA {student.school_grade}</p>
                    </div>
                </section>

                <section className='p-2 max-sm:flex-col max-sm:items-start max-sm:divide-x-0 gap-4 divide-x-2 flex items-center'>
                    <div>
                        <h1 className='text-sm'>DIAS DE ATENDIMENTO</h1>
                        <p className='text-sm font-semibold'>{res}</p>
                    </div>
                    <div className='sm:pl-4'>
                        <h1 className='text-sm'>IDADE</h1>
                        <p className='text-sm font-semibold'>{momentJS().diff( Number( student?.birthday ), 'years' )} anos</p>
                    </div>
                </section>

                <section className='mt-8 max-sm:mt-4 px-2'>
                    <header className='flex  gap-2 items-center'>
                        <Icon.Info size={26} className='fill-neutral-900 shrink-0' />
                        <p className='font-semibold max-md:text-sm'>RESPONSÁVEIS</p>
                        <EditButton title='EDITAR DADOS' onClick={() => console.log( "editar dados" )} />
                    </header>
                    {parent ? <main className='flex flex-col gap-4'>
                        <section className='mt-4 gap-4 max-sm:divide-x-0 divide-x-2 flex max-sm:flex-col  '>
                            {parent?.mother_name && <div>
                                <h1 className='text-sm'>RESPONSÁVEL 1</h1>
                                <p className='text-sm font-semibold'>{parent?.mother_name}</p>
                            </div>}
                            {parent?.father_name && <div className={` ${parent?.mother_name && 'pl-4 max-sm:pl-0'}`}>
                                <h1 className='text-sm'>RESPONSÁVEL 2</h1>
                                <p className='text-sm font-semibold'>{parent?.father_name}</p>
                            </div>}
                        </section>
                        <section className='max-sm:flex-col  gap-4 max-sm:divide-x-0 divide-x-2 flex items-start'>
                            <div>
                                <h1 className='text-sm'>ENDEREÇO</h1>
                                <p className='text-sm font-semibold '>{parent?.address} CENTRO - RIO DAS OSTRAS-RJ</p>
                            </div>
                            <div className='pl-4 max-sm:pl-0 shrink-0'>
                                <h1 className='text-sm'>CEP</h1>
                                <p className='text-sm font-semibold'>00000-000</p>
                            </div>
                        </section>
                        <section className='h-12 gap-4 divide-x-2 flex items-center'>
                            {parent?.phone_number1 && <div>
                                <h1 className='text-sm'>TELEFONE 1</h1>
                                <p className='text-sm font-semibold'>{parent?.phone_number1}</p>
                            </div>}
                            {parent?.phone_number2 && <div className='pl-4'>
                                <h1 className='text-sm'>TELEFONE 2</h1>
                                <p className='text-sm font-semibold'>{parent?.phone_number2}</p>
                            </div>}
                        </section>
                    </main> :
                        <button
                            className='mt-8 border h-12 px-4 rounded-md border-neutral-900 bg-primary-400 text-white font-semibold'>
                            CADASTRAR RESPONSÁVEL
                        </button>}
                </section>

                <section className={`p-2 ${parent ? 'mt-8 max-sm:mt-2' : "mt-8"} `}>
                    <header className='flex gap-2 items-center  max-sm:w-full'>

                        <Icon.Article size={26} className='fill-neutral-900' />
                        <h2 className='font-semibold max-md:text-sm'>RELATÓRIOS</h2>

                        <EditButton title='EDITAR DADOS' onClick={() => console.log( "editar dados" )} />
                    </header>
                    <button
                        className='mt-8 border mb-8 h-12 px-4 rounded-md border-neutral-900 bg-primary-400 text-white font-semibold'>
                        NOVO RELATÓRIO
                    </button>
                    {reports && reports?.length > 0 &&
                        <section className=' flex flex-col gap-4'>
                            <div className='flex max-sm:hidden items-center shrink-0'>
                                <p className='w-56 text-sm shrink-0'>TÍTULO</p>
                                <p className='0 w-48 text-sm shrink-0'>ÚLTIMA ATUALIZAÇÃO</p>
                                <p className='w-40 text-sm'>AÇÕES</p>
                            </div>
                            <main className='flex flex-col gap-2'>
                                {reports?.map( ( report ) => {
                                    return (
                                        <div key={report.id} className='flex items-center shrink-0'>
                                            <div className='flex w-56 max-sm:w-fit max-sm:pr-4 gap-2 items-center shrink-0'>
                                                <Icon.Files size={18} weight='regular' className='fill-neutral-900' />
                                                <p className=' font-medium text-neutral-900'>{limitText( report.title, 18 )}</p>
                                            </div>
                                            <p className='w-48 max-sm:hidden shrink-0 font-medium text-neutral-900'>{momentJS( report.updated_at ).format( 'DD/MM/YYYY' )}</p>
                                            <div className='flex gap-4 w-40 items-center'>
                                                <Icon.ArrowSquareDown size={28} weight='light' className='fill-neutral-900 cursor-pointer' />
                                                <Icon.Download size={28} weight='light' className='fill-neutral-900 cursor-pointer' />
                                            </div>
                                        </div>
                                    )
                                } )}
                            </main>
                        </section>
                    }
                    <div className='cursor-pointer w-fit flex gap-2 items-center  h-8  rounded-md border-neutral-300'>
                        <Icon.TrashSimple size={20} weight='light' className='fill-red-400' />
                        <p className='text-red-400 font-light text-sm'>EXCLUIR ALUNO</p>
                    </div>
                </section>
            </div>
        )
}