"use client";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";
import { useState } from "react";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = templates.find(
    (template) => template.slug === props.params["template-slug"]
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("Your Result will be shown here");

  const GenerateAiContent = async (formData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAiPrompt = JSON.stringify({ prompt: SelectedPrompt, ...formData });
    console.log(FinalAiPrompt);

    const result = await chatSession.sendMessage(FinalAiPrompt);
    setAiOutput(result.response.text());
    console.log(result.response.text());
    setLoading(false);
  };

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button>
          {" "}
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5 ">
        {/*Form Section*/}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAiContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          {/*Output Section*/}
          <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
