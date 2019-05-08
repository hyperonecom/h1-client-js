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
    root.HyperOneApi.ProjectLimitVault = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProjectLimitVault model module.
   * @module model/ProjectLimitVault
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>ProjectLimitVault</code>.
   * @alias module:model/ProjectLimitVault
   * @class
   * @param count {Number} 
   * @param size {Number} 
   */
  var exports = function(count, size) {
    var _this = this;

    _this['count'] = count;
    _this['size'] = size;
  };

  /**
   * Constructs a <code>ProjectLimitVault</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectLimitVault} obj Optional instance to populate.
   * @return {module:model/ProjectLimitVault} The populated <code>ProjectLimitVault</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} count
   * @default 10
   */
  exports.prototype['count'] = 10;
  /**
   * @member {Number} size
   * @default 1024
   */
  exports.prototype['size'] = 1024;



  return exports;
}));


