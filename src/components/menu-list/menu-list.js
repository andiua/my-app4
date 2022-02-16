import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequest, menuError, addToCart } from '../../actions';
import MenuListItem from '../menu-list-item';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
	componentDidMount() {
		const { RestoService, menuLoaded, menuRequest, menuError } = this.props;
		menuRequest();

		RestoService.getMenuItems()
			.then(res => menuLoaded(res))
			.catch( () => menuError());
	}

	render() {
		const { menuItems, loading, error, addToCart} = this.props;
		if (error) {
			return <Error />;
		}
		if (loading) {
			return <Spinner />;
		}
		return (
			<ul className="menu__list">
				{menuItems.map(menuItem => {
					return <MenuListItem 
									key={menuItem.id} 
									menuItem={menuItem} 
									onAddToCart={() => addToCart(menuItem.id)}/>;
				})}
			</ul>
		);
	}
}
const mapStateToProps = state => {
	return {
		menuItems: state.menu,
		loading: state.loading,
		error: state.error,
	};
};
const mapDispatchToProps = {
	menuLoaded,
	menuRequest,
	menuError,
	addToCart
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
