"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
export default function OptionBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [value, setValue] = useState("2");
  const { replace } = useRouter();
  const handleValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("limit", event.target.value.toString());
    replace(`${pathname}?${params.toString()}`);
    setValue(event.target.value);
  };
  const handleNextPage = () => {
    const params = new URLSearchParams(searchParams);
    const currentPage = parseInt(searchParams.get("page") || "1");
    params.set("page", (currentPage + 1).toString());
    replace(`${pathname}?${params.toString()}`);
  };
  const handlePreviousPage = () => {
    const params = new URLSearchParams(searchParams);
    const currentPage = parseInt(searchParams.get("page") || "1");
    if (currentPage > 1) {
      params.set("page", (currentPage - 1).toString());
      replace(`${pathname}?${params.toString()}`);
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div>
            <button className="mr-2" onClick={handlePreviousPage}>
              {"< "}
            </button>
            <span>{searchParams.get("page") || "1"}</span>
            <button className="ml-2" onClick={handleNextPage}>
              {" >"}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="pageSize">Rows per page:</label>
          <select id="pageSize" value={value} onChange={handleValueChange}>
            <option value="2">2</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </div>
  );
}
