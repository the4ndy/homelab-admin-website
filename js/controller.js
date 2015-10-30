'use strict';

serverInputApp.controller('serverInputController',
    function serverInputController($scope) {
$scope.homelab = {
 servers: [
 {
 "hostname": "server0",
 "vmid": "100",
 "desc": "this is a server description",
 "ip": "1.2.3.4",
 },
     {
 "hostname": "server1",
 "vmid": "100",
 "desc": "this is a server description",
 "ip": "1.2.3.4",
 },
     {
 "hostname": "server2",
 "vmid": "100",
 "desc": "this is a server description",
 "ip": "1.2.3.4",
 },
     {
 "hostname": "server3",
 "vmid": "100",
 "desc": "this is a server description",
 "ip": "1.2.3.4",
 },
]
 };
    }
);