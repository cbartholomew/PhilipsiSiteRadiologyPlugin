// Helper.h : Declaration of the CHelper

#ifndef __HELPER_H_
#define __HELPER_H_

#include "resource.h"       // main symbols
#include "ProgressDlg.h"

/////////////////////////////////////////////////////////////////////////////
// CHelper
class ATL_NO_VTABLE CHelper : 
	public CComObjectRootEx<CComSingleThreadModel>,
	public CComCoClass<CHelper, &CLSID_Helper>,
	public IConnectionPointContainerImpl<CHelper>,
	public IDispatchImpl<IHelper, &IID_IHelper, &LIBID_WINHELPERLib>,
	public IObjectWithSiteImpl<CHelper>,
	public IObjectSafetyImpl<CHelper, INTERFACESAFE_FOR_UNTRUSTED_CALLER>,
  public IProvideClassInfo2Impl<&CLSID_Helper, NULL, &LIBID_WINHELPERLib>
{
public:
	CHelper()
	{
	}

DECLARE_REGISTRY_RESOURCEID(IDR_HELPER)

DECLARE_PROTECT_FINAL_CONSTRUCT()

BEGIN_COM_MAP(CHelper)
	COM_INTERFACE_ENTRY(IHelper)
	COM_INTERFACE_ENTRY(IDispatch)
	COM_INTERFACE_ENTRY(IConnectionPointContainer)
	COM_INTERFACE_ENTRY(IObjectWithSite)
	COM_INTERFACE_ENTRY_IMPL(IConnectionPointContainer)
  COM_INTERFACE_ENTRY(IObjectSafety)
  COM_INTERFACE_ENTRY(IProvideClassInfo)
  COM_INTERFACE_ENTRY(IProvideClassInfo2)
END_COM_MAP()
BEGIN_CONNECTION_POINT_MAP(CHelper)
END_CONNECTION_POINT_MAP()

// IHelper
public:
	STDMETHOD(BrowseForFolder)(/*[out, retval]*/ BSTR * Folder);
	STDMETHOD(DestroyProgressDlg)();
	STDMETHOD(UpdateProgress)(/*[in]*/ int nPos, /*[out, retval]*/ VARIANT_BOOL *pSuccess);
	STDMETHOD(CreateProgressDlg)(/*[in]*/ int nLower, /*[in]*/ int nUpper);

private:
	void FreeShellHandle(void *p);
	CProgressDlg m_ProgressDlg;

};

#endif //__HELPER_H_
