import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Builder from '../Builder';

export class Layout extends Component {
    static propTypes = {
        height: PropTypes.number,
    }

    renderLayout = () => {
        const { height, width } = this.props;
        return (
            <div>
                {height}, {width}
                <Builder numberOfTile={3} direction="right" />
            </div>
        )
    }

    render() {
        return this.renderLayout();
    }
}

export default Layout
