import { color_secondary, color_divider, COLOR_PALLETE } from "../colors";

const button_shadow = {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
};

export const button_default = {
  justifyContent: "center",
  alignItems: "center",
  height: 36,
  borderRadius: 2,
  paddingTop: 2,
  paddingBottom: 2,
  paddingRight: 8,
  paddingLeft: 8,
  marginTop: 8,
  marginBottom: 8,
  marginRight: 8,
  marginLeft: 8
};


export const button_streched = {
  ...button_default,
  alignSelf: "stretch"
};

export const button_colored = {
  ...button_default,
  ...button_shadow,
  backgroundColor: color_secondary
};

export const button_colored_wide = {
  ...button_default,
  ...button_shadow,
  backgroundColor: color_secondary,
  paddingLeft: 24,
  paddingRight: 24
};

export const button_colored_streched = {
  ...button_streched,
  ...button_colored_wide
};

export const button_outline = {
  ...button_default,
  borderWidth: 1,
  borderColor: color_divider,
  backgroundColor: COLOR_PALLETE.white
};

export const button_outline_streched = {
  ...button_outline,
  ...button_streched
};

export const button_outline_colored = {
  ...button_outline,
  borderColor: color_secondary
};

export const button_outline_streched_colored = {
  ...button_outline_colored,
  ...button_streched
};
