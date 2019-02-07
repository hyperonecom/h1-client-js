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
 * The FirewallPostEgress model module.
 * @module model/FirewallPostEgress
 * @version 0.0.2
 */
class FirewallPostEgress {
    /**
     * Constructs a new <code>FirewallPostEgress</code>.
     * @alias module:model/FirewallPostEgress
     */
    constructor() { 
        
        FirewallPostEgress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FirewallPostEgress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FirewallPostEgress} obj Optional instance to populate.
     * @return {module:model/FirewallPostEgress} The populated <code>FirewallPostEgress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FirewallPostEgress();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
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
FirewallPostEgress.prototype['name'] = undefined;

/**
 * @member {String} action
 */
FirewallPostEgress.prototype['action'] = undefined;

/**
 * @member {Number} priority
 */
FirewallPostEgress.prototype['priority'] = undefined;

/**
 * @member {Array.<String>} filter
 */
FirewallPostEgress.prototype['filter'] = undefined;

/**
 * @member {Array.<String>} external
 */
FirewallPostEgress.prototype['external'] = undefined;

/**
 * @member {Array.<String>} internal
 */
FirewallPostEgress.prototype['internal'] = undefined;






export default FirewallPostEgress;

