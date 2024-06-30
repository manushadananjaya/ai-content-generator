"use client";
import React, { useEffect, useState } from "react";
import templates from "@/app/(data)/Templates";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  aiPrompt: string;
  slug: string;
  form: {
    label: string;
    field: string;
    name: string;
    required: boolean;
  }[];
}

function TemplateListSection({ userSearchInput }: { userSearchInput: string }) {
  const [templateList, setTemplateList] = useState(templates);

  useEffect(() => {
    if (userSearchInput) {
      const filterData = templates.filter((item: TEMPLATE) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(templates);
    }
  }, [userSearchInput]);

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      {templateList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {templateList.map((item: TEMPLATE, index: number) => (
            <TemplateCard key={index} {...item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-black">Hmm looks like we can&apos;t find it.</div>
      )}
    </div>
  );
}

export default TemplateListSection;
