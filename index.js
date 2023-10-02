const name = "Joe";
const height = 74;
const message = `${name} is ${height} inches tall`;

module.exports = { name, height, message };

function writeCards(names, event) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const thankYouMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    thankYouMessages.push(thankYouMessage);
  }

  return thankYouMessages;
}

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
