import { theme } from '../../constants/theme'
import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const BackIcon = (props: SvgProps) => (
  <Svg width={30} height={30} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <Path d='m18.75 7.5-7.5 7.5 7.5 7.5' stroke={theme.colors.white} strokeWidth={1.5} strokeLinecap='round' />
  </Svg>
)