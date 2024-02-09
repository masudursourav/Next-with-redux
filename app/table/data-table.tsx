"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  PaginationState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
export default function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 2,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { sorting, pagination: { pageIndex, pageSize } },
  });
  const handlePageSizeChange = (e: { target: { value: number } }) => {
    setPagination((prevState) => ({
      ...prevState,
      pageSize: Number(e.target.value),
    }));
  };
  const handleNextPage = () => {
    setPagination((prevState) => ({
      ...prevState,
      pageIndex: prevState.pageIndex + 1,
    }));
  };
  const handlePreviousPage = () => {
    setPagination((prevState) => ({
      ...prevState,
      pageIndex: prevState.pageIndex - 1,
    }));
  };
  return (
    <div className="rounded-md border">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div>
            <p>
              {pageSize * pageIndex + 1} -{" "}
              {pageSize * (pageIndex + 1) > data.length
                ? data.length
                : pageSize * (pageIndex + 1)}{" "}
              of {data.length}
            </p>
          </div>
          <div>
            <button
              className="mr-2"
              onClick={handlePreviousPage}
              disabled={pageIndex === 0}
            >
              {"< "}
            </button>
            {pageIndex + 1}
            <button
              className="ml-2"
              disabled={!table.getCanNextPage()}
              onClick={handleNextPage}
            >
              {" >"}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="pageSize">Rows per page:</label>
          <select
            id="pageSize"
            value={pageSize}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handlePageSizeChange(e as any as { target: { value: number } })
            }
          >
            <option value="2">2</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <TableCell key={cell.id}>
                    {cellIndex === 0 ? (
                      <a
                        href={"google.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </a>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>No results</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
