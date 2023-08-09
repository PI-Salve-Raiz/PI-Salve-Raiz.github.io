

import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl">
      <div>
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl">
          
          <h3 className='text-lg font-bold text-center uppercase'>{post.usuario?.nome}</h3>
        </div>
        <div className='p-6'>
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.titulo}</h4>
          <p className="mb-3 font-normal text-white">{post.texto}</p>
          <p className="mb-3 font-normal text-white">Tema: {post.tema?.descricao}</p>
          <p className="mb-3 font-normal text-white">Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
         
        </div>
        
      </div>
      
      <div className="flex">
      <Link to={`/editarPostagem/${post.id}`} className='w-full text-white text-white bg-[#0a2472] hover:bg-[#0e6ba8] flex items-center justify-center py-2 rounded-bl-2xl'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-[#ff220c] hover:bg-[#ed254e] w-full flex items-center justify-center rounded-br-2xl'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem