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
    root.HyperoneClient.VmPostHdd = factory(root.HyperoneClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The VmPostHdd model module.
   * @module model/VmPostHdd
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>VmPostHdd</code>.
   * @alias module:model/VmPostHdd
   * @class
   * @param disk {String} 
   */
  var exports = function(disk) {
    var _this = this;

    _this['disk'] = disk;
  };

  /**
   * Constructs a <code>VmPostHdd</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VmPostHdd} obj Optional instance to populate.
   * @return {module:model/VmPostHdd} The populated <code>VmPostHdd</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('disk')) {
        obj['disk'] = ApiClient.convertToType(data['disk'], 'String');
      }
      if (data.hasOwnProperty('controllerType')) {
        obj['controllerType'] = ApiClient.convertToType(data['controllerType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} disk
   */
  exports.prototype['disk'] = undefined;
  /**
   * @member {String} controllerType
   */
  exports.prototype['controllerType'] = undefined;



  return exports;
}));


