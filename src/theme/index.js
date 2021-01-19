const colors = {
  white: '#ffffff',
  black: '#000000',
  successGreen: '#40ac74',
  borderBottom: 'rgba(0, 0, 0, 0.1)',
  privacyLink: 'rgba(0, 0, 0, 0.2)',
  placeHolder: 'rgba(0, 0, 0, 0.3)',
  linkGrey: 'rgba(0, 0, 0, 0.4)',
  darkGrey: 'rgba(0, 0, 0, 0.8)',
  danger: '#e72842',
  warning: '#ec9c18',
  neutralGrey: '#d9d9d9',
  backgroundGrey: '#f4f4f4',
  cornFlowerBlue: '#4c7cda',
  cornFlowerBlueLight: 'rgba(76, 124, 218, 0.5)',
  transparentGrey: 'rgba(0, 0, 0, 0.05)',
  wheat: '#fed88a',
  transparentBlack: 'rgba(0, 0, 0, 0.7)',
  modalBackdrop: 'rgba(216, 216, 216, 0.8)',
  transparentWhite: 'rgba(255, 255, 255, 0.4)',
  purple: '#794ed0'
}

const mediaQueries = {
  maxTabletWidth: '@media only screen and (max-width: 1023px)',
  maxMobileWidth: '@media only screen and (max-width: 767px)'
}

const zIndex = {
  minimal: 1,
  tooltip: 2,
  notification: 3,
  modalBackdrop: 4,
  modal: 5,
  pluginClose: 6
}

const theme = {
  colors,
  mediaQueries,
  zIndex
}

export default theme
