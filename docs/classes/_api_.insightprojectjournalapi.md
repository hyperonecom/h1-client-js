**hyperone**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / InsightProjectJournalApi

# Class: InsightProjectJournalApi

InsightProjectJournalApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **InsightProjectJournalApi**

## Index

### Constructors

* [constructor](_api_.insightprojectjournalapi.md#constructor)

### Properties

* [axios](_api_.insightprojectjournalapi.md#axios)
* [basePath](_api_.insightprojectjournalapi.md#basepath)
* [configuration](_api_.insightprojectjournalapi.md#configuration)

### Methods

* [insightProjectJournalCreate](_api_.insightprojectjournalapi.md#insightprojectjournalcreate)
* [insightProjectJournalCredentialCreate](_api_.insightprojectjournalapi.md#insightprojectjournalcredentialcreate)
* [insightProjectJournalCredentialDelete](_api_.insightprojectjournalapi.md#insightprojectjournalcredentialdelete)
* [insightProjectJournalCredentialGet](_api_.insightprojectjournalapi.md#insightprojectjournalcredentialget)
* [insightProjectJournalCredentialList](_api_.insightprojectjournalapi.md#insightprojectjournalcredentiallist)
* [insightProjectJournalCredentialPatch](_api_.insightprojectjournalapi.md#insightprojectjournalcredentialpatch)
* [insightProjectJournalDelete](_api_.insightprojectjournalapi.md#insightprojectjournaldelete)
* [insightProjectJournalEventGet](_api_.insightprojectjournalapi.md#insightprojectjournaleventget)
* [insightProjectJournalEventList](_api_.insightprojectjournalapi.md#insightprojectjournaleventlist)
* [insightProjectJournalGet](_api_.insightprojectjournalapi.md#insightprojectjournalget)
* [insightProjectJournalList](_api_.insightprojectjournalapi.md#insightprojectjournallist)
* [insightProjectJournalLogGet](_api_.insightprojectjournalapi.md#insightprojectjournallogget)
* [insightProjectJournalServiceGet](_api_.insightprojectjournalapi.md#insightprojectjournalserviceget)
* [insightProjectJournalServiceList](_api_.insightprojectjournalapi.md#insightprojectjournalservicelist)
* [insightProjectJournalTagCreate](_api_.insightprojectjournalapi.md#insightprojectjournaltagcreate)
* [insightProjectJournalTagDelete](_api_.insightprojectjournalapi.md#insightprojectjournaltagdelete)
* [insightProjectJournalTagGet](_api_.insightprojectjournalapi.md#insightprojectjournaltagget)
* [insightProjectJournalTagList](_api_.insightprojectjournalapi.md#insightprojectjournaltaglist)
* [insightProjectJournalTagPut](_api_.insightprojectjournalapi.md#insightprojectjournaltagput)
* [insightProjectJournalTransfer](_api_.insightprojectjournalapi.md#insightprojectjournaltransfer)
* [insightProjectJournalUpdate](_api_.insightprojectjournalapi.md#insightprojectjournalupdate)

## Constructors

### constructor

\+ **new InsightProjectJournalApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [InsightProjectJournalApi](_api_.insightprojectjournalapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [InsightProjectJournalApi](_api_.insightprojectjournalapi.md)

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

### insightProjectJournalCreate

▸ **insightProjectJournalCreate**(`projectId`: string, `locationId`: string, `insightProjectJournalCreate`: [InsightProjectJournalCreate](../interfaces/_api_.insightprojectjournalcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Journal](../interfaces/_api_.journal.md)>>

*Defined in api.ts:40188*

Create journal

**`summary`** Create insight/journal

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`insightProjectJournalCreate` | [InsightProjectJournalCreate](../interfaces/_api_.insightprojectjournalcreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Journal](../interfaces/_api_.journal.md)>>

___

### insightProjectJournalCredentialCreate

▸ **insightProjectJournalCredentialCreate**(`projectId`: string, `locationId`: string, `journalId`: string, `journalCredential`: [JournalCredential](../interfaces/_api_.journalcredential.md), `options?`: any): Promise\<AxiosResponse\<[JournalCredential](../interfaces/_api_.journalcredential.md)>>

*Defined in api.ts:40203*

Create insight/journal.credential

**`summary`** Create insight/journal.credential

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`journalCredential` | [JournalCredential](../interfaces/_api_.journalcredential.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[JournalCredential](../interfaces/_api_.journalcredential.md)>>

___

### insightProjectJournalCredentialDelete

▸ **insightProjectJournalCredentialDelete**(`projectId`: string, `locationId`: string, `journalId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[Journal](../interfaces/_api_.journal.md)>>

*Defined in api.ts:40218*

Delete insight/journal.credential

**`summary`** Delete insight/journal.credential

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Journal](../interfaces/_api_.journal.md)>>

___

### insightProjectJournalCredentialGet

▸ **insightProjectJournalCredentialGet**(`projectId`: string, `locationId`: string, `journalId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[JournalCredential](../interfaces/_api_.journalcredential.md)>>

*Defined in api.ts:40233*

Get insight/journal.credential

**`summary`** Get insight/journal.credential

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[JournalCredential](../interfaces/_api_.journalcredential.md)>>

___

### insightProjectJournalCredentialList

▸ **insightProjectJournalCredentialList**(`projectId`: string, `locationId`: string, `journalId`: string, `options?`: any): Promise\<AxiosResponse\<[JournalCredential](../interfaces/_api_.journalcredential.md)[]>>

*Defined in api.ts:40247*

List insight/journal.credential

**`summary`** List insight/journal.credential

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[JournalCredential](../interfaces/_api_.journalcredential.md)[]>>

___

### insightProjectJournalCredentialPatch

▸ **insightProjectJournalCredentialPatch**(`projectId`: string, `locationId`: string, `journalId`: string, `credentialId`: string, `insightProjectJournalCredentialPatch`: [InsightProjectJournalCredentialPatch](../interfaces/_api_.insightprojectjournalcredentialpatch.md), `options?`: any): Promise\<AxiosResponse\<[JournalCredential](../interfaces/_api_.journalcredential.md)>>

*Defined in api.ts:40263*

Update insight/journal.credential

**`summary`** Update insight/journal.credential

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`credentialId` | string | credentialId |
`insightProjectJournalCredentialPatch` | [InsightProjectJournalCredentialPatch](../interfaces/_api_.insightprojectjournalcredentialpatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[JournalCredential](../interfaces/_api_.journalcredential.md)>>

___

### insightProjectJournalDelete

▸ **insightProjectJournalDelete**(`projectId`: string, `locationId`: string, `journalId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:40277*

Delete journal

**`summary`** Delete insight/journal

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### insightProjectJournalEventGet

▸ **insightProjectJournalEventGet**(`projectId`: string, `locationId`: string, `journalId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:40292*

Get insight/journal.event

**`summary`** Get insight/journal.event

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### insightProjectJournalEventList

▸ **insightProjectJournalEventList**(`projectId`: string, `locationId`: string, `journalId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:40308*

List insight/journal.event

**`summary`** List insight/journal.event

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### insightProjectJournalGet

▸ **insightProjectJournalGet**(`projectId`: string, `locationId`: string, `journalId`: string, `options?`: any): Promise\<AxiosResponse\<[Journal](../interfaces/_api_.journal.md)>>

*Defined in api.ts:40322*

Returns a single journal

**`summary`** Get insight/journal

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Journal](../interfaces/_api_.journal.md)>>

___

### insightProjectJournalList

▸ **insightProjectJournalList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Journal](../interfaces/_api_.journal.md)[]>>

*Defined in api.ts:40338*

List journal

**`summary`** List insight/journal

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Journal](../interfaces/_api_.journal.md)[]>>

___

### insightProjectJournalLogGet

▸ **insightProjectJournalLogGet**(`projectId`: string, `locationId`: string, `journalId`: string, `since?`: string, `until?`: string, `follow?`: boolean, `tail?`: number, `tag?`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:40357*

websocket is also supported

**`summary`** Get insight/journal.log

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`since?` | string | - |
`until?` | string | - |
`follow?` | boolean | - |
`tail?` | number | - |
`tag?` | Array\<[Tag](../interfaces/_api_.tag.md)> | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### insightProjectJournalServiceGet

▸ **insightProjectJournalServiceGet**(`projectId`: string, `locationId`: string, `journalId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:40372*

Get insight/journal.service

**`summary`** Get insight/journal.service

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### insightProjectJournalServiceList

▸ **insightProjectJournalServiceList**(`projectId`: string, `locationId`: string, `journalId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:40386*

List insight/journal.service

**`summary`** List insight/journal.service

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### insightProjectJournalTagCreate

▸ **insightProjectJournalTagCreate**(`projectId`: string, `locationId`: string, `journalId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:40401*

Create insight/journal.tag

**`summary`** Create insight/journal.tag

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### insightProjectJournalTagDelete

▸ **insightProjectJournalTagDelete**(`projectId`: string, `locationId`: string, `journalId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:40416*

Delete insight/journal.tag

**`summary`** Delete insight/journal.tag

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### insightProjectJournalTagGet

▸ **insightProjectJournalTagGet**(`projectId`: string, `locationId`: string, `journalId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:40431*

Get insight/journal.tag

**`summary`** Get insight/journal.tag

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### insightProjectJournalTagList

▸ **insightProjectJournalTagList**(`projectId`: string, `locationId`: string, `journalId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:40445*

List insight/journal.tag

**`summary`** List insight/journal.tag

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### insightProjectJournalTagPut

▸ **insightProjectJournalTagPut**(`projectId`: string, `locationId`: string, `journalId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:40460*

Replace insight/journal.tag

**`summary`** Replace insight/journal.tag

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### insightProjectJournalTransfer

▸ **insightProjectJournalTransfer**(`projectId`: string, `locationId`: string, `journalId`: string, `insightProjectJournalTransfer`: [InsightProjectJournalTransfer](../interfaces/_api_.insightprojectjournaltransfer.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Journal](../interfaces/_api_.journal.md)>>

*Defined in api.ts:40476*

action transfer

**`summary`** Transfer insight/journal

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`insightProjectJournalTransfer` | [InsightProjectJournalTransfer](../interfaces/_api_.insightprojectjournaltransfer.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Journal](../interfaces/_api_.journal.md)>>

___

### insightProjectJournalUpdate

▸ **insightProjectJournalUpdate**(`projectId`: string, `locationId`: string, `journalId`: string, `insightProjectJournalUpdate`: [InsightProjectJournalUpdate](../interfaces/_api_.insightprojectjournalupdate.md), `options?`: any): Promise\<AxiosResponse\<[Journal](../interfaces/_api_.journal.md)>>

*Defined in api.ts:40491*

Returns modified journal

**`summary`** Update insight/journal

**`throws`** {RequiredError}

**`memberof`** InsightProjectJournalApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`journalId` | string | Journal Id |
`insightProjectJournalUpdate` | [InsightProjectJournalUpdate](../interfaces/_api_.insightprojectjournalupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Journal](../interfaces/_api_.journal.md)>>
