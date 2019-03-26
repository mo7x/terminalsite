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
var cd = [];

function terminal(inp) {

    sInp = inp.value.replace(/\s/g, '&nbsp;');
    //pesky workaround
    if(sInp.substr(0, 6) == '&nbsp;'){
      sInp = sInp.substr(6);
    }

    currentLine.innerHTML = 'guest@m0.wtf:~/' + cd.join('/') + '&nbsp;$&nbsp;' + sInp + caret;
}

function process(argv) {

    if(argv[0] == ''){
      argv.shift();
    }

    if (argv[0] === 'help') {

        echo('<strong>cd</strong> - change directory<br>' +
            '<strong>tree</strong> - show available directories<br>' +
            '<strong>clear</strong> - clear history')

    } else if (argv[0] === 'tree') {

        echo('├───contact<br>' +
            '│   ├───<strong>email.txt</strong><br>' +
            '│   ├───<strong>social-media.txt</strong><br>' +
            '│   ├───<strong>github.txt</strong><br>' +
            '│   └───<strong>pgp-key.txt</strong><br>' +
            '├───<strong>me.txt</strong><br>' +
            '├───misc<br>' +
            '│   └───<strong>duckshooter.exe</strong><br>' +
            '│   └───<strong>lightsout.exe</strong><br>' +
            '└───projects<br><br>');

    } else if (argv[0] === 'cd') {
        if (argv[1]) {

            while (argv[1][0] === '/') {
                argv[1] = argv[1].substr(1);
            }

            var dirs = argv[1].split('/');

            if (dirs[0]) {

                if (dirs[0] === '..') {
                    cd.pop();
                } else if (['contact', 'misc', 'projects'].includes(dirs[0]) && cd.length === 0) {

                    cd.push(dirs[0]);

                    if (dirs[0] == 'projects') {

                        echo('This path seems to be empty')
                        setTimeout(echo('...<strong>admin</strong> seems to be lazy'), 1250);

                    }
                } else {
                    echo('<strong style = "color:red">error</strong> path doesn\'t exist: ~/' + cd.concat(dirs)
                        .join('/'));
                }

            }
        }
    } else if (argv[0] === 'clear') {

        var lines = document.getElementsByClassName('line');

        while (lines[0]) {
            lines[0].parentNode.removeChild(lines[0]);
        }

    } else if (cd.length > 0) {
        if (cd[0] === 'contact') {
            switch (argv[0]) {
                case 'email.txt':
                    echo('mohamad@m0.wtf');
                    break;
                case 'social-media.txt':
                    echo('instagram: @<strong>m0.wtf</strong>');
                    break;
                case 'github.txt':
                    echo('github: <strong>m0hdas</strong<br>check out this website\'s repo!');
                    break;
                case 'pgp-key.txt':
                    echo(pgpkey);
                    var pgpcopy = document.createElement('textarea');
                    pgpcopy.value = pgpkey.replace('<br>', '');
                    pgpcopy.setAttribute('readonly', '');
                    pgpcopy.style.position = 'absolute';
                    pgpcopy.style.left = '-9999px';
                    document.body.appendChild(pgpcopy);
                    pgpcopy.select();
                    document.execCommand('copy');
                    document.body.removeChild(pgpcopy);
                    break;
          }
        }else if(cd[0] === 'misc' && argv[0] === 'lightsout.exe'){
            echo('<iframe id ="lightsout" src="https://editor.p5js.org/mohamadalsadhan/embed/bjOzsPLLt"></iframe>');
        }else if(cd[0] === 'misc' && argv[0] === 'duckshooter.exe'){
            echo('<iframe id ="duckshooter" src="https://editor.p5js.org/mohamadalsadhan/embed/HyUr4-wYQ"></iframe>');
        }

    } else if (argv[0] === 'me.txt' && cd.length === 0) {
        echo('I\'m a student uuuuhhhhhhh. idk what to say really i enjoy programming,' +
            'math and complaining i guess <br>there\'s really not a lot about me. ' +
            '<br>How about you tell me about yourself look at contact directory for contact info.')
    } else if (argv[0] === 'go' && argv[1] === 'crazy') {

        echo('<strong style = "color:red">go stupid :P</strong>');

    } else if (argv[0]) {

        echo('\n<strong>' + argv[0] + '</strong> : command not found');

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

var pgpkey = '-----BEGIN PGP PUBLIC KEY BLOCK-----<br>' + '<br>' +
    'mQENBFxxhlgBCADc2pQGfpnOuHakCjCSXAGa5SD451TqMunzdiRXyPtAQfXB5u/h<br>' +
    'MX53qsZ05OwWrexnXV2v/rWtbXtERs2p6ML+GS/nCVzUZ5ml+kjtI5jW4h0XSei1<br>' +
    'VqAgOYoNt8Z5ew+lfhPV3VhIYdqnF9/GCyyh9WZCl1zJXqXgJoOr9x1ap7Vtcp5L<br>' +
    'cWCQ4gsMMaM/sUEsI0b6pD/SU2Re3EuupAZ+dgBEfhHHEZxt9J94bx4pr1BCya2G<br>' +
    'EOo0vSp8i4CBNVGS4/le3KT9dnaA6LM10fosT9+gqm9qAUxHuk/Qb7VLPorUolhc<br>' +
    'gXLAWkaT17uosi7+5j+zAy1TZ1X2c2lH9bFdABEBAAG0GG1vaGFtYWQgPG1vaGFt<br>' +
    'YWRAbTAud3RmPokBTgQTAQgAOBYhBMNlTAcQleJcrPH0zQrm1oQimdrWBQJccYZY<br>' +
    'AhsDBQsJCAcCBhUICQoLAgQWAgMBAh4BAheAAAoJEArm1oQimdrWOTIH/3Lvq02Z<br>' +
    'e7WT29WtqtqwIPxeqhgUEBw/WiWTLm7xzQS+8urHWpoXeOFDDvVLe3v3cBY+IWV5<br>' +
    'pQP3/ICFLVzHszg+gltoA3YnuwpRE9AXrjNKdP6hO6EC3IgThnlT9KjanoqScVkj<br>' +
    'namvmtHE0X3Fdos9in8MK2CjLMOAgG3jj+TvsO5cwUmE6gRZAUScGycHx4z7nJjO<br>' +
    '5xFGJe13D15kGg/W9kdxyD7zZGTtEHJLhxVSjegaU8qHhAvJo9pYcsq2s2I8aWnw<br>' +
    'k6uSd0sKyG5dfHslyjSwBKpgLLG8no/vrKJeO8rF9Zqh++R4HLTan4cYNCZcoMbm<br>' +
    'yWSHTggcY2601Wi5AQ0EXHGGWAEIANlDVxOMgMLIYA3RqITmydoKrqq6FNBurh0d<br>' +
    'pHYNxWLZPIc6NYhpGz9GJrQtSrWySpucWGMq4URFeBrGwN91fKm+JIJZILLcoliv<br>' +
    '/BmLBJETlHHvk0sUTGXXrFYxSvdj6svT+m4TmC+ZE2pKXK7HY3DnV9nUyHRQ6pqZ<br>' +
    'lnA6j9YQ/jQT0bXGHJNnBW8Y749rC1tzBiMIRK66EsZgcVe1VXTltnpRCXU4zQXQ<br>' +
    'DMAfqPIaqxjOUGZt7XAbbImvVemtAdD/Tq302clCVxYUJBq6U9UMiRW0ajuiNrtk<br>' +
    '5shFah2oqlle4uC7apccbVhqetkzFhFIZWxKGO7K8LS+GskbMvkAEQEAAYkBNgQY<br>' +
    'AQgAIBYhBMNlTAcQleJcrPH0zQrm1oQimdrWBQJccYZYAhsMAAoJEArm1oQimdrW<br>' +
    '2YAH/i4haRXOsZbihWVm9FpAt5NXt+AYsN1oWYemxPYJlkTOKA+gkqhCif3A3Mwj<br>' +
    'WbUI509MdAQX5LqKJU3rO8NrikN/g0EOrXI2+qDTTnJECPzusGtkTUufmY5SBeJA<br>' +
    'YRFerBMr/frr6msJwAk19s3t07x1am2iBix2ac2dD5KrDWIzfyw2Kze53m14vOTo<br>' +
    'dqF5ch36nGqqeggABlc/ef8BLrDN4e9UwV5NxMKq5dNQRb2Wx5FIyo0UhcLw7c1K<br>' +
    '5kigiKRviaU9NbhO+V6jtJMcjWlmkXqfzlX55hxLWu8q55zpM7oQsXPc2wffrpzg<br>' +
    'Hhja8lbw5EH9Gt/3J167K/Ysl0Q=<br>' +
    '=dTgb<br>' +
    '-----END PGP PUBLIC KEY BLOCK-----<br>';
