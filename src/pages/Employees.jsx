import React from 'react'
import { GridComponent, ColumnDirective,
  Page, Search, Inject, Toolbar} from '@syncfusion/ej2-react-grids'

import { employeesData,  employeesGrid } from '../data/dummy'
import { Header} from '../components'
import { ColumnsDirective } from '@syncfusion/ej2-react-charts'

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging //permite paginação
        allowSorting //permite filtrar
        toolbar={['Search']} // barra
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/> 
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees