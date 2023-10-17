import * as Icon from "@phosphor-icons/react"

export const menuData = [
    {
        id: 1,
        name: 'Alunos',
        icon: Icon.Users,
        path: '/painel/alunos',
        exact: true
    },
    {
        id: 2,
        name: 'Escolas',
        icon: Icon.ChalkboardSimple,
        path: 'escolas',
        exact: true
    },
    {
        id: 3,
        name: 'Configurações',
        icon: Icon.Gear,
        path: 'configuracoes',
        exact: true
    }
]
