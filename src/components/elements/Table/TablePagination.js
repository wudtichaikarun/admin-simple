import React from 'react'
import styled from 'styled-components'

import Table from '.'
import TableFilter from './TableFilter'
import SpinArea from '../SpinArea'
import { Pagination, Select } from '..'

import useGetPagination from '../../../hooks/useGetPagination'
import { pageOptions } from '../../../constants/globalValues'
import { space, fontSizes, palette } from '../../theme'

const Container = styled.div`
  display: flex;
  position: ${props => (props.nonFixed ? 'unset' : 'fixed')};
  flex-direction: column;
  box-shadow: 0 1px 3px 0 rgba(8, 27, 51, 0.2);
  background: white;
  height: auto;
  max-height: ${props => props.height};
  width: ${props => props.width || '100%'};
`

const Box = styled.div`
  background: white;
  overflow-y: scroll;
`

const Footer = styled.div`
  display: flex;
  padding: ${space.sm};
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid #ebedf4;
  min-height: 60px;

  span {
    font-size: ${fontSizes.xxs};
    color: ${palette.grey50};
  }
`

const RenderTable = props => {
  const { withFilter, height, width, pageHookProps, nonFixed } = props
  const { pageData, pageMethod } = pageHookProps

  const _onChangeLimit = limit => {
    pageMethod.setPage(1)
    pageMethod.setLimit(limit)
  }

  return (
    <>
      {withFilter && <TableFilter {...pageData} {...pageMethod} />}
      <Container height={height} width={width} nonFixed={nonFixed}>
        <Box>
          <SpinArea loading={pageData.loading} />
          <Table
            {...props}
            pagination={false}
            data={pageData.results}
            page={pageData.page}
            limit={pageData.limit}
            pageHookProps={pageHookProps}
          />
        </Box>
        <Footer>
          <div>
            <span>Rows per page:</span>
            <Select
              options={pageOptions}
              onChange={_onChangeLimit}
              value={pageData.limit}
              defaultValue={20}
              isoutline
              width={50}
            />
          </div>

          <Pagination
            total={pageData.total}
            current={pageData.page}
            onChange={page => pageMethod._getNewPage(page)}
            pageSize={pageData.limit}
          />
        </Footer>
      </Container>
    </>
  )
}

function TableWithModel(props) {
  const [pageData, pageMethod] = useGetPagination(props.model)

  const pageHookProps = {
    pageData,
    pageMethod,
  }

  return <RenderTable {...props} pageHookProps={pageHookProps} />
}

function TableWithOutModel(props) {
  return <RenderTable {...props} />
}

function TablePagination(props) {
  if (props.model) {
    return <TableWithModel {...props} model={props.model} />
  }
  return <TableWithOutModel {...props} />
}

TablePagination.defaultProps = {
  withFilter: false,
}

export default TablePagination
