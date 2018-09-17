module.exports = function makeExchange(currency) {
  const exchange = {};
  const errorObject = {
    error: "You are rich, my friend! We don't have so much coins for exchange"
  };
  if (currency <= 0) {
    return exchange;
  } else {
    if (currency > 10000) {
      return errorObject;
    } else {
      let h = Math.floor(currency / 50);
      if (h > 0) exchange.H = Math.floor(h);
      let q = Math.floor(currency % 50 / 25);
      if (q > 0) exchange.Q = Math.floor(q);
      let d = Math.floor(currency % 50 % 25 / 10);
      if (d > 0) exchange.D = Math.floor(d);
      let n = Math.floor(currency % 50 % 25 % 10 / 5);
      if (n > 0) exchange.N = Math.floor(n);
      let p = Math.floor(currency % 50 % 25 % 10 % 5);
      if (p > 0) exchange.P = Math.floor(p);
      return exchange;
    }
  }
}
