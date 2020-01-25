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
import UserCredential from './UserCredential';
import UserLimit from './UserLimit';
import UserNetworkAcl from './UserNetworkAcl';
import UserPasswordReset from './UserPasswordReset';
import UserServices from './UserServices';

/**
 * The User model module.
 * @module model/User
 * @version 0.0.3
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     */
    constructor() { 
        
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('familyName')) {
                obj['familyName'] = ApiClient.convertToType(data['familyName'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
            if (data.hasOwnProperty('passwordReset')) {
                obj['passwordReset'] = UserPasswordReset.constructFromObject(data['passwordReset']);
            }
            if (data.hasOwnProperty('verified')) {
                obj['verified'] = ApiClient.convertToType(data['verified'], 'Boolean');
            }
            if (data.hasOwnProperty('lang')) {
                obj['lang'] = ApiClient.convertToType(data['lang'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = UserLimit.constructFromObject(data['limit']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], [UserServices]);
            }
            if (data.hasOwnProperty('credential')) {
                obj['credential'] = UserCredential.constructFromObject(data['credential']);
            }
            if (data.hasOwnProperty('networkAcl')) {
                obj['networkAcl'] = ApiClient.convertToType(data['networkAcl'], [UserNetworkAcl]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
User.prototype['_id'] = undefined;

/**
 * @member {String} id
 */
User.prototype['id'] = undefined;

/**
 * @member {String} name
 */
User.prototype['name'] = undefined;

/**
 * @member {String} familyName
 */
User.prototype['familyName'] = undefined;

/**
 * @member {Date} createdOn
 */
User.prototype['createdOn'] = undefined;

/**
 * @member {Date} modifiedOn
 */
User.prototype['modifiedOn'] = undefined;

/**
 * @member {module:model/UserPasswordReset} passwordReset
 */
User.prototype['passwordReset'] = undefined;

/**
 * @member {Boolean} verified
 */
User.prototype['verified'] = undefined;

/**
 * @member {module:model/User.LangEnum} lang
 * @default 'en'
 */
User.prototype['lang'] = 'en';

/**
 * @member {String} phone
 */
User.prototype['phone'] = undefined;

/**
 * @member {module:model/UserLimit} limit
 */
User.prototype['limit'] = undefined;

/**
 * @member {Array.<module:model/UserServices>} services
 */
User.prototype['services'] = undefined;

/**
 * @member {module:model/UserCredential} credential
 */
User.prototype['credential'] = undefined;

/**
 * @member {Array.<module:model/UserNetworkAcl>} networkAcl
 */
User.prototype['networkAcl'] = undefined;





/**
 * Allowed values for the <code>lang</code> property.
 * @enum {String}
 * @readonly
 */
User['LangEnum'] = {

    /**
     * value: "en"
     * @const
     */
    "en": "en",

    /**
     * value: "pl"
     * @const
     */
    "pl": "pl"
};



export default User;

