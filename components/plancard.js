import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection } from "./commons/cards";
import { ButtonColored } from "./commons/buttons";
import { TextStyle } from "./commons";
import {
  Vertical,
  Horizontal,
  CenterVertical,
  HorizontalReverse,
  Right,
  RightVertical
} from "./commons/containers";


class PlanCard extends Component {
  render() {
    return (
      <Card style={{marginTop:72}}>
        <CardSection>
          <Vertical>
            <Text style={{...TextStyle.Text_17.primary}}>Silver</Text>
            <Text style={{...TextStyle.Text_12.medium}}>1 month</Text>
            <Text style={{...TextStyle.Text_10.app_primary}}>TOP SELLER</Text>
          </Vertical>
          <RightVertical>
              <HorizontalReverse>
                  <Text>Rs 2500</Text>
                  <Text style={{...TextStyle.Text_12.secondary}}>Rs 4,450</Text>
                  <Text style={{...TextStyle.Text_10.color_offer}}>25% off</Text>
              </HorizontalReverse>
            <Text style={{...TextStyle.Text_12.secondary}}>Per month Rs 2500</Text>
          </RightVertical>
        </CardSection>
        <CardSection>
          <Vertical>
            <Text style={{...TextStyle.Text_14.secondary}}>Chat with your Matches</Text>
            <Text style={{...TextStyle.Text_14.secondary}}>View 15 Contact Numbers</Text>
            <Text style={{...TextStyle.Text_14.secondary}}>Get highlighted to your Matches</Text>
            <Text style={{...TextStyle.Text_14.secondary}}>Feature on top of Search Result</Text>
            <CenterVertical>
              <ButtonColored>Continue</ButtonColored>
            </CenterVertical>
          </Vertical>
        </CardSection>
      </Card>
    );
  }
}

export { PlanCard };
