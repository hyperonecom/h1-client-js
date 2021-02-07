**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / ContainerProjectRegistryApi

# Class: ContainerProjectRegistryApi

ContainerProjectRegistryApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **ContainerProjectRegistryApi**

## Index

### Constructors

* [constructor](_api_.containerprojectregistryapi.md#constructor)

### Properties

* [axios](_api_.containerprojectregistryapi.md#axios)
* [basePath](_api_.containerprojectregistryapi.md#basepath)
* [configuration](_api_.containerprojectregistryapi.md#configuration)

### Methods

* [containerProjectRegistryCreate](_api_.containerprojectregistryapi.md#containerprojectregistrycreate)
* [containerProjectRegistryCredentialCreate](_api_.containerprojectregistryapi.md#containerprojectregistrycredentialcreate)
* [containerProjectRegistryCredentialDelete](_api_.containerprojectregistryapi.md#containerprojectregistrycredentialdelete)
* [containerProjectRegistryCredentialGet](_api_.containerprojectregistryapi.md#containerprojectregistrycredentialget)
* [containerProjectRegistryCredentialList](_api_.containerprojectregistryapi.md#containerprojectregistrycredentiallist)
* [containerProjectRegistryCredentialPatch](_api_.containerprojectregistryapi.md#containerprojectregistrycredentialpatch)
* [containerProjectRegistryDelete](_api_.containerprojectregistryapi.md#containerprojectregistrydelete)
* [containerProjectRegistryDomainCreate](_api_.containerprojectregistryapi.md#containerprojectregistrydomaincreate)
* [containerProjectRegistryDomainDelete](_api_.containerprojectregistryapi.md#containerprojectregistrydomaindelete)
* [containerProjectRegistryDomainGet](_api_.containerprojectregistryapi.md#containerprojectregistrydomainget)
* [containerProjectRegistryDomainList](_api_.containerprojectregistryapi.md#containerprojectregistrydomainlist)
* [containerProjectRegistryEventGet](_api_.containerprojectregistryapi.md#containerprojectregistryeventget)
* [containerProjectRegistryEventList](_api_.containerprojectregistryapi.md#containerprojectregistryeventlist)
* [containerProjectRegistryGet](_api_.containerprojectregistryapi.md#containerprojectregistryget)
* [containerProjectRegistryList](_api_.containerprojectregistryapi.md#containerprojectregistrylist)
* [containerProjectRegistryRepositoryGet](_api_.containerprojectregistryapi.md#containerprojectregistryrepositoryget)
* [containerProjectRegistryRepositoryImageDelete](_api_.containerprojectregistryapi.md#containerprojectregistryrepositoryimagedelete)
* [containerProjectRegistryRepositoryImageGet](_api_.containerprojectregistryapi.md#containerprojectregistryrepositoryimageget)
* [containerProjectRegistryRepositoryImageList](_api_.containerprojectregistryapi.md#containerprojectregistryrepositoryimagelist)
* [containerProjectRegistryRepositoryList](_api_.containerprojectregistryapi.md#containerprojectregistryrepositorylist)
* [containerProjectRegistryServiceGet](_api_.containerprojectregistryapi.md#containerprojectregistryserviceget)
* [containerProjectRegistryServiceList](_api_.containerprojectregistryapi.md#containerprojectregistryservicelist)
* [containerProjectRegistryStart](_api_.containerprojectregistryapi.md#containerprojectregistrystart)
* [containerProjectRegistryStop](_api_.containerprojectregistryapi.md#containerprojectregistrystop)
* [containerProjectRegistryTagCreate](_api_.containerprojectregistryapi.md#containerprojectregistrytagcreate)
* [containerProjectRegistryTagDelete](_api_.containerprojectregistryapi.md#containerprojectregistrytagdelete)
* [containerProjectRegistryTagGet](_api_.containerprojectregistryapi.md#containerprojectregistrytagget)
* [containerProjectRegistryTagList](_api_.containerprojectregistryapi.md#containerprojectregistrytaglist)
* [containerProjectRegistryTagPut](_api_.containerprojectregistryapi.md#containerprojectregistrytagput)
* [containerProjectRegistryTransfer](_api_.containerprojectregistryapi.md#containerprojectregistrytransfer)
* [containerProjectRegistryUpdate](_api_.containerprojectregistryapi.md#containerprojectregistryupdate)

## Constructors

### constructor

\+ **new ContainerProjectRegistryApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [ContainerProjectRegistryApi](_api_.containerprojectregistryapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [ContainerProjectRegistryApi](_api_.containerprojectregistryapi.md)

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

### containerProjectRegistryCreate

▸ **containerProjectRegistryCreate**(`projectId`: string, `locationId`: string, `containerProjectRegistryCreate`: [ContainerProjectRegistryCreate](../interfaces/_api_.containerprojectregistrycreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

*Defined in api.ts:16683*

Create registry

**`summary`** Create container/registry

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`containerProjectRegistryCreate` | [ContainerProjectRegistryCreate](../interfaces/_api_.containerprojectregistrycreate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

___

### containerProjectRegistryCredentialCreate

▸ **containerProjectRegistryCredentialCreate**(`projectId`: string, `locationId`: string, `registryId`: string, `registryCredential`: [RegistryCredential](../interfaces/_api_.registrycredential.md), `options?`: any): Promise\<AxiosResponse\<[RegistryCredential](../interfaces/_api_.registrycredential.md)>>

*Defined in api.ts:16698*

Create container/registry.credential

**`summary`** Create container/registry.credential

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`registryCredential` | [RegistryCredential](../interfaces/_api_.registrycredential.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[RegistryCredential](../interfaces/_api_.registrycredential.md)>>

___

### containerProjectRegistryCredentialDelete

▸ **containerProjectRegistryCredentialDelete**(`projectId`: string, `locationId`: string, `registryId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

*Defined in api.ts:16713*

Delete container/registry.credential

**`summary`** Delete container/registry.credential

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

___

### containerProjectRegistryCredentialGet

▸ **containerProjectRegistryCredentialGet**(`projectId`: string, `locationId`: string, `registryId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[RegistryCredential](../interfaces/_api_.registrycredential.md)>>

*Defined in api.ts:16728*

Get container/registry.credential

**`summary`** Get container/registry.credential

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[RegistryCredential](../interfaces/_api_.registrycredential.md)>>

___

### containerProjectRegistryCredentialList

▸ **containerProjectRegistryCredentialList**(`projectId`: string, `locationId`: string, `registryId`: string, `options?`: any): Promise\<AxiosResponse\<[RegistryCredential](../interfaces/_api_.registrycredential.md)[]>>

*Defined in api.ts:16742*

List container/registry.credential

**`summary`** List container/registry.credential

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[RegistryCredential](../interfaces/_api_.registrycredential.md)[]>>

___

### containerProjectRegistryCredentialPatch

▸ **containerProjectRegistryCredentialPatch**(`projectId`: string, `locationId`: string, `registryId`: string, `credentialId`: string, `containerProjectRegistryCredentialPatch`: [ContainerProjectRegistryCredentialPatch](../interfaces/_api_.containerprojectregistrycredentialpatch.md), `options?`: any): Promise\<AxiosResponse\<[RegistryCredential](../interfaces/_api_.registrycredential.md)>>

*Defined in api.ts:16758*

Update container/registry.credential

**`summary`** Update container/registry.credential

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`credentialId` | string | credentialId |
`containerProjectRegistryCredentialPatch` | [ContainerProjectRegistryCredentialPatch](../interfaces/_api_.containerprojectregistrycredentialpatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[RegistryCredential](../interfaces/_api_.registrycredential.md)>>

___

### containerProjectRegistryDelete

▸ **containerProjectRegistryDelete**(`projectId`: string, `locationId`: string, `registryId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:16772*

Delete registry

**`summary`** Delete container/registry

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### containerProjectRegistryDomainCreate

▸ **containerProjectRegistryDomainCreate**(`projectId`: string, `locationId`: string, `registryId`: string, `domain`: [Domain](../interfaces/_api_.domain.md), `options?`: any): Promise\<AxiosResponse\<[Domain](../interfaces/_api_.domain.md)>>

*Defined in api.ts:16787*

Create container/registry.domain

**`summary`** Create container/registry.domain

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`domain` | [Domain](../interfaces/_api_.domain.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Domain](../interfaces/_api_.domain.md)>>

___

### containerProjectRegistryDomainDelete

▸ **containerProjectRegistryDomainDelete**(`projectId`: string, `locationId`: string, `registryId`: string, `domainId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:16802*

Delete container/registry.domain

**`summary`** Delete container/registry.domain

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`domainId` | string | domainId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### containerProjectRegistryDomainGet

▸ **containerProjectRegistryDomainGet**(`projectId`: string, `locationId`: string, `registryId`: string, `domainId`: string, `options?`: any): Promise\<AxiosResponse\<[Domain](../interfaces/_api_.domain.md)>>

*Defined in api.ts:16817*

Get container/registry.domain

**`summary`** Get container/registry.domain

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`domainId` | string | domainId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Domain](../interfaces/_api_.domain.md)>>

___

### containerProjectRegistryDomainList

▸ **containerProjectRegistryDomainList**(`projectId`: string, `locationId`: string, `registryId`: string, `options?`: any): Promise\<AxiosResponse\<[Domain](../interfaces/_api_.domain.md)[]>>

*Defined in api.ts:16831*

List container/registry.domain

**`summary`** List container/registry.domain

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Domain](../interfaces/_api_.domain.md)[]>>

___

### containerProjectRegistryEventGet

▸ **containerProjectRegistryEventGet**(`projectId`: string, `locationId`: string, `registryId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:16846*

Get container/registry.event

**`summary`** Get container/registry.event

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### containerProjectRegistryEventList

▸ **containerProjectRegistryEventList**(`projectId`: string, `locationId`: string, `registryId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:16862*

List container/registry.event

**`summary`** List container/registry.event

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### containerProjectRegistryGet

▸ **containerProjectRegistryGet**(`projectId`: string, `locationId`: string, `registryId`: string, `options?`: any): Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

*Defined in api.ts:16876*

Returns a single registry

**`summary`** Get container/registry

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

___

### containerProjectRegistryList

▸ **containerProjectRegistryList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)[]>>

*Defined in api.ts:16892*

List registry

**`summary`** List container/registry

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)[]>>

___

### containerProjectRegistryRepositoryGet

▸ **containerProjectRegistryRepositoryGet**(`projectId`: string, `locationId`: string, `registryId`: string, `repositoryId`: string, `options?`: any): Promise\<AxiosResponse\<[ContainerRepository](../interfaces/_api_.containerrepository.md)>>

*Defined in api.ts:16907*

Get container/registry.repository

**`summary`** Get container/registry.repository

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`repositoryId` | string | repositoryId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ContainerRepository](../interfaces/_api_.containerrepository.md)>>

___

### containerProjectRegistryRepositoryImageDelete

▸ **containerProjectRegistryRepositoryImageDelete**(`projectId`: string, `locationId`: string, `registryId`: string, `repositoryId`: string, `imageId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:16923*

Delete container/registry.image

**`summary`** Delete container/registry.image

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`repositoryId` | string | repositoryId |
`imageId` | string | imageId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### containerProjectRegistryRepositoryImageGet

▸ **containerProjectRegistryRepositoryImageGet**(`projectId`: string, `locationId`: string, `registryId`: string, `repositoryId`: string, `imageId`: string, `options?`: any): Promise\<AxiosResponse\<[ContainerImage](../interfaces/_api_.containerimage.md)>>

*Defined in api.ts:16939*

Get container/registry.image

**`summary`** Get container/registry.image

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`repositoryId` | string | repositoryId |
`imageId` | string | imageId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ContainerImage](../interfaces/_api_.containerimage.md)>>

___

### containerProjectRegistryRepositoryImageList

▸ **containerProjectRegistryRepositoryImageList**(`projectId`: string, `locationId`: string, `registryId`: string, `repositoryId`: string, `options?`: any): Promise\<AxiosResponse\<[ContainerImage](../interfaces/_api_.containerimage.md)[]>>

*Defined in api.ts:16954*

List container/registry.image

**`summary`** List container/registry.image

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`repositoryId` | string | repositoryId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ContainerImage](../interfaces/_api_.containerimage.md)[]>>

___

### containerProjectRegistryRepositoryList

▸ **containerProjectRegistryRepositoryList**(`projectId`: string, `locationId`: string, `registryId`: string, `options?`: any): Promise\<AxiosResponse\<[ContainerRepository](../interfaces/_api_.containerrepository.md)[]>>

*Defined in api.ts:16968*

List container/registry.repository

**`summary`** List container/registry.repository

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ContainerRepository](../interfaces/_api_.containerrepository.md)[]>>

___

### containerProjectRegistryServiceGet

▸ **containerProjectRegistryServiceGet**(`projectId`: string, `locationId`: string, `registryId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:16983*

Get container/registry.service

**`summary`** Get container/registry.service

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### containerProjectRegistryServiceList

▸ **containerProjectRegistryServiceList**(`projectId`: string, `locationId`: string, `registryId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:16997*

List container/registry.service

**`summary`** List container/registry.service

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### containerProjectRegistryStart

▸ **containerProjectRegistryStart**(`projectId`: string, `locationId`: string, `registryId`: string, `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

*Defined in api.ts:17013*

action start

**`summary`** Start container/registry

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

___

### containerProjectRegistryStop

▸ **containerProjectRegistryStop**(`projectId`: string, `locationId`: string, `registryId`: string, `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

*Defined in api.ts:17029*

action stop

**`summary`** Stop container/registry

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

___

### containerProjectRegistryTagCreate

▸ **containerProjectRegistryTagCreate**(`projectId`: string, `locationId`: string, `registryId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:17044*

Create container/registry.tag

**`summary`** Create container/registry.tag

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### containerProjectRegistryTagDelete

▸ **containerProjectRegistryTagDelete**(`projectId`: string, `locationId`: string, `registryId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:17059*

Delete container/registry.tag

**`summary`** Delete container/registry.tag

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### containerProjectRegistryTagGet

▸ **containerProjectRegistryTagGet**(`projectId`: string, `locationId`: string, `registryId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:17074*

Get container/registry.tag

**`summary`** Get container/registry.tag

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### containerProjectRegistryTagList

▸ **containerProjectRegistryTagList**(`projectId`: string, `locationId`: string, `registryId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:17088*

List container/registry.tag

**`summary`** List container/registry.tag

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### containerProjectRegistryTagPut

▸ **containerProjectRegistryTagPut**(`projectId`: string, `locationId`: string, `registryId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:17103*

Replace container/registry.tag

**`summary`** Replace container/registry.tag

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### containerProjectRegistryTransfer

▸ **containerProjectRegistryTransfer**(`projectId`: string, `locationId`: string, `registryId`: string, `containerProjectRegistryTransfer`: [ContainerProjectRegistryTransfer](../interfaces/_api_.containerprojectregistrytransfer.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

*Defined in api.ts:17120*

action transfer

**`summary`** Transfer container/registry

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`containerProjectRegistryTransfer` | [ContainerProjectRegistryTransfer](../interfaces/_api_.containerprojectregistrytransfer.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

___

### containerProjectRegistryUpdate

▸ **containerProjectRegistryUpdate**(`projectId`: string, `locationId`: string, `registryId`: string, `containerProjectRegistryUpdate`: [ContainerProjectRegistryUpdate](../interfaces/_api_.containerprojectregistryupdate.md), `options?`: any): Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>

*Defined in api.ts:17135*

Returns modified registry

**`summary`** Update container/registry

**`throws`** {RequiredError}

**`memberof`** ContainerProjectRegistryApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`registryId` | string | Registry Id |
`containerProjectRegistryUpdate` | [ContainerProjectRegistryUpdate](../interfaces/_api_.containerprojectregistryupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Registry](../interfaces/_api_.registry.md)>>
