/**
 * Created by Raj on 4/11/2016.
 */
import React,{ Component }  from 'react';
import classNames from 'classnames/bind';
import Sidebar from 'components/Sidebar';
import styles from 'css/components/productList';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class ProductList extends Component {

    render() {
        return (
            <div>
            <div>Welcome to the Product List. </div>
            <Sidebar></Sidebar>
            </div>
        );
    }
}
//const ProductList = () => (<div>Welcome to the Product List. </div>
//            <Sidebar></Sidebar>);

export default ProductList;
