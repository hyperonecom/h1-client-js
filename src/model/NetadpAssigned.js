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
 * The NetadpAssigned model module.
 * @module model/NetadpAssigned
 * @version 0.0.2
 */
class NetadpAssigned {
    /**
     * Constructs a new <code>NetadpAssigned</code>.
     * @alias module:model/NetadpAssigned
     */
    constructor() { 
        
        NetadpAssigned.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetadpAssigned</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetadpAssigned} obj Optional instance to populate.
     * @return {module:model/NetadpAssigned} The populated <code>NetadpAssigned</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetadpAssigned();

            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NetadpAssigned.ResourceEnum} resource
 */
NetadpAssigned.prototype['resource'] = undefined;

/**
 * @member {String} id
 */
NetadpAssigned.prototype['id'] = undefined;





/**
 * Allowed values for the <code>resource</code> property.
 * @enum {String}
 * @readonly
 */
NetadpAssigned['ResourceEnum'] = {

    /**
     * value: "vm"
     * @const
     */
    "vm": "vm",

    /**
     * value: "netgw"
     * @const
     */
    "netgw": "netgw",

    /**
     * value: "network"
     * @const
     */
    "network": "network",

    /**
     * value: "ip"
     * @const
     */
    "ip": "ip"
};



export default NetadpAssigned;
