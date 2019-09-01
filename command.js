var commands = {};

commands.help = () => echo(
  '<strong>cd</strong> - change directory, ../ to go back<br>' +
  '<strong>tree</strong> - show available directories<br>' +
  '<strong>clear</strong> - clear history<br>' +
  'type a file\'s name and it should run if its in the directory.');

commands.tree = () => echo('├───contact<br>' +
  '│   ├───<strong>email.txt</strong><br>' +
  '│   ├───<strong>social-media.txt</strong><br>' +
  '│   ├───<strong>github.txt</strong><br>' +
  '│   └───<strong>pgp-key.txt</strong><br>' +
  '├───<strong>me.txt</strong><br>' +
  '├───misc<br>' +
  '│   └───<strong>duckshooter.exe</strong><br>' +
  '└───projects<br><br>');
//todo add a recursive algorthim to do this

commands.clear = () => {
  var lines = document.getElementsByClassName('line');
  while (lines[0]) {
    lines[0].parentNode.removeChild(lines[0]);
  }
};

commands.cd = function(args) {
  var dirs = (args + '')
    .split('/');
  var cpath = cd.length > 0 ? getLocation(cd) : path;
  for (var dir of dirs) {
    if (dir === '..') {
      dirs.shift();
      if (cd.length > 0) {
        cd.pop();
      }
    } else if (dir === '.' || dir === "") {
      dirs.shift();
    } else {
      if (dir in cpath) {  
        try {
          getLocation(cd)[dir]();
        } catch (err){
          if(err.message === 'getLocation(...)[dir] is not a function'){
            cd.push(dir);
            cpath = cpath[dir]
          }
        }
      } else {
        echo('<strong style = "color:red">error</strong> path doesn\'t exist: ~/' + cd
          .join('/') + (cd.length > 0 ? "/":"") + dir);
      }

    }

  }
};