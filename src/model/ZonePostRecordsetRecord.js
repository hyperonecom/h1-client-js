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
    root.HyperoneClient.ZonePostRecordsetRecord = factory(root.HyperoneClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ZonePostRecordsetRecord model module.
   * @module model/ZonePostRecordsetRecord
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>ZonePostRecordsetRecord</code>.
   * @alias module:model/ZonePostRecordsetRecord
   * @class
   * @param content {String} Template string: - {{REQUEST_IP}} is replaced by the requester ip address.
   */
  var exports = function(content) {
    var _this = this;

    _this['content'] = content;
  };

  /**
   * Constructs a <code>ZonePostRecordsetRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZonePostRecordsetRecord} obj Optional instance to populate.
   * @return {module:model/ZonePostRecordsetRecord} The populated <code>ZonePostRecordsetRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * Template string: - {{REQUEST_IP}} is replaced by the requester ip address.
   * @member {String} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


