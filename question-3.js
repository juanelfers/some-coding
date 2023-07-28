// 3) Apply some refactoring to improve the code of the following function.
// Explain the reasons behind your changes and which benefit they bring into the code.
// -----------------------------------------------------------------------------------

// My version
// -----------------------------------------------------------------------------------

function volumeSetup() {
    // Setup volume unit interface
    const volumeUnit = window.APP.util.getSettings('ticker_vol_unit').toUpperCase();
    const unitIdMap = {
        'FIRSTCCY': '0'
    };

    // Get element
    const element = $(`#tickervolccy_${unitIdMap[volumeUnit] || volumeUnit}`);

    // Check element
    element.prop('checked', true);

    // Override currencies list
    const result = window.APP.util.initCurrenciesList();

    return result;
}

/*
    First, I'd like to mention that it's a problem for me not knowing what the $ function is comming from
    It's probably the $ function from jQuery, yes, but it could also be a custom function that just uses
    querySelector or getElementById.

    I'll suppose it's the second one, and if the element is not found, it returns null (or some falsy value)
    ---------------------------------------------------------------------------------------------------------

    So, the next decision I take is creating "unitIdMap"
    I had to think a little bit about it:
    - do I create 1 key/value pair for each unit/token
    - or do I create a general rule and then I handle the exceptions with "unitIdMap"?

    Of course the 2nd option requires less code and you don't have to add every "unit" to the unitIdMap
    Also, I have in consideration that "FIRSTCCY" is the only exception: of course I could have written
    an if statement or some ".replace"... but it wouldn't look "natural", and why not leave the door open
    to more exceptions to the rule?

    Finally, the key 'FIRSTCCY' uses quotes not because it is required, but in case you add other keys
    with "invalid" characters; you'll need quotes and it would look... a little bit off.

    ---------------------------------------------------------------------------------------------------------

    About this:

    if (element) {
        element.prop('checked', true);
    }

    I would like to note that here is where I realized $ should be the jQuery function...
    but I won't change my first paragraph just to be transparent about the process.

    I would also like to point out that, if it's jQuery, the if statement is actually not required here,
    since $ always returns a (jQuery) instance and calling .prop won't throw an error
    even if the collection is empty. So I just removed the if statement.

    ---------------------------------------------------------------------------------------------------------

    Other changes:

    - "var" for "const": self explanatory. But I'd like to mention that I use "const" rather than "let" to
      let other people know that I won't change this variables values.

    - "var volumeSetup = function" for "function volumeSetup"
      It's not an improvement per-se, but function declarations have the "advantage" of hoisting.
      By the way, using a function before its declaration could go against some conventions and good practices.

    Thanks for reading!
    Cheers!
    Juan
*/

// Original function
// -------------------------------------------------------------------------------
var volumeSetup = function () {
    // setup volume unit interface
    var volumeUnit = window.APP.util.getSettings('ticker_vol_unit').toUpperCase();
    var element = null;
    if (volumeUnit === 'FIRSTCCY') {
        element = $('#tickervolccy_0');
    } else if (volumeUnit === 'USD') {
        element = $('#tickervolccy_USD');
    } else if (volumeUnit === 'BTC') {
        element = $('#tickervolccy_BTC');
    } else if (volumeUnit === 'ETH') {
        element = $('#tickervolccy_ETH');
    }
    if (element) {
        element.prop("checked", true);
    }
    // override currencies list
    var result = window.APP.util.initCurrenciesList()
    return result
}
