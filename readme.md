## Synopsis

Small library to connect your node project to [txnhog](https://txnhog.co) for sending transactional email and sms messages.

## Usage

```
const TxnHog = require('txnhog');
var hog = new TxnHog('your-api-key-here');

var message = {
	messageId: 'this-message-id', // this is the id of the message template you created on txnhog
	name: "Shawn Spencer",
	email: "shawn.spencer@psychoffice.co",
	start: "Tuesday the 5th",
	trainer: "Carlton Lassiter",
};
let send = await hog.SendMessage(obj);
```
This will yield this email delivered to the address in the example above.
![txnhog transactional email dashboard](https://txnhog.co/img/result.png)

## Installation

Installation is simple,
```
npm install --save txnhog
```

## License

WTFPL