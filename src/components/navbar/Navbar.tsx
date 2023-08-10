
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import Switch from 'react-switch'




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
        <div className='w-full bg-[#3B3B5B] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl text-[#E19A2B] font-bold uppercase'>Salve Raiz</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='hover:underline'>Postagens</Link>
              <Link to='/temas' className='hover:underline'>Temas</Link>
              <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:underline'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
              
            </div>
            <Switch
              onChange={() => { }}
              checked
              height={15}
              width={40}
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={20}
              offColor="#fff"
              onColor="#232323"
            />
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