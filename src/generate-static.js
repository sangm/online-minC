import React from 'react'
import Handlebars from 'handlebars'
import App from './components/AppComponent/AppComp.jsx'
import fs from 'fs'

let info = JSON.parse(fs.readFileSync(__dirname + '/information.json', 'utf-8'));
let fileData = fs.readFileSync(__dirname + '/templates/index.handlebars').toString();
let layoutTemplate = Handlebars.compile(fileData);
let renderedComp = React.renderToString(<App info={info} />);

let renderedLayout = layoutTemplate({
    contents: renderedComp
})

fs.writeFile(__dirname + '/../dist/index.html', renderedLayout, function (err) {
      if (err) return console.log(err);
        console.log('index.html generated from ReactJS');
});


