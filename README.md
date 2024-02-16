# TTcompanion
> Lets make a Table Top Companion app that usese the file system.. shall we?

This App's purpous was to fullfil an idea i had when it came to making and editing character data, as a lot of other existing programs will do something similar but not allow you to save the character data in a way that is beneficial to their users essentially locking them in to a use experience that is anywhere from "*meh*" to "*good enough*"

One bit I wanted to focus on with this app was data storage.   
too many apps will not allow you anywhere near the data it needs to store often obfuscating it with databases or online connections, TTcompanion doesn't aim to do this as I believe the user should be in control of backing up and transfering their files.

## moving forward
not to say that this app will always function with an offline only mentality, it very well could be (and is potentially planed to) expanded to allow fetching of specific data.   

Much of this app is built with "small incriments" so updates may be far between depending on how often Im actually commiting changes and pushing.
some of these updates may seem bigger in nature just due to having a lot of "changes" in a single commit but do know I am usually operating in smaller changes to gradually build up to a larger funcioning app.

## built with
> Tauri, React and Typescript in Vite.

### Tauri?
> why not Electron?

I chose Tauri for a few reasons
- overall performance of the application
- to test out the dev experience on Tauri
- something different, as i have used Electron in a previous project (albiet an older version of Electron)

Tauri boasts being more lightweight than a solution like electron, and while they may be right Electron did pave the way for developers to make more multi-platform apps without having to make platform specific changes.  
Tauri also gives me access to Rust if i needed to do something that Javascript (or typescript in this case) isn't really equiped to deal with well. (plus added experience with rust **when** i do use it)

Learning new technologies and trying new things always open yourself up to challanging what you thought you knew.
