import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import  {PlanList} from './components'
import {Vertical, CenterVertical, HorizontalReverse, RightVertical} from './components/commons/containers'
import {TextStyle, Buttons} from './components/commons'
import {Card, CardSection} from './components/commons/cards'
import { SampleData } from "./sample_data/plandata";


export default class App extends React.Component {


  render() {
    let { memberships, currency } = SampleData.data;
    let membershiplist = [...memberships];
    let currencyValue = currency.split(" ")[1];

    return(
     <PlanList membershiplist={membershiplist} currency={currencyValue} />
    )
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



/* 
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
); */
