
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

export {
	menuRequest,
	menuLoaded,
	menuError
}; 