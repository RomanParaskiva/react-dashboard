import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'

import { Header } from '../components'


const Customers = () => {
  return (
    <div className='m-2 mt-10 md:m-10 p-2 pt-10 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent
        width={'auto'}
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete', 'Add']}
        editSettings={{ allowDeleting: true, allowEditing: true, allowAdding: true}}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, Selection, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers