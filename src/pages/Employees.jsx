import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from "@syncfusion/ej2-react-grids";
import { employeesGrid, employeesData } from "../constants/employeesData";
import { Header } from "../components";


export const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />

      <GridComponent
        dataSource={employeesData}
        allowPaging
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {
            employeesGrid.map((item, idx) => (
              <ColumnDirective key={idx} {...item}/>
            ))
          }
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};
