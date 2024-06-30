"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "./DataTableHistory";
import { HistoryTableData, columnsHistoryTable } from "./columnsHistoryTable";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";

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
    <div className="p-5 shadow-md rounded-md border bg-white flex-col gap-5 my-5 mx-5">
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
