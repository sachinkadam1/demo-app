import React from 'react';

import TableCell from "./TableCell";

const TableRow = ({ columns, rowData }) => {
  return (
    <>
      {rowData && (
        <tr className="table-body-row">
          {columns &&
            columns.map((col, index) => {
              return <TableCell key={index} cellData={rowData[col.key]} />;
            })}
        </tr>
      )}
    </>
  );
};

export default TableRow;
