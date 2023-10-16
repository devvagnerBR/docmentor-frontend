import { SideBanner } from '@/components'

import { Link } from 'react-router-dom'
import { LoginForm } from '@/pages'

export const Login = () => {


 


  return (
    <div className='w-screen h-screen flex p-8 py-20 max-lg:p-0 items-center justify-center max-sm:p-4'>

      <section className=' flex w-full h-full rounded-md max-w-[1220px] border shadow-sm max-sm:border-0'>
        <SideBanner />
        <section className='w-full h-full flex items-center justify-center flex-col max-sm:justify-start'>
          <section className='max-w-lg w-full'>
            <header className=' flex flex-col items-start justify-center'>
              <h1 className='text-secondary-8000 mt-8 font-semibold up text-3xl'> Entrar</h1>
              <h1 className='text-secondary-700 font-light text-sm leading-4 text-left mt-2'>Bem-vindo (a) de volta, coloque suas credenciais de login abaixo para acessar sua conta.</h1>
            </header>
            <LoginForm />
            <p className='mt-4 text-sm text-end'>Ainda não tem uma conta? <Link to="/cadastro" className='text-primary-400 cursor-pointer'>Criar conta</Link>
            </p>
          </section>
        </section>
      </section>

    </div>
  )
}
