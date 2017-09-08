
// This method calls the ChangePassword API method. 
function ChangePassword(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.ChangePassword(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>Result: Password successfully changed.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>ChangePassword Failed. Last Error Code: " + error + "</B>";
	}
}

function Logout()
{
	var bRetVal = Radiology.Logout();
	if (bRetVal == false)
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>Logout Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the FindPatient API method. 
function FindPatient(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.FindPatient(P1, P2);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>Internal Patient ID: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>Patient Not Found. Last Error Code: " + error + "</B>";
	}
}

// This method calls the FindExam API method. 
function FindExam(P1, P2, P3)
{
	if (EmptyParams(3) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.FindExam(P1, P2, P3);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>Internal Exam ID: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>Exam Not Found. Last Error Code: " + error + "</B>";
	}
}

// This method calls the FindStudy API method. 
function FindStudy(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.FindStudy(P1);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>Internal Exam ID: "+ strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>Exam Not Found. Last Error Code: " + error + "</B>";
	}
}

// This method calls the GetReportData API method. 
function GetReportData(P1, P2)
{
  if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.GetReportData(P1, P2);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>GetReportData: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetReportData Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the SetPreference API method. 
function SetPreference(P1, P2, P3)
{
	if (EmptyParams(3) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.SetPreference(P1, P2, P3);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>SetPreference Successful.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>SetPreference Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the GetPreference API method. 
function GetPreference(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.GetPreference(P1, P2);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>GetPreference: Name = " + P1 + ",Type = " + P2 + ",Data = " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetPreference Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the ListCanvasPages API method. 
function ListCanvasPages()
{
	var strRetVal = Radiology.ListCanvasPages();
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>Canvas Page IDs: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>No Canvas Pages Found. Last Error Code: " + error + "</B>";
	}
}

// This method calls the OpenCanvasPage API method. 
function OpenCanvasPage(P1, P2, P3, P4, P5)
{
	if (P1 == "" && P2 == "")
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	if (P3 == "" ||  P4 == "" || P5 == "")
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	var strRetVal = Radiology.OpenCanvasPage(P1, P2, P3, P4, P5);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>Canvas Page ID: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>OpenCanvasPage Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the GetCanvasPageStatus API method. 
function GetCanvasPageStatus(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.GetCanvasPageStatus(P1);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>GetCanvasPageStatus: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetCanvasPage Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the CloseCanvasPage API method. 
function CloseCanvasPage(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.CloseCanvasPage(P1, P2);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>CanvasPage Close Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>CloseCanvasPage Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the ListShelfs API method. 
function ListShelfs(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.ListShelfs(P1);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>List Shelf(s):" + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>ListShelfs Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the OpenShelf API method. 
function OpenShelf(P1, P2, P3, P4)
{
	if (P1 == "" || P4 == "")
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	if (P2 == "" && P3 == "")
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	var strRetVal = Radiology.OpenShelf(P1, P2, P3, P4);
	alert(strRetVal);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>ShelfID: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>OpenShelf Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the GetShelfStatus API method. 
function GetShelfStatus(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.GetShelfStatus(P1);
	if (strRetVal != "")
	{
		alert(strRetVal);
		OutputWindowDiv.innerHTML = "<B>" + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetShelfStatus Failed. Last Error Code: " + error + "</B>";
	}
}

//This method is used to get the shelf id for an internal exam id.
function FindShelfID(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.FindShelfID(P1);
	if (strRetVal != "")
	{
		alert(strRetVal);
		OutputWindowDiv.innerHTML = "<B>Shelf IDs:" + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>FindShelfID Failed. Last Error Code: " + error + "</B>";
	}
}

//This method is used to get the canvas page ids for an internal patient id.
function FindCanvasPageID(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.FindCanvasPageID(P1);
	if (strRetVal != "")
	{
		alert(strRetVal);
		OutputWindowDiv.innerHTML = "<B>CanvasPage IDs:" + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>FindCanvasPageID Failed. Last Error Code: " + error + "</B>";
	}
}

function ListMediaExportExams()
{
	var strRetVal = Radiology.ListMediaExportExams();
	alert(strRetVal);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>List Of Media Export Exams: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>No Exam in Media Export. Last Error Code: " + error + "</B>";
	}
}


//This method is used to change the active page
// Name: Page Name
// Type: FOLDER = Folder tab, CANVAS = Canvas tab, API = API Specified tab
// Example Name: "iSite Tools\Patient Directory"
function SetActivePage(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.SetActivePage(P1, P2);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>SetActivePage Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>SetActivePage Failed. Last Error Code: " + error + "</B>";
	}
}

//This function is only available if HideFolder option is enabled.
function DisplayMediaExportPage(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.DisplayMediaExportPage(P1, P2);
	
	alert("DisplayMediaExportPage: " + bRetVal + "\tLast Error: " + Radiology.GetLastErrorCode());
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>DisplayMediaExportPage Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>DisplayMediaExportPage Failed. Last Error Code: " + error + "</B>";
	}
}

//This function changes the image displayed in the current window.  
//This function is used to change the current image for a stack window.  
//ImageUID must be one of the images in the stack otherwise, this function will fail.   
//If the specified window is not currently visible in the rack, the rack is scrolled so it is. 
function SetWindowImage(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.SetWindowImage(P1, P2);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>SetWindowImage Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>SetWindowImage Failed. Last Error Code: " + error + "</B>";
	}
}

function AddPreferencePage(P1, P2, P3)
{
	if (EmptyParams(3) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.AddPreferencePage(P1, P2, P3);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>AddPreferencePage Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddPreferencePage Failed. Last Error Code: " + error + "</B>";
	}
}

function GetStaticWindowInfo(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.GetStaticWindowInfo(P1);
	if (strRetVal != "")
	{
		alert(strRetVal);
		OutputWindowDiv.innerHTML = "<B>GetStaticWindowInfo: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetStaticWindowInfo Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the CloseShelf API method. 
function CloseShelf(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.CloseShelf(P1);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>Shelf successfully closed</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>CloseShelf Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the AddViewMenuItem API method. 
function AddViewMenuItem(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.AddViewMenuItem(P1);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>View Menu Successfully Added.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddViewMenuItem Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the RemoveViewMeuItem API method. 
function RemoveViewMenuItem(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.RemoveViewMenuItem(P1);
	if (bRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>View Menu successfully removed.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>RemoveViewMenuItem Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the InsertAfterViewMenuItem API method. 
function InsertAfterViewMenuItem(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.InsertAfterViewMenuItem(P1, P2);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>View Menu successfully added.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>InsertAfterViewMenuItem Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the AddExamMenuItem API method. 
function AddExamMenuItem(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.AddExamMenuItem(P1);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>Exam Menu Successfully Added.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddExamMenuItem Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the RemoveExamMenuItem API method. 
function RemoveExamMenuItem(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.RemoveExamMenuItem(P1);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>Exam Menu successfully removed.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>RemoveExamMenuItem Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the InsertAfterExamMenuItem API method. 
function InsertAfterExamMenuItem(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.InsertAfterExamMenuItem(P1, P2);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>Exam Menu Successfully Added.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B> error code: " + error + "</B>";
	}
}

// This method calls the AddShelfMenuItem API method. 
function AddShelfMenuItem(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.AddShelfMenuItem(P1);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>Shelf Menu Successfully Added.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddShelfMenuItem Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the RemoveShelfMenuItem API method. 
function RemoveShelfMenuItem(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.RemoveShelfMenuItem(P1);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>Shelf Menu Successfully Removed.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>RemoveShelfMenuItem Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the InsertAfterShelfMenuItem API method. 
function InsertAfterShelfMenuItem(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.InsertAfterShelfMenuItem(P1, P2);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>Shelf Menu Successfully Added.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>InsertAfterShelfMenuItem Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the CopyToClipboard API method. 
// Note: The window to copy must be visible when this method is called.  
function CopyToClipboard(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.CopyToClipboard(P1);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>CopyToClipboard Successful.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>CopyToClipboard Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the GetShelfWindowIDs API method. 
function GetShelfWindowIDs(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.GetShelfWindowIDs(P1);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>GetShelfWindowIDs: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetShelfWindowIDs Failed. Last Error Code: " + error + "</B>";
	}
}

//This function marks exam as read.
//This function must be called after successful completion of OpenCanvasPage()
//Second parameter specifies marking exam read (true) or unread (false)
function SetMarkRead(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}

  if( (P2 == "") )
	{
	  OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.SetMarkRead(P1, P2);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>SetMarkRead Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>SetMarkRead Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the GetWindowContext API method. 
function GetWindowContext(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.GetWindowContext(P1);
	if (strRetVal != "")
	{
		alert(strRetVal);
		OutputWindowDiv.innerHTML = "<B>GetWindowContext: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetWindowContext Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the GetDICOMValue API method. 
function GetDICOMValue(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var strRetVal = Radiology.GetDICOMValue(P1, P2);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>GetDICOMValue: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetDICOMValue Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the GetDICOMValue API method. 
function MessageBox(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	RetVal = Radiology.MessageBox(P1, P2);
	var outStr = "";
	switch(RetVal)
	{
				case 1:
					outStr = "1";
					break;
				case 2:
					outStr = "2";
					break;
				case 3:
					outStr = "3";
					break;
				case 4:
					outStr = "4";
					break;
				case 5:
					outStr = "5";
					break;
				case 6:
					outStr = "6";
					break;
				case 7:
					outStr = "7";
					break;
				case 8:
					outStr = "8";
					break;
				case 9:
					outStr = "9";
					break;
				default:
					outStr = "Not defined";
				  break;
	}
	if (RetVal =! 0)
	{
		OutputWindowDiv.innerHTML = "<B>" + "MessageBox Button Pushed: " + outStr +  "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>MessageBox Failed. Last Error Code: " + error + "</B>";
	}
}

// This function calls the Reset API method. 
function reset()
{
	var bRetVal = Radiology.Reset();
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>Reset Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>Reset Failed. Last Error Code: " + error + "</B>";
	}
}

// This function returns the WindowID of the currently active window.
//The currently active window is the image or thumbnail window currently under the cursor.  
//Note that if the cursor is over an image in the rack it will return the window id for that 
//image and not any of the corresponding images on the monitors or in popup windows.   
//This function will return an empty string if the cursor is moved from an image into 
//the timeline or other parts of the rack. 
//This function will always fail as coded (When you invoke it the cursor will not be
//on an Image or thumbnail 
function GetActiveWindow()
{
	var strRetVal = Radiology.GetActiveWindow();
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>Active WindowID: " + strRetVal +  "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetActiveWindow Failed. Last Error Code: " + error + "</B>";
	}
}

// This method is used to enable the preference apply button for plug in preferences
// This method should be called from a page added by the AddPreferencePage method only
function EnablePreferenceApplyButton()
{
	var bRetVal = Radiology.EnablePreferenceApplyButton();
	alert(bRetVal);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>Enable Preference Apply Button Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>EnablePreferenceApplyButton Failed. Last Error Code: " + error + "</B>";
	}
}

// This function will return the current user logged in.
function GetCurrentUser()
{
	var strRetVal = Radiology.GetCurrentUser();
	if (strRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>Current User = " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetCurrentUser Failed. Last Error Code: " + error + "</B>";
	}
}

//This event is fired when the user selects a menu item added with the AddExamMenuItem.  
function Radiology_EventExamMenuSelected(MenuItem, IntExamID)
{
	var eventStr = "EventExamMenuSelected: Menu Item = " + MenuItem + ",Internal Exam Id = " + IntExamID;
	alert(eventStr);
}

function GetWorkstationLocations()
{
	var strRetVal = Radiology.GetWorkstationLocations();
	alert(strRetVal);
	OutputWindowDiv.innerHTML = "<B>" + strRetVal + "</B>";
}

function GetAuthSources()
{
	var strRetVal = Radiology.GetAuthSources();
	alert(strRetVal);
	OutputWindowDiv.innerHTML = "<B>" + strRetVal + "</B>";
}

function GetCachedExams()
{
	var strRetVal = Radiology.GetCachedExams();
	alert(strRetVal);
	OutputWindowDiv.innerHTML = "<B>" + strRetVal + "</B>";
}
	
function CacheExam(P1, P2, P3)
{
	var bRetVal;
	bRetVal = Radiology.CacheExam(P1, P2, P3);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>CacheExam Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>CacheExam failed. Last Error Code: " + error + "</B>";
	}
}

function ResumeCachingExam(P1, P2)
{
	var bRetVal;
	bRetVal = Radiology.ResumeCachingExam(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>ResumeCachingExam Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>ResumeCachingExam failed. Last Error Code: " + error + "</B>";
	}
}

function CancelExamCaching(P1, P2)
{
	var bRetVal;
	bRetVal = Radiology.CancelExamCaching(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>CancelExamCaching Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>CancelExamCaching failed. Last Error Code: " + error + "</B>";
	}
}

function DeleteCachedExam(P1, P2)
{
	var bRetVal;
	bRetVal = Radiology.DeleteCachedExam(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>DeleteCachedExam Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>DeleteCachedExam failed. Last Error Code: " + error + "</B>";
	}
}

function DisableAutoLogout(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	Radiology.DisableAutoLogout(P1);

	OutputWindowDiv.innerHTML = "<B>AutoLogout Disabled = " + P1 + "</B>";

}

function ShowDebugWindow()
{
	var bRetVal;
	bRetVal = Radiology.ShowDebugWindow();
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>ShowDebugWindow Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>ShowDebugWindow failed. Last Error Code: " + error + "</B>";
	}
}

function GetFoldersAndFiltersXML(P1)
{
	strRetVal = Radiology.GetFoldersAndFiltersXML(P1);
	alert(strRetVal);
}

function GetVersion()
{
	strRetVal = Radiology.GetVersion();
	OutputWindowDiv.innerHTML = "<B>" + strRetVal + "</B>";	
}

function FindException(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter.</B>";
		return;
	}
	
	strRetVal = Radiology.FindException(P1);
	if (strRetVal == "")
	{
		error = Radiology.GetLastErrorCode();
		if (error == 0)
		{
			//No exception found for entered SUID
			OutputWindowDiv.innerHTML = "<B>No exception found for SUID: " + P1 + "</B>";	
		}
		else
		{
			OutputWindowDiv.innerHTML = "<B>FindException failed.  Last Error Code: " + error + "</B>";	
		}
	}
	else
	{
		OutputWindowDiv.innerHTML = "<B>FindException Internal Exception ID: " + strRetVal+ "</B>";	
	}
}


/* GetDICOMHeaders can not be used in Javascript.  For a VBScript example, see Radiology_Plug_In.htm file.

VBScript implementation as a comment below
	
		Sub GetDICOMHeaders(P1, P2, P3)

			strOutput = ""
			Dim length
			length = 0
    	Dim HeaderData
    	Dim i 
    	ImageData = 0
    	error = ""
			length = Radiology.GetDICOMHeaders(P1, P2, P3, HeaderData)
			If length > 0 Then
				OutputWindowDiv.innerHTML = "<B>GetDICOMHeaders Successful.  Length of DICOM Header Data: " & length & "</B>"	
			Else
				error = Radiology.GetLastErrorCode()
				OutputWindowDiv.innerHTML = "<B>GetDICOMHeaders Failed. Last Error Code: " & error & "</B>"
			End If
		
		End Sub		

*/

/* GetDICOMPixels can not be used in Javascript.  For a VBScript example, see Radiology_Plug_In.htm file.

VBScript implementation as a comment below
	
		Sub GetDICOMPixels(P1, P2, P3, P4, P5, P6, P7, P8)

			strOutput = ""
			Dim length
			length = 0
    	Dim PixelData
    	Dim i 
    	PixelData = 0
    	error = ""
			length = Radiology.GetDICOMPixels(P1, P2, P3, P4, P5, P6, P7, P8, PixelData)
			If length > 0 Then
				OutputWindowDiv.innerHTML = "<B>GetDICOMPixels Successful.  Length of DICOM Pixel Data: " & length & "</B>"	
			Else
				error = Radiology.GetLastErrorCode()
				OutputWindowDiv.innerHTML = "<B>GetDICOMPixels Failed. Last Error Code: " & error & "</B>"
			End If
		
		End Sub			

*/


/*
function GetDICOMHeaders(P1, P2, P3)
{
	if (EmptyParams(3) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter.</B>";
		return;
	}
	var junk;
	var bRetVal = Radiology.GetDICOMHeaders(P1, P2, P3);
	alert("Length = " + bRetVal.length);
}

function GetDICOMPixels(P1, P2, P3, P4, P5, P6, P7, P8)
{
	if (Param1 == "" || Param2 == "" || Param3 == "")
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter.</B>";
		return;
	}
	var bRetVal = Radiology.GetDICOMPixels(P1, P2, P3, P4, P5, P6, P7, P8);
	alert("Length = " + bRetVal.length);
		
}
*/
//This function will always fail as coded (When you invoke it the canvas page must be visible)
function ShowClinicalExamNotes(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}	
	var bRetVal = Radiology.ShowClinicalExamNotes(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>ShowClinicalExamNotes Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>ShowClinicalExamNotes failed. Last Error Code: " + error + "</B>";
	}	
}

function SetShelfDragBarColor(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}	
	var bRetVal = Radiology.SetShelfDragBarColor(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>SetShelfDragBarColor Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>SetShelfDragBarColor failed. Last Error Code: " + error + "</B>";
	}	
}

function GetDICOMValue(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	var strRetVal = Radiology.GetDICOMValue(P1, P2);
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>" + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetDICOMValue failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the DecacheImage API method. 
function DeCacheImage(P1, P2)
{
	if(EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;	
	}
	if((P1 == "") || (P2 == ""))
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;	
	}
	
	var bRetVal;
	bRetVal = Radiology.DeCacheImage(P1, P2);
	if(bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>DeCacheImage worked successfully</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>DeCacheImage  failed. Last Error Code: " + error + "</B>";
	}
}

function CopyImageDataToClipboard(P1, P2, P3, P4, P5)
{
	if(EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;	
	}
	if((P1 == "") || (P2 == ""))
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;	
	}
	
	var bRetVal;
	bRetVal = Radiology.CopyImageDataToClipboard(P1, P2, P3, P4, P5);
	if(bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>SaveImageToFile worked successfully</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>SaveImageToFile  failed. Last Error Code: " + error + "</B>";
	}

}

function GetListOfKeyImages(P1)
{
	if(EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;	
	}
	if(P1 == "") 
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;	
	}
	
	var strRetVal;
	strRetVal = Radiology.GetListOfKeyImages(P1);
	if(strRetVal != "")
	{
	    alert(strRetVal);
		OutputWindowDiv.innerHTML = "<B>Key Images " + strRetVal +"</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetListOfKeyImages  failed. Last Error Code: " + error + "</B>";
	}
}

function GetPresentationStates(P1)
{
	if(EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;	
	}
	if(P1 == "") 
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;	
	}
	
	var strRetVal;
	strRetVal = Radiology.GetPresentationStates(P1);
	if(strRetVal != "")
	{
	    alert(strRetVal);
		OutputWindowDiv.innerHTML = "<B>Presentation States " + strRetVal +"</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetPresentationStates  failed. Last Error Code: " + error + "</B>";
	}

}

/*
 * function GetDICOMInstance implemented in iSite_Plug_In.htm 
 * in VBScript portion.
 */

function SetShelfURL(P1, P2, P3)
{
	if (EmptyParams(3) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}	
	var bRetVal = Radiology.SetShelfURL(P1, P2, P3);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>SetShelfURL Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>SetShelfURL failed. Last Error Code: " + error + "</B>";
	}	
}

function AddViewSubMenu(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.AddViewSubMenu(P1);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>AddViewSubMenu Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddViewSubMenu failed. Last Error Code: " + error + "</B>";
	}		
}

function AddViewSubMenuItem(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.AddViewSubMenuItem(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>AddViewSubMenuItem Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddViewSubMenuItem failed. Last Error Code: " + error + "</B>";
	}	
}

function InsertAfterViewSubMenu(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.InsertAfterViewSubMenu(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>InsertAfterViewSubMenu Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>InsertAfterViewSubMenu failed. Last Error Code: " + error + "</B>";
	}	
}

function InsertAfterViewSubMenuItem(P1, P2, P3)
{
	if (EmptyParams(3) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.InsertAfterViewSubMenuItem(P1, P2, P3);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>InsertAfterViewSubMenuItem Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>InsertAfterViewSubMenuItem failed. Last Error Code: " + error + "</B>";
	}		
}

function AddExamSubMenu(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.AddExamSubMenu(P1);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>AddExamSubMenu Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddExamSubMenu failed. Last Error Code: " + error + "</B>";
	}		
}

function AddExamSubMenuItem(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.AddExamSubMenuItem(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>AddExamSubMenuItem Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddExamSubMenuItem failed. Last Error Code: " + error + "</B>";
	}	
}

function InsertAfterExamSubMenu(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.InsertAfterExamSubMenu(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>InsertAfterExamSubMenu Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>InsertAfterExamSubMenu failed. Last Error Code: " + error + "</B>";
	}	
}

function InsertAfterExamSubMenuItem(P1, P2, P3)
{
	if (EmptyParams(3) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.InsertAfterExamSubMenuItem(P1, P2, P3);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>InsertAfterExamSubMenuItem Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>InsertAfterExamSubMenuItem failed. Last Error Code: " + error + "</B>";
	}		
}

function AddShelfSubMenu(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.AddShelfSubMenu(P1);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>AddShelfSubMenu Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddShelfSubMenu failed. Last Error Code: " + error + "</B>";
	}		
}

function AddShelfSubMenuItem(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.AddShelfSubMenuItem(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>AddShelfSubMenuItem Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddShelfSubMenuItem failed. Last Error Code: " + error + "</B>";
	}	
}

function InsertAfterShelfSubMenu(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.InsertAfterShelfSubMenu(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>InsertAfterShelfSubMenu Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>InsertAfterShelfSubMenu failed. Last Error Code: " + error + "</B>";
	}	
}

function InsertAfterShelfSubMenuItem(P1, P2, P3)
{
	if (EmptyParams(3) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.InsertAfterShelfSubMenuItem(P1, P2, P3);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>InsertAfterShelfSubMenuItem Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>InsertAfterShelfSubMenuItem failed. Last Error Code: " + error + "</B>";
	}		
}

function AddTimelineMenuItem(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.AddTimelineMenuItem(P1);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>AddTimelineMenuItem Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddTimelineMenuItem failed. Last Error Code: " + error + "</B>";
	}		
}

function InsertAfterTimelineMenuItem(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.InsertAfterTimelineMenuItem(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>InsertAfterTimelineMenuItem Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>InsertAfterTimelineMenuItem failed. Last Error Code: " + error + "</B>";
	}	
}

function AddTimelineSubMenu(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.AddTimelineSubMenu(P1);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>AddTimelineSubMenu Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddTimelineSubMenu failed. Last Error Code: " + error + "</B>";
	}		
}

function AddTimelineSubMenuItem(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.AddTimelineSubMenuItem(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>AddTimelineSubMenuItem Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddTimelineSubMenuItem failed. Last Error Code: " + error + "</B>";
	}	
}

function InsertAfterTimelineSubMenu(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.InsertAfterTimelineSubMenu(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>InsertAfterTimelineSubMenu Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>InsertAfterTimelineSubMenu failed. Last Error Code: " + error + "</B>";
	}	
}

function InsertAfterTimelineSubMenuItem(P1, P2, P3)
{
	if (EmptyParams(3) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.InsertAfterTimelineSubMenuItem(P1, P2, P3);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>InsertAfterTimelineSubMenuItem Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>InsertAfterTimelineSubMenuItem failed. Last Error Code: " + error + "</B>";
	}		
}

function RemoveTimelineMenuItem(P1)
{
		if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.RemoveTimelineMenuItem(P1);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>RemoveTimelineMenuItem Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>RemoveTimelineMenuItem failed. Last Error Code: " + error + "</B>";
	}
}

function AddShelfButton(P1, P2, P3, P4)
{
	if (EmptyParams(3) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.AddShelfButton(P1, P2, P3, P4);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>AddShelfButton Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>AddShelfButton failed. Last Error Code: " + error + "</B>";
	}
}

//Preference Types: USER, SYSTEM, MACHINE
//Preference Type is currently ignored.
//This function will only operate if client is in IDXMode
//The default preference dialog is displayed with all 3 preference types
function ShowPreferenceDialog()
{
	var bRetVal = Radiology.ShowPreferenceDialog();
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>ShowPrefernceDialog Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>ShowPrefernceDialog failed. Last Error Code: " + error + "</B>";
	}	
}

