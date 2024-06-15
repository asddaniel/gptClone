import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {  useState } from 'react';
import { useCopyToClipboard } from 'usehooks-ts'


export default function CodeViewer({codeString, language}:{codeString:string, language:string}) {

  const [isCopied, setiscopied] = useState(false);
  const [copiedText, copy] = useCopyToClipboard()

  const handleCopy = (text: string)  => {
    console.log(text)
    copy(text)
      .then(() => {
        console.log('Copied!', { text })
        setiscopied(true)
        setTimeout(()=>setiscopied(false), 3000)
      })
      .catch(error => {
        console.error('Failed to copy!', error)
      })
  }
   //console.log(codeString);
    return <div>
      <div className="bg-white dark:bg-neutral-700 border dark:border-neutral-600 p-1 rounded-t-lg translate-y-6 flex justify-between w-full  text-sm">
        <span>
        {language}
        </span>
      
      {!isCopied ?<span  className='cursor-pointer flex gap-2' onClick={()=>{handleCopy(codeString); console.log("copied")}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>
      copy code
      </span>:<span className='flex gap-2'>
        Copied
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
       
        </span>}
      </div>
      <SyntaxHighlighter language={language} style={atelierForestDark}>
    {codeString}
  </SyntaxHighlighter>
    </div>
}