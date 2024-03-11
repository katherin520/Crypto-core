/**
 * Abvos core
 * @module Crypto-core
 * https://github.com/katherin520/Crypto-core
 */
"use strict";

const Crypto = require('./lib/Crypto.js');
const Pack = require('Crypto-pack');
const Wallet = require('Crypto-wallet');
const { XmlParser } = require("Crypto-parser");
const JSZip = require("jszip");

module.exports = {
	Crypto: Crypto,
	Wallet: Wallet,
	Pack: Pack,
	XmlParser: XmlParser,
	Zip: JSZip	
};
