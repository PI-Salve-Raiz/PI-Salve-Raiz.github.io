

import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  
  return (
    <div className=" max-w-3xl rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      
      <div>
      <img src={post.foto} className="object-cover rounded-t-lg max-h-96 md:w-full" alt=""/>
        <div className="dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        
          <h3 className='text-lg font-bold text-center uppercase'>{post.usuario?.nome}</h3>
        </div>
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.titulo}</h4>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.texto}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tema: {post.tema?.descricao}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
         
        </div>
        
        <div className="flex">
      <Link to={`/editarPostagem/${post.id}`} className='w-full text-white text-white bg-[#0a2472] hover:bg-[#0e6ba8] flex items-center justify-center py-2 rounded-bl-lg'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-[#ff220c] hover:bg-[#ed254e] w-full flex items-center justify-center rounded-br-lg'>
          <button>Deletar</button>
        </Link>
      </div>

      </div>
      
    </div>
  )
}

export default CardPostagem