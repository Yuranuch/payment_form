import React, {Component} from 'react';
import icon_1 from "../../assets/icons/small_logo_1.png";
import icon_2 from "../../assets/icons/small_logo_2.png";
import icon_3 from "../../assets/icons/small_logo_3.png";
import icon_4 from "../../assets/icons/small_logo_4.png";

class CardData extends Component {

    state = {
        hintShowing: false,
    }
    onShowHint = () => {
        if (this.state.hintShowing === true) {
            this.setState({
                hintShowing: false
            })
        } else {
            this.setState({
                hintShowing: true
            })
        }

    }

    render() {
        return (
            <div className="cardData">
                <div className="cardData_list">
                    <a href=""><img src={icon_1} alt=""/></a>
                    <a href=""><img src={icon_2} alt=""/></a>
                    <a href=""><img src={icon_3} alt=""/></a>
                    <a href=""><img src={icon_4} alt=""/></a>
                </div>
                <div className="inputData_section smallBottomMargin">
                    <span>Номер Карты</span>
                    <input placeholder="XXXX XXXX XXXX XXXX" type="text" name=""/>
                </div>
                <div className="inputData_section smallBottomMargin">
                    <span>Имя владельца карты</span>
                    <input placeholder="YOUR NAME" type="text" name=""/>
                </div>
                <div className="cardData_Inline">
                    <div className="inputData_section shotWidth">
                        <span>Срок действия</span>
                        <input placeholder="MM / YY" type="text" name=""/>
                        <div onClick={this.onShowHint} className="inputData_hint">
                            {this.state.hintShowing && <div className="inputData_hint_info">
                            <span>Срок действия вашей карты написанна лицевой стороне карты.
                            Запишите срок дейсвия в формате Месяц / 2 последние цифры года.</span>
                            </div>}
                        </div>
                    </div>
                    <div className="inputData_section shotWidth">
                        <span>CVV/CVC</span>
                        <input placeholder="XXX" type="text" name=""/>
                        <div className="inputData_hint validity">

                        </div>
                    </div>
                </div>
                <div className="agreement">
            <span>Нажимая кнопку "Оплатить",
                Вы соглашаетесь на обработку данных в соответствии с <a href=""> Пользовательским соглашением</a></span>
                </div>
                <button className="submitButton">Оплатить 270 byn</button>
                <div className="transactionSecurity">
                    <span>Безопасность работы подтверждена <a href="">сертификатом PCI DSS</a></span>
                </div>
            </div>
        );
    }
}

export default CardData;