**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / ProviderProjectAgentApi

# Class: ProviderProjectAgentApi

ProviderProjectAgentApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **ProviderProjectAgentApi**

## Index

### Constructors

* [constructor](_api_.providerprojectagentapi.md#constructor)

### Properties

* [axios](_api_.providerprojectagentapi.md#axios)
* [basePath](_api_.providerprojectagentapi.md#basepath)
* [configuration](_api_.providerprojectagentapi.md#configuration)

### Methods

* [providerProjectAgentCreate](_api_.providerprojectagentapi.md#providerprojectagentcreate)
* [providerProjectAgentCredentialCreate](_api_.providerprojectagentapi.md#providerprojectagentcredentialcreate)
* [providerProjectAgentCredentialDelete](_api_.providerprojectagentapi.md#providerprojectagentcredentialdelete)
* [providerProjectAgentCredentialGet](_api_.providerprojectagentapi.md#providerprojectagentcredentialget)
* [providerProjectAgentCredentialList](_api_.providerprojectagentapi.md#providerprojectagentcredentiallist)
* [providerProjectAgentCredentialPatch](_api_.providerprojectagentapi.md#providerprojectagentcredentialpatch)
* [providerProjectAgentDelete](_api_.providerprojectagentapi.md#providerprojectagentdelete)
* [providerProjectAgentEnabledServiceCreate](_api_.providerprojectagentapi.md#providerprojectagentenabledservicecreate)
* [providerProjectAgentEnabledServiceDelete](_api_.providerprojectagentapi.md#providerprojectagentenabledservicedelete)
* [providerProjectAgentEnabledServiceGet](_api_.providerprojectagentapi.md#providerprojectagentenabledserviceget)
* [providerProjectAgentEnabledServiceList](_api_.providerprojectagentapi.md#providerprojectagentenabledservicelist)
* [providerProjectAgentEventGet](_api_.providerprojectagentapi.md#providerprojectagenteventget)
* [providerProjectAgentEventList](_api_.providerprojectagentapi.md#providerprojectagenteventlist)
* [providerProjectAgentGet](_api_.providerprojectagentapi.md#providerprojectagentget)
* [providerProjectAgentInspect](_api_.providerprojectagentapi.md#providerprojectagentinspect)
* [providerProjectAgentList](_api_.providerprojectagentapi.md#providerprojectagentlist)
* [providerProjectAgentMetricGet](_api_.providerprojectagentapi.md#providerprojectagentmetricget)
* [providerProjectAgentMetricList](_api_.providerprojectagentapi.md#providerprojectagentmetriclist)
* [providerProjectAgentMetricPointList](_api_.providerprojectagentapi.md#providerprojectagentmetricpointlist)
* [providerProjectAgentResourceEventList](_api_.providerprojectagentapi.md#providerprojectagentresourceeventlist)
* [providerProjectAgentResourceGet](_api_.providerprojectagentapi.md#providerprojectagentresourceget)
* [providerProjectAgentResourceInspect](_api_.providerprojectagentapi.md#providerprojectagentresourceinspect)
* [providerProjectAgentResourceList](_api_.providerprojectagentapi.md#providerprojectagentresourcelist)
* [providerProjectAgentResourceRecreate](_api_.providerprojectagentapi.md#providerprojectagentresourcerecreate)
* [providerProjectAgentServiceGet](_api_.providerprojectagentapi.md#providerprojectagentserviceget)
* [providerProjectAgentServiceList](_api_.providerprojectagentapi.md#providerprojectagentservicelist)
* [providerProjectAgentStart](_api_.providerprojectagentapi.md#providerprojectagentstart)
* [providerProjectAgentSuspend](_api_.providerprojectagentapi.md#providerprojectagentsuspend)
* [providerProjectAgentTagCreate](_api_.providerprojectagentapi.md#providerprojectagenttagcreate)
* [providerProjectAgentTagDelete](_api_.providerprojectagentapi.md#providerprojectagenttagdelete)
* [providerProjectAgentTagGet](_api_.providerprojectagentapi.md#providerprojectagenttagget)
* [providerProjectAgentTagList](_api_.providerprojectagentapi.md#providerprojectagenttaglist)
* [providerProjectAgentTagPut](_api_.providerprojectagentapi.md#providerprojectagenttagput)
* [providerProjectAgentTransfer](_api_.providerprojectagentapi.md#providerprojectagenttransfer)
* [providerProjectAgentUpdate](_api_.providerprojectagentapi.md#providerprojectagentupdate)

## Constructors

### constructor

\+ **new ProviderProjectAgentApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [ProviderProjectAgentApi](_api_.providerprojectagentapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [ProviderProjectAgentApi](_api_.providerprojectagentapi.md)

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

### providerProjectAgentCreate

▸ **providerProjectAgentCreate**(`projectId`: string, `locationId`: string, `providerProjectAgentCreate`: [ProviderProjectAgentCreate](../interfaces/_api_.providerprojectagentcreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

*Defined in api.ts:50626*

Create agent

**`summary`** Create provider/agent

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`providerProjectAgentCreate` | [ProviderProjectAgentCreate](../interfaces/_api_.providerprojectagentcreate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

___

### providerProjectAgentCredentialCreate

▸ **providerProjectAgentCredentialCreate**(`projectId`: string, `locationId`: string, `agentId`: string, `agentCredential`: [AgentCredential](../interfaces/_api_.agentcredential.md), `options?`: any): Promise\<AxiosResponse\<[AgentCredential](../interfaces/_api_.agentcredential.md)>>

*Defined in api.ts:50641*

Create provider/agent.credential

**`summary`** Create provider/agent.credential

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`agentCredential` | [AgentCredential](../interfaces/_api_.agentcredential.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[AgentCredential](../interfaces/_api_.agentcredential.md)>>

___

### providerProjectAgentCredentialDelete

▸ **providerProjectAgentCredentialDelete**(`projectId`: string, `locationId`: string, `agentId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

*Defined in api.ts:50656*

Delete provider/agent.credential

**`summary`** Delete provider/agent.credential

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

___

### providerProjectAgentCredentialGet

▸ **providerProjectAgentCredentialGet**(`projectId`: string, `locationId`: string, `agentId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[AgentCredential](../interfaces/_api_.agentcredential.md)>>

*Defined in api.ts:50671*

Get provider/agent.credential

**`summary`** Get provider/agent.credential

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[AgentCredential](../interfaces/_api_.agentcredential.md)>>

___

### providerProjectAgentCredentialList

▸ **providerProjectAgentCredentialList**(`projectId`: string, `locationId`: string, `agentId`: string, `options?`: any): Promise\<AxiosResponse\<[AgentCredential](../interfaces/_api_.agentcredential.md)[]>>

*Defined in api.ts:50685*

List provider/agent.credential

**`summary`** List provider/agent.credential

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[AgentCredential](../interfaces/_api_.agentcredential.md)[]>>

___

### providerProjectAgentCredentialPatch

▸ **providerProjectAgentCredentialPatch**(`projectId`: string, `locationId`: string, `agentId`: string, `credentialId`: string, `providerProjectAgentCredentialPatch`: [ProviderProjectAgentCredentialPatch](../interfaces/_api_.providerprojectagentcredentialpatch.md), `options?`: any): Promise\<AxiosResponse\<[AgentCredential](../interfaces/_api_.agentcredential.md)>>

*Defined in api.ts:50701*

Update provider/agent.credential

**`summary`** Update provider/agent.credential

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`credentialId` | string | credentialId |
`providerProjectAgentCredentialPatch` | [ProviderProjectAgentCredentialPatch](../interfaces/_api_.providerprojectagentcredentialpatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[AgentCredential](../interfaces/_api_.agentcredential.md)>>

___

### providerProjectAgentDelete

▸ **providerProjectAgentDelete**(`projectId`: string, `locationId`: string, `agentId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:50715*

Delete agent

**`summary`** Delete provider/agent

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### providerProjectAgentEnabledServiceCreate

▸ **providerProjectAgentEnabledServiceCreate**(`projectId`: string, `locationId`: string, `agentId`: string, `enabledService`: [EnabledService](../interfaces/_api_.enabledservice.md), `options?`: any): Promise\<AxiosResponse\<[EnabledService](../interfaces/_api_.enabledservice.md)>>

*Defined in api.ts:50730*

Create provider/agent.enabledService

**`summary`** Create provider/agent.enabledService

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`enabledService` | [EnabledService](../interfaces/_api_.enabledservice.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[EnabledService](../interfaces/_api_.enabledservice.md)>>

___

### providerProjectAgentEnabledServiceDelete

▸ **providerProjectAgentEnabledServiceDelete**(`projectId`: string, `locationId`: string, `agentId`: string, `enabledServiceId`: string, `options?`: any): Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

*Defined in api.ts:50745*

Delete provider/agent.enabledService

**`summary`** Delete provider/agent.enabledService

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`enabledServiceId` | string | enabledServiceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

___

### providerProjectAgentEnabledServiceGet

▸ **providerProjectAgentEnabledServiceGet**(`projectId`: string, `locationId`: string, `agentId`: string, `enabledServiceId`: string, `options?`: any): Promise\<AxiosResponse\<[EnabledService](../interfaces/_api_.enabledservice.md)>>

*Defined in api.ts:50760*

Get provider/agent.enabledService

**`summary`** Get provider/agent.enabledService

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`enabledServiceId` | string | enabledServiceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[EnabledService](../interfaces/_api_.enabledservice.md)>>

___

### providerProjectAgentEnabledServiceList

▸ **providerProjectAgentEnabledServiceList**(`projectId`: string, `locationId`: string, `agentId`: string, `options?`: any): Promise\<AxiosResponse\<[EnabledService](../interfaces/_api_.enabledservice.md)[]>>

*Defined in api.ts:50774*

List provider/agent.enabledService

**`summary`** List provider/agent.enabledService

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[EnabledService](../interfaces/_api_.enabledservice.md)[]>>

___

### providerProjectAgentEventGet

▸ **providerProjectAgentEventGet**(`projectId`: string, `locationId`: string, `agentId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:50789*

Get provider/agent.event

**`summary`** Get provider/agent.event

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### providerProjectAgentEventList

▸ **providerProjectAgentEventList**(`projectId`: string, `locationId`: string, `agentId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:50805*

List provider/agent.event

**`summary`** List provider/agent.event

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### providerProjectAgentGet

▸ **providerProjectAgentGet**(`projectId`: string, `locationId`: string, `agentId`: string, `options?`: any): Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

*Defined in api.ts:50819*

Returns a single agent

**`summary`** Get provider/agent

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

___

### providerProjectAgentInspect

▸ **providerProjectAgentInspect**(`projectId`: string, `locationId`: string, `agentId`: string, `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<object>>

*Defined in api.ts:50835*

action inspect

**`summary`** Inspect provider/agent

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<object>>

___

### providerProjectAgentList

▸ **providerProjectAgentList**(`projectId`: string, `locationId`: string, `name?`: string, `enabledServices?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)[]>>

*Defined in api.ts:50852*

List agent

**`summary`** List provider/agent

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`enabledServices?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)[]>>

___

### providerProjectAgentMetricGet

▸ **providerProjectAgentMetricGet**(`projectId`: string, `locationId`: string, `agentId`: string, `metricId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

*Defined in api.ts:50867*

Get provider/agent.metric

**`summary`** Get provider/agent.metric

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`metricId` | string | metricId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

___

### providerProjectAgentMetricList

▸ **providerProjectAgentMetricList**(`projectId`: string, `locationId`: string, `agentId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

*Defined in api.ts:50881*

List provider/agent.metric

**`summary`** List provider/agent.metric

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

___

### providerProjectAgentMetricPointList

▸ **providerProjectAgentMetricPointList**(`projectId`: string, `locationId`: string, `agentId`: string, `metricId`: string, `interval?`: string, `timespan?`: string, `options?`: any): Promise\<AxiosResponse\<[Point](../interfaces/_api_.point.md)[]>>

*Defined in api.ts:50898*

List provider/agent.point

**`summary`** List provider/agent.point

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`metricId` | string | metricId |
`interval?` | string | - |
`timespan?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Point](../interfaces/_api_.point.md)[]>>

___

### providerProjectAgentResourceEventList

▸ **providerProjectAgentResourceEventList**(`projectId`: string, `locationId`: string, `agentId`: string, `resourceId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[ProviderAgentResourceEvent](../interfaces/_api_.provideragentresourceevent.md)[]>>

*Defined in api.ts:50915*

List provider/agent.event

**`summary`** List provider/agent.event

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`resourceId` | string | resourceId |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProviderAgentResourceEvent](../interfaces/_api_.provideragentresourceevent.md)[]>>

___

### providerProjectAgentResourceGet

▸ **providerProjectAgentResourceGet**(`projectId`: string, `locationId`: string, `agentId`: string, `resourceId`: string, `options?`: any): Promise\<AxiosResponse\<[ProviderAgentResource](../interfaces/_api_.provideragentresource.md)>>

*Defined in api.ts:50930*

Get provider/agent.resource

**`summary`** Get provider/agent.resource

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`resourceId` | string | resourceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProviderAgentResource](../interfaces/_api_.provideragentresource.md)>>

___

### providerProjectAgentResourceInspect

▸ **providerProjectAgentResourceInspect**(`projectId`: string, `locationId`: string, `agentId`: string, `resourceId`: string, `options?`: any): Promise\<AxiosResponse\<any>>

*Defined in api.ts:50945*

action inspect

**`summary`** Inspect provider/agent.resource

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`resourceId` | string | resourceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<any>>

___

### providerProjectAgentResourceList

▸ **providerProjectAgentResourceList**(`projectId`: string, `locationId`: string, `agentId`: string, `options?`: any): Promise\<AxiosResponse\<[ProviderAgentResource](../interfaces/_api_.provideragentresource.md)[]>>

*Defined in api.ts:50959*

List provider/agent.resource

**`summary`** List provider/agent.resource

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProviderAgentResource](../interfaces/_api_.provideragentresource.md)[]>>

___

### providerProjectAgentResourceRecreate

▸ **providerProjectAgentResourceRecreate**(`projectId`: string, `locationId`: string, `agentId`: string, `resourceId`: string, `options?`: any): Promise\<AxiosResponse\<[ProviderAgentResource](../interfaces/_api_.provideragentresource.md)>>

*Defined in api.ts:50974*

action recreate

**`summary`** Recreate provider/agent.resource

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`resourceId` | string | resourceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ProviderAgentResource](../interfaces/_api_.provideragentresource.md)>>

___

### providerProjectAgentServiceGet

▸ **providerProjectAgentServiceGet**(`projectId`: string, `locationId`: string, `agentId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:50989*

Get provider/agent.service

**`summary`** Get provider/agent.service

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### providerProjectAgentServiceList

▸ **providerProjectAgentServiceList**(`projectId`: string, `locationId`: string, `agentId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:51003*

List provider/agent.service

**`summary`** List provider/agent.service

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### providerProjectAgentStart

▸ **providerProjectAgentStart**(`projectId`: string, `locationId`: string, `agentId`: string, `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

*Defined in api.ts:51019*

action start

**`summary`** Start provider/agent

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

___

### providerProjectAgentSuspend

▸ **providerProjectAgentSuspend**(`projectId`: string, `locationId`: string, `agentId`: string, `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

*Defined in api.ts:51035*

action suspend

**`summary`** Suspend provider/agent

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

___

### providerProjectAgentTagCreate

▸ **providerProjectAgentTagCreate**(`projectId`: string, `locationId`: string, `agentId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:51050*

Create provider/agent.tag

**`summary`** Create provider/agent.tag

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### providerProjectAgentTagDelete

▸ **providerProjectAgentTagDelete**(`projectId`: string, `locationId`: string, `agentId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:51065*

Delete provider/agent.tag

**`summary`** Delete provider/agent.tag

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### providerProjectAgentTagGet

▸ **providerProjectAgentTagGet**(`projectId`: string, `locationId`: string, `agentId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:51080*

Get provider/agent.tag

**`summary`** Get provider/agent.tag

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### providerProjectAgentTagList

▸ **providerProjectAgentTagList**(`projectId`: string, `locationId`: string, `agentId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:51094*

List provider/agent.tag

**`summary`** List provider/agent.tag

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### providerProjectAgentTagPut

▸ **providerProjectAgentTagPut**(`projectId`: string, `locationId`: string, `agentId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:51109*

Replace provider/agent.tag

**`summary`** Replace provider/agent.tag

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### providerProjectAgentTransfer

▸ **providerProjectAgentTransfer**(`projectId`: string, `locationId`: string, `agentId`: string, `providerProjectAgentTransfer`: [ProviderProjectAgentTransfer](../interfaces/_api_.providerprojectagenttransfer.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

*Defined in api.ts:51126*

action transfer

**`summary`** Transfer provider/agent

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`providerProjectAgentTransfer` | [ProviderProjectAgentTransfer](../interfaces/_api_.providerprojectagenttransfer.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

___

### providerProjectAgentUpdate

▸ **providerProjectAgentUpdate**(`projectId`: string, `locationId`: string, `agentId`: string, `providerProjectAgentUpdate`: [ProviderProjectAgentUpdate](../interfaces/_api_.providerprojectagentupdate.md), `options?`: any): Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>

*Defined in api.ts:51141*

Returns modified agent

**`summary`** Update provider/agent

**`throws`** {RequiredError}

**`memberof`** ProviderProjectAgentApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`agentId` | string | Agent Id |
`providerProjectAgentUpdate` | [ProviderProjectAgentUpdate](../interfaces/_api_.providerprojectagentupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Agent](../interfaces/_api_.agent.md)>>
