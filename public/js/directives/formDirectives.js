(function () {
	var app = angular.module('crApp');

	app.directive('validateMessagesForm', ['$compile', function ($compile) {
		return {
			link: function ($scope, $element) {
				var formName = $element.attr('validate-messages-form'),
					inputName = $element.attr('validate-messages-input'),
					messages = angular.element(
						'<div ng-messages="' + formName + '.' + inputName + '.$error">' +
						'<div ng-messages-include="/templates/errorMessagesTmpl.html"></div>' +
						'</div>'
					),
					input = $element.find('input'),
					textArea = $element.find('textarea'),
					compiledMessages = $compile(messages)($scope),
					inputEle;
				
				inputEle = input.length ? input : textArea;

				$element.append(compiledMessages);
				
				compiledMessages.css({
					'display': 'none'
				});

				inputEle.on('focusout', function () {
					compiledMessages.css({
						'display': 'block'
					});
				});

				inputEle.on('focusin', function () {
					compiledMessages.css({
						'display': 'none'
					});
				});
			}
		}
	}]);

	app.directive('disableButton', [function () {
		return {
			scope: true,
			require: '^form',
			link: function ($scope, $element, $attrs, formCtrl) {
				$scope.$watch(function () {
					var currentState = !(formCtrl.$dirty && formCtrl.$valid);

					$element.attr('disabled', currentState);
				});
			}
		}
	}]);

	app.directive("uniqueId", [function () {
		return {
			restrict: "A",
			scope: true,
			link: function ($scope, $element) {
				var id = 'id-' + (Math.random() * 10000000).toFixed();

				$scope.id = id;
				$element.attr("unique-id", id);
			}
		}
	}]);

	app.directive("compareTo", [function () {
		return {
			require: "ngModel",
			scope: {
				fieldValue: '=ngModel',
				otherFieldlValue: '=compareTo'
			},
			link: function ($scope, $element, $attrs, modelCtrl) {
				$scope.$watchCollection('[fieldValue, otherFieldlValue]', function () {
					var isEqual = $scope.otherFieldlValue === $scope.fieldValue;

					modelCtrl.$setValidity('compareTo', isEqual);
				});
			}
		}
	}]);
})();