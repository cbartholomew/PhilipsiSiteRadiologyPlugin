#if !defined(AFX_ISITEIMAGE1_H__337D2853_90F2_407A_80AA_68605B4944C6__INCLUDED_)
#define AFX_ISITEIMAGE1_H__337D2853_90F2_407A_80AA_68605B4944C6__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Machine generated IDispatch wrapper class(es) created by Microsoft Visual C++

// NOTE: Do not modify the contents of this file.  If this class is regenerated by
//  Microsoft Visual C++, your modifications will be overwritten.

/////////////////////////////////////////////////////////////////////////////
// CiSiteImage1 wrapper class

class CiSiteImage1 : public CWnd
{
protected:
	DECLARE_DYNCREATE(CiSiteImage1)
public:
	CLSID const& GetClsid()
	{
		static CLSID const clsid
			= { 0xa8a05dd2, 0x35e5, 0x45b7, { 0xb5, 0xc7, 0x93, 0x4f, 0x73, 0x97, 0x47, 0x5e } };
		return clsid;
	}
	virtual BOOL Create(LPCTSTR lpszClassName,
		LPCTSTR lpszWindowName, DWORD dwStyle,
		const RECT& rect,
		CWnd* pParentWnd, UINT nID,
		CCreateContext* pContext = NULL)
	{ return CreateControl(GetClsid(), lpszWindowName, dwStyle, rect, pParentWnd, nID); }

    BOOL Create(LPCTSTR lpszWindowName, DWORD dwStyle,
		const RECT& rect, CWnd* pParentWnd, UINT nID,
		CFile* pPersist = NULL, BOOL bStorage = FALSE,
		BSTR bstrLicKey = NULL)
	{ return CreateControl(GetClsid(), lpszWindowName, dwStyle, rect, pParentWnd, nID,
		pPersist, bStorage, bstrLicKey); }

// Attributes
public:
	BOOL GetInteractive();
	void SetInteractive(BOOL);
	BOOL GetInitialized();

// Operations
public:
	BOOL Initialize(LPUNKNOWN Session);
	BOOL DisplayImage(LPCTSTR StudyUID, LPCTSTR SeriesUID, LPCTSTR ImageUID);
	BOOL DisplayStack(LPCTSTR StudyUID, LPCTSTR SeriesUID);
	BOOL CloseDisplay();
	CString GetWindowContext();
	BOOL SetWindowImage(LPCTSTR ImageUID);
	BOOL SetWindowView(short ZoomLevel, short Top, short Left, long WindowWIdth, long WindowCenter);
	CString GetStaticWindowInfo();
	BOOL SetRotationOrientation(BOOL flip, long rotate);
	CString GetDICOMValue(LPCTSTR DICOMTag);
	long GetDICOMInstance(LPCTSTR ImageUID, VARIANT* psaData);
	BOOL WriteDICOMInstance(LPCTSTR bstrWindowID, LPCTSTR bstrImageUID, LPCTSTR bstrPathName);
	void AboutBox();
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_ISITEIMAGE1_H__337D2853_90F2_407A_80AA_68605B4944C6__INCLUDED_)
