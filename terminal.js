var commandHistory = [];
var cmd = document.getElementById('cmd');

function terminal(inp){
  sInp = inp.value.replace(/\s/g, '&nbsp;');
  cmd.innerHTML = 'guest@m0.wtf:/$&nbsp;' + sInp + '<span id="caret"></span>';
}
