import { connect } from 'react-redux'
import { LAYOUTS } from '../../configs/configs'
import { getCurrentPageMessages } from '../../reducers/stage'
import LayoutBuilder from './LayoutBuilder'

class MessageLayoutBuilder extends LayoutBuilder {
    getLayouts = () => {
        return LAYOUTS
    }

    mapSection = (key, index) => {
        const { mapping, messages } = this.props
        let section = mapping[key]
        const item = messages[index]
        if (section && item) {
            section = { ...section, props: { ...item } }
        } else {
            section = this.getDefaultSection(key)
        }
        return { ...section, key: index, props: { ...section.props, index } }
    }
}

function mapStateToProps(state) {
    return {
        messages: getCurrentPageMessages(state)
    }
}

export default connect(mapStateToProps, null)(MessageLayoutBuilder)
