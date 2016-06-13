app = angular.module('demo', ['ng-bootstrap-datepicker']);
        app.controller('AppCtrl', function($scope) {
            $scope.datepickerOptions = {
                format: 'yyyy-mm-dd',
                language: 'fr',
                startDate: "2012-10-01",
                endDate: "2012-10-31",
                autoclose: true,
                weekStart: 0
            }
        });
