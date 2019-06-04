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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.ProjectThresholdCredits = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProjectThresholdCredits model module.
   * @module model/ProjectThresholdCredits
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>ProjectThresholdCredits</code>.
   * @alias module:model/ProjectThresholdCredits
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProjectThresholdCredits</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectThresholdCredits} obj Optional instance to populate.
   * @return {module:model/ProjectThresholdCredits} The populated <code>ProjectThresholdCredits</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('levels')) {
        obj['levels'] = ApiClient.convertToType(data['levels'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Number>} levels
   */
  exports.prototype['levels'] = undefined;



  return exports;
}));


