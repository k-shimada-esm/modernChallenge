let couter = 0;

function doGet() {
  let template = HtmlService.createTemplateFromFile('index');
  template.counter = couter;
  return template.evaluate();
}
