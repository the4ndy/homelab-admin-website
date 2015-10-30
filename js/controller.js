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
        //   New Server
        //     {
        //     "hostname": "server3",
        //     "vmid": "100",
        //     "desc": "this is a server description",
        //     "ip": "1.2.3.4",
        //    },
        ]
         };
    
    $scope.iservers = {
                       servers: [
                            {
                            "serverName": "Server0",
                             services: [
                                        {
                                    "serviceName": "service 0",
                                    "serviceAddress": "1.2.3.4:8080"
                                        },
                                        {
                                    "serviceName": "service 1",
                                    "serviceAddress": "1.2.3.4:8080"
                                        },
                                    ],
                            },
                            {
                            "serverName": "Server1",
                             services: [
                                        {
                                    "serviceName": "service 1",
                                    "serviceAddress": "1.2.3.4:8081"
                                        },
                                        {
                                    "serviceName": "service 2",
                                    "serviceAddress": "1.2.3.4:8082"
                                        },
                                    ],
                            },
                            {
                            "serverName": "Server2",
                             services: [
                                        {
                                    "serviceName": "service 2",
                                    "serviceAddress": "1.2.3.4:8082"
                                        },
                                        {
                                    "serviceName": "service 3",
                                    "serviceAddress": "1.2.3.4:8083"
                                        },
                                    ],
                            },
                           ]
            };
    
            }
);
 /* serverInputApp.controller('indServerInputController',
        function.indServerInputController($scope) {
            $scope.indServers = {
                       indServers: [
                            {
                            "serverName": "Server0",
                             services: [
                                        {
                                    "serviceName": "service 0",
                                    "serviceAddress": "1.2.3.4:8080"
                                        },
                                        {
                                    "serviceName": "service 1",
                                    "serviceAddress": "1.2.3.4:8080"
                                        },
                                    ],
                            },
                            {
                            "serverName": "Server1",
                             services: [
                                        {
                                    "serviceName": "service 1",
                                    "serviceAddress": "1.2.3.4:8081"
                                        },
                                        {
                                    "serviceName": "service 2",
                                    "serviceAddress": "1.2.3.4:8082"
                                        },
                                    ],
                            },
                            {
                            "serverName": "Server2",
                             services: [
                                        {
                                    "serviceName": "service 2",
                                    "serviceAddress": "1.2.3.4:8082"
                                        },
                                        {
                                    "serviceName": "service 3",
                                    "serviceAddress": "1.2.3.4:8083"
                                        },
                                    ],
                            },
                           ]
            };
}
                
);*/