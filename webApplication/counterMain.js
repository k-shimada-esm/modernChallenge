 function doGet() {
  let template = HtmlService.createTemplateFromFile('index');
  // 引数であるカウンターの開始はゼロ
  template.counter = 0;
  // HTML の表示
  return template.evaluate();
}
