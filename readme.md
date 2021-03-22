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
	phone: "951-555-7743",
	start: "Tuesday the 5th",
	trainer: "Carlton Lassiter",
};
let send = await hog.SendMessage(obj);
```

## Installation

Installation is simple,
```
npm install --save txnhog
```

## License

WTFPL