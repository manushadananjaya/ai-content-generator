"use client"
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

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
    cell: ({ row }) => (
      <Button
        onClick={() => navigator.clipboard.writeText(row.getValue("Copy"))}
      >
        Copy
      </Button>
    ),
  },
];