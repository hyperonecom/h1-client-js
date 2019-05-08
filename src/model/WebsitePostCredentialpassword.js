/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.2
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.WebsitePostCredentialpassword = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The WebsitePostCredentialpassword model module.
   * @module model/WebsitePostCredentialpassword
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>WebsitePostCredentialpassword</code>.
   * @alias module:model/WebsitePostCredentialpassword
   * @class
   * @param name {String} 
   * @param type {String} 
   * @param value {String} 
   */
  var exports = function(name, type, value) {
    var _this = this;

    _this['name'] = name;
    _this['type'] = type;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>WebsitePostCredentialpassword</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebsitePostCredentialpassword} obj Optional instance to populate.
   * @return {module:model/WebsitePostCredentialpassword} The populated <code>WebsitePostCredentialpassword</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {String} token
   */
  exports.prototype['token'] = undefined;



  return exports;
}));

