let caret = '<span id="caret"></span>';

var currentLine = document.getElementsByClassName('line')[0];
currentLine.innerHTML = 'guest@m0.wtf:/$&nbsp;' + caret;

function terminal(inp){

  if(inp.value[inp.value.length -1] == '\n'){

    var argv = inp.value.substr(0, inp.value.length -1).split(' ');

    inp.value = '';

    process(argv);
  }

  else {

    sInp = inp.value.replace(/\s/g, '&nbsp;');
    currentLine.innerHTML = 'guest@m0.wtf:/$&nbsp;' + sInp + caret;

  }
}

function process(argv){
  /*
  if(COMMANDS.includes(argv[0])){
    //..  @todo
  }
  */
  if(argv[0]){

    echo('\n<strong>' + argv[0] + '</strong> : command not found');

  }

  currentLine.innerHTML = currentLine.innerHTML.replace(/<\/?span[^>]*>/g,'');

  currentLine = document.createElement('div');
  currentLine.className = 'line';
  currentLine.innerHTML = 'guest@m0.wtf:/$&nbsp;' + caret;
  document.body.appendChild(currentLine);

}

function echo(msg){

  var newLine = document.createElement('div');
  newLine.className = 'line';
  document.body.appendChild(newLine);
  newLine.innerHTML = msg;

}
