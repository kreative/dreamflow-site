import React, { Component } from 'react';

class IncludedItem extends Component {
    render() {
        return (
            <div className="included-item">
                <i className="fas fa-check"></i>
                <p>{this.props.children}</p>
                <style jsx>{`
                    p {
                        padding-left: 5px;
                    }
                    
                    .f-icon {
                        color: ${this.props.iconColor};
                        width: 10px;
                        height: 10px;
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