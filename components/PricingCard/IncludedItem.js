import React, { Component } from 'react';

class IncludedItem extends Component {
    render() {
        return (
            <div className="included-item">
                <p>{this.props.children}</p>
                <style jsx>{`
                    p {
                        color: ${this.props.textColor}
                    }

                    .included-item {
                        padding: 0px;
                        margin-bottom: 10px;
                    }
                `}</style>
            </div>
        );
    };
}

export default IncludedItem;