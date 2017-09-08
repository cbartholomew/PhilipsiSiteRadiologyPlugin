// Writer.cpp : Implementation of CWriter
#include "stdafx.h"
#include "LogWriter.h"
#include "Writer.h"

/////////////////////////////////////////////////////////////////////////////
// CWriter

// Method to initialize the log file.  Log file is automatically named with a date/time stamp
//  to avoid collision with previous logs.  The log file prefix can be set prior to initialization
//  with the LogPrefix property.

STDMETHODIMP CWriter::Initialize(BSTR FileLocation, VARIANT_BOOL *pSuccess)
{
	AFX_MANAGE_STATE(AfxGetStaticModuleState())

	//if already initialized, return true.
	if (m_bInitialized == true)
	{
		*pSuccess = true;
		return S_OK;
	}

	*pSuccess = false;

	CTime currTime = CTime::GetCurrentTime();
	CString strTime = currTime.Format("%m%d%H%M%S");
	
	CString strFileName = FileLocation;

	//check if filelocation already has last \ at the end.
	if (strFileName.GetAt(strFileName.GetLength() - 1) != '\\')
	{
		strFileName += "\\";
	}

	//create filename using timestamp and file location
	strFileName += m_sLogPrefix + strTime + ".txt";
  m_sLogFileName = strFileName;
	

	try
	{

		CString strPreamble = "Plug-In Log File.\r\n\r\n";
		
		CFile file(m_sLogFileName, CFile::modeCreate|CFile::modeWrite);
	
		file.Write(_T(strPreamble),(strPreamble.GetLength() * sizeof( _TCHAR )));
		file.Close();

		*pSuccess = true;
		m_bInitialized = true;
	}
	catch (...)
	{
		*pSuccess = false;
		m_bInitialized = false;
	}


	return S_OK;
}


// Method to write a line to the log file.  If the log file is not initialized, this 
//  method will initialize it to default location of C:\iSiteLogs and debug level 3

STDMETHODIMP CWriter::WriteToLog(BSTR WriteLine, VARIANT_BOOL *pSuccess)
{
	AFX_MANAGE_STATE(AfxGetStaticModuleState())
	
	*pSuccess = false;
	VARIANT_BOOL initSuccess = FALSE;
	
	//if we havn't been initialized yet, initialize to default location 
	if (m_bInitialized == false)
	{
		CString strFolder = "C:\\iSiteLogs\\";
		Initialize(strFolder.AllocSysString(), &initSuccess);
	}
	else
	{
		initSuccess = TRUE;
	}
	

	if (initSuccess == TRUE)
	{
		//use SYSTEMTIME to get milliseconds
		SYSTEMTIME st;
		GetSystemTime(&st);
		char buffer[5];
		ZeroMemory(buffer,sizeof(buffer));

		//Use CTime for month/time formatting.
		CTime currTime = CTime::GetCurrentTime();
		CString strTime = currTime.Format("%b %d %H:%M:%S.");
		sprintf(buffer, "%03d", st.wMilliseconds);
		strTime += buffer;
		strTime += "@ ";


		try
		{
			CString strLogLine = strTime;
			strLogLine += WriteLine;

			FormatCString(&strLogLine);

			//open and write to file.
			CFile file(m_sLogFileName, CFile::modeWrite|CFile::shareDenyNone);
			file.SeekToEnd();
			file.Write(_T(strLogLine), (strLogLine.GetLength() * sizeof( _TCHAR )));
			file.Close();
			*pSuccess = true;
		}
		catch(...)
		{
			*pSuccess = false;
		}

	}

	return S_OK;
}


// Method to get the log filename prefix.

STDMETHODIMP CWriter::get_LogPrefix(BSTR *pVal)
{
	AFX_MANAGE_STATE(AfxGetStaticModuleState())

	*pVal = m_sLogPrefix.AllocSysString();

	return S_OK;
}


// Method to set the log filename prefix.  If the file is already
//  initialized, you cannot change the prefix.

STDMETHODIMP CWriter::put_LogPrefix(BSTR newVal)
{
	AFX_MANAGE_STATE(AfxGetStaticModuleState())

	//cannot change this once we're initialized.
	if(m_bInitialized == false)
	{
		m_sLogPrefix = newVal;
		return S_OK;
	}

	return S_FALSE;
}

STDMETHODIMP CWriter::get_Options(BSTR *pVal)
{
	AFX_MANAGE_STATE(AfxGetStaticModuleState())

	*pVal = m_strOptions.AllocSysString();
		
	return S_OK;
}

STDMETHODIMP CWriter::put_Options(BSTR newVal)
{
	AFX_MANAGE_STATE(AfxGetStaticModuleState())

	m_strOptions = newVal;

	return S_OK;
}

void CWriter::FormatCString(CString* strLine)
{

		CString strFormatter = *strLine;

		//convert all \r\n to just \n so the log line text is consistent
		strFormatter.Replace("\r\n", "\n");
		
		//strip any return characters at the end of the line
		while (strFormatter.GetAt(strFormatter.GetLength() - 1) == '\n')
		{
			strFormatter.Delete(strFormatter.GetLength() - 1, 1);
		}

		if (OptionIsSet("Inline"))
		{
			//strip all newline characters out and replace with semicolon
			strFormatter.Replace('\n', ';');
		}
		else
		{
			//make compatible with DOS and buffer newlines to line up correctly with date timestamp.
			strFormatter.Replace("\n", "\r\n                     ");
		}	
			
		//add a CRLF at end of line
		strFormatter.Insert(strFormatter.GetLength(), "\r\n");
		
		//return formatted string
		*strLine = strFormatter;

}

bool CWriter::OptionIsSet(const LPCTSTR strOption)
{
	bool bRetVal = false;
	
	if (m_strOptions.Find(strOption, 0) != -1)
		bRetVal = true;

	return bRetVal;
}

STDMETHODIMP CWriter::get_Initialized(VARIANT_BOOL *pVal)
{
	AFX_MANAGE_STATE(AfxGetStaticModuleState())
	*pVal = m_bInitialized;
	return S_OK;
}
