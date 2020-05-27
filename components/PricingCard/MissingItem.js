import React, { Component } from 'react';

class MissingItem extends Component {
    render() {
        return (
            <div className="missing-item">
                <p>{this.props.children}</p>
                <style jsx>{`
                    p {
                        color: #B8B8B8;
                        text-decoration: line-through;
                    }

                    .missing-item {
                        padding: 0px;
                        margin-bottom: 10px;
                    }
                `}</style>
            </div>
        );
    };
}

export default MissingItem;