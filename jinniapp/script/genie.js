	"use strict";	
			// first we make sure annyang started succesfully
			var elementName = 65;
			if (annyang) {
				
				// define the functions our commands will run.
				
				// Command to open Help Editor
				var openHelpEditor = function() {
					$('#helpDailog').click();					
				};

				// Application Name
				var addApplicationName = function() {
					$('#applicationName').focus();
					
					var appNameDetail = '';
					annyang.addCallback('result', function(phrases) {
						if ($("#applicationName").is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								appNameDetail = appNameDetail + phrases[0];
								$('#applicationName').val(appNameDetail);
							}					
						}	
					});
				};

				// Application URL
				var addApplicationURL = function() {
					$('#applicationUrl').focus();
					
					var appLinkDetail = '';
					annyang.addCallback('result', function(phrases) {
						if ($("#applicationUrl").is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								appLinkDetail = appLinkDetail + phrases[0];
								$('#applicationUrl').val(appLinkDetail);
							}					
						}	
					});
				};
				
				// Add Page Name				
				var addPageName = function(){					
					$('#pageName').focus();
					
					var pageNameDetail = '';
					annyang.addCallback('result', function(phrases) {
						if ($("#pageName").is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								pageNameDetail = pageNameDetail + phrases[0];
								$('#pageName').val(pageNameDetail);
							}					
						}	
					});
				};

				// Add Page Description
				var addPageDesc = function(){					
					$('#pageDescription').focus();
					
					var pageDesc = '';
					annyang.addCallback('result', function(phrases) {
						if ($("#pageDescription").is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								pageDesc = pageDesc + phrases[0];
								$('#pageDescription').val(pageDesc);
							}					
						}	
					});
				};
				
				// Add Label Name
				var addLabelName = function(){
					$('#labelName').focus();
					
					var helpLabel = '';
					annyang.addCallback('result', function(phrases) {
						if ($("#labelName").is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								helpLabel = helpLabel + phrases[0];
								$('#labelName').val(helpLabel);	
							}
						}
					});
				};
				
				// Add Label Description
				var addLabelDesc = function(){
					$('#labelDescription').focus();
					
					var helpLabelDesc = '';
					annyang.addCallback('result', function(phrases) {
						if ($("#labelDescription").is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								helpLabelDesc = helpLabelDesc + phrases[0];
								$('#labelDescription').val(helpLabelDesc);
							}
						}							
					});
				};
				
				// Add New Label and its Description fields
				var addLabelAndDescription = function(){
					console.log("Going to add new label and description filed");
					addHelpDetails();
				}
				
				// For Label And Description A
				var addFieldLabelNameA = function(){					
					$('#field_a').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#field_a').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#field_a').val(details);
							}
						}							
					});
				}
				
				var addFieldLabelDescA = function(){
					$('#fieldDesc_a').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#fieldDesc_a').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#fieldDesc_a').val(details);
							}
						}							
					});
				}
				
				// For Label And Description B
				var addFieldLabelNameB = function(){					
					$('#field_b').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#field_b').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#field_b').val(details);
							}
						}							
					});
				}
				
				var addFieldLabelDescB = function(){
					$('#fieldDesc_b').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#fieldDesc_b').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#fieldDesc_b').val(details);
							}
						}							
					});
				}
				
				// For Label And Description C
				var addFieldLabelNameC = function(){					
					$('#field_c').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#field_c').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#field_c').val(details);
							}
						}							
					});
				}
				
				var addFieldLabelDescC = function(){
					$('#fieldDesc_c').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#fieldDesc_c').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#fieldDesc_c').val(details);
							}
						}							
					});
				}
				
				// For Label And Description D
				var addFieldLabelNameD = function(){					
					$('#field_d').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#field_d').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#field_d').val(details);
							}
						}							
					});
				}
				
				var addFieldLabelDescD = function(){
					$('#fieldDesc_d').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#fieldDesc_d').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#fieldDesc_d').val(details);
							}
						}							
					});
				}
				
				// For Label And Description E
				var addFieldLabelNameE = function(){					
					$('#field_e').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#field_e').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#field_e').val(details);
							}
						}							
					});
				}
				
				var addFieldLabelDescE = function(){
					$('#fieldDesc_e').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#fieldDesc_e').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#fieldDesc_e').val(details);
							}
						}							
					});
				}
				
				// For Label And Description F
				var addFieldLabelNameF = function(){					
					$('#field_f').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#field_f').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#field_f').val(details);
							}
						}							
					});
				}
				
				var addFieldLabelDescF = function(){
					$('#fieldDesc_f').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#fieldDesc_f').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#fieldDesc_f').val(details);
							}
						}							
					});
				}
				
				// For Label And Description G
				var addFieldLabelNameG = function(){					
					$('#field_g').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#field_g').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#field_g').val(details);
							}
						}							
					});
				}
				
				var addFieldLabelDescG = function(){
					$('#fieldDesc_g').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#fieldDesc_g').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#fieldDesc_g').val(details);
							}
						}							
					});
				}
				
				// For Label And Description H
				var addFieldLabelNameH = function(){					
					$('#field_h').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#field_h').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#field_h').val(details);
							}
						}							
					});
				}
				
				var addFieldLabelDescH = function(){
					$('#fieldDesc_h').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#fieldDesc_h').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#fieldDesc_h').val(details);
							}
						}							
					});
				}
				
				// For Label And Description I
				var addFieldLabelNameI = function(){					
					$('#field_i').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#field_i').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#field_i').val(details);
							}
						}							
					});
				}
				
				var addFieldLabelDescI = function(){
					$('#fieldDesc_i').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#fieldDesc_i').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#fieldDesc_i').val(details);
							}
						}							
					});
				}

				// For Label And Description J
				var addFieldLabelNameJ = function(){					
					$('#field_j').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#field_j').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#field_j').val(details);
							}
						}							
					});
				}
				
				var addFieldLabelDescJ = function(){
					$('#fieldDesc_j').focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#fieldDesc_j').is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#fieldDesc_j').val(details);
							}
						}							
					});
				}
				
				// Adding fields and its description field dynamically
				var addFieldLabelName = function(fieldname){	
					var fieldId = 'field_'+fieldname;
					enterDetails(fieldId);					
				};
				
				var addFieldLabelDesc = function(descname){				
					var fieldId = 'fieldDesc_'+descname;
					enterDetails(fieldId);					
				};								
				
				var enterDetails = function(fieldId){
					console.log("Field Id " + fieldId);
					$('#'+fieldId).focus();
					
					var details = '';
					annyang.addCallback('result', function(phrases) {
						if ($('#'+fieldId).is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								details = details + phrases[0];
								$('#'+fieldId).val(details);
							}
						}							
					});
				}
				
				var saveHelp = function() {			  
				  saveHelpDetails();
				  $('#saveHelp').click();				
				};
				
				var closeHelp = function() {
				  closeHelpDetails();
				  $('#closeHelp').click();				 
				};
				
				
				// Command functions for Customer Feedback
				// Command to open feedback editor
				var openFeedbackEditor = function() {
					$('#feedbackDailog').click();					
				};

				// Application Name
				var addFBApplicationName = function() {
					$('#applicationNameFB').focus();
					
					var appNameDetail = '';
					annyang.addCallback('result', function(phrases) {
						if ($("#applicationNameFB").is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								appNameDetail = appNameDetail + phrases[0];
								$('#applicationNameFB').val(appNameDetail);
							}					
						}	
					});
				};
				
				// Add Page Name				
				var addFBPageName = function(){					
					$('#pageNameFB').focus();
					
					var pageNameDetail = '';
					annyang.addCallback('result', function(phrases) {
						if ($("#pageNameFB").is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								pageNameDetail = pageNameDetail + phrases[0];
								$('#pageNameFB').val(pageNameDetail);
							}					
						}	
					});
				};
				
				// Add Feedback Comments				
				var addFeedbackNotes = function(){					
					$('#feedbackDescription').focus();
					
					var feedbackDesc = '';
					annyang.addCallback('result', function(phrases) {
						if ($("#feedbackDescription").is(":focus")) {
							var recognizedPhase = phrases[0];
							console.log("Recognized Phases : '" + recognizedPhase + "'");
							console.log(" Trimmed Recognized Phases : '" + $.trim(recognizedPhase) + "'");
							if(!commands.hasOwnProperty($.trim(recognizedPhase))){
								feedbackDesc = feedbackDesc + phrases[0];
								$('#feedbackDescription').val(feedbackDesc);
							}					
						}	
					});
				};
				
				var saveFeedback = function() {			  
				  saveFeedBackDetails();
				  $('#saveFeedBack').click();				  
				};
				
				var closeFeedback = function() {
				  closeFeedBackDetails();
				  $('#closeFeedBack').click();				  
				};
								
				// define our commands.
				var commands = {

					'add help': openHelpEditor,
					'save help' : saveHelp,
					'close help' : closeHelp,
					'application name' : addApplicationName,			  
					'application link' : addApplicationURL,
					'page name': addPageName,
					'page description': addPageDesc,
					'help field': addLabelName,
					'help description': addLabelDesc,	
					'add field' : addLabelAndDescription,

					'field a' : addFieldLabelNameA,
					'description a' : addFieldLabelDescA,
					
					'field b' : addFieldLabelNameB,
					'description b' : addFieldLabelDescB,
					
					'field c' : addFieldLabelNameC,
					'description c' : addFieldLabelDescC,
					
					'field d' : addFieldLabelNameD,
					'description d' : addFieldLabelDescD,
					
					'field e' : addFieldLabelNameE,
					'description e' : addFieldLabelDescE,
					
					'field f' : addFieldLabelNameF,
					'description f' : addFieldLabelDescF,
					
					'field g' : addFieldLabelNameG,
					'description g' : addFieldLabelDescG,
					
					'field h' : addFieldLabelNameH,
					'description h' : addFieldLabelDescH,
					
					'field i' : addFieldLabelNameI,
					'description i' : addFieldLabelDescI,
					
					'field j' : addFieldLabelNameJ,
					'description j' : addFieldLabelDescJ,

					
					'add feedback': openFeedbackEditor,
					'save feedback' : saveFeedback,
					'close feedback' : closeFeedback,
					'feedback for application' : addFBApplicationName,			  
					'feedback for page' : addFBPageName,
					'comments': addFeedbackNotes
				};
								
				annyang.debug();
				annyang.addCommands(commands);
				annyang.setLanguage('en');
				annyang.start();
			} 
			else {
				$(document).ready(function() {
				  alert("Speech Not Supported");
				});
			}
			
			function saveHelpDetails(){				
				var pageName = $('#pageName').val();
				var pageDesc = $('#pageDescription').val();
				var labelName = $('#labelName').val();
				var labelDesc = $('#labelDescription').val();
				var applicationName =$('#applicationName').val();
				var applicationUrl = $('#applicationUrl').val();

				var storeObject ={"appName":'',"name":'',"pages":[]};
				storeObject.appName =applicationName;
				storeObject.name= applicationUrl;

				var pages = [];				
				var helpFor = [];
				helpFor.push({"label": labelName, "description": labelDesc});
				for(var i = 65; i< 75; i++){
					var elementName = String.fromCharCode(i).toLowerCase();
					var lblName = $('#field_'+elementName).val();
					var descName = $('#fieldDesc_'+elementName).val();
					if( lblName !== undefined  && descName !== undefined){
						helpFor.push({"label": lblName, "description": descName});
					}					
				}				
				pages.push({"name":pageName, "descrption": pageDesc, "helpFor": helpFor});
				storeObject.pages =pages;

				var ref = firebase.database().ref(applicationName);
				ref.once('value').then(function(snapshot)
				{
					var obj=snapshot.val();
					//check if application created or not if created the create or update 
					if(obj==null || obj== undefined){
						// create
						ref.set(storeObject);
					}else
					{
						// update
							obj.name=storeObject.name;
							if(obj.pages!=null)
							{
								// check page by page for help and page discription 
								var pageFound = false;
								for (var i = obj.pages.length - 1; i >= 0; i--)
								 {
										var page = obj.pages[i];
										if(page.name==pages[0].name)
										{
											page.descrption =pages[0].descrption;

													if(helpFor!=null)
													{
														for (var j = helpFor.length - 1; j >= 0; j--)
														 {
															var newHelp = helpFor[j];
															var found = false;
															for (var k = page.helpFor.length - 1; k >= 0; k--)
															 {
																var oldHelp = page.helpFor[k];
																if(oldHelp.label ==newHelp.label)
																{
																	page.helpFor[k] = newHelp;
																	found = true;
																	break;
																}

															 }
															 if(!found){
															 	page.helpFor.push(newHelp);

															 }
														 }
													}
											pageFound = true;
											break;
										}
								}
								if (!pageFound) {
									obj.pages.push(pages[0]);
								}
							}
							else
							{
								obj.pages =pages;
							}
						ref.update(obj);	
					}
					
					console.log("what i have",snapshot.val());
				});
					
				

				console.log(storeObject);	

				resetAllEditor();
			}
			
			function closeHelpDetails(){
				resetAllEditor();
			}
			
			function resetAllEditor() {
				$('#pageName, #pageDescription, #labelName, #labelDescription, #applicationName, #applicationUrl, #applicationNameFB, #pageNameFB, #feedbackDescription').val("");
				
				for(var i = 65; i< 75; i++){
					var elementName = String.fromCharCode(i).toLowerCase();
					var lblName = $('#field_'+elementName).val();
					var descName = $('#fieldDesc_'+elementName).val();
					if( lblName !== undefined  && descName !== undefined){
						$('#field_'+elementName).val("");
						$('#fieldDesc_'+elementName).val("");
						
						// Remove the newly added elements from the DOM
						$('#field_'+elementName).parent('div').parent('div').remove();
						$('#fieldDesc_'+elementName).parent('div').parent('div').remove();

					}					
				}					
			};
			
			function addHelpDetails(){
				var fieldElementName = String.fromCharCode(elementName);
				var eleName = String.fromCharCode(elementName).toLowerCase();				
				
				var wrapper = $('#helpForm');
				var fieldHTML = '<div class="form-group">' + 
									'<label for="field_'+eleName+'" class="col-sm-2 control-label">Field '+ fieldElementName +'</label>' + 
										'<div class="col-sm-10">' + 
											'<input type="text" class="form-control" id="field_'+eleName+'" placeholder="Field Name">' + 
										'</div>' + 
								'</div>' + 
								'<div class="form-group">' + 
									'<label for="fieldDesc_'+eleName+'" class="col-sm-2 control-label">Description '+ fieldElementName +'</label>' + 
										'<div class="col-sm-10">' + 
											'<textarea class="form-control" rows="3" id="fieldDesc_'+eleName+'" placeholder="Field Description"></textarea>' + 
										'</div>' + 
								'</div>';
				$(wrapper).append(fieldHTML); // Add field html				
				elementName = elementName + 1;				
			}
	
			// To Save Customer feedback
			function saveFeedBackDetails(){				
				var applicationName =$('#applicationNameFB').val();
				var pageName = $('#pageNameFB').val();
				var comments = $('#feedbackDescription').val();


				var storeObject ={"appName":'',"name":'',"pages":[]};
				storeObject.appName =applicationName;
				var customerFeedback ={'developercomment' :'','notes':comments,'screenshot':''};
								
			

				var ref = firebase.database().ref(applicationName);
				ref.once('value').then(function(snapshot)
				{
					var obj=snapshot.val();
					//check if application created or not if created the create or update 
					if(obj==null || obj== undefined){
						// create
						return;
					}else
					{
						// update
							if(obj.pages!=null)
							{
								// check page by page for help and page discription 
								var pageFound = false;
								for (var i = obj.pages.length - 1; i >= 0; i--)
								 {
										var page = obj.pages[i];
										if(page.name==pageName)
										{
											page.customerFeedback =customerFeedback;

											pageFound = true;
											break;
										}
								}
								
							}
						if(pageFound){
							ref.update(obj);		
						}else{
							console.log("page Not found");
						}							
						
					}
					
					console.log("what i have",snapshot.val());
				});
					
				
				resetAllEditor();
			}
			
			function closeFeedBackDetails(){				
				resetAllEditor();
			}

			function getApplicationHelp(){

				var applicationName =$('#applicationName').val();
				var pageName = $('#pageName').val();

				if(pageName!='' && applicationName!='' ){
					var ref = firebase.database().ref(applicationName);
						ref.once('value').then(function(snapshot){
							var obj=snapshot.val();
							if(obj!= null && obj!= undefined){
								console.log("The Returned Object : " + obj);
								
								$('#applicationName').val(obj.appName);
								$('#applicationUrl').val(obj.name);
								if(obj.pages != null){
									
									for(var i = 0 ; i < obj.pages.length; i++){
										if(pageName === obj.pages[i].name){
											$('#pageName').val(obj.pages[i].name);
											$('#pageDescription').val(obj.pages[i].descrption);
											
											var helpFor = obj.pages[i].helpFor;
											if(helpFor != null){
												$('#labelName').val(helpFor[0].label);
												$('#labelDescription').val(helpFor[0].description);
												
												for(var j = 1; j< helpFor.length; j++){
													var eleName = String.fromCharCode(elementName).toLowerCase();
													addHelpDetails();
													$('#field_'+eleName).val(helpFor[j].label);
													$('#fieldDesc_'+eleName).val(helpFor[j].description);
												}
											}											
										}
									}									
								}
								
							}else{
								return false;
							}
					});
				}
				return false;
			}