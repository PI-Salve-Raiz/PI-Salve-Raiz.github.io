import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { buscar } from '../../../services/Service';
import Feed from '../cardPostagem/Feed';
import Trending from '../cardPostagem/Trending';
import SideBar from '../cardPostagem/SideBar';
import '../../../pages/home/Home.css'
import ModalPostagem from '../modalPostagem/ModalPostagem';
import { toastAlerta } from '../../../util/toastAlerta';

function ListaPostagens() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  async function buscarPostagens() {
    try {
      await buscar('/postagem', setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente','info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);
  return (
    <>
      {postagens.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='bg-gradient-to-r from-rose-400 to-orange-300 fonteTitulo '>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-3">
          <SideBar key={usuario.id} user={usuario}/>
        </div>
        <div className="col-span-4 lg:col-span-6">
        <div className="flex justify-between pb-1 border-b border-gray-300 mt-4">
                <h1 className="text-3xl font-semibold">Postagens</h1>
                <ModalPostagem />
              </div>
        {postagens.map((postagem) => (
          <Feed key={postagem.id} post={postagem} />
        ))}
        </div>
        
        <div className="col-span-4 lg:col-span-3">
        <h3 className="mt-3 font-semibold">Notificações</h3>
          {postagens.map((postagem) => (
          <Trending key={postagem.id} post={postagem} />
          ))}
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default ListaPostagens;