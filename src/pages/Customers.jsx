import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Toolbar, Edit, Sort, Filter } from "@syncfusion/ej2-react-grids";

import { customersGrid, customersData } from '../constants/customersData';
import { Header } from '../components';

export const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />

      <GridComponent 
        dataSource={customersData} 
        allowPaging 
        allowSorting
        toolbar={['Delete']} 
        width="auto"
        editSettings={{
          allowDeleting: true,
          allowEditing: true
        }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, idx) => (
            <ColumnDirective key={idx} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};
