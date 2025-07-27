import { writeTextFile, BaseDirectory, readTextFile, readDir, remove } from "@tauri-apps/plugin-fs";
import { sep } from "@tauri-apps/api/path";
import { characterObject } from "../types/character";

// ToDO: make this function better 
function useFileSystem() {
 
  async function save(characterObject:characterObject) {
    await writeTextFile(`ttcomp${sep}${characterObject.meta.name}.json`, JSON.stringify(characterObject), {baseDir: BaseDirectory.Document})
  }

  async function load(file: string | undefined) {
    if (!file) return
    const contents = await readTextFile(`ttcomp${sep}${file}`, {baseDir: BaseDirectory.Document});
    const jsonContents = JSON.parse(contents)
    return jsonContents
  }

  async function readFiles() {
    const entries = await readDir('ttcomp',{baseDir: BaseDirectory.Document})
    return entries
  }

  async function deleteFile(file: string | undefined) {
    console.log(file)
    await remove(`ttcomp${sep}${file}`, {baseDir: BaseDirectory.Document})
  }

  return {
    save,
    load,
    readFiles,
    deleteFile
  }
}

export default useFileSystem
