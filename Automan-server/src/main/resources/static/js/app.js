function convertForm(){
	
	if(validateForm()){
		var form = $('#convertEmailForm')[0];
    	var data = new FormData(form);
		$("#convertEmailBtn").prop("disabled", true);
		$("#progress").show();

	    $.ajax({
	        type: "POST",
	        enctype: 'multipart/form-data',
	        url: "/emailutils/upload-file",
	        data: data,
	        processData: false,
	        contentType: false,
	        cache: false,
	        timeout: 1000000,
	        success: function(data, textStatus, jqXHR) {
	            console.log("SUCCESS : ", data);
	            $("#convertEmailBtn").prop("disabled", false);
	            $('#convertEmailForm')[0].reset();
	            document.getElementById('uploadSuccess').style.display = '';
				// document.getElementById('uploadSuccessMsg').innerHTML = 'Email file converted successfully at location';
				$("#progress").hide();
				showData();
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	             $("#convertEmailBtn").prop("disabled", false);
	             document.getElementById('uploadError').style.display = '';
	             $("#progress").hide();
	        }
	    });
	}
}

function validateForm(){
	document.getElementById('uploadError').style.display = 'none';
	document.getElementById('uploadSuccess').style.display = 'none';
	document.getElementById('uploadSuccessMsg').innerHTML = '';
	
	var file = document.getElementById('file').value;
	var caseNumber = document.getElementById('caseNumber').value;
	console.log('Selected email file =',file);
	console.log('caseNumber =',caseNumber);
	
	if(file === null || file === undefined || file === ''){
		document.getElementById('fileError').style.display = '';
		return false;
	} else {
		document.getElementById('fileError').style.display = 'none';
	}
	
	if(caseNumber === null || caseNumber === undefined || caseNumber === ''){
		document.getElementById('locationError').style.display = '';
		return false;
	} else {
		document.getElementById('locationError').style.display = 'none';
	}
	
	return true;
}

function showForm(){
	$('#result').hide();
	$('#fileProcessForm').show();
}
function showData(){
	//console.log('emailRequestsTable=',emailRequestsTable);
	$('#emailRequestsTable').DataTable().ajax.reload(null, false);
	$('#result').show();
	$('#fileProcessForm').hide();
}
function downloadFile(fileId, fileName){

	console.log('Download file ',fileId);
	var path = '/emailutils/download?requestId='+fileId;
	console.log('path:',path); 
	fetch(path)
  	.then(resp => resp.blob())
  	.then(blob => {
    	const url = window.URL.createObjectURL(blob);
    	const a = document.createElement('a');
    	a.style.display = 'none';
    	a.href = url;
    	a.download = fileName;
    	document.body.appendChild(a);
    	a.click();
    	window.URL.revokeObjectURL(url);
  	 }).catch(() => alert('Error occured while downloading file'));
}