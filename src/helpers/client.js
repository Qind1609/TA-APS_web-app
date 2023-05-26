import axios from 'axios';
import config from 'config';
import { constants } from './constants';

const { API_END_POINT } = config;
const { statusCode } = constants.api;

class Client {
  constructor(opt = {}) {
    this._defaultOptions = { timeout: 60000 };
    this._opt = Object.assign(this._defaultOptions, opt);
    this._request = axios.create(this._opt);
    this._allowMethods = ['get', 'post', 'put', 'delete'];
  }

  // @private
  _reset() {
    this._request = axios.create(this._defaultOptions);
  }

  // @private
  _update(opt) {
    this._request = axios.create(Object.assign(this._opt, opt));
  }

  // @private
  _verifyApi(path, method) {
    if (!path && !path.trim()) {
      // path is required
      return new Error('Path is required.');
    }

    if (!!method && this._allowMethods.indexOf(method.toLowerCase()) === -1) {
      return new Error(`ERR: ${method} not allowed, only allow get, post, put, delete.`);
    }

    return null;
  }

  async api({ path, method, params, data, headers, responseType, host = 'http://192.168.32.106:1609' }) {
    // verify
    const error = this._verifyApi(path, method);
    if (error) throw error;

    // init path, headers, method
    let _path = path;
    const _headers = headers;
    let _method = method;

    // add '/' to path if missing
    if (_path[0] !== '/') {
      _path = `/${_path}`;
    }

    // use v1 version
    _path = `${host}${path}`;

    if (_path.indexOf('?') !== -1) _path += `&_t=${Date.now()}`;
    else _path += `?_t=${Date.now()}`;

    // check method
    if (!_method) _method = 'get';

    const response = await this._request.request({
      url: _path,
      method: _method,
      headers: _headers,
      responseType,
      params,
      data
    });

    return response;
  }

  /**
   * @description this fn is wrapper of fn api above
   *  catch err -> get res from err or make new res and return res
   */
  async request({ path, method, params, data, headers, host, responseType }) {
    try {
      const res = await this.api({ path, method, params, data, headers, host, responseType });
      return res;
    } catch (err) {
      const { response } = err;
      // check response from err
      if (!response) {
        return {
          status: statusCode.INTERNAL_SERVER_ERROR,
          data: { message: err.message }
        };
      }

      if (!response.data) response.data = {};

      return response;
    }
  }

  async sendRequest({ path, method, params, data, headers }) {
    try {
      const res = await this.api({ path, method, params, data, headers });
      return res.data;
    } catch (err) {
      const { response } = err;
      const responseData = response
        ? {
            ...response.data,
            statusCode: response.status
          }
        : {
            statusCode: statusCode.INTERNAL_SERVER_ERROR,
            message: err.message
          };
      return Promise.reject(responseData);
    }
  }

  baseQuery() {
    return async ({ url, method, params, data, host, responseType = 'json' }) => {
      try {
        const result = await this.request({
          path: url,
          host,
          method,
          params,
          responseType,
          data
        });
        return { data: result.data };
      } catch (err) {
        return {
          error: { status: err.response?.status, data: err.response?.data }
        };
      }
    };
  }
}

export const client = new Client();
