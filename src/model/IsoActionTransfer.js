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
 * The IsoActionTransfer model module.
 * @module model/IsoActionTransfer
 * @version 0.0.2
 */
class IsoActionTransfer {
    /**
     * Constructs a new <code>IsoActionTransfer</code>.
     * @alias module:model/IsoActionTransfer
     * @param project {String} 
     */
    constructor(project) { 
        
        IsoActionTransfer.initialize(this, project);
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
     * Constructs a <code>IsoActionTransfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IsoActionTransfer} obj Optional instance to populate.
     * @return {module:model/IsoActionTransfer} The populated <code>IsoActionTransfer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IsoActionTransfer();

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
IsoActionTransfer.prototype['project'] = undefined;






export default IsoActionTransfer;
