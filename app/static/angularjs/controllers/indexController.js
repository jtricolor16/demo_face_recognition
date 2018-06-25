(function(){

	'use strict';

	angular.module('RecognitionApp').controller('IndexController', function($scope, $http, $log, $location, $localStorage){
		
		var self=this

		self.trainning=true;
		self.user=undefined;
		self.userLoad=undefined;
		self.message=undefined;
		self.blockRecognition=false;
		self.blockTrainning=false;

		self.register = function(){
			delete $localStorage.user;
			$http.get('/face_recognition/clear_image_faces')
			$location.path('/face_recognition/register')
		}

		self.recognition = function(){
			$location.path('/face_recognition/recognition')
		}

		self.trainningMethod = function(){
			self.trainning=false;
			$http.post('/face_recognition/trainining_yml')
			.success(function(){
				self.trainning=true;
				alert('YML treinado com sucesso!')
				self.verifyYml();
				$location.path('/face_recognition')
			}).error(function(error){
				$log.log(error);
			})
		}

		self.search = function(){
			$http.post('/face_recognition/search', self.user.id)
			.success(function(results){
				self.userLoad=results.user
				if(self.userLoad!=undefined){
					$localStorage.user=self.userLoad
					$location.path('/face_recognition/edit')
				}
			}).error(function(error){
				self.message="User not found!"
				$log.log(error);
			})
		}

		$scope.stopCam = function(){
			delete self.user
			delete $scope.imageFaces;
			if(document.getElementById("rg")!=undefined){
				document.getElementById("rg").src = '';
			}
			if(document.getElementById("bg")!=undefined){
				document.getElementById("bg").src = "";
			}
			$location.path('/face_recognition');	
		}

		self.camConfig = function(){
			$location.path('/face_recognition/configuration')
		}

		self.verifyYml = function(){
		    $http.get('/face_recognition/verify_yml')
			.success(function(results){
				if(results.value==true)
				    self.blockRecognition=true;
				else
				    self.blockRecognition=false;

			}).error(function(error){
				self.blockRecognition=false;
				$log.log(error);
			})
		}

		self.verifyUsers = function(){
		    $http.get('/face_recognition/verify_users')
			.success(function(results){
				if(results.value==true)
				    self.blockTrainning=true;
				else
				    self.blockTrainning=false;

			}).error(function(error){
				self.blockTrainning=false;
				$log.log(error);
			})
		}

		self.verifyYml();
		self.verifyUsers();

	})	

})()