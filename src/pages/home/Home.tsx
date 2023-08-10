import { Link } from 'react-router-dom';
import homeLogo from '../../assets/home2.png'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home() {
    return (
        <>
        <div className="bg-gradient-to-r from-rose-400 to-orange-300 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold  text-white'>Seja bem vinde!</h2>
              <p className='text-xl  text-white'>Expresse aqui seus pensamentos e opniões</p>

              <div className="flex justify-around gap-4">
              <ModalPostagem />
                <button className='border rounded border-white py-2 px-4 text-white hover:border-white hover:bg-white hover:text-indigo-800'><Link to='/postagens' className='hover:underline'>Ver postagens</Link></button>
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