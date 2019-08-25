var path = {};
// -----------------------------------------------------------------------------
path.contact = {

  'email.txt' : () => echo('mohamad@m0.wtf'),

  'social.txt' : () => echo('instagram: @<strong>m0.wtf</strong>'),

  'github.txt' : () => echo('github: <strong>m0hdas</strong<br>check out this website\'s repo!'),

  'pgp-key.txt' : () => {
                  var pgpcopy = document.createElement('textarea');
                  pgpcopy.value = pgpkey.replace('<br>', '');
                  pgpcopy.setAttribute('readonly', '');
                  pgpcopy.style.position = 'absolute';
                  pgpcopy.style.left = '-9999px';
                  document.body.appendChild(pgpcopy);
                  pgpcopy.select();
                  document.execCommand('copy');
                  document.body.removeChild(pgpcopy);
                  echo('Key copied to clipboard!');
                  document.getElementById('input').focus();}
};
// -----------------------------------------------------------------------------
path.misc = {
  'duckshooter.exe' : () => echo('<iframe id ="duckshooter" src="https://editor.p5js.org/mohamadalsadhan/embed/HyUr4-wYQ"></iframe>')
};
// -----------------------------------------------------------------------------
path.projects =
  () => {echo('This path seems to be empty');
        setTimeout(echo('...<strong>admin</strong> seems to be lazy'), 1250);};
// -----------------------------------------------------------------------------
path['me.txt'] = () => echo('I\'m currently a student at Exeter Maths School, I like maths and computer science and I try hard to look interesting.');
// -----------------------------------------------------------------------------
function getLocation(c){
  c = [...c];
  var loc = path;
  while(c.length > 0){
    loc = loc[c.shift()];
  }
  return loc;
}
// -----------------------------PGP-KEY VAR-------------------------------------
var pgpkey = '-----BEGIN PGP PUBLIC KEY BLOCK-----\n' +
    'mQENBFxxhlgBCADc2pQGfpnOuHakCjCSXAGa5SD451TqMunzdiRXyPtAQfXB5u/h\n' +
    'MX53qsZ05OwWrexnXV2v/rWtbXtERs2p6ML+GS/nCVzUZ5ml+kjtI5jW4h0XSei1\n' +
    'VqAgOYoNt8Z5ew+lfhPV3VhIYdqnF9/GCyyh9WZCl1zJXqXgJoOr9x1ap7Vtcp5L\n' +
    'cWCQ4gsMMaM/sUEsI0b6pD/SU2Re3EuupAZ+dgBEfhHHEZxt9J94bx4pr1BCya2G\n' +
    'EOo0vSp8i4CBNVGS4/le3KT9dnaA6LM10fosT9+gqm9qAUxHuk/Qb7VLPorUolhc\n' +
    'gXLAWkaT17uosi7+5j+zAy1TZ1X2c2lH9bFdABEBAAG0GG1vaGFtYWQgPG1vaGFt\n' +
    'YWRAbTAud3RmPokBTgQTAQgAOBYhBMNlTAcQleJcrPH0zQrm1oQimdrWBQJccYZY\n' +
    'AhsDBQsJCAcCBhUICQoLAgQWAgMBAh4BAheAAAoJEArm1oQimdrWOTIH/3Lvq02Z\n' +
    'e7WT29WtqtqwIPxeqhgUEBw/WiWTLm7xzQS+8urHWpoXeOFDDvVLe3v3cBY+IWV5\n' +
    'pQP3/ICFLVzHszg+gltoA3YnuwpRE9AXrjNKdP6hO6EC3IgThnlT9KjanoqScVkj\n' +
    'namvmtHE0X3Fdos9in8MK2CjLMOAgG3jj+TvsO5cwUmE6gRZAUScGycHx4z7nJjO\n' +
    '5xFGJe13D15kGg/W9kdxyD7zZGTtEHJLhxVSjegaU8qHhAvJo9pYcsq2s2I8aWnw\n' +
    'k6uSd0sKyG5dfHslyjSwBKpgLLG8no/vrKJeO8rF9Zqh++R4HLTan4cYNCZcoMbm\n' +
    'yWSHTggcY2601Wi5AQ0EXHGGWAEIANlDVxOMgMLIYA3RqITmydoKrqq6FNBurh0d\n' +
    'pHYNxWLZPIc6NYhpGz9GJrQtSrWySpucWGMq4URFeBrGwN91fKm+JIJZILLcoliv\n' +
    '/BmLBJETlHHvk0sUTGXXrFYxSvdj6svT+m4TmC+ZE2pKXK7HY3DnV9nUyHRQ6pqZ\n' +
    'lnA6j9YQ/jQT0bXGHJNnBW8Y749rC1tzBiMIRK66EsZgcVe1VXTltnpRCXU4zQXQ\n' +
    'DMAfqPIaqxjOUGZt7XAbbImvVemtAdD/Tq302clCVxYUJBq6U9UMiRW0ajuiNrtk\n' +
    '5shFah2oqlle4uC7apccbVhqetkzFhFIZWxKGO7K8LS+GskbMvkAEQEAAYkBNgQY\n' +
    'AQgAIBYhBMNlTAcQleJcrPH0zQrm1oQimdrWBQJccYZYAhsMAAoJEArm1oQimdrW\n' +
    '2YAH/i4haRXOsZbihWVm9FpAt5NXt+AYsN1oWYemxPYJlkTOKA+gkqhCif3A3Mwj\n' +
    'WbUI509MdAQX5LqKJU3rO8NrikN/g0EOrXI2+qDTTnJECPzusGtkTUufmY5SBeJA\n' +
    'YRFerBMr/frr6msJwAk19s3t07x1am2iBix2ac2dD5KrDWIzfyw2Kze53m14vOTo\n' +
    'dqF5ch36nGqqeggABlc/ef8BLrDN4e9UwV5NxMKq5dNQRb2Wx5FIyo0UhcLw7c1K\n' +
    '5kigiKRviaU9NbhO+V6jtJMcjWlmkXqfzlX55hxLWu8q55zpM7oQsXPc2wffrpzg\n' +
    'Hhja8lbw5EH9Gt/3J167K/Ysl0Q=\n' +
    '=dTgb\n' +
    '-----END PGP PUBLIC KEY BLOCK-----\n';
