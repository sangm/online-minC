import React from 'react'
import AceEditor from 'react-ace'
import AppConstants from '../../constants/AppConstants.js'
import ActionCreator from '../../actions/ActionCreator.js'
import {FlatButton} from 'material-ui'

require('brace/mode/java')
require('brace/theme/github')

export default React.createClass({
    onChange(val) {
        if (val.length !== 0) {
            ActionCreator.fire(AppConstants.LEX, { tokens: val });
            ActionCreator.fire(AppConstants.PARSE, { tokens: val });
        }
    },

    render() {
        return (
            <AceEditor
                mode="java"
                theme="github"
                onChange={this.onChange}
                name="editor"
                height="100%"
                width="100%"
            />
        )
    }
})
