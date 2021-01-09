import React, {useState} from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";


const Form = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {register,handleSubmit,errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_3wsJTk4krRR8ykSO8Vpyq";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name:data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {

        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Письмо успешно отправлено, мы свяжемся с Вами в ближайшее время!");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (
        <div id="form" className="form">
            <div className="text-center">
                <h1>Напишите нам</h1>
                <p>Заполните форму и опишите ваш заказ. Мы свяжемся с Вами в ближайшее время.</p>
                <span className="success-message">{successMessage}</span> 
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center" >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Имя"
                                    name="name" 
                                    ref={
                                        register({
                                            required:"Введите Ваше имя",
                                            maxLength: {
                                                value: 20,
                                                message: "Максималльная длина 20 знаков"
                                            }
                                        })
                                    }/>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            <div className="text-center" >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Номер телефона"
                                    name="phone" 
                                    ref={
                                        register({
                                            required:"Введите Ваш номер телефона",
                                            maxLength: {
                                                value: 11,
                                                message: "Максималльная длина 11 знаков"
                                            }
                                        })
                                    }/>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            <div className="text-center" >
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="E-mail"
                                    name="email" 
                                    ref={
                                        register({
                                            required:"Введите Ваш email",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Неверный email"
                                            }
                                        })
                                    }/>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            <div className="text-center" >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Тема"
                                    name="subject" 
                                    ref={
                                        register({
                                            required:"Вы забыли указать тему письма",
                                            maxLength: {
                                                value: 50,
                                                message: "Максималльная длина 50 знаков"
                                            }
                                        })
                                    }/>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center" >
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Опишите Ваш заказ"
                                    name="description"
                                    ref={
                                        register({
                                            required:"Коротко укажите, что бы Вы хотели видеть в заказе?",
                                            maxLength: {
                                                value: 100,
                                                message: "Максималльная длина 100 знаков"
                                            }
                                        })
                                    }></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>
                            <button className="btn-main-offer form-btn" type="submit">Отправить письмо</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
