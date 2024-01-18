import { ReactNode, useContext } from 'react'
import { GithubLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'

import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Generation | Copyright: {data}
                    </p>

                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo href='https://www.linkedin.com/in/mlls/' target="_blank" size={48} weight='bold' />
                        <GithubLogo href='https://github.com/Marilyn-FullStack' target="_blank" size={48} weight='bold' />
                        <WhatsappLogo href='https://wa.me/message/M26HMQRIVWBBP1' target="_blank" size={48} weight='bold' />
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