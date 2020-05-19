import React, { Component } from 'react';

class FantasiaIconBox extends Component {
    render() {
        return (
            <div className="iconbox">
                <div className="icon">
                    <img src={this.props.icon}></img>
                </div>
                <div className="content">
                    <h4>{this.props.header}</h4>
                    <p>{this.props.text}</p>
                </div>
                <style jsx>{`
                    .iconbox {
                        width: 100%;
                    }

                    .icon {

                    }

                    .content {

                    }

                    @media screen and (max-width: 600px) {
                        .icon {

                        }

                        .content {

                        }
                    }
                `}</style>
            </div>
        )
    };
}

export default FantasiaIconBox;