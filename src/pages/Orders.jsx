import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from "@syncfusion/ej2-react-grids";
import { ordersGrid, ordersData } from "../constants/ordersData";
import { Header } from "../components";


export const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders"/>
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, idx) => (
            <ColumnDirective key={idx} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject 
          services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}
        />
      </GridComponent>
    </div>
  );
};
