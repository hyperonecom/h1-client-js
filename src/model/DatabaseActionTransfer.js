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
 * The DatabaseActionTransfer model module.
 * @module model/DatabaseActionTransfer
 * @version 0.0.3
 */
class DatabaseActionTransfer {
    /**
     * Constructs a new <code>DatabaseActionTransfer</code>.
     * @alias module:model/DatabaseActionTransfer
     * @param project {String} 
     */
    constructor(project) { 
        
        DatabaseActionTransfer.initialize(this, project);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, project) { 
        obj['project'] = project;
    }

    /**
     * Constructs a <code>DatabaseActionTransfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatabaseActionTransfer} obj Optional instance to populate.
     * @return {module:model/DatabaseActionTransfer} The populated <code>DatabaseActionTransfer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatabaseActionTransfer();

            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} project
 */
DatabaseActionTransfer.prototype['project'] = undefined;






export default DatabaseActionTransfer;

