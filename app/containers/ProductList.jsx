/**
 * Created by Raj on 4/11/2016.
 */
import React, { Component }  from 'react';
import classNames from 'classnames/bind';
import Sidebar from 'components/Sidebar';
import styles from 'css/components/productList';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const cx = classNames.bind(styles);
var myData=["Chair","Bed","Table"];
class ProductList extends Component {
    render() {
        return (
            <div className={cx('productList')}>
                <h1>Welcome to the Product List Page. </h1>
                <div className={cx('productList')}>
                    <p> Currently, the products are listed in the Sidebar.</p>
                    <Sidebar furniture={myData}></Sidebar>
                </div>
            </div>
        );
    }
}

export default ProductList;
