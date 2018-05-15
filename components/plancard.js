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
      <Card>
        <CardSection>
          <Vertical>
            <Text>Silver</Text>
            <Text>1 month</Text>
            <Text>TOP SELLER</Text>
          </Vertical>
          <RightVertical>
              <HorizontalReverse>
                  <Text>Rs 2500</Text>
                  <Text>Rs 4,450</Text>
                  <Text style={{...TextStyle.text_12_color_offer}}>25% off</Text>
              </HorizontalReverse>
            <Text>Rs 2500 per month</Text>
          </RightVertical>
        </CardSection>
        <CardSection>
          <Vertical>
            <Text>Chat with your Matches</Text>
            <Text>View 15 Contact Numbers</Text>
            <Text>Get highlighted to your Matches</Text>
            <Text>Feature on top of Search Result</Text>
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
