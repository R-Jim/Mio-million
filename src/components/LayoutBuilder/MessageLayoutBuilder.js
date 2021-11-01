import { connect } from 'react-redux';
import { LAYOUTS } from '../../configs/configs';
import { getCurrentPageMessages } from '../../reducers'
import LayoutBuilder from './LayoutBuilder'

export class MessageLayoutBuilder extends LayoutBuilder {
    getLayouts = () => {
        return LAYOUTS
    }

    mapSection = (key, index) => {
        const { mapping, messages } = this.props;
        let section = mapping[key];
        if (section) {
            const { message, name } = messages[index] ?? {};
            section = { ...section, props: { message, name } };
        } else {
            section = this.getDefaultSection(key);
        }
        console.log(section)
        return { ...section, key: index };
    }
}

function mapStateToProps(state) {
    return {
        state,
        messages: getCurrentPageMessages(state)
    }
}

export default connect(mapStateToProps, null)(MessageLayoutBuilder)
