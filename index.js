'use strict';
const got = require('got');

/**
 * Initialize & send transactional messages
 * @param {string} apiKey
 * @param {object} incoming
 * @return {string}
 */


function TxnHog(apiKey) {
	if (!(this instanceof TxnHog)) return new TxnHog(apiKey);
	this.initialize(apiKey);
}
	
TxnHog.prototype = {
	initialize: function(apiKey) {
		this.apiKey = apiKey;
	},

	SendMessage: async function doStuff(incoming) {	
		try {
			incoming.apiKey = this.apiKey;
			const {body} = await got.post('https://txnhog.co/txn/api/' + incoming.messageId, {
				json: incoming,
				responseType: 'json'
			});
			return body;
		} catch(err) {
			return {status: "error", payload: err}
		}
	}
};

module.exports = TxnHog;