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
 * The FirewallPostIngress model module.
 * @module model/FirewallPostIngress
 * @version 0.0.2
 */
class FirewallPostIngress {
    /**
     * Constructs a new <code>FirewallPostIngress</code>.
     * @alias module:model/FirewallPostIngress
     */
    constructor() { 
        
        FirewallPostIngress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FirewallPostIngress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FirewallPostIngress} obj Optional instance to populate.
     * @return {module:model/FirewallPostIngress} The populated <code>FirewallPostIngress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FirewallPostIngress();

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
FirewallPostIngress.prototype['name'] = undefined;

/**
 * @member {String} action
 */
FirewallPostIngress.prototype['action'] = undefined;

/**
 * @member {Number} priority
 */
FirewallPostIngress.prototype['priority'] = undefined;

/**
 * @member {Array.<String>} filter
 */
FirewallPostIngress.prototype['filter'] = undefined;

/**
 * @member {Array.<String>} external
 */
FirewallPostIngress.prototype['external'] = undefined;

/**
 * @member {Array.<String>} internal
 */
FirewallPostIngress.prototype['internal'] = undefined;






export default FirewallPostIngress;

