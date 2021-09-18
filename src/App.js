import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
   const rowData = [
       {symbol: "MSFT", model: "Celica", price: 35000},
       {symbol: "AAPL", model: "Mondeo", price: 32000},
       {symbol: "TSLA", model: "Boxter", price: 72000}
   ];

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}
               defaultColDef={{
                flex: 1,
                minWidth: 110,
                editable: true,
                resizable: true,
              }}>
               <AgGridColumn field="symbol"></AgGridColumn>
               <AgGridColumn field="model"></AgGridColumn>
               <AgGridColumn field="price"></AgGridColumn>
           </AgGridReact>
       </div>
   );
};

export default App;