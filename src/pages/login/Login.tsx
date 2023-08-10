import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import Carrossel from '../../components/swiper/Carrossel';
import '../home/Home.css'

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin,
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== '') {
      navigate('/home');
    }
  }, [navigate, usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center fonteTitulo">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <Carrossel />
        </div>

        <div
          className="bg-orange-300 w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-3xl font-bold leading-tight mt-12">
              Faça login na sua conta
            </h1>

            <form onSubmit={login}>
              <div>
                <label className="block text-gray-700 mt-4">Endereço de email</label>
                <input
                  type="email"
                  name="usuario"
                  id="usuario"
                  placeholder="Endereço de email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  required
                  value={usuarioLogin.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Senha</label>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="Senha"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                  value={usuarioLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>

              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Esqueceu sua senha?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none font-semibold rounded-lg
            px-4 py-3 mt-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {isLoading ? (
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  />
                ) : (
                  <span>Entrar</span>
                )}
              </button>
            </form>

            <hr className="my-6 border-slate-900 w-full"></hr>

            <p className="mt-5">
              {' '}
              Ainda não tem uma conta?{' '}
              <Link to="/cadastro" className="text-indigo-600 hover:underline hover:text-indigo-700">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
