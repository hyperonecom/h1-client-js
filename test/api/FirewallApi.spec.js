/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.2
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
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HyperOneApi);
  }
}(this, function(expect, HyperOneApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HyperOneApi.FirewallApi();
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

  describe('FirewallApi', function() {
    describe('firewallActionAttach', function() {
      it('should call firewallActionAttach successfully', function(done) {
        //uncomment below and update the code to test firewallActionAttach
        //instance.firewallActionAttach(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallActionDetach', function() {
      it('should call firewallActionDetach successfully', function(done) {
        //uncomment below and update the code to test firewallActionDetach
        //instance.firewallActionDetach(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallActionTransfer', function() {
      it('should call firewallActionTransfer successfully', function(done) {
        //uncomment below and update the code to test firewallActionTransfer
        //instance.firewallActionTransfer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallCreate', function() {
      it('should call firewallCreate successfully', function(done) {
        //uncomment below and update the code to test firewallCreate
        //instance.firewallCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallDelete', function() {
      it('should call firewallDelete successfully', function(done) {
        //uncomment below and update the code to test firewallDelete
        //instance.firewallDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallDeleteAccessrightsIdentity', function() {
      it('should call firewallDeleteAccessrightsIdentity successfully', function(done) {
        //uncomment below and update the code to test firewallDeleteAccessrightsIdentity
        //instance.firewallDeleteAccessrightsIdentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallDeleteEgressRuleId', function() {
      it('should call firewallDeleteEgressRuleId successfully', function(done) {
        //uncomment below and update the code to test firewallDeleteEgressRuleId
        //instance.firewallDeleteEgressRuleId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallDeleteIngressRuleId', function() {
      it('should call firewallDeleteIngressRuleId successfully', function(done) {
        //uncomment below and update the code to test firewallDeleteIngressRuleId
        //instance.firewallDeleteIngressRuleId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallDeleteTagKey', function() {
      it('should call firewallDeleteTagKey successfully', function(done) {
        //uncomment below and update the code to test firewallDeleteTagKey
        //instance.firewallDeleteTagKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallGetEgressRuleId', function() {
      it('should call firewallGetEgressRuleId successfully', function(done) {
        //uncomment below and update the code to test firewallGetEgressRuleId
        //instance.firewallGetEgressRuleId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallGetIngressRuleId', function() {
      it('should call firewallGetIngressRuleId successfully', function(done) {
        //uncomment below and update the code to test firewallGetIngressRuleId
        //instance.firewallGetIngressRuleId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallGetServicesServiceId', function() {
      it('should call firewallGetServicesServiceId successfully', function(done) {
        //uncomment below and update the code to test firewallGetServicesServiceId
        //instance.firewallGetServicesServiceId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallGetTag', function() {
      it('should call firewallGetTag successfully', function(done) {
        //uncomment below and update the code to test firewallGetTag
        //instance.firewallGetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallList', function() {
      it('should call firewallList successfully', function(done) {
        //uncomment below and update the code to test firewallList
        //instance.firewallList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallListAccessrights', function() {
      it('should call firewallListAccessrights successfully', function(done) {
        //uncomment below and update the code to test firewallListAccessrights
        //instance.firewallListAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallListEgress', function() {
      it('should call firewallListEgress successfully', function(done) {
        //uncomment below and update the code to test firewallListEgress
        //instance.firewallListEgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallListIngress', function() {
      it('should call firewallListIngress successfully', function(done) {
        //uncomment below and update the code to test firewallListIngress
        //instance.firewallListIngress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallListQueue', function() {
      it('should call firewallListQueue successfully', function(done) {
        //uncomment below and update the code to test firewallListQueue
        //instance.firewallListQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallListServices', function() {
      it('should call firewallListServices successfully', function(done) {
        //uncomment below and update the code to test firewallListServices
        //instance.firewallListServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallPatchTag', function() {
      it('should call firewallPatchTag successfully', function(done) {
        //uncomment below and update the code to test firewallPatchTag
        //instance.firewallPatchTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallPostAccessrights', function() {
      it('should call firewallPostAccessrights successfully', function(done) {
        //uncomment below and update the code to test firewallPostAccessrights
        //instance.firewallPostAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallPostEgress', function() {
      it('should call firewallPostEgress successfully', function(done) {
        //uncomment below and update the code to test firewallPostEgress
        //instance.firewallPostEgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallPostIngress', function() {
      it('should call firewallPostIngress successfully', function(done) {
        //uncomment below and update the code to test firewallPostIngress
        //instance.firewallPostIngress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallShow', function() {
      it('should call firewallShow successfully', function(done) {
        //uncomment below and update the code to test firewallShow
        //instance.firewallShow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('firewallUpdate', function() {
      it('should call firewallUpdate successfully', function(done) {
        //uncomment below and update the code to test firewallUpdate
        //instance.firewallUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
