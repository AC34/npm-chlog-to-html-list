# npm-chlog-to-html-list

Changelog to html list, for embedding it to your html.

## Announcement
Nothing to announce.
## Requirements
 - [Node.js](https://nodejs.org/)
 - [npm](https://www.npmjs.com/)
## Installation

Install it as devDependencies.
```
npm install --save-dev npm-chlog-to-html-list
```
## Usage
<ol>
  <li>
    <p>Create a Node.js file, require your file.</p>
  </li>
  <li>
    <p>Call "getList" method</p>
  </li>
  <li>
    <p>Call getList method.</p>
    <ol>
      <li><p>Set option as an object "{}".</p></li>   
      <li><p>Give options as key-value pairs.</p></li>   
    </ol>
  </li>
  <li>
    <p>Run the script and use the acquired list for your html pages.</p>
  </li>

</ol>

### Blueprint
A very simple blueprint of yoru script may be as below:
```
 var lister = require("chlog-to-html-list");
 var list = lister.getList({
    changelog_path:"path_to_changelog.md" 
 });
 //embed the generated list to your html page.
```
 
## Options
Available options are as follows:

#### General options
|        key        |  type   |    default     | description                                            |
| :---: | :---: | :---: |:--- |
|verbose|boolean|true|Whether to show console outputs during the process.|

#### Options for Paths
|        key        |  type   |    default     | description                                            |
| :---: | :---: | :---: |:--- |
|changelog_path|string|"<span>CHANGELOG.md</span>"|Path to the changelog file(from the root path).|
|package_json_path|string|"package.json"|Path to the package.json file(from the root path).|

#### Options for html outputs
|        key        |  type   |    default     | description                                            |
| :---: | :---: | :---: |:--- |
|list_id|string|"changelog-list"|The id of the list(list_type).|
|list_type|string|"ul"|The list type of the most outer element of the output html.|

## Roadmap
 Everything should be fine by 1.0.0.
No further development is being planned.

 However, there can be some updates related to:
 - dependency updates
 - language udpates
 - updates on changelog schemes.
