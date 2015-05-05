import React from 'react'
import App from './components/AppComponent/AppComp.jsx'
import info from './information.json'

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

React.render(<App info={info} />, document.getElementById('contents'))
