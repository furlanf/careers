// $black: #000000;
// $blue: #3baed9;
// $brown: #673606;
// $green: #7dd329;
// $red: #a70b0c;
// $white: #ffffff;
// $alertColor: #f6e92a;
// $fieldBackgroundColor: #f3ede7;
// $imageBorderColor: #fcf7ec;
// $wine: #931E1C;
// $grey: #E9E9E9;

const colors = {
  black: '#010101',
  white: '#ffffff',
  red: '#CD0E0F',
}

const sizes = {
  header: '90px',
}

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fonts = {
  body: '"Dosis", sans-serif',
}

const fontSizes = [0, 12, 14, 16, 21, 28, 37, 50, 67, 89, 119, 159].map(
  (n) => `${n / 10}rem`
)

const fontWeights = [0, 400, 500, 600, 700]

const theme = {
  colors,
  sizes,
  space,
  fonts,
  fontSizes,
  fontWeights,
}

export default theme
