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

/**
 * The Credential model module.
 * @module model/Credential
 * @version 0.0.3
 */
class Credential {
    /**
     * Constructs a new <code>Credential</code>.
     * @alias module:model/Credential
     */
    constructor() { 
        
        Credential.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Credential</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Credential} obj Optional instance to populate.
     * @return {module:model/Credential} The populated <code>Credential</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Credential();

            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('fingerprint')) {
                obj['fingerprint'] = ApiClient.convertToType(data['fingerprint'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} createdBy
 */
Credential.prototype['createdBy'] = undefined;

/**
 * @member {String} createdOn
 */
Credential.prototype['createdOn'] = undefined;

/**
 * @member {String} name
 */
Credential.prototype['name'] = undefined;

/**
 * @member {String} type
 */
Credential.prototype['type'] = undefined;

/**
 * @member {String} _id
 */
Credential.prototype['_id'] = undefined;

/**
 * @member {String} id
 */
Credential.prototype['id'] = undefined;

/**
 * @member {String} fingerprint
 */
Credential.prototype['fingerprint'] = undefined;

/**
 * @member {String} value
 */
Credential.prototype['value'] = undefined;






export default Credential;

