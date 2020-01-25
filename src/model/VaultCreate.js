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
import WebsiteCreateCredential from './WebsiteCreateCredential';

/**
 * The VaultCreate model module.
 * @module model/VaultCreate
 * @version 0.0.3
 */
class VaultCreate {
    /**
     * Constructs a new <code>VaultCreate</code>.
     * @alias module:model/VaultCreate
     * @param name {String} 
     * @param size {Number} 
     */
    constructor(name, size) { 
        
        VaultCreate.initialize(this, name, size);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, size) { 
        obj['name'] = name;
        obj['size'] = size;
    }

    /**
     * Constructs a <code>VaultCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VaultCreate} obj Optional instance to populate.
     * @return {module:model/VaultCreate} The populated <code>VaultCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VaultCreate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
            if (data.hasOwnProperty('credential')) {
                obj['credential'] = WebsiteCreateCredential.constructFromObject(data['credential']);
            }
            if (data.hasOwnProperty('snapshot')) {
                obj['snapshot'] = ApiClient.convertToType(data['snapshot'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
VaultCreate.prototype['name'] = undefined;

/**
 * @member {Number} size
 */
VaultCreate.prototype['size'] = undefined;

/**
 * @member {String} service
 * @default '5a0332c4eb8f4ed95c206a12'
 */
VaultCreate.prototype['service'] = '5a0332c4eb8f4ed95c206a12';

/**
 * @member {module:model/WebsiteCreateCredential} credential
 */
VaultCreate.prototype['credential'] = undefined;

/**
 * @member {String} snapshot
 */
VaultCreate.prototype['snapshot'] = undefined;

/**
 * @member {Object.<String, String>} tag
 */
VaultCreate.prototype['tag'] = undefined;






export default VaultCreate;

