var caret = '<span id="caret"></span>';

document.addEventListener('click', function(e) {
    document.getElementById('input')
        .focus();
});

var input = document.getElementById('input')

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      process(input.value.split(/\s|' '/g));
    }
});

var currentLine = document.getElementsByClassName('line')[0];
var currentFile = path;
var cd = [];

function terminal(inp) {

    sInp = inp.value.replace(/\s/g, '&nbsp;');
    //workaround
    if(sInp.substr(0, 6) == '&nbsp;'){
      sInp = sInp.substr(6);
    }
    currentLine.innerHTML = 'guest@m0.wtf:~/' + cd.join('/') + '&nbsp;$&nbsp;' + sInp + caret;
}

function process(argv) {

    while(argv[0] === ''){
      argv.shift();
    }

    if(argv[0]){
      try{
        getLocation(cd)[argv[0]]();
      }catch{
          try{
            command = argv.shift();
            commands[command](argv);
          }
          catch(err){
            if(err.message == 'commands[command] is not a function'){
              echo('\n<strong>' + command + '</strong> : command not found');
            }else{
              throw err;
            }
          }
        }
    }

    currentLine.innerHTML = currentLine.innerHTML.replace(/<\/?span[^>]*>/g, '');

    currentLine = document.createElement('div');
    currentLine.className = 'line';
    document.body.appendChild(currentLine);

    input.value = '';
}

function echo(msg) {

    var newLine = document.createElement('div');
    newLine.className = 'line';
    document.body.appendChild(newLine);
    newLine.innerHTML = msg;

}
