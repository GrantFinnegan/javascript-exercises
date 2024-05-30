const palindromes = function (phrase = "") {
    const CHARACTER_ALLOWLIST = '0123456789abcdefghijklmnopqrstuvwxyz';

    //clean up capitalization, whitespace, and punctuation
    phrase = phrase.toLowerCase();

    let cleanedPhrase = "";
    let cleanedReversedPhrase = "";
    for (let i = 0; i < phrase.length; i++) {
        if (CHARACTER_ALLOWLIST.includes(phrase.at(i))) {
            cleanedPhrase = cleanedPhrase + phrase.at(i); //append
            cleanedReversedPhrase = phrase.at(i) + cleanedReversedPhrase; //append in reverse
        }
    }
    return cleanedPhrase === cleanedReversedPhrase;
};

// Do not edit below this line
module.exports = palindromes;
