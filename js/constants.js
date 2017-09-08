// Philips 
var MB_OK = 0x00000000;
var MB_OKCANCEL = 0x00000001;
var MB_ABORTRETRYIGNORE = 0x00000002;
var MB_YESNOCANCEL = 0x00000003;
var MB_YESNO = 0x00000004;
var MB_RETRYCANCEL = 0x00000005;
var MB_ICONHAND = 0x00000010;
var MB_ICONQUESTION = 0x00000020;
var MB_ICONEXCLAMATION = 0x00000030;
var MB_ICONASTERISK = 0x00000040;
var MB_ICONWARNING = MB_ICONEXCLAMATION;
var MB_ICONERROR = MB_ICONHAND;
var MB_ICONINFORMATION = MB_ICONASTERISK;
var MB_ICONSTOP = MB_ICONHAND;

// Philips API Specific
var BY_EXAM = "0";
var BY_EXCEPTION = "1";
var QUERY_INFO = {
    "0": { queryString: "IDXIntExamID=", type: "LOOKUP", optional: 1 },
    "1": { queryString: "IDXIntExceptionID=", type: "EXCEPTION", optional: 1 }
};
var ELEMENT_WINDOW_INFO = "WindowInfo";
var ELEMENT_EXAM = "Exam";
var ELEMENT_SHELF_STATUS = "ShelfStatus";

//  API Specific  
var APPLICATION_MENU_ITEM = "Documents";
var APPLICATION_BUTTON_ITEM = "Documents";
var APPLICATION_BUTTON_IMAGE = "/isite/assets/shc0.bmp";
var APPLICATION_BUTTON_TOOLTIP = "Tooltip Information";
var PUBLIC_API_KEY = "For oAuth";
var APPLICATION_ID = 10;
var UID = "";
var PWD = "";
var BASE_URI = "./Login/gateway.html?";

// General Constants
var AMP = "&";
var ERROR_NO_STUDY = "Study not found!";
var ERROR_NO_QUERY_TYPE = "No Query Type Supplied!";
var ERROR_GENERAL = "Apologies! We've encountered an error, please contact appdev@shields.com w/ the accession and following information: ";
var ERROR_WARNING_BROWSER = "Apologies! The parent browser window is attempting to close [internet explorer :-( ] please try again in five seconds!";
// DICOM Tags
var DICOM_TAG_ACCESSION = "x00080050";
var DICOM_TAG_STUDYUID = "x0020000D";


// Toolbar constnts
var WINDOW_SPECS = "toolbar=no,status=no,location=no,titlebar=no,menubar=no";
var WINDOW_NAME_MENU = "WINDOW_NAME_MENU";
var WINDOW_NAME_BUTTON = "WINDOW_NAME_BUTTON";