function DisplayiExportQueue()
{
	var bRetVal = Radiology.DisplayiExportQueue();
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>DisplayiExportQueue Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>DisplayiExportQueue failed. Last Error Code: " + error + "</B>";
	}	
}

//URL parameter must match the URL specified in the plugin preferences
function SetPluginVersion(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	Radiology.SetPluginVersion(P1, P2);
}

function CopyImageToClipboard(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.CopyImageToClipboard(P1);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>CopyImageToClipboard Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>CopyImageToClipboard failed. Last Error Code: " + error + "</B>";
	}		
}

//Type parameter takes one of the following integers
//(0=RawDICOM, 1=Technologist, 2=Radiologist, 3=PreRead,4=User)
function SavePresentationState(P1, P2, P3)
{
	if (EmptyParams(3) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	if (isNaN(parseInt(P3)) || P3<0 || P3>4)
	{
		alert("Third Parameter must be of type int, corresponding to a Presentation State Type.\n\n" +
					"Valid Presentation State Types are:\n" + 
					"0 : RawDICOM\n" + 
					"1 : Technologist\n" +
					"2 : Radiologist\n" + 
					"3 : PreRead\n" + 
					"4 : User");
		return;
	}

	var strRetVal = Radiology.SavePresentationState(P1, P2, P3);
	if (strRetVal != "" )
	{
		OutputWindowDiv.innerHTML = "<B>SavePresentationState Successful: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>SavePresentationState failed. Last Error Code: " + error + "</B>";
	}		
}

function LoadPresentationState(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.LoadPresentationState(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>LoadPresentationState Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>LoadPresentationState failed. Last Error Code: " + error + "</B>";
	}		
}

function DeleteAnnotation(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.DeleteAnnotation(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>DeleteAnnotation Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>DeleteAnnotation failed. Last Error Code: " + error + "</B>";
	}	
}

function WriteDICOMInstance(P1, P2, P3)
{
	if (EmptyParams(arguments.length) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.WriteDICOMInstance(P1, P2, P3);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>WriteDICOMInstance Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>WriteDICOMInstance failed. Last Error Code: " + error + "</B>";
	}		
}

function CopyImageToPicture(P1, P2, P3, P4, P5)
{
	if (EmptyParams(5) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var myIPic = "";
	
	myIPic = Radiology.CopyImageToPicture( P1, P2, P3, P4, P5 );
	try
	{
		if (myIPic != "" )
		{
			OutputWindowDiv.innerHTML = "<B>CopyImageToPicture Successful. IPicture.Handle = " + myIPic.Handle + "</B>";
		}
		else
		{
			var error = Radiology.GetLastErrorCode();
			OutputWindowDiv.innerHTML = "<B>CopyImageToPicture failed. Last Error Code: " + error + "</B>";
		}
	}		
	catch(e)
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>CopyImageToPicture failed. Last Error Code: " + error + "</B>";
	}	
}

function CopyWindowToPicture(P1, P2, P3, P4, P5)
{
	if (EmptyParams(5) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var myIPic = "";
	
	myIPic = Radiology.CopyWindowToPicture( P1, P2, P3, P4, P5 );
	try
	{
		if (myIPic != "" )
		{
			OutputWindowDiv.innerHTML = "<B>CopyWindowToPicture Successful. IPicture.Handle = " + myIPic.Handle + "</B>";
		}
		else
		{
			var error = Radiology.GetLastErrorCode();
			OutputWindowDiv.innerHTML = "<B>CopyWindowToPicture failed. Last Error Code: " + error + "</B>";
		}
	}		
	catch(e)
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>CopyWindowToPicture failed. Last Error Code: " + error + "</B>";
	}	
}


function SetWindowView(P1, P2, P3, P4, P5, P6)
{
	if (EmptyParams(arguments.length) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.SetWindowView(P1, P2, P3, P4, P5, P6);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>SetWindowView Successful.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>SetWindowView failed. Last Error Code: " + error + "</B>";
	}		
	
}

//This function marks exam as read.
//Second parameter specifies marking exam read (true) or unread (false)
function MarkExamRead(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}

	var bRetVal = Radiology.MarkExamRead(P1);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>MarkExamRead Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>MarkExamRead Failed. Last Error Code: " + error + "</B>";
	}
}

