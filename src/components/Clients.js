import React from 'react';
import ClientsCarousel from "./ClientsCarousel";

const Clients = () => {
    return (
        <div id="clients" className="clinets">
            <h1>Наши клиенты</h1>
            <div className="container">
                <div className="clients-content">
                    <ClientsCarousel />
                </div>
            </div>
        </div>
    )
}

export default Clients
