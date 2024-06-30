import React from 'react'
import { DataTable } from './DataTableHistory';
import { HistoryTableData, columnsHistoryTable } from './columnsHistoryTable';

async function getData(): Promise<HistoryTableData[]> {
  // Fetch data from your API here.
  return [
    {
      Template:"WriteCode",
      AiResp:"Write code to find max number",
      Date:"2024/06/24",
      Words:567,
      Copy:"Copy"
    },
    {
        Template:"Blog Topic Ideas",
        AiResp:"Here is some topic ideas",
        Date:"2024/06/24",
        Words:234,
        Copy:"Copy"
    }
  ];
}


export default async function HistorySection() {
    const data = await getData()
  return (
    <div className="p-5 shadow-md rounded-md border bg-white flex-col gap-5 my-5 mx-5">
      <h2 className="text-2xl font-bold">History</h2>
      <p className="font-extralight text-sm my-2">
        Your previously generated Ai Contents
      </p>
      <DataTable columns={columnsHistoryTable} data={data} />
    </div>
  );
}


