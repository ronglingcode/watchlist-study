import React, { useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { render } from 'react-dom';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
    let rowData = [
       {symbol: "MSFT", gap: "Gap Up", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading'},
       {symbol: "AAPL", gap: "Gap Down",lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Low volume'},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading'},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading'},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading'},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading'},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading'},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading'},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading'},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading'},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading'},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading'},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading'},
    ];

    const print = () => {
        console.log('button clicked');
        gridApi.forEachNode((rowNode, index) => {
            console.log(rowNode.data);
        });
    }
    const [gridApi, setGridApi] = useState(null);
    const onGridReady = (params) => {
        setGridApi(params.api);
      };

    return (
        <div className="ag-theme-alpine" style={{height: 600, width: 1000}}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}
                defaultColDef={{
                    flex: 1,
                    minWidth: 110,
                    editable: true,
                    resizable: true,
                }}>
                <AgGridColumn field="symbol"></AgGridColumn>
                <AgGridColumn 
                    field="gap"
                    cellEditor="agRichSelectCellEditor"
                    cellEditorParams={{ cellHeight: 35, values: ['Gap Up', 'Gap Down', 'Flat'] }}
                />
                <AgGridColumn 
                    headerName="过去5天走势"
                    field="lastFiveDays"
                    cellEditor="agRichSelectCellEditor"
                    cellEditorParams={{ cellHeight: 35, values: ['持续上涨', '持续下跌', '盘整'] }}
                />
                <AgGridColumn 
                    headerName="过去3周走势"
                    field="lastThreeWeeks"
                    cellEditor="agRichSelectCellEditor"
                    cellEditorParams={{ cellHeight: 35, values: ['持续上涨', '持续下跌', '盘整'] }}
                />
                <AgGridColumn 
                    headerName="盘前交易"
                    field="volume"
                    cellEditor="agRichSelectCellEditor"
                    cellEditorParams={{ cellHeight: 35, values: ['Low volume', 'Active trading'] }}
                />
            </AgGridReact>
            <button onClick={print}>Test</button>
        </div>
   );
};

export default App;