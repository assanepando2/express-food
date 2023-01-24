import React from 'react';
import './Menu.css';
import {useNavigate} from 'react-router-dom';

import { 
    BsCartPlus,
    BsCartPlusFill
} from "react-icons/bs";

function Menu({data}) {
    const navigate = useNavigate();

    const getCorrectTypeMenu = (type) => {
        switch (type) {
            case "dessert":
                return "Dessert";
            case "dish":
                return "Plat";
            default:
                return "Inconnu";
        }
    }

    const redirection = (type, id) => {
        switch (type) {
            case "dish":
                navigate('/dish/'+id);
                break;
            case "dessert":
                navigate('/dessert/'+id);
                break;
            default:
                break;
        }
    }

    return ( 
        <div className="menu_component">
            <div 
                className="menu_image"
                style={{cursor: 'pointer'}}
                onClick={()=>redirection(data.type, data._id)}
            >
                <span className="menu_price">{data.price}€</span>
            </div>
            <div className="menu_description">
                <span className="menu_title">{data.name}</span>
                <p className="menu__description">{data.description}</p>
                <span className="menu_type">{getCorrectTypeMenu(data.type)}</span>
                <div className="menu_order">
                    <BsCartPlusFill size="18" style={{cursor: 'pointer'}} />
                    <span>0</span>
                </div>
            </div>
        </div>
     );
}

export default Menu;