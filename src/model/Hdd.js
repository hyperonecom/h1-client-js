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
    define(['ApiClient', 'model/HddDisk'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HddDisk'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperoneClient) {
      root.HyperoneClient = {};
    }
    root.HyperoneClient.Hdd = factory(root.HyperoneClient.ApiClient, root.HyperoneClient.HddDisk);
  }
}(this, function(ApiClient, HddDisk) {
  'use strict';



  /**
   * The Hdd model module.
   * @module model/Hdd
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>Hdd</code>.
   * @alias module:model/Hdd
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Hdd</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Hdd} obj Optional instance to populate.
   * @return {module:model/Hdd} The populated <code>Hdd</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('maximumIOPS')) {
        obj['maximumIOPS'] = ApiClient.convertToType(data['maximumIOPS'], 'Number');
      }
      if (data.hasOwnProperty('controllerType')) {
        obj['controllerType'] = ApiClient.convertToType(data['controllerType'], 'String');
      }
      if (data.hasOwnProperty('controllerNumber')) {
        obj['controllerNumber'] = ApiClient.convertToType(data['controllerNumber'], 'String');
      }
      if (data.hasOwnProperty('controllerLocation')) {
        obj['controllerLocation'] = ApiClient.convertToType(data['controllerLocation'], 'Number');
      }
      if (data.hasOwnProperty('disk')) {
        obj['disk'] = HddDisk.constructFromObject(data['disk']);
      }
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} maximumIOPS
   */
  exports.prototype['maximumIOPS'] = undefined;
  /**
   * @member {String} controllerType
   */
  exports.prototype['controllerType'] = undefined;
  /**
   * @member {String} controllerNumber
   */
  exports.prototype['controllerNumber'] = undefined;
  /**
   * @member {Number} controllerLocation
   */
  exports.prototype['controllerLocation'] = undefined;
  /**
   * @member {module:model/HddDisk} disk
   */
  exports.prototype['disk'] = undefined;
  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


