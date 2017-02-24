'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  apiDomain: '' // 开发环境API接口域名
};

export default Object.freeze(Object.assign({}, baseConfig, config));
