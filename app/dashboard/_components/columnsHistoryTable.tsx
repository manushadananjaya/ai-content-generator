"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
        <Button onClick={handleCopy} className="w-20">
          {copied ? "Copied!" : "Copy"}
        </Button>
      );
    },
  },
];
