
// Retrieve header values from sessionStorage if available
var refererValue = sessionStorage.getItem('hackbar_referer');
var userAgentValue = sessionStorage.getItem('hackbar_user_agent');
var cookieValue = sessionStorage.getItem('hackbar_cookie');

var fields = JSON.parse(decodeURIComponent(post_data));
var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", decodeURIComponent(url));

// Add hidden inputs for headers if they exist
if (refererValue) {
    var refererInput = document.createElement("input");
    refererInput.setAttribute("type", "hidden");
    refererInput.setAttribute("name", "Referer");
    refererInput.setAttribute("value", refererValue);
    form.appendChild(refererInput);
}

if (userAgentValue) {
    var userAgentInput = document.createElement("input");
    userAgentInput.setAttribute("type", "hidden");
    userAgentInput.setAttribute("name", "User-Agent");
    userAgentInput.setAttribute("value", userAgentValue);
    form.appendChild(userAgentInput);
}

if (cookieValue) {
    var cookieInput = document.createElement("input");
    cookieInput.setAttribute("type", "hidden");
    cookieInput.setAttribute("name", "Cookie");
    cookieInput.setAttribute("value", cookieValue);
    form.appendChild(cookieInput);
}

fields.forEach(function(f){
	var input = document.createElement("input");
	input.setAttribute("type", "hidden");
	input.setAttribute("name", f['name']);
	input.setAttribute("value", f['value']);
	// alert(f.name);
	form.appendChild(input);
})
document.body.appendChild(form);

form.submit();

