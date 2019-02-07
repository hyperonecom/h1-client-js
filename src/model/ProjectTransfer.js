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
 * The ProjectTransfer model module.
 * @module model/ProjectTransfer
 * @version 0.0.2
 */
class ProjectTransfer {
    /**
     * Constructs a new <code>ProjectTransfer</code>.
     * @alias module:model/ProjectTransfer
     */
    constructor() { 
        
        ProjectTransfer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectTransfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectTransfer} obj Optional instance to populate.
     * @return {module:model/ProjectTransfer} The populated <code>ProjectTransfer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectTransfer();

            if (data.hasOwnProperty('organisation')) {
                obj['organisation'] = ApiClient.convertToType(data['organisation'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} organisation
 */
ProjectTransfer.prototype['organisation'] = undefined;






export default ProjectTransfer;
