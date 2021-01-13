**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / RecoveryProjectBackupApi

# Class: RecoveryProjectBackupApi

RecoveryProjectBackupApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **RecoveryProjectBackupApi**

## Index

### Constructors

* [constructor](_api_.recoveryprojectbackupapi.md#constructor)

### Properties

* [axios](_api_.recoveryprojectbackupapi.md#axios)
* [basePath](_api_.recoveryprojectbackupapi.md#basepath)
* [configuration](_api_.recoveryprojectbackupapi.md#configuration)

### Methods

* [recoveryProjectBackupCreate](_api_.recoveryprojectbackupapi.md#recoveryprojectbackupcreate)
* [recoveryProjectBackupDelete](_api_.recoveryprojectbackupapi.md#recoveryprojectbackupdelete)
* [recoveryProjectBackupEventGet](_api_.recoveryprojectbackupapi.md#recoveryprojectbackupeventget)
* [recoveryProjectBackupEventList](_api_.recoveryprojectbackupapi.md#recoveryprojectbackupeventlist)
* [recoveryProjectBackupExport](_api_.recoveryprojectbackupapi.md#recoveryprojectbackupexport)
* [recoveryProjectBackupGet](_api_.recoveryprojectbackupapi.md#recoveryprojectbackupget)
* [recoveryProjectBackupList](_api_.recoveryprojectbackupapi.md#recoveryprojectbackuplist)
* [recoveryProjectBackupMetricGet](_api_.recoveryprojectbackupapi.md#recoveryprojectbackupmetricget)
* [recoveryProjectBackupMetricList](_api_.recoveryprojectbackupapi.md#recoveryprojectbackupmetriclist)
* [recoveryProjectBackupMetricPointList](_api_.recoveryprojectbackupapi.md#recoveryprojectbackupmetricpointlist)
* [recoveryProjectBackupServiceGet](_api_.recoveryprojectbackupapi.md#recoveryprojectbackupserviceget)
* [recoveryProjectBackupServiceList](_api_.recoveryprojectbackupapi.md#recoveryprojectbackupservicelist)
* [recoveryProjectBackupTagCreate](_api_.recoveryprojectbackupapi.md#recoveryprojectbackuptagcreate)
* [recoveryProjectBackupTagDelete](_api_.recoveryprojectbackupapi.md#recoveryprojectbackuptagdelete)
* [recoveryProjectBackupTagGet](_api_.recoveryprojectbackupapi.md#recoveryprojectbackuptagget)
* [recoveryProjectBackupTagList](_api_.recoveryprojectbackupapi.md#recoveryprojectbackuptaglist)
* [recoveryProjectBackupTagPut](_api_.recoveryprojectbackupapi.md#recoveryprojectbackuptagput)
* [recoveryProjectBackupUpdate](_api_.recoveryprojectbackupapi.md#recoveryprojectbackupupdate)

## Constructors

### constructor

\+ **new RecoveryProjectBackupApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [RecoveryProjectBackupApi](_api_.recoveryprojectbackupapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [RecoveryProjectBackupApi](_api_.recoveryprojectbackupapi.md)

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

### recoveryProjectBackupCreate

▸ **recoveryProjectBackupCreate**(`projectId`: string, `locationId`: string, `recoveryProjectBackupCreate`: [RecoveryProjectBackupCreate](../interfaces/_api_.recoveryprojectbackupcreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Backup](../interfaces/_api_.backup.md)>>

*Defined in api.ts:62786*

Create backup

**`summary`** Create recovery/backup

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`recoveryProjectBackupCreate` | [RecoveryProjectBackupCreate](../interfaces/_api_.recoveryprojectbackupcreate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Backup](../interfaces/_api_.backup.md)>>

___

### recoveryProjectBackupDelete

▸ **recoveryProjectBackupDelete**(`projectId`: string, `locationId`: string, `backupId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:62800*

Delete backup

**`summary`** Delete recovery/backup

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### recoveryProjectBackupEventGet

▸ **recoveryProjectBackupEventGet**(`projectId`: string, `locationId`: string, `backupId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:62815*

Get recovery/backup.event

**`summary`** Get recovery/backup.event

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### recoveryProjectBackupEventList

▸ **recoveryProjectBackupEventList**(`projectId`: string, `locationId`: string, `backupId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:62831*

List recovery/backup.event

**`summary`** List recovery/backup.event

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### recoveryProjectBackupExport

▸ **recoveryProjectBackupExport**(`projectId`: string, `locationId`: string, `backupId`: string, `recoveryProjectBackupExport`: [RecoveryProjectBackupExport](../interfaces/_api_.recoveryprojectbackupexport.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Backup](../interfaces/_api_.backup.md)>>

*Defined in api.ts:62848*

action export

**`summary`** Export recovery/backup

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`recoveryProjectBackupExport` | [RecoveryProjectBackupExport](../interfaces/_api_.recoveryprojectbackupexport.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Backup](../interfaces/_api_.backup.md)>>

___

### recoveryProjectBackupGet

▸ **recoveryProjectBackupGet**(`projectId`: string, `locationId`: string, `backupId`: string, `options?`: any): Promise\<AxiosResponse\<[Backup](../interfaces/_api_.backup.md)>>

*Defined in api.ts:62862*

Returns a single backup

**`summary`** Get recovery/backup

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Backup](../interfaces/_api_.backup.md)>>

___

### recoveryProjectBackupList

▸ **recoveryProjectBackupList**(`projectId`: string, `locationId`: string, `name?`: string, `source?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Backup](../interfaces/_api_.backup.md)[]>>

*Defined in api.ts:62879*

List backup

**`summary`** List recovery/backup

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`source?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Backup](../interfaces/_api_.backup.md)[]>>

___

### recoveryProjectBackupMetricGet

▸ **recoveryProjectBackupMetricGet**(`projectId`: string, `locationId`: string, `backupId`: string, `metricId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

*Defined in api.ts:62894*

Get recovery/backup.metric

**`summary`** Get recovery/backup.metric

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`metricId` | string | metricId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

___

### recoveryProjectBackupMetricList

▸ **recoveryProjectBackupMetricList**(`projectId`: string, `locationId`: string, `backupId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

*Defined in api.ts:62908*

List recovery/backup.metric

**`summary`** List recovery/backup.metric

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

___

### recoveryProjectBackupMetricPointList

▸ **recoveryProjectBackupMetricPointList**(`projectId`: string, `locationId`: string, `backupId`: string, `metricId`: string, `interval?`: string, `timespan?`: string, `options?`: any): Promise\<AxiosResponse\<[Point](../interfaces/_api_.point.md)[]>>

*Defined in api.ts:62925*

List recovery/backup.point

**`summary`** List recovery/backup.point

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`metricId` | string | metricId |
`interval?` | string | - |
`timespan?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Point](../interfaces/_api_.point.md)[]>>

___

### recoveryProjectBackupServiceGet

▸ **recoveryProjectBackupServiceGet**(`projectId`: string, `locationId`: string, `backupId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:62940*

Get recovery/backup.service

**`summary`** Get recovery/backup.service

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### recoveryProjectBackupServiceList

▸ **recoveryProjectBackupServiceList**(`projectId`: string, `locationId`: string, `backupId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:62954*

List recovery/backup.service

**`summary`** List recovery/backup.service

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### recoveryProjectBackupTagCreate

▸ **recoveryProjectBackupTagCreate**(`projectId`: string, `locationId`: string, `backupId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:62969*

Create recovery/backup.tag

**`summary`** Create recovery/backup.tag

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### recoveryProjectBackupTagDelete

▸ **recoveryProjectBackupTagDelete**(`projectId`: string, `locationId`: string, `backupId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:62984*

Delete recovery/backup.tag

**`summary`** Delete recovery/backup.tag

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### recoveryProjectBackupTagGet

▸ **recoveryProjectBackupTagGet**(`projectId`: string, `locationId`: string, `backupId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:62999*

Get recovery/backup.tag

**`summary`** Get recovery/backup.tag

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### recoveryProjectBackupTagList

▸ **recoveryProjectBackupTagList**(`projectId`: string, `locationId`: string, `backupId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:63013*

List recovery/backup.tag

**`summary`** List recovery/backup.tag

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### recoveryProjectBackupTagPut

▸ **recoveryProjectBackupTagPut**(`projectId`: string, `locationId`: string, `backupId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:63028*

Replace recovery/backup.tag

**`summary`** Replace recovery/backup.tag

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### recoveryProjectBackupUpdate

▸ **recoveryProjectBackupUpdate**(`projectId`: string, `locationId`: string, `backupId`: string, `recoveryProjectBackupUpdate`: [RecoveryProjectBackupUpdate](../interfaces/_api_.recoveryprojectbackupupdate.md), `options?`: any): Promise\<AxiosResponse\<[Backup](../interfaces/_api_.backup.md)>>

*Defined in api.ts:63043*

Returns modified backup

**`summary`** Update recovery/backup

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectBackupApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`backupId` | string | Backup Id |
`recoveryProjectBackupUpdate` | [RecoveryProjectBackupUpdate](../interfaces/_api_.recoveryprojectbackupupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Backup](../interfaces/_api_.backup.md)>>