function ShowiQueryWindow(P1)
{
	if (EmptyParams(arguments.length) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}		
	var bRetVal = Radiology.ShowiQueryWindow(P1);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>ShowiQueryWindow Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>ShowiQueryWindow failed. Last Error Code: " + error + "</B>";
	}	
}

function CreatePopup(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}	
	var strRetVal = Radiology.CreatePopup(P1);
	if (strRetVal != "")
	{
		alert("WindowID: " + strRetVal);
		OutputWindowDiv.innerHTML = "<B>WindowID: " + strRetVal + "</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>CreatePopup failed. Last Error Code: " + error + "</B>";
	}
}

function DestroyPopup(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}	
	var bRetVal = Radiology.DestroyPopup(P1);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>DestroyPopup Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>DestroyPopup failed. Last Error Code: " + error + "</B>";
	}
}

function LockExam(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.LockExam(P1, P2);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>Lock/Unlock Exam Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>LockExam Failed. Last Error Code: " + error + "</B>";
	}
}


function GetAvailableLanguages()
{
	var strRetVal = Radiology.GetAvailableLanguages();
	if (strRetVal != "")
	{
		OutputWindowDiv.innerHTML = "<B>GetAvailableLanguages succeeded.</B>";
	    alert(strRetVal);
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>GetAvailableLanguages Failed. Last Error Code: " + error + "</B>";
	}
}

