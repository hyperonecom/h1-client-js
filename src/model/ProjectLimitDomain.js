/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
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
    root.HyperOneApi.ProjectLimitDomain = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProjectLimitDomain model module.
   * @module model/ProjectLimitDomain
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProjectLimitDomain</code>.
   * @alias module:model/ProjectLimitDomain
   * @class
   * @param count {Number} 
   * @param record {Number} 
   */
  var exports = function(count, record) {
    var _this = this;

    _this['count'] = count;
    _this['record'] = record;
  };

  /**
   * Constructs a <code>ProjectLimitDomain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectLimitDomain} obj Optional instance to populate.
   * @return {module:model/ProjectLimitDomain} The populated <code>ProjectLimitDomain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('record')) {
        obj['record'] = ApiClient.convertToType(data['record'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {Number} record
   */
  exports.prototype['record'] = undefined;



  return exports;
}));


