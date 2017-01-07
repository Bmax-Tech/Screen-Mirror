angular.module('ScreenshotMaker')
.controller('homeController', ['$scope', 'Show', '$websocket', function($scope, Show, $websocket) {
    
    $scope.imageView = false;
    $scope.imageData = "asasa";
    
    // Web Sockets
    var ws = $websocket("ws://localhost:7788");
    
    ws.onMessage(function(message){
        $scope.imageView = true;
        $scope.imageData = "data:image/png;base64,"+message.data;
    });
    var data = {};
    $scope.startRecording = function(){
        data.message = "startCapturing";
        ws.send(data);
    };
    
    $scope.pauseRecoring = function(){
        data.message = "pauseCapturing";
        ws.send(data);
    };
      
    $scope.stopRecoring = function(){
        data.message = "stopCapturing";
        ws.send(data);
    };
    
    $scope.doAction = function(type){
        data.message = "mouseClick";
        var action = {};
        action.x = 10;
        action.y = 5;
        action.type = type;
        data.action = action;
        
        ws.send(data);
    };
}]);