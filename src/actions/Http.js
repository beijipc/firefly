import 'whatwg-fetch';
const Http = {
  options(type){
    // 非开发环境时，需要把cookie带给接口服务器。可选：omit same-origin include
    let credentials = window.location.hostname === 'localhost' ? '' : 'include';
    // 设置请求头
    let reqHeaders = new Headers();
    if(type==='json'){
      reqHeaders.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
      reqHeaders.append('Accept','application/json, text/plain, */*')
    }
    return {
      credentials: credentials,
      headers: reqHeaders
    };
  },
  parse(data){
    let _data = [],
        o;
    for (o in data) {
        if ((data[o] instanceof Array) && data[o].constructor == Array ) {
            _data.push(o + '=' + data[o].join(','));
        } else {
            _data.push(o + '=' + data[o]);
        }
    }
    if (_data.length > 0) {
      return _data.join('&');
    }
    return '';
  },
  get(url,params){
    let query = this.parse(params);
    let opt = Object.assign(
      {method:'GET'},
      this.options('json')
    );
    url = !!query ? `${url}?${encodeURIComponent(query)}` : url;
    return fetch(url,opt).then(response => response.json());
  },
  post(url, params={}){
    let opt = Object.assign(
      {method:'POST'},
      {body: JSON.stringify(params)},
      this.options('json')
    );
    return fetch(url,opt).then(response => response.json());
  }
}

export default Http;
