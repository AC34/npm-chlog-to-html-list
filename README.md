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
1. Create a Node.js file, require your file first.
2. call getList method
<ol>
  <li>
    <p>Load the module.</p>
  </li>
  <li>
    <p>Call getList method.</p>
    <ol>
      <li><p>Set option as an object "{}".</p></li>   
      <li><p>Give options as key-value pairs.</p></li>   
    </ol>
  </li>
</ol>
  3. run the script by,
  4. Use the list in your html pages.

### Blueprint
A very simple blueprint of yoru script may be as below:
```
 var lister = require("chlog-to-html-list");
 var list = lister.getList({
    
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
|changelog_path|string|"<span>CHANGELOG.md</span>"|
|package_json_path|string|"package.json"|

#### Options for html outputs
|        key        |  type   |    default     | description                                            |
| :---: | :---: | :---: |:--- |
|list_id|string|"changelog-list"|The id of the list(list_type).|
|list_type|string|"ul"|The list type of the most outer element of the output html.|

## Roadmap
 - Everything should be fine by 1.0.0.
No further development has been planned.
 - However, there can be some updates related to:
 - dependency updates
 - language udpates
 - updates on changelog schemes.
