**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / DatabaseProjectInstanceApi

# Class: DatabaseProjectInstanceApi

DatabaseProjectInstanceApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **DatabaseProjectInstanceApi**

## Index

### Constructors

* [constructor](_api_.databaseprojectinstanceapi.md#constructor)

### Properties

* [axios](_api_.databaseprojectinstanceapi.md#axios)
* [basePath](_api_.databaseprojectinstanceapi.md#basepath)
* [configuration](_api_.databaseprojectinstanceapi.md#configuration)

### Methods

* [databaseProjectInstanceConnectGet](_api_.databaseprojectinstanceapi.md#databaseprojectinstanceconnectget)
* [databaseProjectInstanceConnectList](_api_.databaseprojectinstanceapi.md#databaseprojectinstanceconnectlist)
* [databaseProjectInstanceCreate](_api_.databaseprojectinstanceapi.md#databaseprojectinstancecreate)
* [databaseProjectInstanceCredentialCreate](_api_.databaseprojectinstanceapi.md#databaseprojectinstancecredentialcreate)
* [databaseProjectInstanceCredentialDelete](_api_.databaseprojectinstanceapi.md#databaseprojectinstancecredentialdelete)
* [databaseProjectInstanceCredentialGet](_api_.databaseprojectinstanceapi.md#databaseprojectinstancecredentialget)
* [databaseProjectInstanceCredentialList](_api_.databaseprojectinstanceapi.md#databaseprojectinstancecredentiallist)
* [databaseProjectInstanceCredentialPatch](_api_.databaseprojectinstanceapi.md#databaseprojectinstancecredentialpatch)
* [databaseProjectInstanceDelete](_api_.databaseprojectinstanceapi.md#databaseprojectinstancedelete)
* [databaseProjectInstanceEventGet](_api_.databaseprojectinstanceapi.md#databaseprojectinstanceeventget)
* [databaseProjectInstanceEventList](_api_.databaseprojectinstanceapi.md#databaseprojectinstanceeventlist)
* [databaseProjectInstanceGet](_api_.databaseprojectinstanceapi.md#databaseprojectinstanceget)
* [databaseProjectInstanceList](_api_.databaseprojectinstanceapi.md#databaseprojectinstancelist)
* [databaseProjectInstanceMetricGet](_api_.databaseprojectinstanceapi.md#databaseprojectinstancemetricget)
* [databaseProjectInstanceMetricList](_api_.databaseprojectinstanceapi.md#databaseprojectinstancemetriclist)
* [databaseProjectInstanceMetricPointList](_api_.databaseprojectinstanceapi.md#databaseprojectinstancemetricpointlist)
* [databaseProjectInstanceServiceGet](_api_.databaseprojectinstanceapi.md#databaseprojectinstanceserviceget)
* [databaseProjectInstanceServiceList](_api_.databaseprojectinstanceapi.md#databaseprojectinstanceservicelist)
* [databaseProjectInstanceStart](_api_.databaseprojectinstanceapi.md#databaseprojectinstancestart)
* [databaseProjectInstanceStop](_api_.databaseprojectinstanceapi.md#databaseprojectinstancestop)
* [databaseProjectInstanceTagCreate](_api_.databaseprojectinstanceapi.md#databaseprojectinstancetagcreate)
* [databaseProjectInstanceTagDelete](_api_.databaseprojectinstanceapi.md#databaseprojectinstancetagdelete)
* [databaseProjectInstanceTagGet](_api_.databaseprojectinstanceapi.md#databaseprojectinstancetagget)
* [databaseProjectInstanceTagList](_api_.databaseprojectinstanceapi.md#databaseprojectinstancetaglist)
* [databaseProjectInstanceTagPut](_api_.databaseprojectinstanceapi.md#databaseprojectinstancetagput)
* [databaseProjectInstanceTransfer](_api_.databaseprojectinstanceapi.md#databaseprojectinstancetransfer)
* [databaseProjectInstanceUpdate](_api_.databaseprojectinstanceapi.md#databaseprojectinstanceupdate)

## Constructors

### constructor

\+ **new DatabaseProjectInstanceApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [DatabaseProjectInstanceApi](_api_.databaseprojectinstanceapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [DatabaseProjectInstanceApi](_api_.databaseprojectinstanceapi.md)

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

### databaseProjectInstanceConnectGet

▸ **databaseProjectInstanceConnectGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `connectId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceConnect](../interfaces/_api_.resourceconnect.md)>>

*Defined in api.ts:19714*

Get database/instance.connect

**`summary`** Get database/instance.connect

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`connectId` | string | connectId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceConnect](../interfaces/_api_.resourceconnect.md)>>

___

### databaseProjectInstanceConnectList

▸ **databaseProjectInstanceConnectList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceConnect](../interfaces/_api_.resourceconnect.md)[]>>

*Defined in api.ts:19728*

List database/instance.connect

**`summary`** List database/instance.connect

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceConnect](../interfaces/_api_.resourceconnect.md)[]>>

___

### databaseProjectInstanceCreate

▸ **databaseProjectInstanceCreate**(`projectId`: string, `locationId`: string, `databaseProjectInstanceCreate`: [DatabaseProjectInstanceCreate](../interfaces/_api_.databaseprojectinstancecreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

*Defined in api.ts:19744*

Create instance

**`summary`** Create database/instance

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`databaseProjectInstanceCreate` | [DatabaseProjectInstanceCreate](../interfaces/_api_.databaseprojectinstancecreate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

___

### databaseProjectInstanceCredentialCreate

▸ **databaseProjectInstanceCredentialCreate**(`projectId`: string, `locationId`: string, `instanceId`: string, `databaseCredential`: [DatabaseCredential](../interfaces/_api_.databasecredential.md), `options?`: any): Promise\<AxiosResponse\<[DatabaseCredential](../interfaces/_api_.databasecredential.md)>>

*Defined in api.ts:19759*

Create database/instance.credential

**`summary`** Create database/instance.credential

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`databaseCredential` | [DatabaseCredential](../interfaces/_api_.databasecredential.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[DatabaseCredential](../interfaces/_api_.databasecredential.md)>>

___

### databaseProjectInstanceCredentialDelete

▸ **databaseProjectInstanceCredentialDelete**(`projectId`: string, `locationId`: string, `instanceId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

*Defined in api.ts:19774*

Delete database/instance.credential

**`summary`** Delete database/instance.credential

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

___

### databaseProjectInstanceCredentialGet

▸ **databaseProjectInstanceCredentialGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[DatabaseCredential](../interfaces/_api_.databasecredential.md)>>

*Defined in api.ts:19789*

Get database/instance.credential

**`summary`** Get database/instance.credential

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[DatabaseCredential](../interfaces/_api_.databasecredential.md)>>

___

### databaseProjectInstanceCredentialList

▸ **databaseProjectInstanceCredentialList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[DatabaseCredential](../interfaces/_api_.databasecredential.md)[]>>

*Defined in api.ts:19803*

List database/instance.credential

**`summary`** List database/instance.credential

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[DatabaseCredential](../interfaces/_api_.databasecredential.md)[]>>

___

### databaseProjectInstanceCredentialPatch

▸ **databaseProjectInstanceCredentialPatch**(`projectId`: string, `locationId`: string, `instanceId`: string, `credentialId`: string, `databaseProjectInstanceCredentialPatch`: [DatabaseProjectInstanceCredentialPatch](../interfaces/_api_.databaseprojectinstancecredentialpatch.md), `options?`: any): Promise\<AxiosResponse\<[DatabaseCredential](../interfaces/_api_.databasecredential.md)>>

*Defined in api.ts:19819*

Update database/instance.credential

**`summary`** Update database/instance.credential

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`credentialId` | string | credentialId |
`databaseProjectInstanceCredentialPatch` | [DatabaseProjectInstanceCredentialPatch](../interfaces/_api_.databaseprojectinstancecredentialpatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[DatabaseCredential](../interfaces/_api_.databasecredential.md)>>

___

### databaseProjectInstanceDelete

▸ **databaseProjectInstanceDelete**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:19833*

Delete instance

**`summary`** Delete database/instance

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### databaseProjectInstanceEventGet

▸ **databaseProjectInstanceEventGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:19848*

Get database/instance.event

**`summary`** Get database/instance.event

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### databaseProjectInstanceEventList

▸ **databaseProjectInstanceEventList**(`projectId`: string, `locationId`: string, `instanceId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:19864*

List database/instance.event

**`summary`** List database/instance.event

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### databaseProjectInstanceGet

▸ **databaseProjectInstanceGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

*Defined in api.ts:19878*

Returns a single instance

**`summary`** Get database/instance

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

___

### databaseProjectInstanceList

▸ **databaseProjectInstanceList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)[]>>

*Defined in api.ts:19894*

List instance

**`summary`** List database/instance

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)[]>>

___

### databaseProjectInstanceMetricGet

▸ **databaseProjectInstanceMetricGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `metricId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

*Defined in api.ts:19909*

Get database/instance.metric

**`summary`** Get database/instance.metric

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`metricId` | string | metricId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

___

### databaseProjectInstanceMetricList

▸ **databaseProjectInstanceMetricList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

*Defined in api.ts:19923*

List database/instance.metric

**`summary`** List database/instance.metric

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

___

### databaseProjectInstanceMetricPointList

▸ **databaseProjectInstanceMetricPointList**(`projectId`: string, `locationId`: string, `instanceId`: string, `metricId`: string, `interval?`: string, `timespan?`: string, `options?`: any): Promise\<AxiosResponse\<[Point](../interfaces/_api_.point.md)[]>>

*Defined in api.ts:19940*

List database/instance.point

**`summary`** List database/instance.point

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`metricId` | string | metricId |
`interval?` | string | - |
`timespan?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Point](../interfaces/_api_.point.md)[]>>

___

### databaseProjectInstanceServiceGet

▸ **databaseProjectInstanceServiceGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:19955*

Get database/instance.service

**`summary`** Get database/instance.service

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### databaseProjectInstanceServiceList

▸ **databaseProjectInstanceServiceList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:19969*

List database/instance.service

**`summary`** List database/instance.service

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### databaseProjectInstanceStart

▸ **databaseProjectInstanceStart**(`projectId`: string, `locationId`: string, `instanceId`: string, `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

*Defined in api.ts:19985*

action start

**`summary`** Start database/instance

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

___

### databaseProjectInstanceStop

▸ **databaseProjectInstanceStop**(`projectId`: string, `locationId`: string, `instanceId`: string, `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

*Defined in api.ts:20001*

action stop

**`summary`** Stop database/instance

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

___

### databaseProjectInstanceTagCreate

▸ **databaseProjectInstanceTagCreate**(`projectId`: string, `locationId`: string, `instanceId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:20016*

Create database/instance.tag

**`summary`** Create database/instance.tag

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### databaseProjectInstanceTagDelete

▸ **databaseProjectInstanceTagDelete**(`projectId`: string, `locationId`: string, `instanceId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:20031*

Delete database/instance.tag

**`summary`** Delete database/instance.tag

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### databaseProjectInstanceTagGet

▸ **databaseProjectInstanceTagGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:20046*

Get database/instance.tag

**`summary`** Get database/instance.tag

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### databaseProjectInstanceTagList

▸ **databaseProjectInstanceTagList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:20060*

List database/instance.tag

**`summary`** List database/instance.tag

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### databaseProjectInstanceTagPut

▸ **databaseProjectInstanceTagPut**(`projectId`: string, `locationId`: string, `instanceId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:20075*

Replace database/instance.tag

**`summary`** Replace database/instance.tag

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### databaseProjectInstanceTransfer

▸ **databaseProjectInstanceTransfer**(`projectId`: string, `locationId`: string, `instanceId`: string, `databaseProjectInstanceTransfer`: [DatabaseProjectInstanceTransfer](../interfaces/_api_.databaseprojectinstancetransfer.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

*Defined in api.ts:20092*

action transfer

**`summary`** Transfer database/instance

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`databaseProjectInstanceTransfer` | [DatabaseProjectInstanceTransfer](../interfaces/_api_.databaseprojectinstancetransfer.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

___

### databaseProjectInstanceUpdate

▸ **databaseProjectInstanceUpdate**(`projectId`: string, `locationId`: string, `instanceId`: string, `databaseProjectInstanceUpdate`: [DatabaseProjectInstanceUpdate](../interfaces/_api_.databaseprojectinstanceupdate.md), `options?`: any): Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>

*Defined in api.ts:20107*

Returns modified instance

**`summary`** Update database/instance

**`throws`** {RequiredError}

**`memberof`** DatabaseProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`databaseProjectInstanceUpdate` | [DatabaseProjectInstanceUpdate](../interfaces/_api_.databaseprojectinstanceupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Database](../interfaces/_api_.database.md)>>
