import React from 'react'
import AceEditor from 'react-ace'
import AppConstants from '../../constants/AppConstants.js'

require('brace/mode/java')
require('brace/theme/github')

export default React.createClass({
    onChange(val) {
       console.log(val); 
    },
    render() {
        console.log(AppConstants)

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
