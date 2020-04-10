var chlist = require("../../index");
var html = chlist.getList({
  list_id:"test-id",
  list_type:"ol",
  section_element: "section_element",
  section_header_element: "section_header_element",
  date_element: "date_element",
  entry_element: "entry_element",
  text_content_element: "text_content_element",
  link_element: "link_element",
});

require("fs").writeFileSync(__dirname + "/test.html", html, {encoding:"utf-8",flags:"w"});
