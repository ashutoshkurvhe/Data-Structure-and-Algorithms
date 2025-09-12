function palindromNumber(x) {
  if (x < 0) return false; // negative numbers palindrome nahi hote

  let original = x;
  let rev = 0;

  while (x > 0) {
    let digit = x % 10; // last digit
    rev = rev * 10 + digit; // reverse me add karo
    x = Math.floor(x / 10); // last digit remove
  }

  return original === rev;
}

palindromNumber(121);
