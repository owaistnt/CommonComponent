import React from 'react'
import {View} from 'react-native'
import {rightVerticleStyle} from './container-styles'


const RightVertical=(props)=>{
    return(
        <View style={{...rightVerticleStyle, ...props.style}}>{props.children}</View>
    );
}

export {RightVertical}