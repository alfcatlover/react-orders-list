export default {
  get(route, query) {
    return fetch(`${process.env.API_ROOT}/${route}`, query);
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