function SetLanguage(P1)
{
	if (EmptyParams(1) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter.</B>";
		return;
	}
	
	var bRetVal = Radiology.SetLanguage(P1);
	if (bRetVal != false)
	{
		OutputWindowDiv.innerHTML = "<B>SetLanguage Successful</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>SetLanguage Failed. Last Error Code: " + error + "</B>";
	}
}

// This method calls the DeCacheImage API method. 
function DeCacheImage(P1, P2)
{
	if (EmptyParams(2) == true)
	{
		OutputWindowDiv.innerHTML = "<B>Unexpected empty parameter(s).</B>";
		return;
	}
	
	var bRetVal = Radiology.DeCacheImage(P1, P2);
	if (bRetVal == true)
	{
		OutputWindowDiv.innerHTML = "<B>Result: DeCacheImage worked successfully.</B>";
	}
	else
	{
		var error = Radiology.GetLastErrorCode();
		OutputWindowDiv.innerHTML = "<B>DeCacheImage Failed. Last Error Code: " + error + "</B>";
	}
}

// This event is fired when the user selects a menu item added with the AddShelfMenuItem.  
function Radiology_EventShelfMenuSelected(MenuItem, CanvasPageID, ShelfID)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventShelfMenuSelected: Menu Item = " + MenuItem + ",CanvasPage Id = " + CanvasPageID + ",Shelf Id = " + ShelfID;
	alert(eventStr);
}

