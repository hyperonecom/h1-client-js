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
    define(['ApiClient', 'model/Event', 'model/ProjectServices', 'model/VmData', 'model/VmSourceImage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Event'), require('./ProjectServices'), require('./VmData'), require('./VmSourceImage'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.Vm = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Event, root.HyperOneApi.ProjectServices, root.HyperOneApi.VmData, root.HyperOneApi.VmSourceImage);
  }
}(this, function(ApiClient, Event, ProjectServices, VmData, VmSourceImage) {
  'use strict';



  /**
   * The Vm model module.
   * @module model/Vm
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>Vm</code>.
   * @alias module:model/Vm
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Vm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vm} obj Optional instance to populate.
   * @return {module:model/Vm} The populated <code>Vm</code> instance.
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
        obj['accessRights'] = ApiClient.convertToType(data['accessRights'], ['String']);
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
      if (data.hasOwnProperty('sourceImage')) {
        obj['sourceImage'] = VmSourceImage.constructFromObject(data['sourceImage']);
      }
      if (data.hasOwnProperty('userMetadata')) {
        obj['userMetadata'] = ApiClient.convertToType(data['userMetadata'], 'String');
      }
      if (data.hasOwnProperty('cpu')) {
        obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
      }
      if (data.hasOwnProperty('memory')) {
        obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = VmData.constructFromObject(data['data']);
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
   * @member {Array.<String>} accessRights
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
   * @member {module:model/Vm.StateEnum} state
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
   * @member {module:model/VmSourceImage} sourceImage
   */
  exports.prototype['sourceImage'] = undefined;
  /**
   * @member {String} userMetadata
   */
  exports.prototype['userMetadata'] = undefined;
  /**
   * @member {Number} cpu
   */
  exports.prototype['cpu'] = undefined;
  /**
   * @member {Number} memory
   */
  exports.prototype['memory'] = undefined;
  /**
   * @member {module:model/VmData} data
   */
  exports.prototype['data'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "Running"
     * @const
     */
    "Running": "Running",
    /**
     * value: "Off"
     * @const
     */
    "Off": "Off",
    /**
     * value: "Stopping"
     * @const
     */
    "Stopping": "Stopping",
    /**
     * value: "Saved"
     * @const
     */
    "Saved": "Saved",
    /**
     * value: "Paused"
     * @const
     */
    "Paused": "Paused",
    /**
     * value: "Starting"
     * @const
     */
    "Starting": "Starting",
    /**
     * value: "Reset"
     * @const
     */
    "Reset": "Reset",
    /**
     * value: "Saving"
     * @const
     */
    "Saving": "Saving",
    /**
     * value: "Pausing"
     * @const
     */
    "Pausing": "Pausing",
    /**
     * value: "Resuming"
     * @const
     */
    "Resuming": "Resuming",
    /**
     * value: "FastSaved"
     * @const
     */
    "FastSaved": "FastSaved",
    /**
     * value: "FastSaving"
     * @const
     */
    "FastSaving": "FastSaving",
    /**
     * value: "RunningCritical"
     * @const
     */
    "RunningCritical": "RunningCritical",
    /**
     * value: "OffCritical"
     * @const
     */
    "OffCritical": "OffCritical",
    /**
     * value: "StoppingCritical"
     * @const
     */
    "StoppingCritical": "StoppingCritical",
    /**
     * value: "SavedCritical"
     * @const
     */
    "SavedCritical": "SavedCritical",
    /**
     * value: "PausedCritical"
     * @const
     */
    "PausedCritical": "PausedCritical",
    /**
     * value: "StartingCritical"
     * @const
     */
    "StartingCritical": "StartingCritical",
    /**
     * value: "ResetCritical"
     * @const
     */
    "ResetCritical": "ResetCritical",
    /**
     * value: "SavingCritical"
     * @const
     */
    "SavingCritical": "SavingCritical",
    /**
     * value: "PausingCritical"
     * @const
     */
    "PausingCritical": "PausingCritical",
    /**
     * value: "ResumingCritical"
     * @const
     */
    "ResumingCritical": "ResumingCritical",
    /**
     * value: "FastSavedCritical"
     * @const
     */
    "FastSavedCritical": "FastSavedCritical",
    /**
     * value: "FastSavingCritical"
     * @const
     */
    "FastSavingCritical": "FastSavingCritical",
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown"  };


  return exports;
}));


