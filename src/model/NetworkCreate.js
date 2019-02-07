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

/**
 * The NetworkCreate model module.
 * @module model/NetworkCreate
 * @version 0.0.2
 */
class NetworkCreate {
    /**
     * Constructs a new <code>NetworkCreate</code>.
     * @alias module:model/NetworkCreate
     */
    constructor() { 
        
        NetworkCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetworkCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkCreate} obj Optional instance to populate.
     * @return {module:model/NetworkCreate} The populated <code>NetworkCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkCreate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('gateway')) {
                obj['gateway'] = ApiClient.convertToType(data['gateway'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
NetworkCreate.prototype['name'] = undefined;

/**
 * @member {String} address
 */
NetworkCreate.prototype['address'] = undefined;

/**
 * @member {String} gateway
 */
NetworkCreate.prototype['gateway'] = undefined;

/**
 * @member {Object} tag
 */
NetworkCreate.prototype['tag'] = undefined;






export default NetworkCreate;
