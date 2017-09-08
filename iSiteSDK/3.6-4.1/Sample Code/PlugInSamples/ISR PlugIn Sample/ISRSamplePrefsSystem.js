var SAMPLE_PREFS_NAME = "Sample ISR Plug In Preferences";
var SAMPLE_PREFS_TYPE = "System";

var SAMPLE_ROOT = "ISRSamplePlugInPreferences";
var SAMPLE_ONE_TAG = "Enable_Prefs";
var SAMPLE_TWO_TAG = "Preference_One";
var SAMPLE_THREE_TAG = "Preference_Two";
var SAMPLE_FOUR_TAG = "Preference_Three";
var SAMPLE_FIVE_TAG = "Enable_Check";


// Sample Preferences
var m_Enable_Prefs = 1;
var m_Preference_One = "";
var m_Preference_Two = "";
var m_Preference_Three = "";
var m_Enable_Check = 0;

// Retrieve XML string of preferences

function GetSamplePreferences()
{
  var xmlstring = Radiology.GetPreference(SAMPLE_PREFS_NAME, SAMPLE_PREFS_TYPE);

  if (xmlstring != "")
  {
    var doc = xmldso.XMLDocument;
    doc.loadXML(xmlstring);

    var root = doc.documentElement;

    var nodeList = doc.getElementsByTagName(SAMPLE_ROOT);
  
    var elem = nodeList.item(0).getElementsByTagName(SAMPLE_ONE_TAG);
    m_Enable_Prefs = elem.item(0).text;
    var elem = nodeList.item(0).getElementsByTagName(SAMPLE_TWO_TAG);
    m_Preference_One = elem.item(0).text;
    var elem = nodeList.item(0).getElementsByTagName(SAMPLE_THREE_TAG);
    m_Preference_Two = elem.item(0).text;
    var elem = nodeList.item(0).getElementsByTagName(SAMPLE_FOUR_TAG);
    m_Preference_Three = elem.item(0).text;
    var elem = nodeList.item(0).getElementsByTagName(SAMPLE_FIVE_TAG);
    m_Enable_Check = elem.item(0).text;
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
  elem.text = m_Enable_Prefs;
  root.appendChild(elem);
  
  elem = doc.createElement(SAMPLE_TWO_TAG);
  elem.text = m_Preference_One;
  root.appendChild(elem);
  
  elem = doc.createElement(SAMPLE_THREE_TAG);
  elem.text = m_Preference_Two;
  root.appendChild(elem);
  
  elem = doc.createElement(SAMPLE_FOUR_TAG);
  elem.text = m_Preference_Three;
  root.appendChild(elem);

  var elem = doc.createElement(SAMPLE_FIVE_TAG);
  elem.text = m_Enable_Check;
  root.appendChild(elem);

  xmlstring = doc.xml;
  
  Radiology.SetPreference(SAMPLE_PREFS_NAME, SAMPLE_PREFS_TYPE, xmlstring);
}

