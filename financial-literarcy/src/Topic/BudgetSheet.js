import React, { useState } from 'react';
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';

function BudgetSheet() {

  const [table1Data, setTable1Data] = useState([
            [0],
            [0],
            [0],
  ]);

  const [table2Data, setTable2Data] = useState([
              [0],
              [0],
              [0],
    ]);

  const [table4Data, setTable4Data] = useState([
              [''],
              [''],
              [''],
    ]);


  const [table3Data, setTable3Data] = useState([
           ['Salary 1','0','Taxes/Withholding' , '','','' ,'' , ''],
           ['Salary 2','0','Taxes/Withholding' , '','','' ,'' , ''],
           ['Salary 3','0','Taxes/Withholding' , '','','' ,'' , ''],
           ['','' ,'' , '','','' ,'' , ''],
           ['','' ,'' , '','','' ,'' , ''],
           ['','' ,'' , '','','' ,'' , ''],
           ['','' ,'' , '','','' ,'' , ''],
           ['','' ,'' , '','','' ,'' , ''],
           ['','' ,'' , '','','' ,'' , ''],
           ['','' ,'' , '','','' ,'' , ''],
           ['','' ,'' , '','','' ,'' , ''],
           ['','' ,'' , '','','' ,'' , ''],
           ['Total Monthly Net Income','=SUM(B1:B12)' ,'Total Deductions' , '=SUM(D1:D12)','Total Fixed Expenses','=SUM(F1:F12)' ,'Total Flexible Expenses' , '=SUM(H1:H12)'],
           ['Total Monthly Gross Income','=B13-D13' ,'' , '','','' ,'' , ''],
           ['Total Expenses','=F13+H13' ,'' , '','','' ,'' , ''],
           ['Total Remaining','=B14-B15' ,'' , '','','' ,'' , '']
    ]);


  return (
    <div>
      <HotTable
        data={table4Data}
        rowHeaders={["Name", "Month", "Year"]}
        colWidths={75}
        licenseKey="non-commercial-and-evaluation"
        rowHeaderWidth={60}
      />

      <div style={{ display: 'flex' }}>
        <div>
          <HotTable
            data={table1Data}
            rowHeaders={["Salary 1/Year", "Salary 2/Year", "Salary 3/Year"]}
            colWidths={200}
            afterChange={(changes, source) => {
                changes?.forEach(([row, prop, oldValue, newValue]) => {
                  // Assuming that row and prop correspond to the position you want to update in table2Data
                  const updatedTable3Data = [...table3Data];
                  updatedTable3Data[row][prop+1] = (newValue/12);
                  setTable3Data(updatedTable3Data);
                });
              }}
            licenseKey="non-commercial-and-evaluation"
            columns={[
              {
                type: "numeric",
                numericFormat: {
                  pattern: "$0,0.00",
                  culture: "en-US",
                },
              },
            ]}
            rowHeaderWidth={150}
          />
        </div>

        <div>
          <HotTable
            data={table2Data}
            rowHeaders={[
              "Tax Withholdings Est",
              "Tax Withholdings Est",
              "Tax Withholdings Est",
            ]}
            colWidths={100}
            afterChange={(changes, source) => {
                changes?.forEach(([row, prop, oldValue, newValue]) => {
                  // Assuming that row and prop correspond to the position you want to update in table2Data
                  const updatedTable3Data = [...table3Data];
                  updatedTable3Data[row][prop+3] = (updatedTable3Data[row][1]*(newValue/100));
                  setTable3Data(updatedTable3Data);
                });
              }}
            licenseKey="non-commercial-and-evaluation"
            columns={[
              {
                type: 'numeric',
                renderer: function(instance, td, row, col, prop, value, cellProperties) {
                  Handsontable.renderers.NumericRenderer.apply(this, arguments);
                  td.innerHTML = `${value} %`;
                },
              },
            ]}
            rowHeaderWidth={175}
          />
        </div>
      </div>

      <div>
        <HotTable
          data={table3Data}
          formulas={{
                  engine: HyperFormula,
          }}
          nestedHeaders={[
            [
              { label: 'Income', colspan: 2 },
              { label: 'Income Deductions', colspan: 2 },
              { label: 'Fixed Expenses', colspan: 2 },
              { label: 'Flexible Expenses', colspan: 2 },
            ],
            ['Income Type', 'Amount', 'Item', 'Amount', 'Expenses', 'Amount', 'Expense', 'Amount'],
          ]}
          colWidths = {110}
          licenseKey="non-commercial-and-evaluation"
          columns={[
            {},
            {
                type: "numeric",
                numericFormat: {
                    pattern: "$0,0.00",
                    culture: "en-US",
                          },
            },
            {},
            {
                type: "numeric",
                numericFormat: {
                    pattern: "$0,0.00",
                    culture: "en-US",
                          },
            },
            {},
            {
                type: "numeric",
                numericFormat: {
                    pattern: "$0,0.00",
                    culture: "en-US",
                          },
            },
            {},
            {
                type: "numeric",
                numericFormat: {
                    pattern: "$0,0.00",
                    culture: "en-US",
                },
            }
          ]}
        />
      </div>
    </div>
  );
}

export default BudgetSheet;