import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart, incItemInCart, decItemInCart, inputItemInCart } from '../../actions';
import './cart-table.scss';

const CartTable = ({items, deleteFromCart, incItemInCart, decItemInCart, inputItemInCart}) => {
		if(items.length === 0) {
			return (
				<div className="cart__title">Ваша корзина пустая</div>
			)
		}
		const validateValue = (id, value, prevValue) => {
			if(+value === 0 || value === '') {
				value = 1;
				inputItemInCart(id, value)
			} else if(isNaN(value)){
				inputItemInCart(id, prevValue)
			} else {
				inputItemInCart(id, +value)
			}
		}
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
							{
								items.map(item => {
									const {title, url, id, number, total} = item;
									return (
										<div key={id} className="cart__item">
											<img src={url} className="cart__item-img" alt={title}></img>
											<div className="cart__item-title">{title}</div>
											<div className="cart__item-quantity">
												<button onClick={() => decItemInCart(id)} className="cart__item-quantity-btn">-</button>
												<input onChange={(e) => validateValue(id, e.target.value, number)} type="tel" value={number}/>
												<button onClick={() => incItemInCart(id)} className="cart__item-quantity-btn">+</button>
											</div>

											<div className="cart__item-price">{total}$</div>
											<div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
										</div>
									)
								})
							}
                
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
	return {
		items
	}
};

const mapDispatchToProps = {
	deleteFromCart,
	incItemInCart,
	decItemInCart,
	inputItemInCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);