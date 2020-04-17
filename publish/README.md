(setq markdown-xhtml-header-content
      "<style type='text/css'>
  .changelog-list{
    width:100%;
    height:130px;
    overflow:scroll;
    resize:vertical; 
  }
</style>")

# npm-chlog-to-html-list
[Changelog](https://keepachangelog.com/) to html list, for embedding it to your html.

## Changelog
<!--changelog-->

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
    <p>Create a Node.js file, require the module.(No need to Instantiate)</p>
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
 //load the module
 var lister = require("chlog-to-html-list");

 //give options as an object
 var list = lister.getList({
    changelog_path:"path_to_changelog.md" 
 });

 //embed the generated list to your html page now.
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
|list_class|string|"changelog-list"|The class name of the list(list_type).|
|list_type|string|"ul"|The list type of the most outer element of the output html.|

## Seeing log
By default the option "verbose" is set to true.
You could also get logs as an array so that you can store them if you want to.
To get the log, just call the "getLog()" method.
Note that an empty log will be returnedd when you call "getLog()" before calling "getList" method.
example:
```
var logs = lister.getLog();
```
## Roadmap
Everything should be fine by 1.0.0.
No further development is being planned.

There can be some updates related to:
 - dependency updates
 - language udpates
 - updates on changelog schemes.

