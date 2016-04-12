/**
 * Created by Raj on 4/11/2016.
 */
import React from 'react';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import SideBar from 'components/Sidebar';
import styles from 'css/components/productList';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const ProductList = () => <div>Welcome to the Product List. </div>;

export default ProductList;
