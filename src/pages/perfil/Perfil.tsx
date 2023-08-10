/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import loginLogo from '../../assets/capaperfil.jpg';
function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [usuario.token]);

  return (
    <div className="container mx-auto mt-4 rounded-2xl overflow-hidden ">
      <img
        className="w-full h-40 object-cover border-b-8 border-white"
        src={loginLogo}
        alt="Capa do Perfil"
      />
      <img
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
        className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
      />
      
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-orange-300 text-white text-2xl items-center justify-center">
      <div className="mt-20 flex justify-end gap-2 p-6 pt-0">
          <button className=" inline-flex items-center justify-center flex-1 h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap bg-emerald-50 text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
            <span className="order-2">Enviar mensagem</span>
            <span className="relative only:-mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                role="graphics-symbol"
                aria-labelledby="title-21 desc-21"
              >
                <title id="title-21">Icon title</title>
                <desc id="desc-21">
                  A more detailed description of the icon
                </desc>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </span>
          </button>
          <button className="inline-flex items-center justify-center flex-1 h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span className="order-2">Adicionar amigo</span>
            <span className="relative only:-mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                role="graphics-symbol"
                aria-labelledby="title-06 desc-06"
              >
                <title id="title-06">Icon title</title>
                <desc id="desc-06">
                  A more detailed description of the icon
                </desc>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </span>
          </button>
        </div>
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
      </div>
    </div>
  );
}

export default Perfil;
