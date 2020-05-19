import React, { Component } from 'react';
import classNames from 'classnames';

class FantasiaCard extends Component {
    render() {
        var cardClass = classNames({
            'card': true,
            'raised': this.props.raised,
        });

        return (
            <div className={cardClass}>
                {this.props.children}
                <style jsx>{`
                    .card {
                        border: ${this.props.border};
                        padding: ${this.props.padding};
                        background: ${this.props.bg};
                        border-radius: ${this.props.radius};
                    }

                    .raised {
                        -webkit-box-shadow: 0px 7px 28px 5px rgba(166,166,166,0.7);
                        -moz-box-shadow: 0px 7px 28px 5px rgba(166,166,166,0.7);
                        box-shadow: 0px 7px 28px 5px rgba(166,166,166,0.7);
                    }
                `}</style>
            </div>
        )
    }
}

export default FantasiaCard;