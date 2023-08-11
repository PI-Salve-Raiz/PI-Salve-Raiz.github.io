import Postagem from '../../../models/Postagem';

interface FeedProps {
  post: Postagem;
}

function Trending({ post }: FeedProps) {
  return (
    <div className="flex flex-col flex-shrink-0 w-3/4 py-4 pl-4 -mt-4">
      <div>
        
        <div className="flex w-full py-4 border-b border-gray-300">
          <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full">
            <img src={post.usuario?.foto} alt="" />
          </span>
          <div className="flex flex-col flex-grow ml-2">
            <div className="flex text-sm">
              <span className="font-semibold">{post.usuario?.nome}</span>
            </div>
            <p className="mt-2 ml-2 text-sm">
              Acabou de criar uma nova postagem
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
