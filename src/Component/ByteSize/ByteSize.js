import React from 'react';
import './ByteSize.css';
import ResponseField from "../ResponseField/ResponseField";

class ByteSize extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urlToShorten: 'https://www.google.com/'
        };

        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.get = this.get.bind(this);
    }

    get(event){
        this.props.getUrl(this.state.urlToShorten);
        event.preventDefault(); // This is necessary because of the browser default refreshing functionality
    }

    handleUrlChange = (event) => {
        this.setState({
            urlToShorten: event.target.value
        });
    };

    render(){
        return (
            <div className="ByteSize">
                <div className="main">
                    <div className="container">
                        <h1>Enter a URL</h1>
                        <input type="text" id="input" onChange={this.handleUrlChange}/>
                        <button id="shorten" onClick={this.get} >Shorten</button>
                    </div>
                    <ResponseField shortUrl={this.props.shortUrl}/>
                </div>
            </div>
        );
    }
}

export default ByteSize;