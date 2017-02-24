import 'whatwg-fetch';

// 非开发环境时，需要把cookie带给接口服务器。可选：omit same-origin include
const credentials = window.location.hostname === 'localhost' ? '' : 'include';

const Http = {
  get(url,params){
    let formData = [];
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        formData.push(`${key}=${params[key]}`)
      }
    }
    formData = formData.join('&');
    console.log(formData);
    let reqHeaders = new Headers();
    reqHeaders.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    reqHeaders.append('Accept','application/json, text/plain, */*')
    url = !!formData ? `${url}?${formData}` : url;
    console.log(url);
    return fetch(url,{
      method: 'GET',
      headers: reqHeaders,
      credentials: credentials
    }).then(response => response.json());
  },
  post(url, params={}){
    let formData = new FormData();
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        formData.append(key, params[key]);
      }
    }
    return fetch(url,{
      method: 'POST',
      credentials: credentials,
      body: formData
    }).then(response => response.json());
  },
  html(url){
    return fetch(url)
      .then(response => response.text())
  }
}

export default Http;
