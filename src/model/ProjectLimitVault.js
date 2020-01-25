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
 * The ProjectLimitVault model module.
 * @module model/ProjectLimitVault
 * @version 0.0.3
 */
class ProjectLimitVault {
    /**
     * Constructs a new <code>ProjectLimitVault</code>.
     * @alias module:model/ProjectLimitVault
     * @param count {Number} 
     * @param size {Number} 
     */
    constructor(count, size) { 
        
        ProjectLimitVault.initialize(this, count, size);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, count, size) { 
        obj['count'] = count;
        obj['size'] = size;
    }

    /**
     * Constructs a <code>ProjectLimitVault</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectLimitVault} obj Optional instance to populate.
     * @return {module:model/ProjectLimitVault} The populated <code>ProjectLimitVault</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectLimitVault();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 * @default 10
 */
ProjectLimitVault.prototype['count'] = 10;

/**
 * @member {Number} size
 * @default 1024
 */
ProjectLimitVault.prototype['size'] = 1024;






export default ProjectLimitVault;

