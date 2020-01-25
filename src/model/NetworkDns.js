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
 * The NetworkDns model module.
 * @module model/NetworkDns
 * @version 0.0.3
 */
class NetworkDns {
    /**
     * Constructs a new <code>NetworkDns</code>.
     * @alias module:model/NetworkDns
     */
    constructor() { 
        
        NetworkDns.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetworkDns</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkDns} obj Optional instance to populate.
     * @return {module:model/NetworkDns} The populated <code>NetworkDns</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkDns();

            if (data.hasOwnProperty('nameservers')) {
                obj['nameservers'] = ApiClient.convertToType(data['nameservers'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} nameservers
 */
NetworkDns.prototype['nameservers'] = undefined;






export default NetworkDns;

