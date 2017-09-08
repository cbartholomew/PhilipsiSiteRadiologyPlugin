//Javascript source code

//Array for populating the query and queryEx exam dropdown controls.
var QueryColumns = new Array();
QueryColumns[0] =  ["x00100010", "(Patient Name)"];                                    
QueryColumns[1] =  ["x00100020", "(Patient ID or MRN)"];                               
QueryColumns[2] =  ["x00100030", "(Patient's Birth Date)"];                            
QueryColumns[3] =  ["x00100040", "(Patient's Sex)"];                                   
QueryColumns[4] =  ["StudyDTTM", "(Exam Date and Time)"];                              
QueryColumns[5] =  ["x00080050", "(Accession Number)"];                                
QueryColumns[6] =  ["x00080090", "(Referring Physician's Name)"];                      
QueryColumns[7] =  ["x00180015", "(Body Part Examined)"];                              
QueryColumns[8] =  ["x00080060", "(Modality)"];                                        
QueryColumns[9] =  ["x00081032_1", "(Procedure Code)"];                                
QueryColumns[10] = ["x00081032_2", "(Procedure Description)"];                         
QueryColumns[11] = ["x00081080", "(Admitting Diagnosis Description)"];                 
QueryColumns[12] = ["IsStatExamFLAG", "('Y' if exam is stat exam)"];                   
QueryColumns[13] = ["IDXExamStatus", "(Exam Status)"];                                 
QueryColumns[14] = ["LockStatus", "(Lock Status)"];                                    
QueryColumns[15] = ["PatientLocation", "(Patient Location)"];                          
QueryColumns[16] = ["HasImagesFLAG", "('Y' == Exam Has Images)"];                      
QueryColumns[17] = ["IDXIntReferringPhysID", "(Unique Referring Physician ID)"];       
QueryColumns[18] = ["IDXIntPatientID", "(Unique Patient ID)"];                         
QueryColumns[19] = ["IDXIntExamID", "(Unique Exam ID)"];                               
QueryColumns[20] = ["OrganizationCode", "(The Organization Code)"];                    
QueryColumns[21] = ["SubspecialityCode", "(See SubspecialtyCode XML tag)"];            
QueryColumns[22] = ["PerformingResource", "(Name of Exam Equipment)"];                 
QueryColumns[23] = ["ExamReadFLAG", "('Y' if Exam Read)"];                             


//Array for populating the query and queryEx exception dropdown controls.                                           
var QueryExcColumns = new Array();                       
QueryExcColumns[0]  = ["x00100010", "(Patient Name)"];                                         
QueryExcColumns[1]  = ["x00100020", "(Patient ID or MRN)"];                
QueryExcColumns[2]  = ["x00100030", "(Patient's Birth Date)"];             
QueryExcColumns[3]  = ["x00100040", "(Patient's Sex)"];                    
QueryExcColumns[4]  = ["x0020000D", "(Study Instance UID)"];               
QueryExcColumns[5]  = ["StudyDTTM", "(Exam Date and Time)"];               
QueryExcColumns[6]  = ["x00080050", "(Accession Number)"];                 
QueryExcColumns[7]  = ["x00081030", "(Study Description)"];                
QueryExcColumns[8]  = ["x00180015", "(Body Part Examined)"];               
QueryExcColumns[9]  = ["x00080060", "(Modality)"];                         
QueryExcColumns[10] = ["x00081032_1", "(Procedure Code)"];                 
QueryExcColumns[11] = ["PerformingResource", "(Name of Exam Equipment)"];  
QueryExcColumns[12] = ["x00081032_2", "(Procedure Description)"];               
QueryExcColumns[13] = ["IDXIntExceptionID", "(Unique Exception ID)"];       
              


