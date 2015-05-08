import React from 'react'
import Header from '../HeaderComponent/HeaderComp.jsx'
import Editor from '../EditorComponent/EditorComp.jsx'
import Result from '../ResultComponent/ResultComp.jsx'

import {Grid, Row, Col} from 'react-bootstrap'
import {FlatButton} from 'material-ui'

export default React.createClass({
    
    render() {
        let {jobs, projects, social, email} = this.props.info
        return (
            <Grid className="site-container" fluid={true} >
                <Row>
                    <Col xs={12} 
                         sm={12} 
                         md={12}>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} 
                         sm={6}
                         md={6}
                         className="left-div">
                        <Editor />
                        <div className="navbar-fixed-bottom">
                            <ul className="list-unstyled list-inline">
                                <li>
                                    <FlatButton secondary={true}
                                                label="Upload File" />
                                </li>
                                <li>
                                    <FlatButton secondary={true}
                                                label="Submit" />
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} 
                         sm={6}
                         md={6}
                         className="right-div">
                        <Result />
                    </Col>
                </Row>
            </Grid>
        )
    }
}) 
