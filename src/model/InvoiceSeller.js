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
    define(['ApiClient', 'model/InvoiceSellerAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InvoiceSellerAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperoneClient) {
      root.HyperoneClient = {};
    }
    root.HyperoneClient.InvoiceSeller = factory(root.HyperoneClient.ApiClient, root.HyperoneClient.InvoiceSellerAddress);
  }
}(this, function(ApiClient, InvoiceSellerAddress) {
  'use strict';



  /**
   * The InvoiceSeller model module.
   * @module model/InvoiceSeller
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>InvoiceSeller</code>.
   * @alias module:model/InvoiceSeller
   * @class
   * @param company {String} 
   * @param nip {String} 
   */
  var exports = function(company, nip) {
    var _this = this;

    _this['company'] = company;
    _this['nip'] = nip;
  };

  /**
   * Constructs a <code>InvoiceSeller</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceSeller} obj Optional instance to populate.
   * @return {module:model/InvoiceSeller} The populated <code>InvoiceSeller</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = InvoiceSellerAddress.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('nip')) {
        obj['nip'] = ApiClient.convertToType(data['nip'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {module:model/InvoiceSellerAddress} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} nip
   */
  exports.prototype['nip'] = undefined;



  return exports;
}));


