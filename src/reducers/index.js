const initialState = {
	menu: [],
	loading: true,
	error: false,
	total: 0,
	items: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'MENU_LOADED': {
			return {
				...state,
				menu: action.payload,
				loading: false,
			};
		}

		case 'MENU_REQUEST': {
			return {
				...state,
				loading: true,
				error: false
			};
		}

		case 'MENU_ERROR': {
			return {
				...state,
				loading: false,
				error: true
			};
		}

		case 'ITEM_ADD_TO_CART': {
			const id = action.payload;
			const item = state.menu.find( item => item.id === id);
			if(state.items.some(item => item.id === id)) {
				item.number += 1;
				item.total = item.price * item.number; 
				return {
					...state,
					total: state.total + item.price
				}
			} else {
				item.number = 1;			
				item.total = item.price * item.number;
				return {
					...state,
					total: state.total + item.price,
					items: [
						...state.items,
						item
					],
				};
			}
		}

		case 'ITEM_REMOVE_FROM_CART': {
			const idx = action.payload;
			const itemIndex = state.items.findIndex(item => item.id === idx);
			return {
				...state,
				total: state.total - state.items[itemIndex].total,
				items: [
					...state.items.slice(0, itemIndex), 
					...state.items.slice(itemIndex + 1)
				],
			};
		}

		case 'ITEM_INCREASE_IN_CART': {
			const id = action.payload;
			const item = state.items.find( item => item.id === id);
			item.number += 1;
			item.total = item.number * item.price;
			let newTotal;
			if (state.items.length > 1) {
				newTotal = state.items.reduce((preItem, curItem) => {
					return preItem.total + curItem.total
				})
			} else {
				newTotal = item.total;
			}
			return {
				...state,
				total: newTotal,
				items: [
					...state.items,
				],
			};
		}
		case 'ITEM_DECREASE_IN_CART': {
			const id = action.payload;
			const item = state.items.find( item => item.id === id);
			item.number === 1 ? item.number = 1 : item.number -= 1;
			item.total = item.number * item.price;
			let newTotal;
			if (state.items.length > 1) {
				newTotal = state.items.reduce((preItem, curItem) => {
					return preItem.total + curItem.total
				})
			} else {
				newTotal = item.total;
			}
			return {
				...state,
				total: newTotal,
				items: [
					...state.items
				],
			};
		}

		case 'ITEM_INPUT_IN_CART': {
			console.log(action.payload);
			const id = action.payload.id;
			const value = +action.payload.value;
			const item = state.items.find( item => item.id === id);
			item.number = value;
			item.total = value * item.price
			let newTotal;
			if (state.items.length > 1) {
				newTotal = state.items.reduce((preItem, curItem) => {
					return preItem.total + curItem.total
				})
			} else {
				newTotal = item.total;
			}
			return {
				...state,
				total: newTotal,
				items: [
					...state.items,
				],
			};
		}

		default:
			return state;
	}
}

export default reducer;