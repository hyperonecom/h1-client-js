/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Event from './Event';
import ProjectServices from './ProjectServices';

/**
 * The Replica model module.
 * @module model/Replica
 * @version 0.0.2
 */
class Replica {
    /**
     * Constructs a new <code>Replica</code>.
     * @alias module:model/Replica
     */
    constructor() { 
        
        Replica.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Replica</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Replica} obj Optional instance to populate.
     * @return {module:model/Replica} The populated <code>Replica</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Replica();

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
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Replica.prototype['_id'] = undefined;

/**
 * @member {String} name
 */
Replica.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ProjectServices>} services
 */
Replica.prototype['services'] = undefined;

/**
 * @member {String} flavour
 */
Replica.prototype['flavour'] = undefined;

/**
 * @member {Date} modifiedOn
 */
Replica.prototype['modifiedOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
Replica.prototype['modifiedBy'] = undefined;

/**
 * @member {String} createdBy
 */
Replica.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdOn
 */
Replica.prototype['createdOn'] = undefined;

/**
 * @member {Array.<String>} accessRights
 */
Replica.prototype['accessRights'] = undefined;

/**
 * @member {Boolean} processing
 */
Replica.prototype['processing'] = undefined;

/**
 * @member {Boolean} created
 */
Replica.prototype['created'] = undefined;

/**
 * @member {Array.<module:model/Event>} queue
 */
Replica.prototype['queue'] = undefined;

/**
 * @member {module:model/Replica.StateEnum} state
 */
Replica.prototype['state'] = undefined;

/**
 * @member {Object} tag
 */
Replica.prototype['tag'] = undefined;

/**
 * @member {String} project
 */
Replica.prototype['project'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Replica['StateEnum'] = {

    /**
     * value: "Error"
     * @const
     */
    "Error": "Error",

    /**
     * value: "FailOverWaitingCompletion"
     * @const
     */
    "FailOverWaitingCompletion": "FailOverWaitingCompletion",

    /**
     * value: "FailedOver"
     * @const
     */
    "FailedOver": "FailedOver",

    /**
     * value: "NotApplicable"
     * @const
     */
    "NotApplicable": "NotApplicable",

    /**
     * value: "ReadyForInitialReplication"
     * @const
     */
    "ReadyForInitialReplication": "ReadyForInitialReplication",

    /**
     * value: "Replicating"
     * @const
     */
    "Replicating": "Replicating",

    /**
     * value: "Resynchronizing"
     * @const
     */
    "Resynchronizing": "Resynchronizing",

    /**
     * value: "ResynchronizeSuspended"
     * @const
     */
    "ResynchronizeSuspended": "ResynchronizeSuspended",

    /**
     * value: "Suspended"
     * @const
     */
    "Suspended": "Suspended",

    /**
     * value: "SyncedReplicationComplete"
     * @const
     */
    "SyncedReplicationComplete": "SyncedReplicationComplete",

    /**
     * value: "WaitingForInitialReplication"
     * @const
     */
    "WaitingForInitialReplication": "WaitingForInitialReplication",

    /**
     * value: "WaitingForStartResynchronize"
     * @const
     */
    "WaitingForStartResynchronize": "WaitingForStartResynchronize",

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown"
};



export default Replica;

