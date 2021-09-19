import React, { useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { render } from 'react-dom';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
    let rowData = [
       {symbol: "MSFT", gap: "Gap Up", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading', plan: ''},
       {symbol: "AAPL", gap: "Gap Down",lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Low volume', plan: ''},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading', plan: ''},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading', plan: ''},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading', plan: ''},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading', plan: ''},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading', plan: ''},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading', plan: ''},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading', plan: ''},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading', plan: ''},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading', plan: ''},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading', plan: ''},
       {symbol: "TSLA", gap: "Flat", lastFiveDays: "持续上涨", lastThreeWeeks: "持续上涨", volume: 'Active trading', plan: ''},
    ];

    const analyzeGapUpStock = (data) => {
        let result = "N/A";
        if (data.lastFiveDays === "持续上涨" && data.lastThreeWeeks === "持续上涨") {
            result = "Short (sell the news)";
            if (data.volume == 'Low volume')
                result += ", no volume"
        }
        return result;
    }

    const analyzeStock = (data) => {
        if (data.gap === 'Gap Up') {
            return analyzeGapUpStock(data);
        }
    }

    const planTheTrade = () => {
        console.log('button clicked');
        gridApi.forEachNode((rowNode, index) => {
            let plan = analyzeStock(rowNode.data)
            rowNode.setDataValue('plan', plan)
        });
    }

    const [gridApi, setGridApi] = useState(null);
    const onGridReady = (params) => {
        setGridApi(params.api);
    };
    const dailyCellRender = (params) => {
        if (params.value == "持续上涨"){
            return "持续上涨⬆️";
        } else if (params.value == '持续下跌') {
            return '持续下跌⬇️';
        } else if (params.value == '盘整'){
            return '盘整➡️';
        }
    }
    let components = {
        dailyCellRender: dailyCellRender
    }
    return (
        <div>
            <div className="ag-theme-alpine" style={{height: 600, width: 1600}}>
                <AgGridReact
                    onGridReady={onGridReady}
                    rowData={rowData}
                    components={components}
                    defaultColDef={{
                        flex: 1,
                        minWidth: 110,
                        editable: true,
                        resizable: true,
                    }}>
                    <AgGridColumn field="symbol" maxWidth="110"></AgGridColumn>
                    <AgGridColumn
                        field="gap"
                        cellEditor="agRichSelectCellEditor"
                        maxWidth="110"
                        cellEditorParams={{ cellHeight: 35, values: ['Gap Up', 'Gap Down', 'Flat'] }}
                    />
                    <AgGridColumn
                        headerName="过去5天走势"
                        field="lastFiveDays"
                        maxWidth="130"
                        cellEditor="agRichSelectCellEditor"
                        cellRenderer="dailyCellRender"
                        cellEditorParams={{ cellHeight: 35, values: ['持续上涨', '持续下跌', '盘整'] }}
                    />
                    <AgGridColumn
                        headerName="过去3周走势"
                        field="lastThreeWeeks"
                        maxWidth="130"
                        cellEditor="agRichSelectCellEditor"
                        cellRenderer="dailyCellRender"
                        cellEditorParams={{ cellHeight: 35, values: ['持续上涨', '持续下跌', '盘整'] }}
                    />
                    <AgGridColumn
                        headerName="盘前交易"
                        field="volume"
                        maxWidth="130"
                        cellEditor="agRichSelectCellEditor"
                        cellEditorParams={{ cellHeight: 35, values: ['Low volume', 'Active trading'] }}
                    />
                    <AgGridColumn
                        field="plan"
                        width="500"
                    />
                </AgGridReact>
            </div>
            <button onClick={planTheTrade}>Plan the trade</button>
        </div>
   );
};

export default App;