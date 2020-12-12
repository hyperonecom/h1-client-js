**h1-client-ts**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / IamOrganisationRoleApi

# Class: IamOrganisationRoleApi

IamOrganisationRoleApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **IamOrganisationRoleApi**

## Index

### Constructors

* [constructor](_api_.iamorganisationroleapi.md#constructor)

### Properties

* [axios](_api_.iamorganisationroleapi.md#axios)
* [basePath](_api_.iamorganisationroleapi.md#basepath)
* [configuration](_api_.iamorganisationroleapi.md#configuration)

### Methods

* [iamOrganisationRoleCreate](_api_.iamorganisationroleapi.md#iamorganisationrolecreate)
* [iamOrganisationRoleDelete](_api_.iamorganisationroleapi.md#iamorganisationroledelete)
* [iamOrganisationRoleEventGet](_api_.iamorganisationroleapi.md#iamorganisationroleeventget)
* [iamOrganisationRoleEventList](_api_.iamorganisationroleapi.md#iamorganisationroleeventlist)
* [iamOrganisationRoleGet](_api_.iamorganisationroleapi.md#iamorganisationroleget)
* [iamOrganisationRoleList](_api_.iamorganisationroleapi.md#iamorganisationrolelist)
* [iamOrganisationRolePermissionCreate](_api_.iamorganisationroleapi.md#iamorganisationrolepermissioncreate)
* [iamOrganisationRolePermissionDelete](_api_.iamorganisationroleapi.md#iamorganisationrolepermissiondelete)
* [iamOrganisationRolePermissionGet](_api_.iamorganisationroleapi.md#iamorganisationrolepermissionget)
* [iamOrganisationRolePermissionList](_api_.iamorganisationroleapi.md#iamorganisationrolepermissionlist)
* [iamOrganisationRolePermissionPut](_api_.iamorganisationroleapi.md#iamorganisationrolepermissionput)
* [iamOrganisationRoleServiceGet](_api_.iamorganisationroleapi.md#iamorganisationroleserviceget)
* [iamOrganisationRoleServiceList](_api_.iamorganisationroleapi.md#iamorganisationroleservicelist)
* [iamOrganisationRoleTagCreate](_api_.iamorganisationroleapi.md#iamorganisationroletagcreate)
* [iamOrganisationRoleTagDelete](_api_.iamorganisationroleapi.md#iamorganisationroletagdelete)
* [iamOrganisationRoleTagGet](_api_.iamorganisationroleapi.md#iamorganisationroletagget)
* [iamOrganisationRoleTagList](_api_.iamorganisationroleapi.md#iamorganisationroletaglist)
* [iamOrganisationRoleTagPut](_api_.iamorganisationroleapi.md#iamorganisationroletagput)
* [iamOrganisationRoleUpdate](_api_.iamorganisationroleapi.md#iamorganisationroleupdate)

## Constructors

### constructor

\+ **new IamOrganisationRoleApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [IamOrganisationRoleApi](_api_.iamorganisationroleapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [IamOrganisationRoleApi](_api_.iamorganisationroleapi.md)

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

### iamOrganisationRoleCreate

▸ **iamOrganisationRoleCreate**(`organisationId`: string, `iamProjectRoleCreate`: [IamProjectRoleCreate](../interfaces/_api_.iamprojectrolecreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)>>

*Defined in api.ts:29721*

Create role

**`summary`** Create iam/role

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`iamProjectRoleCreate` | [IamProjectRoleCreate](../interfaces/_api_.iamprojectrolecreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)>>

___

### iamOrganisationRoleDelete

▸ **iamOrganisationRoleDelete**(`organisationId`: string, `roleId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:29734*

Delete role

**`summary`** Delete iam/role

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamOrganisationRoleEventGet

▸ **iamOrganisationRoleEventGet**(`organisationId`: string, `roleId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:29748*

Get iam/role.event

**`summary`** Get iam/role.event

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### iamOrganisationRoleEventList

▸ **iamOrganisationRoleEventList**(`organisationId`: string, `roleId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:29763*

List iam/role.event

**`summary`** List iam/role.event

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### iamOrganisationRoleGet

▸ **iamOrganisationRoleGet**(`organisationId`: string, `roleId`: string, `options?`: any): Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)>>

*Defined in api.ts:29776*

Returns a single role

**`summary`** Get iam/role

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)>>

___

### iamOrganisationRoleList

▸ **iamOrganisationRoleList**(`organisationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)[]>>

*Defined in api.ts:29791*

List role

**`summary`** List iam/role

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)[]>>

___

### iamOrganisationRolePermissionCreate

▸ **iamOrganisationRolePermissionCreate**(`organisationId`: string, `roleId`: string, `iamPermission`: [IamPermission](../interfaces/_api_.iampermission.md), `options?`: any): Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)>>

*Defined in api.ts:29805*

Create iam/role.permission

**`summary`** Create iam/role.permission

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`iamPermission` | [IamPermission](../interfaces/_api_.iampermission.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)>>

___

### iamOrganisationRolePermissionDelete

▸ **iamOrganisationRolePermissionDelete**(`organisationId`: string, `roleId`: string, `permissionId`: string, `options?`: any): Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)>>

*Defined in api.ts:29819*

Delete iam/role.permission

**`summary`** Delete iam/role.permission

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`permissionId` | string | permissionId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)>>

___

### iamOrganisationRolePermissionGet

▸ **iamOrganisationRolePermissionGet**(`organisationId`: string, `roleId`: string, `permissionId`: string, `options?`: any): Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)>>

*Defined in api.ts:29833*

Get iam/role.permission

**`summary`** Get iam/role.permission

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`permissionId` | string | permissionId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)>>

___

### iamOrganisationRolePermissionList

▸ **iamOrganisationRolePermissionList**(`organisationId`: string, `roleId`: string, `options?`: any): Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)[]>>

*Defined in api.ts:29846*

List iam/role.permission

**`summary`** List iam/role.permission

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)[]>>

___

### iamOrganisationRolePermissionPut

▸ **iamOrganisationRolePermissionPut**(`organisationId`: string, `roleId`: string, `iamPermission`: Array\<[IamPermission](../interfaces/_api_.iampermission.md)>, `options?`: any): Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)[]>>

*Defined in api.ts:29860*

Replace iam/role.permission

**`summary`** Replace iam/role.permission

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`iamPermission` | Array\<[IamPermission](../interfaces/_api_.iampermission.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)[]>>

___

### iamOrganisationRoleServiceGet

▸ **iamOrganisationRoleServiceGet**(`organisationId`: string, `roleId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:29874*

Get iam/role.service

**`summary`** Get iam/role.service

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### iamOrganisationRoleServiceList

▸ **iamOrganisationRoleServiceList**(`organisationId`: string, `roleId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:29887*

List iam/role.service

**`summary`** List iam/role.service

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### iamOrganisationRoleTagCreate

▸ **iamOrganisationRoleTagCreate**(`organisationId`: string, `roleId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:29901*

Create iam/role.tag

**`summary`** Create iam/role.tag

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### iamOrganisationRoleTagDelete

▸ **iamOrganisationRoleTagDelete**(`organisationId`: string, `roleId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:29915*

Delete iam/role.tag

**`summary`** Delete iam/role.tag

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamOrganisationRoleTagGet

▸ **iamOrganisationRoleTagGet**(`organisationId`: string, `roleId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:29929*

Get iam/role.tag

**`summary`** Get iam/role.tag

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### iamOrganisationRoleTagList

▸ **iamOrganisationRoleTagList**(`organisationId`: string, `roleId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:29942*

List iam/role.tag

**`summary`** List iam/role.tag

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### iamOrganisationRoleTagPut

▸ **iamOrganisationRoleTagPut**(`organisationId`: string, `roleId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:29956*

Replace iam/role.tag

**`summary`** Replace iam/role.tag

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### iamOrganisationRoleUpdate

▸ **iamOrganisationRoleUpdate**(`organisationId`: string, `roleId`: string, `iamProjectRoleUpdate`: [IamProjectRoleUpdate](../interfaces/_api_.iamprojectroleupdate.md), `options?`: any): Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)>>

*Defined in api.ts:29970*

Returns modified role

**`summary`** Update iam/role

**`throws`** {RequiredError}

**`memberof`** IamOrganisationRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`roleId` | string | Role Id |
`iamProjectRoleUpdate` | [IamProjectRoleUpdate](../interfaces/_api_.iamprojectroleupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)>>
