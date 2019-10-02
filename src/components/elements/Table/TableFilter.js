import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'

import { Label } from '../Text'
import { SearchIcon } from '../Icons'
import { space } from '../../theme'
// import { PopoverMenu, Popover, Button } from '..'
// import OutlineButton from '../OutlineButton'

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${space.sm};
`

const StyledLabel = styled(Label)`
  display: block;
  margin-bottom: ${space.sm};
`

// const StyledOutlineBtn = styled(OutlineButton)`
//   margin-left: ${space.md};
//   background: transparent;
//   font-size: ${fontSizes.xxs};
//   align-items: center;
//   margin-bottom: ${space.xs};
//   color: ${palette.grey50};
// `

function TableToolbar(props) {
  const { setSearchTerm } = props

  return (
    <Container>
      <div style={{ marginRight: space.md }}>
        <StyledLabel>ค้นหา</StyledLabel>
        <Input
          placeholder="Search"
          style={{ width: 300 }}
          prefix={<SearchIcon />}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {/* <Popover
        trigger="click"
        placement="bottomLeft"
        offset={[0, -30]}
        content={<PopoverMenu items={headerMenu} />}
      >
        <Button mini="true" style={{ width: 90 }}>
          Add Filter
        </Button>
      </Popover>
      <StyledOutlineBtn onClick={() => setFilters({})}>
        Clear Filter
      </StyledOutlineBtn> */}
    </Container>
  )
}

export default TableToolbar
