// Importando os Componentes Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando SEU CSS
import "./Carrossel.css";

// Importando Modulos do Carrossel
import { Navigation, Pagination } from 'swiper/modules';

function Carrossel() {

    // eslint-disable-next-line no-var
    var items = [
        { img: "https://media.discordapp.net/attachments/1120709412110205028/1138951219226878042/cheerful-diverse-people-together-park.jpg?width=695&height=498" },
        { img: "https://media.discordapp.net/attachments/1120709412110205028/1138951069993533460/diverse-hands-touching-white-paper-mockup-pink-wallpaper.jpg?width=885&height=498" },
        { img: "https://cdn.discordapp.com/attachments/1120709412110205028/1138950870810230814/salveraizlogin.jpg" },
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    items.map((item) => (
                        <SwiperSlide>
                            <img src={item.img} alt="Imagem" />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    )
}

export default Carrossel