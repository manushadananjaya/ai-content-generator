"use client";
import React, { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DataTable } from "./DataTableHistory"; // Ensure this path is correct
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";

export type HistoryTableData = {
  Template: string;
  AiResp: string;
  Date: string;
  Words: number;
  Copy: string;
};

export const columnsHistoryTable: ColumnDef<HistoryTableData>[] = [
  {
    header: "Template",
    accessorKey: "Template",
  },
  {
    header: "AI Response",
    accessorKey: "AiResp",
  },
  {
    header: "Date",
    accessorKey: "Date",
  },
  {
    header: "Words",
    accessorKey: "Words",
  },
  {
    header: "Copy",
    accessorKey: "Copy",
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [copied, setCopied] = useState(false);

      const handleCopy = () => {
        navigator.clipboard.writeText(row.getValue("AiResp"));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

      return (
        <Button
          onClick={handleCopy}
          className="w-20 bg-white border text-gray-900 hover:bg-gray-700 hover:text-white dark:bg-gray-800 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-slate-400"
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      );
    },
  },
];

async function getData(): Promise<HistoryTableData[]> {
  const records = await db.select().from(AIOutput);
  return records.map((record) => ({
    Template: record.templateSlug || "No Template",
    AiResp: record.aiResponse?.split("\n")[0] || "No Response", // Get the first line
    Date: record.createdAt || "No Date",
    Words: record.aiResponse?.split(" ").length ?? 0,
    Copy: "Copy",
  }));
}

export default function HistorySection() {
  const [data, setData] = useState<HistoryTableData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="p-5 shadow-md rounded-md border bg-white dark:bg-gray-800 dark:border-gray-500 flex-col gap-5 my-5 mx-5">
      <h2 className="text-2xl font-bold">History</h2>
      <p className="font-extralight text-sm my-2">
        Your previously generated AI Contents
      </p>
      {loading ? (
        <div className="flex justify-center items-center h-20">
          <p>Loading...</p>
        </div>
      ) : (
        <DataTable columns={columnsHistoryTable} data={data} />
      )}
    </div>
  );
}
