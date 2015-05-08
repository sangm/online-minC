import React from 'react'
import {FlatButton} from 'material-ui'

export default React.createClass({
    
    render() {
        function tokens(token) {
            if (typeof token === 'object') {
                return Object.keys(token).map(key => {
                    let label = `${key} ${token[key]}`;
                    return <li><FlatButton label={label} secondary={true} /></li>
                })
            }
            else {
                return <li><FlatButton label={token} secondary={true} /></li>
            }
            
        };
        return (
            <div className="lexer">
                <ul className="list-unstyled list-inline tokens">
                    {this.props.tokens.map(tokens)}
                </ul>
            </div>
        )
    }
})
