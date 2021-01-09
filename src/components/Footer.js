import React from "react";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>г.Новокузнецк, ул. Вокзальная 10к3</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:+79069214706">+7 906 921-47-06</a>
                        </div>
                        <div className="d-flex">
                            {/* <p>pro.siberia@yandex.ru</p> */}
                            <a href="mailto:pro.siberia@yandex.ru">pro.siberia@yandex.ru</a>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div class="d-flex justify-content-center">
                            <SocialIcon className="mx-3" url="https://api.whatsapp.com/send/?phone=79069214706&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B2%D0%B0%D0%BC+%D1%81+%D1%81%D0%B0%D0%B9%D1%82%D0%B0." network="whatsapp" />
                            <SocialIcon className="mx-3" url="https://www.instagram.com/siberia.pro/" network="instagram" bgColor="#D62976"/>
                            <SocialIcon className="mx-3" url="https://vk.com/siberiapro16" network="vk"/>
                        </div>
                        <p class="pt-3 text-center">
                        ООО "Сибериа Про" &copy;{new Date().getFullYear()}&nbsp;| Все права защищены.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
