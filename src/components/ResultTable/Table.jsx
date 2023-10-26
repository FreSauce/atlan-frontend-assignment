import {
  ArrowSmallDownIcon,
  ArrowSmallUpIcon,
  ArrowsUpDownIcon,
} from "@heroicons/react/24/solid";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useVirtual } from "@tanstack/react-virtual";
import { useEffect, useRef, useState } from "react";

const Table = ({ result }) => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const tableContainerRef = useRef(null);
  const [sortingState, setSortingState] = useState([]);

  const columnHelper = createColumnHelper();
  useEffect(() => {
    if (result) {
      const columns = Object.keys(result[0]).map((key) =>
        columnHelper.accessor(key.replaceAll(".", "_"), {
          header: key,
          cell: (data) => data.getValue(),
        }),
      );
      setData(result);
      setColumns(columns);
    } else {
      setData([]);
      setColumns([]);
    }
    // eslint-disable-next-line
  }, [result]);

  const table = useReactTable({
    columns,
    data,
    state: {
      sorting: sortingState,
    },
    onSortingChange: setSortingState,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;

  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0;

  return (
    <div ref={tableContainerRef} className="h-full relative overflow-x-auto">
      <table
        className={`text-gray-500 dark:text-gray-300 min-w-full`}
        style={{
          width: table.getCenterTotalSize(),
        }}
      >
        <thead className="text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-300 sticky top-0">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="group" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  scope="col"
                  className="relative px-4 py-3 select-none"
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{
                    width: header.getSize(),
                  }}
                >
                  {header.isPlaceholder ? null : (
                    <div
                      className={`flex justify-between items-center ${header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : ""
                        }`}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="flex items-center text-gray-800 dark:text-gray-300">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                      {header.column.getIsSorted() === "asc" ? (
                        <ArrowSmallDownIcon className="ml-2 h-4 w-4 " />
                      ) : header.column.getIsSorted() === "desc" ? (
                        <ArrowSmallUpIcon className="ml-2 h-4 w-4 " />
                      ) : (
                        <ArrowsUpDownIcon className="ml-2 h-4 w-4 " />
                      )}
                      {header.column.getCanResize() && (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          className={`absolute top-0 right-0 h-full w-[2px] bg-gray-600 dark:bg-gray-400 opacity-0 group-hover:opacity-60 cursor-col-resize select-none 
                          ${header.column.getIsResizing()
                              ? "bg-blue-400 opacity-100"
                              : ""
                            }`}
                        />
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {paddingTop > 0 && (
            <tr>
              <td style={{ height: `${paddingTop}px` }} />
            </tr>
          )}
          {virtualRows.map((virtRow) => {
            const row = rows[virtRow.index];
            return (
              <tr
                key={row.id}
                className="bg-white border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="p-2 border-x border-gray-300 dark:border-gray-700 break-all text-gray-800 dark:text-gray-300"
                    key={cell.id}
                    style={{
                      width: cell.column.getSize(),
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
          {paddingBottom > 0 && (
            <tr>
              <td style={{ height: `${paddingBottom}px` }} />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
