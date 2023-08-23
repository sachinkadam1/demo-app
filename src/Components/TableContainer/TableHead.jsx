import React from 'react';

const TableHead = ({columns}) => {
  return (
    <thead className="table-header">
        <tr className="table-header-row">
            {columns && columns.map((column, index) => {
                return (
                    <th key={index} className="table-header-cell" >{column.label}</th>
                )
            }) }
        </tr>
    </thead>
  );
};

export default TableHead;