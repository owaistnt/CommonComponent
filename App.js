import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
  ButtonBorderlessColored
} from './components/commons/button';
import { CardSection, Card } from './components/commons/cards';
import { Vertical } from './components/commons/containers/Vertical';
import { verticalStyle } from './components/commons/containers/container-styles'
import { CenterVertical } from './components/commons/containers';


export default class App extends React.Component {
  render() {

    return (
      <Vertical style={{ marginTop: 72,}}>

        <Card >
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

          <CardSection>
            <CenterVertical style={{flex:1}}>
              <AbstractButton>AbstractButton</AbstractButton>
              <ButtonColored>ButtonColored</ButtonColored>
              <ButtonColoredWide>ButtonColoredWide</ButtonColoredWide>
              <ButtonColoredStreched>ButtonColoredStreched</ButtonColoredStreched>
              <ButtonBorderless>ButtonBorderless</ButtonBorderless>
              <ButtonBorderlessColored>ButtonBorderlessColored</ButtonBorderlessColored>
            </CenterVertical>
          </CardSection>
        </Card>
      </Vertical>
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
