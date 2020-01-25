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
    define(['ApiClient', 'model/ZonePostRecordsetRecord'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ZonePostRecordsetRecord'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperoneClient) {
      root.HyperoneClient = {};
    }
    root.HyperoneClient.ZonePatchRecordsetRecordsetId = factory(root.HyperoneClient.ApiClient, root.HyperoneClient.ZonePostRecordsetRecord);
  }
}(this, function(ApiClient, ZonePostRecordsetRecord) {
  'use strict';



  /**
   * The ZonePatchRecordsetRecordsetId model module.
   * @module model/ZonePatchRecordsetRecordsetId
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>ZonePatchRecordsetRecordsetId</code>.
   * @alias module:model/ZonePatchRecordsetRecordsetId
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ZonePatchRecordsetRecordsetId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZonePatchRecordsetRecordsetId} obj Optional instance to populate.
   * @return {module:model/ZonePatchRecordsetRecordsetId} The populated <code>ZonePatchRecordsetRecordsetId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ttl')) {
        obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
      }
      if (data.hasOwnProperty('record')) {
        obj['record'] = ApiClient.convertToType(data['record'], [ZonePostRecordsetRecord]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} ttl
   */
  exports.prototype['ttl'] = undefined;
  /**
   * @member {Array.<module:model/ZonePostRecordsetRecord>} record
   */
  exports.prototype['record'] = undefined;



  return exports;
}));


