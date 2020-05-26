import React, { Component } from "react";
import IncludedItem from './IncludedItem';
import MissingItem from './MissingItem';
import classNames from 'classnames';

class FantasiaPricingCard extends Component {
    render() {
        var pricingCardClass = classNames({
            'pricing-card': true,
            'raised': this.props.raised,
            'primary': this.props.primary
        });
        
        return (
            <div>
                <div className={pricingCardClass}>
                    <img
                        src={this.props.image}
                        alt={this.props.imageAlt}
                    />
                    <h3>{this.props.children}</h3>
                    <div className="items">

                    </div>
                </div>
                <style jsx>{`
                    img {

                    }
                    
                    .pricing-card {
                        outline: ${this.props.outline};
                    }

                    .items {
                        
                    }

                    .raised {
                        -webkit-box-shadow: 0px 7px 28px 5px rgba(166,166,166,0.7);
                        -moz-box-shadow: 0px 7px 28px 5px rgba(166,166,166,0.7);
                        box-shadow: 0px 7px 28px 5px rgba(166,166,166,0.7);
                    }

                    .primary {

                    }
                `}</style>
            </div>
        );
    };
}

export default FantasiaPricingCard;