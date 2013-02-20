var main = function () {
  
    var twitter = new ctwitter.CTwitter();
    twitter.stream("statuses/filter", { lang:"en", track:["Zurb Foundation", "Twitter Bootstrap"] }, function (stream) {
        stream.on("data", function (tweet) {
              $("#tweets").prepend("p class = 'response"+tweet.text+"' </p>");
              

        });
    });
}


$(document).ready(main);