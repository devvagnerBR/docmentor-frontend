import { userRequests } from '@/requests';
import { getCookie } from '@/services';
import * as Icon from "@phosphor-icons/react"
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

export const Header = () => {

    const user = userRequests()
    const { pathname } = useLocation();
    const hideHeader = pathname === '/entrar' || pathname === '/cadastro' || pathname === '/';

    const { data } = useQuery(
        ["user"],
        user.getUserById,
        { enabled: !!getCookie( "token" ) }
    )

    if ( hideHeader ) return null
    return (
        <div className='h-20 flex max-w-[1920px] w-full items-center justify-between px-4'>
            <p>DOCMENTOR</p>
            <div className='flex items-center'>
                <div className=' flex items-center  cursor-pointer'>
                    <Icon.EnvelopeSimple className='' weight='regular' size={24} />
                    <p className='flex items-center justify-center text-white bg-primary-400 h-4 text-xs w-4 font-medium border border-black  rounded-full relative left-[-10px] top-[-6px] '>2</p>
                </div>
                <img className='w-12 rounded-full border-2 border-white shadow-md' src={data?.profile_img} alt="" />
            </div>
        </div>
    )
}
