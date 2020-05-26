import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class MissingItem extends Component {
    render() {
        return (
            <div className="missing-item">
                <FontAwesomeIcon className="f-icon" icon={faTimes} />
                <p>{this.props.children}</p>
                <style jsx>{`
                    p {
                        padding-left: 5px;
                    }

                    .f-icon {
                        color: ${this.props.color};
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