import { writeTextFile, BaseDirectory, readTextFile, readDir, removeFile } from "@tauri-apps/api/fs";
import { sep } from "@tauri-apps/api/path";
import { characterObject } from "./useCharacterHook";

// ToDO: make this function better 
function useFileSystem() {
 
  async function save(characterObject:characterObject) {
    await writeTextFile(`ttcomp${sep}${characterObject.meta.name}.json`, JSON.stringify(characterObject), {dir: BaseDirectory.Document})
  }

  async function load(file: string | undefined) {
    if (!file) return
    const contents = await readTextFile(`ttcomp${sep}${file}`, {dir: BaseDirectory.Document});
    const jsonContents = JSON.parse(contents)
    return jsonContents
  }

  async function readFiles() {
    const entries = await readDir('ttcomp',{dir: BaseDirectory.Document})
    return entries
  }

  async function deleteFile(file: string | undefined) {
    console.log(file)
    await removeFile(`ttcomp${sep}${file}`, {dir: BaseDirectory.Document})
  }

  return {
    save,
    load,
    readFiles,
    deleteFile
  }
}

export default useFileSystem
