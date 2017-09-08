// Writer.h : Declaration of the CWriter

#ifndef __WRITER_H_
#define __WRITER_H_

#include "resource.h"       // main symbols

#define _UNICODE   

/////////////////////////////////////////////////////////////////////////////
// CWriter
class ATL_NO_VTABLE CWriter : 
	public CComObjectRootEx<CComSingleThreadModel>,
	public CComCoClass<CWriter, &CLSID_Writer>,
	public IConnectionPointContainerImpl<CWriter>,
	public IDispatchImpl<IWriter, &IID_IWriter, &LIBID_LOGWRITERLib>,
	public IObjectWithSiteImpl<CWriter>,
	public IObjectSafetyImpl<CWriter, INTERFACESAFE_FOR_UNTRUSTED_CALLER>,
	public IProvideClassInfo2Impl<&CLSID_Writer, NULL, &LIBID_LOGWRITERLib>
{
public:
	CWriter()
	{
		//m_CurrentDebugLevel = 0;
		m_bInitialized = false;
		m_sLogFileName = "";
		m_sLogPrefix = "PluginLog";
		m_strOptions = "";

	}

DECLARE_REGISTRY_RESOURCEID(IDR_WRITER)

DECLARE_PROTECT_FINAL_CONSTRUCT()

BEGIN_COM_MAP(CWriter)
	COM_INTERFACE_ENTRY(IWriter)
	COM_INTERFACE_ENTRY(IDispatch)
	COM_INTERFACE_ENTRY(IConnectionPointContainer)
	COM_INTERFACE_ENTRY(IObjectWithSite)
	COM_INTERFACE_ENTRY_IMPL(IConnectionPointContainer)
	COM_INTERFACE_ENTRY(IObjectSafety)
  COM_INTERFACE_ENTRY(IProvideClassInfo)
  COM_INTERFACE_ENTRY(IProvideClassInfo2)
END_COM_MAP()
BEGIN_CONNECTION_POINT_MAP(CWriter)
END_CONNECTION_POINT_MAP()

// IWriter
public:
	STDMETHOD(get_Initialized)(/*[out, retval]*/ VARIANT_BOOL *pVal);
	STDMETHOD(get_Options)(/*[out, retval]*/ BSTR *pVal);
	STDMETHOD(put_Options)(/*[in]*/ BSTR newVal);
	STDMETHOD(get_LogPrefix)(/*[out, retval]*/ BSTR *pVal);
	STDMETHOD(put_LogPrefix)(/*[in]*/ BSTR newVal);
	STDMETHOD(WriteToLog)(/*[in]*/ BSTR WriteLine, /*[out, retval]*/ VARIANT_BOOL *pSuccess);
	STDMETHOD(Initialize)(/*[in]*/ BSTR FileLocation, /*[out, retval]*/ VARIANT_BOOL *pSuccess);
	//STDMETHOD(get_DebugLevel)(/*[out, retval]*/ short *pVal);
	//STDMETHOD(put_DebugLevel)(/*[in]*/ short newVal);
private:
	bool OptionIsSet(const LPCTSTR strOption);
	void FormatCString(CString* strLine);
	CString m_strOptions;
	bool m_bInitialized;
	CString m_sLogFileName;
	CString m_sLogPrefix;
	//short m_CurrentDebugLevel;


};

#endif //__WRITER_H_
