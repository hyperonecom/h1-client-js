/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.2
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0-SNAPSHOT
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
    if (!root.HyperoneClient) {
      root.HyperoneClient = {};
    }
    root.HyperoneClient.FirewallCreateIngress = factory(root.HyperoneClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FirewallCreateIngress model module.
   * @module model/FirewallCreateIngress
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>FirewallCreateIngress</code>.
   * @alias module:model/FirewallCreateIngress
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FirewallCreateIngress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirewallCreateIngress} obj Optional instance to populate.
   * @return {module:model/FirewallCreateIngress} The populated <code>FirewallCreateIngress</code> instance.
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


