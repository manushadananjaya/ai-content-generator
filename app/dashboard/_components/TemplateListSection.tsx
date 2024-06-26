import React from 'react'
import templates from '@/app/(data)/Templates'
import TemplateCard from './TemplateCard';

export interface TEMPLATE{
    name: string;
    desc:string;
    icon:string;
    category:string;
    aiPrompt:string;
    slug:string;
    form: {
        label: string;
        field: string;
        name: string;
        required: boolean;
    }[];
}

function TemplateListSection() {
  return (
    <div>
      {templates.map((item:TEMPLATE,index:number) => (
            <TemplateCard key={index} {...item} />
        
        ))}

    </div>
  )
}

export default TemplateListSection
