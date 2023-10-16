import { SideBanner } from "@/components"
import { Link } from "react-router-dom"
import { SignupForm } from "@/pages"

export const Signup = () => {

    //cadastro
    //name, email, password, username

    return (
        <div className='w-screen h-screen flex p-8 py-20 max-lg:p-0 items-center justify-center max-sm:p-4'>

            <div className=' flex w-full h-full rounded-md max-w-[1220px] border shadow-sm max-sm:border-0'>
                <SideBanner />
                <section className='w-full h-full flex items-center justify-center flex-col max-sm:justify-start'>
                    <section className='max-w-lg w-full'>
                        <header className=' flex flex-col items-start justify-center'>
                            <h1 className='text-secondary-8000 mt-8 font-semibold up text-3xl'> Cadastro</h1>
                            <h1 className='text-secondary-700 font-light text-sm leading-4 text-left mt-2'>Bem-vindo à nossa comunidade! Preencha suas informações de cadastro abaixo para começar a utilizar o site.</h1>
                        </header>
                        <SignupForm />
                        <p className='mt-4 text-sm text-end'>Já tem uma conta? <Link to="/entrar" className='text-primary-400 cursor-pointer'>Entrar</Link> </p>
                    </section>
                </section>

            </div>
        </div>
    )
}
