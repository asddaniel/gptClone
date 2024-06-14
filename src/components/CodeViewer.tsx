import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function CodeViewer({codeString, language}:{codeString:string, language:string}) {
   console.log(codeString);
    return <SyntaxHighlighter language={language} style={atelierForestDark}>
    {codeString}
  </SyntaxHighlighter>
}