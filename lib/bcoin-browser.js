/*!
 * bcoin.js - a javascript bitcoin library.
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License).
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

'use strict';

/**
 * A bcoin "environment" which exposes all
 * constructors for primitives, the blockchain,
 * mempool, wallet, etc. It also exposes a
 * global worker pool.
 *
 * @exports bcoin
 * @type {Object}
 */

const bcoin = exports;

/**
 * Set the default network.
 * @param {String} network
 */

bcoin.set = function set(network) {
  bcoin.Network.set(network);
  return bcoin;
};

/*
 * Expose
 */

// Blockchain
bcoin.blockchain = require('./blockchain');
bcoin.chain = require('./blockchain/chain');
bcoin.chainentry = require('./blockchain/chainentry');

// BTC
bcoin.btc = require('./btc');
bcoin.amount = require('./btc/amount');
bcoin.uri = require('./btc/uri');

// Coins
// bcoin.coins = require('./coins');
bcoin.coins = require('./coins/coins');
bcoin.CoinEntry = require('./coins/coinentry');
bcoin.coinview = require('./coins/coinview');

// HD
bcoin.hd = require('./hd');
bcoin.HDPrivateKey = require('./hd/private');
bcoin.HDPublicKey = require('./hd/public');
bcoin.Mnemonic = require('./hd/mnemonic');

// Index
bcoin.indexer = require('./indexer');
bcoin.Indexer = require('./indexer/indexer');
bcoin.ChainClient = require('./indexer/chainclient');
bcoin.TXIndexer = require('./indexer/txindexer');
bcoin.AddrIndexer = require('./indexer/addrindexer');

// Mempool
bcoin.txmempool = require('./mempool');
bcoin.fees = require('./mempool/fees');
bcoin.mempool = require('./mempool/mempool');
bcoin.mempoolentry = require('./mempool/mempoolentry');

// Miner
bcoin.mining = require('./mining');
bcoin.miner = require('./mining/miner');
bcoin.template = require('./mining/template');

// Net
bcoin.net = require('./net');
bcoin.packets = require('./net/packets');
bcoin.Peer = require('./net/peer');
bcoin.Pool = require('./net/pool');

// Node
bcoin.node = require('./node');
bcoin.Node = require('./node/node');
bcoin.FullNode = require('./node/fullnode');
bcoin.SPVNode = require('./node/spvnode');

// Primitives
bcoin.primitives = require('./primitives');
bcoin.address = require('./primitives/address');
bcoin.block = require('./primitives/block');
bcoin.coin = require('./primitives/coin');
bcoin.headers = require('./primitives/headers');
bcoin.input = require('./primitives/input');
bcoin.invitem = require('./primitives/invitem');
bcoin.keyring = require('./primitives/keyring');
bcoin.merkleblock = require('./primitives/merkleblock');
bcoin.mtx = require('./primitives/mtx');
bcoin.outpoint = require('./primitives/outpoint');
bcoin.output = require('./primitives/output');
bcoin.tx = require('./primitives/tx');

// Protocol
bcoin.protocol = require('./protocol');
bcoin.consensus = require('./protocol/consensus');
bcoin.Network = require('./protocol/network');
bcoin.networks = require('./protocol/networks');
bcoin.policy = require('./protocol/policy');

// Script
bcoin.txscript = require('./script');
bcoin.script = require('./script/script');
bcoin.opcode = require('./script/opcode');
bcoin.scriptnum = require('./script/scriptnum');
bcoin.sigcache = require('./script/sigcache');
bcoin.stack = require('./script/stack');
// bcoin.witness = require('./script/witness');

// Utils
bcoin.utils = require('./utils');
bcoin.util = require('./utils/util');

// Wallet
bcoin.wallet = require('./wallet');
bcoin.Walletdb = require('./wallet/walletdb');

// Workers
bcoin.workers = require('./workers');
bcoin.workerpool = require('./workers/workerpool');

// Package Info
bcoin.pkg = require('./pkg');

// Crypto
bcoin.crypto = require('bcrypto')
