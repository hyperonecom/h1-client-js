**h1-client-ts**

> [README](../README.md) / [Globals](../globals.md) / ["base"](../modules/_base_.md) / BaseAPI

# Class: BaseAPI

**`export`** 

## Hierarchy

* **BaseAPI**

  ↳ [BillingProjectReservationApi](_api_.billingprojectreservationapi.md)

  ↳ [BillingProjectServiceApi](_api_.billingprojectserviceapi.md)

  ↳ [ComputeProjectReplicaApi](_api_.computeprojectreplicaapi.md)

  ↳ [ComputeProjectVmApi](_api_.computeprojectvmapi.md)

  ↳ [ContainerProjectRegistryApi](_api_.containerprojectregistryapi.md)

  ↳ [DatabaseProjectInstanceApi](_api_.databaseprojectinstanceapi.md)

  ↳ [DnsProjectZoneApi](_api_.dnsprojectzoneapi.md)

  ↳ [IamOrganisationApi](_api_.iamorganisationapi.md)

  ↳ [IamOrganisationPolicyApi](_api_.iamorganisationpolicyapi.md)

  ↳ [IamOrganisationRoleApi](_api_.iamorganisationroleapi.md)

  ↳ [IamProjectApi](_api_.iamprojectapi.md)

  ↳ [IamProjectPolicyApi](_api_.iamprojectpolicyapi.md)

  ↳ [IamProjectRoleApi](_api_.iamprojectroleapi.md)

  ↳ [IamProjectSaApi](_api_.iamprojectsaapi.md)

  ↳ [IamUserApi](_api_.iamuserapi.md)

  ↳ [InsightProjectJournalApi](_api_.insightprojectjournalapi.md)

  ↳ [NetworkingProjectFirewallApi](_api_.networkingprojectfirewallapi.md)

  ↳ [NetworkingProjectIpApi](_api_.networkingprojectipapi.md)

  ↳ [NetworkingProjectNetadpApi](_api_.networkingprojectnetadpapi.md)

  ↳ [NetworkingProjectNetgwApi](_api_.networkingprojectnetgwapi.md)

  ↳ [NetworkingProjectNetworkApi](_api_.networkingprojectnetworkapi.md)

  ↳ [ProviderProjectAgentApi](_api_.providerprojectagentapi.md)

  ↳ [RecoveryProjectBackupApi](_api_.recoveryprojectbackupapi.md)

  ↳ [StorageProjectBucketApi](_api_.storageprojectbucketapi.md)

  ↳ [StorageProjectDiskApi](_api_.storageprojectdiskapi.md)

  ↳ [StorageProjectImageApi](_api_.storageprojectimageapi.md)

  ↳ [StorageProjectIsoApi](_api_.storageprojectisoapi.md)

  ↳ [StorageProjectVaultApi](_api_.storageprojectvaultapi.md)

  ↳ [SupportProjectTicketApi](_api_.supportprojectticketapi.md)

  ↳ [VmhostProjectInstanceApi](_api_.vmhostprojectinstanceapi.md)

  ↳ [WebsiteProjectInstanceApi](_api_.websiteprojectinstanceapi.md)

## Index

### Constructors

* [constructor](_base_.baseapi.md#constructor)

### Properties

* [axios](_base_.baseapi.md#axios)
* [basePath](_base_.baseapi.md#basepath)
* [configuration](_base_.baseapi.md#configuration)

## Constructors

### constructor

\+ **new BaseAPI**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [BaseAPI](_base_.baseapi.md)

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [BaseAPI](_base_.baseapi.md)

## Properties

### axios

• `Protected` **axios**: AxiosInstance

*Defined in base.ts:51*

___

### basePath

• `Protected` **basePath**: string

*Defined in base.ts:51*

___

### configuration

• `Protected` **configuration**: [Configuration](_configuration_.configuration.md) \| undefined

*Defined in base.ts:49*
