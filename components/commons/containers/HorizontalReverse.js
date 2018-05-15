import React from 'react'
import {View} from 'react-native'
import {rightHorizontal, horizontalReverse} from './container-styles'


const HorizontalReverse=(props)=>{
    return(
        <View style={{...horizontalReverse, ...props.style}}>{props.children}</View>
    );
}

export {HorizontalReverse}