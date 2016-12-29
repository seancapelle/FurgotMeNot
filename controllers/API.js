$(document).ready(function(){
// API Calling Button
// var token = "string";
var key = "184c4ed26af892afee19463962a7e898";
var secret = "d9b3989942d5e0696da6939d055b7298";
// https://www.petfinder.com/developers/api-docs

	$('#catButton').on('click', function() {

        //for (i=1; i <= 10; i++)
        // {
        // sessionToken();
        // //cat();
        // }
				console.log("cat button")


				search();
    });

function search(){

	// var queryURL = "http://api.petfinder.com/auth.getToken?key="+key+"&sig="+signature;

//Version 1
	var queryURL = "http://api.petfinder.com/my.method?key=" + key + "&token=d02c141226516bfe4a942f49350e2672&sig=" + signature;

	$.ajax({url: queryURL, method: 'GET'})
			.done(function(response) {

					console.log(response);

			});

//Version JSONP
	$.getJSON('http://api.petfinder.com/my.method?format=json&key=12345&callback=?')
		.done(function(petApiData) { alert('Data retrieved!'; })
		.error(function(err) { alert('Error retrieving data!');
	});

//VERSION 3
	var queryURL = "http://api.petfinder.com/my.method?format=json&key=12345&callback=?";

	$.ajax({url: queryURL, method: 'GET'})
			.done(function(response) {

					console.log(response);

			});

}
//.http://api.petfinder.com/auth.getToken?key=12345
    //http://api.petfinder.com/auth.getToken?key=12345
// if (token === "string") {
//         var queryURL = "http://api.petfinder.com/auth.getToken?key="+key+"&sig="+signature;
//
//         $.ajax({url: queryURL, method: 'GET'})
//             .done(function(response) {
//
//
//                 console.log(response);
//
//             });
//         }

});

// cat = function() {
//       //
//         var queryURL = "http://api.petfinder.com/pet.getRandom?key=184c4ed26af892afee19463962a7e898&animal=cat";
//         //"http://api.petfinder.com/subsystem.method";

//         //"http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=parrot";


//         $.ajax({url: queryURL, method: 'GET'})
//         //request body would contain key=12345&arg1=foo&token=67890&sig=abcdef
//             //
//             .done(function(response) {


//                 console.log(response.data.fixed_height_downsampled_url);

//                 var img = response.data.fixed_height_downsampled_url;
//                 var imgDiv = $("#images");

//                 // imgDiv.html("<img  src=" + img +">");

//                 var jQueryImgTag = $("<img>");
//                 jQueryImgTag.attr("src", img);
//                 console.log(jQueryImgTag)
//                 imgDiv.append(jQueryImgTag);
//             });
//         }
//    })

//API Key:  184c4ed26af892afee19463962a7e898
//API Secret:  d02c141226516bfe4a942f49350e2672
//API Status:  Active
