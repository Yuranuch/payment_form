import React, {Component} from 'react';
import './App.scss';
import { Formik } from "formik";
import * as Yup from "yup"
import PhoneInput from "react-phone-input-2";
import icon_1 from "./assets/icons/small_logo_1.png";
import icon_2 from "./assets/icons/small_logo_2.png";
import icon_3 from "./assets/icons/small_logo_3.png";
import icon_4 from "./assets/icons/small_logo_4.png";
import group from "./assets/images/GroupCard.png";
import Error from "./components/Error"

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
        .required("Must enter a number"),
    cvc: Yup.string()
        .max(3, "CVV/CVC: Должен стостоять из 3 символов")
        .min(3, "CVV/CVC: Должен стостоять из 3 символов")
        .required("Введите номер"),
    cardDate: Yup.string()
        .max(4, "Срок действия месяц XX / год XX")
        .min(4, "Срок действия месяц XX / год XX")
        .required("Ввведите срок действия вашей карты"),
})

class App extends Component {
    state = {
        hintShowing: false,
        cardHintShowing: false,
    }
    onShowHint = () => {
        if (this.state.hintShowing) {
            this.setState({
                hintShowing: false
            })
        } else {
            this.setState({
                hintShowing: true,
                cardHintShowing: false
            })
        }
    }
    showCardHint = () => {
        if (this.state.cardHintShowing) {
            this.setState({
                cardHintShowing: false
            })
        } else {
            this.setState({
                cardHintShowing: true,
                hintShowing: false

            })
        }
    }

