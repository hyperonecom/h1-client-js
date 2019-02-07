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
    define(['ApiClient', 'model/ProjectInvoicesDuplicate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProjectInvoicesDuplicate'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.ProjectInvoices = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.ProjectInvoicesDuplicate);
  }
}(this, function(ApiClient, ProjectInvoicesDuplicate) {
  'use strict';



  /**
   * The ProjectInvoices model module.
   * @module model/ProjectInvoices
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>ProjectInvoices</code>.
   * @alias module:model/ProjectInvoices
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProjectInvoices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectInvoices} obj Optional instance to populate.
   * @return {module:model/ProjectInvoices} The populated <code>ProjectInvoices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('invoiceNo')) {
        obj['invoiceNo'] = ApiClient.convertToType(data['invoiceNo'], 'String');
      }
      if (data.hasOwnProperty('issueDate')) {
        obj['issueDate'] = ApiClient.convertToType(data['issueDate'], 'String');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
      if (data.hasOwnProperty('project')) {
        obj['project'] = ApiClient.convertToType(data['project'], 'String');
      }
      if (data.hasOwnProperty('organisation')) {
        obj['organisation'] = ApiClient.convertToType(data['organisation'], 'String');
      }
      if (data.hasOwnProperty('duplicate')) {
        obj['duplicate'] = ProjectInvoicesDuplicate.constructFromObject(data['duplicate']);
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} invoiceNo
   */
  exports.prototype['invoiceNo'] = undefined;
  /**
   * @member {String} issueDate
   */
  exports.prototype['issueDate'] = undefined;
  /**
   * @member {String} summary
   */
  exports.prototype['summary'] = undefined;
  /**
   * @member {String} project
   */
  exports.prototype['project'] = undefined;
  /**
   * @member {String} organisation
   */
  exports.prototype['organisation'] = undefined;
  /**
   * @member {module:model/ProjectInvoicesDuplicate} duplicate
   */
  exports.prototype['duplicate'] = undefined;



  return exports;
}));


