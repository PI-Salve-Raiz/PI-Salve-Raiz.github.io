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
        { img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fb76ab86778641.62a2693eeaaee.jpg" },
        { img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5e4380116982177.62a26b61941fc.png" },
        { img: "https://cdn.dribbble.com/users/692156/screenshots/2535440/media/6895c695e0316be1f531e4e1f1ff9398.png" },
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