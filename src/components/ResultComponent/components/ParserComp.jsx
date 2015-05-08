import React from 'react'
import {FlatButton} from 'material-ui'

export default React.createClass({
    
    parseTree(ast) {
        if (ast.terminal) {
            return (
                <div>{ast.data}</div>
            )
        }
        else {
            <div>{ast.data}</div>
        }
    },

    renderParser() {
        let parser = this.props.parser;
        if (parser.err) {
            return (
                <FlatButton label={parser.err}
                            primary={true} />
            ) 
        }
        return this.parseTree(parser.ast);
    },
    
    render() {
        return (
            <div className="parser">
                {this.renderParser()}
            </div>
        )
    }
})
