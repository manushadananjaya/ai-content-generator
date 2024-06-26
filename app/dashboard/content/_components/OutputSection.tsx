import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useRef } from "react";

function OutputSection() {
  const editorRef = useRef<any>(null);
  return (
    <div className="bg-white shadow-lg border rounded">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2">
          <Copy className="w-4 h-4"/>
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result will be shown here"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        height="500px"
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown() || "")}
      />
    </div>
  );
}

export default OutputSection;
