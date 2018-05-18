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
    productCode: PropTypes.string,
    currency: PropTypes.string,
    allowDiscount: PropTypes.bool,
    discountedText: PropTypes.string,
    price: PropTypes.string,
    salePrice: PropTypes.string,
    duration: PropTypes.number,
    pricePerMonth: PropTypes.string,
    productSubText:PropTypes.string,
    benefits: PropTypes.array,
    bestValue: PropTypes.bool,
    topSeller: PropTypes.bool,
    yourPlan: PropTypes.bool,
    selected: PropTypes.bool,
    onContinue: PropTypes.func,
    onSelected:PropTypes.func,
  };
  
  render() {
    return (
      <Card _onPress={()=>this.props.onSelected(this.props.productCode)}>
        {renderUpperSection(this.props)}
        {renderBottomSection(this.props)}
      </Card>
    );
  }
}

const renderBenefits=(props)=> {
  let { benefits } = props;
  return benefits.map((item, index) => {
    if(item.available===true){
      return (
        <Text style={{ ...TextStyle.Text_14.secondary }} key={index}>
          {item.value}
        </Text>
      );
    }else{
      return (
        <Text style={{ ...TextStyle.Text_14.secondary,  
        textDecorationLine: "line-through" }} key={index}>
          {item.value}
        </Text>
      );
    }
  });
}

const renderBottomSection=(props)=> {
  if (props.selected === true) {
    console.log(`Selected ${props.selected}`)
    return (
      <CardSection>
        <Vertical>
          {renderBenefits(props)}
          <CenterVertical>
            <ButtonColored _onPress={()=>props.onContinue(props.productCode)}>
              Continue
            </ButtonColored>
          </CenterVertical>
        </Vertical>
      </CardSection>
    );
  } else {
    return <View />;
  }
}


const renderUpperSection=(props)=>{
  return (
    <CardSection>
          <Vertical>
            <Text style={{ ...TextStyle.Text_17.primary }}>
              {props.name}
            </Text>
            <Text style={{ ...TextStyle.Text_12.font_medium }}>
              {getDurationText(props)}
            </Text>
            {renderBadge(props)}
          </Vertical>
          <RightVertical>
            <HorizontalReverse>
              <Text>{`${props.currency}${props.salePrice}`}</Text>
              <Text
                style={{
                  ...TextStyle.Text_12.secondary,
                  textDecorationLine: "line-through"
                }}
              >
                {`${props.currency}${props.price}`}
              </Text>
              <Text style={{ ...TextStyle.Text_10.color_offer }}>
                {props.discountedText}
              </Text>
            </HorizontalReverse>
            <Text style={{ ...TextStyle.Text_12.secondary }}>
              {`Per month ${props.currency}${props.pricePerMonth}`}
            </Text>
          </RightVertical>
        </CardSection>
  )
}

const getDurationText=(props)=> {
  if (props.duration > 1) {
    return `${props.duration} month`;
  } else {
    return `${props.duration} months`;
  }
}

const renderBadge=(props)=> {
  console.log(`Best Seller ${props.topSeller}`);
  console.log(`Best Value ${props.bestValue}`);
  console.log(`Your Plan ${props.yourPlan}`);
  if (props.topSeller === true) {
    return (
      <Text style={{ ...TextStyle.Text_10.app_primary }}>TOP SELLER</Text>
    );
  }

  if (props.bestValue === true) {
    return (
      <Text style={{ ...TextStyle.Text_10.app_primary }}>BEST VALUE</Text>
    );
  }

  if (props.yourPlan === true) {
    return (
      <Text style={{ ...TextStyle.Text_10.app_primary }}>YOUR PLAN</Text>
    );
  }
}


export default PlanCard;
