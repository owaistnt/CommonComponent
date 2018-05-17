import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection } from "./commons/cards";
import { ButtonColored } from "./commons/buttons";
import { TextStyle } from "./commons";
import PropTypes from "prop-types";

import {
  Vertical,
  Horizontal,
  CenterVertical,
  HorizontalReverse,
  Right,
  RightVertical
} from "./commons/containers";

class PlanCard extends Component {
  static defaultProps = {
    name: "Gold"
  };

  static propTypes = {
    name: PropTypes.string,
    currency: PropTypes.string,
    allowDiscount: PropTypes.bool,
    discount_text: PropTypes.string,
    price: PropTypes.string,
    saleprice: PropTypes.string,
    duration: PropTypes.number,
    pricepermoth: PropTypes.string,
    benefits:PropTypes.array,
    bestValue: PropTypes.bool,
    topseller: PropTypes.bool,
    your_plan: PropTypes.bool,
  };

  getDurationText(props){
    if(props.duration>1){
      return `${this.props.duration} month`;
    }else{
      return `${this.props.duration} months`;
    }
  }

  renderBenefits(props){
    let {benefits}=props;
    return benefits.map((item, index)=>{
      return(
        <Text style={{ ...TextStyle.Text_14.secondary }} key={index}>
        {item.value}
      </Text>
      );
    });
  }

  renderBadge(props){
    console.log(`Best Seller ${props.topseller}`)
    console.log(`Best Value ${props.bestValue}`)
    console.log(`Your Plan ${props.your_plan}`)
      if(props.topseller===true){
        return (<Text style={{ ...TextStyle.Text_10.app_primary }}>TOP SELLER</Text>);
      }

      if(props.bestValue===true){
        return (<Text style={{ ...TextStyle.Text_10.app_primary }}>BEST VALUE</Text>);
      }

      if(props.your_plan===true){
        return (<Text style={{ ...TextStyle.Text_10.app_primary }}>YOUR PLAN</Text>);
      }


  }

  render() {
    return (
      <Card>
        <CardSection>
          <Vertical>
            <Text style={{ ...TextStyle.Text_17.primary }}>
              {this.props.name}
            </Text>
            <Text style={{ ...TextStyle.Text_12.medium }}>
              {this.getDurationText(this.props)}
            </Text>
            {this.renderBadge(this.props)}
          </Vertical>
          <RightVertical>
            <HorizontalReverse>
              <Text>{`${this.props.currency}${this.props.saleprice}`}</Text>
              <Text
                style={{
                  ...TextStyle.Text_12.secondary,
                  textDecorationLine: "line-through"
                }}
              >
                {`${this.props.currency}${this.props.price}`}
              </Text>
              <Text style={{ ...TextStyle.Text_10.color_offer }}>
                {this.props.discount_text}
              </Text>
            </HorizontalReverse>
            <Text style={{ ...TextStyle.Text_12.secondary }}>
              {`Per month ${this.props.currency}${this.props.pricepermoth}`}
            </Text>
          </RightVertical>
        </CardSection>
        <CardSection>
          <Vertical>
            {this.renderBenefits(this.props)}
            <CenterVertical>
              <ButtonColored>Continue</ButtonColored>
            </CenterVertical>
          </Vertical>
        </CardSection>
      </Card>
    );
  }
}

export default PlanCard;
