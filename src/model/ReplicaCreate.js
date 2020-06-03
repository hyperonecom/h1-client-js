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
    root.HyperoneClient.ReplicaCreate = factory(root.HyperoneClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ReplicaCreate model module.
   * @module model/ReplicaCreate
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>ReplicaCreate</code>.
   * @alias module:model/ReplicaCreate
   * @class
   * @param hostname {String} 
   * @param secret {String} 
   */
  var exports = function(hostname, secret) {
    var _this = this;

    _this['hostname'] = hostname;
    _this['secret'] = secret;
  };

  /**
   * Constructs a <code>ReplicaCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReplicaCreate} obj Optional instance to populate.
   * @return {module:model/ReplicaCreate} The populated <code>ReplicaCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
      }
      if (data.hasOwnProperty('secret')) {
        obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * @member {String} secret
   */
  exports.prototype['secret'] = undefined;



  return exports;
}));


