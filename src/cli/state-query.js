const request = require('superagent');

module.exports = async (address, uri) => {
  try {
    const endpoint = uri !== "" && uri ? `${uri}/state?address=${address}` :
      `http://127.0.0.1:8008/state?address=${address}`;
    const response = await request
      .get(endpoint)
      .ok(res => res.status < 300)
      .set('Content-Type', 'application/json')
      .query({
        address
      });
    const {
      data
    } = response.body;
    return data.data;    
  } catch (e) {
    throw e;
  }
};
