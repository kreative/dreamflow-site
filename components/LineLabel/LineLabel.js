import React, { Component } from 'react';

class FantasiaLineLabel extends Component {
    render() {
        return (
            <div className="linelabel">
                <h5>{this.props.children}</h5>
                <style jsx>{`
                    .linelabel {
                        color: ${this.props.color};
                    }
                    // .linelabel h5::before {
                    //     content: "";
                    //     flex: 0.1;
                    //     border-bottom: 1px solid ${this.props.color};
                    //     margin: auto;
                    //     margin-right: 5px;
                    // }
                    // .linelabel h5::after {
                    //     content: "";
                    //     flex: 1 1;
                    //     margin: auto;
                    // }
                    .linelabel h5 {
                        font-family: monospace;
                        font-size: 1em;
                        font-weight: normal;
                    }
                `}</style>
            </div>
        );
    };
}

export default FantasiaLineLabel;