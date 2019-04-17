const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const beautify = require('js-beautify').js_beautify
const apiTemplate = fs.readFileSync(path.join(__dirname, './template/api.hbs'), 'utf-8')
const methods = fs.readFileSync(path.join(__dirname, './template/methods.hbs'), 'utf-8')
const method = fs.readFileSync(path.join(__dirname, './template/method.hbs'), 'utf-8')
Handlebars.registerPartial('methods', methods)
Handlebars.registerPartial('method', method)
Handlebars.registerHelper('toLowerCase', function (word) {
  return word.toLowerCase()
})
Handlebars.registerHelper('brackets', function (word) {
  return `{${word}}`
})


function Split(methods) {
  var list = [];
  var defaultTag = CreateTagMethods("default");
  list.push(defaultTag);
  methods.forEach(element => {
    if (element.tags && element.tags.length > 0) {
      element.tags.forEach(tag => {
        var tagData = list.find(x => x.tag == tag);
        if (!tagData) {
          tagData = CreateTagMethods(tag);
          list.push(tagData);
        }
        tagData.methods.push(element)
      })
    } else {
      defaultTag.methods.push(element)
    }
  });
  return list;
}

function CreateTagMethods(tagName) {
  return {
    tag: tagName,
    methods: []
  }
}
module.exports = function CreateFileData(data) {
  var result = [];
  var list = Split(data.methods);
  list.filter(x => x.methods.length > 0).forEach(x => {
    data.methods = x.methods;
    let template = Handlebars.compile(apiTemplate)(data)
    template = beautify(template, {
      indent_size: 2,
      max_preserve_newlines: -1
    })
    result.push({
      tag: x.tag,
      template: template
    })
  })
  return result
}
