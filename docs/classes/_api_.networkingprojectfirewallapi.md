**h1-client-ts**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / NetworkingProjectFirewallApi

# Class: NetworkingProjectFirewallApi

NetworkingProjectFirewallApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **NetworkingProjectFirewallApi**

## Index

### Constructors

* [constructor](_api_.networkingprojectfirewallapi.md#constructor)

### Properties

* [axios](_api_.networkingprojectfirewallapi.md#axios)
* [basePath](_api_.networkingprojectfirewallapi.md#basepath)
* [configuration](_api_.networkingprojectfirewallapi.md#configuration)

### Methods

* [networkingProjectFirewallCreate](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallcreate)
* [networkingProjectFirewallDelete](_api_.networkingprojectfirewallapi.md#networkingprojectfirewalldelete)
* [networkingProjectFirewallEgressCreate](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallegresscreate)
* [networkingProjectFirewallEgressDelete](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallegressdelete)
* [networkingProjectFirewallEgressGet](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallegressget)
* [networkingProjectFirewallEgressList](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallegresslist)
* [networkingProjectFirewallEgressPut](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallegressput)
* [networkingProjectFirewallEventGet](_api_.networkingprojectfirewallapi.md#networkingprojectfirewalleventget)
* [networkingProjectFirewallEventList](_api_.networkingprojectfirewallapi.md#networkingprojectfirewalleventlist)
* [networkingProjectFirewallGet](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallget)
* [networkingProjectFirewallIngressCreate](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallingresscreate)
* [networkingProjectFirewallIngressDelete](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallingressdelete)
* [networkingProjectFirewallIngressGet](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallingressget)
* [networkingProjectFirewallIngressList](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallingresslist)
* [networkingProjectFirewallIngressPut](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallingressput)
* [networkingProjectFirewallList](_api_.networkingprojectfirewallapi.md#networkingprojectfirewalllist)
* [networkingProjectFirewallServiceGet](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallserviceget)
* [networkingProjectFirewallServiceList](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallservicelist)
* [networkingProjectFirewallTagCreate](_api_.networkingprojectfirewallapi.md#networkingprojectfirewalltagcreate)
* [networkingProjectFirewallTagDelete](_api_.networkingprojectfirewallapi.md#networkingprojectfirewalltagdelete)
* [networkingProjectFirewallTagGet](_api_.networkingprojectfirewallapi.md#networkingprojectfirewalltagget)
* [networkingProjectFirewallTagList](_api_.networkingprojectfirewallapi.md#networkingprojectfirewalltaglist)
* [networkingProjectFirewallTagPut](_api_.networkingprojectfirewallapi.md#networkingprojectfirewalltagput)
* [networkingProjectFirewallTransfer](_api_.networkingprojectfirewallapi.md#networkingprojectfirewalltransfer)
* [networkingProjectFirewallUpdate](_api_.networkingprojectfirewallapi.md#networkingprojectfirewallupdate)

## Constructors

### constructor

\+ **new NetworkingProjectFirewallApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [NetworkingProjectFirewallApi](_api_.networkingprojectfirewallapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [NetworkingProjectFirewallApi](_api_.networkingprojectfirewallapi.md)

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

### networkingProjectFirewallCreate

▸ **networkingProjectFirewallCreate**(`projectId`: string, `locationId`: string, `networkingProjectFirewallCreate`: [NetworkingProjectFirewallCreate](../interfaces/_api_.networkingprojectfirewallcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Firewall](../interfaces/_api_.firewall.md)>>

*Defined in api.ts:44010*

Create firewall

**`summary`** Create networking/firewall

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkingProjectFirewallCreate` | [NetworkingProjectFirewallCreate](../interfaces/_api_.networkingprojectfirewallcreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Firewall](../interfaces/_api_.firewall.md)>>

___

### networkingProjectFirewallDelete

▸ **networkingProjectFirewallDelete**(`projectId`: string, `locationId`: string, `firewallId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:44024*

Delete firewall

**`summary`** Delete networking/firewall

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### networkingProjectFirewallEgressCreate

▸ **networkingProjectFirewallEgressCreate**(`projectId`: string, `locationId`: string, `firewallId`: string, `networkingRule`: [NetworkingRule](../interfaces/_api_.networkingrule.md), `options?`: any): Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)>>

*Defined in api.ts:44039*

Create networking/firewall.egress

**`summary`** Create networking/firewall.egress

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`networkingRule` | [NetworkingRule](../interfaces/_api_.networkingrule.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)>>

___

### networkingProjectFirewallEgressDelete

▸ **networkingProjectFirewallEgressDelete**(`projectId`: string, `locationId`: string, `firewallId`: string, `egressId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:44054*

Delete networking/firewall.egress

**`summary`** Delete networking/firewall.egress

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`egressId` | string | egressId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### networkingProjectFirewallEgressGet

▸ **networkingProjectFirewallEgressGet**(`projectId`: string, `locationId`: string, `firewallId`: string, `egressId`: string, `options?`: any): Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)>>

*Defined in api.ts:44069*

Get networking/firewall.egress

**`summary`** Get networking/firewall.egress

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`egressId` | string | egressId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)>>

___

### networkingProjectFirewallEgressList

▸ **networkingProjectFirewallEgressList**(`projectId`: string, `locationId`: string, `firewallId`: string, `options?`: any): Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)[]>>

*Defined in api.ts:44083*

List networking/firewall.egress

**`summary`** List networking/firewall.egress

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)[]>>

___

### networkingProjectFirewallEgressPut

▸ **networkingProjectFirewallEgressPut**(`projectId`: string, `locationId`: string, `firewallId`: string, `networkingRule`: Array\<[NetworkingRule](../interfaces/_api_.networkingrule.md)>, `options?`: any): Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)[]>>

*Defined in api.ts:44098*

Replace networking/firewall.egress

**`summary`** Replace networking/firewall.egress

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`networkingRule` | Array\<[NetworkingRule](../interfaces/_api_.networkingrule.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)[]>>

___

### networkingProjectFirewallEventGet

▸ **networkingProjectFirewallEventGet**(`projectId`: string, `locationId`: string, `firewallId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:44113*

Get networking/firewall.event

**`summary`** Get networking/firewall.event

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### networkingProjectFirewallEventList

▸ **networkingProjectFirewallEventList**(`projectId`: string, `locationId`: string, `firewallId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:44129*

List networking/firewall.event

**`summary`** List networking/firewall.event

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### networkingProjectFirewallGet

▸ **networkingProjectFirewallGet**(`projectId`: string, `locationId`: string, `firewallId`: string, `options?`: any): Promise\<AxiosResponse\<[Firewall](../interfaces/_api_.firewall.md)>>

*Defined in api.ts:44143*

Returns a single firewall

**`summary`** Get networking/firewall

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Firewall](../interfaces/_api_.firewall.md)>>

___

### networkingProjectFirewallIngressCreate

▸ **networkingProjectFirewallIngressCreate**(`projectId`: string, `locationId`: string, `firewallId`: string, `networkingRule`: [NetworkingRule](../interfaces/_api_.networkingrule.md), `options?`: any): Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)>>

*Defined in api.ts:44158*

Create networking/firewall.ingress

**`summary`** Create networking/firewall.ingress

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`networkingRule` | [NetworkingRule](../interfaces/_api_.networkingrule.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)>>

___

### networkingProjectFirewallIngressDelete

▸ **networkingProjectFirewallIngressDelete**(`projectId`: string, `locationId`: string, `firewallId`: string, `ingressId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:44173*

Delete networking/firewall.ingress

**`summary`** Delete networking/firewall.ingress

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`ingressId` | string | ingressId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### networkingProjectFirewallIngressGet

▸ **networkingProjectFirewallIngressGet**(`projectId`: string, `locationId`: string, `firewallId`: string, `ingressId`: string, `options?`: any): Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)>>

*Defined in api.ts:44188*

Get networking/firewall.ingress

**`summary`** Get networking/firewall.ingress

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`ingressId` | string | ingressId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)>>

___

### networkingProjectFirewallIngressList

▸ **networkingProjectFirewallIngressList**(`projectId`: string, `locationId`: string, `firewallId`: string, `options?`: any): Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)[]>>

*Defined in api.ts:44202*

List networking/firewall.ingress

**`summary`** List networking/firewall.ingress

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)[]>>

___

### networkingProjectFirewallIngressPut

▸ **networkingProjectFirewallIngressPut**(`projectId`: string, `locationId`: string, `firewallId`: string, `networkingRule`: Array\<[NetworkingRule](../interfaces/_api_.networkingrule.md)>, `options?`: any): Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)[]>>

*Defined in api.ts:44217*

Replace networking/firewall.ingress

**`summary`** Replace networking/firewall.ingress

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`networkingRule` | Array\<[NetworkingRule](../interfaces/_api_.networkingrule.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[NetworkingRule](../interfaces/_api_.networkingrule.md)[]>>

___

### networkingProjectFirewallList

▸ **networkingProjectFirewallList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Firewall](../interfaces/_api_.firewall.md)[]>>

*Defined in api.ts:44233*

List firewall

**`summary`** List networking/firewall

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Firewall](../interfaces/_api_.firewall.md)[]>>

___

### networkingProjectFirewallServiceGet

▸ **networkingProjectFirewallServiceGet**(`projectId`: string, `locationId`: string, `firewallId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:44248*

Get networking/firewall.service

**`summary`** Get networking/firewall.service

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### networkingProjectFirewallServiceList

▸ **networkingProjectFirewallServiceList**(`projectId`: string, `locationId`: string, `firewallId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:44262*

List networking/firewall.service

**`summary`** List networking/firewall.service

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### networkingProjectFirewallTagCreate

▸ **networkingProjectFirewallTagCreate**(`projectId`: string, `locationId`: string, `firewallId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:44277*

Create networking/firewall.tag

**`summary`** Create networking/firewall.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### networkingProjectFirewallTagDelete

▸ **networkingProjectFirewallTagDelete**(`projectId`: string, `locationId`: string, `firewallId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:44292*

Delete networking/firewall.tag

**`summary`** Delete networking/firewall.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### networkingProjectFirewallTagGet

▸ **networkingProjectFirewallTagGet**(`projectId`: string, `locationId`: string, `firewallId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:44307*

Get networking/firewall.tag

**`summary`** Get networking/firewall.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### networkingProjectFirewallTagList

▸ **networkingProjectFirewallTagList**(`projectId`: string, `locationId`: string, `firewallId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:44321*

List networking/firewall.tag

**`summary`** List networking/firewall.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### networkingProjectFirewallTagPut

▸ **networkingProjectFirewallTagPut**(`projectId`: string, `locationId`: string, `firewallId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:44336*

Replace networking/firewall.tag

**`summary`** Replace networking/firewall.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### networkingProjectFirewallTransfer

▸ **networkingProjectFirewallTransfer**(`projectId`: string, `locationId`: string, `firewallId`: string, `networkingProjectFirewallTransfer`: [NetworkingProjectFirewallTransfer](../interfaces/_api_.networkingprojectfirewalltransfer.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Firewall](../interfaces/_api_.firewall.md)>>

*Defined in api.ts:44352*

action transfer

**`summary`** Transfer networking/firewall

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`networkingProjectFirewallTransfer` | [NetworkingProjectFirewallTransfer](../interfaces/_api_.networkingprojectfirewalltransfer.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Firewall](../interfaces/_api_.firewall.md)>>

___

### networkingProjectFirewallUpdate

▸ **networkingProjectFirewallUpdate**(`projectId`: string, `locationId`: string, `firewallId`: string, `networkingProjectFirewallUpdate`: [NetworkingProjectFirewallUpdate](../interfaces/_api_.networkingprojectfirewallupdate.md), `options?`: any): Promise\<AxiosResponse\<[Firewall](../interfaces/_api_.firewall.md)>>

*Defined in api.ts:44367*

Returns modified firewall

**`summary`** Update networking/firewall

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectFirewallApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`firewallId` | string | Firewall Id |
`networkingProjectFirewallUpdate` | [NetworkingProjectFirewallUpdate](../interfaces/_api_.networkingprojectfirewallupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Firewall](../interfaces/_api_.firewall.md)>>
