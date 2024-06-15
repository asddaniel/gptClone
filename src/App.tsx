import { useState } from 'react'
import { Tooltip, Drawer } from '@material-tailwind/react'
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import { Divider, Switch } from '@nextui-org/react';
import MarkDownViewer from './components/MarkdownViewer';
// import useTypewriter from "react-typewriter-hook"

const exempleMarkdown = `## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

\`\`\`sh
npm install react-markdown
\`\`\`

In Deno with ['esm.sh'][esmsh]:

\`\`\`js
import Markdown from 'https://esm.sh/react-markdown@9'
\`\`\`

In browsers with ['esm.sh4'][esmsh]:

\`\`\`html
<script type="module">
  import Markdown from 'https://esm.sh/react-markdown@9?bundle'
</script>
\`\`\` 
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level \`parserOptions\` property like this:

\`\`\`js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
\`\`\`

- Replace \`plugin:@typescript-eslint/recommended\` to \`plugin:@typescript-eslint/recommended-type-checked\` or \`plugin:@typescript-eslint/strict-type-checked \`
- Optionally add \`plugin:@typescript-eslint/stylistic-type-checked \`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add \`plugin:react/recommended\` & \`plugin:react/jsx-runtime\` to the \`extends\` list
`;

function App() {
 const [toggleMenu, setToggleMenu] = useState(true);
 const [userRequest, setUserRequest] = useState("");
 const [loading, setloading] = useState(false);
 const [iaresult, setiaResult] = useState("");
//  const writer = useTypewriter(iaresult)
 let intervalref = null;

 const generate = ()=>{
//setiaResult(exempleMarkdown)
let generated = ""
for(let i=0; i<exempleMarkdown.length; i++){
 
  //setiaResult(generated)
        setTimeout(()=>{
          setiaResult(generated)
          generated += exempleMarkdown[i];
          console.log(generated)
        }, 100*(i/8));
}
 }
 

  return (
    <>
    <Drawer open={toggleMenu} {...{overlay:false} as any} className='shadow-none  bg-neutral-100  dark:bg-neutral-900' >
    <div className=" h-full w-full  col-span-2  transition">
    
            <div className="sidebar transition py-1 mt-8 pt-8 p-1 px-4 overflow-x-auto bg-neutral-100  dark:bg-neutral-900 h-full">
              <div className="p-1 flex gap-4  items-center">
                  <svg width="15" height="15" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"  role="img"><text x="-9999" y="-9999">ChatGPT</text><path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor">
                    </path>
                    </svg>
                    Chat GPT
              </div>
              <div className="p-1 flex gap-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" fill="none" viewBox="0 0 24 24" className="icon-md"><path fill="currentColor" fill-rule="evenodd" d="M6.75 4.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.5 6.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M17.25 4.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M13 6.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M6.75 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.5 17.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M17.25 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M13 17.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0" clip-rule="evenodd">
                </path></svg>
                <span>Explore GPTs</span>
              </div>
              <div className="py-5"></div>
              <h1>previous 30 days</h1>
            </div>
          </div>
    </Drawer>
        <div className="app  w-screen h-screen transtition">
          <div className="   col-span-2  transition">
            <div className="absolute z-[9999] p-2 px-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-lg top-4" onClick={()=>setToggleMenu(!toggleMenu)}>
            <Tooltip content={toggleMenu?"close sidebar":"open Sidebar"} placement="top">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-neutral-500">
              <path fill="currentColor" fill-rule="evenodd" d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" clip-rule="evenodd">
              
              </path>
            </svg>
            </Tooltip>
            </div>
           
          </div>
            <div className={"header translate-y-2 cursor-pointer absolute z-[9999] top-2 flex gap-2 items-center  transition transition-all "+(toggleMenu?"translate-x-52":"translate-x-16")}>
              <Tooltip content={"new chat"}>
                  <div className="p-2 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-lg inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="icon-xl-heavy text-neutral-500"><path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path></svg>
                  </div>
              </Tooltip>
              <Popover placement="bottom" showArrow={true} color='default' shadow='sm' className='dark:bg-neutral-800'>
                  <PopoverTrigger>
                    <Button variant='light' className='text-neutral-500 font-semibold text-lg flex gap-1'>
                      <span>Chat GPT</span>
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md text-token-text-tertiary"><path fill="currentColor" fill-rule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clip-rule="evenodd"></path></svg>
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='dark:bg-neutral-800 dark:rounded-lg dark:border dark:border-neutral-700 rounded-lg'>
                    <div className="px-1 py-1 w-[22rem] dark:bg-neutral-800  dark:text-neutral-200">
                          <div className="text-small  w-full mb-1 font-bold  dark:hover:bg-neutral-700 hover:bg-neutral-100 cursor-pointer p-3 rounded-lg flex items-center  gap-2">
                              <span className='rounded-full p-2 bg-neutral-100  dark:bg-neutral-700 rounded'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-4 w-4 text-token-text-primary"><path fill="currentColor" d="M15.11 14.285a.41.41 0 0 1 .78 0c.51 2.865.96 3.315 3.825 3.826.38.12.38.658 0 .778-2.865.511-3.315.961-3.826 3.826a.408.408 0 0 1-.778 0c-.511-2.865-.961-3.315-3.826-3.826a.408.408 0 0 1 0-.778c2.865-.511 3.315-.961 3.826-3.826Zm2.457-12.968a.454.454 0 0 1 .866 0C19 4.5 19.5 5 22.683 5.567a.454.454 0 0 1 0 .866C19.5 7 19 7.5 18.433 10.683a.454.454 0 0 1-.866 0C17 7.5 16.5 7 13.317 6.433a.454.454 0 0 1 0-.866C16.5 5 17 4.5 17.567 1.317"></path><path fill="currentColor" fill-rule="evenodd" d="M7.001 4a1 1 0 0 1 .993.887c.192 1.7.701 2.877 1.476 3.665.768.783 1.913 1.3 3.618 1.452a1 1 0 0 1-.002 1.992c-1.675.145-2.849.662-3.638 1.452-.79.79-1.307 1.963-1.452 3.638a1 1 0 0 1-1.992.003c-.152-1.706-.67-2.851-1.452-3.62-.788-.774-1.965-1.283-3.665-1.475a1 1 0 0 1-.002-1.987c1.73-.2 2.878-.709 3.646-1.476.767-.768 1.276-1.916 1.476-3.646A1 1 0 0 1 7 4Zm-2.472 6.998a6.1 6.1 0 0 1 2.468 2.412 6.2 6.2 0 0 1 1.037-1.376 6.2 6.2 0 0 1 1.376-1.036 6.1 6.1 0 0 1-2.412-2.469 6.2 6.2 0 0 1-1.053 1.416 6.2 6.2 0 0 1-1.416 1.053" clip-rule="evenodd"></path></svg>
                              </span>
                              <div className="flex flex-col  font-normal w-full">
                                <span>ChatGPT Plus</span>
                                <span className="text-xs text-neutral-500">Our smartest model & more</span>
                                
                              </div>
                              <span className="p-2 py-1 rounded-2xl bg-white dark:bg-neutral-800 dark:border-neutral-700  border ml-2">Upgrade</span>
                          </div>

                            <div className="text-small font-bold dark:hover:bg-neutral-700 hover:bg-neutral-100 cursor-pointer p-3 rounded-lg flex items-center   gap-2">
                              <span className='rounded-full p-2 bg-neutral-100  dark:bg-neutral-700 rounded'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-4 w-4 text-token-text-primary"><path fill="currentColor" fill-rule="evenodd" d="M12 7.42a22 22 0 0 0-2.453 2.127A22 22 0 0 0 7.42 12a22 22 0 0 0 2.127 2.453c.807.808 1.636 1.52 2.453 2.128a22 22 0 0 0 2.453-2.128A22 22 0 0 0 16.58 12a22 22 0 0 0-2.127-2.453A22 22 0 0 0 12 7.42m1.751-1.154a25 25 0 0 1 2.104 1.88 25 25 0 0 1 1.88 2.103c.316-.55.576-1.085.779-1.59.35-.878.507-1.625.503-2.206-.003-.574-.16-.913-.358-1.111-.199-.199-.537-.356-1.112-.36-.58-.003-1.328.153-2.205.504-.506.203-1.04.464-1.59.78Zm3.983 7.485a25 25 0 0 1-1.88 2.104 25 25 0 0 1-2.103 1.88 13 13 0 0 0 1.59.779c.878.35 1.625.507 2.206.503.574-.003.913-.16 1.111-.358.199-.199.356-.538.36-1.112.003-.58-.154-1.328-.504-2.205a13 13 0 0 0-.78-1.59ZM12 18.99c.89.57 1.768 1.03 2.605 1.364 1.026.41 2.036.652 2.955.646.925-.006 1.828-.267 2.5-.94.673-.672.934-1.575.94-2.5.006-.919-.236-1.929-.646-2.954A15.7 15.7 0 0 0 18.99 12a15.6 15.6 0 0 0 1.364-2.606c.41-1.025.652-2.035.646-2.954-.006-.925-.267-1.828-.94-2.5-.672-.673-1.575-.934-2.5-.94-.919-.006-1.929.235-2.954.646-.838.335-1.716.795-2.606 1.364a15.7 15.7 0 0 0-2.606-1.364C8.37 3.236 7.36 2.994 6.44 3c-.925.006-1.828.267-2.5.94-.673.672-.934 1.575-.94 2.5-.006.919.235 1.929.646 2.955A15.7 15.7 0 0 0 5.01 12c-.57.89-1.03 1.768-1.364 2.605-.41 1.026-.652 2.036-.646 2.955.006.925.267 1.828.94 2.5.672.673 1.575.934 2.5.94.92.006 1.93-.235 2.955-.646A15.7 15.7 0 0 0 12 18.99m-1.751-1.255a25 25 0 0 1-2.104-1.88 25 25 0 0 1-1.88-2.104c-.315.55-.576 1.085-.779 1.59-.35.878-.507 1.625-.503 2.206.003.574.16.913.359 1.111.198.199.537.356 1.111.36.58.003 1.328-.153 2.205-.504.506-.203 1.04-.463 1.59-.78Zm-3.983-7.486a25 25 0 0 1 1.88-2.104 25 25 0 0 1 2.103-1.88 13 13 0 0 0-1.59-.779c-.878-.35-1.625-.507-2.206-.503-.574.003-.913.16-1.111.359-.199.198-.356.537-.36 1.111-.003.58.153 1.328.504 2.205.203.506.464 1.04.78 1.59Z" clip-rule="evenodd"></path></svg>
                              </span>
                              <div className="flex flex-col  font-normal w-full">
                                <span>ChatGPT </span>
                                <span className="text-xs text-neutral-500">Great for everyday tasks</span>
                                
                              </div>
                              <span className="p-2 py-1  ml-2  w-16 dark:text-black"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" fill="none" viewBox="0 0 24 24" className="icon-md"><path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m14.076-4.068a1 1 0 0 1 .242 1.393l-4.75 6.75a1 1 0 0 1-1.558.098l-2.5-2.75a1 1 0 0 1 1.48-1.346l1.66 1.827 4.032-5.73a1 1 0 0 1 1.394-.242" clip-rule="evenodd"></path></svg></span>
                            </div>
                            <Divider className='dark:bg-neutral-700'></Divider>
                            <div className="text-small mt-2 font-bold   dark:hover:bg-neutral-700 hover:bg-neutral-100 cursor-pointer p-2 rounded-lg flex items-center   gap-2">
                              <span className='rounded-full p-2  rounded'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0"><path fill="currentColor" fill-rule="evenodd" d="M10.974 3.252a1 1 0 0 1-.746 1.201 7.74 7.74 0 0 0-3.876 2.24 1 1 0 1 1-1.458-1.37 9.74 9.74 0 0 1 4.878-2.817 1 1 0 0 1 1.202.746m2.052 0a1 1 0 0 1 1.202-.746 9.74 9.74 0 0 1 4.878 2.818 1 1 0 1 1-1.458 1.37 7.74 7.74 0 0 0-3.876-2.24 1 1 0 0 1-.746-1.202M3.91 8.514a1 1 0 0 1 .67 1.246A7.8 7.8 0 0 0 4.25 12c0 .774.113 1.53.325 2.25a1 1 0 0 1-1.92.564A10 10 0 0 1 2.25 12c0-.978.144-1.924.413-2.817a1 1 0 0 1 1.246-.669m16.182 0a1 1 0 0 1 1.246.67c.269.892.413 1.838.413 2.816a10 10 0 0 1-.406 2.813 1 1 0 0 1-1.919-.564A8 8 0 0 0 19.75 12a7.8 7.8 0 0 0-.328-2.24 1 1 0 0 1 .669-1.246m-.982 8.768a1 1 0 0 1 .086 1.412c-1.293 1.462-3.006 2.551-4.955 3.033a1 1 0 1 1-.48-1.941c1.53-.379 2.895-1.24 3.938-2.418a1 1 0 0 1 1.411-.086m-12.937-.008a1 1 0 0 1 .293 1.384L5.593 20H10a1 1 0 1 1 0 2H3.75a1 1 0 0 1-.838-1.545l1.876-2.887a1 1 0 0 1 1.384-.294" clip-rule="evenodd"></path></svg>
                              </span>
                              <div className="flex flex-col  font-normal w-full">
                                <span>Temporary Chat </span>
                              
                                
                              </div>
                              <span className="p-2 py-1  ml-2  w-16">
                                <Switch size='sm' color='default' />
                              </span>
                            </div>
                    </div>
                  </PopoverContent>
              </Popover>
            </div>
            <div className={"col-span-8  p-6 h-full  absolute transition overflow-x-auto overflow-y-hidden  dark:bg-neutral-800 transition-all duration-500 h-full p-2  "+(toggleMenu ? "w-[77%] translate-x-[29%]" : "w-full")}>
                  
                  <div className="w-full h-full p-2  flex justify-center max-h-screen overflow-y-auto -translate-y-16">
                     <MarkDownViewer content={iaresult}></MarkDownViewer>
                  </div>
                  <div className="py-24"></div>
                <div className="w-full sticky bottom-0">
                <div className='flex rounded-[5rem] p-1  bg-slate-100 dark:bg-neutral-700 bottom-0 fixed mb-8 w-[54rem] gap-2 justify-between px-2 items-center'>
                      <Popover placement="bottom" showArrow={true} color='default' className='p-0'>
                          <PopoverTrigger>
                            <span className="p-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z" clip-rule="evenodd"></path></svg>
                            </span>
                          </PopoverTrigger>
                          <PopoverContent className='dark:bg-neutral-800 dark:border dark:border-neutral-700'>
                            <div className="px-0 py-2 dark:bg-neutral-800">
                            <div className="px-0 py-1 w-[20rem]">
                                  <div className="text-small  w-full mb-1 font-bold hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer p-2 py-1 rounded-lg flex items-center  gap-2">
                                      <span className='rounded-full p-2  rounded'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0"><path fill="#0066DA" d="m3.511 18.427.882 1.535c.183.323.447.576.756.761l3.15-5.492H2c0 .357.092.715.275 1.038z"></path><path fill="#00AC47" d="M12 8.77 8.85 3.276c-.31.184-.574.438-.757.761L2.274 14.192c-.18.316-.275.674-.275 1.039h6.3z"></path><path fill="#EA4335" d="M18.85 20.723c.308-.185.572-.438.755-.761l.367-.635 1.752-3.058c.184-.323.275-.68.275-1.038h-6.3l1.34 2.654z"></path><path fill="#00832D" d="m11.998 8.77 3.15-5.493A2 2 0 0 0 14.118 3H9.878c-.367 0-.722.104-1.03.277z"></path><path fill="#2684FC" d="M15.698 15.23h-7.4l-3.15 5.493c.31.185.665.277 1.031.277h11.638a2.1 2.1 0 0 0 1.031-.277z"></path><path fill="#FFBA00" d="m18.815 9.115-2.91-5.077a2.1 2.1 0 0 0-.756-.761L12 8.769l3.7 6.462h6.289c0-.358-.092-.716-.275-1.039z"></path></svg>
                                      </span>
                                      <div className="flex flex-col  font-normal w-full">
                                        <span>Connect to Google Drive</span>
                                        
                                        
                                      </div>
                                      
                                  </div>

                                    <div className="text-small font-bold hover:bg-neutral-100  dark:hover:bg-neutral-700 cursor-pointer p-2 py-1 rounded-lg flex items-center   gap-2">
                                      <span className='rounded-full p-2  rounded'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0"><path fill="#0364B8" d="m7.824 7.353 3.849 2.305 2.293-.965a3.7 3.7 0 0 1 1.728-.295A5.73 5.73 0 0 0 5.358 6.67l.058-.001a4.56 4.56 0 0 1 2.408.683"></path><path fill="#0078D4" d="M7.824 7.353a4.56 4.56 0 0 0-2.407-.683l-.059.001a4.582 4.582 0 0 0-3.701 7.202l3.394-1.428 1.508-.635 3.36-1.414 1.754-.738z"></path><path fill="#1490DF" d="M15.694 8.398a3.71 3.71 0 0 0-1.727.295l-2.294.965.665.398 2.18 1.306.95.57 3.253 1.947a3.725 3.725 0 0 0-3.027-5.481"></path><path fill="#28A8EA" d="m15.47 11.932-.952-.57-2.18-1.306-.665-.398-1.754.738-3.36 1.414-1.508.634-3.394 1.429a4.58 4.58 0 0 0 3.76 1.963h10.026a3.72 3.72 0 0 0 3.278-1.957z"></path></svg>
                                      </span>
                                      <div className="flex flex-col  font-normal w-full">
                                        

                                        <Tooltip className="z-[9999]" content={<div>Tooltip</div>}>
                                        <span>Connect to Microsoft One Drive </span>
                                        </Tooltip>
                                      
                                        
                                      </div>
                                      
                                    </div>
                                    <Divider className='my-2 dark:border-neutral-700 dark:bg-neutral-700 w-full'></Divider>
                                    <div className="text-small mt-2 font-bold hover:bg-neutral-100  dark:hover:bg-neutral-700 cursor-pointer p-1 rounded-lg flex items-center   gap-2">
                                      <span className='rounded-full p-2  rounded'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0"><path fill="currentColor" fill-rule="evenodd" d="M18.032 5.024C17.75 5 17.377 5 16.8 5h-5.3c-.2 1-.401 1.911-.61 2.854-.131.596-.247 1.119-.523 1.56a3 3 0 0 1-.953.954c-.441.275-.964.39-1.56.522l-.125.028-2.512.558A1 1 0 0 1 5 11.5v5.3c0 .577 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085C6.25 19 6.623 19 7.2 19H10a1 1 0 1 1 0 2H7.161c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167A18 18 0 0 1 3 16.838V11c0-2.075 1.028-4.067 2.48-5.52C6.933 4.028 8.925 3 11 3h5.839c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356V10a1 1 0 1 1-2 0V7.2c0-.577 0-.949-.024-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085M5.28 9.414l2.015-.448c.794-.177.948-.225 1.059-.294a1 1 0 0 0 .318-.318c.069-.11.117-.265.294-1.059l.447-2.015c-.903.313-1.778.874-2.518 1.615-.741.74-1.302 1.615-1.615 2.518M17 15a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2z" clip-rule="evenodd"></path></svg>
                                      </span>
                                      <div className="flex flex-col  font-normal w-full">
                                        <span>Upload from Computer </span>
                                      
                                        
                                      </div>
                                      
                                    </div>
                            </div>
                            </div>
                          </PopoverContent>
                      </Popover>

                    <textarea value={userRequest} onInput={(e)=>setUserRequest((e.target as HTMLTextAreaElement).value)} className=" outline-none w-[85%] bg-transparent h-6" placeholder='Message ChatGPT'></textarea>
                    <span onClick={()=>generate()} className={"p-1 text-white font-bold  rounded-full aspect-square px-2 "+(userRequest.length>0 ?" bg-neutral-900 dark:bg-neutral-300 cursor-pointer dark:hover:bg-neutral-200 dark:text-neutral-900 hover:bg-neutral-800":"bg-neutral-200 text-white dark:text-neutral-900 dark:bg-neutral-500")}>
                    {!loading ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className="icon-2xl"><path fill="currentColor" fill-rule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clip-rule="evenodd">
                      </path>
                    </svg>:<span className='p-1 bg-neutral-900 aspect-square h-3 w-3 inline-block'></span>}
                    </span>
                </div>
                </div>
                
            </div>

        </div>
    </>
  )
}

export default App
