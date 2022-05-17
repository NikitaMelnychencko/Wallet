import * as React from 'react'
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled'
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import { styled } from '@mui/system'
import { StyledEngineProvider } from '@mui/material/styles'
import { vars } from 'stylesheet'

import rowDown from 'assets/images/openMenu/row-down.svg'

const blue = {
	100: '#DAECFF',
	200: '#99CCF3',
	400: '#3399FF',
	500: '#007FFF',
	600: '#0072E5',
	900: '#003A75',
}

const grey = {
	100: '#E7EBF0',
	200: '#E0E3E7',
	300: '#CDD2D7',
	400: '#B2BAC2',
	500: '#A0AAB4',
	600: '#6F7E8C',
	700: '#3E5060',
	800: '#2D3843',
	900: '#1A2027',
}

const StyledButton = styled('button')(
	({ theme }) => `
  font-family: Circe, sans-serif;
  font-size: 18px;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  width: 280px;
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border-bottom: 1px solid ${vars.color.accent.buttonOpenMenu};
//   border-radius: 30px;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${vars.color.accent.buttonOpenMenu};

//   &:hover {
//     background: inherit;
//     border-color: red;
//   }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 2px solid ${vars.color.accent.buttonOpenMenu};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '';
      color: ${vars.color.accent.buttonOpenMenu};
    }
  }

  &::after {
    content: url(${rowDown});
    float: right;
  }

  @media (min-width: ${vars.breakpoints.tablet}) {
    width: 402px;
  }

  @media (min-width: ${vars.breakpoints.desktop}) {
    width: 540px;
  }
  `
)

const StyledListbox = styled('ul')(
	({ theme }) => `
  font-family: Circe, sans-serif;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  box-sizing: border-box;
  padding: 20px 0;
  margin: 10px 0;
  width: 280px;
  height: 352px;
  background: ${vars.color.background.openMenu};
  border: 1px solid inherit;
  border-radius: ${vars.borderRadius.primary};
  box-shadow: ${vars.boxShadow.openMenu};
  backdrop-filter: blur(50px);
  overflow: auto;
  outline: 0px;

  @media (min-width: ${vars.breakpoints.tablet}) {
    width: 402px;
    height: 352px;

  }

  @media (min-width: ${vars.breakpoints.desktop}) {
    width: 540px;
    height: 603px;

  }


  `
)

const StyledOption = styled(OptionUnstyled)(
	({ theme }) => `
  list-style: none;
  padding: 8px;
//   border-radius: 30px;
  // cursor: red;
  

  &:last-of-type {
    border-bottom: none;
  }

//   &.${optionUnstyledClasses.selected} {
//     background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
//   }

//   &.${optionUnstyledClasses.highlighted} {
//     background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   }

//   &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
//     background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
//   }

//   &.${optionUnstyledClasses.disabled} {
//     color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
//   }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${vars.color.background.primary};
    color: ${vars.color.accent.openMenu};
  }
  `
)

const StyledPopper = styled(PopperUnstyled)`
	z-index: 1;
`

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
	const components = {
		Root: StyledButton,
		Listbox: StyledListbox,
		Popper: StyledPopper,
		...props.components,
	}

	return <SelectUnstyled {...props} ref={ref} components={components} />
})
function renderValue(option) {
	if (option == null) {
		return <span>Select category...</span>
	}

	return <span>{option.value}</span>
}

export const OpenMenu = ({ data, handleChange }) => {
	const [value, setValue] = React.useState()

	return (
		<StyledEngineProvider injectFirst>
			<CustomSelect renderValue={renderValue} value={value} onChange={handleChange}>
				{/* {data.map((key) => (
					<StyledOption value={key} key={key}>
						{key}
					</StyledOption>
				))} */}
				<StyledOption value={10}>Ten</StyledOption>
				<StyledOption value={20}>Twenty</StyledOption>
				<StyledOption value={30}>Thirty</StyledOption>
			</CustomSelect>
		</StyledEngineProvider>
	)
}