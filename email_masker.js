function maskEmail(email) {
  const atSignIndex = email.indexOf("@");
  const emailDomain = email.slice(atSignIndex)
  const emailWithoutDomain = email.slice(0, atSignIndex)
  const toAsterik = emailWithoutDomain.slice(1, -1);
  const asterikedStr = "*".repeat(toAsterik.length);
  const maskedEmail = email[0] + asterikedStr + emailWithoutDomain.slice(-1) + emailDomain;
  return maskedEmail;
}
let email = "apple.pie@example.com";
console.log(maskEmail(email));


