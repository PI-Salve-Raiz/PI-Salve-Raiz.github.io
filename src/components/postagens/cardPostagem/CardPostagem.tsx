import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';

interface CardPostagemProps {
  post: Postagem;
}

function CardPostagem({ post }: CardPostagemProps) {
  return (
    <div className=" grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 rounded-lg">
      <div className="col-span-4 lg:col-span-3">
        <div>
          <nav className="z-20 flex flex-col justify-center items-center gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/3 mt-2 h-96 w-1/4 rounded-lg border">
            <Link
              to="/home"
              className="flex h-20 w-20 flex-col items-center justify-center gap-1 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>

              <small className="text-xs font-medium">Home</small>
            </Link>

            <Link
              to="/perfil"
              className="flex aspect-square min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
            >
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <small className="text-center text-xs font-medium">
                {' '}
                Profile{' '}
              </small>
            </Link>


            <a
              href="#settings"
              className="flex aspect-square min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <small className="text-center text-xs font-medium">
                {' '}
                Settings{' '}
              </small>
            </a>

            <hr className="dark:border-gray-700/60" />
          </nav>
        </div>
      </div>

      <div className="col-span-4 lg:col-span-6 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg mt-2">
        <img
          src={post.foto}
          className="object-cover rounded-t-lg max-h-96 md:w-full"
          alt=""
        />
        <div>
          <h3 className="text-lg font-bold text-center uppercase">
            {post.usuario?.nome}
          </h3>
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.titulo}
          </h4>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post.texto}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Tema: {post.tema?.descricao}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Data:{' '}
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: 'full',
              timeStyle: 'medium',
            }).format(new Date(post.data))}
          </p>
        </div>
        <div className="flex">
          <Link
            to={`/editarPostagem/${post.id}`}
            className="w-full text-white text-white bg-[#0a2472] hover:bg-[#0e6ba8] flex items-center justify-center py-2 rounded-bl-lg"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletarPostagem/${post.id}`}
            className="text-white bg-[#ff220c] hover:bg-[#ed254e] w-full flex items-center justify-center rounded-br-lg"
          >
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardPostagem;
