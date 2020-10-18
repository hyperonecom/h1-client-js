**hyperone**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / StorageProjectVaultApi

# Class: StorageProjectVaultApi

StorageProjectVaultApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **StorageProjectVaultApi**

## Index

### Constructors

* [constructor](_api_.storageprojectvaultapi.md#constructor)

### Properties

* [axios](_api_.storageprojectvaultapi.md#axios)
* [basePath](_api_.storageprojectvaultapi.md#basepath)
* [configuration](_api_.storageprojectvaultapi.md#configuration)

### Methods

* [storageProjectVaultCreate](_api_.storageprojectvaultapi.md#storageprojectvaultcreate)
* [storageProjectVaultCredentialCreate](_api_.storageprojectvaultapi.md#storageprojectvaultcredentialcreate)
* [storageProjectVaultCredentialDelete](_api_.storageprojectvaultapi.md#storageprojectvaultcredentialdelete)
* [storageProjectVaultCredentialGet](_api_.storageprojectvaultapi.md#storageprojectvaultcredentialget)
* [storageProjectVaultCredentialList](_api_.storageprojectvaultapi.md#storageprojectvaultcredentiallist)
* [storageProjectVaultCredentialPatch](_api_.storageprojectvaultapi.md#storageprojectvaultcredentialpatch)
* [storageProjectVaultDelete](_api_.storageprojectvaultapi.md#storageprojectvaultdelete)
* [storageProjectVaultEventGet](_api_.storageprojectvaultapi.md#storageprojectvaulteventget)
* [storageProjectVaultEventList](_api_.storageprojectvaultapi.md#storageprojectvaulteventlist)
* [storageProjectVaultGet](_api_.storageprojectvaultapi.md#storageprojectvaultget)
* [storageProjectVaultList](_api_.storageprojectvaultapi.md#storageprojectvaultlist)
* [storageProjectVaultResize](_api_.storageprojectvaultapi.md#storageprojectvaultresize)
* [storageProjectVaultServiceGet](_api_.storageprojectvaultapi.md#storageprojectvaultserviceget)
* [storageProjectVaultServiceList](_api_.storageprojectvaultapi.md#storageprojectvaultservicelist)
* [storageProjectVaultSnapshotCreate](_api_.storageprojectvaultapi.md#storageprojectvaultsnapshotcreate)
* [storageProjectVaultSnapshotDelete](_api_.storageprojectvaultapi.md#storageprojectvaultsnapshotdelete)
* [storageProjectVaultSnapshotGet](_api_.storageprojectvaultapi.md#storageprojectvaultsnapshotget)
* [storageProjectVaultSnapshotList](_api_.storageprojectvaultapi.md#storageprojectvaultsnapshotlist)
* [storageProjectVaultStart](_api_.storageprojectvaultapi.md#storageprojectvaultstart)
* [storageProjectVaultStop](_api_.storageprojectvaultapi.md#storageprojectvaultstop)
* [storageProjectVaultTagCreate](_api_.storageprojectvaultapi.md#storageprojectvaulttagcreate)
* [storageProjectVaultTagDelete](_api_.storageprojectvaultapi.md#storageprojectvaulttagdelete)
* [storageProjectVaultTagGet](_api_.storageprojectvaultapi.md#storageprojectvaulttagget)
* [storageProjectVaultTagList](_api_.storageprojectvaultapi.md#storageprojectvaulttaglist)
* [storageProjectVaultTagPut](_api_.storageprojectvaultapi.md#storageprojectvaulttagput)
* [storageProjectVaultUpdate](_api_.storageprojectvaultapi.md#storageprojectvaultupdate)

## Constructors

### constructor

\+ **new StorageProjectVaultApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [StorageProjectVaultApi](_api_.storageprojectvaultapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [StorageProjectVaultApi](_api_.storageprojectvaultapi.md)

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

### storageProjectVaultCreate

▸ **storageProjectVaultCreate**(`projectId`: string, `locationId`: string, `storageProjectVaultCreate`: [StorageProjectVaultCreate](../interfaces/_api_.storageprojectvaultcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

*Defined in api.ts:63063*

Create vault

**`summary`** Create storage/vault

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`storageProjectVaultCreate` | [StorageProjectVaultCreate](../interfaces/_api_.storageprojectvaultcreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

___

### storageProjectVaultCredentialCreate

▸ **storageProjectVaultCredentialCreate**(`projectId`: string, `locationId`: string, `vaultId`: string, `vaultCredential`: [VaultCredential](../interfaces/_api_.vaultcredential.md), `options?`: any): Promise\<AxiosResponse\<[VaultCredential](../interfaces/_api_.vaultcredential.md)>>

*Defined in api.ts:63078*

Create storage/vault.credential

**`summary`** Create storage/vault.credential

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`vaultCredential` | [VaultCredential](../interfaces/_api_.vaultcredential.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[VaultCredential](../interfaces/_api_.vaultcredential.md)>>

___

### storageProjectVaultCredentialDelete

▸ **storageProjectVaultCredentialDelete**(`projectId`: string, `locationId`: string, `vaultId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

*Defined in api.ts:63093*

Delete storage/vault.credential

**`summary`** Delete storage/vault.credential

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

___

### storageProjectVaultCredentialGet

▸ **storageProjectVaultCredentialGet**(`projectId`: string, `locationId`: string, `vaultId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[VaultCredential](../interfaces/_api_.vaultcredential.md)>>

*Defined in api.ts:63108*

Get storage/vault.credential

**`summary`** Get storage/vault.credential

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[VaultCredential](../interfaces/_api_.vaultcredential.md)>>

___

### storageProjectVaultCredentialList

▸ **storageProjectVaultCredentialList**(`projectId`: string, `locationId`: string, `vaultId`: string, `options?`: any): Promise\<AxiosResponse\<[VaultCredential](../interfaces/_api_.vaultcredential.md)[]>>

*Defined in api.ts:63122*

List storage/vault.credential

**`summary`** List storage/vault.credential

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[VaultCredential](../interfaces/_api_.vaultcredential.md)[]>>

___

### storageProjectVaultCredentialPatch

▸ **storageProjectVaultCredentialPatch**(`projectId`: string, `locationId`: string, `vaultId`: string, `credentialId`: string, `storageProjectVaultCredentialPatch`: [StorageProjectVaultCredentialPatch](../interfaces/_api_.storageprojectvaultcredentialpatch.md), `options?`: any): Promise\<AxiosResponse\<[VaultCredential](../interfaces/_api_.vaultcredential.md)>>

*Defined in api.ts:63138*

Update storage/vault.credential

**`summary`** Update storage/vault.credential

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`credentialId` | string | credentialId |
`storageProjectVaultCredentialPatch` | [StorageProjectVaultCredentialPatch](../interfaces/_api_.storageprojectvaultcredentialpatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[VaultCredential](../interfaces/_api_.vaultcredential.md)>>

___

### storageProjectVaultDelete

▸ **storageProjectVaultDelete**(`projectId`: string, `locationId`: string, `vaultId`: string, `storageProjectVaultDelete`: [StorageProjectVaultDelete](../interfaces/_api_.storageprojectvaultdelete.md), `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:63153*

Delete vault

**`summary`** Delete storage/vault

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`storageProjectVaultDelete` | [StorageProjectVaultDelete](../interfaces/_api_.storageprojectvaultdelete.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### storageProjectVaultEventGet

▸ **storageProjectVaultEventGet**(`projectId`: string, `locationId`: string, `vaultId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:63168*

Get storage/vault.event

**`summary`** Get storage/vault.event

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### storageProjectVaultEventList

▸ **storageProjectVaultEventList**(`projectId`: string, `locationId`: string, `vaultId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:63184*

List storage/vault.event

**`summary`** List storage/vault.event

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### storageProjectVaultGet

▸ **storageProjectVaultGet**(`projectId`: string, `locationId`: string, `vaultId`: string, `options?`: any): Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

*Defined in api.ts:63198*

Returns a single vault

**`summary`** Get storage/vault

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

___

### storageProjectVaultList

▸ **storageProjectVaultList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)[]>>

*Defined in api.ts:63214*

List vault

**`summary`** List storage/vault

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)[]>>

___

### storageProjectVaultResize

▸ **storageProjectVaultResize**(`projectId`: string, `locationId`: string, `vaultId`: string, `storageProjectVaultResize`: [StorageProjectVaultResize](../interfaces/_api_.storageprojectvaultresize.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

*Defined in api.ts:63230*

action resize

**`summary`** Resize storage/vault

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`storageProjectVaultResize` | [StorageProjectVaultResize](../interfaces/_api_.storageprojectvaultresize.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

___

### storageProjectVaultServiceGet

▸ **storageProjectVaultServiceGet**(`projectId`: string, `locationId`: string, `vaultId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:63245*

Get storage/vault.service

**`summary`** Get storage/vault.service

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### storageProjectVaultServiceList

▸ **storageProjectVaultServiceList**(`projectId`: string, `locationId`: string, `vaultId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:63259*

List storage/vault.service

**`summary`** List storage/vault.service

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### storageProjectVaultSnapshotCreate

▸ **storageProjectVaultSnapshotCreate**(`projectId`: string, `locationId`: string, `vaultId`: string, `storageProjectVaultSnapshotCreate`: [StorageProjectVaultSnapshotCreate](../interfaces/_api_.storageprojectvaultsnapshotcreate.md), `options?`: any): Promise\<AxiosResponse\<[StorageSnapshot](../interfaces/_api_.storagesnapshot.md)>>

*Defined in api.ts:63274*

Create storage/vault.snapshot

**`summary`** Create storage/vault.snapshot

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`storageProjectVaultSnapshotCreate` | [StorageProjectVaultSnapshotCreate](../interfaces/_api_.storageprojectvaultsnapshotcreate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[StorageSnapshot](../interfaces/_api_.storagesnapshot.md)>>

___

### storageProjectVaultSnapshotDelete

▸ **storageProjectVaultSnapshotDelete**(`projectId`: string, `locationId`: string, `vaultId`: string, `snapshotId`: string, `options?`: any): Promise\<AxiosResponse\<[StorageSnapshot](../interfaces/_api_.storagesnapshot.md)>>

*Defined in api.ts:63289*

Delete storage/vault.snapshot

**`summary`** Delete storage/vault.snapshot

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`snapshotId` | string | snapshotId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[StorageSnapshot](../interfaces/_api_.storagesnapshot.md)>>

___

### storageProjectVaultSnapshotGet

▸ **storageProjectVaultSnapshotGet**(`projectId`: string, `locationId`: string, `vaultId`: string, `snapshotId`: string, `options?`: any): Promise\<AxiosResponse\<[StorageSnapshot](../interfaces/_api_.storagesnapshot.md)>>

*Defined in api.ts:63304*

Get storage/vault.snapshot

**`summary`** Get storage/vault.snapshot

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`snapshotId` | string | snapshotId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[StorageSnapshot](../interfaces/_api_.storagesnapshot.md)>>

___

### storageProjectVaultSnapshotList

▸ **storageProjectVaultSnapshotList**(`projectId`: string, `locationId`: string, `vaultId`: string, `options?`: any): Promise\<AxiosResponse\<[StorageSnapshot](../interfaces/_api_.storagesnapshot.md)[]>>

*Defined in api.ts:63318*

List storage/vault.snapshot

**`summary`** List storage/vault.snapshot

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[StorageSnapshot](../interfaces/_api_.storagesnapshot.md)[]>>

___

### storageProjectVaultStart

▸ **storageProjectVaultStart**(`projectId`: string, `locationId`: string, `vaultId`: string, `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

*Defined in api.ts:63333*

action start

**`summary`** Start storage/vault

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

___

### storageProjectVaultStop

▸ **storageProjectVaultStop**(`projectId`: string, `locationId`: string, `vaultId`: string, `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

*Defined in api.ts:63348*

action stop

**`summary`** Stop storage/vault

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

___

### storageProjectVaultTagCreate

▸ **storageProjectVaultTagCreate**(`projectId`: string, `locationId`: string, `vaultId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:63363*

Create storage/vault.tag

**`summary`** Create storage/vault.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### storageProjectVaultTagDelete

▸ **storageProjectVaultTagDelete**(`projectId`: string, `locationId`: string, `vaultId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:63378*

Delete storage/vault.tag

**`summary`** Delete storage/vault.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### storageProjectVaultTagGet

▸ **storageProjectVaultTagGet**(`projectId`: string, `locationId`: string, `vaultId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:63393*

Get storage/vault.tag

**`summary`** Get storage/vault.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### storageProjectVaultTagList

▸ **storageProjectVaultTagList**(`projectId`: string, `locationId`: string, `vaultId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:63407*

List storage/vault.tag

**`summary`** List storage/vault.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### storageProjectVaultTagPut

▸ **storageProjectVaultTagPut**(`projectId`: string, `locationId`: string, `vaultId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:63422*

Replace storage/vault.tag

**`summary`** Replace storage/vault.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### storageProjectVaultUpdate

▸ **storageProjectVaultUpdate**(`projectId`: string, `locationId`: string, `vaultId`: string, `storageProjectVaultUpdate`: [StorageProjectVaultUpdate](../interfaces/_api_.storageprojectvaultupdate.md), `options?`: any): Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>

*Defined in api.ts:63437*

Returns modified vault

**`summary`** Update storage/vault

**`throws`** {RequiredError}

**`memberof`** StorageProjectVaultApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vaultId` | string | Vault Id |
`storageProjectVaultUpdate` | [StorageProjectVaultUpdate](../interfaces/_api_.storageprojectvaultupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vault](../interfaces/_api_.vault.md)>>
