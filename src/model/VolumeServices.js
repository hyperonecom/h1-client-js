/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.2
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.3-SNAPSHOT
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
    root.HyperoneClient.VolumeServices = factory(root.HyperoneClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The VolumeServices model module.
   * @module model/VolumeServices
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>VolumeServices</code>.
   * @alias module:model/VolumeServices
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>VolumeServices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VolumeServices} obj Optional instance to populate.
   * @return {module:model/VolumeServices} The populated <code>VolumeServices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('oneTime')) {
        obj['oneTime'] = ApiClient.convertToType(data['oneTime'], 'Boolean');
      }
      if (data.hasOwnProperty('billing')) {
        obj['billing'] = ApiClient.convertToType(data['billing'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
      if (data.hasOwnProperty('sourceService')) {
        obj['sourceService'] = ApiClient.convertToType(data['sourceService'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} oneTime
   */
  exports.prototype['oneTime'] = undefined;
  /**
   * @member {String} billing
   */
  exports.prototype['billing'] = undefined;
  /**
   * @member {Object} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {String} sourceService
   */
  exports.prototype['sourceService'] = undefined;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;



  return exports;
}));


