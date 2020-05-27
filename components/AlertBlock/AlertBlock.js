import React, { Component } from 'react';
import LineLabel from '../LineLabel/LineLabel';

class FantasiaAlertBlock extends Component {
    render() {
        return (
            <div className="alert-block">
                <LineLabel color={this.props.labelColor}>{this.props.label}</LineLabel>
                <h3>{this.props.header}</h3>
                <p>{this.props.text}</p>
                <style jsx>{`
                    h3 {
                        color: ${this.props.headerColor};
                        font-size: 2em;
                        font-weight: normal;
                    }

                    p {
                        color: ${this.props.textColor}
                    }
                    
                    .alert-block {
                        padding: 50px;
                        width: 100%;
                        border-radius: 6px;
                        background-color: ${this.props.bg};
                        border-left: ${this.props.border};
                        text-align: ${this.props.align};
                    }
                `}</style>
            </div>
        );
    };
}

export default FantasiaAlertBlock;