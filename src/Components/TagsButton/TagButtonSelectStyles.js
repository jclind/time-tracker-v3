import variables from '../../helpers.scss'
console.log(variables.inputBackground)
const customTagButtonStyles = {
  option: (provided, state) => ({
    ...provided,
    background: variables.inputBackground,
    '&:hover': {
      background: variables.gray900,
      cursor: 'pointer',
    },
    color: variables.primaryText,
  }),
  control: (provided, state) => ({
    ...provided,
    background: variables.inputBackground,
    color: variables.primaryText,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    background: variables.inputBackground,
    color: variables.primaryText,
  }),
  menu: (provided, state) => ({
    ...provided,
    background: variables.inputBackground,
    // color: variables.primaryText,
  }),
  input: (provided, state) => ({
    ...provided,
    color: variables.primaryText,
  }),
}

export default customTagButtonStyles
