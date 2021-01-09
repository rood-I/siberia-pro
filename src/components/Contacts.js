import React from 'react';

const Contacts = () => {
    return (
        <div id="contacts" className="contacts">
            <div class="container">
                <div class="row">
                    <div id="filials">
                        <div class="f-name">Новокузнецк</div>
                        <div class="f-info">
                            <div class="tit"> Контакты:</div>
                            <p>ул. Академика Павлова, д.25</p>
                            <p class="phone">
                                <a href="tel:+74957378717">+7 (495) 737-87-17 </a><br/>
                                <a href="tel:+2499"> Пресс-служба: доб. 2499</a><br/>
                            </p>
                            <div class="tit">Режим работы:</div>
                            <p class="line ">10:00 - 19:00</p>  
                        </div>           
                     </div>
                </div>
            </div>
        </div>
)
}

export default Contacts

