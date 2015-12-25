const request = require('request'),
	fs = require('fs'),
	Q = require('q'),
	_ = require('lodash'),
	cheerio = require('cheerio'),
	csv = require("fast-csv");

// http://www.twse.com.tw/ch/trading/exchange/STOCK_DAY/genpage/Report201511/201511_F3_1_8_0050.php?STK_NO=0050&myear=2015&mmon=11

// csv	.fromPath("stocknumber.csv")
// 	.on("data", function(data){
// 		// console.log(data);
// 	})
// 	.on("end", function(){
// 		console.log("done");
// 	});

csv
   .writeToStream(fs.createWriteStream("my.csv"), [
       ["a", "b"],
       ["a1", "b1"]
   ], {headers: true});

// csv	.writeToPath("data/my.csv", [
// 		["a", "b"],
// 		["a1", "b1"],
// 	], {headers: false})
// 	.on("finish", function(){
// 		console.log("done!");
// 	});


// Q.nfcall(fs.readFile, 'stocknumber.csv', 'utf-8').
// 	then(function(data) {
// 		return _.slice(data.split('\r\n'), 0, data.split('\r\n').length-1 )
// 	}).
// 	fail(function(err) {
// 	    console.error('Error occurred: ' + err);
// 	}).
// 	done(function(res){
// 		// console.log(res);
// 		var code = '0050';
// 		request('http://www.twse.com.tw/ch/trading/exchange/STOCK_DAY/genpage/Report201511/201511_F3_1_8_0050.php?STK_NO=0050&myear=2015&mmon=11', function (error, response, body) {
// 			if (!error && response.statusCode == 200) {
// 				// console.log(body);
// 				var $ = cheerio.load(body);
// 				var arr = $("tr.basic2");
// 				arr = _.slice( arr, 1, arr.length);

// 				$(arr).each(function(i,el){
// 					var $this = $(el);
// 					var td = $("td",$this);
// 					console.log(td.text());
// 				});
// 			}
// 		})
// 	});
