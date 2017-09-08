/****************************************************************************************\
*                                                                                        *
*  LogWriter.dll is a simple dll that can be used to produce a log file for your         *
*    javascript or vbscript plugin.  Log file names are created with a date/time stamp   *
*    and stored locally on the client machine in a directory specified in the Initialize *
*    method.  Review DicomFile_ISE.htm or DicomFile_ISR.htm for recommended usage of     *
*    the dll.                                                                            *
*                                                                                        *
*    Properties:                                                                         *
*      LogPrefix                                                                         *
*          A string value that is prepended to the log name.                             *
*          Set this value before calling Initialize() or WriteToLog() to customize       *
*          the log file name to be specific for your plugin.                             *
*      Options                                                                           *
*          A string value that can be used to pass in a list of log file options.        *
*      Initialized                                                                       *
*          A VARIANT_BOOL value that indicates if LogWriter has been initialized.        *
*                                                                                        *
*    Methods:                                                                            *
*      Initialize(String Directory)                                                      *
*          This method creates the log file to the specified directory.                  *
*      WriteToLog(String)                                                                *
*          This method writes a line to the log file.                                    *
*                                                                                        *
\****************************************************************************************/
  
  
//Set LogEnabled to true to turn on logging
var LogEnabled = false;

//default values
var LogPrefix = "Sample_Plugin_";
var LogDir = "C:\\iSiteLogs\\";
var LogOptions = ""; 

//change the MasterDebugLevel to control how much debug info you want to include
// in the plugin logs (0 = debug off)
var MasterDebugLevel = 0;

//Initialization function for LogWriter.  
//Call this function from the plugin's onload function.
function InitializeLogger()
{
  if (LogEnabled)
	{
	  //Set up logging if LogWriter.dll is registered on client.
	  //Always wrap access to LogWriter.dll in try/catch block
	  //so that plugin will not fail if LogWriter.dll is not
	  //installed on the client machine.
	  try
	  {
	  	//Check if we've already been initialized
	  	if (!LogWriter.Initialized)
	  	{
		  	//Set up our log file details
		  	LogWriter.LogPrefix = LogPrefix;
			  LogWriter.Options = LogOptions; //"Inline" option strips newline char's out of WriteToLog.
			  //Initialize our logging directory
			  if( ! LogWriter.Initialize(LogDir))
			  	alert("Unable to initialize Plugin LogWriter to:"+LogDir);
		  }
		}
		catch(exception)
		{
			//Turn off logging if problems connecting to LogWriter.dll
			LogEnabled=false;
		}
	}
	else
		alert("LogEnabled = " + 	LogEnabled);
}

/*****************************************************************************************\
*                                                                                         *
*  LogWriter.WriteToLog() wrapper functions                                               *  
*                                                                                         *  
*  Call these functions from the body of the plugin to log functions, events, and         *  
*  debug messages.  Debug messages can be controlled by setting the MasterDebugLevel      *  
*  within the plugin and setting the appropriate debug level for each DebugMessage call.  *  
*  Level 0 = Debug Messages off                                                           *  
*  Level 1 = Least debug messages (high level debug)                                      *  
*   ...                                                                                   *  
*  Level 5 = Most debug messages (low level debug)                                        *  
*                                                                                         *  
*  LogWriter.WriteToLog can also be called directly from the plugin, however you should   *  
*  always wrap it in try/catch blocks in case the dll is not registered on the client     *  
*  computer.                                                                              *  
*                                                                                         *
\*****************************************************************************************/


//Wrapper to log flow of control through functions
function LogFunction(funcname, parameters)
{
	if(!LogEnabled) return;
	try
	{
		var paddedFunc = padWithSpaces(funcname, 40);
		LogWriter.WriteToLog("Function:  " + paddedFunc + "(" + parameters + ")");
	}
	catch(exception)
	{}
}

//Wrapper to log events the plugin is handling
function LogEvent(eventname, parameters)
{
	if(!LogEnabled) return;
	try
	{
		var paddedEvent = padWithSpaces(eventname, 40);
		LogWriter.WriteToLog("Event:     " + paddedEvent + "(" + parameters + ")");
	}
	catch(exception)
	{}
}

//Wrapper for debug messages to enable different debug levels in the plugin log.
function DebugMessage(level, funcname, errortext)
{
  if(!LogEnabled) return;
  if (MasterDebugLevel == undefined) return;
  try
  {
	  
	  if (MasterDebugLevel >= level)
	  {
			var paddedFunc = padWithSpaces(funcname, 40);
			LogWriter.WriteToLog(">>DEBUG<<  " + paddedFunc + errortext);
	  } 
	}
	catch(exception)
	{}
}
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

//helper functions for formatting
function fillString(len,chr){ 
 if(len <= 0) return "";
 return new Array(len+1).join(chr); 
}

function padWithSpaces(theString,desiredLength){  
    return theString+fillString(desiredLength-theString.length,"_"); 
}
/////////////////////////////////////////////////////////////////////////