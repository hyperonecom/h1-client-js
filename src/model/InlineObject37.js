/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1
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
    root.HyperOneApi.InlineObject37 = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The InlineObject37 model module.
   * @module model/InlineObject37
   * @version 1
   */

  /**
   * Constructs a new <code>InlineObject37</code>.
   * @alias module:model/InlineObject37
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
   * Constructs a <code>InlineObject37</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineObject37} obj Optional instance to populate.
   * @return {module:model/InlineObject37} The populated <code>InlineObject37</code> instance.
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


