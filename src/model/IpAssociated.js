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
 * The IpAssociated model module.
 * @module model/IpAssociated
 * @version 0.0.2
 */
class IpAssociated {
    /**
     * Constructs a new <code>IpAssociated</code>.
     * @alias module:model/IpAssociated
     */
    constructor() { 
        
        IpAssociated.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IpAssociated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IpAssociated} obj Optional instance to populate.
     * @return {module:model/IpAssociated} The populated <code>IpAssociated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IpAssociated();

            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('fip')) {
                obj['fip'] = ApiClient.convertToType(data['fip'], 'String');
            }
            if (data.hasOwnProperty('netadp')) {
                obj['netadp'] = ApiClient.convertToType(data['netadp'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ip
 */
IpAssociated.prototype['ip'] = undefined;

/**
 * @member {String} fip
 */
IpAssociated.prototype['fip'] = undefined;

/**
 * @member {String} netadp
 */
IpAssociated.prototype['netadp'] = undefined;






export default IpAssociated;
