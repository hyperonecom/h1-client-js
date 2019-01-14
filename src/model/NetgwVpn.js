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
    define(['ApiClient', 'model/NetgwVpnL2tp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetgwVpnL2tp'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.NetgwVpn = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.NetgwVpnL2tp);
  }
}(this, function(ApiClient, NetgwVpnL2tp) {
  'use strict';



  /**
   * The NetgwVpn model module.
   * @module model/NetgwVpn
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NetgwVpn</code>.
   * @alias module:model/NetgwVpn
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>NetgwVpn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetgwVpn} obj Optional instance to populate.
   * @return {module:model/NetgwVpn} The populated <code>NetgwVpn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ipsec')) {
        obj['ipsec'] = ApiClient.convertToType(data['ipsec'], 'String');
      }
      if (data.hasOwnProperty('l2tp')) {
        obj['l2tp'] = NetgwVpnL2tp.constructFromObject(data['l2tp']);
      }
    }
    return obj;
  }

  /**
   * @member {String} ipsec
   */
  exports.prototype['ipsec'] = undefined;
  /**
   * @member {module:model/NetgwVpnL2tp} l2tp
   */
  exports.prototype['l2tp'] = undefined;



  return exports;
}));


