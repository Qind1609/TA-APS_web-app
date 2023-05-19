const reactAppPrefix = 'REACT_APP_';

const env = process.env;

const config = {};

Object.entries(env).forEach(([key, value]) => {
  if (!key.indexOf(reactAppPrefix)) {
    config[key.replace(reactAppPrefix, '')] = value;
  }
});

export default config;