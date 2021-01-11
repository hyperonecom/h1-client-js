**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / StorageProjectDiskApi

# Class: StorageProjectDiskApi

StorageProjectDiskApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **StorageProjectDiskApi**

## Index

### Constructors

* [constructor](_api_.storageprojectdiskapi.md#constructor)

### Properties

* [axios](_api_.storageprojectdiskapi.md#axios)
* [basePath](_api_.storageprojectdiskapi.md#basepath)
* [configuration](_api_.storageprojectdiskapi.md#configuration)

### Methods

* [storageProjectDiskCreate](_api_.storageprojectdiskapi.md#storageprojectdiskcreate)
* [storageProjectDiskDelete](_api_.storageprojectdiskapi.md#storageprojectdiskdelete)
* [storageProjectDiskDetach](_api_.storageprojectdiskapi.md#storageprojectdiskdetach)
* [storageProjectDiskDownload](_api_.storageprojectdiskapi.md#storageprojectdiskdownload)
* [storageProjectDiskEventGet](_api_.storageprojectdiskapi.md#storageprojectdiskeventget)
* [storageProjectDiskEventList](_api_.storageprojectdiskapi.md#storageprojectdiskeventlist)
* [storageProjectDiskGet](_api_.storageprojectdiskapi.md#storageprojectdiskget)
* [storageProjectDiskList](_api_.storageprojectdiskapi.md#storageprojectdisklist)
* [storageProjectDiskMetricGet](_api_.storageprojectdiskapi.md#storageprojectdiskmetricget)
* [storageProjectDiskMetricList](_api_.storageprojectdiskapi.md#storageprojectdiskmetriclist)
* [storageProjectDiskMetricPointList](_api_.storageprojectdiskapi.md#storageprojectdiskmetricpointlist)
* [storageProjectDiskResize](_api_.storageprojectdiskapi.md#storageprojectdiskresize)
* [storageProjectDiskServiceGet](_api_.storageprojectdiskapi.md#storageprojectdiskserviceget)
* [storageProjectDiskServiceList](_api_.storageprojectdiskapi.md#storageprojectdiskservicelist)
* [storageProjectDiskTagCreate](_api_.storageprojectdiskapi.md#storageprojectdisktagcreate)
* [storageProjectDiskTagDelete](_api_.storageprojectdiskapi.md#storageprojectdisktagdelete)
* [storageProjectDiskTagGet](_api_.storageprojectdiskapi.md#storageprojectdisktagget)
* [storageProjectDiskTagList](_api_.storageprojectdiskapi.md#storageprojectdisktaglist)
* [storageProjectDiskTagPut](_api_.storageprojectdiskapi.md#storageprojectdisktagput)
* [storageProjectDiskTransfer](_api_.storageprojectdiskapi.md#storageprojectdisktransfer)
* [storageProjectDiskUpdate](_api_.storageprojectdiskapi.md#storageprojectdiskupdate)

## Constructors

### constructor

\+ **new StorageProjectDiskApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [StorageProjectDiskApi](_api_.storageprojectdiskapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [StorageProjectDiskApi](_api_.storageprojectdiskapi.md)

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

### storageProjectDiskCreate

▸ **storageProjectDiskCreate**(`projectId`: string, `locationId`: string, `storageProjectDiskCreate`: [StorageProjectDiskCreate](../interfaces/_api_.storageprojectdiskcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

*Defined in api.ts:67692*

Create disk

**`summary`** Create storage/disk

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`storageProjectDiskCreate` | [StorageProjectDiskCreate](../interfaces/_api_.storageprojectdiskcreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

___

### storageProjectDiskDelete

▸ **storageProjectDiskDelete**(`projectId`: string, `locationId`: string, `diskId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:67706*

Delete disk

**`summary`** Delete storage/disk

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### storageProjectDiskDetach

▸ **storageProjectDiskDetach**(`projectId`: string, `locationId`: string, `diskId`: string, `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

*Defined in api.ts:67721*

action detach

**`summary`** Detach storage/disk

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

___

### storageProjectDiskDownload

▸ **storageProjectDiskDownload**(`projectId`: string, `locationId`: string, `diskId`: string, `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:67736*

action download

**`summary`** Download storage/disk

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### storageProjectDiskEventGet

▸ **storageProjectDiskEventGet**(`projectId`: string, `locationId`: string, `diskId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:67751*

Get storage/disk.event

**`summary`** Get storage/disk.event

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### storageProjectDiskEventList

▸ **storageProjectDiskEventList**(`projectId`: string, `locationId`: string, `diskId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:67767*

List storage/disk.event

**`summary`** List storage/disk.event

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### storageProjectDiskGet

▸ **storageProjectDiskGet**(`projectId`: string, `locationId`: string, `diskId`: string, `options?`: any): Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

*Defined in api.ts:67781*

Returns a single disk

**`summary`** Get storage/disk

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

___

### storageProjectDiskList

▸ **storageProjectDiskList**(`projectId`: string, `locationId`: string, `name?`: string, `vm?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)[]>>

*Defined in api.ts:67798*

List disk

**`summary`** List storage/disk

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`vm?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)[]>>

___

### storageProjectDiskMetricGet

▸ **storageProjectDiskMetricGet**(`projectId`: string, `locationId`: string, `diskId`: string, `metricId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

*Defined in api.ts:67813*

Get storage/disk.metric

**`summary`** Get storage/disk.metric

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`metricId` | string | metricId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

___

### storageProjectDiskMetricList

▸ **storageProjectDiskMetricList**(`projectId`: string, `locationId`: string, `diskId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

*Defined in api.ts:67827*

List storage/disk.metric

**`summary`** List storage/disk.metric

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

___

### storageProjectDiskMetricPointList

▸ **storageProjectDiskMetricPointList**(`projectId`: string, `locationId`: string, `diskId`: string, `metricId`: string, `interval?`: string, `timespan?`: string, `options?`: any): Promise\<AxiosResponse\<[Point](../interfaces/_api_.point.md)[]>>

*Defined in api.ts:67844*

List storage/disk.point

**`summary`** List storage/disk.point

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`metricId` | string | metricId |
`interval?` | string | - |
`timespan?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Point](../interfaces/_api_.point.md)[]>>

___

### storageProjectDiskResize

▸ **storageProjectDiskResize**(`projectId`: string, `locationId`: string, `diskId`: string, `storageProjectDiskResize`: [StorageProjectDiskResize](../interfaces/_api_.storageprojectdiskresize.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

*Defined in api.ts:67860*

action resize

**`summary`** Resize storage/disk

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`storageProjectDiskResize` | [StorageProjectDiskResize](../interfaces/_api_.storageprojectdiskresize.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

___

### storageProjectDiskServiceGet

▸ **storageProjectDiskServiceGet**(`projectId`: string, `locationId`: string, `diskId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:67875*

Get storage/disk.service

**`summary`** Get storage/disk.service

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### storageProjectDiskServiceList

▸ **storageProjectDiskServiceList**(`projectId`: string, `locationId`: string, `diskId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:67889*

List storage/disk.service

**`summary`** List storage/disk.service

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### storageProjectDiskTagCreate

▸ **storageProjectDiskTagCreate**(`projectId`: string, `locationId`: string, `diskId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:67904*

Create storage/disk.tag

**`summary`** Create storage/disk.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### storageProjectDiskTagDelete

▸ **storageProjectDiskTagDelete**(`projectId`: string, `locationId`: string, `diskId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:67919*

Delete storage/disk.tag

**`summary`** Delete storage/disk.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### storageProjectDiskTagGet

▸ **storageProjectDiskTagGet**(`projectId`: string, `locationId`: string, `diskId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:67934*

Get storage/disk.tag

**`summary`** Get storage/disk.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### storageProjectDiskTagList

▸ **storageProjectDiskTagList**(`projectId`: string, `locationId`: string, `diskId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:67948*

List storage/disk.tag

**`summary`** List storage/disk.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### storageProjectDiskTagPut

▸ **storageProjectDiskTagPut**(`projectId`: string, `locationId`: string, `diskId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:67963*

Replace storage/disk.tag

**`summary`** Replace storage/disk.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### storageProjectDiskTransfer

▸ **storageProjectDiskTransfer**(`projectId`: string, `locationId`: string, `diskId`: string, `storageProjectDiskTransfer`: [StorageProjectDiskTransfer](../interfaces/_api_.storageprojectdisktransfer.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

*Defined in api.ts:67979*

action transfer

**`summary`** Transfer storage/disk

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`storageProjectDiskTransfer` | [StorageProjectDiskTransfer](../interfaces/_api_.storageprojectdisktransfer.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

___

### storageProjectDiskUpdate

▸ **storageProjectDiskUpdate**(`projectId`: string, `locationId`: string, `diskId`: string, `storageProjectDiskUpdate`: [StorageProjectDiskUpdate](../interfaces/_api_.storageprojectdiskupdate.md), `options?`: any): Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

*Defined in api.ts:67994*

Returns modified disk

**`summary`** Update storage/disk

**`throws`** {RequiredError}

**`memberof`** StorageProjectDiskApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`diskId` | string | Disk Id |
`storageProjectDiskUpdate` | [StorageProjectDiskUpdate](../interfaces/_api_.storageprojectdiskupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>
