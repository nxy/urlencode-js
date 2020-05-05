/**
 * Equivalent to php's urlencode
 */

function urlencode(str) {
  let newStr = '';
  const len = str.length;

  for (let i = 0; i < len; i++) {
    let c = str.charAt(i);
    let code = str.charCodeAt(i);

    // Spaces
    if (c === ' ') {
      newStr += '+';
    }
    // Non-alphanumeric characters except "-", "_", and "."
    else if ((code < 48 && code !== 45 && code !== 46) ||
             (code < 65 && code > 57) ||
             (code > 90 && code < 97 && code !== 95) ||
             (code > 122)) {
      newStr += '%' + c.charCodeAt(0).toString(16);
    }
    // Alphanumeric characters
    else {
      newStr += c;
    }
  }

  return newStr;
}