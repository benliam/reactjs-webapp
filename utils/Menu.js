const MenuList = [
    {
        name: 'home', href: '/'
    },
    {
        name: 'About us', href: '/about'
    },
    {
        name: 'Our work', href: '/our-work'
    },
    {
        name: 'pages', href: '#', child:[

            {
                name: 'Aftercare Instruction', href: '/aftercare'
            }
        ]
    },
    {
        name: 'make an appointment', href: '/appointments'
    },
    {
        name: 'contact', href: '/contact'
    }
]

export default MenuList