//This event is fired when the user selects a menu item added with the AddViewMenuItem.  
function Radiology_EventViewMenuSelected(MenuItem, ContextRecord)
{
	
	if (!eventEnable.checked) return;
	var eventStr = "EventViewMenuSelected: Menu Item = " + MenuItem + ",ContextRecord = \n" + ContextRecord;
	alert(eventStr);
}

//This event is fired after a shelf has been loaded.
function Radiology_EventShelfLoaded(CanvasPageID, ShelfID)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventShelfLoaded: CanvasPage Id = " + CanvasPageID + ",Shelf Id = " + ShelfID;
	alert(eventStr);
}

//This event is fired after a shelf exam has been closed.
function Radiology_EventShelfClosed(CanvasPageID, ShelfID)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventShelfClosed: CanvasPage Id = " + CanvasPageID + ",Shelf Id = " + ShelfID;
	alert(eventStr);
}

//This event is fired when new images are added to a shelf
function Radiology_EventNewImagesArrived(CanvasPageID, ShelfID,  updWndsXML, newWndsXML )
{
	if (!eventEnable.checked) return;
	var eventStr = "EventNewImagesArrived: CanvasPage Id = " + CanvasPageID + ",Shelf Id = " + ShelfID + " Updated Windows XML = \n" + updWndsXML + "New Windows XML = \n" + newWndsXML;
	alert(eventStr);
}

