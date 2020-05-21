import React, { Component } from 'react';
import classNames from 'classnames';

class FantasiaIconBox extends Component {
    render() {
        var iconBoxClass = classNames({
            'iconbox': true,
            'right-aligned': this.props.align === "right",
            'left-aligned': this.props.align === "left",
            'center-aligned': this.props.align === "center"
        });

        return (
            <div className={iconBoxClass}>
                <div className="icon">{this.props.children}</div>
                <div className="content">
                    <h4>{this.props.header}</h4>
                    <p>{this.props.text}</p>
                </div>
                <style jsx>{`
                    .iconbox {
                        width: 100%;
                    }

                    .content {
                        color: ${this.props.textColor};
                    }

                    .content h4 {
                        font-weight: normal;
                        font-family: 'Bifocals', serif;
                    }

                    .left-aligned {
                        text-align: left;
                    }

                    .right-aligned {
                        text-align: right;
                    }

                    .center-aligned {
                        text-align: center;
                    }

                    @media screen and (max-width: 600px) {
                        .icon {

                        }

                        .content {

                        }
                    }
                `}</style>
            </div>
        )
    };
}

export default FantasiaIconBox;