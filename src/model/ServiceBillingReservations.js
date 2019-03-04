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
    define(['ApiClient', 'model/ServiceBillingPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ServiceBillingPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.ServiceBillingReservations = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.ServiceBillingPrice);
  }
}(this, function(ApiClient, ServiceBillingPrice) {
  'use strict';



  /**
   * The ServiceBillingReservations model module.
   * @module model/ServiceBillingReservations
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>ServiceBillingReservations</code>.
   * @alias module:model/ServiceBillingReservations
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ServiceBillingReservations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceBillingReservations} obj Optional instance to populate.
   * @return {module:model/ServiceBillingReservations} The populated <code>ServiceBillingReservations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('period')) {
        obj['period'] = ApiClient.convertToType(data['period'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ServiceBillingPrice.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('resourcePrice')) {
        obj['resourcePrice'] = ServiceBillingPrice.constructFromObject(data['resourcePrice']);
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} period
   */
  exports.prototype['period'] = undefined;
  /**
   * @member {module:model/ServiceBillingPrice} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {module:model/ServiceBillingPrice} resourcePrice
   */
  exports.prototype['resourcePrice'] = undefined;



  return exports;
}));


