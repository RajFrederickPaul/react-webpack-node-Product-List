/**
 * Created by Raj on 4/11/2016.
 */
import React, { Component, PropTypes } from 'react';
import styles from 'css/components/sidebar';

const cx = classNames.bind(styles);

export default class Sidebar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <aside className={cx('sidebar')}>
                <h1>Hello , Im a Sidebar</h1>
            </aside>
        );
    }
}