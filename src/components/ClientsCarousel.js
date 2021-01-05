import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
//clients imports
import logo1 from "../images/clients/askona.jpg";
import logo2 from "../images/clients/divan-boss.jpg";
import logo3 from "../images/clients/nikuda-ne-edem.jpg";
import logo4 from "../images/clients/planeta-odejda-obuv.jpg";
import logo5 from "../images/clients/shir-i-gesh.jpg";

const ClientsCarousel = () => {
    return (
        <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2500}
        emulateTouch={true}
        swipeable={true}
        >

            <>
                <img src={logo1} alt="Аскона" />
                <h3></h3>
            </>
            <>
                <img src={logo2} alt="Диван Босс" />
            </>
            <>
                <img src={logo3} alt="Никуда не едем..." />
            </>
            <>
                <img src={logo4} alt="Планета одежда обувь" />
            </>
            <>
                <img src={logo5} alt="Шир и Геш" />
            </>
        </Carousel>
    )
}

export default ClientsCarousel
