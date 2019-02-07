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
    root.HyperOneApi.VmhostActionMoveVM = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The VmhostActionMoveVM model module.
   * @module model/VmhostActionMoveVM
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>VmhostActionMoveVM</code>.
   * @alias module:model/VmhostActionMoveVM
   * @class
   * @param vm {String} 
   */
  var exports = function(vm) {
    var _this = this;

    _this['vm'] = vm;
  };

  /**
   * Constructs a <code>VmhostActionMoveVM</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VmhostActionMoveVM} obj Optional instance to populate.
   * @return {module:model/VmhostActionMoveVM} The populated <code>VmhostActionMoveVM</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('vm')) {
        obj['vm'] = ApiClient.convertToType(data['vm'], 'String');
      }
      if (data.hasOwnProperty('vmhost')) {
        obj['vmhost'] = ApiClient.convertToType(data['vmhost'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} vm
   */
  exports.prototype['vm'] = undefined;
  /**
   * @member {String} vmhost
   */
  exports.prototype['vmhost'] = undefined;



  return exports;
}));


