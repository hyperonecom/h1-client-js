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
 * The WebsitePatchCredentialcertificateId model module.
 * @module model/WebsitePatchCredentialcertificateId
 * @version 0.0.3
 */
class WebsitePatchCredentialcertificateId {
    /**
     * Constructs a new <code>WebsitePatchCredentialcertificateId</code>.
     * @alias module:model/WebsitePatchCredentialcertificateId
     */
    constructor() { 
        
        WebsitePatchCredentialcertificateId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebsitePatchCredentialcertificateId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebsitePatchCredentialcertificateId} obj Optional instance to populate.
     * @return {module:model/WebsitePatchCredentialcertificateId} The populated <code>WebsitePatchCredentialcertificateId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebsitePatchCredentialcertificateId();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
WebsitePatchCredentialcertificateId.prototype['name'] = undefined;






export default WebsitePatchCredentialcertificateId;

