import React from 'react'
import AceEditor from 'react-ace'

require('brace/mode/java')
require('brace/theme/github')

export default React.createClass({
    onChange(val) {
       console.log(val); 
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
