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
    define(['ApiClient', 'model/DiskMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DiskMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperoneClient) {
      root.HyperoneClient = {};
    }
    root.HyperoneClient.IsoCreate = factory(root.HyperoneClient.ApiClient, root.HyperoneClient.DiskMetadata);
  }
}(this, function(ApiClient, DiskMetadata) {
  'use strict';



  /**
   * The IsoCreate model module.
   * @module model/IsoCreate
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>IsoCreate</code>.
   * @alias module:model/IsoCreate
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>IsoCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IsoCreate} obj Optional instance to populate.
   * @return {module:model/IsoCreate} The populated <code>IsoCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('service')) {
        obj['service'] = ApiClient.convertToType(data['service'], 'String');
      }
      if (data.hasOwnProperty('cloud')) {
        obj['cloud'] = ApiClient.convertToType(data['cloud'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = DiskMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {String} service
   * @default '588890c1453a323588a27734'
   */
  exports.prototype['service'] = '588890c1453a323588a27734';
  /**
   * @member {String} cloud
   */
  exports.prototype['cloud'] = undefined;
  /**
   * @member {module:model/DiskMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Object.<String, String>} tag
   */
  exports.prototype['tag'] = undefined;



  return exports;
}));


