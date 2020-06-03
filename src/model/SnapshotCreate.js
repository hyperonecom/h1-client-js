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
    root.HyperoneClient.SnapshotCreate = factory(root.HyperoneClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SnapshotCreate model module.
   * @module model/SnapshotCreate
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>SnapshotCreate</code>.
   * @alias module:model/SnapshotCreate
   * @class
   * @param vault {String} 
   * @param name {String} 
   */
  var exports = function(vault, name) {
    var _this = this;

    _this['vault'] = vault;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>SnapshotCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SnapshotCreate} obj Optional instance to populate.
   * @return {module:model/SnapshotCreate} The populated <code>SnapshotCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('vault')) {
        obj['vault'] = ApiClient.convertToType(data['vault'], 'String');
      }
      if (data.hasOwnProperty('service')) {
        obj['service'] = ApiClient.convertToType(data['service'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {String} vault
   */
  exports.prototype['vault'] = undefined;
  /**
   * @member {String} service
   * @default '5badbeb585f66b3d085727eb'
   */
  exports.prototype['service'] = '5badbeb585f66b3d085727eb';
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Object.<String, String>} tag
   */
  exports.prototype['tag'] = undefined;



  return exports;
}));


