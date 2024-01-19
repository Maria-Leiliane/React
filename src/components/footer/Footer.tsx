import { ReactNode, useContext } from 'react'
import { GithubLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'

import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
            <div className="flex justify-center bg-gradient-to-r from-violet-950 via-purple-400 to-blue-950 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Generation | Copyright: {data}
                    </p>

                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <div className='flex gap-2'>
                            <a href='https://www.linkedin.com/in/mlls/' target="_blank">
                                <LinkedinLogo size={48} weight='bold' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 />
                            </a>
                            <a href='https://github.com/Marilyn-FullStack' target="_blank">
                                <GithubLogo size={48} weight='bold' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 />
                            </a>
                            <a href='https://wa.me/message/M26HMQRIVWBBP1' target="_blank">
                                <WhatsappLogo size={48} weight='bold' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 />
                            </a>
                        </div>
                    </div>
                </div>
            </div>)
    }

    return (
        <>
            {component}
        </>
    )
}

export default Footer