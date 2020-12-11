import React from 'react';
import './ResponseField.css';

class ResponseField extends React.Component {

    render(){
        return (
            <div className="ResponseField">
                {
                    this.props.shortUrl.map((i) => {
                        return <p key={i.id}>{i.shortUrl} </p>;
                    })
                }
            </div>
        );
    }
}

export default ResponseField;