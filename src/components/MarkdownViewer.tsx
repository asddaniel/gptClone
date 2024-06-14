import rehypeHighlight from "rehype-highlight"
import Markdown from 'react-markdown'
import CodeViewer from "./CodeViewer";


const renderToHTML = (children:any) => {
    if (Array.isArray(children)) {
        let final = ""
        for (const child of children) {
            final += returnHtml(child)

        }
      return final
    }
    return typeof children === 'string' ? children : '';
  };

  const returnHtml = (element:any)=>{
    // console.log(element)
if(typeof element === 'string'){
    return element
}else{
    
    if(element.hasOwnProperty('props')){
        return renderToHTML(element?.props?.children)
    }
    return ""
    //return returnHtml(element?.props?.children)
}
}

export default function MarkDownViewer ({children, content}:any){
  console.log(children)
    return <div className="prose dark:prose-invert w-full">
       <Markdown
       components={{
        // Use h2s instead of h1s
        
        // Use a component instead of hrs
        code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            console.log(match, children)
           //console.log(inline)
            if(Array.isArray(children)){
                for(const child of children){
                 //   console.log(child)
                }
            }
            const codeString = renderToHTML(children);
            console.log(codeString)
            
            return  match ? (
              <CodeViewer  language={match[1]} codeString={codeString?.toString().replace(/\n$/, '')}  >
                
              </CodeViewer>
            ) : (
                <CodeViewer language={"javascript"} codeString={codeString?.toString().replace(/\n$/, '')}>
              
              </CodeViewer>
            );
          }
      }}
       className={"prose dark:prose-invert lang-js w-full"} rehypePlugins={[rehypeHighlight]}>{content}</Markdown>
    </div>
}