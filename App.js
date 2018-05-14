import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  TextStyle,
  Colors,
  Dimentions,
  Buttons,
} from "./components/commons";

import {CardSection, Card} from './components/commons/cards'

import { verticalStyle } from "./components/commons/containers/container-styles";
import { CenterVertical, Vertical } from "./components/commons/containers";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Vertical style={{ marginTop: 72 }}>
          <Card>
            <CenterVertical>
              <Text style={{ marginTop: 16, marginBottom: 16 }}>
                Text Styling
              </Text>
            </CenterVertical>
            <CardSection>
              <Vertical>
                <Text style={{ ...TextStyle.text_12 }}>Text 12</Text>
                <Text style={{ ...TextStyle.text_12_medium }}>
                  text_12_medium
                </Text>
                <Text style={{ ...TextStyle.text_12_light }}>
                  text_12_light
                </Text>
                <Text style={{ ...TextStyle.text_12_thin }}>text_12_thin</Text>
                <Text style={{ ...TextStyle.text_12_primary }}>
                  text_12_primary
                </Text>
                <Text style={{ ...TextStyle.text_12_accent }}>
                  text_12_accent
                </Text>
                <Text style={{ ...TextStyle.text_12_color_offer }}>
                  25 % offer
                </Text>
              </Vertical>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <CenterVertical style={{ flex: 1 }}>
                <Text style={{ marginTop: 16, marginBottom: 16 }}>
                  Buttons Guildlines
                </Text>
              </CenterVertical>
            </CardSection>

            <CardSection>
              <CenterVertical style={{ flex: 1 }}>
                <Buttons.AbstractButton>AbstractButton</Buttons.AbstractButton>
                <Buttons.ButtonColored>ButtonColored</Buttons.ButtonColored>
                <Buttons.ButtonColoredWide>
                  ButtonColoredWide
                </Buttons.ButtonColoredWide>
                <Buttons.ButtonColoredStreched>
                  ButtonColoredStreched
                </Buttons.ButtonColoredStreched>
              </CenterVertical>
            </CardSection>

            <CardSection>
              <CenterVertical style={{ flex: 1 }}>
                <Buttons.ButtonBorderless>
                  ButtonBorderless
                </Buttons.ButtonBorderless>
                <Buttons.ButtonBorderlessColored>
                  ButtonBorderlessColored
                </Buttons.ButtonBorderlessColored>
              </CenterVertical>
            </CardSection>

            <CardSection>
              <CenterVertical style={{ flex: 1 }}>
                <Buttons.ButtonOutline>Outline</Buttons.ButtonOutline>
                <Buttons.ButtonOutlineStretched>
                  Outline Stretched
                </Buttons.ButtonOutlineStretched>
                <Buttons.ButtonOutlineColored>
                  Outline Colored
                </Buttons.ButtonOutlineColored>
                <Buttons.ButtonOutlineStretchedColored>
                  Stretched
                </Buttons.ButtonOutlineStretchedColored>
              </CenterVertical>
            </CardSection>
          </Card>
        </Vertical>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
