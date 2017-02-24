'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dist',  // feel free to remove the appEnv property here
  apiDomain: '' //线上环境api域名
};

export default Object.freeze(Object.assign({}, baseConfig, config));
