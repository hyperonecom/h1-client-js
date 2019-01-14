/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
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
    define(['ApiClient', 'model/Event', 'model/ProjectAccessRights1', 'model/ProjectBilling', 'model/ProjectCompliance', 'model/ProjectInvoices', 'model/ProjectLimit', 'model/ProjectNetworkAcl', 'model/ProjectPayments', 'model/ProjectRoles', 'model/ProjectServices', 'model/ProjectThreshold', 'model/ProjectTransfer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Event'), require('./ProjectAccessRights1'), require('./ProjectBilling'), require('./ProjectCompliance'), require('./ProjectInvoices'), require('./ProjectLimit'), require('./ProjectNetworkAcl'), require('./ProjectPayments'), require('./ProjectRoles'), require('./ProjectServices'), require('./ProjectThreshold'), require('./ProjectTransfer'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.Project = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Event, root.HyperOneApi.ProjectAccessRights1, root.HyperOneApi.ProjectBilling, root.HyperOneApi.ProjectCompliance, root.HyperOneApi.ProjectInvoices, root.HyperOneApi.ProjectLimit, root.HyperOneApi.ProjectNetworkAcl, root.HyperOneApi.ProjectPayments, root.HyperOneApi.ProjectRoles, root.HyperOneApi.ProjectServices, root.HyperOneApi.ProjectThreshold, root.HyperOneApi.ProjectTransfer);
  }
}(this, function(ApiClient, Event, ProjectAccessRights1, ProjectBilling, ProjectCompliance, ProjectInvoices, ProjectLimit, ProjectNetworkAcl, ProjectPayments, ProjectRoles, ProjectServices, ProjectThreshold, ProjectTransfer) {
  'use strict';



  /**
   * The Project model module.
   * @module model/Project
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Project} obj Optional instance to populate.
   * @return {module:model/Project} The populated <code>Project</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('services')) {
        obj['services'] = ApiClient.convertToType(data['services'], [ProjectServices]);
      }
      if (data.hasOwnProperty('flavour')) {
        obj['flavour'] = ApiClient.convertToType(data['flavour'], 'String');
      }
      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
      }
      if (data.hasOwnProperty('accessRights')) {
        obj['accessRights'] = ProjectAccessRights1.constructFromObject(data['accessRights']);
      }
      if (data.hasOwnProperty('processing')) {
        obj['processing'] = ApiClient.convertToType(data['processing'], 'Boolean');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Boolean');
      }
      if (data.hasOwnProperty('queue')) {
        obj['queue'] = ApiClient.convertToType(data['queue'], [Event]);
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], Object);
      }
      if (data.hasOwnProperty('project')) {
        obj['project'] = ApiClient.convertToType(data['project'], 'String');
      }
      if (data.hasOwnProperty('bankAccount')) {
        obj['bankAccount'] = ApiClient.convertToType(data['bankAccount'], 'String');
      }
      if (data.hasOwnProperty('organisation')) {
        obj['organisation'] = ApiClient.convertToType(data['organisation'], 'String');
      }
      if (data.hasOwnProperty('billing')) {
        obj['billing'] = ProjectBilling.constructFromObject(data['billing']);
      }
      if (data.hasOwnProperty('invoices')) {
        obj['invoices'] = ProjectInvoices.constructFromObject(data['invoices']);
      }
      if (data.hasOwnProperty('payments')) {
        obj['payments'] = ProjectPayments.constructFromObject(data['payments']);
      }
      if (data.hasOwnProperty('verified')) {
        obj['verified'] = ApiClient.convertToType(data['verified'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ProjectLimit.constructFromObject(data['limit']);
      }
      if (data.hasOwnProperty('threshold')) {
        obj['threshold'] = ProjectThreshold.constructFromObject(data['threshold']);
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], [ProjectRoles]);
      }
      if (data.hasOwnProperty('networkAcl')) {
        obj['networkAcl'] = ProjectNetworkAcl.constructFromObject(data['networkAcl']);
      }
      if (data.hasOwnProperty('compliance')) {
        obj['compliance'] = ProjectCompliance.constructFromObject(data['compliance']);
      }
      if (data.hasOwnProperty('transfer')) {
        obj['transfer'] = ProjectTransfer.constructFromObject(data['transfer']);
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/ProjectServices>} services
   */
  exports.prototype['services'] = undefined;
  /**
   * @member {String} flavour
   */
  exports.prototype['flavour'] = undefined;
  /**
   * @member {Date} modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;
  /**
   * @member {String} modifiedBy
   */
  exports.prototype['modifiedBy'] = undefined;
  /**
   * @member {String} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * @member {Date} createdOn
   */
  exports.prototype['createdOn'] = undefined;
  /**
   * @member {module:model/ProjectAccessRights1} accessRights
   */
  exports.prototype['accessRights'] = undefined;
  /**
   * @member {Boolean} processing
   */
  exports.prototype['processing'] = undefined;
  /**
   * @member {Boolean} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {Array.<module:model/Event>} queue
   */
  exports.prototype['queue'] = undefined;
  /**
   * @member {module:model/Project.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {Object} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * @member {String} project
   */
  exports.prototype['project'] = undefined;
  /**
   * @member {String} bankAccount
   */
  exports.prototype['bankAccount'] = undefined;
  /**
   * @member {String} organisation
   */
  exports.prototype['organisation'] = undefined;
  /**
   * @member {module:model/ProjectBilling} billing
   */
  exports.prototype['billing'] = undefined;
  /**
   * @member {module:model/ProjectInvoices} invoices
   */
  exports.prototype['invoices'] = undefined;
  /**
   * @member {module:model/ProjectPayments} payments
   */
  exports.prototype['payments'] = undefined;
  /**
   * @member {String} verified
   */
  exports.prototype['verified'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {module:model/ProjectLimit} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {module:model/ProjectThreshold} threshold
   */
  exports.prototype['threshold'] = undefined;
  /**
   * @member {Array.<module:model/ProjectRoles>} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * @member {module:model/ProjectNetworkAcl} networkAcl
   */
  exports.prototype['networkAcl'] = undefined;
  /**
   * @member {module:model/ProjectCompliance} compliance
   */
  exports.prototype['compliance'] = undefined;
  /**
   * @member {module:model/ProjectTransfer} transfer
   */
  exports.prototype['transfer'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",
    /**
     * value: "Inactive"
     * @const
     */
    "Inactive": "Inactive",
    /**
     * value: "Limited"
     * @const
     */
    "Limited": "Limited"  };


  return exports;
}));


