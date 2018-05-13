import React from 'react'
import {View} from 'react-native'
import {centerVerticalStyle} from './container-styles'


const CenterVertical=(props)=>{
    return(
        <View style={{...centerVerticalStyle, ...props.style}}>{props.children}</View>
    );
}

export {CenterVertical}