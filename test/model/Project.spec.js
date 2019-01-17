/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HyperOneApi);
  }
}(this, function(expect, HyperOneApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HyperOneApi.Project();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Project', function() {
    it('should create an instance of Project', function() {
      // uncomment below and update the code to test Project
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be.a(HyperOneApi.Project);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property services (base name: "services")', function() {
      // uncomment below and update the code to test the property services
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property flavour (base name: "flavour")', function() {
      // uncomment below and update the code to test the property flavour
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property modifiedOn (base name: "modifiedOn")', function() {
      // uncomment below and update the code to test the property modifiedOn
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property modifiedBy (base name: "modifiedBy")', function() {
      // uncomment below and update the code to test the property modifiedBy
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property accessRights (base name: "accessRights")', function() {
      // uncomment below and update the code to test the property accessRights
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property processing (base name: "processing")', function() {
      // uncomment below and update the code to test the property processing
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property queue (base name: "queue")', function() {
      // uncomment below and update the code to test the property queue
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property bankAccount (base name: "bankAccount")', function() {
      // uncomment below and update the code to test the property bankAccount
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property organisation (base name: "organisation")', function() {
      // uncomment below and update the code to test the property organisation
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property billing (base name: "billing")', function() {
      // uncomment below and update the code to test the property billing
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property invoices (base name: "invoices")', function() {
      // uncomment below and update the code to test the property invoices
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property payments (base name: "payments")', function() {
      // uncomment below and update the code to test the property payments
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property verified (base name: "verified")', function() {
      // uncomment below and update the code to test the property verified
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property threshold (base name: "threshold")', function() {
      // uncomment below and update the code to test the property threshold
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property networkAcl (base name: "networkAcl")', function() {
      // uncomment below and update the code to test the property networkAcl
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property compliance (base name: "compliance")', function() {
      // uncomment below and update the code to test the property compliance
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property transfer (base name: "transfer")', function() {
      // uncomment below and update the code to test the property transfer
      //var instance = new HyperOneApi.Project();
      //expect(instance).to.be();
    });

  });

}));
