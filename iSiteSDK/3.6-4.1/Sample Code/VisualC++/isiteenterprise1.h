#if !defined(AFX_ISITEENTERPRISE1_H__104900DF_35A5_4C83_BF29_25A42B4418CB__INCLUDED_)
#define AFX_ISITEENTERPRISE1_H__104900DF_35A5_4C83_BF29_25A42B4418CB__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Machine generated IDispatch wrapper class(es) created by Microsoft Visual C++

// NOTE: Do not modify the contents of this file.  If this class is regenerated by
//  Microsoft Visual C++, your modifications will be overwritten.

/////////////////////////////////////////////////////////////////////////////
// CiSiteEnterprise1 wrapper class

class CiSiteEnterprise1 : public CWnd
{
protected:
	DECLARE_DYNCREATE(CiSiteEnterprise1)
public:
	CLSID const& GetClsid()
	{
		static CLSID const clsid
			= { 0x908bb23e, 0x569c, 0x490b, { 0x8e, 0x25, 0xca, 0xfd, 0xd6, 0x27, 0x1d, 0x95 } };
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
	CString GetHelpPath();
	void SetHelpPath(LPCTSTR);
	BOOL GetInitialized();
	CString GetOptions();
	void SetOptions(LPCTSTR);
	CString GetBrowserPageName();
	void SetBrowserPageName(LPCTSTR);
	CString GetBrowserPageURL();
	void SetBrowserPageURL(LPCTSTR);
	CString GetCCOWOptions();
	void SetCCOWOptions(LPCTSTR);
	BOOL GetCCOWEnabled();
	void SetCCOWEnabled(BOOL);

// Operations
public:
	BOOL Reset();
	BOOL RemoveViewMenuItem(LPCTSTR Name);
	BOOL InsertAfterViewMenuItem(LPCTSTR Name, LPCTSTR NameAfter);
	BOOL CopyToClipboard(LPCTSTR WndID);
	CString GetWindowContext(LPCTSTR WndID);
	BOOL SetWindowImage(LPCTSTR WindowID, LPCTSTR ImageUID);
	BOOL SetWindowView(LPCTSTR WindowID, float ZoomFactor, short Top, short Left, long WindowWIdth, long WindowCenter);
	CString GetStaticWindowInfo(LPCTSTR WindowID);
	CString GetActiveWindow();
	BOOL AddViewMenuItem(LPCTSTR Name);
	BOOL Initialize(LPUNKNOWN Session);
	BOOL ShowClinicalExamNotes(LPCTSTR CanvasPageID, LPCTSTR ShelfID);
	BOOL SetShelfDragBarColor(LPCTSTR ShelfID, long Color);
	BOOL AddExamMenuItem(LPCTSTR Name);
	BOOL RemoveExamMenuItem(LPCTSTR Name);
	BOOL InsertAfterExamMenuItem(LPCTSTR Name, LPCTSTR InsertAfter);
	CString CreatePopup(LPCTSTR WindowID);
	BOOL DestroyPopup(LPCTSTR WindowID);
	VARIANT InternalExecute(LPCTSTR FuncName, LPCTSTR Param1, LPCTSTR Param2, LPCTSTR Param3);
	CString GetDICOMValue(LPCTSTR WindowID, LPCTSTR DICOMTag);
	BOOL EnablePreferenceApplyButton();
	long GetDICOMInstance(LPCTSTR WindowID, LPCTSTR ImageUID, VARIANT* Buffer);
	CString OpenCanvasPage(LPCTSTR IntExamID, LPCTSTR IntExceptionID, BOOL Reveal, BOOL Lock, BOOL OpenNew);
	CString ListCanvasPages();
	CString GetCanvasPageStatus(LPCTSTR CanvasPageID);
	BOOL CloseCanvasPage(LPCTSTR CanvasPageID, BOOL DiscardChanges);
	CString OpenShelf(LPCTSTR CanvasPageID, LPCTSTR IntExamID, LPCTSTR IntExceptionID, BOOL Reveal);
	CString ListShelfs(LPCTSTR CanvasPageID);
	CString GetShelfStatus(LPCTSTR ShelfID);
	BOOL CloseShelf(LPCTSTR ShelfID);
	BOOL AddShelfMenuItem(LPCTSTR Name);
	BOOL RemoveShelfMenuItem(LPCTSTR Name);
	BOOL InsertAfterShelfMenuItem(LPCTSTR Name, LPCTSTR NameAfter);
	BOOL SetShelfURL(LPCTSTR ShelfID, LPCTSTR URL, long ReportWidth);
	CString GetShelfWindowIDs(LPCTSTR ShelfID);
	BOOL SetActivePage(LPCTSTR Name, LPCTSTR Type);
	BOOL AddPreferencePage(LPCTSTR Name, LPCTSTR URL, LPCTSTR Type);
	BOOL DisplayMediaExportPage(LPCTSTR InternalExamIds, long RemoveAllExams);
	long MessageBox(LPCTSTR Msg, long nType);
	CString FindShelfID(LPCTSTR IntExamID);
	CString FindCanvasPageID(LPCTSTR IntPatientID);
	CString ListMediaExportExams();
	BOOL AddViewSubMenu(LPCTSTR Name);
	BOOL AddViewSubMenuItem(LPCTSTR Name, LPCTSTR SubMenuName);
	BOOL InsertAfterViewSubMenu(LPCTSTR Name, LPCTSTR NameAfter);
	BOOL InsertAfterViewSubMenuItem(LPCTSTR Name, LPCTSTR SubMenuName, LPCTSTR NameAfter);
	BOOL AddExamSubMenu(LPCTSTR Name);
	BOOL AddExamSubMenuItem(LPCTSTR Name, LPCTSTR SubMenuName);
	BOOL InsertAfterExamSubMenu(LPCTSTR Name, LPCTSTR NameAfter);
	BOOL InsertAfterExamSubMenuItem(LPCTSTR Name, LPCTSTR SubMenuName, LPCTSTR NameAfter);
	BOOL AddShelfSubMenu(LPCTSTR Name);
	BOOL AddShelfSubMenuItem(LPCTSTR Name, LPCTSTR SubMenuName);
	BOOL InsertAfterShelfSubMenu(LPCTSTR Name, LPCTSTR NameAfter);
	BOOL InsertAfterShelfSubMenuItem(LPCTSTR Name, LPCTSTR SubMenuName, LPCTSTR NameAfter);
	BOOL AddShelfButton(LPCTSTR pszShelfID, LPCTSTR pszButtonID, LPCTSTR pszBitMap, LPCTSTR pszToolTip);
	BOOL ShowPreferenceDialog();
	BOOL AddTimelineSubMenu(LPCTSTR Name);
	BOOL AddTimelineSubMenuItem(LPCTSTR Name, LPCTSTR SubMenuName);
	BOOL InsertAfterTimelineSubMenu(LPCTSTR Name, LPCTSTR NameAfter);
	BOOL InsertAfterTimelineSubMenuItem(LPCTSTR Name, LPCTSTR SubMenuName, LPCTSTR NameAfter);
	BOOL AddTimelineMenuItem(LPCTSTR Name);
	BOOL RemoveTimelineMenuItem(LPCTSTR Name);
	BOOL InsertAfterTimelineMenuItem(LPCTSTR Name, LPCTSTR NameAfter);
	BOOL DisplayiExportQueue();
	BOOL CopyImageToClipboard(LPCTSTR WndID);
	CString SavePresentationState(LPCTSTR bstrShelfID, LPCTSTR pszDesc, long nType);
	BOOL LoadPresentationState(LPCTSTR bstrShelfID, LPCTSTR bstrName);
	BOOL DeleteAnnotation(LPCTSTR bstrWindowID, LPCTSTR bstrToken);
	BOOL WriteDICOMInstance(LPCTSTR bstrWindowID, LPCTSTR bstrImageUID, LPCTSTR bstrPathName);
	LPDISPATCH CopyWindowToPicture(LPCTSTR bstrWindowID, long nLeft, long nTop, long nRight, long nBottom);
	LPDISPATCH CopyImageToPicture(LPCTSTR bstrWindowID, long nLeft, long nTop, long nRight, long nBottom);
	void AboutBox();
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_ISITEENTERPRISE1_H__104900DF_35A5_4C83_BF29_25A42B4418CB__INCLUDED_)