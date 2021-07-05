import { request } from 'undici'

class HttpClient {
  constructor({ endpoint }) {
    this.endpoint = endpoint;
  }

  async get() {
    return await request(this.endpoint)
  }
}

export default HttpClient;
