import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import '../../../pages/home/Home.css'
import { toastAlerta } from '../../../util/toastAlerta';

function FormularioTema() {
  const [tema, setTema] = useState<Tema>({} as Tema);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/tema/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });

    console.log(JSON.stringify(tema));
  }

  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/tema`, tema, setTema, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta('Tema atualizado com sucesso','sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente','info');
          handleLogout();
        } else {
          toastAlerta('Erro ao atualizar o Tema','erro');
        }
      }
    } else {
      try {
        await cadastrar(`/tema`, tema, setTema, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta('Tema cadastrado com sucesso','sucesso');
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente','info');
          handleLogout();
        } else {
          toastAlerta('Erro ao cadastrado o Tema','erro');
        }
      }
    }

    retornar();
  }

  function retornar() {
    navigate('/temas');
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','info');
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center bg-[#fbfbfb] fonteTitulo ">
      <div className="grid w-90 grid-col-4 gap-4">
        <h1 className="text-4xl text-center mt-8 font-bold">
          {id === undefined ? 'Cadastre um novo tema' : 'Editar tema'}
        </h1>
        <form className="w-2/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
          <label htmlFor="descricao" className='text-lg'>Descrição do tema</label>
          <input
            type="text"
            name="descricao"
            className="h-10 w-full rounded border p-2 text-sm"
            placeholder="Descrição"
            value={tema.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />

          <label htmlFor="tipo" className='text-lg'>Tipo do tema</label>
          <input
            type="text"
            name="tipo"
            className="h-10 w-full rounded border p-2 text-sm"
            placeholder="Tipo"
            value={tema.tipo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />

          <button className="rounded p-2 bg-[#FD5E57] text-gray-50 hover:bg-gradient-to-r hover:from-[#FD5E57] hover:to-[#FC477E]">
            {id === undefined ? 'Cadastrar' : 'Editar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioTema;
