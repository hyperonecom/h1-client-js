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
    root.HyperOneApi.VmActionPasswordReset = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The VmActionPasswordReset model module.
   * @module model/VmActionPasswordReset
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>VmActionPasswordReset</code>.
   * @alias module:model/VmActionPasswordReset
   * @class
   * @param userName {String} 
   * @param modulus {String} 
   * @param exponent {String} 
   */
  var exports = function(userName, modulus, exponent) {
    var _this = this;

    _this['userName'] = userName;
    _this['modulus'] = modulus;
    _this['exponent'] = exponent;
  };

  /**
   * Constructs a <code>VmActionPasswordReset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VmActionPasswordReset} obj Optional instance to populate.
   * @return {module:model/VmActionPasswordReset} The populated <code>VmActionPasswordReset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('modulus')) {
        obj['modulus'] = ApiClient.convertToType(data['modulus'], 'String');
      }
      if (data.hasOwnProperty('exponent')) {
        obj['exponent'] = ApiClient.convertToType(data['exponent'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * @member {String} modulus
   */
  exports.prototype['modulus'] = undefined;
  /**
   * @member {String} exponent
   */
  exports.prototype['exponent'] = undefined;



  return exports;
}));


