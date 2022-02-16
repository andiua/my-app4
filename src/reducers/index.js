const initialState = {
	menu: [],
	loading: true,
	error: false,
	total: 0,
	items: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'MENU_LOADED': 
			return {
				...state,
				menu: action.payload,
				loading: false,
			};

		case 'MENU_REQUEST': 
			return {
				...state,
				loading: true,
				error: false
			};

		case 'MENU_ERROR': 
			return {
				...state,
				loading: false,
				error: true
			};

		case 'ITEM_ADD_TO_CART': 
			const id = action.payload;
			const item = state.menu.find( item => item.id === id);
			return {
				...state,
				total: state.total + item.price,
				items: [
					...state.items,
					item
				],
			};

		case 'ITEM_REMOVE_FROM_CART': 
			const idx = action.payload;
			const itemIndex = state.items.findIndex(item => item.id === idx);
			const price = state.items[itemIndex].price;
			return {
				...state,
				total: state.total - price,
				items: [
					...state.items.slice(0, itemIndex), 
					...state.items.slice(itemIndex + 1)
				],
			};
			
		default:
			return state;
	}
}

export default reducer;