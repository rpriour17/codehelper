import './App.css';
import React from 'react'; 
import SideBar from './common/SideBar'

function App() {

  return (
    <div className="App">
      <SideBar/>
    </div>
  );
}

export default App;


// const [code, setCode] = React.useState(
  //   `function add(a, b) {\n  return a + b;\n}`
  // );
  

  // async function onButtonClick() {
  //   const response = await openai.createEdit({
  //     model: "code-davinci-edit-001",
  //     input: code,
  //     instruction: "Add Documentation",
  //   });
  //     setCode(response.data.choices[0].text);
  // }

  // const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//   organization: "org-s16BC4Gc83lTd5qLd3LPNMrL",
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);