//This event is fired when the user clicks the "MarkExamRead" button.  
//This event will only be fired if the Options property has the EnableFireExamMarkedReadEvent included.
function Radiology_EventExamMarkedRead(IntExamID)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventExamMarkedRead: Internal Exam ID = " + IntExamID;
	alert(eventStr);
}

//This event is fired when a canvas page is created.
function Radiology_EventCanvasPageCreated(CanvasPageID)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventCanvasPageCreated: CanvasPage ID = " + CanvasPageID;
	alert(eventStr);
}

//This event is fired when the user has closed a canvas page.
function Radiology_EventCanvasPageClosed(CanvasPageID)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventCanvasPageClosed: CanvasPage ID = " + CanvasPageID;
	alert(eventStr);
}

//This event is fired when the user logs out or if the application logs out after the idle timeout has been reached.
function Radiology_EventLogout(AutoLogoutFlag)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventLogout: AutoLogout Flag = " + AutoLogoutFlag;
	alert(eventStr);
}

//This event is fired when a folder page visibilty changes
function Radiology_EventPageStatus(PageName, PageType, Visible)
{
	return;
	//Comment out the line above to enable this event.  This event fires often.
	if (!eventEnable.checked) return;
	var eventStr = "EventPageStatus: Page = " + PageName + ",Type = " + PageType + ",Visible Flag = " + Visible;
	alert(eventStr);
}


