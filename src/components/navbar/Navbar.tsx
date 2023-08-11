
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

import './Navbar.css'


function Navbar() {
  const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }
    
    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full bg-gradient-to-r from-rose-400 to-orange-300 text-white flex py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className=' ml-10 text-4xl text-#FFFFFF uppercase fontelogo'>Salve Raiz</Link>

            <div className='flex gap-4 mt-2'>
              <Link to='/postagens' className='hover:underline justify-self-end'>Postagens</Link>
              <Link to='/temas' className='hover:underline justify-self-end'>Temas</Link>
              <Link to='/cadastroTema' className='hover:underline justify-self-end'>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:underline justify-self-end'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline justify-self-end'>Sair</Link>
              
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


