var request = require('request');
var cheerio = require('cheerio');

request('https://www.sympla.com.br/eventos/brasilia-df',function(err, res, body) {
    if (err) console.log('Erro:' + err);
    var $ = cheerio.load(body);

    $('<div class="events-grind">...</div>').each(function() {
       titulo = $('.event-box-link', '#col-xs-12 col-sm-6 col-md-4 single-event-box').text()
       console.log(titulo + 'aaaa');
    })
    ;})
