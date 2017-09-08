//{{AFX_INCLUDES()
#include "isiteenterprise.h"
//}}AFX_INCLUDES
#if !defined(AFX_ISEDISPLAYDLG_H__0D178672_3E6C_475D_A8C8_C268FCFDCBDB__INCLUDED_)
#define AFX_ISEDISPLAYDLG_H__0D178672_3E6C_475D_A8C8_C268FCFDCBDB__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// ISEDisplayDlg.h : header file
//

#include "iSiteNonVisual.h"

/////////////////////////////////////////////////////////////////////////////
// CISEDisplayDlg dialog

class CISEDisplayDlg : public CDialog
{
// Construction
public:
	CISEDisplayDlg(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CISEDisplayDlg)
	enum { IDD = IDD_ISEDISPLAY_DIALOG };
	CiSiteEnterprise	m_EnterpriseCtrl;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CISEDisplayDlg)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

protected:
	
	virtual void OnCancel();
	
	BOOL InitializeEnterpriseCtrl();
	BOOL OpenCanvasPage();
	BOOL CloseCanvasPage();

// Implementation
public:
	CString m_ExamID;
	CString m_canvasPageID;
	CiSiteNonVisual *m_pNonVisualCtrl;

	//Methods
	void SetExamID(const CString &csExamID);
	void SetNonVisualControl(CiSiteNonVisual *NonVisualControl);

protected:

	// Generated message map functions
	//{{AFX_MSG(CISEDisplayDlg)
	virtual BOOL OnInitDialog();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_ISEDISPLAYDLG_H__0D178672_3E6C_475D_A8C8_C268FCFDCBDB__INCLUDED_)
