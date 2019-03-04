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
    define(['ApiClient', 'model/ServiceBillingPrice', 'model/ServiceBillingReservations'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ServiceBillingPrice'), require('./ServiceBillingReservations'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.ServiceBilling = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.ServiceBillingPrice, root.HyperOneApi.ServiceBillingReservations);
  }
}(this, function(ApiClient, ServiceBillingPrice, ServiceBillingReservations) {
  'use strict';



  /**
   * The ServiceBilling model module.
   * @module model/ServiceBilling
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>ServiceBilling</code>.
   * @alias module:model/ServiceBilling
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ServiceBilling</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceBilling} obj Optional instance to populate.
   * @return {module:model/ServiceBilling} The populated <code>ServiceBilling</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('price')) {
        obj['price'] = ServiceBillingPrice.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('period')) {
        obj['period'] = ApiClient.convertToType(data['period'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('oneTime')) {
        obj['oneTime'] = ApiClient.convertToType(data['oneTime'], 'Boolean');
      }
      if (data.hasOwnProperty('reservations')) {
        obj['reservations'] = ServiceBillingReservations.constructFromObject(data['reservations']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ServiceBillingPrice} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {String} period
   */
  exports.prototype['period'] = undefined;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {Boolean} oneTime
   */
  exports.prototype['oneTime'] = undefined;
  /**
   * @member {module:model/ServiceBillingReservations} reservations
   */
  exports.prototype['reservations'] = undefined;



  return exports;
}));


