import React, {Component} from 'react';
import {connect} from "react-redux";
import './Container.css';
import {addProduct, getProducts, removeProduct} from "../store/actions/productsActions";
import Card from "../components/Card/Card";

class Container extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        console.log(this.props);
        let loading;
        if (this.props.loading === true) {
            loading = <h1>Loading...</h1>
        }
        return (
            <div className="Container">
                <div className="Products">
                    <h1>Products</h1>
                    {loading}
                    {this.props.products && Object.keys(this.props.products).map(product => (
                        <Card
                            key={this.props.products[product].name}
                            img={this.props.products[product].img}
                            name={this.props.products[product].name}
                            price={this.props.products[product].price}
                            addToCart={this.props.addProduct}
                        />
                    ))}
                </div>
                <div className='Cart'>
                    <h1>Cart</h1>
                    {Object.keys(this.props.productsCount).map(product => {
                        if (this.props.productsCount[product] > 0) {
                            return <h3>{product}: {this.props.productsCount[product]}</h3>
                        }
                    })}
                    Total: {this.props.totalPrice}
                    <p><button>Place Order</button></p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.productsReducer.products,
    loading: state.productsReducer.loading,
    productsCount: state.productsReducer.productsCount,
    totalPrice: state.productsReducer.totalPrice,
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts()),
    addProduct: (product,price) => dispatch(addProduct(product, price)),
    removeProduct: (product, price) => dispatch(removeProduct(product, price))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);