import { Link } from 'react-router-dom';
import homeLogo from '../../assets/home2.png'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css'

function Home() {
    return (
        <>
        <div className="bg-gradient-to-r from-rose-400 to-orange-300 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-6xl font-bold text-white fonteTitulo'>Seja bem vinde!</h2>
              <p className='text-2xl  text-white fonteParagrafo text-center'>Construindo pontes de apoio e oportunidade dentro da nossa própria comunidade.</p>

              <div className="flex justify-around gap-4 mt-2">
              <ModalPostagem />
                <button className='rounded py-2 px-4 text-white bg-zinc-950 hover:border-white hover:bg-zinc-800 hover:text-white'><Link to='/postagens' className='hover:underline'>Ver postagens</Link></button>
              </div>
            </div>

            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3 mt-10 mb-10' />
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;