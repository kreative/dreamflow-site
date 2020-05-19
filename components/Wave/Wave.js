import React, { Component } from 'react';


class FantasiaWave extends Component {
    render() {
        return (
            <div className="wave-container">
                <svg viewBox="0 0 1000 100" >
                    {this.props.children}
                </svg>
                <style jsx>{`
                    .wave-container {
                        overflow: hidden;
                        position: absolute;
                        left: 0;
                        width: 100%;
                        line-height: 0;
                        direction: ltr;
                    }

                    svg {
                        display: inline-block;
                        fill: ${this.props.color};
                    }
                `}</style>
            </div>
        );
    };
}

export default FantasiaWave;