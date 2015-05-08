const Router = require('koa-router'),
      koaBody = require('koa-body')(),
      cors = require('koa-cors'),
      koa = require('koa'),

      minCLexer = require('./minC/minCLexer/minCLexer.js'),
      getTokens = require('./minC/minCLexer/utils.js').getTokens,
      
      minCParser = require('./minC/minCParser/dist/minCParser.js'),

      app = module.exports = koa();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:8080'
}));
app.use(Router(app))

app.post('/lex', koaBody, function *() {
    const token = this.request.body.token;
    if (!token) {
        this.status = 500;
        this.body = "token required"
    }
    else {
        const lex = minCLexer.setInput(token);
        const tokens = getTokens(lex);
        this.body = JSON.stringify(tokens);
    }
})
app.post('/parse', koaBody, function *() {
    const tokens = this.request.body.tokens;
    if (!tokens) {
        this.status = 500;
        this.body = "tokens required"
    }
    else {
        try {
            const result = minCParser.Parse(tokens);
            this.body = JSON.stringify(result);
        }
        catch(err) {
            this.body = JSON.stringify({err: err.message});
        }
    }
})

if (!module.parent) {
    app.listen(3000);
}


