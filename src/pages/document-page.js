
import SideBar from "../common/SideBar";
import CodeEditor from '@uiw/react-textarea-code-editor';
import React from 'react';
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
organization: "org-s16BC4Gc83lTd5qLd3LPNMrL",
apiKey: "",
});
const openai = new OpenAIApi(configuration);

export default function DocumentPage() {


    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
      );

    async function onButtonClick() {
        const response = await openai.createEdit({
            model: "code-davinci-edit-001",
            input: code,
            instruction: "Add Documentation",
        });
        setCode(response.data.choices[0].text);
    }
    
    return (

        <div className="flex">
        <aside>
            <SideBar/>
        </aside>
        <main className="w-3/4 p-4">
            <h1 class="text-4xl font-bold tracking-tight sm:text-right sm:text-6xl flex justify-center">Document Your Code</h1>
         <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center flex justify-center">Add Comments, Descriptions, Make your Code More Readable.</p> 
            <div className="bg-gray-300 p-4 rounded-lg shadow-lg">
                    <CodeEditor
                value={code}
                language="py"
                placeholder="Please enter Python code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                fontSize: 12,
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
                />
            </div>
            <button onClick={onButtonClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Comments
                </button>
        </main>
        </div>

    );
  }