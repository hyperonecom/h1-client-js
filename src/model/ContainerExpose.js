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
    root.HyperOneApi.ContainerExpose = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ContainerExpose model module.
   * @module model/ContainerExpose
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>ContainerExpose</code>.
   * @alias module:model/ContainerExpose
   * @class
   * @param external {String} 
   * @param internal {String} 
   */
  var exports = function(external, internal) {
    var _this = this;

    _this['external'] = external;
    _this['internal'] = internal;
  };

  /**
   * Constructs a <code>ContainerExpose</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContainerExpose} obj Optional instance to populate.
   * @return {module:model/ContainerExpose} The populated <code>ContainerExpose</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('external')) {
        obj['external'] = ApiClient.convertToType(data['external'], 'String');
      }
      if (data.hasOwnProperty('internal')) {
        obj['internal'] = ApiClient.convertToType(data['internal'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} external
   */
  exports.prototype['external'] = undefined;
  /**
   * @member {String} internal
   */
  exports.prototype['internal'] = undefined;



  return exports;
}));


