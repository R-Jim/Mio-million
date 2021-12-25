import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMessagesState, nextPage, previousPage, fetchMessages } from '../../reducers/stage'
import Button from '../Pagnination/Button';

import './MessageStageController.css'

class MessageStageController extends Component {
    nextPageHandler = () => {
        const { nextPage, fetchMessages } = this.props
        const { configState: { current, items, pageSize } } = this.props
        const nextIndex = current + 1
        if (items.length < nextIndex * pageSize) {
            fetchMessages({ page: nextIndex, pageSize: pageSize })
        }
        nextPage()
    }
    
    render() {
        const { previousPage } = this.props
        const { configState: { current, pageCount } } = this.props

        return (
            <div className="pagination-controller">
                <Button className="previous" disabled={current === 1} onClick={() => previousPage()} />
                <div className="total-display">
                    {current}/{pageCount}
                </div>
                <Button className="next" disabled={current >= pageCount} onClick={() => this.nextPageHandler()} />
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
    fetchMessages,
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageStageController)
