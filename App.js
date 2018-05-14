import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import { TextStyle, Colors, Dimentions } from './components/commons';
import {
  text_12_primary,
  text_12_medium,
  text_12,
  text_12_light,
  text_12_accent,
  text_12_thin,
  text_12_color_offer
} from './components/commons/textstyle'

import { ButtonColored } from './components/commons/button/ButtonColored'
import {
  AbstractButton,
  ButtonColoredWide,
  ButtonColoredStreched,
  ButtonBorderless,
  ButtonBorderlessColored,
  ButtonOutline,
  ButtonOutlineStretched,
} from './components/commons/button';

import { CardSection, Card } from './components/commons/cards';
import { Vertical } from './components/commons/containers/Vertical';
import { verticalStyle } from './components/commons/containers/container-styles'
import { CenterVertical } from './components/commons/containers';


export default class App extends React.Component {
  render() {

    return (
      <ScrollView style={{flex:1}}>

      <Vertical style={{ marginTop: 72,}}>

      <Card>
          <CenterVertical><Text style={{marginTop:16, marginBottom:16}}>Text Styling</Text></CenterVertical>
        <CardSection>
          <Vertical>
              <Text style={{ ...text_12 }}>Text 12</Text>
              <Text style={{ ...text_12_medium }}>text_12_medium</Text>
              <Text style={{ ...text_12_light }}>text_12_light</Text>
              <Text style={{ ...text_12_thin }}>text_12_thin</Text>
              <Text style={{ ...text_12_primary }}>text_12_primary</Text>
              <Text style={{ ...text_12_accent }}>text_12_accent</Text>
              <Text style={{ ...text_12_color_offer }}>25 % offer</Text>
            </Vertical>
        </CardSection>
      </Card>

        <Card >
          <CardSection>
           <CenterVertical style={{flex:1}}>
           <Text style={{marginTop:16, marginBottom:16}}>Buttons Guildlines</Text>
           </CenterVertical>
          </CardSection>

          <CardSection>
            <CenterVertical style={{flex:1}}>
              <AbstractButton>AbstractButton</AbstractButton>
              <ButtonColored>ButtonColored</ButtonColored>
              <ButtonColoredWide>ButtonColoredWide</ButtonColoredWide>
              <ButtonColoredStreched>ButtonColoredStreched</ButtonColoredStreched>
            </CenterVertical>
          </CardSection>

          <CardSection>
            <CenterVertical style={{flex:1}}>
              <ButtonBorderless>ButtonBorderless</ButtonBorderless>
              <ButtonBorderlessColored>ButtonBorderlessColored</ButtonBorderlessColored>
            </CenterVertical>
          </CardSection>

           <CardSection>
            <CenterVertical style={{flex:1}}>
              <ButtonOutline>Outline</ButtonOutline>
              <ButtonOutlineStretched>Outline Stretched</ButtonOutlineStretched>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
