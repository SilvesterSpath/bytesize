import React from 'react';
import './App.css';
import ByteSize from '../ByteSize/ByteSize';
import Rebrandly from "../../util/Rebrandly";

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            shortUrl: []
        };

        this.getUrl = this.getUrl.bind(this);
    }

    getUrl(urlToShorten){
        Rebrandly.shortenUrl(urlToShorten).then((i) =>{
            this.setState({
                shortUrl: [i]
            })
        })
    }

  render() {
    return (
        <div className="App">
          <header>
            <img
                src="https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/bytesize_logo.svg"
                className="logo" alt='byteSize'/>
          </header>
          <ByteSize getUrl={this.getUrl} shortUrl={this.state.shortUrl}/>

        </div>
    );
  }
}

export default App;
