**hyperone**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / IamProjectApi

# Class: IamProjectApi

IamProjectApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **IamProjectApi**

## Index

### Constructors

* [constructor](_api_.iamprojectapi.md#constructor)

### Properties

* [axios](_api_.iamprojectapi.md#axios)
* [basePath](_api_.iamprojectapi.md#basepath)
* [configuration](_api_.iamprojectapi.md#configuration)

### Methods

* [iamProjectBillingList](_api_.iamprojectapi.md#iamprojectbillinglist)
* [iamProjectCreate](_api_.iamprojectapi.md#iamprojectcreate)
* [iamProjectCredentialStoreCreate](_api_.iamprojectapi.md#iamprojectcredentialstorecreate)
* [iamProjectCredentialStoreDelete](_api_.iamprojectapi.md#iamprojectcredentialstoredelete)
* [iamProjectCredentialStoreGet](_api_.iamprojectapi.md#iamprojectcredentialstoreget)
* [iamProjectCredentialStoreList](_api_.iamprojectapi.md#iamprojectcredentialstorelist)
* [iamProjectCredentialStorePatch](_api_.iamprojectapi.md#iamprojectcredentialstorepatch)
* [iamProjectDelete](_api_.iamprojectapi.md#iamprojectdelete)
* [iamProjectEventGet](_api_.iamprojectapi.md#iamprojecteventget)
* [iamProjectEventList](_api_.iamprojectapi.md#iamprojecteventlist)
* [iamProjectGet](_api_.iamprojectapi.md#iamprojectget)
* [iamProjectInvitationAccept](_api_.iamprojectapi.md#iamprojectinvitationaccept)
* [iamProjectInvitationDelete](_api_.iamprojectapi.md#iamprojectinvitationdelete)
* [iamProjectInvitationGet](_api_.iamprojectapi.md#iamprojectinvitationget)
* [iamProjectInvitationList](_api_.iamprojectapi.md#iamprojectinvitationlist)
* [iamProjectInvoiceList](_api_.iamprojectapi.md#iamprojectinvoicelist)
* [iamProjectList](_api_.iamprojectapi.md#iamprojectlist)
* [iamProjectOwnershipCreate](_api_.iamprojectapi.md#iamprojectownershipcreate)
* [iamProjectOwnershipDelete](_api_.iamprojectapi.md#iamprojectownershipdelete)
* [iamProjectOwnershipGet](_api_.iamprojectapi.md#iamprojectownershipget)
* [iamProjectOwnershipList](_api_.iamprojectapi.md#iamprojectownershiplist)
* [iamProjectPaymentList](_api_.iamprojectapi.md#iamprojectpaymentlist)
* [iamProjectProformaList](_api_.iamprojectapi.md#iamprojectproformalist)
* [iamProjectQuotaGet](_api_.iamprojectapi.md#iamprojectquotaget)
* [iamProjectQuotaLimitPatch](_api_.iamprojectapi.md#iamprojectquotalimitpatch)
* [iamProjectQuotaList](_api_.iamprojectapi.md#iamprojectquotalist)
* [iamProjectServiceGet](_api_.iamprojectapi.md#iamprojectserviceget)
* [iamProjectServiceList](_api_.iamprojectapi.md#iamprojectservicelist)
* [iamProjectTagCreate](_api_.iamprojectapi.md#iamprojecttagcreate)
* [iamProjectTagDelete](_api_.iamprojectapi.md#iamprojecttagdelete)
* [iamProjectTagGet](_api_.iamprojectapi.md#iamprojecttagget)
* [iamProjectTagList](_api_.iamprojectapi.md#iamprojecttaglist)
* [iamProjectTagPut](_api_.iamprojectapi.md#iamprojecttagput)
* [iamProjectThresholdCreate](_api_.iamprojectapi.md#iamprojectthresholdcreate)
* [iamProjectThresholdDelete](_api_.iamprojectapi.md#iamprojectthresholddelete)
* [iamProjectThresholdGet](_api_.iamprojectapi.md#iamprojectthresholdget)
* [iamProjectThresholdList](_api_.iamprojectapi.md#iamprojectthresholdlist)
* [iamProjectUpdate](_api_.iamprojectapi.md#iamprojectupdate)

## Constructors

### constructor

\+ **new IamProjectApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [IamProjectApi](_api_.iamprojectapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [IamProjectApi](_api_.iamprojectapi.md)

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

### iamProjectBillingList

▸ **iamProjectBillingList**(`projectId`: string, `start?`: string, `end?`: string, `resourceType?`: string, `options?`: any): Promise\<AxiosResponse\<[Billing](../interfaces/_api_.billing.md)[]>>

*Defined in api.ts:32074*

List iam/project.billing

**`summary`** List iam/project.billing

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`start?` | string | - |
`end?` | string | - |
`resourceType?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Billing](../interfaces/_api_.billing.md)[]>>

___

### iamProjectCreate

▸ **iamProjectCreate**(`iamProjectCreate`: [IamProjectCreate](../interfaces/_api_.iamprojectcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

*Defined in api.ts:32087*

Create project

**`summary`** Create iam/project

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type |
------ | ------ |
`iamProjectCreate` | [IamProjectCreate](../interfaces/_api_.iamprojectcreate.md) |
`xIdempotencyKey?` | string |
`options?` | any |

**Returns:** Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

___

### iamProjectCredentialStoreCreate

▸ **iamProjectCredentialStoreCreate**(`projectId`: string, `projectCredential`: [ProjectCredential](../interfaces/_api_.projectcredential.md), `options?`: any): Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)>>

*Defined in api.ts:32100*

Create iam/project.credentialStore

**`summary`** Create iam/project.credentialStore

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`projectCredential` | [ProjectCredential](../interfaces/_api_.projectcredential.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)>>

___

### iamProjectCredentialStoreDelete

▸ **iamProjectCredentialStoreDelete**(`projectId`: string, `credentialStoreId`: string, `options?`: any): Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

*Defined in api.ts:32113*

Delete iam/project.credentialStore

**`summary`** Delete iam/project.credentialStore

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`credentialStoreId` | string | credentialStoreId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

___

### iamProjectCredentialStoreGet

▸ **iamProjectCredentialStoreGet**(`projectId`: string, `credentialStoreId`: string, `options?`: any): Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)>>

*Defined in api.ts:32126*

Get iam/project.credentialStore

**`summary`** Get iam/project.credentialStore

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`credentialStoreId` | string | credentialStoreId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)>>

___

### iamProjectCredentialStoreList

▸ **iamProjectCredentialStoreList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)[]>>

*Defined in api.ts:32138*

List iam/project.credentialStore

**`summary`** List iam/project.credentialStore

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)[]>>

___

### iamProjectCredentialStorePatch

▸ **iamProjectCredentialStorePatch**(`projectId`: string, `credentialStoreId`: string, `iamProjectCredentialStorePatch`: [IamProjectCredentialStorePatch](../interfaces/_api_.iamprojectcredentialstorepatch.md), `options?`: any): Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)>>

*Defined in api.ts:32152*

Update iam/project.credentialStore

**`summary`** Update iam/project.credentialStore

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`credentialStoreId` | string | credentialStoreId |
`iamProjectCredentialStorePatch` | [IamProjectCredentialStorePatch](../interfaces/_api_.iamprojectcredentialstorepatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)>>

___

### iamProjectDelete

▸ **iamProjectDelete**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:32164*

Delete project

**`summary`** Delete iam/project

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamProjectEventGet

▸ **iamProjectEventGet**(`projectId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:32177*

Get iam/project.event

**`summary`** Get iam/project.event

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### iamProjectEventList

▸ **iamProjectEventList**(`projectId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:32191*

List iam/project.event

**`summary`** List iam/project.event

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### iamProjectGet

▸ **iamProjectGet**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

*Defined in api.ts:32203*

Returns a single project

**`summary`** Get iam/project

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

___

### iamProjectInvitationAccept

▸ **iamProjectInvitationAccept**(`projectId`: string, `invitationId`: string, `iamProjectInvitationAccept`: [IamProjectInvitationAccept](../interfaces/_api_.iamprojectinvitationaccept.md), `options?`: any): Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

*Defined in api.ts:32217*

action accept

**`summary`** Accept iam/project.invitation

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`invitationId` | string | invitationId |
`iamProjectInvitationAccept` | [IamProjectInvitationAccept](../interfaces/_api_.iamprojectinvitationaccept.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

___

### iamProjectInvitationDelete

▸ **iamProjectInvitationDelete**(`projectId`: string, `invitationId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:32230*

Delete iam/project.invitation

**`summary`** Delete iam/project.invitation

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`invitationId` | string | invitationId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamProjectInvitationGet

▸ **iamProjectInvitationGet**(`projectId`: string, `invitationId`: string, `options?`: any): Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

*Defined in api.ts:32243*

Get iam/project.invitation

**`summary`** Get iam/project.invitation

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`invitationId` | string | invitationId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

___

### iamProjectInvitationList

▸ **iamProjectInvitationList**(`projectId`: string, `resource?`: string, `options?`: any): Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)[]>>

*Defined in api.ts:32256*

List iam/project.invitation

**`summary`** List iam/project.invitation

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`resource?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)[]>>

___

### iamProjectInvoiceList

▸ **iamProjectInvoiceList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Invoice](../interfaces/_api_.invoice.md)[]>>

*Defined in api.ts:32268*

List iam/project.invoice

**`summary`** List iam/project.invoice

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Invoice](../interfaces/_api_.invoice.md)[]>>

___

### iamProjectList

▸ **iamProjectList**(`name?`: string, `$limit?`: number, `active?`: boolean, `organisation?`: string, `$lean?`: boolean, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)[]>>

*Defined in api.ts:32286*

List project

**`summary`** List iam/project

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type |
------ | ------ |
`name?` | string |
`$limit?` | number |
`active?` | boolean |
`organisation?` | string |
`$lean?` | boolean |
`tagValue?` | string |
`tagKey?` | string |
`options?` | any |

**Returns:** Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)[]>>

___

### iamProjectOwnershipCreate

▸ **iamProjectOwnershipCreate**(`projectId`: string, `iamProjectOwnershipCreate`: [IamProjectOwnershipCreate](../interfaces/_api_.iamprojectownershipcreate.md), `options?`: any): Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

*Defined in api.ts:32299*

Create iam/project.ownership

**`summary`** Create iam/project.ownership

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`iamProjectOwnershipCreate` | [IamProjectOwnershipCreate](../interfaces/_api_.iamprojectownershipcreate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

___

### iamProjectOwnershipDelete

▸ **iamProjectOwnershipDelete**(`projectId`: string, `ownershipId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:32312*

Delete iam/project.ownership

**`summary`** Delete iam/project.ownership

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`ownershipId` | string | ownershipId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamProjectOwnershipGet

▸ **iamProjectOwnershipGet**(`projectId`: string, `ownershipId`: string, `options?`: any): Promise\<AxiosResponse\<[Ownership](../interfaces/_api_.ownership.md)>>

*Defined in api.ts:32325*

Get iam/project.ownership

**`summary`** Get iam/project.ownership

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`ownershipId` | string | ownershipId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ownership](../interfaces/_api_.ownership.md)>>

___

### iamProjectOwnershipList

▸ **iamProjectOwnershipList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Ownership](../interfaces/_api_.ownership.md)[]>>

*Defined in api.ts:32337*

List iam/project.ownership

**`summary`** List iam/project.ownership

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ownership](../interfaces/_api_.ownership.md)[]>>

___

### iamProjectPaymentList

▸ **iamProjectPaymentList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)[]>>

*Defined in api.ts:32349*

List iam/project.payment

**`summary`** List iam/project.payment

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)[]>>

___

### iamProjectProformaList

▸ **iamProjectProformaList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)[]>>

*Defined in api.ts:32361*

List iam/project.proforma

**`summary`** List iam/project.proforma

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)[]>>

___

### iamProjectQuotaGet

▸ **iamProjectQuotaGet**(`projectId`: string, `quotaId`: string, `options?`: any): Promise\<AxiosResponse\<[Quota](../interfaces/_api_.quota.md)>>

*Defined in api.ts:32374*

Get iam/project.quota

**`summary`** Get iam/project.quota

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`quotaId` | string | quotaId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Quota](../interfaces/_api_.quota.md)>>

___

### iamProjectQuotaLimitPatch

▸ **iamProjectQuotaLimitPatch**(`projectId`: string, `quotaId`: string, `iamProjectQuotaLimitPatch`: [IamProjectQuotaLimitPatch](../interfaces/_api_.iamprojectquotalimitpatch.md), `options?`: any): Promise\<AxiosResponse\<[QuotaLimit](../interfaces/_api_.quotalimit.md)>>

*Defined in api.ts:32388*

Update iam/project.limit

**`summary`** Update iam/project.limit

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`quotaId` | string | quotaId |
`iamProjectQuotaLimitPatch` | [IamProjectQuotaLimitPatch](../interfaces/_api_.iamprojectquotalimitpatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[QuotaLimit](../interfaces/_api_.quotalimit.md)>>

___

### iamProjectQuotaList

▸ **iamProjectQuotaList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Quota](../interfaces/_api_.quota.md)[]>>

*Defined in api.ts:32400*

List iam/project.quota

**`summary`** List iam/project.quota

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Quota](../interfaces/_api_.quota.md)[]>>

___

### iamProjectServiceGet

▸ **iamProjectServiceGet**(`projectId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:32413*

Get iam/project.service

**`summary`** Get iam/project.service

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### iamProjectServiceList

▸ **iamProjectServiceList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:32425*

List iam/project.service

**`summary`** List iam/project.service

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### iamProjectTagCreate

▸ **iamProjectTagCreate**(`projectId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:32438*

Create iam/project.tag

**`summary`** Create iam/project.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### iamProjectTagDelete

▸ **iamProjectTagDelete**(`projectId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:32451*

Delete iam/project.tag

**`summary`** Delete iam/project.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamProjectTagGet

▸ **iamProjectTagGet**(`projectId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:32464*

Get iam/project.tag

**`summary`** Get iam/project.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### iamProjectTagList

▸ **iamProjectTagList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:32476*

List iam/project.tag

**`summary`** List iam/project.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### iamProjectTagPut

▸ **iamProjectTagPut**(`projectId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:32489*

Replace iam/project.tag

**`summary`** Replace iam/project.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### iamProjectThresholdCreate

▸ **iamProjectThresholdCreate**(`projectId`: string, `iamProjectThresholdCreate`: [IamProjectThresholdCreate](../interfaces/_api_.iamprojectthresholdcreate.md), `options?`: any): Promise\<AxiosResponse\<[ProjectThreshold](../interfaces/_api_.projectthreshold.md)>>

*Defined in api.ts:32502*

Create iam/project.threshold

**`summary`** Create iam/project.threshold

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`iamProjectThresholdCreate` | [IamProjectThresholdCreate](../interfaces/_api_.iamprojectthresholdcreate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProjectThreshold](../interfaces/_api_.projectthreshold.md)>>

___

### iamProjectThresholdDelete

▸ **iamProjectThresholdDelete**(`projectId`: string, `thresholdId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:32515*

Delete iam/project.threshold

**`summary`** Delete iam/project.threshold

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`thresholdId` | string | thresholdId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamProjectThresholdGet

▸ **iamProjectThresholdGet**(`projectId`: string, `thresholdId`: string, `options?`: any): Promise\<AxiosResponse\<[ProjectThreshold](../interfaces/_api_.projectthreshold.md)>>

*Defined in api.ts:32528*

Get iam/project.threshold

**`summary`** Get iam/project.threshold

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`thresholdId` | string | thresholdId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProjectThreshold](../interfaces/_api_.projectthreshold.md)>>

___

### iamProjectThresholdList

▸ **iamProjectThresholdList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[ProjectThreshold](../interfaces/_api_.projectthreshold.md)[]>>

*Defined in api.ts:32540*

List iam/project.threshold

**`summary`** List iam/project.threshold

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProjectThreshold](../interfaces/_api_.projectthreshold.md)[]>>

___

### iamProjectUpdate

▸ **iamProjectUpdate**(`projectId`: string, `iamProjectUpdate`: [IamProjectUpdate](../interfaces/_api_.iamprojectupdate.md), `options?`: any): Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

*Defined in api.ts:32553*

Returns modified project

**`summary`** Update iam/project

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`iamProjectUpdate` | [IamProjectUpdate](../interfaces/_api_.iamprojectupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>
