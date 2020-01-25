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
 * The NetworkActionFirewallAdd model module.
 * @module model/NetworkActionFirewallAdd
 * @version 0.0.3
 */
class NetworkActionFirewallAdd {
    /**
     * Constructs a new <code>NetworkActionFirewallAdd</code>.
     * @alias module:model/NetworkActionFirewallAdd
     * @param firewall {String} 
     */
    constructor(firewall) { 
        
        NetworkActionFirewallAdd.initialize(this, firewall);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firewall) { 
        obj['firewall'] = firewall;
    }

    /**
     * Constructs a <code>NetworkActionFirewallAdd</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkActionFirewallAdd} obj Optional instance to populate.
     * @return {module:model/NetworkActionFirewallAdd} The populated <code>NetworkActionFirewallAdd</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkActionFirewallAdd();

            if (data.hasOwnProperty('firewall')) {
                obj['firewall'] = ApiClient.convertToType(data['firewall'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} firewall
 */
NetworkActionFirewallAdd.prototype['firewall'] = undefined;






export default NetworkActionFirewallAdd;