    render() {
        return (
            <Formik initialValues={{email: "", name: "", card: "",  phone: "", cvc: "", cardDate: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting}) =>{
                        debugger
                        setSubmitting(true);

                        setTimeout(()=> {
                            alert(JSON.stringify(values, null, 2));

                            setSubmitting(false)
                        },1000)
                    }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,

                  }) => (
                    <form className="payForm" onSubmit={handleSubmit}>
                        {/*<div className="payForm_title">*/}
                        {/*    <span className="payForm_title_totalPay">К оплате: <span>270 BYN</span></span>*/}
                        {/*    <span className="payForm_title_info">Годовая подписка на сервис</span>*/}
                        {/*</div>*/}

                        <div className="userData_wrap">
                            <div className="inputData_section">
                                <span>Ваш email</span>
                                <input
                                    placeholder="mail@mail.com"
                                    type="email"
                                    id="email"
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    className={touched.email && errors.email ? "has-error" : null}
                                />
                                <Error touched={touched.email} message={errors.email} />
                            </div>
                            {/*<div className="inputData_section">*/}
                            {/*    <span>Номер телефона</span>*/}
                            {/*    <PhoneInput*/}
                            {/*        placeholder="+375 (XX) XXX XX XX"*/}
                            {/*        inputExtraProps={{name: 'phone', required: true, autoFocus: false}}*/}
                            {/*        // type="tel"*/}
                            {/*        // id="phone"*/}
                            {/*        // name="phone"*/}
                            {/*        // onBlur={handleBlur}*/}
                            {/*        // onChange={handleChange}*/}
                            {/*        // value={values.phone}*/}
                            {/*        // className={touched.phone && errors.phone ? "has-error" : null}*/}
                            {/*    />*/}

                            {/*</div>*/}
                        </div>
                        <div className="cardData">
                            {/*<div className="cardData_list">*/}
                            {/*    <a href=""><img src={icon_1} alt=""/></a>*/}
                            {/*    <a href=""><img src={icon_2} alt=""/></a>*/}
                            {/*    <a href=""><img src={icon_3} alt=""/></a>*/}
                            {/*    <a href=""><img src={icon_4} alt=""/></a>*/}
                            {/*</div>*/}
                            {/*<div className="inputData_section smallBottomMargin">*/}
                            {/*    <span>Номер Карты</span>*/}
                            {/*    <input*/}
                            {/*        placeholder="XXXX XXXX XXXX XXXX"*/}
                            {/*        id="card"*/}
                            {/*        onInput={this.handleChange}*/}
                            {/*        type="number"*/}
                            {/*        onBlur={handleBlur}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        value={values.card}*/}
                            {/*        name="card"*/}
                            {/*        className={touched.card && errors.card ? "has-error" : null}*/}
                            {/*    />*/}
                            {/*    <Error touched={touched.card } message={errors.card } />*/}
                            {/*</div>*/}
                            {/*<div className="inputData_section smallBottomMargin">*/}
                            {/*    <span>Имя владельца карты</span>*/}
                            {/*    <input*/}
                            {/*        placeholder="YOUR NAME"*/}
                            {/*        id="name"*/}
                            {/*        type="text"*/}
                            {/*        onBlur={handleBlur}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        value={values.name}*/}
                            {/*        name="name"*/}
                            {/*        className={touched.name && errors.name ? "has-error" : null}*/}
                            {/*    />*/}
                            {/*    <Error touched={touched.name} message={errors.name} />*/}
                            {/*</div>*/}
                            {/*<div className="cardData_Inline">*/}
                            {/*    <div className="inputData_section shotWidth">*/}
                            {/*        <span>Срок действия</span>*/}
                            {/*        <input*/}
                            {/*               placeholder="MM / YY"*/}
                            {/*               id="cardDate"*/}
                            {/*               onInput={this.handleChange}*/}
                            {/*               type="number"*/}
                            {/*               onBlur={handleBlur}*/}
                            {/*               onChange={handleChange}*/}
                            {/*               value={values.cardDate}*/}
                            {/*               name="cardDate"*/}
                            {/*               className={touched.cardDate && errors.cardDate ? "has-error" : null}*/}
                            {/*        />*/}
                            {/*        <Error touched={touched.cardDate} message={errors.cardDate} />*/}
                            {/*        <div onClick={this.onShowHint}  tabindex="0" onBlur={this.onShowHint}*/}
                            {/*             className={this.state.hintShowing ? "inputData_hint active" : "inputData_hint"}>*/}
                            {/*            <span>?</span>*/}
                            {/*            <div*/}
                            {/*                className={this.state.hintShowing ? "inputData_hint_info showData" : "inputData_hint_info"}>*/}
                            {/*<span>Срок действия вашей карты написан на лицевой стороне карты.*/}
                            {/*Запишите срок дейсвия в формате Месяц / 2 последние цифры года.</span>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="inputData_section shotWidth">*/}
                            {/*        <span>CVV/CVC</span>*/}
                            {/*        <input*/}
                            {/*            placeholder="XXX"*/}
                            {/*            id="cvc"*/}
                            {/*            type="number"*/}
                            {/*            onBlur={handleBlur}*/}
                            {/*            onChange={handleChange}*/}
                            {/*            value={values.cvc}*/}
                            {/*            name="cvc"*/}
                            {/*            className={touched.cvc && errors.cvc ? "has-error" : null}*/}
                            {/*        />*/}
                            {/*        <Error touched={touched.cvc} message={errors.cvc} />*/}

                            {/*        <div onClick={this.showCardHint} tabindex="0" onBlur={this.showCardHint}*/}
                            {/*             className={this.state.cardHintShowing ? "inputData_hint active" : "inputData_hint"}>*/}
                            {/*            <span>?</span>*/}
                            {/*            <div*/}
                            {/*                className={this.state.cardHintShowing ? 'inputData_hint_info elsePosition' : 'inputData_hint_info'}>*/}
                            {/*                <span>CVV/CVC – код это последние 3 цифры на оборотной стороне карты</span>*/}
                            {/*                <img src={group} alt=""/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
            {/*                <div className="agreement">*/}
            {/*<span>Нажимая кнопку "Оплатить",*/}
            {/*    Вы соглашаетесь на обработку данных в соответствии с <a href=""> Пользовательским соглашением</a></span>*/}
            {/*                </div>*/}
                            {/*<button type="submit" className="submitButton" disabled={isSubmitting}>Оплатить 270 byn</button>*/}
                            {/*<div className="transactionSecurity">*/}
                            {/*    <span>Безопасность работы подтверждена <a href="">сертификатом PCI DSS</a></span>*/}
                            {/*</div>*/}
                        </div>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </form>
                )}

            </Formik>
        );
    }
}

export default App;
