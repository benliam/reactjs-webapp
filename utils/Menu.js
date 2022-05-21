const MenuList = [
    {
        name: 'Home', href: '/'
    },
    {
        name: 'Blog', href: '/blog'
    },
    {
        name: 'Pages', href: '#', child:[
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
        name: 'Appointments', href: '/appointments'
    },
]

export default MenuList