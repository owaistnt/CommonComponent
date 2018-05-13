import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

const AbstractButton=({buttonStyle, textStyle, children, onClick})=>{
    return (
        <TouchableOpacity onPress={onClick} style={{...buttonStyle}}>
            <Text style={{...textStyle}}>{children}</Text>
        </TouchableOpacity>
    );
}


export {AbstractButton};