const request = require('request');
const fs = require('fs');
const Q = require('q');
const _ = require('lodash');
const cheerio = require('cheerio');

// http://www.twse.com.tw/ch/trading/exchange/STOCK_DAY/genpage/Report201511/201511_F3_1_8_0050.php?STK_NO=0050&myear=2015&mmon=11

Q.nfcall(fs.readFile, 'stocknumber.csv', 'utf-8').
	then(function(data) {
		return _.slice(data.split('\r\n'), 0, data.split('\r\n').length-1 )
	}).
	fail(function(err) {
	    console.error('Error occurred: ' + err);
	}).
	done(function(res){
		// console.log(res);
		var code = '0050';
		request('http://www.twse.com.tw/ch/trading/exchange/STOCK_DAY/genpage/Report201511/201511_F3_1_8_0050.php?STK_NO=0050&myear=2015&mmon=11', function (error, response, body) {
			if (!error && response.statusCode == 200) {
				// console.log(body);
				var $ = cheerio.load(body);
				console.log( $(".board_trad").html() );
				// var arr = body.match(/<td>(.+)<\/td>/g);
				// console.log(arr);

			}
		})
	});
