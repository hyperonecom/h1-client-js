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
    root.HyperOneApi.FirewallPostIngress = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FirewallPostIngress model module.
   * @module model/FirewallPostIngress
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>FirewallPostIngress</code>.
   * @alias module:model/FirewallPostIngress
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FirewallPostIngress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirewallPostIngress} obj Optional instance to populate.
   * @return {module:model/FirewallPostIngress} The populated <code>FirewallPostIngress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
      }
      if (data.hasOwnProperty('filter')) {
        obj['filter'] = ApiClient.convertToType(data['filter'], ['String']);
      }
      if (data.hasOwnProperty('external')) {
        obj['external'] = ApiClient.convertToType(data['external'], ['String']);
      }
      if (data.hasOwnProperty('internal')) {
        obj['internal'] = ApiClient.convertToType(data['internal'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} action
   */
  exports.prototype['action'] = undefined;
  /**
   * @member {Number} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * @member {Array.<String>} filter
   */
  exports.prototype['filter'] = undefined;
  /**
   * @member {Array.<String>} external
   */
  exports.prototype['external'] = undefined;
  /**
   * @member {Array.<String>} internal
   */
  exports.prototype['internal'] = undefined;



  return exports;
}));


