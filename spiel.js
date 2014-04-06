var farben = [];
var lauf = 0;
var pruef = 0;
var durchgang = 0;
var n_durchgang = 0;
var f = ['#00FF00', '#FF0000', '#0000FF', '#FFFFFF', '#FFFF00', '#999999'];

function st() {
  if (lauf === 0) {
    lauf = 1;
    pruef = 0;
    document.getElementById('farben').firstChild.nodeValue = 'Stop';
    document.getElementById('anweisung').firstChild.nodeValue =
      'Klicke auf Stop, damit Du beginnen kannst, die Farben wiederzugeben!';
    for (i = 0; i < 5; i += 1) {
      document.getElementById('t' + i).style.backgroundColor = f[5];
    }
    durchgang = 0;
    n_durchgang = 0;
    wechsel();
  } else {
    lauf = 0;
    pruef = 1;
    document.getElementById('farben').firstChild.nodeValue = 'Start';
    document.getElementById('anweisung').firstChild.nodeValue =
      'Klicke auf die Farben in der richtigen Reihenfolge, oder auf Start um erneut zu spielen!';
    for (i=0; i<5; i += 1) {
      document.getElementById('t'+i).style.backgroundColor = f[i];
    }
    document.getElementById('farben').style.backgroundColor = f[5];
  }
}

function wechsel() {
  if (lauf !== 1) {
    return;
  }
  var tmp = Math.random();
  durchgang += 1;
  if (tmp >= 0.0 && tmp <= 0.2) {
    farben[durchgang] = 0
  } else if (tmp > 0.2 && tmp <= 0.4) {
    farben[durchgang] = 1;
  } else if (tmp > 0.4 && tmp <= 0.6) {
    farben[durchgang] = 2;
  } else if (tmp > 0.6 && tmp <= 0.8) {
    farben[durchgang] = 3;
  } else if (tmp > 0.8 && tmp <= 1.0) {
    farben[durchgang] = 4;
  } else {
    alert('Fehler: Zufallszahl out of range!');
  }
  document.getElementById('farben').style.backgroundColor = f[farben[durchgang]];
  document.getElementById('anweisung').firstChild.nodeValue = 
    'Klicke auf Stop, damit du beginnen kannst die Farben wiederzugeben! (Du siehst die >' + durchgang + '.< Farbe)';
  window.setTimeout(wechsel, 3000);
}

function color(x) {
  if (pruef !== 1) {
    return;
  }
  n_durchgang += 1;
  if (farben[n_durchgang] !== x) {
    for (i = 0; i < 5; i += 1) {
      document.getElementById('t' + i).style.backgroundColor = f[5];
    }
    document.getElementById('anweisung').firstChild.nodeValue = 
      'Leider flasch! Du hast ' + (n_durchgang - 1) + ' Farben richtig wiedergegeben. Klicke auf Start um erneut zu spielen!';
    pruef = 0;
    return;
  }
  if (n_durchgang === durchgang) {
    for (i = 0; i < 5; i += 1) {
      document.getElementById('t' + i).style.backgroundColor = f[5];
    }
    document.getElementById('anweisung').firstChild.nodeValue =
      'Herzlichen Glückwunsch! Du hast ' + n_durchgang + ' Farben richtig wiedergegeben. Klicke auf Start um erneut zu spielen!';
    pruef = 0;
    return;
  }
  document.getElementById('anweisung').firstChild.nodeValue =
    'Klicke auf die Farben in der richtigen Reihenfolge, oder auf Start um erneut zu spielen! (' + n_durchgang + ' richtig)';
}
