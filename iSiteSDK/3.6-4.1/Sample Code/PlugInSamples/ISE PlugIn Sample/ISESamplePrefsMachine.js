var SAMPLE_PREFS_NAME = "Sample ISE Plug In Preferences";
var SAMPLE_PREFS_TYPE = "Machine";

var SAMPLE_ROOT = "ISELogWriterPreferences";
var SAMPLE_ONE_TAG = "Enable_Logging";
var SAMPLE_TWO_TAG = "Log_Directory";
var SAMPLE_THREE_TAG = "Log_Prefix";
var SAMPLE_FOUR_TAG = "Log_Options";


// LogWriter Preferences
var m_Enable_Logging = 0;
var m_Log_Directory = "";
var m_Log_Prefix = "";
var m_Log_Options = "";

// Retrieve XML string of preferences

function GetSamplePreferences()
{
  var xmlstring = iSiteNonVisual.GetPreference(SAMPLE_PREFS_NAME, SAMPLE_PREFS_TYPE);

  if (xmlstring != "")
  {
    var doc = xmldso.XMLDocument;
    doc.loadXML(xmlstring);

    var root = doc.documentElement;

    var nodeList = doc.getElementsByTagName(SAMPLE_ROOT);
  
    var elem = nodeList.item(0).getElementsByTagName(SAMPLE_ONE_TAG);
    m_Enable_Logging = elem.item(0).text;
    var elem = nodeList.item(0).getElementsByTagName(SAMPLE_TWO_TAG);
    m_Log_Directory = elem.item(0).text;
    var elem = nodeList.item(0).getElementsByTagName(SAMPLE_THREE_TAG);
    m_Log_Prefix = elem.item(0).text;
    var elem = nodeList.item(0).getElementsByTagName(SAMPLE_FOUR_TAG);
    m_Log_Options = elem.item(0).text;
   
  }
}

// Write XML string of preferences

function SetSamplePreferences()
{
  var doc = xmldso.XMLDocument;

  var strRoot = "<" + SAMPLE_ROOT + "></" + SAMPLE_ROOT + ">";  
  doc.loadXML(strRoot);
  
  var root = doc.documentElement;
 
  var elem = doc.createElement(SAMPLE_ONE_TAG);
  elem.text = m_Enable_Logging;
  root.appendChild(elem);
  
  elem = doc.createElement(SAMPLE_TWO_TAG);
  elem.text = m_Log_Directory;
  root.appendChild(elem);
  
  elem = doc.createElement(SAMPLE_THREE_TAG);
  elem.text = m_Log_Prefix;
  root.appendChild(elem);
  
  elem = doc.createElement(SAMPLE_FOUR_TAG);
  elem.text = m_Log_Options;
  root.appendChild(elem);

  xmlstring = doc.xml;
  
  iSiteNonVisual.SetPreference(SAMPLE_PREFS_NAME, SAMPLE_PREFS_TYPE, xmlstring);
}