//This event is fired when the preferences have been written to the server.
function Radiology_EventPreferencesApplied()
{
	if (!eventEnable.checked) return;
	var eventStr = "EventPreferencesApplied";
	alert(eventStr);
}

//This event is fired when the preferences dialog Apply button is pressed, which allows validate before the preferences are written.
function Radiology_EventPreferencesApply(PreferencePageName, PreferenceType)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventPreferencesApply: Page Name = " + PreferencePageName + ",Preference Type = " + PreferenceType;
	alert(eventStr);
}

// This event is fired when user start the Media Export operation
function Radiology_EventMediaExportStarted(dirName)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventMediaExportStarted: Output Dir = " + dirName;
	alert(eventStr);
}

// This event is fired when user start the Media Export operation
function Radiology_EventMediaExportCancelled()
{
	if (!eventEnable.checked) return;
	var eventStr = "EventMediaExportCancelled";
	alert(eventStr);
}

// This event is fired when user start the Media Export operation
function Radiology_EventMediaExportError(errCode, errDesc)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventMediaExportError, Error Code = " + errCode + ",Error Description = " + errDesc;
	alert(eventStr);
}

// This event is fired when user start the Media Export operation
function Radiology_EventMediaExportComplete()
{
	if (!eventEnable.checked) return;
	var eventStr = "EventMediaExportCompleted";
	alert(eventStr);
}

// This event is fired when a user selects an exam menu that was added through the API.
function Radiology_EventExamMenuSelected(menuName, examKey)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventExamMenuSelected.\nMenuName: " + menuName + "\nExamKey: " + examKey;
	alert(eventStr);	
}

// This event is fired when the user opens the report window in an exam.
// This event only fires if Clinical exam notes are disabled and IDXModeX is enabled.
// This can be done through Options 'DisableClinicalExamNotes' and 'IDXModeX'
function Radiology_EventReportButtonClicked(studyInfo)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventReportButtonClicked.\nStudyInfo: " + studyInfo;
	alert(eventStr);
}


// This event is fired when the user closes the report window in an exam.
// This event only fires if Clinical exam notes are disabled and IDXModeX is enabled.
// This can be done through Options 'DisableClinicalExamNotes' and 'IDXModeX'
function Radiology_EventReportClosed(examID)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventReportClosed.\nExamID: " + examID;
	alert(eventStr);
}

// This event is fired when the user selects a shelf button added with the AddShelfButton command.
function Radiology_EventShelfButton(buttonID, shelfID)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventShelfButton.\nButtonID: " + buttonID + "\nShelfID: " + shelfID;
	alert(eventStr);
}

// This event is fired when the user selects a Timeline menu added through the API.
function Radiology_EventTimelineMenuSelected(menuName, examKey)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventTimelineMEnuSelected.\nMenuName: "+ menuName + "\nExamKey: " + examKey;
	alert(eventStr);
}

// This event is fired when the user clicks on the Help button on the preferences page.
// This event is only enabled if 'IDXModeX' option is set.
function Radiology_EventPreferenceHelp()
{
	if (!eventEnable.checked) return;
	var eventStr = "EventPreferenceHelp";
	alert(eventStr);
}

// This event is fired when the MediaExportPage is closed.
// This event only fires if the 'HideFolder' option is set.
function Radiology_EventMediaExportPageClosed()
{
	if (!eventEnable.checked) return;
	var eventStr = "EventMediaExportPageClosed";
	alert(eventStr);
}

// This event is fired when an image Annotation is created.
function Radiology_EventAnnotationCreated(pageID, shelfID, windowID, studyID, seriesID, imageID, toolType, token, strXML)
{
	if (!eventAnnotationEnable.checked) return;
	var eventStr = 	"\nEventAnnotationCreated\nPageID: " + pageID + 
									"\nShelfID: " + shelfID + 
									"\nWindowID: " + windowID +
									"\nStudyID: " + studyID +
									"\nSeriesID: " + seriesID +
									"\nImageID: " + imageID +
									"\nToolType: " + toolType +
									"\nToken: " + token +
									"\nXML: \n" + strXML + "\n";
	AnnotationEventOutput.value += eventStr
}
// This event is fired when an image Annotation is modified.
function Radiology_EventAnnotationModified(pageID, shelfID, windowID, studyID, seriesID, imageID, toolType, token, strXML)
{
	if (!eventAnnotationEnable.checked) return;
	var eventStr = 	"\nEventAnnotationModified\nPageID: " + pageID + 
									"\nShelfID: " + shelfID + 
									"\nWindowID: " + windowID +
									"\nStudyID: " + studyID +
									"\nSeriesID: " + seriesID +
									"\nImageID: " + imageID +
									"\nToolType: " + toolType +
									"\nToken: " + token +
									"\nXML: \n" + strXML + "\n";
	
	AnnotationEventOutput.value += eventStr;
}

