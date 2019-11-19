import React, { Component } from "react"
import './App.scss'
import { Formik, Field } from "formik"
import * as Yup from "yup"
import icon_1 from "./assets/icons/small_logo_1.png"
import icon_2 from "./assets/icons/small_logo_2.png"
import icon_3 from "./assets/icons/small_logo_3.png"
import icon_4 from "./assets/icons/small_logo_4.png"
import verified_by_Visa from "./assets/icons/verified_by_Visa.png"
import xmiraccept from "./assets/icons/xmiraccept.png"
import pci_logo from "./assets/icons/pci_logo.png"
import MasterCardSecureCode from "./assets/icons/MasterCardSecure.png"

import group from "./assets/images/GroupCard.png"
import { InputField, PhoneField, ExpireField } from "./fields"

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Введите действительный адрес электронной почты")
        .required("Введите свой email"),
    name: Yup.string()
        .max(25, "Имя должно быть не длиннее 25 символов")
        .min(2, "Имя должно быть длиннее 2 символов")
        .required("Имя должно быть написано латиницей без знаков препинания"),
    card: Yup.string()
        .max(19, "Номер карты должен состоять из 16-19 цифр")
        .min(16, "Номер карты должен состоять из 16-19 цифр")
        .required("Введите номер вашей карты"),
    phone: Yup.string()
        .required("Введите номер телефона"),
    cvc: Yup.string()
        .max(3, "CVV/CVC: Должен стостоять из 3 символов")
        .min(3, "CVV/CVC: Должен стостоять из 3 символов")
        .required("Введите номер"),
    cardDate: Yup.string()
        .required("Ввведите срок действия вашей карты"),
})

class App extends Component {

    initialValues = {
        email: "",
        name: "",
        card: "",
        phone: "",
        cvc: "",
        cardDate: "",
    }

    handleSubmit = submitValues => {
      alert(JSON.stringify(submitValues))
    }

    render() {
        return (
            <Formik
                initialValues={this.initialValues}
                validationSchema={validationSchema}
                isInitialValid={false}
                onSubmit={this.handleSubmit}
            >
                {({ handleSubmit, isSubmitting, isValid }) => (
                    <div>
                    <form className="payForm" onSubmit={handleSubmit}>
                        <div className="title">
                            <span className="title__totalPay">К оплате: <span>270 BYN</span></span>
                            <span className="title__info">Годовая подписка на сервис</span>
                        </div>
                        <div className="userData">
                            <Field
                                name="email"
                                type="email"
                                title="Ваш email"
                                placeholder="mail@mail.com"
                                component={InputField}
                            />
                            <Field
                                name="phone"
                                type="tel"
                                title="Номер телефона"
                                placeholder="+375 (XX) XXX XX XX"
                                component={PhoneField}
                            />
                        </div>
                        <div className="cardData">
                            <div className="cardData_list">
                                <a href="#someLink"><img src={icon_1} alt=""/></a>
                                <a href="#someLink"><img src={icon_2} alt=""/></a>
                                <a href="#someLink"><img src={icon_3} alt=""/></a>
                                <a href="#someLink"><img src={icon_4} alt=""/></a>
                            </div>
                            <Field
                                name="card"
                                type="number"
                                title="Номер Карты"
                                placeholder="XXXX XXXX XXXX XXXX"
                                className="inputSection_smallBottomMargin"
                                component={InputField}
                            />
                            <Field
                                name="name"
                                title="Имя владельца карты"
                                placeholder="YOUR NAME"
                                className="inputSection_smallBottomMargin"
                                component={InputField}
                            />
                            <div className="cardData__lnLineSectionWrap">
                                <Field
                                    name="cardDate"
                                    title="Срок действия"
                                    placeholder="MM / YY"
                                    className="inputSection_shotWidth"
                                    component={ExpireField}
                                    helper='Срок действия вашей карты написан на лицевой стороне карты. Запишите срок дейсвия в формате Месяц / 2 последние цифры года.'
                                />
                                <Field
                                    name="cvc"
                                    type="number"
                                    title="CVV/CVC"
                                    placeholder="XXX"
                                    className="inputSection_shotWidth"
                                    component={InputField}
                                    helper='CVV/CVC – код это последние 3 цифры на оборотной стороне карты'
                                    imgSrc={group}
                                />
                            </div>
                            <div className="agreement">
                                <span>
                                  Нажимая кнопку "Оплатить",
                                  Вы соглашаетесь на обработку данных в соответствии с <a href="#someLink">Пользовательским соглашением</a>
                                </span>
                            </div>
                            <button
                              type="submit"
                              className="submitButton"
                              disabled={!isValid || isSubmitting}
                            >
                                Оплатить 270 byn
                            </button>
                            <div className="transactionSecurity">
                                <span>
                                  Безопасность работы подтверждена <a href="#someLink">сертификатом PCI DSS</a>
                                </span>
                            </div>
                        </div>

                    </form>
                        <div className="footer">
                            <a href="#someLink">
                                <img src={ verified_by_Visa }/>
                            </a>
                            <a href="#someLink">
                                <img src={ MasterCardSecureCode }/>
                            </a>
                            <a href="#someLink">
                                <img src={ xmiraccept}/>
                            </a>
                            <a href="#someLink">
                                <img src={ pci_logo}/>
                            </a>
                        </div>
                    </div>

                )}
            </Formik>
        )
    }
}

export default App
