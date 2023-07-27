import { KanbanComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../constants/kanbanData";
import {Header} from '../components';

export const Kanban = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{
          contentField: "Summary",
          headerField: "Id"
        }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, idx) => (
            <ColumnDirective key={idx} {...item}/>
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};
