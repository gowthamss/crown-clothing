import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsQuantity } from "../../redux/cart/cart.selector";

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemsCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsQuantity,
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
