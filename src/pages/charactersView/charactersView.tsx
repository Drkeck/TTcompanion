import React, { useEffect } from "react"
import useFileSystem from "../../hooks/filesystem"
import { FileEntry } from "@tauri-apps/api/fs";
import './index.css'

// ToDo: fetch files and display them for selection
function CharactersView({load, newChar}: {load:(arg: string | undefined) => void, newChar: () => void}) {
  const {readFiles, deleteFile} = useFileSystem()
  const [files, setFiles] = React.useState<FileEntry[]>()  

  async function fileRender() {
    const fetch = await readFiles(); 
    setFiles(fetch)
  }

  async function deleteSelectedFile(file: FileEntry) {
      await deleteFile(file.name)
      setFiles(prev => prev?.filter(stateFile => file.path != stateFile.path))
    
  }

  useEffect(() => {
    fileRender()
  },[])

  return (
    <div>
      <div>
        {files?.map((file) => (
          <div key={file.name} className="metasRow">
           <div onClick={() => load(file.name)} className="box character">
             <h1>{file.name?.split('.')[0]}</h1>
           </div>
            <div className="box delete" onClick={() => deleteSelectedFile(file)}>
              <h1>
               X 
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="box addChar" onClick={() => newChar()}>+</h1>
      </div>
    </div>
  )
}
export default CharactersView
