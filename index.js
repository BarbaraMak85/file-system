var fs = require('fs');
var colors = require('colors');


fs.appendFile('./text.txt', '\nTekst, który zapiszemy w pliku tekst.txt', function(err) {
    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!'.blue);
});

fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log(data);
})

fs.readdir('.', function(err, files) {
    if (err) throw err;
    fs.writeFile('./filelist.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano!');
    });
});