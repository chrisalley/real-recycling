
// Returns the current date in format "21 April, 2005"
function displayDate() {
  var months = new Array();
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";
  var theDate = new Date();
  var dateString = theDate.getDate() + " " + months[theDate.getMonth()] + ", " + theDate.getFullYear();
  return dateString;  
}

// This creates a cookie containing the value of the full_name field.
function setCookie() {
  var expireDate = new Date();
  
  // Cookie expiry date is set to roughly one month.
  expireDate.setTime(expireDate.getTime() + (31 * 24 * 60 * 60 * 1000));
  
  var fullName = document.getElementById("feedback_form").full_name.value;
  document.cookie = "Name=" + fullName + "; expires=" + expireDate.toGMTString();
}

// This function returns the value that the cookie's name equals.
function getCookie() {
  var cookieName = "Name";
  var cookieValue = document.cookie;
  var cookieStartsAt = cookieValue.indexOf(" " + cookieName + "=");
  if (cookieStartsAt == -1) {
    cookieStartsAt = cookieValue.indexOf(cookieName + "=");
  }
  if (cookieStartsAt == -1) {
    cookieValue = null;
  }
  else {
    cookieStartsAt = cookieValue.indexOf("=", cookieStartsAt) + 1;
    var cookieEndsAt = cookieValue.indexOf(";", cookieStartsAt);
    if (cookieEndsAt == -1) {
      cookieEndsAt = cookieValue.length;
    }
    cookieValue = unescape(cookieValue.substring(cookieStartsAt, cookieEndsAt));
  }
  return cookieValue;
}

// Preloads images for the Contact page and checks that a few form fields are
// correct when loading the form.
function preparePage() {
  preloadImages();
  document.getElementById("feedback_form").full_name.value = getCookie();
  document.getElementById("feedback_form").enable_menu.checked = "checked";
}

// Makes sure that all form fields are reset to their defaults. 
function resetForm() {
  document.getElementById("feedback_form").full_name.value = "";
  document.getElementById("feedback_form").preferred_contact_method.disabled = "";
}

// This function enables the preferred_contact_menu depending on if enable_menu is ticked or unticked.
function enableDropDownMenu() {
  var enableMenu = document.getElementById("feedback_form").enable_menu;             
  var preferredContactMethod = document.getElementById("feedback_form").preferred_contact_method;
        
  if (enableMenu.checked == true) { // If the enable_menu checkbox is not checked, enable the preferred_contact_method menu.
    preferredContactMethod.disabled = "";
  }
  else {
    preferredContactMethod.disabled = "disabled";
  }
}
