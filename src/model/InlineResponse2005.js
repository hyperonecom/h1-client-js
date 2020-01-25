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
 * The InlineResponse2005 model module.
 * @module model/InlineResponse2005
 * @version 0.0.3
 */
class InlineResponse2005 {
    /**
     * Constructs a new <code>InlineResponse2005</code>.
     * @alias module:model/InlineResponse2005
     * @param priority {Number} 
     * @param action {module:model/InlineResponse2005.ActionEnum} 
     */
    constructor(priority, action) { 
        
        InlineResponse2005.initialize(this, priority, action);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, priority, action) { 
        obj['priority'] = priority;
        obj['action'] = action;
    }

    /**
     * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], ['String']);
            }
            if (data.hasOwnProperty('external')) {
                obj['external'] = ApiClient.convertToType(data['external'], ['String']);
            }
            if (data.hasOwnProperty('internal')) {
                obj['internal'] = ApiClient.convertToType(data['internal'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
InlineResponse2005.prototype['name'] = undefined;

/**
 * @member {String} description
 */
InlineResponse2005.prototype['description'] = undefined;

/**
 * @member {Date} createdOn
 */
InlineResponse2005.prototype['createdOn'] = undefined;

/**
 * @member {String} createdBy
 */
InlineResponse2005.prototype['createdBy'] = undefined;

/**
 * @member {Date} modifiedOn
 */
InlineResponse2005.prototype['modifiedOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
InlineResponse2005.prototype['modifiedBy'] = undefined;

/**
 * @member {Number} priority
 */
InlineResponse2005.prototype['priority'] = undefined;

/**
 * @member {module:model/InlineResponse2005.ActionEnum} action
 */
InlineResponse2005.prototype['action'] = undefined;

/**
 * @member {Array.<String>} filter
 */
InlineResponse2005.prototype['filter'] = undefined;

/**
 * @member {Array.<String>} external
 */
InlineResponse2005.prototype['external'] = undefined;

/**
 * @member {Array.<String>} internal
 */
InlineResponse2005.prototype['internal'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2005['ActionEnum'] = {

    /**
     * value: "allow"
     * @const
     */
    "allow": "allow",

    /**
     * value: "deny"
     * @const
     */
    "deny": "deny"
};



export default InlineResponse2005;

