import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'

function Navbar() {

  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuario desconectado com sucesso', 'Entre novamente!')
    navigate('/login')
  }

  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='w-full bg-gradient-to-r from-violet-950 via-purple-400 to-blue-950
      text-red-300 flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Link Lua</Link>

          <div className='flex gap-4'>
            <Link to='/postagens' className='hover:underline'>Postagens</Link>
            <Link to='/cadastroPostagem' className='hover:underline'>Nova Postagem</Link>
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastroTema' className='hover:underline'>Novo tema</Link>
            <Link to='/perfil' className='hover:underline'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar