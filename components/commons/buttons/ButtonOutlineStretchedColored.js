import React from 'react'
import { View } from 'react-native'
import  {AbstractButton}  from './AbstractButton'
import {button_outline_streched_colored} from './button-styles'
import {TextStyle} from '../../commons'

const ButtonOutlineStretchedColored = (props) => {
    return(
            <AbstractButton 
            textStyle={TextStyle.Text_14.accent_font_bold}
            buttonStyle={button_outline_streched_colored}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export {ButtonOutlineStretchedColored}