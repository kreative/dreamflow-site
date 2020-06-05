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

                    .linelabel h5 {
                        font-family: monospace;
                        font-size: 1em;
                        font-weight: normal;
                        display: inline;
                        letter-spacing: 4px;
                    }
                `}</style>
            </div>
        );
    };
}

export default FantasiaLineLabel;