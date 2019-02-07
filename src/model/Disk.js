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
import DiskMetadata from './DiskMetadata';
import Event from './Event';
import ProjectServices from './ProjectServices';

/**
 * The Disk model module.
 * @module model/Disk
 * @version 0.0.2
 */
class Disk {
    /**
     * Constructs a new <code>Disk</code>.
     * @alias module:model/Disk
     */
    constructor() { 
        
        Disk.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Disk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Disk} obj Optional instance to populate.
     * @return {module:model/Disk} The populated <code>Disk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Disk();

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
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('vm')) {
                obj['vm'] = ApiClient.convertToType(data['vm'], 'String');
            }
            if (data.hasOwnProperty('persistent')) {
                obj['persistent'] = ApiClient.convertToType(data['persistent'], 'Boolean');
            }
            if (data.hasOwnProperty('downloadUrl')) {
                obj['downloadUrl'] = ApiClient.convertToType(data['downloadUrl'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = DiskMetadata.constructFromObject(data['metadata']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Disk.prototype['_id'] = undefined;

/**
 * @member {String} name
 */
Disk.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ProjectServices>} services
 */
Disk.prototype['services'] = undefined;

/**
 * @member {String} flavour
 */
Disk.prototype['flavour'] = undefined;

/**
 * @member {Date} modifiedOn
 */
Disk.prototype['modifiedOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
Disk.prototype['modifiedBy'] = undefined;

/**
 * @member {String} createdBy
 */
Disk.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdOn
 */
Disk.prototype['createdOn'] = undefined;

/**
 * @member {Array.<String>} accessRights
 */
Disk.prototype['accessRights'] = undefined;

/**
 * @member {Boolean} processing
 */
Disk.prototype['processing'] = undefined;

/**
 * @member {Boolean} created
 */
Disk.prototype['created'] = undefined;

/**
 * @member {Array.<module:model/Event>} queue
 */
Disk.prototype['queue'] = undefined;

/**
 * @member {module:model/Disk.StateEnum} state
 */
Disk.prototype['state'] = undefined;

/**
 * @member {Object} tag
 */
Disk.prototype['tag'] = undefined;

/**
 * @member {String} project
 */
Disk.prototype['project'] = undefined;

/**
 * @member {module:model/Disk.TypeEnum} type
 */
Disk.prototype['type'] = undefined;

/**
 * @member {Number} size
 */
Disk.prototype['size'] = undefined;

/**
 * @member {String} vm
 */
Disk.prototype['vm'] = undefined;

/**
 * @member {Boolean} persistent
 */
Disk.prototype['persistent'] = undefined;

/**
 * @member {String} downloadUrl
 */
Disk.prototype['downloadUrl'] = undefined;

/**
 * @member {module:model/DiskMetadata} metadata
 */
Disk.prototype['metadata'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Disk['StateEnum'] = {

    /**
     * value: "Uploading"
     * @const
     */
    "Uploading": "Uploading",

    /**
     * value: "Online"
     * @const
     */
    "Online": "Online",

    /**
     * value: "Attached"
     * @const
     */
    "Attached": "Attached",

    /**
     * value: "Detached"
     * @const
     */
    "Detached": "Detached",

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Disk['TypeEnum'] = {

    /**
     * value: "archive"
     * @const
     */
    "archive": "archive",

    /**
     * value: "volume"
     * @const
     */
    "volume": "volume",

    /**
     * value: "ssd"
     * @const
     */
    "ssd": "ssd",

    /**
     * value: "hissd"
     * @const
     */
    "hissd": "hissd",

    /**
     * value: "ephemeral-hissd"
     * @const
     */
    "ephemeral-hissd": "ephemeral-hissd",

    /**
     * value: "replica"
     * @const
     */
    "replica": "replica"
};



export default Disk;