//Array for populating the method select dropdown control.
//First item in each entry corresponds to the method call in the GetSelection() and Invoke() switch statements
var MSi=0;
var MethodSelect = new Array();
MethodSelect[MSi++] =  [0  ," - Select an iSite Radiology method - "];
MethodSelect[MSi++] =  [0  ,""];
MethodSelect[MSi++] =  [21 ,"AddExamMenuItem (adds a new menu item to the exam menu)"];
MethodSelect[MSi++] =  [75 ,"AddExamSubMenu (add a submenu to the exam context menu)"];
MethodSelect[MSi++] =  [76 ,"AddExamSubMenuItem (add a submenu item to an exam submenu)"];
MethodSelect[MSi++] =  [40 ,"AddPreferencePage (add a preference page)"];
MethodSelect[MSi++] =  [90 ,"AddShelfButton (add a custom button to the shelf)"];
MethodSelect[MSi++] =  [24 ,"AddShelfMenuItem (adds a new menu item to the shelf menu)"];
MethodSelect[MSi++] =  [79 ,"AddShelfSubMenu (add a submenu to the shelf context menu)"];
MethodSelect[MSi++] =  [80 ,"AddShelfSubMenuItem (add a submenu item to a shelf submenu)"];
MethodSelect[MSi++] =  [83 ,"AddTimelineMenuItem (adds a new menu item to the timeline menu)"];
MethodSelect[MSi++] =  [85 ,"AddTimelineSubMenu (add a submenu to the timeline context menu)"];
MethodSelect[MSi++] =  [86 ,"AddTimelineSubMenuItem (add a submenu item to a timeline submenu)"];
MethodSelect[MSi++] =  [18 ,"AddViewMenuItem (adds a new menu item to the image menu)"];
MethodSelect[MSi++] =  [71 ,"AddViewSubMenu (add a submenu to the image context menu)"];
MethodSelect[MSi++] =  [72 ,"AddViewSubMenuItem (add a submenu item to an image submenu)"];
MethodSelect[MSi++] =  [52 ,"CacheExam (cache an exam on the local client)"];
MethodSelect[MSi++] =  [54 ,"CancelExamCaching (cancel caching of an exam)"];
MethodSelect[MSi++] =  [1  ,"Change Password (for the currently logged in user)"];
MethodSelect[MSi++] =  [13 ,"CloseCanvasPage (closes the specified canvas page)"];
MethodSelect[MSi++] =  [17 ,"CloseShelf (closes the specified shelf)"];
MethodSelect[MSi++] =  [94 ,"CopyImageToClipboard (copies the image contents of a window to the clipboard)"];
MethodSelect[MSi++] =  [27 ,"CopyToClipboard (copies image to the clipboard)"];
MethodSelect[MSi++] =  [66 ,"CreatePopup (creates a popup based on the navigation Window ID)"];
MethodSelect[MSi++] =  [97 ,"DeleteAnnotation (delete an image annotation)"];
MethodSelect[MSi++] =  [55 ,"DeleteCachedExam (remove a cached exam from the local client cache)"];
MethodSelect[MSi++] =  [67 ,"DestroyPopup (destoys a popup based on the popup Window ID)"];
MethodSelect[MSi++] =  [56 ,"DisableAutoLogout (enable or disable autologout)"];
MethodSelect[MSi++] =  [92 ,"DisplayiExportQueue (opens the iExport Queue window)"];
MethodSelect[MSi++] =  [33 ,"DisplayMediaExportPage (displays the media export page)"];
MethodSelect[MSi++] =  [41 ,"EnablePreferenceApplyButton (enables the preference apply button)"];
MethodSelect[MSi++] =  [3  ,"Exists (returns the number of matching exams)"];
MethodSelect[MSi++] =  [45 ,"FindCanvasPageID (returns the canvas page IDs per the patient ID)"];
MethodSelect[MSi++] =  [5  ,"FindExam (returns the internal exam ID)"];
MethodSelect[MSi++] =  [60 ,"FindException (return the internal exam ID for an exception)"];
MethodSelect[MSi++] =  [4  ,"FindPatient (returns the internal patient ID)"];
MethodSelect[MSi++] =  [44 ,"FindShelfID (returns the shelf IDs for a given exam ID)"];
MethodSelect[MSi++] =  [6  ,"FindStudy (returns the internal exam ID for the DICOM study)"];
MethodSelect[MSi++] =  [37 ,"GetActiveWindow (returns the ID for the current window)"];
MethodSelect[MSi++] =  [50 ,"GetAuthSources (list authorization sources)"];
MethodSelect[MSi++] =  [51 ,"GetCachedExams (list cached exams)"];
MethodSelect[MSi++] =  [12 ,"GetCanvasPageStatus (returns the status for a canvas page)"];
MethodSelect[MSi++] =  [39 ,"GetCurrentUser (returns the currently logged in user)"];
MethodSelect[MSi++] =  [62 ,"GetDICOMHeaders (return DICOM header as a byte array)"];
MethodSelect[MSi++] =  [31 ,"GetDICOMInstance (retrieves DICOM instance for the window)"];
MethodSelect[MSi++] =  [63 ,"GetDICOMPixels (return pixel data for an image as an array)"];
MethodSelect[MSi++] =  [30 ,"GetDICOMValue (returns a DICOM tag from the specified window)"];
MethodSelect[MSi++] =  [58 ,"GetFoldersAndFiltersXML (list folders and user filters)"];
MethodSelect[MSi++] =  [9  ,"GetPreference (returns the user, machine, or system preference)"];
MethodSelect[MSi++] =  [7  ,"GetReportData (returns the diagnostic report for the exam)"];
MethodSelect[MSi++] =  [16 ,"GetShelfStatus (returns the status for a shelf)"];
MethodSelect[MSi++] =  [28 ,"GetShelfWindowIDs (returns a list of WindowIDs for a given shelf)"];
MethodSelect[MSi++] =  [36 ,"GetStaticWindowInfo (retrieves the static image information)"];
MethodSelect[MSi++] =  [59 ,"GetVersion (return the iSite Client version)"];
MethodSelect[MSi++] =  [29 ,"GetWindowContext (retrieves information about the specified window)"];
MethodSelect[MSi++] =  [49 ,"GetWorkstationLocations (list defined workstation locations)"];
MethodSelect[MSi++] =  [23 ,"InsertAfterExamMenuItem (add exam menu item after the specified one)"];
MethodSelect[MSi++] =  [77 ,"InsertAfterExamSubMenu (insert a submenu after an existing exam menu)"];
MethodSelect[MSi++] =  [78 ,"InsertAfterExamSubMenuItem (insert a submenu item after an existing exam submenu item)"];
MethodSelect[MSi++] =  [26 ,"InsertAfterShelfMenuItem (appends a new menu item to the shelf menu)"];
MethodSelect[MSi++] =  [81 ,"InsertAfterShelfSubMenu (insert a submenu after an existing shelf menu)"];
MethodSelect[MSi++] =  [82 ,"InsertAfterShelfSubMenuItem (insert a submenu item after an existing shelf submenu item)"];
MethodSelect[MSi++] =  [84 ,"InsertAfterTimelineMenuItem (appends a new timeline menu item)"];
MethodSelect[MSi++] =  [87 ,"InsertAfterTimelineSubMenu (insert a submenu after an existing timeline menu)"];
MethodSelect[MSi++] =  [88 ,"InsertAfterTimelineSubMenuItem (insert a submenu item after an existing timeline submenu item)"];
MethodSelect[MSi++] =  [20 ,"InsertAfterViewMenuItem (appends a new image menu item)"];
MethodSelect[MSi++] =  [73 ,"InsertAfterViewSubMenu (insert a submenu after an existing image menu)"];
MethodSelect[MSi++] =  [74 ,"InsertAfterViewSubMenuItem (insert a submenu item after an existing image submenu item)"];
MethodSelect[MSi++] =  [10 ,"ListCanvasPages (returns the IDs for the open canvas pages)"];
MethodSelect[MSi++] =  [47 ,"ListMediaExportExams (list all the exams in MediaExport Page)"];
MethodSelect[MSi++] =  [14 ,"ListShelfs (returns the loaded shelfs for a canvas page)"];
MethodSelect[MSi++] =  [96 ,"LoadPresentationState (loads a presentation state in the shelf)"];
MethodSelect[MSi++] =  [46 ,"Logout (logs the current user out)"];
MethodSelect[MSi++] =  [103,"MarkExamRead (mark an exam as read)"];
MethodSelect[MSi++] =  [42 ,"MessageBox (displays a message box)"];
MethodSelect[MSi++] =  [11 ,"OpenCanvasPage (opens an exam in a new canvas page)"];
MethodSelect[MSi++] =  [15 ,"OpenShelf (open an exam in a new shelf)"];
MethodSelect[MSi++] =  [2  ,"Query (query against exam database)"];
//MethodSelect[MSi++] =  [61 ,"QueryEx (sorted query against exam database)"];
MethodSelect[MSi++] =  [22 ,"RemoveExamMenuItem (removes a previously added exam menu item)"];
MethodSelect[MSi++] =  [25 ,"RemoveShelfMenuItem (removes a previously added shelf menu item)"];
MethodSelect[MSi++] =  [89 ,"RemoveTimelineMenuItem (removes a previously added timeline menu item)"];
MethodSelect[MSi++] =  [19 ,"RemoveViewMenuItem (removes a previously added image menu item)"];
MethodSelect[MSi++] =  [32 ,"Reset (closes all open patient tabs and returns the control to its initial state.)"];
MethodSelect[MSi++] =  [53 ,"ResumeCachingExam (resume caching an exam)"];
MethodSelect[MSi++] =  [95 ,"SavePresentationState (saves a presentation state from the shelf)"];
MethodSelect[MSi++] =  [43 ,"SetActivePage (used to change the active page)"];
MethodSelect[MSi++] =  [93 ,"SetPluginVersion (notifies iSite of a plugin's version)"];
MethodSelect[MSi++] =  [8  ,"SetPreference (for storing user, machine, or system preferences)"];
MethodSelect[MSi++] =  [38 ,"SetMarkRead (set exam Mark Read flag)"];
MethodSelect[MSi++] =  [65 ,"SetShelfDragBarColor (changes the shelf's drag bar color)"];
MethodSelect[MSi++] =  [70 ,"SetShelfURL (display a URL in a window on the shelf)"];
MethodSelect[MSi++] =  [34 ,"SetWindowImage (changes the displayed image)"];
MethodSelect[MSi++] =  [35 ,"SetWindowView (sets the windows zoom level)"];
MethodSelect[MSi++] =  [57 ,"ShowDebugWindow (open the 'About' box)"];
MethodSelect[MSi++] =  [104,"ShowiQueryWindow (Launches the iQuery Window)"];
MethodSelect[MSi++] =  [91 ,"ShowPreferenceDialog (opens the Preferences dialog)"];
MethodSelect[MSi++] =  [98 ,"WriteDICOMInstance (writes a DICOM instance to a file)"];
MethodSelect[MSi++] =  [99 ,"DeCacheImage (De-Caches the memory for a specified StudyID and ImageID)"];
MethodSelect[MSi++] =  [100, "CopyImageDataToClipboard (ShelfID, ImageID, Annotations, Overlays, JPEG) (Saves the image in a JPEG format.)"];
MethodSelect[MSi++] =  [108, "GetListOfKeyImages(ShelfID) (Obtains a list of the Key Images.)"];
MethodSelect[MSi++] =  [109, "GetPresentationStates(ShelfID) (Obtains a list of the Presentation States.)"];

function PopulateSelectList(selectList, optionArray)
{
	var newOption = "";
	selectList.length = 0;

	//check which dropdown is being populated.
	if (optionArray != MethodSelect)
	{
		for (var i=0;i<optionArray.length;i++)
		{
			selectList.options[i] = new Option(optionArray[i][0] + " " + optionArray[i][1], i);
		}
	}
	else if (optionArray == MethodSelect)
	{
		
		for (var i=0;i<optionArray.length;i++)
		{
			selectList.options[i] = new Option(optionArray[i][1], i);
		}		
	}
	selectList.options[0].selected = true;
}                                          