## Purpose
The purpose of this is to automate the planning of ones day by generating a todo-list each morning. Prior to using this you should do some thinking on your own of what you want to include in a day, mainly for morning and nighttime routines

## How to Use
- For the start and end of days:
  Have two separate notes that have a new-line-seperated descriptions of things you need to do in the morning/night. Tag the notes that include new line seperated #morning-ritual or #night-ritual

- For general things you need to do in life:
  Not sure about the format yet, I'm debating whether or not to have a single note with brief descriptions of what to do and a priority value next to it OR to say each task should be a different note and just tag them as a task, which sounds easier to code a generation but harder on the user.

## Dependencies
Generated Quest-Logs use the Tasks community plugin formatting


## Future Plans
- formalization of format of Tasks List
- integration of Tasks with basic priority
- formalization for the format of a Goal
- integration of priority for Tasks/Goals with more thought on the interaction/conversion value
- weekly tracking to make days well rounded


## Releasing new releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
- Publish the release.

> You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.
> The command will bump version in `manifest.json` and `package.json`, and add the entry for the new version to `versions.json`

## Adding your plugin to the community plugin list

- Check https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md
- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

## Manually installing the plugin
- `npm run dev` if checking changes, this will make  the main.js file too
- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## Improve code quality with eslint (optional)
- [ESLint](https://eslint.org/) is a tool that analyzes your code to quickly find problems. You can run ESLint against your plugin to find common bugs and ways to improve your code. 
- To use eslint with this project, make sure to install eslint from terminal:
  - `npm install -g eslint`
- To use eslint to analyze this project use this command:
  - `eslint main.ts`
  - eslint will then create a report with suggestions for code improvement by file and line number.
- If your source code is in a folder, such as `src`, you can use eslint with this command to analyze all files in that folder:
  - `eslint .\src\`

## API Documentation

See https://github.com/obsidianmd/obsidian-api
