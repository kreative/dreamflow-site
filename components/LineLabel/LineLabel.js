import React, { Component } from 'react';

class FantasiaLineLabel extends Component {
    render() {
        return (
            <div className="linelabel">
                <h5>{this.props.children}</h5>
                <style jsx>{`
                    .linelabel {
                        color: ${this.props.color};
                        text-transform: uppercase;
                    }

                    .linelabel h5 {
                        font-family: 'DM Mono', monospace;
                        font-size: 1em;
                        font-weight: bold;
                        display: inline;
                        letter-spacing: 4px;
                    }
                `}</style>
            </div>
        );
    };
}

export default FantasiaLineLabel;