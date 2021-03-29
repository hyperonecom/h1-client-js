**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / WebsiteProjectInstanceApi

# Class: WebsiteProjectInstanceApi

WebsiteProjectInstanceApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **WebsiteProjectInstanceApi**

## Index

### Constructors

* [constructor](_api_.websiteprojectinstanceapi.md#constructor)

### Properties

* [axios](_api_.websiteprojectinstanceapi.md#axios)
* [basePath](_api_.websiteprojectinstanceapi.md#basepath)
* [configuration](_api_.websiteprojectinstanceapi.md#configuration)

### Methods

* [websiteProjectInstanceConnectGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceconnectget)
* [websiteProjectInstanceConnectList](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceconnectlist)
* [websiteProjectInstanceCreate](_api_.websiteprojectinstanceapi.md#websiteprojectinstancecreate)
* [websiteProjectInstanceCredentialCreate](_api_.websiteprojectinstanceapi.md#websiteprojectinstancecredentialcreate)
* [websiteProjectInstanceCredentialDelete](_api_.websiteprojectinstanceapi.md#websiteprojectinstancecredentialdelete)
* [websiteProjectInstanceCredentialGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstancecredentialget)
* [websiteProjectInstanceCredentialList](_api_.websiteprojectinstanceapi.md#websiteprojectinstancecredentiallist)
* [websiteProjectInstanceCredentialPatch](_api_.websiteprojectinstanceapi.md#websiteprojectinstancecredentialpatch)
* [websiteProjectInstanceDelete](_api_.websiteprojectinstanceapi.md#websiteprojectinstancedelete)
* [websiteProjectInstanceDomainCreate](_api_.websiteprojectinstanceapi.md#websiteprojectinstancedomaincreate)
* [websiteProjectInstanceDomainDelete](_api_.websiteprojectinstanceapi.md#websiteprojectinstancedomaindelete)
* [websiteProjectInstanceDomainGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstancedomainget)
* [websiteProjectInstanceDomainList](_api_.websiteprojectinstanceapi.md#websiteprojectinstancedomainlist)
* [websiteProjectInstanceEnvCreate](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceenvcreate)
* [websiteProjectInstanceEnvDelete](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceenvdelete)
* [websiteProjectInstanceEnvGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceenvget)
* [websiteProjectInstanceEnvList](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceenvlist)
* [websiteProjectInstanceEventGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceeventget)
* [websiteProjectInstanceEventList](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceeventlist)
* [websiteProjectInstanceGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceget)
* [websiteProjectInstanceLinkCreate](_api_.websiteprojectinstanceapi.md#websiteprojectinstancelinkcreate)
* [websiteProjectInstanceLinkDelete](_api_.websiteprojectinstanceapi.md#websiteprojectinstancelinkdelete)
* [websiteProjectInstanceLinkGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstancelinkget)
* [websiteProjectInstanceLinkList](_api_.websiteprojectinstanceapi.md#websiteprojectinstancelinklist)
* [websiteProjectInstanceList](_api_.websiteprojectinstanceapi.md#websiteprojectinstancelist)
* [websiteProjectInstanceLogGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstancelogget)
* [websiteProjectInstanceLogList](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceloglist)
* [websiteProjectInstanceLogRead](_api_.websiteprojectinstanceapi.md#websiteprojectinstancelogread)
* [websiteProjectInstanceMetricGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstancemetricget)
* [websiteProjectInstanceMetricList](_api_.websiteprojectinstanceapi.md#websiteprojectinstancemetriclist)
* [websiteProjectInstanceMetricPointList](_api_.websiteprojectinstanceapi.md#websiteprojectinstancemetricpointlist)
* [websiteProjectInstanceRestart](_api_.websiteprojectinstanceapi.md#websiteprojectinstancerestart)
* [websiteProjectInstanceServiceGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceserviceget)
* [websiteProjectInstanceServiceList](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceservicelist)
* [websiteProjectInstanceSideappGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstancesideappget)
* [websiteProjectInstanceSideappList](_api_.websiteprojectinstanceapi.md#websiteprojectinstancesideapplist)
* [websiteProjectInstanceSideappOpen](_api_.websiteprojectinstanceapi.md#websiteprojectinstancesideappopen)
* [websiteProjectInstanceSnapshotCreate](_api_.websiteprojectinstanceapi.md#websiteprojectinstancesnapshotcreate)
* [websiteProjectInstanceSnapshotDelete](_api_.websiteprojectinstanceapi.md#websiteprojectinstancesnapshotdelete)
* [websiteProjectInstanceSnapshotDownload](_api_.websiteprojectinstanceapi.md#websiteprojectinstancesnapshotdownload)
* [websiteProjectInstanceSnapshotGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstancesnapshotget)
* [websiteProjectInstanceSnapshotList](_api_.websiteprojectinstanceapi.md#websiteprojectinstancesnapshotlist)
* [websiteProjectInstanceStart](_api_.websiteprojectinstanceapi.md#websiteprojectinstancestart)
* [websiteProjectInstanceStop](_api_.websiteprojectinstanceapi.md#websiteprojectinstancestop)
* [websiteProjectInstanceTagCreate](_api_.websiteprojectinstanceapi.md#websiteprojectinstancetagcreate)
* [websiteProjectInstanceTagDelete](_api_.websiteprojectinstanceapi.md#websiteprojectinstancetagdelete)
* [websiteProjectInstanceTagGet](_api_.websiteprojectinstanceapi.md#websiteprojectinstancetagget)
* [websiteProjectInstanceTagList](_api_.websiteprojectinstanceapi.md#websiteprojectinstancetaglist)
* [websiteProjectInstanceTagPut](_api_.websiteprojectinstanceapi.md#websiteprojectinstancetagput)
* [websiteProjectInstanceTransfer](_api_.websiteprojectinstanceapi.md#websiteprojectinstancetransfer)
* [websiteProjectInstanceUpdate](_api_.websiteprojectinstanceapi.md#websiteprojectinstanceupdate)

## Constructors

### constructor

\+ **new WebsiteProjectInstanceApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [WebsiteProjectInstanceApi](_api_.websiteprojectinstanceapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [WebsiteProjectInstanceApi](_api_.websiteprojectinstanceapi.md)

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

### websiteProjectInstanceConnectGet

▸ **websiteProjectInstanceConnectGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `connectId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceConnect](../interfaces/_api_.resourceconnect.md)>>

*Defined in api.ts:73125*

Get website/instance.connect

**`summary`** Get website/instance.connect

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

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

### websiteProjectInstanceConnectList

▸ **websiteProjectInstanceConnectList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceConnect](../interfaces/_api_.resourceconnect.md)[]>>

*Defined in api.ts:73139*

List website/instance.connect

**`summary`** List website/instance.connect

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceConnect](../interfaces/_api_.resourceconnect.md)[]>>

___

### websiteProjectInstanceCreate

▸ **websiteProjectInstanceCreate**(`projectId`: string, `locationId`: string, `websiteProjectInstanceCreate`: [WebsiteProjectInstanceCreate](../interfaces/_api_.websiteprojectinstancecreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

*Defined in api.ts:73155*

Create instance

**`summary`** Create website/instance

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`websiteProjectInstanceCreate` | [WebsiteProjectInstanceCreate](../interfaces/_api_.websiteprojectinstancecreate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

___

### websiteProjectInstanceCredentialCreate

▸ **websiteProjectInstanceCredentialCreate**(`projectId`: string, `locationId`: string, `instanceId`: string, `websiteCredential`: [WebsiteCredential](../interfaces/_api_.websitecredential.md), `options?`: any): Promise\<AxiosResponse\<[WebsiteCredential](../interfaces/_api_.websitecredential.md)>>

*Defined in api.ts:73170*

Create website/instance.credential

**`summary`** Create website/instance.credential

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`websiteCredential` | [WebsiteCredential](../interfaces/_api_.websitecredential.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteCredential](../interfaces/_api_.websitecredential.md)>>

___

### websiteProjectInstanceCredentialDelete

▸ **websiteProjectInstanceCredentialDelete**(`projectId`: string, `locationId`: string, `instanceId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

*Defined in api.ts:73185*

Delete website/instance.credential

**`summary`** Delete website/instance.credential

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

___

### websiteProjectInstanceCredentialGet

▸ **websiteProjectInstanceCredentialGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[WebsiteCredential](../interfaces/_api_.websitecredential.md)>>

*Defined in api.ts:73200*

Get website/instance.credential

**`summary`** Get website/instance.credential

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteCredential](../interfaces/_api_.websitecredential.md)>>

___

### websiteProjectInstanceCredentialList

▸ **websiteProjectInstanceCredentialList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[WebsiteCredential](../interfaces/_api_.websitecredential.md)[]>>

*Defined in api.ts:73214*

List website/instance.credential

**`summary`** List website/instance.credential

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteCredential](../interfaces/_api_.websitecredential.md)[]>>

___

### websiteProjectInstanceCredentialPatch

▸ **websiteProjectInstanceCredentialPatch**(`projectId`: string, `locationId`: string, `instanceId`: string, `credentialId`: string, `websiteProjectInstanceCredentialPatch`: [WebsiteProjectInstanceCredentialPatch](../interfaces/_api_.websiteprojectinstancecredentialpatch.md), `options?`: any): Promise\<AxiosResponse\<[WebsiteCredential](../interfaces/_api_.websitecredential.md)>>

*Defined in api.ts:73230*

Update website/instance.credential

**`summary`** Update website/instance.credential

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`credentialId` | string | credentialId |
`websiteProjectInstanceCredentialPatch` | [WebsiteProjectInstanceCredentialPatch](../interfaces/_api_.websiteprojectinstancecredentialpatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteCredential](../interfaces/_api_.websitecredential.md)>>

___

### websiteProjectInstanceDelete

▸ **websiteProjectInstanceDelete**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:73244*

Delete instance

**`summary`** Delete website/instance

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### websiteProjectInstanceDomainCreate

▸ **websiteProjectInstanceDomainCreate**(`projectId`: string, `locationId`: string, `instanceId`: string, `domain`: [Domain](../interfaces/_api_.domain.md), `options?`: any): Promise\<AxiosResponse\<[Domain](../interfaces/_api_.domain.md)>>

*Defined in api.ts:73259*

Create website/instance.domain

**`summary`** Create website/instance.domain

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`domain` | [Domain](../interfaces/_api_.domain.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Domain](../interfaces/_api_.domain.md)>>

___

### websiteProjectInstanceDomainDelete

▸ **websiteProjectInstanceDomainDelete**(`projectId`: string, `locationId`: string, `instanceId`: string, `domainId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:73274*

Delete website/instance.domain

**`summary`** Delete website/instance.domain

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`domainId` | string | domainId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### websiteProjectInstanceDomainGet

▸ **websiteProjectInstanceDomainGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `domainId`: string, `options?`: any): Promise\<AxiosResponse\<[Domain](../interfaces/_api_.domain.md)>>

*Defined in api.ts:73289*

Get website/instance.domain

**`summary`** Get website/instance.domain

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`domainId` | string | domainId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Domain](../interfaces/_api_.domain.md)>>

___

### websiteProjectInstanceDomainList

▸ **websiteProjectInstanceDomainList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[Domain](../interfaces/_api_.domain.md)[]>>

*Defined in api.ts:73303*

List website/instance.domain

**`summary`** List website/instance.domain

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Domain](../interfaces/_api_.domain.md)[]>>

___

### websiteProjectInstanceEnvCreate

▸ **websiteProjectInstanceEnvCreate**(`projectId`: string, `locationId`: string, `instanceId`: string, `websiteEnv`: [WebsiteEnv](../interfaces/_api_.websiteenv.md), `options?`: any): Promise\<AxiosResponse\<[WebsiteEnv](../interfaces/_api_.websiteenv.md)>>

*Defined in api.ts:73318*

Create website/instance.env

**`summary`** Create website/instance.env

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`websiteEnv` | [WebsiteEnv](../interfaces/_api_.websiteenv.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteEnv](../interfaces/_api_.websiteenv.md)>>

___

### websiteProjectInstanceEnvDelete

▸ **websiteProjectInstanceEnvDelete**(`projectId`: string, `locationId`: string, `instanceId`: string, `envId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:73333*

Delete website/instance.env

**`summary`** Delete website/instance.env

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`envId` | string | envId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### websiteProjectInstanceEnvGet

▸ **websiteProjectInstanceEnvGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `envId`: string, `options?`: any): Promise\<AxiosResponse\<[WebsiteEnv](../interfaces/_api_.websiteenv.md)>>

*Defined in api.ts:73348*

Get website/instance.env

**`summary`** Get website/instance.env

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`envId` | string | envId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteEnv](../interfaces/_api_.websiteenv.md)>>

___

### websiteProjectInstanceEnvList

▸ **websiteProjectInstanceEnvList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[WebsiteEnv](../interfaces/_api_.websiteenv.md)[]>>

*Defined in api.ts:73362*

List website/instance.env

**`summary`** List website/instance.env

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteEnv](../interfaces/_api_.websiteenv.md)[]>>

___

### websiteProjectInstanceEventGet

▸ **websiteProjectInstanceEventGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:73377*

Get website/instance.event

**`summary`** Get website/instance.event

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

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

### websiteProjectInstanceEventList

▸ **websiteProjectInstanceEventList**(`projectId`: string, `locationId`: string, `instanceId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:73393*

List website/instance.event

**`summary`** List website/instance.event

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

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

### websiteProjectInstanceGet

▸ **websiteProjectInstanceGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

*Defined in api.ts:73407*

Returns a single instance

**`summary`** Get website/instance

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

___

### websiteProjectInstanceLinkCreate

▸ **websiteProjectInstanceLinkCreate**(`projectId`: string, `locationId`: string, `instanceId`: string, `websiteLink`: [WebsiteLink](../interfaces/_api_.websitelink.md), `options?`: any): Promise\<AxiosResponse\<[WebsiteLink](../interfaces/_api_.websitelink.md)>>

*Defined in api.ts:73422*

Create website/instance.link

**`summary`** Create website/instance.link

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`websiteLink` | [WebsiteLink](../interfaces/_api_.websitelink.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteLink](../interfaces/_api_.websitelink.md)>>

___

### websiteProjectInstanceLinkDelete

▸ **websiteProjectInstanceLinkDelete**(`projectId`: string, `locationId`: string, `instanceId`: string, `linkId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:73437*

Delete website/instance.link

**`summary`** Delete website/instance.link

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`linkId` | string | linkId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### websiteProjectInstanceLinkGet

▸ **websiteProjectInstanceLinkGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `linkId`: string, `options?`: any): Promise\<AxiosResponse\<[WebsiteLink](../interfaces/_api_.websitelink.md)>>

*Defined in api.ts:73452*

Get website/instance.link

**`summary`** Get website/instance.link

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`linkId` | string | linkId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteLink](../interfaces/_api_.websitelink.md)>>

___

### websiteProjectInstanceLinkList

▸ **websiteProjectInstanceLinkList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[WebsiteLink](../interfaces/_api_.websitelink.md)[]>>

*Defined in api.ts:73466*

List website/instance.link

**`summary`** List website/instance.link

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteLink](../interfaces/_api_.websitelink.md)[]>>

___

### websiteProjectInstanceList

▸ **websiteProjectInstanceList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)[]>>

*Defined in api.ts:73482*

List instance

**`summary`** List website/instance

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)[]>>

___

### websiteProjectInstanceLogGet

▸ **websiteProjectInstanceLogGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `logId`: string, `options?`: any): Promise\<AxiosResponse\<[Log](../interfaces/_api_.log.md)>>

*Defined in api.ts:73497*

Get website/instance.log

**`summary`** Get website/instance.log

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`logId` | string | logId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Log](../interfaces/_api_.log.md)>>

___

### websiteProjectInstanceLogList

▸ **websiteProjectInstanceLogList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[Log](../interfaces/_api_.log.md)[]>>

*Defined in api.ts:73511*

List website/instance.log

**`summary`** List website/instance.log

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Log](../interfaces/_api_.log.md)[]>>

___

### websiteProjectInstanceLogRead

▸ **websiteProjectInstanceLogRead**(`projectId`: string, `locationId`: string, `instanceId`: string, `logId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:73526*

action read

**`summary`** Read website/instance.log

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`logId` | string | logId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### websiteProjectInstanceMetricGet

▸ **websiteProjectInstanceMetricGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `metricId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

*Defined in api.ts:73541*

Get website/instance.metric

**`summary`** Get website/instance.metric

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

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

### websiteProjectInstanceMetricList

▸ **websiteProjectInstanceMetricList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

*Defined in api.ts:73555*

List website/instance.metric

**`summary`** List website/instance.metric

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

___

### websiteProjectInstanceMetricPointList

▸ **websiteProjectInstanceMetricPointList**(`projectId`: string, `locationId`: string, `instanceId`: string, `metricId`: string, `interval?`: string, `timespan?`: string, `options?`: any): Promise\<AxiosResponse\<[Point](../interfaces/_api_.point.md)[]>>

*Defined in api.ts:73572*

List website/instance.point

**`summary`** List website/instance.point

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

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

### websiteProjectInstanceRestart

▸ **websiteProjectInstanceRestart**(`projectId`: string, `locationId`: string, `instanceId`: string, `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

*Defined in api.ts:73588*

action restart

**`summary`** Restart website/instance

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

___

### websiteProjectInstanceServiceGet

▸ **websiteProjectInstanceServiceGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:73603*

Get website/instance.service

**`summary`** Get website/instance.service

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

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

### websiteProjectInstanceServiceList

▸ **websiteProjectInstanceServiceList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:73617*

List website/instance.service

**`summary`** List website/instance.service

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### websiteProjectInstanceSideappGet

▸ **websiteProjectInstanceSideappGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `sideappId`: string, `options?`: any): Promise\<AxiosResponse\<[WebsiteSideapp](../interfaces/_api_.websitesideapp.md)>>

*Defined in api.ts:73632*

Get website/instance.sideapp

**`summary`** Get website/instance.sideapp

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`sideappId` | string | sideappId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteSideapp](../interfaces/_api_.websitesideapp.md)>>

___

### websiteProjectInstanceSideappList

▸ **websiteProjectInstanceSideappList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[WebsiteSideapp](../interfaces/_api_.websitesideapp.md)[]>>

*Defined in api.ts:73646*

List website/instance.sideapp

**`summary`** List website/instance.sideapp

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteSideapp](../interfaces/_api_.websitesideapp.md)[]>>

___

### websiteProjectInstanceSideappOpen

▸ **websiteProjectInstanceSideappOpen**(`projectId`: string, `locationId`: string, `instanceId`: string, `sideappId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:73661*

action open

**`summary`** Open website/instance.sideapp

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`sideappId` | string | sideappId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### websiteProjectInstanceSnapshotCreate

▸ **websiteProjectInstanceSnapshotCreate**(`projectId`: string, `locationId`: string, `instanceId`: string, `websiteSnapshot`: [WebsiteSnapshot](../interfaces/_api_.websitesnapshot.md), `options?`: any): Promise\<AxiosResponse\<[WebsiteSnapshot](../interfaces/_api_.websitesnapshot.md)>>

*Defined in api.ts:73676*

Create website/instance.snapshot

**`summary`** Create website/instance.snapshot

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`websiteSnapshot` | [WebsiteSnapshot](../interfaces/_api_.websitesnapshot.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteSnapshot](../interfaces/_api_.websitesnapshot.md)>>

___

### websiteProjectInstanceSnapshotDelete

▸ **websiteProjectInstanceSnapshotDelete**(`projectId`: string, `locationId`: string, `instanceId`: string, `snapshotId`: string, `options?`: any): Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

*Defined in api.ts:73691*

Delete website/instance.snapshot

**`summary`** Delete website/instance.snapshot

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`snapshotId` | string | snapshotId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

___

### websiteProjectInstanceSnapshotDownload

▸ **websiteProjectInstanceSnapshotDownload**(`projectId`: string, `locationId`: string, `instanceId`: string, `snapshotId`: string, `websiteProjectInstanceSnapshotDownload`: [WebsiteProjectInstanceSnapshotDownload](../interfaces/_api_.websiteprojectinstancesnapshotdownload.md), `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:73707*

action download

**`summary`** Download website/instance.snapshot

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`snapshotId` | string | snapshotId |
`websiteProjectInstanceSnapshotDownload` | [WebsiteProjectInstanceSnapshotDownload](../interfaces/_api_.websiteprojectinstancesnapshotdownload.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### websiteProjectInstanceSnapshotGet

▸ **websiteProjectInstanceSnapshotGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `snapshotId`: string, `options?`: any): Promise\<AxiosResponse\<[WebsiteSnapshot](../interfaces/_api_.websitesnapshot.md)>>

*Defined in api.ts:73722*

Get website/instance.snapshot

**`summary`** Get website/instance.snapshot

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`snapshotId` | string | snapshotId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteSnapshot](../interfaces/_api_.websitesnapshot.md)>>

___

### websiteProjectInstanceSnapshotList

▸ **websiteProjectInstanceSnapshotList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[WebsiteSnapshot](../interfaces/_api_.websitesnapshot.md)[]>>

*Defined in api.ts:73736*

List website/instance.snapshot

**`summary`** List website/instance.snapshot

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[WebsiteSnapshot](../interfaces/_api_.websitesnapshot.md)[]>>

___

### websiteProjectInstanceStart

▸ **websiteProjectInstanceStart**(`projectId`: string, `locationId`: string, `instanceId`: string, `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

*Defined in api.ts:73752*

action start

**`summary`** Start website/instance

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

___

### websiteProjectInstanceStop

▸ **websiteProjectInstanceStop**(`projectId`: string, `locationId`: string, `instanceId`: string, `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

*Defined in api.ts:73768*

action stop

**`summary`** Stop website/instance

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

___

### websiteProjectInstanceTagCreate

▸ **websiteProjectInstanceTagCreate**(`projectId`: string, `locationId`: string, `instanceId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:73783*

Create website/instance.tag

**`summary`** Create website/instance.tag

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

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

### websiteProjectInstanceTagDelete

▸ **websiteProjectInstanceTagDelete**(`projectId`: string, `locationId`: string, `instanceId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:73798*

Delete website/instance.tag

**`summary`** Delete website/instance.tag

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

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

### websiteProjectInstanceTagGet

▸ **websiteProjectInstanceTagGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:73813*

Get website/instance.tag

**`summary`** Get website/instance.tag

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

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

### websiteProjectInstanceTagList

▸ **websiteProjectInstanceTagList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:73827*

List website/instance.tag

**`summary`** List website/instance.tag

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### websiteProjectInstanceTagPut

▸ **websiteProjectInstanceTagPut**(`projectId`: string, `locationId`: string, `instanceId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:73842*

Replace website/instance.tag

**`summary`** Replace website/instance.tag

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

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

### websiteProjectInstanceTransfer

▸ **websiteProjectInstanceTransfer**(`projectId`: string, `locationId`: string, `instanceId`: string, `websiteProjectInstanceTransfer`: [WebsiteProjectInstanceTransfer](../interfaces/_api_.websiteprojectinstancetransfer.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

*Defined in api.ts:73859*

action transfer

**`summary`** Transfer website/instance

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`websiteProjectInstanceTransfer` | [WebsiteProjectInstanceTransfer](../interfaces/_api_.websiteprojectinstancetransfer.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

___

### websiteProjectInstanceUpdate

▸ **websiteProjectInstanceUpdate**(`projectId`: string, `locationId`: string, `instanceId`: string, `websiteProjectInstanceUpdate`: [WebsiteProjectInstanceUpdate](../interfaces/_api_.websiteprojectinstanceupdate.md), `options?`: any): Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>

*Defined in api.ts:73874*

Returns modified instance

**`summary`** Update website/instance

**`throws`** {RequiredError}

**`memberof`** WebsiteProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`websiteProjectInstanceUpdate` | [WebsiteProjectInstanceUpdate](../interfaces/_api_.websiteprojectinstanceupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Website](../interfaces/_api_.website.md)>>
