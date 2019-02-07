/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Container from './model/Container';
import ContainerCreate from './model/ContainerCreate';
import ContainerCreateExpose from './model/ContainerCreateExpose';
import ContainerCreateRegistry from './model/ContainerCreateRegistry';
import ContainerCreateVolumes from './model/ContainerCreateVolumes';
import ContainerPostAccessrights from './model/ContainerPostAccessrights';
import ContainerServices from './model/ContainerServices';
import ContainerUpdate from './model/ContainerUpdate';
import CredentialCertificate from './model/CredentialCertificate';
import CredentialPassword from './model/CredentialPassword';
import Disk from './model/Disk';
import DiskActionResize from './model/DiskActionResize';
import DiskActionTransfer from './model/DiskActionTransfer';
import DiskCreate from './model/DiskCreate';
import DiskMetadata from './model/DiskMetadata';
import DiskMetadataSource from './model/DiskMetadataSource';
import DiskPostAccessrights from './model/DiskPostAccessrights';
import DiskServices from './model/DiskServices';
import DiskUpdate from './model/DiskUpdate';
import Event from './model/Event';
import EventResource from './model/EventResource';
import Firewall from './model/Firewall';
import FirewallActionAttach from './model/FirewallActionAttach';
import FirewallActionTransfer from './model/FirewallActionTransfer';
import FirewallCreate from './model/FirewallCreate';
import FirewallPostAccessrights from './model/FirewallPostAccessrights';
import FirewallPostEgress from './model/FirewallPostEgress';
import FirewallPostIngress from './model/FirewallPostIngress';
import FirewallServices from './model/FirewallServices';
import FirewallUpdate from './model/FirewallUpdate';
import Hdd from './model/Hdd';
import HddDisk from './model/HddDisk';
import Image from './model/Image';
import ImageActionTransfer from './model/ImageActionTransfer';
import ImageAttachedOn from './model/ImageAttachedOn';
import ImageCreate from './model/ImageCreate';
import ImageDisk from './model/ImageDisk';
import ImageDisks from './model/ImageDisks';
import ImagePostAccessrights from './model/ImagePostAccessrights';
import ImageServices from './model/ImageServices';
import ImageUpdate from './model/ImageUpdate';
import ImageVm from './model/ImageVm';
import InlineResponse200 from './model/InlineResponse200';
import Ip from './model/Ip';
import IpActionAllocate from './model/IpActionAllocate';
import IpActionAssociate from './model/IpActionAssociate';
import IpActionTransfer from './model/IpActionTransfer';
import IpAssociated from './model/IpAssociated';
import IpCreate from './model/IpCreate';
import IpPostAccessrights from './model/IpPostAccessrights';
import IpServices from './model/IpServices';
import IpUpdate from './model/IpUpdate';
import Iso from './model/Iso';
import IsoActionTransfer from './model/IsoActionTransfer';
import IsoCreate from './model/IsoCreate';
import IsoPostAccessrights from './model/IsoPostAccessrights';
import IsoServices from './model/IsoServices';
import IsoUpdate from './model/IsoUpdate';
import LogArchive from './model/LogArchive';
import LogArchiveActionTransfer from './model/LogArchiveActionTransfer';
import LogArchiveCreate from './model/LogArchiveCreate';
import LogArchivePatchCredentialcertificateId from './model/LogArchivePatchCredentialcertificateId';
import LogArchivePatchCredentialpasswordId from './model/LogArchivePatchCredentialpasswordId';
import LogArchivePostAccessrights from './model/LogArchivePostAccessrights';
import LogArchivePostCredentialcertificate from './model/LogArchivePostCredentialcertificate';
import LogArchivePostCredentialpassword from './model/LogArchivePostCredentialpassword';
import LogArchiveServices from './model/LogArchiveServices';
import LogArchiveUpdate from './model/LogArchiveUpdate';
import Netadp from './model/Netadp';
import NetadpAssigned from './model/NetadpAssigned';
import NetadpPostAccessrights from './model/NetadpPostAccessrights';
import NetadpServices from './model/NetadpServices';
import Netgw from './model/Netgw';
import NetgwActionAttach from './model/NetgwActionAttach';
import NetgwActionAttachPrivate from './model/NetgwActionAttachPrivate';
import NetgwCreate from './model/NetgwCreate';
import NetgwCreatePublic from './model/NetgwCreatePublic';
import NetgwPostAccessrights from './model/NetgwPostAccessrights';
import NetgwServices from './model/NetgwServices';
import NetgwUpdate from './model/NetgwUpdate';
import Network from './model/Network';
import NetworkCreate from './model/NetworkCreate';
import NetworkDns from './model/NetworkDns';
import NetworkPostAccessrights from './model/NetworkPostAccessrights';
import NetworkPostIp from './model/NetworkPostIp';
import NetworkServices from './model/NetworkServices';
import NetworkUpdate from './model/NetworkUpdate';
import Organisation from './model/Organisation';
import OrganisationAccessRights from './model/OrganisationAccessRights';
import OrganisationActionTransferAccept from './model/OrganisationActionTransferAccept';
import OrganisationBilling from './model/OrganisationBilling';
import OrganisationBillingAddress from './model/OrganisationBillingAddress';
import OrganisationCreate from './model/OrganisationCreate';
import OrganisationCreateAccessRights from './model/OrganisationCreateAccessRights';
import OrganisationCreateBilling from './model/OrganisationCreateBilling';
import OrganisationCreateBillingAddress from './model/OrganisationCreateBillingAddress';
import OrganisationLimit from './model/OrganisationLimit';
import OrganisationLimitOrganisation from './model/OrganisationLimitOrganisation';
import OrganisationPostAccessrights from './model/OrganisationPostAccessrights';
import OrganisationTransfer from './model/OrganisationTransfer';
import OrganisationUpdate from './model/OrganisationUpdate';
import OrganisationUpdateBilling from './model/OrganisationUpdateBilling';
import OrganisationUpdateBillingAddress from './model/OrganisationUpdateBillingAddress';
import Payment from './model/Payment';
import Project from './model/Project';
import ProjectAccess from './model/ProjectAccess';
import ProjectAccessRights from './model/ProjectAccessRights';
import ProjectBilling from './model/ProjectBilling';
import ProjectCompliance from './model/ProjectCompliance';
import ProjectCreate from './model/ProjectCreate';
import ProjectCreateAccessRights from './model/ProjectCreateAccessRights';
import ProjectInvoices from './model/ProjectInvoices';
import ProjectInvoicesDuplicate from './model/ProjectInvoicesDuplicate';
import ProjectLimit from './model/ProjectLimit';
import ProjectLimitDisk from './model/ProjectLimitDisk';
import ProjectLimitDomain from './model/ProjectLimitDomain';
import ProjectLimitIso from './model/ProjectLimitIso';
import ProjectLimitVm from './model/ProjectLimitVm';
import ProjectNetworkAcl from './model/ProjectNetworkAcl';
import ProjectPostAccessrights from './model/ProjectPostAccessrights';
import ProjectRoles from './model/ProjectRoles';
import ProjectServices from './model/ProjectServices';
import ProjectThreshold from './model/ProjectThreshold';
import ProjectThresholdCredits from './model/ProjectThresholdCredits';
import ProjectTransfer from './model/ProjectTransfer';
import ProjectUpdate from './model/ProjectUpdate';
import Replica from './model/Replica';
import ReplicaActionImage from './model/ReplicaActionImage';
import ReplicaCreate from './model/ReplicaCreate';
import ReplicaPostAccessrights from './model/ReplicaPostAccessrights';
import ReplicaServices from './model/ReplicaServices';
import Reservation from './model/Reservation';
import ReservationActionAssign from './model/ReservationActionAssign';
import ReservationCreate from './model/ReservationCreate';
import ReservationPostAccessrights from './model/ReservationPostAccessrights';
import ReservationServices from './model/ReservationServices';
import ReservationUpdate from './model/ReservationUpdate';
import Snapshot from './model/Snapshot';
import SnapshotCreate from './model/SnapshotCreate';
import SnapshotPostAccessrights from './model/SnapshotPostAccessrights';
import SnapshotServices from './model/SnapshotServices';
import SnapshotUpdate from './model/SnapshotUpdate';
import Vault from './model/Vault';
import VaultActionResize from './model/VaultActionResize';
import VaultActionSnapshot from './model/VaultActionSnapshot';
import VaultCreate from './model/VaultCreate';
import VaultCreateCredential from './model/VaultCreateCredential';
import VaultCreateCredentialCertificate from './model/VaultCreateCredentialCertificate';
import VaultCreateCredentialPassword from './model/VaultCreateCredentialPassword';
import VaultDelete from './model/VaultDelete';
import VaultPatchCredentialcertificateId from './model/VaultPatchCredentialcertificateId';
import VaultPatchCredentialpasswordId from './model/VaultPatchCredentialpasswordId';
import VaultPostAccessrights from './model/VaultPostAccessrights';
import VaultPostCredentialcertificate from './model/VaultPostCredentialcertificate';
import VaultPostCredentialpassword from './model/VaultPostCredentialpassword';
import VaultServices from './model/VaultServices';
import VaultUpdate from './model/VaultUpdate';
import Vm from './model/Vm';
import VmActionFlavour from './model/VmActionFlavour';
import VmActionImage from './model/VmActionImage';
import VmActionPasswordReset from './model/VmActionPasswordReset';
import VmActionRename from './model/VmActionRename';
import VmCreate from './model/VmCreate';
import VmCreateDisk from './model/VmCreateDisk';
import VmCreateNetadp from './model/VmCreateNetadp';
import VmCreatePassword from './model/VmCreatePassword';
import VmData from './model/VmData';
import VmDelete from './model/VmDelete';
import VmPostAccessrights from './model/VmPostAccessrights';
import VmPostHdd from './model/VmPostHdd';
import VmPostNetadp from './model/VmPostNetadp';
import VmServices from './model/VmServices';
import VmSourceImage from './model/VmSourceImage';
import VmUpdate from './model/VmUpdate';
import Vmhost from './model/Vmhost';
import VmhostActionMoveDisk from './model/VmhostActionMoveDisk';
import VmhostActionMoveISO from './model/VmhostActionMoveISO';
import VmhostActionMoveImage from './model/VmhostActionMoveImage';
import VmhostActionMoveVM from './model/VmhostActionMoveVM';
import VmhostPostAccessrights from './model/VmhostPostAccessrights';
import VmhostServices from './model/VmhostServices';
import VmhostUpdate from './model/VmhostUpdate';
import ContainerApi from './api/ContainerApi';
import DiskApi from './api/DiskApi';
import FirewallApi from './api/FirewallApi';
import ImageApi from './api/ImageApi';
import IpApi from './api/IpApi';
import IsoApi from './api/IsoApi';
import LogArchiveApi from './api/LogArchiveApi';
import NetadpApi from './api/NetadpApi';
import NetgwApi from './api/NetgwApi';
import NetworkApi from './api/NetworkApi';
import OrganisationApi from './api/OrganisationApi';
import ProjectApi from './api/ProjectApi';
import ReplicaApi from './api/ReplicaApi';
import ReservationApi from './api/ReservationApi';
import SnapshotApi from './api/SnapshotApi';
import VaultApi from './api/VaultApi';
import VmApi from './api/VmApi';
import VmhostApi from './api/VmhostApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var HyperOneApi = require('index'); // See note below*.
* var xxxSvc = new HyperOneApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new HyperOneApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new HyperOneApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new HyperOneApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.2
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Container model constructor.
     * @property {module:model/Container}
     */
    Container,

    /**
     * The ContainerCreate model constructor.
     * @property {module:model/ContainerCreate}
     */
    ContainerCreate,

    /**
     * The ContainerCreateExpose model constructor.
     * @property {module:model/ContainerCreateExpose}
     */
    ContainerCreateExpose,

    /**
     * The ContainerCreateRegistry model constructor.
     * @property {module:model/ContainerCreateRegistry}
     */
    ContainerCreateRegistry,

    /**
     * The ContainerCreateVolumes model constructor.
     * @property {module:model/ContainerCreateVolumes}
     */
    ContainerCreateVolumes,

    /**
     * The ContainerPostAccessrights model constructor.
     * @property {module:model/ContainerPostAccessrights}
     */
    ContainerPostAccessrights,

    /**
     * The ContainerServices model constructor.
     * @property {module:model/ContainerServices}
     */
    ContainerServices,

    /**
     * The ContainerUpdate model constructor.
     * @property {module:model/ContainerUpdate}
     */
    ContainerUpdate,

    /**
     * The CredentialCertificate model constructor.
     * @property {module:model/CredentialCertificate}
     */
    CredentialCertificate,

    /**
     * The CredentialPassword model constructor.
     * @property {module:model/CredentialPassword}
     */
    CredentialPassword,

    /**
     * The Disk model constructor.
     * @property {module:model/Disk}
     */
    Disk,

    /**
     * The DiskActionResize model constructor.
     * @property {module:model/DiskActionResize}
     */
    DiskActionResize,

    /**
     * The DiskActionTransfer model constructor.
     * @property {module:model/DiskActionTransfer}
     */
    DiskActionTransfer,

    /**
     * The DiskCreate model constructor.
     * @property {module:model/DiskCreate}
     */
    DiskCreate,

    /**
     * The DiskMetadata model constructor.
     * @property {module:model/DiskMetadata}
     */
    DiskMetadata,

    /**
     * The DiskMetadataSource model constructor.
     * @property {module:model/DiskMetadataSource}
     */
    DiskMetadataSource,

    /**
     * The DiskPostAccessrights model constructor.
     * @property {module:model/DiskPostAccessrights}
     */
    DiskPostAccessrights,

    /**
     * The DiskServices model constructor.
     * @property {module:model/DiskServices}
     */
    DiskServices,

    /**
     * The DiskUpdate model constructor.
     * @property {module:model/DiskUpdate}
     */
    DiskUpdate,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The EventResource model constructor.
     * @property {module:model/EventResource}
     */
    EventResource,

    /**
     * The Firewall model constructor.
     * @property {module:model/Firewall}
     */
    Firewall,

    /**
     * The FirewallActionAttach model constructor.
     * @property {module:model/FirewallActionAttach}
     */
    FirewallActionAttach,

    /**
     * The FirewallActionTransfer model constructor.
     * @property {module:model/FirewallActionTransfer}
     */
    FirewallActionTransfer,

    /**
     * The FirewallCreate model constructor.
     * @property {module:model/FirewallCreate}
     */
    FirewallCreate,

    /**
     * The FirewallPostAccessrights model constructor.
     * @property {module:model/FirewallPostAccessrights}
     */
    FirewallPostAccessrights,

    /**
     * The FirewallPostEgress model constructor.
     * @property {module:model/FirewallPostEgress}
     */
    FirewallPostEgress,

    /**
     * The FirewallPostIngress model constructor.
     * @property {module:model/FirewallPostIngress}
     */
    FirewallPostIngress,

    /**
     * The FirewallServices model constructor.
     * @property {module:model/FirewallServices}
     */
    FirewallServices,

    /**
     * The FirewallUpdate model constructor.
     * @property {module:model/FirewallUpdate}
     */
    FirewallUpdate,

    /**
     * The Hdd model constructor.
     * @property {module:model/Hdd}
     */
    Hdd,

    /**
     * The HddDisk model constructor.
     * @property {module:model/HddDisk}
     */
    HddDisk,

    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image,

    /**
     * The ImageActionTransfer model constructor.
     * @property {module:model/ImageActionTransfer}
     */
    ImageActionTransfer,

    /**
     * The ImageAttachedOn model constructor.
     * @property {module:model/ImageAttachedOn}
     */
    ImageAttachedOn,

    /**
     * The ImageCreate model constructor.
     * @property {module:model/ImageCreate}
     */
    ImageCreate,

    /**
     * The ImageDisk model constructor.
     * @property {module:model/ImageDisk}
     */
    ImageDisk,

    /**
     * The ImageDisks model constructor.
     * @property {module:model/ImageDisks}
     */
    ImageDisks,

    /**
     * The ImagePostAccessrights model constructor.
     * @property {module:model/ImagePostAccessrights}
     */
    ImagePostAccessrights,

    /**
     * The ImageServices model constructor.
     * @property {module:model/ImageServices}
     */
    ImageServices,

    /**
     * The ImageUpdate model constructor.
     * @property {module:model/ImageUpdate}
     */
    ImageUpdate,

    /**
     * The ImageVm model constructor.
     * @property {module:model/ImageVm}
     */
    ImageVm,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The Ip model constructor.
     * @property {module:model/Ip}
     */
    Ip,

    /**
     * The IpActionAllocate model constructor.
     * @property {module:model/IpActionAllocate}
     */
    IpActionAllocate,

    /**
     * The IpActionAssociate model constructor.
     * @property {module:model/IpActionAssociate}
     */
    IpActionAssociate,

    /**
     * The IpActionTransfer model constructor.
     * @property {module:model/IpActionTransfer}
     */
    IpActionTransfer,

    /**
     * The IpAssociated model constructor.
     * @property {module:model/IpAssociated}
     */
    IpAssociated,

    /**
     * The IpCreate model constructor.
     * @property {module:model/IpCreate}
     */
    IpCreate,

    /**
     * The IpPostAccessrights model constructor.
     * @property {module:model/IpPostAccessrights}
     */
    IpPostAccessrights,

    /**
     * The IpServices model constructor.
     * @property {module:model/IpServices}
     */
    IpServices,

    /**
     * The IpUpdate model constructor.
     * @property {module:model/IpUpdate}
     */
    IpUpdate,

    /**
     * The Iso model constructor.
     * @property {module:model/Iso}
     */
    Iso,

    /**
     * The IsoActionTransfer model constructor.
     * @property {module:model/IsoActionTransfer}
     */
    IsoActionTransfer,

    /**
     * The IsoCreate model constructor.
     * @property {module:model/IsoCreate}
     */
    IsoCreate,

    /**
     * The IsoPostAccessrights model constructor.
     * @property {module:model/IsoPostAccessrights}
     */
    IsoPostAccessrights,

    /**
     * The IsoServices model constructor.
     * @property {module:model/IsoServices}
     */
    IsoServices,

    /**
     * The IsoUpdate model constructor.
     * @property {module:model/IsoUpdate}
     */
    IsoUpdate,

    /**
     * The LogArchive model constructor.
     * @property {module:model/LogArchive}
     */
    LogArchive,

    /**
     * The LogArchiveActionTransfer model constructor.
     * @property {module:model/LogArchiveActionTransfer}
     */
    LogArchiveActionTransfer,

    /**
     * The LogArchiveCreate model constructor.
     * @property {module:model/LogArchiveCreate}
     */
    LogArchiveCreate,

    /**
     * The LogArchivePatchCredentialcertificateId model constructor.
     * @property {module:model/LogArchivePatchCredentialcertificateId}
     */
    LogArchivePatchCredentialcertificateId,

    /**
     * The LogArchivePatchCredentialpasswordId model constructor.
     * @property {module:model/LogArchivePatchCredentialpasswordId}
     */
    LogArchivePatchCredentialpasswordId,

    /**
     * The LogArchivePostAccessrights model constructor.
     * @property {module:model/LogArchivePostAccessrights}
     */
    LogArchivePostAccessrights,

    /**
     * The LogArchivePostCredentialcertificate model constructor.
     * @property {module:model/LogArchivePostCredentialcertificate}
     */
    LogArchivePostCredentialcertificate,

    /**
     * The LogArchivePostCredentialpassword model constructor.
     * @property {module:model/LogArchivePostCredentialpassword}
     */
    LogArchivePostCredentialpassword,

    /**
     * The LogArchiveServices model constructor.
     * @property {module:model/LogArchiveServices}
     */
    LogArchiveServices,

    /**
     * The LogArchiveUpdate model constructor.
     * @property {module:model/LogArchiveUpdate}
     */
    LogArchiveUpdate,

    /**
     * The Netadp model constructor.
     * @property {module:model/Netadp}
     */
    Netadp,

    /**
     * The NetadpAssigned model constructor.
     * @property {module:model/NetadpAssigned}
     */
    NetadpAssigned,

    /**
     * The NetadpPostAccessrights model constructor.
     * @property {module:model/NetadpPostAccessrights}
     */
    NetadpPostAccessrights,

    /**
     * The NetadpServices model constructor.
     * @property {module:model/NetadpServices}
     */
    NetadpServices,

    /**
     * The Netgw model constructor.
     * @property {module:model/Netgw}
     */
    Netgw,

    /**
     * The NetgwActionAttach model constructor.
     * @property {module:model/NetgwActionAttach}
     */
    NetgwActionAttach,

    /**
     * The NetgwActionAttachPrivate model constructor.
     * @property {module:model/NetgwActionAttachPrivate}
     */
    NetgwActionAttachPrivate,

    /**
     * The NetgwCreate model constructor.
     * @property {module:model/NetgwCreate}
     */
    NetgwCreate,

    /**
     * The NetgwCreatePublic model constructor.
     * @property {module:model/NetgwCreatePublic}
     */
    NetgwCreatePublic,

    /**
     * The NetgwPostAccessrights model constructor.
     * @property {module:model/NetgwPostAccessrights}
     */
    NetgwPostAccessrights,

    /**
     * The NetgwServices model constructor.
     * @property {module:model/NetgwServices}
     */
    NetgwServices,

    /**
     * The NetgwUpdate model constructor.
     * @property {module:model/NetgwUpdate}
     */
    NetgwUpdate,

    /**
     * The Network model constructor.
     * @property {module:model/Network}
     */
    Network,

    /**
     * The NetworkCreate model constructor.
     * @property {module:model/NetworkCreate}
     */
    NetworkCreate,

    /**
     * The NetworkDns model constructor.
     * @property {module:model/NetworkDns}
     */
    NetworkDns,

    /**
     * The NetworkPostAccessrights model constructor.
     * @property {module:model/NetworkPostAccessrights}
     */
    NetworkPostAccessrights,

    /**
     * The NetworkPostIp model constructor.
     * @property {module:model/NetworkPostIp}
     */
    NetworkPostIp,

    /**
     * The NetworkServices model constructor.
     * @property {module:model/NetworkServices}
     */
    NetworkServices,

    /**
     * The NetworkUpdate model constructor.
     * @property {module:model/NetworkUpdate}
     */
    NetworkUpdate,

    /**
     * The Organisation model constructor.
     * @property {module:model/Organisation}
     */
    Organisation,

    /**
     * The OrganisationAccessRights model constructor.
     * @property {module:model/OrganisationAccessRights}
     */
    OrganisationAccessRights,

    /**
     * The OrganisationActionTransferAccept model constructor.
     * @property {module:model/OrganisationActionTransferAccept}
     */
    OrganisationActionTransferAccept,

    /**
     * The OrganisationBilling model constructor.
     * @property {module:model/OrganisationBilling}
     */
    OrganisationBilling,

    /**
     * The OrganisationBillingAddress model constructor.
     * @property {module:model/OrganisationBillingAddress}
     */
    OrganisationBillingAddress,

    /**
     * The OrganisationCreate model constructor.
     * @property {module:model/OrganisationCreate}
     */
    OrganisationCreate,

    /**
     * The OrganisationCreateAccessRights model constructor.
     * @property {module:model/OrganisationCreateAccessRights}
     */
    OrganisationCreateAccessRights,

    /**
     * The OrganisationCreateBilling model constructor.
     * @property {module:model/OrganisationCreateBilling}
     */
    OrganisationCreateBilling,

    /**
     * The OrganisationCreateBillingAddress model constructor.
     * @property {module:model/OrganisationCreateBillingAddress}
     */
    OrganisationCreateBillingAddress,

    /**
     * The OrganisationLimit model constructor.
     * @property {module:model/OrganisationLimit}
     */
    OrganisationLimit,

    /**
     * The OrganisationLimitOrganisation model constructor.
     * @property {module:model/OrganisationLimitOrganisation}
     */
    OrganisationLimitOrganisation,

    /**
     * The OrganisationPostAccessrights model constructor.
     * @property {module:model/OrganisationPostAccessrights}
     */
    OrganisationPostAccessrights,

    /**
     * The OrganisationTransfer model constructor.
     * @property {module:model/OrganisationTransfer}
     */
    OrganisationTransfer,

    /**
     * The OrganisationUpdate model constructor.
     * @property {module:model/OrganisationUpdate}
     */
    OrganisationUpdate,

    /**
     * The OrganisationUpdateBilling model constructor.
     * @property {module:model/OrganisationUpdateBilling}
     */
    OrganisationUpdateBilling,

    /**
     * The OrganisationUpdateBillingAddress model constructor.
     * @property {module:model/OrganisationUpdateBillingAddress}
     */
    OrganisationUpdateBillingAddress,

    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment,

    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project,

    /**
     * The ProjectAccess model constructor.
     * @property {module:model/ProjectAccess}
     */
    ProjectAccess,

    /**
     * The ProjectAccessRights model constructor.
     * @property {module:model/ProjectAccessRights}
     */
    ProjectAccessRights,

    /**
     * The ProjectBilling model constructor.
     * @property {module:model/ProjectBilling}
     */
    ProjectBilling,

    /**
     * The ProjectCompliance model constructor.
     * @property {module:model/ProjectCompliance}
     */
    ProjectCompliance,

    /**
     * The ProjectCreate model constructor.
     * @property {module:model/ProjectCreate}
     */
    ProjectCreate,

    /**
     * The ProjectCreateAccessRights model constructor.
     * @property {module:model/ProjectCreateAccessRights}
     */
    ProjectCreateAccessRights,

    /**
     * The ProjectInvoices model constructor.
     * @property {module:model/ProjectInvoices}
     */
    ProjectInvoices,

    /**
     * The ProjectInvoicesDuplicate model constructor.
     * @property {module:model/ProjectInvoicesDuplicate}
     */
    ProjectInvoicesDuplicate,

    /**
     * The ProjectLimit model constructor.
     * @property {module:model/ProjectLimit}
     */
    ProjectLimit,

    /**
     * The ProjectLimitDisk model constructor.
     * @property {module:model/ProjectLimitDisk}
     */
    ProjectLimitDisk,

    /**
     * The ProjectLimitDomain model constructor.
     * @property {module:model/ProjectLimitDomain}
     */
    ProjectLimitDomain,

    /**
     * The ProjectLimitIso model constructor.
     * @property {module:model/ProjectLimitIso}
     */
    ProjectLimitIso,

    /**
     * The ProjectLimitVm model constructor.
     * @property {module:model/ProjectLimitVm}
     */
    ProjectLimitVm,

    /**
     * The ProjectNetworkAcl model constructor.
     * @property {module:model/ProjectNetworkAcl}
     */
    ProjectNetworkAcl,

    /**
     * The ProjectPostAccessrights model constructor.
     * @property {module:model/ProjectPostAccessrights}
     */
    ProjectPostAccessrights,

    /**
     * The ProjectRoles model constructor.
     * @property {module:model/ProjectRoles}
     */
    ProjectRoles,

    /**
     * The ProjectServices model constructor.
     * @property {module:model/ProjectServices}
     */
    ProjectServices,

    /**
     * The ProjectThreshold model constructor.
     * @property {module:model/ProjectThreshold}
     */
    ProjectThreshold,

    /**
     * The ProjectThresholdCredits model constructor.
     * @property {module:model/ProjectThresholdCredits}
     */
    ProjectThresholdCredits,

    /**
     * The ProjectTransfer model constructor.
     * @property {module:model/ProjectTransfer}
     */
    ProjectTransfer,

    /**
     * The ProjectUpdate model constructor.
     * @property {module:model/ProjectUpdate}
     */
    ProjectUpdate,

    /**
     * The Replica model constructor.
     * @property {module:model/Replica}
     */
    Replica,

    /**
     * The ReplicaActionImage model constructor.
     * @property {module:model/ReplicaActionImage}
     */
    ReplicaActionImage,

    /**
     * The ReplicaCreate model constructor.
     * @property {module:model/ReplicaCreate}
     */
    ReplicaCreate,

    /**
     * The ReplicaPostAccessrights model constructor.
     * @property {module:model/ReplicaPostAccessrights}
     */
    ReplicaPostAccessrights,

    /**
     * The ReplicaServices model constructor.
     * @property {module:model/ReplicaServices}
     */
    ReplicaServices,

    /**
     * The Reservation model constructor.
     * @property {module:model/Reservation}
     */
    Reservation,

    /**
     * The ReservationActionAssign model constructor.
     * @property {module:model/ReservationActionAssign}
     */
    ReservationActionAssign,

    /**
     * The ReservationCreate model constructor.
     * @property {module:model/ReservationCreate}
     */
    ReservationCreate,

    /**
     * The ReservationPostAccessrights model constructor.
     * @property {module:model/ReservationPostAccessrights}
     */
    ReservationPostAccessrights,

    /**
     * The ReservationServices model constructor.
     * @property {module:model/ReservationServices}
     */
    ReservationServices,

    /**
     * The ReservationUpdate model constructor.
     * @property {module:model/ReservationUpdate}
     */
    ReservationUpdate,

    /**
     * The Snapshot model constructor.
     * @property {module:model/Snapshot}
     */
    Snapshot,

    /**
     * The SnapshotCreate model constructor.
     * @property {module:model/SnapshotCreate}
     */
    SnapshotCreate,

    /**
     * The SnapshotPostAccessrights model constructor.
     * @property {module:model/SnapshotPostAccessrights}
     */
    SnapshotPostAccessrights,

    /**
     * The SnapshotServices model constructor.
     * @property {module:model/SnapshotServices}
     */
    SnapshotServices,

    /**
     * The SnapshotUpdate model constructor.
     * @property {module:model/SnapshotUpdate}
     */
    SnapshotUpdate,

    /**
     * The Vault model constructor.
     * @property {module:model/Vault}
     */
    Vault,

    /**
     * The VaultActionResize model constructor.
     * @property {module:model/VaultActionResize}
     */
    VaultActionResize,

    /**
     * The VaultActionSnapshot model constructor.
     * @property {module:model/VaultActionSnapshot}
     */
    VaultActionSnapshot,

    /**
     * The VaultCreate model constructor.
     * @property {module:model/VaultCreate}
     */
    VaultCreate,

    /**
     * The VaultCreateCredential model constructor.
     * @property {module:model/VaultCreateCredential}
     */
    VaultCreateCredential,

    /**
     * The VaultCreateCredentialCertificate model constructor.
     * @property {module:model/VaultCreateCredentialCertificate}
     */
    VaultCreateCredentialCertificate,

    /**
     * The VaultCreateCredentialPassword model constructor.
     * @property {module:model/VaultCreateCredentialPassword}
     */
    VaultCreateCredentialPassword,

    /**
     * The VaultDelete model constructor.
     * @property {module:model/VaultDelete}
     */
    VaultDelete,

    /**
     * The VaultPatchCredentialcertificateId model constructor.
     * @property {module:model/VaultPatchCredentialcertificateId}
     */
    VaultPatchCredentialcertificateId,

    /**
     * The VaultPatchCredentialpasswordId model constructor.
     * @property {module:model/VaultPatchCredentialpasswordId}
     */
    VaultPatchCredentialpasswordId,

    /**
     * The VaultPostAccessrights model constructor.
     * @property {module:model/VaultPostAccessrights}
     */
    VaultPostAccessrights,

    /**
     * The VaultPostCredentialcertificate model constructor.
     * @property {module:model/VaultPostCredentialcertificate}
     */
    VaultPostCredentialcertificate,

    /**
     * The VaultPostCredentialpassword model constructor.
     * @property {module:model/VaultPostCredentialpassword}
     */
    VaultPostCredentialpassword,

    /**
     * The VaultServices model constructor.
     * @property {module:model/VaultServices}
     */
    VaultServices,

    /**
     * The VaultUpdate model constructor.
     * @property {module:model/VaultUpdate}
     */
    VaultUpdate,

    /**
     * The Vm model constructor.
     * @property {module:model/Vm}
     */
    Vm,

    /**
     * The VmActionFlavour model constructor.
     * @property {module:model/VmActionFlavour}
     */
    VmActionFlavour,

    /**
     * The VmActionImage model constructor.
     * @property {module:model/VmActionImage}
     */
    VmActionImage,

    /**
     * The VmActionPasswordReset model constructor.
     * @property {module:model/VmActionPasswordReset}
     */
    VmActionPasswordReset,

    /**
     * The VmActionRename model constructor.
     * @property {module:model/VmActionRename}
     */
    VmActionRename,

    /**
     * The VmCreate model constructor.
     * @property {module:model/VmCreate}
     */
    VmCreate,

    /**
     * The VmCreateDisk model constructor.
     * @property {module:model/VmCreateDisk}
     */
    VmCreateDisk,

    /**
     * The VmCreateNetadp model constructor.
     * @property {module:model/VmCreateNetadp}
     */
    VmCreateNetadp,

    /**
     * The VmCreatePassword model constructor.
     * @property {module:model/VmCreatePassword}
     */
    VmCreatePassword,

    /**
     * The VmData model constructor.
     * @property {module:model/VmData}
     */
    VmData,

    /**
     * The VmDelete model constructor.
     * @property {module:model/VmDelete}
     */
    VmDelete,

    /**
     * The VmPostAccessrights model constructor.
     * @property {module:model/VmPostAccessrights}
     */
    VmPostAccessrights,

    /**
     * The VmPostHdd model constructor.
     * @property {module:model/VmPostHdd}
     */
    VmPostHdd,

    /**
     * The VmPostNetadp model constructor.
     * @property {module:model/VmPostNetadp}
     */
    VmPostNetadp,

    /**
     * The VmServices model constructor.
     * @property {module:model/VmServices}
     */
    VmServices,

    /**
     * The VmSourceImage model constructor.
     * @property {module:model/VmSourceImage}
     */
    VmSourceImage,

    /**
     * The VmUpdate model constructor.
     * @property {module:model/VmUpdate}
     */
    VmUpdate,

    /**
     * The Vmhost model constructor.
     * @property {module:model/Vmhost}
     */
    Vmhost,

    /**
     * The VmhostActionMoveDisk model constructor.
     * @property {module:model/VmhostActionMoveDisk}
     */
    VmhostActionMoveDisk,

    /**
     * The VmhostActionMoveISO model constructor.
     * @property {module:model/VmhostActionMoveISO}
     */
    VmhostActionMoveISO,

    /**
     * The VmhostActionMoveImage model constructor.
     * @property {module:model/VmhostActionMoveImage}
     */
    VmhostActionMoveImage,

    /**
     * The VmhostActionMoveVM model constructor.
     * @property {module:model/VmhostActionMoveVM}
     */
    VmhostActionMoveVM,

    /**
     * The VmhostPostAccessrights model constructor.
     * @property {module:model/VmhostPostAccessrights}
     */
    VmhostPostAccessrights,

    /**
     * The VmhostServices model constructor.
     * @property {module:model/VmhostServices}
     */
    VmhostServices,

    /**
     * The VmhostUpdate model constructor.
     * @property {module:model/VmhostUpdate}
     */
    VmhostUpdate,

    /**
    * The ContainerApi service constructor.
    * @property {module:api/ContainerApi}
    */
    ContainerApi,

    /**
    * The DiskApi service constructor.
    * @property {module:api/DiskApi}
    */
    DiskApi,

    /**
    * The FirewallApi service constructor.
    * @property {module:api/FirewallApi}
    */
    FirewallApi,

    /**
    * The ImageApi service constructor.
    * @property {module:api/ImageApi}
    */
    ImageApi,

    /**
    * The IpApi service constructor.
    * @property {module:api/IpApi}
    */
    IpApi,

    /**
    * The IsoApi service constructor.
    * @property {module:api/IsoApi}
    */
    IsoApi,

    /**
    * The LogArchiveApi service constructor.
    * @property {module:api/LogArchiveApi}
    */
    LogArchiveApi,

    /**
    * The NetadpApi service constructor.
    * @property {module:api/NetadpApi}
    */
    NetadpApi,

    /**
    * The NetgwApi service constructor.
    * @property {module:api/NetgwApi}
    */
    NetgwApi,

    /**
    * The NetworkApi service constructor.
    * @property {module:api/NetworkApi}
    */
    NetworkApi,

    /**
    * The OrganisationApi service constructor.
    * @property {module:api/OrganisationApi}
    */
    OrganisationApi,

    /**
    * The ProjectApi service constructor.
    * @property {module:api/ProjectApi}
    */
    ProjectApi,

    /**
    * The ReplicaApi service constructor.
    * @property {module:api/ReplicaApi}
    */
    ReplicaApi,

    /**
    * The ReservationApi service constructor.
    * @property {module:api/ReservationApi}
    */
    ReservationApi,

    /**
    * The SnapshotApi service constructor.
    * @property {module:api/SnapshotApi}
    */
    SnapshotApi,

    /**
    * The VaultApi service constructor.
    * @property {module:api/VaultApi}
    */
    VaultApi,

    /**
    * The VmApi service constructor.
    * @property {module:api/VmApi}
    */
    VmApi,

    /**
    * The VmhostApi service constructor.
    * @property {module:api/VmhostApi}
    */
    VmhostApi
};