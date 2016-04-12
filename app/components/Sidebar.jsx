/**
 * Created by Raj on 4/11/2016.
 */
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/sidebar';

const cx = classNames.bind(styles);

export default class Sidebar extends Component {


    render() {
        return (
            <aside className={cx('sidebar')}>
                <h1>Hello , Im a Sidebar</h1>
                <List items={this.props.furniture}/>
            </aside>
        );
    }
}

class List extends Component {

    render () {
        return (
            <ul>{
                this.props.items.map(function (item) {
                    return <li key={item}>{item}</li>
                })
            }</ul>
        )
    }
}