import React from 'react'
import {Tabs, Tab} from 'material-ui'
import Lexer from './components/LexerComp.jsx'

export default React.createClass({
    render() {
        return (
            <Tabs> 
                <Tab label="Lexical Analysis"> 
                    <div className="tab-template-container"> 
                        <Lexer />
                    </div> 
                </Tab> 
                <Tab label="Parser"> 
                    <div className="tab-template-container"> 

                    </div> 
                </Tab> 
                <Tab label="Semantic Analysis"> 
                    <div className="tab-template-container"> 

                    </div> 
                </Tab> 
                <Tab label="Code Generation"> 
                    <div className="tab-template-container"> 

                    </div> 
                </Tab> 
            </Tabs>
        )
    }
})
