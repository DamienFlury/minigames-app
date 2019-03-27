import styled from 'styled-components'
import { withTheme } from '@material-ui/core'

const Tile = withTheme()(styled.td`
  background-color: ${props => props.isBomb ? 'yellow' : props.theme.palette.primary[500]};
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 25px;

  &:active {
    background-color: ${props => props.theme.palette.primary[600]}
  }
`)

export default Tile