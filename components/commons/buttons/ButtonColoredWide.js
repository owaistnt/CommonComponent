import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import {button_colored, button_colored_wide} from './button-styles'
import {TextStyle} from '../../commons'


const ButtonColoredWide = (props) => {
    return(
            <AbstractButton 
            textStyle={TextStyle.Text_14.color_white_font_medium}
            buttonStyle={button_colored_wide}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export {ButtonColoredWide}