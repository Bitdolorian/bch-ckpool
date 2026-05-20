module.exports = {
  apps: [{
    name: 'bitcoin-cash',
    script: '/home/YOURPATH/bch-ckpool/bin/bitcoind',
    args: '-datadir=/home/YOURPATH/bch-ckpool/data -daemon=0',
    interpreter: 'none',
    autorestart: true,
    log_type: 'json'
  }]
}

// change YOURPATH to your actual directory
