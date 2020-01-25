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
 * The ProjectLimitContainer model module.
 * @module model/ProjectLimitContainer
 * @version 0.0.3
 */
class ProjectLimitContainer {
    /**
     * Constructs a new <code>ProjectLimitContainer</code>.
     * @alias module:model/ProjectLimitContainer
     * @param count {Number} 
     */
    constructor(count) { 
        
        ProjectLimitContainer.initialize(this, count);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, count) { 
        obj['count'] = count;
    }

    /**
     * Constructs a <code>ProjectLimitContainer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectLimitContainer} obj Optional instance to populate.
     * @return {module:model/ProjectLimitContainer} The populated <code>ProjectLimitContainer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectLimitContainer();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 * @default 10
 */
ProjectLimitContainer.prototype['count'] = 10;






export default ProjectLimitContainer;