// This event is fired when an image Annotation is deleted.
function Radiology_EventAnnotationDeleted(pageID, shelfID, windowID, studyID, seriesID, imageID, toolType, token, strXML)
{
	if (!eventAnnotationEnable.checked) return;
	var eventStr = 	"\nEventAnnotationDeleted\nPageID: " + pageID + 
									"\nShelfID: " + shelfID + 
									"\nWindowID: " + windowID +
									"\nStudyID: " + studyID +
									"\nSeriesID: " + seriesID +
									"\nImageID: " + imageID +
									"\nToolType: " + toolType +
									"\nToken: " + token +
									"\nXML: \n" + strXML + "\n";
	AnnotationEventOutput.value += eventStr;
}

// This event is fired when a presentation state is saved.
function Radiology_EventPresentationStateSaved(canvasPageID, shelfID, psID)
{
	if (!eventEnable.checked) return;
	var eventStr = 	"EventPresentationStateSaved." +
									"\nCanvasPageID: " + canvasPageID +
									"\nShelfID: " + shelfID +
									"\nPS ID: " + psID;
	alert(eventStr);
}

// This event is fired when a presentation state is loaded to a shelf.
function Radiology_EventPresentationStateLoaded(canvasPageID, shelfID, psID)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventPresentationStateLoaded." +
									"\nCanvasPageID: " + canvasPageID +
									"\nShelfID: " + shelfID +
									"\nPS ID: " + psID;	
	alert(eventStr);
}

// This event is fired when an item is added to the local cache list but before download has begun.
function Radiology_EventCacheItemAdded(IntExamID, IntExcID)
{
	if (!eventEnable.checked) return;
	var eventStr = 	"EventCacheItemAdded."
									"\nIntExamID: " + IntExamID +
									"\nIntExcID:  " + IntExcID;
	alert(eventStr);
}


// This event is fired when an item is deleted from the local cache.
function Radiology_EventCacheItemDeleted(IntExamID, IntExcID)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventCacheItemDeleted" +
									"\nIntExamID: " + IntExamID +
									"\nIntExcID:  " + IntExcID;
	alert(eventStr);
}

// This event is fired when an error occurs when caching an exam locally.
function Radiology_EventCacheItemError(IntExamID, IntExcID, ErrorMsg)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventCacheItemError" +
									"\nIntExamID: " + IntExamID +
									"\nIntExcID:  " + IntExcID +
									"\nMsg: " + ErrorMsg;
	alert(eventStr);
}

// This event is fired when an exam has finished caching to the local client machine.
function Radiology_EventCacheItemComplete(IntExamID, IntExcID)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventCacheItemComplete" +
									"\nIntExamID: " + IntExamID +
									"\nIntExcID:  " + IntExcID;
	alert(eventStr);
}

// This event is fired when an image window is created.
function Radiology_EventImageWindowCreated(canvasPageID, shelfID, windowID, studyUID, seriesUID, imageUID, windowType)
{
	if (!eventEnable.checked) return;
	var eventStr = "EventImageWindowCreated." +
									"\ncanvasPageID: " + canvasPageID +
									"\nshelfID: " + shelfID +	
									"\nwindowID: " + windowID +	
									"\nstudyUID: " + studyUID +	
									"\nseriesUID: " + seriesUID +	
									"\nimageUID: " + imageUID +	
									"\nwindowType: " + windowType;
	alert(eventStr);
}


function EmptyParams(TestNum)
{
	if (Param1 == "" && 
		TestNum == 1)
	{
		return true;
	}
	else if (Param1 == "" && 
				Param2 == "" && 
				TestNum == 2)
	{
		return true;
	}
	else if (Param1 == "" && 
				Param2 == "" && 
				Param3 == "" && 
				TestNum == 3)
	{
		return true;
	}
	else if (Param1 == "" && 
				Param2 == "" && 
				Param3 == "" && 
				Param4 == "" && 
				TestNum == 4)
	{
		return true;
	}
	else if (Param1 == "" && 
				Param2 == "" && 
				Param3 == "" && 
				Param4 == "" && 
				Param5 == "" && 
				TestNum == 5)
	{
		return true;
	}
	else if (Param1 == "" && 
				Param2 == "" && 
				Param3 == "" && 
				Param4 == "" && 
				Param5 == "" && 
				Param6 == "" && 
				TestNum == 6)
	{
		return true;
	}
	else if (Param1 == "" && 
				Param2 == "" && 
				Param3 == "" && 
				Param4 == "" && 
				Param5 == "" && 
				Param6 == "" && 
				Param7 == "" && 
				TestNum == 7)
	{
		return true;
	}
	else if (Param1 == "" && 
				Param2 == "" && 
				Param3 == "" && 
				Param4 == "" && 
				Param5 == "" && 
				Param6 == "" && 
				Param7 == "" && 
				Param8 == "" && 				
				TestNum == 8)
	{
		return true;
	}	
	
	return false;
}