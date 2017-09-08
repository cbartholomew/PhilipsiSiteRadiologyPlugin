
//=================Please do not modify this section==============================
var ISITE_VERSION_3_X = "3";
var ISITE_VERSION_3_5 = "3.5";
var ISITE_VERSION_3_6 = "3.6";
var ISITE_VERSION_3_7 = "3.7";
var ISITE_VERSION_4_1 = "4.1";
var ISITE_VERSION_4_2 = "4.2";
var ISITE_VERSION_4_3 = "4.3";
var ISITE_VERSION_4_X = "4";

var ISITE_OPTION_3X = "";
var ISITE_OPTION_4X = "StentorBackEnd";




function iSiteInfo(iSiteVersion)
{
     
    iSiteInfo.prototype.iSiteVersion = iSiteVersion;
    iSiteInfo.prototype.iSiteMajorVer = new String(iSiteVersion).substr(0,1)
 
    iSiteInfo.prototype.CopyRights =  "Copyright" + String.fromCharCode(169) + " 2000 - 2004 Philips, Inc.";
  
    
    iSiteInfo.prototype.Server = function(iSyntaxServerIP)
    {
	    iSiteInfo.prototype.Server.ImageSuiteDSN = "iSite";
	    iSiteInfo.prototype.Server.AutoUpgrade = "FALSE";
	    iSiteInfo.prototype.Server.Port = "6464";
	    iSiteInfo.prototype.Server.iSyntaxServerIP = iSyntaxServerIP;
	    
	    Init();
	    
	    function Init()
	    {  
	        	          	
	        if(iSiteInfo.iSiteMajorVer == ISITE_VERSION_4_X)//4.x
	        {
	          iSiteInfo.prototype.Server.ImageSuiteURL = "http://" + iSyntaxServerIP + "/iSiteWeb/WorkList/PrimaryWorkList.ashx"; 
	          iSiteInfo.prototype.Server.Options = iSiteInfo.prototype.ISITE_OPTION_4X; 
	        }
	        else    //3.x
	        {
              iSiteInfo.prototype.Server.ImageSuiteURL = "http://" + iSyntaxServerIP + "/iSuite";
 	          iSiteInfo.prototype.Server.Options = ISITE_OPTION_3X; 
           }           
	    }	
    }


    iSiteInfo.prototype.User = function(UserName, Password)
    {
	    //User Settings
	    iSiteInfo.prototype.User.UserName = UserName;
	    iSiteInfo.prototype.User.Password = Password;
        iSiteInfo.prototype.User.AuthSource = "iSite";
    }
    
    iSiteInfo.prototype.Controls=function()
    {    
        //iSiteInfo.prototype.Controls.GetVCClassId=function()
        function GetVCClassId()
        {
            return "clsid:F21CDD6E-3FE2-4d78-8709-83D5D939B7B2";
        }
        
       // iSiteInfo.prototype.Controls.GetNVCClassId=function()
        function GetNVCClassId()
        {
            return "clsid:DD0E6EAF-2822-4d42-A2CF-7FED75DA06CA";
        
        }
    
        //iSiteInfo.prototype.Controls.AddControl=function(divId, controlId, classId, width, height)
        function AddControl(divId, controlId, classId, width, height)
        {
 /*          alert(  "divId =" + divId + 
                   ", controlId = " + controlId + 
                   ", classId = " + classId + 
                   ", width = " + width + 
                   ", height = " + height );
 */
           
            var control = document.createElement('object');
            
            var node = document.getElementById(divId);
            
            node.appendChild(control);
            
            control.id = controlId;
            control.classid = classId;
            
            control.width = width;
        
            control.height = height;
        }
           
        iSiteInfo.prototype.Controls.AddVisualControl=function(divId,controlId)
        {
            AddControl(divId,controlId, GetVCClassId(),"100%", "100%");
        }
 
        iSiteInfo.prototype.Controls.AddNonVisualControl=function(divId, controlId)
        {
            AddControl(divId,controlId, GetNVCClassId(),"1", "1");        
        }       
    }
}

function getSiteInfo() { return iSiteInfo;};

//==============Test Section==========================
function testSiteInfo()
{
   alert(  "\n isiteInfo.Controls.GetVCClassId  :" );
   isiteInfo.Controls.AddVisualControl("hi","hi");

/*
   alert(  "\n isiteInfo.iSiteVersion  :" +  isiteInfo.iSiteVersion + 
           "\n isiteInfo.CopyRights  :" +  isiteInfo.CopyRights +
           "\n isiteInfo.Server.ImageSuiteDSN  :" +  isiteInfo.Server.ImageSuiteDSN +
           "\n isiteInfo.Server.AutoUpgrade  :" +  isiteInfo.Server.AutoUpgrade +
           "\n isiteInfo.Server.Port  :" +  isiteInfo.Server.Port +
           "\n isiteInfo.Server.iSyntaxServerIP  :" +  isiteInfo.Server.iSyntaxServerIP +
           "\n isiteInfo.Server.ImageSuiteURL  :" +  isiteInfo.Server.ImageSuiteURL +
           "\n isiteInfo.Server.Options  :" +  isiteInfo.Server.Options +
          "\n isiteInfo.User.UserName  :" +  isiteInfo.User.UserName +
           "\n isiteInfo.User.Password  :" +  isiteInfo.User.Password +
           "\n isiteInfo.User.AuthSource  :" +  isiteInfo.User.AuthSource); 
           
*/
}

//===============User Section=========================
//TO DO: Please make changes in this section for IP and other settings

isiteInfo = new iSiteInfo(ISITE_VERSION_3_X); 

isiteInfo.User("iadmin","8664197");
isiteInfo.Server("63.145.247.24");
isiteInfo.Controls();