import {Phone, ChatCircleText, Users} from "@phosphor-icons/react";


export const sidebarIcons =[

    {
        index:0,
        name:'chats',
        icon: <ChatCircleText size={24} weight="light" />,
        link: '/chats'    
    },

    {
        index:1,
        name:'calls',
        icon: <Phone size={24} weight="light" />,
        link:'/calls'
    },

    {
        index:2,
        name:'friends',
        icon:<Users size={24} weight="light" />,
        link:'/friends'
    }

]

 