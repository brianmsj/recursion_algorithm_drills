// Split a string based upon a separator (similar to String.prototype.split).

//base case: if str.length === 0; return [];
//recursive case: function will take a string and a separator

function stringSplit(str, separator) {
  if (str.length === 0) {
  return [];
}
  const firstChar = string.charAt(0);
  if (firstChar !== separator) {
    return [firstChar, ...stringSplit(str.slice(1), separator)]
  }
}
stringSplit('hello', '')
