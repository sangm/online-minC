import React from 'react'
import Lexer from './components/LexerComp.jsx'
import Parser from './components/ParserComp.jsx'
import minC from '../../stores/minCStore.js'
import request from 'request'
import {Tabs, Tab} from 'material-ui'

function getState() {
    return {
        tokens: minC.getTokens(),
        parser: minC.getParser()
    }
}

export default React.createClass({
    getInitialState() {
        return getState();
    },

    componentDidMount() {
        minC.addChangeListener(this.fetchTokens);
    },
    
    componentWillUnmount() {
        minC.removeChangeListener(this.fetchTokens);
    },
    
    fetchTokens() {
        this.setState(getState());
    },

    render() {
        return (
            <Tabs> 
                <Tab label="Lexical Analysis"> 
                    <div className="tab-template-container"> 
                        <Lexer tokens={this.state.tokens} />
                    </div> 
                </Tab> 
                <Tab label="Parser"> 
                    <div className="tab-template-container"> 
                        <Parser parser={this.state.parser} />
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
