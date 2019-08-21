angular.module('builder.app').directive("itsmTasks", ["appService", "ServiceRequestIncidentRepository", "$rootScope", "$translate", "ItsmTasksRepository", "$timeout", "$filter", 
				function(appService, ServiceRequestIncidentRepository, $rootScope, $translate, ItsmTasksRepository, $timeout, $filter) {

	return {
		scope : {
			SQLName : "@sqlName",
			objectMap : "=objectMap",
			shortList : "@shortList",
			details : "@details",
			detailsField : "@detailsField"
		},
		replace : true,
		restrict : 'E',
		templateUrl : '/cit-esi-web/pages/itsm-tasks/itsm-tasks.html',
		controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
			$scope.$translate = $translate;
			
			if($scope.setTotalPages){
				$scope.totalPages = $scope.setTotalPages;
			}else{
				$scope.totalPages = 10;
			}
			
			$scope.totalItens = 10;
			
			$scope.limit = 10;
			$scope.$showAdvancedFilters = false;
			$scope.labelPalavraChave = $translate.instant('citcorpore.comum.digitePalavraChave');
			
			$scope.listaItensSelecionados = [];
			
			$scope.uuid = getUuid();
			
			$scope.getHeaderWidth = function() {
				return $scope.shortList ? 100 : 80;
			}
		}],
		link : function($scope, $element, $attributes){

			$scope.filterResult = function(generic) {

				//resolver o problema do timeout, solução para problema encontrado no backspace rápido do filter.
				if($scope.filterCriteria.keywordValue !== '' || $scope.filterCriteria.keywordValue === ''){
					$scope.runFilterResult(generic);
				}
			};

			$scope.runFilterResult = function(generic){
				$timeout(function(){
					if (generic == undefined) {
						$scope.filterCriteria.keywordValue = null;
					}
					$scope.filterCriteria.start = 1;
					$scope.fetchResult().then(function() {
						$scope.filterCriteria.start = 1;
					});
				},200);
			};
		  
			$scope.updateTotalItens = function(qtsItens){
				$scope.totalItens = qtsItens;
				$scope.filterCriteria.limit = qtsItens;
				$scope.fetchResult(1);
			};
			
			$scope.onSort = function(sortedBy, sortDir) {
				$scope.filterCriteria.dir = sortDir;
				$scope.filterCriteria.sort = sortedBy;
				$scope.filterCriteria.start = 1;
				searching = false;
				$scope.fetchResult().then(function() {
					// The request fires correctly but sometimes the ui doesn't update,
					// that's a fix
					$scope.filterCriteria.start = 1;
				});
			};

			var initializeAttributes = function() {
				$scope.filterCriteria = {start : 1,
					         dir : 'asc',
					         limit : 10,
							 sort : 'desc:workitem_id',
							 fields : [],
                             SQLName: $scope.SQLName,
							 objectMap: $scope.objectMap
				};
				
				angular.forEach($scope.structure.columns, function(column){
					if (column.displayAtGrid == true || column.pk) {
						$scope.filterCriteria.fields.push(column.attributeName);
					}
				});
				
				if ($scope.shortList) {
                    $scope.filterCriteria.filters = [{type: "string", field: "id"}
												   , {type: "string", field: "activity", comparison: "like-upper"}
												   , {type: "string", field: "task", comparison: "like-upper"}
												   , {type: "string", field: "flowstatus", comparison: "like-upper"}
												 ];
				}else{
                    $scope.filterCriteria.filters = [{type: "string", field: "id"}
												   , {type: "number", field: "priority"}
												   , {type: "string", field: "activity", comparison: "like-upper"}
												   , {type: "date", field: "creationdate"}
												   , {type: "string", field: "task", comparison: "like-upper"}
												   , {type: "string", field: "currentgroup", comparison: "like-upper"}
												   , {type: "string", field: "responsible", comparison: "like-upper"}
												   , {type: "string", field: "flowstatus", comparison: "like-upper"}
												   , {type: "date", field: "slalimit"}
												 ];
				}

				if ($scope.details) {
					$scope.filterCriteria.fields.push("details");
					
					if ($scope.detailsField) {
						$scope.filterCriteria.filters.push({type: "string", field: $scope.detailsField, comparison: "like-upper"});
					}
				}
			};

			var initialize = function() {
				ItsmTasksRepository.getStructure().then(function(result) {
					$scope.structure = result.originalElement;
					
					initializeAttributes();
					$scope.fetchResult();
				}, function() {
				});
			}

			// RECUPERA LISTA E SETA RESULTADO NA GRID
			$scope.loading = false;
			var searching = false;
			$scope.fetchResult = function(page) {
				if (!searching) {
					searching = true;
					
					$scope.loading = true;
				    appService.setLoading(true);
					$scope.itemSelecionado = undefined;
					
					if (page) {
						$scope.filterCriteria.start = page;
					}else if (!$scope.filterCriteria.start) {
						$scope.filterCriteria.start = 1;
					}
					
					$scope.requests = [];
					return ItsmTasksRepository.getListPage($scope.filterCriteria).then(function(result) {
						$scope.requests = result.originalElement.objects;
						$scope.totalPages = result.originalElement.totalPages;
						$scope.totalItens =  result.originalElement.totalItens;
	
						var qty = $scope.shortList ? 4 : 10;
						var start = $scope.filterCriteria.start - qty / 2;
						if (start <= 0) {
							start = 1;
						}
						var end = $scope.filterCriteria.start + qty / 2;
						if (end < qty) {
							end = qty;
						}
						if (end > $scope.totalPages) {
							end = $scope.totalPages;
						}
						$scope.pages = [];
						for (var i = start; i <= end; i++) {
							$scope.pages.push({active: i == $scope.filterCriteria.start, text: i, number: i})
						}

						if(!$scope.filtersCopy){
							$scope.filtersCopy = angular.copy($scope.filterCriteria.filters);
						}
	
						appService.setLoading(false);
						$scope.loading = false;
						
						searching = false;
					}, function() {
						$scope.requests = [];
						$scope.totalPages = 0;
						$scope.totalItens = 0;
						$scope.loading = false;
						searching = false;
					});
				}
			};
 
			// Limpa os filtros avançados
			$scope.limparFilters = function() {
				$scope.filterCriteria.keywordValue = null;
				if($scope.filtersCopy){
					$scope.filterCriteria.filters = angular.copy($scope.filtersCopy);
				}
				$scope.fetchResult();
				$scope.$showAdvancedFilters = false;
			};

			$scope.aplicarFiltro = function(value, filter) {
				if (filter === 'boolean') {
					if (value === true || value === 'true') {
						return $translate.instant("LABEL.SIM");
					}else{
						return $translate.instant("LABEL.NAO");
					}
				}else{
					var array = filter.split(':');
					var param = array.length > 1 ? array[1].trim() : null;
					if (param) {
						return $filter(array[0].trim())(value, param);
					}else{
						return $filter(array[0].trim())(value);
					}
				}
			};
			
			$scope.aplicarMask = function(value, mask){
				return appService.applyMask(value, mask);
			};

			$scope.$on('filtroDirective-listViewDirective', function(event, active) {
				$scope.$showAdvancedFilters = active;
			});
			
			$scope.hasFilter = function(field) {
				for (var i = 0; i < $scope.filterCriteria.filters.length; i++) {
					if (field && $scope.filterCriteria.filters[i].field && $scope.filterCriteria.filters[i].field.toUpperCase() === field.toUpperCase()) {
						return true;
					}
				}
				return false;
			};
			
			$scope.closeModalRequest = function() {
				$('#modal-request').modal('hide');
				$scope.filterResult();
   		  	};
									
			$scope.openRequest = function($event, request) {
				var uri = encodeURI(cit_ctx + "/pages/serviceRequestIncident/serviceRequestIncident.load#/request?idRequest=" + request.id + "&frameId=list-"+$scope.uuid+"&frame=true&callback=closeModalRequest");
				
				ServiceRequestIncidentRepository.verificaPermissoes({idTarefa: request.workitem_id}).then(function(response) {
					var permission = response.data;
					if (permission && permission.executar !== 'S') {
						uri += "&view=true"
					}
					$("#content-request").attr("src", uri);
					$('#modal-request').modal('show');
					/*$('#modal-request').on('shown.bs.modal', function() {			
						$timeout(function(){ 
							if ($('#content-request').contents().find('.license-not-found-bar')) {
								$('#content-request').contents().find('.license-not-found-bar').css("display","none");
							}
						}, 1000);
					});*/
				}, function (responseError) {
				});
			};
			
			$scope.applyFilter = function(value, filter) {
				if (filter === 'boolean') {
					if (value === true || value === 'true') {
						return $translate.instant("LABEL.SIM");
					}else{
						return $translate.instant("LABEL.NAO");
					}
				}if (filter === 'datetime') {
					return $filter('date')(value, 'dd/MM/yyyy HH:mm');
				}else{
					var array = filter.split(':');
					var param = array.length > 1 ? array[1].trim() : null;
					if (param) {
						return $filter(array[0].trim())(value, param);
					}else{
						return $filter(array[0].trim())(value);
					}
				}
			};

			$scope.exportCSV = function() {
				appService.setLoading(true);
				
				var csvContent = "";

				var exportFilter = angular.copy($scope.filterCriteria);
				exportFilter.start = 1;
				exportFilter.limit = 999999;
				ItsmTasksRepository.getListPage(exportFilter).then(function(result) {
					var items = result.originalElement.objects;
					appService.setLoading(false);
					
					var i = 0;
					angular.forEach($scope.structure.columnsGrid, function(column){
						if (i > 0) {
							csvContent += ";";
						}
						csvContent += '"' + $translate.instant(column.label) + '"'; 
						i++;
					});
					if ($scope.details) {
						csvContent += ';"' + $translate.instant('gerenciaportfolio.detalhes') + '"'; 
					}
					csvContent += '\r\n';
					
					angular.forEach(items, function(obj){
						i = 0;
						angular.forEach($scope.structure.columnsGrid, function(column){
							if (i > 0) {
								csvContent += ";";
							}
							
							var value = obj[column.name] ? obj[column.name] : '';
							if (column.filter && value != '') {
								value = $scope.applyFilter(value, column.filter)
							}
							if (column.searchType === 'string' || column.searchType === 'date') {
								value = '"' + value + '"';
							}

							csvContent += value; 
							i++;
						});
						if ($scope.details) {
							csvContent += ';"' + obj.details + '"'; 
						}
						csvContent += '\r\n';
					});
					
					var blob = new Blob([csvContent], { type:"text/csv;charset=utf-8;" });
					var downloadLink = angular.element('<a></a>');
	                downloadLink.attr('href',window.URL.createObjectURL(blob));
	                downloadLink.attr('download', $scope.SQLName.toLowerCase() + ".csv");
					downloadLink[0].click();
				}, function() {
					appService.setLoading(false);
				});
			};
			
			initialize();
		}
	};
}]);