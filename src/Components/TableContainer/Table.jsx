import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import useTable from "./hooks/useTable";

const Table = ({ columns, tableData }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(tableData, page, 20);

    return (
        <table className="table-root">
            <TableHead columns={columns} />
            <TableBody columns={columns} tableData={slice} />
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </table>
    );
};

export default Table;