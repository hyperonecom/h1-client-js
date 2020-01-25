/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ContainerExpose from './ContainerExpose';
import ContainerVolumes from './ContainerVolumes';
import Event from './Event';
import ProjectServices from './ProjectServices';

/**
 * The Container model module.
 * @module model/Container
 * @version 0.0.3
 */
class Container {
    /**
     * Constructs a new <code>Container</code>.
     * @alias module:model/Container
     */
    constructor() { 
        
        Container.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Container</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Container} obj Optional instance to populate.
     * @return {module:model/Container} The populated <code>Container</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Container();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
                obj['tag'] = ApiClient.convertToType(data['tag'], {'String': 'String'});
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('command')) {
                obj['command'] = ApiClient.convertToType(data['command'], 'String');
            }
            if (data.hasOwnProperty('volumes')) {
                obj['volumes'] = ApiClient.convertToType(data['volumes'], [ContainerVolumes]);
            }
            if (data.hasOwnProperty('expose')) {
                obj['expose'] = ApiClient.convertToType(data['expose'], [ContainerExpose]);
            }
            if (data.hasOwnProperty('env')) {
                obj['env'] = ApiClient.convertToType(data['env'], ['String']);
            }
            if (data.hasOwnProperty('fqdn')) {
                obj['fqdn'] = ApiClient.convertToType(data['fqdn'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Container.prototype['_id'] = undefined;

/**
 * @member {String} id
 */
Container.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Container.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ProjectServices>} services
 */
Container.prototype['services'] = undefined;

/**
 * @member {String} flavour
 */
Container.prototype['flavour'] = undefined;

/**
 * @member {Date} modifiedOn
 */
Container.prototype['modifiedOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
Container.prototype['modifiedBy'] = undefined;

/**
 * @member {String} createdBy
 */
Container.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdOn
 */
Container.prototype['createdOn'] = undefined;

/**
 * @member {Array.<String>} accessRights
 */
Container.prototype['accessRights'] = undefined;

/**
 * @member {Boolean} processing
 */
Container.prototype['processing'] = undefined;

/**
 * @member {Boolean} created
 */
Container.prototype['created'] = undefined;

/**
 * @member {Array.<module:model/Event>} queue
 */
Container.prototype['queue'] = undefined;

/**
 * @member {module:model/Container.StateEnum} state
 */
Container.prototype['state'] = undefined;

/**
 * @member {Object.<String, String>} tag
 */
Container.prototype['tag'] = undefined;

/**
 * @member {String} project
 */
Container.prototype['project'] = undefined;

/**
 * @member {String} image
 */
Container.prototype['image'] = undefined;

/**
 * @member {String} command
 */
Container.prototype['command'] = undefined;

/**
 * @member {Array.<module:model/ContainerVolumes>} volumes
 */
Container.prototype['volumes'] = undefined;

/**
 * @member {Array.<module:model/ContainerExpose>} expose
 */
Container.prototype['expose'] = undefined;

/**
 * @member {Array.<String>} env
 */
Container.prototype['env'] = undefined;

/**
 * @member {String} fqdn
 */
Container.prototype['fqdn'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Container['StateEnum'] = {

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
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown"
};



export default Container;

