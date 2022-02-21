
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
const incItemInCart = (id) => {
	return {
		type: 'ITEM_INCREASE_IN_CART',
		payload: id
	}
}
const decItemInCart = (id) => {
	return {
		type: 'ITEM_DECREASE_IN_CART',
		payload: id
	}
}

const inputItemInCart = (id, value) => {
	const item = {};
	item.id = id;
	item.value = value
	return {
		type: 'ITEM_INPUT_IN_CART',
		payload: item
	}
}

export {
	menuRequest,
	menuLoaded,
	menuError,
	addToCart,
	deleteFromCart,
	incItemInCart,
	decItemInCart,
	inputItemInCart
}; 