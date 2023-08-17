import { useReducer, useState } from "react";
import { makeData, Person } from "../../mockData";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper<any>();

const columns = [
  columnHelper.accessor("序号", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  {
    accessorFn: (row: any) => `${row.firstName}`,
    id: "首",
  },
  {
    accessorFn: (row: any) => `${row.lastName}哈哈`,
    id: "尾",
  },
  {
    id: "全名",
    accessorFn: (row: any) => `${row.firstName} ${row.lastName}`,
  },
  {
    id: "哈哈",
    accessorFn: (row: any) => `${row.firstName}`,
    cell: (row: any) => <span>哈哈</span>,
  },
  // {
  //   header: "Name",
  //   footer: (props) => props.column.id,
  //   columns: [
  //     {
  //       accessorKey: "firstName",
  //       cell: (info) => info.getValue(),
  //       footer: (props) => props.column.id,
  //     },
  //     {
  //       accessorFn: (row) => row.lastName,
  //       id: "lastName",
  //       cell: (info) => info.getValue(),
  //       header: () => <span>Last Name</span>,
  //       footer: (props) => props.column.id,
  //     },
  //   ],
  // },
  // columnHelper.accessor("firstName", {
  //   cell: (info) => info.getValue(),
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor((row) => row.lastName, {
  //   id: "lastName",
  //   cell: (info) => <i>{info.getValue()}</i>,
  //   header: () => <span>Last Name</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("age", {
  //   header: () => "Age",
  //   cell: (info) => info.renderValue(),
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("visits", {
  //   header: () => <span>Visits</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("status", {
  //   header: "Status",
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("progress", {
  //   header: "Profile Progress",
  //   footer: (info) => info.column.id,
  // }),
];

function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(() => makeData(50));
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => {
            return (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => {
                  return (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tfoot>
      </table>

      <button
        className="border rounded p-1"
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        第一页
      </button>
      <button
        className="border rounded p-1"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        上一页
      </button>
      <button
        className="border rounded p-1"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        下一页
      </button>
      <button
        className="border rounded p-1"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        最后一页
      </button>
      <span className="flex items-center gap-1">
        <strong>
          {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
        </strong>
      </span>

      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            每页{pageSize}条
          </option>
        ))}
      </select>
    </div>
  );
}

export default Home;
