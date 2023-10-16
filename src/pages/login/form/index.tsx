import { useLogin } from "@/hooks"

export const LoginForm = () => {


    const { register, setValue, errors, onSubmit, error, isLoading } = useLogin()

    return (
        <form action="" onSubmit={onSubmit} className='flex  w-full mt-4 flex-col gap-4'>

            <label htmlFor="email" className='w-full'>
                Email
                <input
                    {...register( 'email' )}
                    id="email"
                    type="email"
                    className='border h-12 w-full rounded-md mt-2 focus:bg-secondary-100 transition-all pl-2' />
                {errors.email && <p className='mt-2 text-red-400 text-sm text-end'>{errors.email.message}</p>}
            </label>

            <label htmlFor="password" className='w-full'>
                Senha
                <input
                    {...register( 'password' )}
                    id="password"
                    type="password"
                    className='border h-12 w-full rounded-md mt-2 focus:bg-secondary-100 transition-all pl-2' />
                {errors.password && <p className='mt-2 text-red-400 text-sm text-end'>{errors.password.message}</p>}
            </label>

            {error && <p className="text-red-400 text-end">{error?.message}</p>}
            {!isLoading && <button type="submit"
                className='w-full mt-2 bg-primary-400 h-12 rounded-md text-secondary-50 hover:bg-blue-600 transition-all'>
                Entrar
            </button>}
            {isLoading &&
                <button
                    disabled
                    className='w-full mt-2 bg-primary-400 h-12 rounded-md text-secondary-50 disabled:bg-blue-300 hover:bg-blue-600 transition-all'>
                    Entrando...
                </button>
            }
        </form>
    )
}
