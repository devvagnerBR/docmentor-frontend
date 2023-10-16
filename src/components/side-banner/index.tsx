import React from 'react'
import * as Icon from "@phosphor-icons/react"




export const SideBanner = () => {



    return (
        <section className='w-[calc(100%-40%)] h-full flex flex-col items-center  bg-primary-400 max-lg:hidden'>
            <div className='w-full h-full items-center justify-between flex flex-col max-w-sm py-20'>
                <div>
                    <h1 className='text-secondary-50 text-3xl text-start justify-center font-semibold'>Bem vindo a nossa comunidade</h1>
                    <h1 className='text-secondary-50 text-sm text-start justify-center font-normal mt-4'>Plataforma de gestão e controle de cadastro de alunos, onde você pode facilmente registrar informações e gerar relatórios detalhados para um acompanhamento eficaz.</h1>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex gap-2'>
                        <Icon.Star weight='fill' className='fill-yellow-400' size={22} />
                        <Icon.Star weight='fill' className='fill-yellow-400' size={22} />
                        <Icon.Star weight='fill' className='fill-yellow-400' size={22} />
                        <Icon.Star weight='fill' className='fill-yellow-400' size={22} />
                        <Icon.Star weight='fill' className='fill-yellow-400' size={22} />
                    </div>
                    <h1 className='text-secondary-50 text-sm text-start  font-normal mt-5'>" Facilitou muito o meu trabalho como professor e tornou a gestão dos alunos mais eficiente. "</h1>
                    <div className='mt-4 flex gap-2'>
                        <img className='w-10 rounded-full' src="https://pbs.twimg.com/profile_images/1601292494767005701/U4H4y3qs_400x400.jpg" alt="" />
                        <div className='flex flex-col justify-center'>
                            <h4 className='text-secondary-50 text-xs'>Neymar Jr</h4>
                            <h4 className='text-secondary-100/70 text-xs'>Futebolista profissional</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
