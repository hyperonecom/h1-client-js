/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.2
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.2-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LogArchiveCreateCredential'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LogArchiveCreateCredential'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.LogArchiveCreate = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.LogArchiveCreateCredential);
  }
}(this, function(ApiClient, LogArchiveCreateCredential) {
  'use strict';



  /**
   * The LogArchiveCreate model module.
   * @module model/LogArchiveCreate
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>LogArchiveCreate</code>.
   * @alias module:model/LogArchiveCreate
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>LogArchiveCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LogArchiveCreate} obj Optional instance to populate.
   * @return {module:model/LogArchiveCreate} The populated <code>LogArchiveCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('service')) {
        obj['service'] = ApiClient.convertToType(data['service'], 'String');
      }
      if (data.hasOwnProperty('credential')) {
        obj['credential'] = LogArchiveCreateCredential.constructFromObject(data['credential']);
      }
      if (data.hasOwnProperty('retention')) {
        obj['retention'] = ApiClient.convertToType(data['retention'], 'Number');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} service
   * @default '5b4e074d1d34e82848ce7499'
   */
  exports.prototype['service'] = '5b4e074d1d34e82848ce7499';
  /**
   * @member {module:model/LogArchiveCreateCredential} credential
   */
  exports.prototype['credential'] = undefined;
  /**
   * @member {Number} retention
   */
  exports.prototype['retention'] = undefined;
  /**
   * @member {Object} tag
   */
  exports.prototype['tag'] = undefined;



  return exports;
}));


