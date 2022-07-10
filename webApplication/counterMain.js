let Couter = 0;

function doGet() {
  let template = HtmlService.createTemplateFromFile('index');
  return template.evaluate();
}

function setValue(counter) {
  Counter = counter;
}

function getValue() {
  return Counter;
}
