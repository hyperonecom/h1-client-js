**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / StorageProjectBucketApi

# Class: StorageProjectBucketApi

StorageProjectBucketApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **StorageProjectBucketApi**

## Index

### Constructors

* [constructor](_api_.storageprojectbucketapi.md#constructor)

### Properties

* [axios](_api_.storageprojectbucketapi.md#axios)
* [basePath](_api_.storageprojectbucketapi.md#basepath)
* [configuration](_api_.storageprojectbucketapi.md#configuration)

### Methods

* [storageProjectBucketGet](_api_.storageprojectbucketapi.md#storageprojectbucketget)
* [storageProjectBucketList](_api_.storageprojectbucketapi.md#storageprojectbucketlist)
* [storageProjectBucketObjectDelete](_api_.storageprojectbucketapi.md#storageprojectbucketobjectdelete)
* [storageProjectBucketObjectDownload](_api_.storageprojectbucketapi.md#storageprojectbucketobjectdownload)
* [storageProjectBucketObjectGet](_api_.storageprojectbucketapi.md#storageprojectbucketobjectget)
* [storageProjectBucketObjectList](_api_.storageprojectbucketapi.md#storageprojectbucketobjectlist)
* [storageProjectBucketUpload](_api_.storageprojectbucketapi.md#storageprojectbucketupload)

## Constructors

### constructor

\+ **new StorageProjectBucketApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [StorageProjectBucketApi](_api_.storageprojectbucketapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [StorageProjectBucketApi](_api_.storageprojectbucketapi.md)

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

### storageProjectBucketGet

▸ **storageProjectBucketGet**(`projectId`: string, `locationId`: string, `bucketId`: string, `options?`: any): Promise\<AxiosResponse\<[Bucket](../interfaces/_api_.bucket.md)>>

*Defined in api.ts:65445*

Returns a single bucket

**`summary`** Get storage/bucket

**`throws`** {RequiredError}

**`memberof`** StorageProjectBucketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`bucketId` | string | Bucket Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Bucket](../interfaces/_api_.bucket.md)>>

___

### storageProjectBucketList

▸ **storageProjectBucketList**(`projectId`: string, `locationId`: string, `options?`: any): Promise\<AxiosResponse\<[Bucket](../interfaces/_api_.bucket.md)[]>>

*Defined in api.ts:65458*

List bucket

**`summary`** List storage/bucket

**`throws`** {RequiredError}

**`memberof`** StorageProjectBucketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Bucket](../interfaces/_api_.bucket.md)[]>>

___

### storageProjectBucketObjectDelete

▸ **storageProjectBucketObjectDelete**(`projectId`: string, `locationId`: string, `bucketId`: string, `objectId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:65473*

Delete storage/bucket.object

**`summary`** Delete storage/bucket.object

**`throws`** {RequiredError}

**`memberof`** StorageProjectBucketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`bucketId` | string | Bucket Id |
`objectId` | string | objectId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### storageProjectBucketObjectDownload

▸ **storageProjectBucketObjectDownload**(`projectId`: string, `locationId`: string, `bucketId`: string, `objectId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:65488*

action download

**`summary`** Download storage/bucket.object

**`throws`** {RequiredError}

**`memberof`** StorageProjectBucketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`bucketId` | string | Bucket Id |
`objectId` | string | objectId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### storageProjectBucketObjectGet

▸ **storageProjectBucketObjectGet**(`projectId`: string, `locationId`: string, `bucketId`: string, `objectId`: string, `options?`: any): Promise\<AxiosResponse\<[StorageObject](../interfaces/_api_.storageobject.md)>>

*Defined in api.ts:65503*

Get storage/bucket.object

**`summary`** Get storage/bucket.object

**`throws`** {RequiredError}

**`memberof`** StorageProjectBucketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`bucketId` | string | Bucket Id |
`objectId` | string | objectId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[StorageObject](../interfaces/_api_.storageobject.md)>>

___

### storageProjectBucketObjectList

▸ **storageProjectBucketObjectList**(`projectId`: string, `locationId`: string, `bucketId`: string, `options?`: any): Promise\<AxiosResponse\<[StorageObject](../interfaces/_api_.storageobject.md)[]>>

*Defined in api.ts:65517*

List storage/bucket.object

**`summary`** List storage/bucket.object

**`throws`** {RequiredError}

**`memberof`** StorageProjectBucketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`bucketId` | string | Bucket Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[StorageObject](../interfaces/_api_.storageobject.md)[]>>

___

### storageProjectBucketUpload

▸ **storageProjectBucketUpload**(`projectId`: string, `locationId`: string, `bucketId`: string, `storageProjectBucketUpload`: [StorageProjectBucketUpload](../interfaces/_api_.storageprojectbucketupload.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Bucket](../interfaces/_api_.bucket.md)>>

*Defined in api.ts:65534*

action upload

**`summary`** Upload storage/bucket

**`throws`** {RequiredError}

**`memberof`** StorageProjectBucketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`bucketId` | string | Bucket Id |
`storageProjectBucketUpload` | [StorageProjectBucketUpload](../interfaces/_api_.storageprojectbucketupload.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Bucket](../interfaces/_api_.bucket.md)>>
