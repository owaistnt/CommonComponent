import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import { button_colored_streched } from './button-styles'
import {TextStyle} from '../../commons'

const ButtonColoredStreched = (props) => {
    return (
        <AbstractButton
            textStyle={TextStyle.Text_14.color_white_font_medium}
            buttonStyle={button_colored_streched}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export { ButtonColoredStreched }