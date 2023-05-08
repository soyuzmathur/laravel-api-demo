class HttpFactory {
  constructor() {
  }

  /** 
    * method - GET, POST, PUT
    * URL
  **/
  async call<T>(method: string, url: string, data?: object, extras = {}): Promise<T> {
    const $res: T = await $fetch(url, { method, body: data, ...extras });
    return $res;
  }
}

export default HttpFactory;