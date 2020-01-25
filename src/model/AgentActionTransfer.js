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
 * The AgentActionTransfer model module.
 * @module model/AgentActionTransfer
 * @version 0.0.3
 */
class AgentActionTransfer {
    /**
     * Constructs a new <code>AgentActionTransfer</code>.
     * @alias module:model/AgentActionTransfer
     * @param project {String} 
     */
    constructor(project) { 
        
        AgentActionTransfer.initialize(this, project);
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
     * Constructs a <code>AgentActionTransfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentActionTransfer} obj Optional instance to populate.
     * @return {module:model/AgentActionTransfer} The populated <code>AgentActionTransfer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentActionTransfer();

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
AgentActionTransfer.prototype['project'] = undefined;






export default AgentActionTransfer;

