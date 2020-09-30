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

* [projectBillingList](_api_.iamprojectapi.md#projectbillinglist)
* [projectCreate](_api_.iamprojectapi.md#projectcreate)
* [projectCredentialStoreCreate](_api_.iamprojectapi.md#projectcredentialstorecreate)
* [projectCredentialStoreDelete](_api_.iamprojectapi.md#projectcredentialstoredelete)
* [projectCredentialStoreGet](_api_.iamprojectapi.md#projectcredentialstoreget)
* [projectCredentialStoreList](_api_.iamprojectapi.md#projectcredentialstorelist)
* [projectCredentialStorePatch](_api_.iamprojectapi.md#projectcredentialstorepatch)
* [projectDelete](_api_.iamprojectapi.md#projectdelete)
* [projectEventGet](_api_.iamprojectapi.md#projecteventget)
* [projectEventList](_api_.iamprojectapi.md#projecteventlist)
* [projectGet](_api_.iamprojectapi.md#projectget)
* [projectInvitationAccept](_api_.iamprojectapi.md#projectinvitationaccept)
* [projectInvitationDelete](_api_.iamprojectapi.md#projectinvitationdelete)
* [projectInvitationGet](_api_.iamprojectapi.md#projectinvitationget)
* [projectInvitationList](_api_.iamprojectapi.md#projectinvitationlist)
* [projectInvoiceList](_api_.iamprojectapi.md#projectinvoicelist)
* [projectList](_api_.iamprojectapi.md#projectlist)
* [projectOwnershipCreate](_api_.iamprojectapi.md#projectownershipcreate)
* [projectOwnershipDelete](_api_.iamprojectapi.md#projectownershipdelete)
* [projectOwnershipGet](_api_.iamprojectapi.md#projectownershipget)
* [projectOwnershipList](_api_.iamprojectapi.md#projectownershiplist)
* [projectPaymentList](_api_.iamprojectapi.md#projectpaymentlist)
* [projectProformaList](_api_.iamprojectapi.md#projectproformalist)
* [projectQuotaGet](_api_.iamprojectapi.md#projectquotaget)
* [projectQuotaLimitPatch](_api_.iamprojectapi.md#projectquotalimitpatch)
* [projectQuotaList](_api_.iamprojectapi.md#projectquotalist)
* [projectServiceGet](_api_.iamprojectapi.md#projectserviceget)
* [projectServiceList](_api_.iamprojectapi.md#projectservicelist)
* [projectTagCreate](_api_.iamprojectapi.md#projecttagcreate)
* [projectTagDelete](_api_.iamprojectapi.md#projecttagdelete)
* [projectTagGet](_api_.iamprojectapi.md#projecttagget)
* [projectTagList](_api_.iamprojectapi.md#projecttaglist)
* [projectTagPut](_api_.iamprojectapi.md#projecttagput)
* [projectUpdate](_api_.iamprojectapi.md#projectupdate)

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

### projectBillingList

▸ **projectBillingList**(`projectId`: string, `start?`: string, `end?`: string, `resourceType?`: string, `options?`: any): Promise\<AxiosResponse\<[Billing](../interfaces/_api_.billing.md)[]>>

*Defined in api.ts:31003*

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

### projectCreate

▸ **projectCreate**(`projectCreate`: [ProjectCreate](../interfaces/_api_.projectcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

*Defined in api.ts:31016*

Create project

**`summary`** Create iam/project

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type |
------ | ------ |
`projectCreate` | [ProjectCreate](../interfaces/_api_.projectcreate.md) |
`xIdempotencyKey?` | string |
`options?` | any |

**Returns:** Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

___

### projectCredentialStoreCreate

▸ **projectCredentialStoreCreate**(`projectId`: string, `projectCredential`: [ProjectCredential](../interfaces/_api_.projectcredential.md), `options?`: any): Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)>>

*Defined in api.ts:31029*

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

### projectCredentialStoreDelete

▸ **projectCredentialStoreDelete**(`projectId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

*Defined in api.ts:31042*

Delete iam/project.credentialStore

**`summary`** Delete iam/project.credentialStore

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

___

### projectCredentialStoreGet

▸ **projectCredentialStoreGet**(`projectId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)>>

*Defined in api.ts:31055*

Get iam/project.credentialStore

**`summary`** Get iam/project.credentialStore

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)>>

___

### projectCredentialStoreList

▸ **projectCredentialStoreList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)[]>>

*Defined in api.ts:31067*

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

### projectCredentialStorePatch

▸ **projectCredentialStorePatch**(`projectId`: string, `credentialId`: string, `projectCredentialStorePatch`: [ProjectCredentialStorePatch](../interfaces/_api_.projectcredentialstorepatch.md), `options?`: any): Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)>>

*Defined in api.ts:31081*

Update iam/project.credentialStore

**`summary`** Update iam/project.credentialStore

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`credentialId` | string | credentialId |
`projectCredentialStorePatch` | [ProjectCredentialStorePatch](../interfaces/_api_.projectcredentialstorepatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProjectCredential](../interfaces/_api_.projectcredential.md)>>

___

### projectDelete

▸ **projectDelete**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:31093*

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

### projectEventGet

▸ **projectEventGet**(`projectId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:31106*

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

### projectEventList

▸ **projectEventList**(`projectId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:31120*

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

### projectGet

▸ **projectGet**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

*Defined in api.ts:31132*

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

### projectInvitationAccept

▸ **projectInvitationAccept**(`projectId`: string, `invitationId`: string, `projectInvitationAccept`: [ProjectInvitationAccept](../interfaces/_api_.projectinvitationaccept.md), `options?`: any): Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

*Defined in api.ts:31146*

Create iam/project.actions

**`summary`** Create iam/project.actions

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`invitationId` | string | invitationId |
`projectInvitationAccept` | [ProjectInvitationAccept](../interfaces/_api_.projectinvitationaccept.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

___

### projectInvitationDelete

▸ **projectInvitationDelete**(`projectId`: string, `invitationId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:31159*

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

### projectInvitationGet

▸ **projectInvitationGet**(`projectId`: string, `invitationId`: string, `options?`: any): Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)>>

*Defined in api.ts:31172*

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

### projectInvitationList

▸ **projectInvitationList**(`projectId`: string, `resource?`: string, `options?`: any): Promise\<AxiosResponse\<[Invitation](../interfaces/_api_.invitation.md)[]>>

*Defined in api.ts:31185*

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

### projectInvoiceList

▸ **projectInvoiceList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Invoice](../interfaces/_api_.invoice.md)[]>>

*Defined in api.ts:31197*

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

### projectList

▸ **projectList**(`name?`: string, `$limit?`: number, `active?`: boolean, `organisation?`: string, `$lean?`: boolean, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)[]>>

*Defined in api.ts:31215*

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

### projectOwnershipCreate

▸ **projectOwnershipCreate**(`projectId`: string, `projectOwnershipCreate`: [ProjectOwnershipCreate](../interfaces/_api_.projectownershipcreate.md), `options?`: any): Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

*Defined in api.ts:31228*

Create iam/project.ownership

**`summary`** Create iam/project.ownership

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`projectOwnershipCreate` | [ProjectOwnershipCreate](../interfaces/_api_.projectownershipcreate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

___

### projectOwnershipDelete

▸ **projectOwnershipDelete**(`projectId`: string, `ownershipId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:31241*

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

### projectOwnershipGet

▸ **projectOwnershipGet**(`projectId`: string, `ownershipId`: string, `options?`: any): Promise\<AxiosResponse\<[Ownership](../interfaces/_api_.ownership.md)>>

*Defined in api.ts:31254*

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

### projectOwnershipList

▸ **projectOwnershipList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Ownership](../interfaces/_api_.ownership.md)[]>>

*Defined in api.ts:31266*

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

### projectPaymentList

▸ **projectPaymentList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Payment](../interfaces/_api_.payment.md)[]>>

*Defined in api.ts:31278*

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

### projectProformaList

▸ **projectProformaList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Proforma](../interfaces/_api_.proforma.md)[]>>

*Defined in api.ts:31290*

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

### projectQuotaGet

▸ **projectQuotaGet**(`projectId`: string, `quotaId`: string, `options?`: any): Promise\<AxiosResponse\<[Quota](../interfaces/_api_.quota.md)>>

*Defined in api.ts:31303*

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

### projectQuotaLimitPatch

▸ **projectQuotaLimitPatch**(`projectId`: string, `quotaId`: string, `projectQuotaLimitPatch`: [ProjectQuotaLimitPatch](../interfaces/_api_.projectquotalimitpatch.md), `options?`: any): Promise\<AxiosResponse\<[QuotaLimit](../interfaces/_api_.quotalimit.md)>>

*Defined in api.ts:31317*

Update iam/project.limit

**`summary`** Update iam/project.limit

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`quotaId` | string | quotaId |
`projectQuotaLimitPatch` | [ProjectQuotaLimitPatch](../interfaces/_api_.projectquotalimitpatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[QuotaLimit](../interfaces/_api_.quotalimit.md)>>

___

### projectQuotaList

▸ **projectQuotaList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Quota](../interfaces/_api_.quota.md)[]>>

*Defined in api.ts:31329*

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

### projectServiceGet

▸ **projectServiceGet**(`projectId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:31342*

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

### projectServiceList

▸ **projectServiceList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:31354*

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

### projectTagCreate

▸ **projectTagCreate**(`projectId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:31367*

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

### projectTagDelete

▸ **projectTagDelete**(`projectId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:31380*

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

### projectTagGet

▸ **projectTagGet**(`projectId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:31393*

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

### projectTagList

▸ **projectTagList**(`projectId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:31405*

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

### projectTagPut

▸ **projectTagPut**(`projectId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:31418*

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

### projectUpdate

▸ **projectUpdate**(`projectId`: string, `projectUpdate`: [ProjectUpdate](../interfaces/_api_.projectupdate.md), `options?`: any): Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>

*Defined in api.ts:31431*

Returns modified project

**`summary`** Update iam/project

**`throws`** {RequiredError}

**`memberof`** IamProjectApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`projectUpdate` | [ProjectUpdate](../interfaces/_api_.projectupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Project](../interfaces/_api_.project.md)>>
