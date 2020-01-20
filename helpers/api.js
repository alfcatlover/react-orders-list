export default {
  get(route, query) {
    console.log('query', query);
    let url = `${process.env.API_ROOT}/${route}`;
    if (query) {
      url += Object.keys(query).reduce((acc, key) => `${acc}${key}=${query[key]}&`, '?')
    }
    return fetch(url);
  },
  post(route, payload) {
    return fetch(`${process.env.API_ROOT}/${route}`, {
      method: 'post',
      body: JSON.stringify(payload),
      headers: {'Content-type': 'application/json'}
    });
  },
  put(route, payload) {
    return fetch(`${process.env.API_ROOT}/${route}`, {
      method: 'put',
      body: JSON.stringify(payload),
      headers: {'Content-type': 'application/json'}
    });
  },
  del(route) {
    return fetch(`${process.env.API_ROOT}/${route}`, {
      method: 'delete'
    });
  }
}
