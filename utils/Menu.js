const MenuList = [
    {
        name: 'home', href: '/'
    },
    {
        name: 'blog', href: '/blog'
    },
    {
        name: 'pages', href: '#', child:[
            {
                name: 'About us', href: '/about'
            },
            {
                name: 'Our work', href: '/our-work'
            },
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