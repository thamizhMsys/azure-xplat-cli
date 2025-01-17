﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var NetworkTestUtil = require('../../../util/networkTestUtil');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var networkUtil = new NetworkTestUtil();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-lb-probe-tests',
  groupName = 'xplat-test-probe',
  location;
var index = 0;

var loadBalancerName;
var loadBalancerId;
var publicIPAddressName;
var publicIPAddressId;
var frontendIPConfigurationName;
var frontendIPConfigurationId;

var probes = {
  protocol: 'Http',
  protocolNew: 'Tcp',
  port: '2424',
  portNew: '4242',
  intervalInSeconds: '6',
  intervalInSecondsNew: '14',
  numberOfProbes: '4',
  numberOfProbesNew: '7',
  requestPath: '/create',
  name: 'probeName'
};
probes.loadBalancerName = 'loadBalancerName';
probes.publicIPAddressName = 'publicIPAddressName';
probes.frontendIPConfigurationName = 'frontendIPConfigurationName';

var publicIPAddress = {
  location: 'westus'
};
var loadBalancer = {
  location: 'westus'
};
var frontendIPConfiguration = {
};

var probesDefault = {

  protocol: 'TCP',
  port: '80',
  loadBalancerName: 'loadBalancerName',
  publicIPAddressName: 'publicIPAddressName',
  frontendIPConfigurationName: 'frontendIPConfigurationName',
  name: 'probesDefaultName',
  group: groupName
};
var protocolOutOfRange = {
  protocol: 'TcpUdp',
  loadBalancerName: 'loadBalancerName',
  name: 'ProtocolOutOfRangeName',
  group: groupName
};
var portOutOfRange = {
  port: '65536',
  loadBalancerName: 'loadBalancerName',
  name: 'PortOutOfRangeName',
  group: groupName
};
var invalidRequestPath = {
  requestPath: 'SomeRandomValue',
  loadBalancerName: 'loadBalancerName',
  name: 'InvalidRequestPathName',
  group: groupName
};
var intervalInSecondsOverAllowedValue = {
  intervalInSeconds: '2147483650',
  loadBalancerName: 'loadBalancerName',
  name: 'IntervalInSecondsOverAllowedValueName',
  group: groupName
};
var intervalInSecondsUnderAllowedValue = {
  intervalInSeconds: '3',
  loadBalancerName: 'loadBalancerName',
  name: 'IntervalInSecondsUnderAllowedValueName',
  group: groupName
};
var numberOfProbesUnderAllowedValue = {
  numberOfProbes: '0',
  loadBalancerName: 'loadBalancerName',
  name: 'NumberOfProbesUnderAllowedValueName',
  group: groupName
};
var numberOfProbesOverAllowedValue = {
  numberOfProbes: '143165578',
  loadBalancerName: 'loadBalancerName',
  name: 'NumberOfProbesOverAllowedValueName',
  group: groupName
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;

    before(function (done) {
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = probes.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        probes.location = location;
        probes.group = groupName;
        probes.name = suite.isMocked ? probes.name : suite.generateId(probes.name, null);
        if(!suite.isPlayback()) {
          networkUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network lb create -g {1} -n loadBalancerName --location {location} --json'.formatArgs(loadBalancer, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var output = JSON.parse(result.text);
              protocolOutOfRange.loadBalancerId = suite.isMocked ? output.id : suite.generateId(protocolOutOfRange.loadBalancerId, null);
              portOutOfRange.loadBalancerId = suite.isMocked ? output.id : suite.generateId(portOutOfRange.loadBalancerId, null);
              invalidRequestPath.loadBalancerId = suite.isMocked ? output.id : suite.generateId(invalidRequestPath.loadBalancerId, null);
              intervalInSecondsOverAllowedValue.loadBalancerId = suite.isMocked ? output.id : suite.generateId(intervalInSecondsOverAllowedValue.loadBalancerId, null);
              intervalInSecondsUnderAllowedValue.loadBalancerId = suite.isMocked ? output.id : suite.generateId(intervalInSecondsUnderAllowedValue.loadBalancerId, null);
              numberOfProbesUnderAllowedValue.loadBalancerId = suite.isMocked ? output.id : suite.generateId(numberOfProbesUnderAllowedValue.loadBalancerId, null);
              numberOfProbesOverAllowedValue.loadBalancerId = suite.isMocked ? output.id : suite.generateId(numberOfProbesOverAllowedValue.loadBalancerId, null);
              var cmd = 'network public-ip create -g {1} -n publicIPAddressName --location {location} --json'.formatArgs(publicIPAddress, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var output = JSON.parse(result.text);
                protocolOutOfRange.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(protocolOutOfRange.publicIPAddressId, null);
                portOutOfRange.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(portOutOfRange.publicIPAddressId, null);
                invalidRequestPath.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(invalidRequestPath.publicIPAddressId, null);
                intervalInSecondsOverAllowedValue.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(intervalInSecondsOverAllowedValue.publicIPAddressId, null);
                intervalInSecondsUnderAllowedValue.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(intervalInSecondsUnderAllowedValue.publicIPAddressId, null);
                numberOfProbesUnderAllowedValue.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(numberOfProbesUnderAllowedValue.publicIPAddressId, null);
                numberOfProbesOverAllowedValue.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(numberOfProbesOverAllowedValue.publicIPAddressId, null);
                var cmd = 'network lb frontend-ip create -g {1} -n frontendIPConfigurationName  --lb-name loadBalancerName --public-ip-name publicIPAddressName --json'.formatArgs(frontendIPConfiguration, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  var output = JSON.parse(result.text);
                  protocolOutOfRange.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(protocolOutOfRange.frontendIPConfigurationId, null);
                  portOutOfRange.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(portOutOfRange.frontendIPConfigurationId, null);
                  invalidRequestPath.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(invalidRequestPath.frontendIPConfigurationId, null);
                  intervalInSecondsOverAllowedValue.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(intervalInSecondsOverAllowedValue.frontendIPConfigurationId, null);
                  intervalInSecondsUnderAllowedValue.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(intervalInSecondsUnderAllowedValue.frontendIPConfigurationId, null);
                  numberOfProbesUnderAllowedValue.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(numberOfProbesUnderAllowedValue.frontendIPConfigurationId, null);
                  numberOfProbesOverAllowedValue.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(numberOfProbesOverAllowedValue.frontendIPConfigurationId, null);
                  done();
                });
              });
            });
          });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          protocolOutOfRange.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', protocolOutOfRange.loadBalancerName) : suite.generateId(protocolOutOfRange.loadBalancerId, null)
          portOutOfRange.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', portOutOfRange.loadBalancerName) : suite.generateId(portOutOfRange.loadBalancerId, null)
          invalidRequestPath.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', invalidRequestPath.loadBalancerName) : suite.generateId(invalidRequestPath.loadBalancerId, null)
          intervalInSecondsOverAllowedValue.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', intervalInSecondsOverAllowedValue.loadBalancerName) : suite.generateId(intervalInSecondsOverAllowedValue.loadBalancerId, null)
          intervalInSecondsUnderAllowedValue.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', intervalInSecondsUnderAllowedValue.loadBalancerName) : suite.generateId(intervalInSecondsUnderAllowedValue.loadBalancerId, null)
          numberOfProbesUnderAllowedValue.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', numberOfProbesUnderAllowedValue.loadBalancerName) : suite.generateId(numberOfProbesUnderAllowedValue.loadBalancerId, null)
          numberOfProbesOverAllowedValue.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', numberOfProbesOverAllowedValue.loadBalancerName) : suite.generateId(numberOfProbesOverAllowedValue.loadBalancerId, null)
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(hour);
      networkUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('probes', function () {
      this.timeout(hour);
      it('create should create probes', function (done) {
        var cmd = 'network lb probe create -g {group} -n {name} --protocol {protocol} --port {port} --interval {intervalInSeconds} --count {numberOfProbes} --path {requestPath} --lb-name {loadBalancerName}  --json'.formatArgs(probes);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(probes.name);
          output.protocol.toLowerCase().should.equal(probes.protocol.toLowerCase());
          output.port.should.equal(parseInt(probes.port, 10));
          output.intervalInSeconds.should.equal(parseInt(probes.intervalInSeconds, 10));
          output.numberOfProbes.should.equal(parseInt(probes.numberOfProbes, 10));
          output.requestPath.toLowerCase().should.equal(probes.requestPath.toLowerCase());
          done();
        });
      });
      it('show should display probes details', function (done) {
        var cmd = 'network lb probe show -g {group} -n {name} --lb-name {loadBalancerName} --json'.formatArgs(probes);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.name.should.equal(probes.name);
          output.protocol.toLowerCase().should.equal(probes.protocol.toLowerCase());
          output.port.should.equal(parseInt(probes.port, 10));
          output.intervalInSeconds.should.equal(parseInt(probes.intervalInSeconds, 10));
          output.numberOfProbes.should.equal(parseInt(probes.numberOfProbes, 10));
          output.requestPath.toLowerCase().should.equal(probes.requestPath.toLowerCase());
          done();
        });
      });
      it('set should update probes', function (done) {
        var cmd = 'network lb probe set -g {group} -n {name} --protocol {protocolNew} --port {portNew} --interval {intervalInSecondsNew} --count {numberOfProbesNew} --lb-name {loadBalancerName} --json'.formatArgs(probes);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(probes.name);
          output.protocol.toLowerCase().should.equal(probes.protocolNew.toLowerCase());
          output.port.should.equal(parseInt(probes.portNew, 10));
          output.intervalInSeconds.should.equal(parseInt(probes.intervalInSecondsNew, 10));
          output.numberOfProbes.should.equal(parseInt(probes.numberOfProbesNew, 10));
          done();
        });
      });
      it('list should display all probes in resource group', function (done) {
        var cmd = 'network lb probe list -g {group} --lb-name {loadBalancerName} --json'.formatArgs(probes);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === probes.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete probes', function (done) {
        var cmd = 'network lb probe delete -g {group} -n {name} --quiet --lb-name {loadBalancerName} --json'.formatArgs(probes);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network lb probe show -g {group} -n {name} --lb-name {loadBalancerName} --json'.formatArgs(probes);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.should.be.empty;
            done();
          });
        });
      });
      it('create with defaults should create probes with default values', function (done) {
        var cmd = 'network lb probe create -g {group} -n {name}  --lb-name {loadBalancerName}  --json'.formatArgs(probesDefault);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(probesDefault.name);
          output.protocol.toLowerCase().should.equal(probesDefault.protocol.toLowerCase());;
          output.port.should.equal(parseInt(probesDefault.port, 10));
          var cmd = 'network lb probe delete -g {group} -n {name} --quiet --lb-name {loadBalancerName} --json'.formatArgs(probesDefault);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });

      it('create should fail for protocol out of range', function (done) {
        var cmd = ('network lb probe create -g {group} -n {name} --protocol {protocol} --lb-name {loadBalancerName}  --json').formatArgs(protocolOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for port out of range', function (done) {
        var cmd = ('network lb probe create -g {group} -n {name} --port {port} --lb-name {loadBalancerName}  --json').formatArgs(portOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid request path', function (done) {
        var cmd = ('network lb probe create -g {group} -n {name} --path {requestPath} --lb-name {loadBalancerName}  --json').formatArgs(invalidRequestPath);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for interval in seconds over allowed value', function (done) {
        var cmd = ('network lb probe create -g {group} -n {name} --interval {intervalInSeconds} --lb-name {loadBalancerName}  --json').formatArgs(intervalInSecondsOverAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for interval in seconds under allowed value', function (done) {
        var cmd = ('network lb probe create -g {group} -n {name} --interval {intervalInSeconds} --lb-name {loadBalancerName}  --json').formatArgs(intervalInSecondsUnderAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for number of probes under allowed value', function (done) {
        var cmd = ('network lb probe create -g {group} -n {name} --count {numberOfProbes} --lb-name {loadBalancerName}  --json').formatArgs(numberOfProbesUnderAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for number of probes over allowed value', function (done) {
        var cmd = ('network lb probe create -g {group} -n {name} --count {numberOfProbes} --lb-name {loadBalancerName}  --json').formatArgs(numberOfProbesOverAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
    });
  });
});