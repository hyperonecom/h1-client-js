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
 * The JournalPostCredential model module.
 * @module model/JournalPostCredential
 * @version 0.0.3
 */
class JournalPostCredential {
    /**
     * Constructs a new <code>JournalPostCredential</code>.
     * @alias module:model/JournalPostCredential
     * @param name {String} 
     * @param type {String} 
     * @param value {String} 
     */
    constructor(name, type, value) { 
        
        JournalPostCredential.initialize(this, name, type, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, value) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>JournalPostCredential</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalPostCredential} obj Optional instance to populate.
     * @return {module:model/JournalPostCredential} The populated <code>JournalPostCredential</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JournalPostCredential();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
JournalPostCredential.prototype['name'] = undefined;

/**
 * @member {String} type
 */
JournalPostCredential.prototype['type'] = undefined;

/**
 * @member {String} value
 */
JournalPostCredential.prototype['value'] = undefined;

/**
 * @member {String} token
 */
JournalPostCredential.prototype['token'] = undefined;






export default JournalPostCredential;

