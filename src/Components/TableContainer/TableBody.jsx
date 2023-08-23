import React from 'react';

import TableRow from "./TableRow";

const TableBody = ({columns, tableData}) => {
  return (
    <tbody className="table-body">
      {tableData && tableData.map((row, index) => {
        return (
          <TableRow key={index} rowData={row} columns={columns} />
        )
      })}
    </tbody>
  );
};

export default TableBody;