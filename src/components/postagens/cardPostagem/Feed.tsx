import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import '../../../pages/home/Home.css'

interface FeedProps {
  post: Postagem;
}

function Feed({ post }: FeedProps) {
  return (

    <div className="flex flex-col flex-grow border-l border-r border-gray-300 fonteTitulo">
              <div className="flex w-full p-10 border-b border-gray-300 bg-slate-100">
                <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="flex">
                    <span className="font-semibold">Usuário</span>
                    <span className="ml-1">{post.usuario?.nome}</span>
                    <span className="ml-auto text-sm">Agora</span>
                  </div>
                  <h1>{post.titulo}</h1>
                  <p className="mt-1">
                    {post.texto}
                  </p>
                  <div className="flex justify-around gap-11 mt-10 -mb-4">
                  <Link to={`/editarPostagem/${post.id}`} className='text-sm font-semibold hover:underline'>
                    <button className='rounded bg-white text-blue-700 py-2 px-4'>Editar</button>
                  </Link>

                  <Link to={`/deletarPostagem/${post.id}`} className='ml-2 text-sm font-semibold hover:underline mr-20'>
                    <button className='rounded bg-white text-red-700 py-2 px-4'>Deletar</button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          
    );
}

export default Feed;