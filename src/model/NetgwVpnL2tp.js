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
    define(['ApiClient', 'model/NetgwVpnL2tpUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetgwVpnL2tpUser'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.NetgwVpnL2tp = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.NetgwVpnL2tpUser);
  }
}(this, function(ApiClient, NetgwVpnL2tpUser) {
  'use strict';



  /**
   * The NetgwVpnL2tp model module.
   * @module model/NetgwVpnL2tp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NetgwVpnL2tp</code>.
   * @alias module:model/NetgwVpnL2tp
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>NetgwVpnL2tp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetgwVpnL2tp} obj Optional instance to populate.
   * @return {module:model/NetgwVpnL2tp} The populated <code>NetgwVpnL2tp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('preSharedSecret')) {
        obj['preSharedSecret'] = ApiClient.convertToType(data['preSharedSecret'], 'String');
      }
      if (data.hasOwnProperty('clientPrefix')) {
        obj['clientPrefix'] = ApiClient.convertToType(data['clientPrefix'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = NetgwVpnL2tpUser.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} preSharedSecret
   */
  exports.prototype['preSharedSecret'] = undefined;
  /**
   * @member {String} clientPrefix
   */
  exports.prototype['clientPrefix'] = undefined;
  /**
   * @member {module:model/NetgwVpnL2tpUser} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


