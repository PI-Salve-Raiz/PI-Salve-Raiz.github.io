
function SideBar() {
  return (
  
    <div className="flex justify-between w-screen px-4 text-slate-950">
              <div className="flex w-full max-w-screen-lg">
                <div className="flex flex-col w-64 py-4 pr-3">

                <a
                    className="flex px-3 py-2 mt-2 mt-auto text-lg rounded-sm font-medium hover:bg-gray-200"
                    href="#"
                  >
                    <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                    <div className="flex flex-col ml-2">
                      <span className="mt-1 text-sm font-semibold leading-none">
                        Usuário
                      </span>
                      <span className="mt-1 text-xs leading-none">
                        @usuario
                      </span>
                    </div>
                  </a>
                  
                  <a
                    className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                    href="#"
                  >
                    Pagina Inicial
                  </a>
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
                  <a
                    className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                    href="#"
                  >
                    Perfil
                  </a>
                  
                </div>
              </div>
            </div>
  
  );
}

export default SideBar;