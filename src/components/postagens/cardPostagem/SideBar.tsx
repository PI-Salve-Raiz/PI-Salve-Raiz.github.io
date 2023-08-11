import { Link } from "react-router-dom";
import Usuario from "../../../models/Usuario";

interface SideBarProps {
  user: Usuario
}

function SideBar({user}: SideBarProps) {
  return (
  
    <div className="flex justify-between px-4 text-slate-950">
              <div className="flex w-full max-w-screen-lg">
                <div className="flex flex-col w-64 py-4 pr-3">
                <Link to='/perfil' className='flex px-3 py-2 mt-2 mt-auto text-lg rounded-sm font-medium hover:bg-gray-200'>
                  <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"><img src={user.foto} alt="" /></span>
                    <div className="flex flex-col ml-2">
                      <span className="mt-1 text-sm font-semibold leading-none">
                      {user.nome}
                      </span>
                      <span className="mt-1 text-xs leading-none">
                      {user.usuario}
                      </span>
                    </div></Link>
                <a
                    className=""
                    href="#"
                  >
                    
                  </a>
                  <Link to='/home' className='px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300'>Pagina Inicial</Link>
              
                  <a
                    className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                    href="#"
                  >
                    Descobrir
                  </a>
                  <a
                    className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                    href="#"
                  >
                    Notificações
                  </a>
                  <a
                    className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                    href="#"
                  >
                    Caixa de entrada
                  </a>
                  <a
                    className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                    href="#"
                  >
                    Salvos
                  </a>
                  <a
                    className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                    href="#"
                  >
                    Grupos
                  </a>
                  
                  
                </div>
              </div>
            </div>
  
  );
}

export default SideBar;