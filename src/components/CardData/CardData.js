import React from 'react';
import icon_1 from "../../assets/icons/small_logo_1.png";
import icon_2 from "../../assets/icons/small_logo_2.png";
import icon_3 from "../../assets/icons/small_logo_3.png";
import icon_4 from "../../assets/icons/small_logo_4.png";

function CardData() {
    return (
        <div className="cardData">
            <div className="cardData_list">
                <a href=""><img src={icon_1} alt="" /></a>
                <a href=""><img src={icon_2} alt="" /></a>
                <a href=""><img src={icon_3} alt="" /></a>
                <a href=""><img src={icon_4} alt="" /></a>
            </div>
            <div className="inputData_section smallBottomMargin">
                <span>Номер Карты</span>
                <input type="text" name=""/>
            </div>
            <div className="inputData_section smallBottomMargin">
                <span>Имя владельца карты</span>
                <input type="text" name=""/>
            </div>
            <div className="cardData_Inline">
                <div className="inputData_section shotWidth">
                    <span>Срок действия</span>
                    <input type="text" name=""/>
                </div>
                <div className="inputData_section shotWidth">
                    <span>CVV/CVC</span>
                    <input type="text" name=""/>
                </div>
            </div>
        </div>
    );
}

export default CardData;