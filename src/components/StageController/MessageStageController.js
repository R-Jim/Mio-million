import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMessagesState, nextPage, previousPage } from '../../reducers'
import Button from '../Pagnination/Button';

import './MessageStageController.css'

class MessageStageController extends Component {
    render() {
        const { nextPage, previousPage } = this.props;
        const { configState: { items, step, current } } = this.props;

        const currentItemsLength = current * step + items.slice(current * step, (current + 1) * step).length
        return (
            <div className="pagination-controller">
                <Button className="previous" disabled={((current - 1) * step) < 0} onClick={() => previousPage()} />
                <div className="total-display">
                    {currentItemsLength}/{items.length}
                </div>
                <Button className="next" disabled={((current + 1) * step) > items.length} onClick={() => nextPage()} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    configState: getMessagesState(state)
})

const mapDispatchToProps = {
    nextPage,
    previousPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageStageController)