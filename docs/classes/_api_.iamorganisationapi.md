**@hyperone/client**

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

* [iamOrganisationBillingList](_api_.iamorganisationapi.md#iamorganisationbillinglist)
* [iamOrganisationCreate](_api_.iamorganisationapi.md#iamorganisationcreate)
* [iamOrganisationDelete](_api_.iamorganisationapi.md#iamorganisationdelete)
* [iamOrganisationEventGet](_api_.iamorganisationapi.md#iamorganisationeventget)
* [iamOrganisationEventList](_api_.iamorganisationapi.md#iamorganisationeventlist)
* [iamOrganisationGet](_api_.iamorganisationapi.md#iamorganisationget)
* [iamOrganisationInvitationAccept](_api_.iamorganisationapi.md#iamorganisationinvitationaccept)
* [iamOrganisationInvitationDelete](_api_.iamorganisationapi.md#iamorganisationinvitationdelete)
* [iamOrganisationInvitationGet](_api_.iamorganisationapi.md#iamorganisationinvitationget)
* [iamOrganisationInvitationList](_api_.iamorganisationapi.md#iamorganisationinvitationlist)
* [iamOrganisationInvoiceDownload](_api_.iamorganisationapi.md#iamorganisationinvoicedownload)
* [iamOrganisationInvoiceGet](_api_.iamorganisationapi.md#iamorganisationinvoiceget)
* [iamOrganisationInvoiceList](_api_.iamorganisationapi.md#iamorganisationinvoicelist)
* [iamOrganisationList](_api_.iamorganisationapi.md#iamorganisationlist)
* [iamOrganisationOwnershipCreate](_api_.iamorganisationapi.md#iamorganisationownershipcreate)
* [iamOrganisationOwnershipDelete](_api_.iamorganisationapi.md#iamorganisationownershipdelete)
* [iamOrganisationOwnershipGet](_api_.iamorganisationapi.md#iamorganisationownershipget)
* [iamOrganisationOwnershipList](_api_.iamorganisationapi.md#iamorganisationownershiplist)
* [iamOrganisationPaymentAllocate](_api_.iamorganisationapi.md#iamorganisationpaymentallocate)
* [iamOrganisationPaymentGet](_api_.iamorganisationapi.md#iamorganisationpaymentget)
* [iamOrganisationPaymentList](_api_.iamorganisationapi.md#iamorganisationpaymentlist)
* [iamOrganisationProformaCreate](_api_.iamorganisationapi.md#iamorganisationproformacreate)
* [iamOrganisationProformaDownload](_api_.iamorganisationapi.md#iamorganisationproformadownload)
* [iamOrganisationProformaGet](_api_.iamorganisationapi.md#iamorganisationproformaget)
* [iamOrganisationProformaList](_api_.iamorganisationapi.md#iamorganisationproformalist)
* [iamOrganisationServiceGet](_api_.iamorganisationapi.md#iamorganisationserviceget)
* [iamOrganisationServiceList](_api_.iamorganisationapi.md#iamorganisationservicelist)
* [iamOrganisationTransferAccept](_api_.iamorganisationapi.md#iamorganisationtransferaccept)
* [iamOrganisationTransferGet](_api_.iamorganisationapi.md#iamorganisationtransferget)
* [iamOrganisationTransferList](_api_.iamorganisationapi.md#iamorganisationtransferlist)
* [iamOrganisationUpdate](_api_.iamorganisationapi.md#iamorganisationupdate)

## Constructors

### constructor

\+ **new IamOrganisationApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [IamOrganisationApi](_api_.iamorganisationapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

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

*Defined in base.ts:52*

___

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](_base_.baseapi.md).[basePath](_base_.baseapi.md#basepath)*

*Defined in base.ts:52*

___

### configuration

• `Protected` **configuration**: [Configuration](_configuration_.configuration.md) \| undefined

*Inherited from [BaseAPI](_base_.baseapi.md).[configuration](_base_.baseapi.md#configuration)*

*Defined in base.ts:50*

## Methods

### iamOrganisationBillingList

▸ **iamOrganisationBillingList**(`organisationId`: string, `start?`: string, `end?`: string, `resourceType?`: string, `options?`: any): Promise\<AxiosResponse\<[Billing](../interfaces/_api_.billing.md)[]>>

*Defined in api.ts:23816*

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

### iamOrganisationCreate

▸ **iamOrganisationCreate**(`iamOrganisationCreate`: [IamOrganisationCreate](../interfaces/_api_.iamorganisationcreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

*Defined in api.ts:23830*

Create organisation

**`summary`** Create iam/organisation

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type |
------ | ------ |
`iamOrganisationCreate` | [IamOrganisationCreate](../interfaces/_api_.iamorganisationcreate.md) |
`xIdempotencyKey?` | string |
`xDryRun?` | string |
`options?` | any |

**Returns:** Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

___

### iamOrganisationDelete

▸ **iamOrganisationDelete**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:23842*

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

### iamOrganisationEventGet

▸ **iamOrganisationEventGet**(`organisationId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:23855*

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

### iamOrganisationEventList

▸ **iamOrganisationEventList**(`organisationId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:23869*

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

### iamOrganisationGet

▸ **iamOrganisationGet**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

*Defined in api.ts:23881*

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

### iamOrganisationInvitationAccept

▸ **iamOrganisationInvitationAccept**(`organisationId`: string, `invitationId`: string, `iamOrganisationInvitationAccept`: [IamOrganisationInvitationAccept](../interfaces/_api_.iamorganisationinvitationaccept.md), `options?`: any): Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

*Defined in api.ts:23895*

action accept

**`summary`** Accept iam/organisation.invitation

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`invitationId` | string | invitationId |
`iamOrganisationInvitationAccept` | [IamOrganisationInvitationAccept](../interfaces/_api_.iamorganisationinvitationaccept.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

___

### iamOrganisationInvitationDelete

▸ **iamOrganisationInvitationDelete**(`organisationId`: string, `invitationId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:23908*

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

### iamOrganisationInvitationGet

▸ **iamOrganisationInvitationGet**(`organisationId`: string, `invitationId`: string, `options?`: any): Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

*Defined in api.ts:23921*

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

### iamOrganisationInvitationList

▸ **iamOrganisationInvitationList**(`organisationId`: string, `resource?`: string, `options?`: any): Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)[]>>

*Defined in api.ts:23934*

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

### iamOrganisationInvoiceDownload

▸ **iamOrganisationInvoiceDownload**(`organisationId`: string, `invoiceId`: string, `options?`: any): Promise\<AxiosResponse\<any>>

*Defined in api.ts:23947*

action download

**`summary`** Download iam/organisation.invoice

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

### iamOrganisationInvoiceGet

▸ **iamOrganisationInvoiceGet**(`organisationId`: string, `invoiceId`: string, `options?`: any): Promise\<AxiosResponse\<[Invoice](../interfaces/_api_.invoice.md)>>

*Defined in api.ts:23960*

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

**Returns:** Promise\<AxiosResponse\<[Invoice](../interfaces/_api_.invoice.md)>>

___

### iamOrganisationInvoiceList

▸ **iamOrganisationInvoiceList**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<[Invoice](../interfaces/_api_.invoice.md)[]>>

*Defined in api.ts:23972*

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

### iamOrganisationList

▸ **iamOrganisationList**(`name?`: string, `billingCompany?`: string, `$limit?`: number, `active?`: boolean, `options?`: any): Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)[]>>

*Defined in api.ts:23987*

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

### iamOrganisationOwnershipCreate

▸ **iamOrganisationOwnershipCreate**(`organisationId`: string, `iamOrganisationOwnershipCreate`: [IamOrganisationOwnershipCreate](../interfaces/_api_.iamorganisationownershipcreate.md), `options?`: any): Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

*Defined in api.ts:24000*

Create iam/organisation.ownership

**`summary`** Create iam/organisation.ownership

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`iamOrganisationOwnershipCreate` | [IamOrganisationOwnershipCreate](../interfaces/_api_.iamorganisationownershipcreate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

___

### iamOrganisationOwnershipDelete

▸ **iamOrganisationOwnershipDelete**(`organisationId`: string, `ownershipId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:24013*

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

### iamOrganisationOwnershipGet

▸ **iamOrganisationOwnershipGet**(`organisationId`: string, `ownershipId`: string, `options?`: any): Promise\<AxiosResponse\<[Ownership](../interfaces/_api_.ownership.md)>>

*Defined in api.ts:24026*

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

### iamOrganisationOwnershipList

▸ **iamOrganisationOwnershipList**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<[Ownership](../interfaces/_api_.ownership.md)[]>>

*Defined in api.ts:24038*

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

### iamOrganisationPaymentAllocate

▸ **iamOrganisationPaymentAllocate**(`organisationId`: string, `paymentId`: string, `iamOrganisationPaymentAllocate`: [IamOrganisationPaymentAllocate](../interfaces/_api_.iamorganisationpaymentallocate.md), `options?`: any): Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)>>

*Defined in api.ts:24052*

action allocate

**`summary`** Allocate iam/organisation.payment

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`paymentId` | string | paymentId |
`iamOrganisationPaymentAllocate` | [IamOrganisationPaymentAllocate](../interfaces/_api_.iamorganisationpaymentallocate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)>>

___

### iamOrganisationPaymentGet

▸ **iamOrganisationPaymentGet**(`organisationId`: string, `paymentId`: string, `options?`: any): Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)>>

*Defined in api.ts:24065*

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

### iamOrganisationPaymentList

▸ **iamOrganisationPaymentList**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)[]>>

*Defined in api.ts:24077*

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

### iamOrganisationProformaCreate

▸ **iamOrganisationProformaCreate**(`organisationId`: string, `iamOrganisationProformaCreate`: [IamOrganisationProformaCreate](../interfaces/_api_.iamorganisationproformacreate.md), `options?`: any): Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)>>

*Defined in api.ts:24090*

Create iam/organisation.proforma

**`summary`** Create iam/organisation.proforma

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`iamOrganisationProformaCreate` | [IamOrganisationProformaCreate](../interfaces/_api_.iamorganisationproformacreate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)>>

___

### iamOrganisationProformaDownload

▸ **iamOrganisationProformaDownload**(`organisationId`: string, `proformaId`: string, `options?`: any): Promise\<AxiosResponse\<any>>

*Defined in api.ts:24103*

action download

**`summary`** Download iam/organisation.proforma

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

### iamOrganisationProformaGet

▸ **iamOrganisationProformaGet**(`organisationId`: string, `proformaId`: string, `options?`: any): Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)>>

*Defined in api.ts:24116*

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

### iamOrganisationProformaList

▸ **iamOrganisationProformaList**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)[]>>

*Defined in api.ts:24128*

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

### iamOrganisationServiceGet

▸ **iamOrganisationServiceGet**(`organisationId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:24141*

Get iam/organisation.service

**`summary`** Get iam/organisation.service

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### iamOrganisationServiceList

▸ **iamOrganisationServiceList**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:24153*

List iam/organisation.service

**`summary`** List iam/organisation.service

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### iamOrganisationTransferAccept

▸ **iamOrganisationTransferAccept**(`organisationId`: string, `transferId`: string, `iamOrganisationTransferAccept`: [IamOrganisationTransferAccept](../interfaces/_api_.iamorganisationtransferaccept.md), `options?`: any): Promise\<AxiosResponse\<[Transfer](../interfaces/_api_.transfer.md)>>

*Defined in api.ts:24167*

action accept

**`summary`** Accept iam/organisation.transfer

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`transferId` | string | transferId |
`iamOrganisationTransferAccept` | [IamOrganisationTransferAccept](../interfaces/_api_.iamorganisationtransferaccept.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Transfer](../interfaces/_api_.transfer.md)>>

___

### iamOrganisationTransferGet

▸ **iamOrganisationTransferGet**(`organisationId`: string, `transferId`: string, `options?`: any): Promise\<AxiosResponse\<[Transfer](../interfaces/_api_.transfer.md)>>

*Defined in api.ts:24180*

Get iam/organisation.transfer

**`summary`** Get iam/organisation.transfer

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`transferId` | string | transferId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Transfer](../interfaces/_api_.transfer.md)>>

___

### iamOrganisationTransferList

▸ **iamOrganisationTransferList**(`organisationId`: string, `options?`: any): Promise\<AxiosResponse\<[Transfer](../interfaces/_api_.transfer.md)[]>>

*Defined in api.ts:24192*

List iam/organisation.transfer

**`summary`** List iam/organisation.transfer

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Transfer](../interfaces/_api_.transfer.md)[]>>

___

### iamOrganisationUpdate

▸ **iamOrganisationUpdate**(`organisationId`: string, `iamOrganisationUpdate`: [IamOrganisationUpdate](../interfaces/_api_.iamorganisationupdate.md), `options?`: any): Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>

*Defined in api.ts:24205*

Returns modified organisation

**`summary`** Update iam/organisation

**`throws`** {RequiredError}

**`memberof`** IamOrganisationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`iamOrganisationUpdate` | [IamOrganisationUpdate](../interfaces/_api_.iamorganisationupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Organisation](../interfaces/_api_.organisation.md)>>
