
const menuLoaded = (newMenu) => {
	return {
		type: 'MENU_LOADED',
		payload: newMenu
	}
}
const menuRequest = () => {
	return {
		type: 'MENU_REQUEST',
	}
}
const menuError = () => {
	return {
		type: 'MENU_ERROR',
	}
}
const addToCart = (id) => {
	return {
		type: 'ITEM_ADD_TO_CART',
		payload: id
	}
}
const deleteFromCart = (id) => {
	return {
		type: 'ITEM_REMOVE_FROM_CART',
		payload: id
	}
}

export {
	menuRequest,
	menuLoaded,
	menuError,
	addToCart,
	deleteFromCart
}; 