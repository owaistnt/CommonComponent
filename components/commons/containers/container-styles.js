export const verticalStyle = {
  flexDirection: "column",
  flex: 1
};

export const centerVerticalStyle = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export const rightVerticleStyle={
    ...verticalStyle,
    alignItems:'flex-end'
}


//Horizontal

export const horizontalStyle = {
  flexDirection: "row"
};

export const leftHorizontal = {
  ...horizontalStyle,
  justifyContent: "flex-start"
};

export const horizontalReverse = {
  flexDirection: "row-reverse",
  alignItems:"center",

};

export const rightHorizontal = {
  ...horizontalStyle,
  justifyContent: "flex-end"
};
