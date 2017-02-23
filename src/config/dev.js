'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  apiDomain: ''
};

export default Object.freeze(Object.assign({}, baseConfig, config));
