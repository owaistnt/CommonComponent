import React from 'react'
import { View } from 'react-native'
import {color_divider, COLOR_PALLETE} from '../colors'
const Card = (props) => {
    return (
        <View style={{...styles.cardStyle, ...props.style}}>{props.children}</View>
    );
}


const styles = {
    cardStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: color_divider,
        borderBottomWidth: 0,
        shadowColor: COLOR_PALLETE.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
    }
}

export {Card}