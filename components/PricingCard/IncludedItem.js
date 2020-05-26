import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class IncludedItem extends Component {
    render() {
        return (
            <div className="included-item">
                <FontAwesomeIcon className="f-icon" icon={faCheck} />
                <p>{this.props.children}</p>
                <style jsx>{`
                    p {
                        padding-left: 5px;
                    }
                    
                    .f-icon {
                        color: ${this.props.color};
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