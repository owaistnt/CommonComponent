import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import { button_colored_streched } from './button-styles'
import { text_14_white_medium } from '../textstyle'

const ButtonColoredStreched = (props) => {
    return (
        <AbstractButton
            textStyle={text_14_white_medium}
            buttonStyle={button_colored_streched}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export { ButtonColoredStreched }