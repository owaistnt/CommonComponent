import {color_secondary, color_divider, colorSquash} from '../colors'

export const button_default={
    justifyContent:'center',
    alignItems:'center',
    height:36,
    borderRadius:4,
    paddingTop:2,
    paddingBottom:2,
    paddingRight:8,
    paddingLeft:8,
    marginTop:8,
    marginBottom:8,
    marginRight:8,
    marginLeft:8,
    elevation:2,
}

export const button_streched={
    ...button_default,
    alignSelf:'stretch'
}

export const button_colored={
    ...button_default,
    backgroundColor:color_secondary,
}

export const button_colored_wide={
    ...button_default,
    backgroundColor:color_secondary,
    paddingLeft:24,
    paddingRight:24,
}

export const button_colored_streched={
    ...button_streched,
    ...button_colored_wide,
}

export const button_outline={
    ...button_default,
    borderWidth:1,
    borderColor:color_divider,
    backgroundColor:colorSquash.white,

}

export const button_outline_streched={
    ...button_outline,
    ...button_streched,
}

export const button_outline_colored={
    ...button_outline,
    borderColor:color_secondary,
}