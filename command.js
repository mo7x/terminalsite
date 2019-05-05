var commands = {};

commands.help = () => echo(
    '<strong>cd</strong> - change directory, ../ to go back<br>' +
    '<strong>tree</strong> - show available directories<br>' +
    '<strong>clear</strong> - clear history' +
    'type a file\'s name and it should run if its in the directory.');

commands.tree = () => echo('├───contact<br>' +
    '│   ├───<strong>email.txt</strong><br>' +
    '│   ├───<strong>social-media.txt</strong><br>' +
    '│   ├───<strong>github.txt</strong><br>' +
    '│   └───<strong>pgp-key.txt</strong><br>' +
    '├───<strong>me.txt</strong><br>' +
    '├───misc<br>' +
    '│   └───<strong>duckshooter.exe</strong><br>' +
    '│   └───<strong>lightsout.exe</strong><br>' +
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

        while (dirs[0] === '..') {
            dirs.shift();
            if(cd.length > 0){
              cd.pop();
            }
        } while (dirs[0] === '.') {
            dirs.shift();
        }

        if (dirs[0]) {
            dirs = cd.concat(dirs);
            var file = path;
            var isValid = true;
            for (var i in dirs) {
                file = file[dirs[i]];
                if (!file) {
                  isValid = false
                  break;
                }
            }
            if(!isValid) {
              echo('<strong style = "color:red">error</strong> path doesn\'t exist: ~/' + dirs
                  .join('/'));
              return isValid;
            }
          cd = cd.concat(dirs);
          return isValid;
        }
};
