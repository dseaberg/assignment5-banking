/**************************************
 * Executing code
 **************************************/
startApp();



/**************************************
 * Function definitions
 **************************************/

/* Starts the banking app. */
function startApp() {
  let running = true;

  while(running) {
    const input = prompt('Enter a command (\'W\', \'D\', \'B\', \'Q\')');
    const sanitizedInput = sanitize(input);

    switch (sanitizedInput) {
      case 'W':
        withdraw();
        break;
      case 'D':
        deposit();
        break;
      case 'B':
        balance();
        break;
      case 'Q':
        alert('Have a nice day!');
        running = false;
        break;
      default:
        help(input);
        break;
    }
  }
}

/* Clean up the input (e.g. trim, normalize case, ...). */
function sanitize(input) {
  try {
    let sanitizedInput = input.trim();
    sanitizedInput = sanitizedInput.toUpperCase();
    return sanitizedInput;
  } catch (error) {
    console.log('ERROR: bad input: ' + input, error);
    return input;
  }
}

/* Handle the flow for a withdrawal. */
function withdraw() {
  alert('withdrawal flow');
}

/* Handle the flow for a deposit. */
function deposit() {
  alert('deposit flow');
}

/* Handle the flow for a balance check. */
function balance() {
  alert('balance flow');
}

/* Handle the case of an unknown command. */
function help(input) {
  const errorMessage = '\'' + input + '\' is not a valid command. Please try again.';
  alert(errorMessage);
}
