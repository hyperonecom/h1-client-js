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
import DiskMetadata from './DiskMetadata';

/**
 * The DiskCreate model module.
 * @module model/DiskCreate
 * @version 0.0.3
 */
class DiskCreate {
    /**
     * Constructs a new <code>DiskCreate</code>.
     * @alias module:model/DiskCreate
     * @param service {String} 
     */
    constructor(service) { 
        
        DiskCreate.initialize(this, service);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, service) { 
        obj['service'] = service;
    }

    /**
     * Constructs a <code>DiskCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiskCreate} obj Optional instance to populate.
     * @return {module:model/DiskCreate} The populated <code>DiskCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiskCreate();

            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('cloud')) {
                obj['cloud'] = ApiClient.convertToType(data['cloud'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = DiskMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {String} service
 */
DiskCreate.prototype['service'] = undefined;

/**
 * @member {String} name
 */
DiskCreate.prototype['name'] = undefined;

/**
 * @member {Number} size
 */
DiskCreate.prototype['size'] = undefined;

/**
 * @member {String} cloud
 */
DiskCreate.prototype['cloud'] = undefined;

/**
 * @member {module:model/DiskMetadata} metadata
 */
DiskCreate.prototype['metadata'] = undefined;

/**
 * @member {String} source
 */
DiskCreate.prototype['source'] = undefined;

/**
 * @member {Object.<String, String>} tag
 */
DiskCreate.prototype['tag'] = undefined;






export default DiskCreate;

