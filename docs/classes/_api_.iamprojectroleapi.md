**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / IamProjectRoleApi

# Class: IamProjectRoleApi

IamProjectRoleApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **IamProjectRoleApi**

## Index

### Constructors

* [constructor](_api_.iamprojectroleapi.md#constructor)

### Properties

* [axios](_api_.iamprojectroleapi.md#axios)
* [basePath](_api_.iamprojectroleapi.md#basepath)
* [configuration](_api_.iamprojectroleapi.md#configuration)

### Methods

* [iamProjectRoleCreate](_api_.iamprojectroleapi.md#iamprojectrolecreate)
* [iamProjectRoleDelete](_api_.iamprojectroleapi.md#iamprojectroledelete)
* [iamProjectRoleEventGet](_api_.iamprojectroleapi.md#iamprojectroleeventget)
* [iamProjectRoleEventList](_api_.iamprojectroleapi.md#iamprojectroleeventlist)
* [iamProjectRoleGet](_api_.iamprojectroleapi.md#iamprojectroleget)
* [iamProjectRoleList](_api_.iamprojectroleapi.md#iamprojectrolelist)
* [iamProjectRolePermissionCreate](_api_.iamprojectroleapi.md#iamprojectrolepermissioncreate)
* [iamProjectRolePermissionDelete](_api_.iamprojectroleapi.md#iamprojectrolepermissiondelete)
* [iamProjectRolePermissionGet](_api_.iamprojectroleapi.md#iamprojectrolepermissionget)
* [iamProjectRolePermissionList](_api_.iamprojectroleapi.md#iamprojectrolepermissionlist)
* [iamProjectRolePermissionPut](_api_.iamprojectroleapi.md#iamprojectrolepermissionput)
* [iamProjectRoleServiceGet](_api_.iamprojectroleapi.md#iamprojectroleserviceget)
* [iamProjectRoleServiceList](_api_.iamprojectroleapi.md#iamprojectroleservicelist)
* [iamProjectRoleTagCreate](_api_.iamprojectroleapi.md#iamprojectroletagcreate)
* [iamProjectRoleTagDelete](_api_.iamprojectroleapi.md#iamprojectroletagdelete)
* [iamProjectRoleTagGet](_api_.iamprojectroleapi.md#iamprojectroletagget)
* [iamProjectRoleTagList](_api_.iamprojectroleapi.md#iamprojectroletaglist)
* [iamProjectRoleTagPut](_api_.iamprojectroleapi.md#iamprojectroletagput)
* [iamProjectRoleUpdate](_api_.iamprojectroleapi.md#iamprojectroleupdate)

## Constructors

### constructor

\+ **new IamProjectRoleApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [IamProjectRoleApi](_api_.iamprojectroleapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [IamProjectRoleApi](_api_.iamprojectroleapi.md)

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

### iamProjectRoleCreate

▸ **iamProjectRoleCreate**(`projectId`: string, `iamProjectRoleCreate`: [IamProjectRoleCreate](../interfaces/_api_.iamprojectrolecreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)>>

*Defined in api.ts:33574*

Create role

**`summary`** Create iam/role

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`iamProjectRoleCreate` | [IamProjectRoleCreate](../interfaces/_api_.iamprojectrolecreate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)>>

___

### iamProjectRoleDelete

▸ **iamProjectRoleDelete**(`projectId`: string, `roleId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:33587*

Delete role

**`summary`** Delete iam/role

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamProjectRoleEventGet

▸ **iamProjectRoleEventGet**(`projectId`: string, `roleId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:33601*

Get iam/role.event

**`summary`** Get iam/role.event

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### iamProjectRoleEventList

▸ **iamProjectRoleEventList**(`projectId`: string, `roleId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:33616*

List iam/role.event

**`summary`** List iam/role.event

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### iamProjectRoleGet

▸ **iamProjectRoleGet**(`projectId`: string, `roleId`: string, `options?`: any): Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)>>

*Defined in api.ts:33629*

Returns a single role

**`summary`** Get iam/role

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)>>

___

### iamProjectRoleList

▸ **iamProjectRoleList**(`projectId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)[]>>

*Defined in api.ts:33644*

List role

**`summary`** List iam/role

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)[]>>

___

### iamProjectRolePermissionCreate

▸ **iamProjectRolePermissionCreate**(`projectId`: string, `roleId`: string, `iamPermission`: [IamPermission](../interfaces/_api_.iampermission.md), `options?`: any): Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)>>

*Defined in api.ts:33658*

Create iam/role.permission

**`summary`** Create iam/role.permission

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`iamPermission` | [IamPermission](../interfaces/_api_.iampermission.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)>>

___

### iamProjectRolePermissionDelete

▸ **iamProjectRolePermissionDelete**(`projectId`: string, `roleId`: string, `permissionId`: string, `options?`: any): Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)>>

*Defined in api.ts:33672*

Delete iam/role.permission

**`summary`** Delete iam/role.permission

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`permissionId` | string | permissionId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)>>

___

### iamProjectRolePermissionGet

▸ **iamProjectRolePermissionGet**(`projectId`: string, `roleId`: string, `permissionId`: string, `options?`: any): Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)>>

*Defined in api.ts:33686*

Get iam/role.permission

**`summary`** Get iam/role.permission

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`permissionId` | string | permissionId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)>>

___

### iamProjectRolePermissionList

▸ **iamProjectRolePermissionList**(`projectId`: string, `roleId`: string, `options?`: any): Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)[]>>

*Defined in api.ts:33699*

List iam/role.permission

**`summary`** List iam/role.permission

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)[]>>

___

### iamProjectRolePermissionPut

▸ **iamProjectRolePermissionPut**(`projectId`: string, `roleId`: string, `iamPermission`: Array\<[IamPermission](../interfaces/_api_.iampermission.md)>, `options?`: any): Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)[]>>

*Defined in api.ts:33713*

Replace iam/role.permission

**`summary`** Replace iam/role.permission

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`iamPermission` | Array\<[IamPermission](../interfaces/_api_.iampermission.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamPermission](../interfaces/_api_.iampermission.md)[]>>

___

### iamProjectRoleServiceGet

▸ **iamProjectRoleServiceGet**(`projectId`: string, `roleId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:33727*

Get iam/role.service

**`summary`** Get iam/role.service

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### iamProjectRoleServiceList

▸ **iamProjectRoleServiceList**(`projectId`: string, `roleId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:33740*

List iam/role.service

**`summary`** List iam/role.service

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### iamProjectRoleTagCreate

▸ **iamProjectRoleTagCreate**(`projectId`: string, `roleId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:33754*

Create iam/role.tag

**`summary`** Create iam/role.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### iamProjectRoleTagDelete

▸ **iamProjectRoleTagDelete**(`projectId`: string, `roleId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:33768*

Delete iam/role.tag

**`summary`** Delete iam/role.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamProjectRoleTagGet

▸ **iamProjectRoleTagGet**(`projectId`: string, `roleId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:33782*

Get iam/role.tag

**`summary`** Get iam/role.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### iamProjectRoleTagList

▸ **iamProjectRoleTagList**(`projectId`: string, `roleId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:33795*

List iam/role.tag

**`summary`** List iam/role.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### iamProjectRoleTagPut

▸ **iamProjectRoleTagPut**(`projectId`: string, `roleId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:33809*

Replace iam/role.tag

**`summary`** Replace iam/role.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### iamProjectRoleUpdate

▸ **iamProjectRoleUpdate**(`projectId`: string, `roleId`: string, `iamProjectRoleUpdate`: [IamProjectRoleUpdate](../interfaces/_api_.iamprojectroleupdate.md), `options?`: any): Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)>>

*Defined in api.ts:33823*

Returns modified role

**`summary`** Update iam/role

**`throws`** {RequiredError}

**`memberof`** IamProjectRoleApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`roleId` | string | Role Id |
`iamProjectRoleUpdate` | [IamProjectRoleUpdate](../interfaces/_api_.iamprojectroleupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Role](../interfaces/_api_.role.md)>>
