import EventEmitter from 'events'
import AppDispatcher from '../dispatcher/AppDispatcher.js'
import AppConstants from '../constants/AppConstants.js'
import request from 'request'

const API_URL = "http://localhost:3000",
      LEX = "lex",
      PARSE = "parse";

let _tokens = [],
    _parseResult = {};

function makeUrl(api, url) {
    return `${api}/${url}`
}

class minCStore extends EventEmitter {
    constructor() {
        super();

        this._dispatchToken = AppDispatcher.register(action => {
            switch(action.type) {
            case AppConstants.LEX:
                this.lexer(action.payload.tokens);
                break;
            case AppConstants.PARSE:
                this.parser(action.payload.tokens);
                break;
            default:
                console.log(`Invalid Type: ${action.type}`);
            }
        })
    }

    lexer(tokens) {
        // call minC to lex http request
        // _tokens = result;
        let url = makeUrl(API_URL, LEX);
        request.post(url, {form: {token: tokens}}, (err, http, body) => {
            _tokens = JSON.parse(body);
            this.emit(AppConstants.FINISH);
        })
    }
    
    parser(tokens) {
        let url = makeUrl(API_URL, PARSE);
        request.post(url, {form: {tokens: tokens}}, (err, http, body) => {
            _parseResult = JSON.parse(body);
            this.emit(AppConstants.FINISH);
        })
    }
    
    addChangeListener(callback) {
        this.on(AppConstants.FINISH, callback);
    }

    removeChangeListener(callback) {
        this.on(AppConstants.FINISH, callback);
    }
    
    getTokens() {
        return _tokens;
    }
    
    getParser() {
        return _parseResult;
    }
}


export default new minCStore();
