import Postagem from '../../../models/Postagem';
import '../../../pages/home/Home.css'

interface FeedProps {
  post: Postagem;
}

function Feed({ post }: FeedProps) {
  return (

    <div className="flex flex-col flex-grow border-l border-r border-gray-300 fonteTitulo">
              <div className="flex w-full p-8 border-b border-gray-300">
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
                  <div className="flex justify-between mt-4 -mb-4">
                    <button className="text-sm font-semibold hover:underline">Curtir</button>
                    <button className="ml-2 text-sm font-semibold hover:underline">
                      Comentar
                    </button>
                    <button className="ml-2 text-sm font-semibold hover:underline">
                      Compartilhar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          
    );
}

export default Feed;