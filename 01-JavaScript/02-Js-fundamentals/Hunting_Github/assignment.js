
$(document).ready(function(){
	$("#clickMe").click(function(){
		$.get("https://api.github.com/codingdojo-mean-03-19/arberiesinani", displayName)
		console.log("This works");

		function displayName(data){
			console.log(data);
			$("#showName").append("<li>" + data.name + "</li>");
		}
	})
})