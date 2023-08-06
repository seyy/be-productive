import { theme } from '../../constants/theme'
import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const CloseIcon = (props: SvgProps) => (
  <Svg width={14} height={14} fill='none' {...props}>
    <Path
      d='M13.833 1.393 12.44 0 6.917 5.523 1.393 0 0 1.393l5.523 5.524L0 12.44l1.393 1.393L6.917 8.31l5.523 5.523 1.393-1.393L8.31 6.917l5.523-5.524Z'
      fill={theme.colors.darkgrey}
    />
  </Svg>
)