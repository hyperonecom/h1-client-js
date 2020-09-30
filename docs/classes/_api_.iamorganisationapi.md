**hyperone**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / IamOrganisationApi

# Class: IamOrganisationApi

IamOrganisationApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **IamOrganisationApi**

## Index

### Constructors

* [constructor](_api_.iamorganisationapi.md#constructor)

### Properties

* [axios](_api_.iamorganisationapi.md#axios)
* [basePath](_api_.iamorganisationapi.md#basepath)
* [configuration](_api_.iamorganisationapi.md#configuration)

### Methods

* [organisationBillingList](_api_.iamorganisationapi.md#organisationbillinglist)
* [organisationCreate](_api_.iamorganisationapi.md#organisationcreate)
* [organisationDelete](_api_.iamorganisationapi.md#organisationdelete)
* [organisationEventGet](_api_.iamorganisationapi.md#organisationeventget)
* [organisationEventList](_api_.iamorganisationapi.md#organisationeventlist)
* [organisationGet](_api_.iamorganisationapi.md#organisationget)
* [organisationInvitationAccept](_api_.iamorganisationapi.md#organisationinvitationaccept)
* [organisationInvitationDelete](_api_.iamorganisationapi.md#organisationinvitationdelete)
* [organisationInvitationGet](_api_.iamorganisationapi.md#organisationinvitationget)
* [organisationInvitationList](_api_.iamorganisationapi.md#organisationinvitationlist)
* [organisationInvoiceDownload](_api_.iamorganisationapi.md#organisationinvoicedownload)
* [organisationInvoiceGet](_api_.iamorganisationapi.md#organisationinvoiceget)
* [organisationInvoiceList](_api_.iamorganisationapi.md#organisationinvoicelist)
* [organisationList](_api_.iamorganisationapi.md#organisationlist)
* [organisationOwnershipCreate](_api_.iamorganisationapi.md#organisationownershipcreate)
* [organisationOwnershipDelete](_api_.iamorganisationapi.md#organisationownershipdelete)
* [organisationOwnershipGet](_api_.iamorganisationapi.md#organisationownershipget)
* [organisationOwnershipList](_api_.iamorganisationapi.md#organisationownershiplist)
* [organisationPaymentAllocate](_api_.iamorganisationapi.md#organisationpaymentallocate)
* [organisationPaymentGet](_api_.iamorganisationapi.md#organisationpaymentget)
* [organisationPaymentList](_api_.iamorganisationapi.md#organisationpaymentlist)
* [organisationProformaCreate](_api_.iamorganisationapi.md#organisationproformacreate)
* [organisationProformaDownload](_api_.iamorganisationapi.md#organisationproformadownload)
* [organisationProformaGet](_api_.iamorganisationapi.md#organisationproformaget)
* [organisationProformaList](_api_.iamorganisationapi.md#organisationproformalist)
* [organisationTransferAccept](_api_.iamorganisationapi.md#organisationtransferaccept)
* [organisationUpdate](_api_.iamorganisationapi.md#organisationupdate)

## Constructors

### constructor

\+ **new IamOrganisationApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [IamOrganisationApi](_api_.iamorganisationapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [IamOrganisationApi](_api_.iamorganisationapi.md)

## Properties

### axios

• `Protected` **axios**: AxiosInstance

*Inherited from [BaseAPI](_base_.baseapi.md).[axios](_base_.baseapi.md#axios)*

*Defined in base.ts:51*

___

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](_base_.baseapi.md).[basePath](_base_.baseapi.md#basepath)*

*Defined in base.ts:51*

___

### configuration

• `Protected` **configuration**: [Configuration](_configuration_.configuration.md) \| undefined

*Inherited from [BaseAPI](_base_.baseapi.md).[configuration](_base_.baseapi.md#configuration)*

*Defined in base.ts:49*

## Methods

### organisationBillingList

▸ **organisationBillingList**(`organisationId`: string, `start?`: string, `end?`: string, `resourceType?`: string, `options?`: any): Promise\<AxiosResponse\<[Billing](../interfaces/_api_.billing.md)[]>>

*Defined in api.ts:24266*

List iam/organisation.billing

**`summary`** List iam/organisation.billing

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`start?` | string | - |
`end?` | string | - |
`resourceType?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Billing](../interfaces/_api_.billing.md)[]>>

___

### organisationCreate

▸ **organisationCreate**(`organisationCreate`: [OrganisationCreate](../interfaces/_api_.organisationcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

*Defined in api.ts:24279*

Create organisation

**`summary`** Create iam/organisation

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type |
------ | ------ |
`organisationCreate` | [OrganisationCreate](../interfaces/_api_.organisationcreate.md) |
`xIdempotencyKey?` | string |
`options?` | any |

**Returns:** Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

___

### organisationDelete

▸ **organisationDelete**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:24291*

Delete organisation

**`summary`** Delete iam/organisation

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### organisationEventGet

▸ **organisationEventGet**(`organisationId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:24304*

Get iam/organisation.event

**`summary`** Get iam/organisation.event

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### organisationEventList

▸ **organisationEventList**(`organisationId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:24318*

List iam/organisation.event

**`summary`** List iam/organisation.event

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### organisationGet

▸ **organisationGet**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

*Defined in api.ts:24330*

Returns a single organisation

**`summary`** Get iam/organisation

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

___

### organisationInvitationAccept

▸ **organisationInvitationAccept**(`organisationId`: string, `invitationId`: string, `organisationInvitationAccept`: [OrganisationInvitationAccept](../interfaces/_api_.organisationinvitationaccept.md), `options?`: any): Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

*Defined in api.ts:24344*

Create iam/organisation.actions

**`summary`** Create iam/organisation.actions

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`invitationId` | string | invitationId |
`organisationInvitationAccept` | [OrganisationInvitationAccept](../interfaces/_api_.organisationinvitationaccept.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

___

### organisationInvitationDelete

▸ **organisationInvitationDelete**(`organisationId`: string, `invitationId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:24357*

Delete iam/organisation.invitation

**`summary`** Delete iam/organisation.invitation

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`invitationId` | string | invitationId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### organisationInvitationGet

▸ **organisationInvitationGet**(`organisationId`: string, `invitationId`: string, `options?`: any): Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

*Defined in api.ts:24370*

Get iam/organisation.invitation

**`summary`** Get iam/organisation.invitation

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`invitationId` | string | invitationId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

___

### organisationInvitationList

▸ **organisationInvitationList**(`organisationId`: string, `resource?`: string, `options?`: any): Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)[]>>

*Defined in api.ts:24383*

List iam/organisation.invitation

**`summary`** List iam/organisation.invitation

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`resource?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)[]>>

___

### organisationInvoiceDownload

▸ **organisationInvoiceDownload**(`organisationId`: string, `invoiceId`: string, `options?`: any): Promise\<AxiosResponse\<any>>

*Defined in api.ts:24396*

Create iam/organisation.actions

**`summary`** Create iam/organisation.actions

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`invoiceId` | string | invoiceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<any>>

___

### organisationInvoiceGet

▸ **organisationInvoiceGet**(`organisationId`: string, `invoiceId`: string, `options?`: any): Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)>>

*Defined in api.ts:24409*

Get iam/organisation.invoice

**`summary`** Get iam/organisation.invoice

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`invoiceId` | string | invoiceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)>>

___

### organisationInvoiceList

▸ **organisationInvoiceList**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<[Invoice](../interfaces/_api_.invoice.md)[]>>

*Defined in api.ts:24421*

List iam/organisation.invoice

**`summary`** List iam/organisation.invoice

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Invoice](../interfaces/_api_.invoice.md)[]>>

___

### organisationList

▸ **organisationList**(`name?`: string, `billingCompany?`: string, `$limit?`: number, `active?`: boolean, `options?`: any): Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)[]>>

*Defined in api.ts:24436*

List organisation

**`summary`** List iam/organisation

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type |
------ | ------ |
`name?` | string |
`billingCompany?` | string |
`$limit?` | number |
`active?` | boolean |
`options?` | any |

**Returns:** Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)[]>>

___

### organisationOwnershipCreate

▸ **organisationOwnershipCreate**(`organisationId`: string, `organisationOwnershipCreate`: [OrganisationOwnershipCreate](../interfaces/_api_.organisationownershipcreate.md), `options?`: any): Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

*Defined in api.ts:24449*

Create iam/organisation.ownership

**`summary`** Create iam/organisation.ownership

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`organisationOwnershipCreate` | [OrganisationOwnershipCreate](../interfaces/_api_.organisationownershipcreate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

___

### organisationOwnershipDelete

▸ **organisationOwnershipDelete**(`organisationId`: string, `ownershipId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:24462*

Delete iam/organisation.ownership

**`summary`** Delete iam/organisation.ownership

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`ownershipId` | string | ownershipId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### organisationOwnershipGet

▸ **organisationOwnershipGet**(`organisationId`: string, `ownershipId`: string, `options?`: any): Promise\<AxiosResponse\<[Ownership](../interfaces/_api_.ownership.md)>>

*Defined in api.ts:24475*

Get iam/organisation.ownership

**`summary`** Get iam/organisation.ownership

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`ownershipId` | string | ownershipId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ownership](../interfaces/_api_.ownership.md)>>

___

### organisationOwnershipList

▸ **organisationOwnershipList**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<[Ownership](../interfaces/_api_.ownership.md)[]>>

*Defined in api.ts:24487*

List iam/organisation.ownership

**`summary`** List iam/organisation.ownership

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ownership](../interfaces/_api_.ownership.md)[]>>

___

### organisationPaymentAllocate

▸ **organisationPaymentAllocate**(`organisationId`: string, `paymentId`: string, `organisationPaymentAllocate`: [OrganisationPaymentAllocate](../interfaces/_api_.organisationpaymentallocate.md), `options?`: any): Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)>>

*Defined in api.ts:24501*

Create iam/organisation.actions

**`summary`** Create iam/organisation.actions

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`paymentId` | string | paymentId |
`organisationPaymentAllocate` | [OrganisationPaymentAllocate](../interfaces/_api_.organisationpaymentallocate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)>>

___

### organisationPaymentGet

▸ **organisationPaymentGet**(`organisationId`: string, `paymentId`: string, `options?`: any): Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)>>

*Defined in api.ts:24514*

Get iam/organisation.payment

**`summary`** Get iam/organisation.payment

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`paymentId` | string | paymentId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)>>

___

### organisationPaymentList

▸ **organisationPaymentList**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)[]>>

*Defined in api.ts:24526*

List iam/organisation.payment

**`summary`** List iam/organisation.payment

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)[]>>

___

### organisationProformaCreate

▸ **organisationProformaCreate**(`organisationId`: string, `organisationProformaCreate`: [OrganisationProformaCreate](../interfaces/_api_.organisationproformacreate.md), `options?`: any): Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)>>

*Defined in api.ts:24539*

Create iam/organisation.proforma

**`summary`** Create iam/organisation.proforma

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`organisationProformaCreate` | [OrganisationProformaCreate](../interfaces/_api_.organisationproformacreate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)>>

___

### organisationProformaDownload

▸ **organisationProformaDownload**(`organisationId`: string, `proformaId`: string, `options?`: any): Promise\<AxiosResponse\<any>>

*Defined in api.ts:24552*

Create iam/organisation.actions

**`summary`** Create iam/organisation.actions

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`proformaId` | string | proformaId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<any>>

___

### organisationProformaGet

▸ **organisationProformaGet**(`organisationId`: string, `proformaId`: string, `options?`: any): Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)>>

*Defined in api.ts:24565*

Get iam/organisation.proforma

**`summary`** Get iam/organisation.proforma

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`proformaId` | string | proformaId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)>>

___

### organisationProformaList

▸ **organisationProformaList**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)[]>>

*Defined in api.ts:24577*

List iam/organisation.proforma

**`summary`** List iam/organisation.proforma

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)[]>>

___

### organisationTransferAccept

▸ **organisationTransferAccept**(`organisationId`: string, `organisationTransferAccept`: [OrganisationTransferAccept](../interfaces/_api_.organisationtransferaccept.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

*Defined in api.ts:24591*

action transfer_accept

**`summary`** Transfer accept iam/organisation

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`organisationTransferAccept` | [OrganisationTransferAccept](../interfaces/_api_.organisationtransferaccept.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

___

### organisationUpdate

▸ **organisationUpdate**(`organisationId`: string, `organisationUpdate`: [OrganisationUpdate](../interfaces/_api_.organisationupdate.md), `options?`: any): Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

*Defined in api.ts:24604*

Returns modified organisation

**`summary`** Update iam/organisation

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`organisationUpdate` | [OrganisationUpdate](../interfaces/_api_.organisationupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>
