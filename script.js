$(document).ready(function(){ //receives notice that page has been fully loaded

  $.get(`sentence.html`, function(response){ //starts the AJAX GET request
    //the first parameter is the URL with the DATA (normally and API  URl I assume)
    //the second parameter is a function that handles the response
    $(`#sentences`).html(response);
  });

  $.get(`this_doesnt_exist.html`, function(data){
    //this will not be called beacuse the source (html file) doesnt exist
    doSomethingGood();
  }).fail(function(error){
    //this is called when an error occurs
    console.log(`Something went wrong ${error.statusText}`);
  });

  let url =
  'https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078';
  $.get(url).done(function(data){
    console.log(`Done`);
    console.log(data);
  })

});
