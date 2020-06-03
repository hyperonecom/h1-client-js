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
    root.HyperoneClient.NetgwCreatePublic = factory(root.HyperoneClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The NetgwCreatePublic model module.
   * @module model/NetgwCreatePublic
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>NetgwCreatePublic</code>.
   * @alias module:model/NetgwCreatePublic
   * @class
   * @param ip {String} 
   */
  var exports = function(ip) {
    var _this = this;

    _this['ip'] = ip;
  };

  /**
   * Constructs a <code>NetgwCreatePublic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetgwCreatePublic} obj Optional instance to populate.
   * @return {module:model/NetgwCreatePublic} The populated <code>NetgwCreatePublic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;



  return exports;
}));


