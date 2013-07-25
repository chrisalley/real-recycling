
// This is the constructor of formValidatorClass.
function formValidatorClass() {
  this.fullName = document.getElementById("feedback_form").full_name;
  this.postalAddress = document.getElementById("feedback_form").postal_address;
  this.emailAddress = document.getElementById("feedback_form").email_address;
  this.phoneNumber = document.getElementById("feedback_form").phone_number;

  this.errorMessage;
  this.validateTextFields = validateTextFields;
  this.validateEmailAddressFormat = validateEmailAddressFormat;
  this.validatePhoneNumberFormat = validatePhoneNumberFormat;
  this.validateMobileNumberFormat = validateMobileNumberFormat;
  this.validateLandlineNumberFormat = validateLandlineNumberFormat;
}

// Checks to see that the full_name and postal_address fields are not blank.
function validateTextFields() {
  if (this.postalAddress.value == "") {
    this.errorMessage = "The postal address field is empty.";
    this.postalAddress.focus();
  }
  var expression = /^[a-zA-Z]+[a-zA-Z\s]/;
  if (expression.test(this.fullName.value) == false) {
    this.errorMessage = "Your full name is not valid.";
    this.fullName.focus();
  }
}

// Checks to see that the email_address field is in the correct format.      
function validateEmailAddressFormat() {
  var expression = /^[0-9a-zA-Z-_\.]+@[0-9a-zA-Z-_\.]+\.[a-z]{2}/i;
  if (expression.test(this.emailAddress.value) == false) {
    this.errorMessage = "Your email address is not valid.";
    this.emailAddress.focus();
  }
}
      
function validateLandlineNumberFormat() {

  // The string matching the expression must contain only numbers.
  var expression = /^[0-9]$/;

  // Checks that the phone number only contains + ( ) space or numbers.
  for (i = 0; i <= (this.phoneNumber.value.length - 1); i++) {
    if ((this.phoneNumber.value[i] != "+") && (this.phoneNumber.value[i] != "(") && (this.phoneNumber.value[i] != ")") && (this.phoneNumber.value[i] != " ")) {
      if (expression.test(this.phoneNumber.value[i]) == false) {
        return false;
      }
    }
  } 

  // Checks that the last 9 digits only contain numbers and spaces or a closing bracket.
  for (i = (this.phoneNumber.value.length - 1); i >= (this.phoneNumber.value.length - 9); i--) {
    if (expression.test(this.phoneNumber.value[i]) == false) {
    
       // If the loop finds a ) that isn't 8 or 9 places from the end of the phone number.
      if ((this.phoneNumber.value[i] == ")") && ((i != (this.phoneNumber.value.length - 8)) && (i != (this.phoneNumber.value.length - 9)))) {
      alert(this.phoneNumber.value[i]+i);
        return false;
      }
      
      // If another character is found besides a number, closing bracket, or a space.
      if ((this.phoneNumber.value[i] != " ") && (this.phoneNumber.value[i] != ")")) {
         return false;
      }
      
    }
  }
  
  // If the number is in (03) format...
  if ((this.phoneNumber.value.indexOf("(") == 0) && (this.phoneNumber.value.indexOf(")") == 3)) {
    
    // Checks that the characters between the ( ) are numbers.
    for (i = 1; i <= 2; i++) {
      if (expression.test(this.phoneNumber.value[i]) == false) {
        return false;
      }
    }
            
  }
  else {
    
    // Checks that the first character is a + symbol.
    if (this.phoneNumber.value.indexOf("+") == 0) {
        
      // Checks that the character between the ( ) is a number.
      if (expression.test(this.phoneNumber.value[4]) == false) {
        return false;
      }
      else {
        
        // Checks that the number after +64 is in brackets.
        if ((this.phoneNumber.value.indexOf("(") != 3) || (this.phoneNumber.value.indexOf(")") != 5)) {
          return false;
        }
        
      }
        
    }
    else {
      
      // Checks that the phone number starts with two numbers
      if ((expression.test(this.phoneNumber.value[0]) == false) || (expression.test(this.phoneNumber.value[1]) == false)) {
        return false;  
      }
      else {
        return true;
      }
        
    }
  }
}

function validateMobileNumberFormat() {

  // The string matching the expression must contain only numbers.
  var expression = /^[0-9]$/;

  // Checks that the number starts with 021, 025, 027, or 029.
  if ((this.phoneNumber.value[0] == "0") && (this.phoneNumber.value[1] == "2")) {
    if ((this.phoneNumber.value[2] == "1") || (this.phoneNumber.value[2] == "5") || (this.phoneNumber.value[2] == "7") || (this.phoneNumber.value[2] == "9")) {
      
      // Checks the number contains only spaces or numbers.
      for (i = 0; i <= (this.phoneNumber.value.length - 1); i++) {
        if ((expression.test(this.phoneNumber.value[i]) == false) && (this.phoneNumber.value[i] != " ")) {
          return false;
        }
      }   
      return true;
    
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
  
}      
      
// Checks to see that the phone_number field is in the correct format, depending on what radio button is selected.
// Not many regular expressions, I value my brain cells...
function validatePhoneNumberFormat() {
  
  // String must only contain + ( ) space or numbers.
  //var expression2 = /^[\(?\)?\s?\+\W]+$/i;
  
  // If Landline or fax is selected.
  if ((document.getElementById("feedback_form").phone_number_type[0].checked == true) || (document.getElementById("feedback_form").phone_number_type[2].checked == true)) {
    if (this.validateLandlineNumberFormat() == false) {
      this.errorMessage = "Your landline or fax number is not valid.";
    }
  }
  
  // If mobile is selected.
  if (document.getElementById("feedback_form").phone_number_type[1].checked == true) {
    if (this.validateMobileNumberFormat() == false) {
      this.errorMessage = "Your mobile number is not valid. Mobile numbers must begin with 021, 025, 027, or 029.";
    }
  }
  
  return true;
     
}

// This function creates an object based on the formValidatorClass and alerts any errors that are found in the form.
function checkForm() {
  var formValidator = new formValidatorClass();
  formValidator.errorMessage = "No Errors";
  formValidator.validatePhoneNumberFormat();
  formValidator.validateEmailAddressFormat();
  formValidator.validateTextFields();
  if (formValidator.errorMessage != "No Errors") {
    alert(formValidator.errorMessage);
    return false;
  }
  else {
    setCookie();
    return true;
  }
}
