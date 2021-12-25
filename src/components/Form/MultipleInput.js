import React, { Component } from 'react'
import './MultipleInput.css'

class MultipleInput extends Component {
    state = {
        numberOfItem: 1,
    }

    getLimit = () => {
        const { limit } = this.props
        return limit
    }

    handleChange = ({ target: { name: nameWithIndex, value } }) => {
        const { onChange, value: arrayValue } = this.props
        const [name, index] = nameWithIndex.split("-", 2)
        if (arrayValue) {
            if (value) {
                arrayValue[index] = value
            } else {
                arrayValue.splice(index, 1)
            }
            onChange({ target: { name, value: arrayValue } })
        }
    }

    handeAddItem = () => {
        const { numberOfItem } = this.state;
        this.setState({
            numberOfItem: numberOfItem + 1
        })
    }

    handeRemoveItem = (name) => {
        const { numberOfItem } = this.state
        this.setState({
            numberOfItem: numberOfItem - 1
        })
        this.handleChange({ target: { name, value: null } })
    }

    renderInputAction = (index, name) => {
        if (index > 0) {
            return this.renderRemoveItemAction(index, name)
        }
        const { numberOfItem } = this.state
        const isAtLimit = numberOfItem === this.getLimit()
        return this.renderAddItemAction(index, name, isAtLimit)
    }

    renderRemoveItemAction = (index, name) => (
        <div
            key={index}
            className="action"
            onClick={() => this.handeRemoveItem(name)}>
            -
        </div>
    )

    renderAddItemAction = (index, name, isAtLimit) => (
        <div
            key={index}
            name={name}
            className={"action" + (isAtLimit ? " hidden" : " ")}
            onClick={isAtLimit ? null : this.handeAddItem}>
            +
        </div>
    )

    renderInput = () => {
        const { numberOfItem } = this.state
        const { name, placeholder } = this.props
        const inputFields = [];
        for (let i = 0; i < numberOfItem; i++) {
            const key = name + "-" + i
            inputFields.push(this.renderInputAction(i, key))
            inputFields.push(
                <input
                    key={key}
                    name={key}
                    onChange={this.handleChange}
                    placeholder={placeholder + " " + (i + 1)}
                />
            )
        }
        return inputFields;
    }

    render() {
        const { title } = this.props
        return (
            <label className="input multiple-input">
                <div className="input-container">
                    {this.renderInput()}
                </div>
                <span>{title}:</span>
            </label>
        )
    }
}

export default MultipleInput
