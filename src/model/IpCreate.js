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
 * The IpCreate model module.
 * @module model/IpCreate
 * @version 0.0.2
 */
class IpCreate {
    /**
     * Constructs a new <code>IpCreate</code>.
     * @alias module:model/IpCreate
     */
    constructor() { 
        
        IpCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IpCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IpCreate} obj Optional instance to populate.
     * @return {module:model/IpCreate} The populated <code>IpCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IpCreate();

            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} service
 * @default '5721c6f59ce9da3f72e30fd1'
 */
IpCreate.prototype['service'] = '5721c6f59ce9da3f72e30fd1';

/**
 * @member {Object} tag
 */
IpCreate.prototype['tag'] = undefined;






export default IpCreate;
