import { menuData } from "@/data"
import { userRequests } from "@/requests"
import { mouseHover } from "@/utils"
import * as Icon from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"



export const SidebarMenu = () => {

    const mouse = mouseHover()
    const { logOut } = userRequests()

    return (
        <div className='min-w-[4rem] z-50 max-sm:hidden bg-white ml-4 rounded-md border-neutral-900 border  h-[calc(100%-6rem)] gap-8  flex flex-col items-center pt-0 py-4 justify-start absolute  '>

            <nav
                onMouseEnter={mouse.handleMouseEnter}
                onMouseLeave={mouse.handleMouseLeave}
                className="h-full  flex w-full flex-col py-4">
                {menuData.map( ( item ) => {
                    return (
                        <NavLink
                            key={item.id}
                            className="sidebar_active flex h-12  items-center w-full  justify-start"
                            to={item.path}
                            end={item.path === '/painel'}>

                            <div id="icon" className="w-16 h-full flex items-center justify-center">
                                <item.icon className='' size={24} weight='light' />
                            </div>
                            <div className={`${mouse.isHovered ? "w-40" : "hidden"} pr-4 `}>
                                <p className="text-secondary-800 uppercase">{item.name}</p>
                            </div>
                        </NavLink>
                    )
                } )}
            </nav>
            <a
                onMouseEnter={mouse.handleMouseEnter}
                onMouseLeave={mouse.handleMouseLeave}
                onClick={logOut}
                className="sidebar_active flex cursor-pointer h-12  items-center w-full pl-1 justify-start">
                <div id="icon" className="w-16 h-full flex items-center justify-center">
                    <Icon.SignOut className='' size={24} weight='light' />
                </div>
                <div className={`${mouse.isHovered ? "w-40" : "hidden"} pr-4 `}>
                    <p className="text-secondary-800 uppercase">Sair</p>
                </div>
            </a>
        </div>
    )
}
