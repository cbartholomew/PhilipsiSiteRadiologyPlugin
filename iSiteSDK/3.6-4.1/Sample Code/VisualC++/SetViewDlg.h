#if !defined(AFX_SETVIEWDLG_H__7CEED6F7_B96B_41A5_93A1_0308E61984DD__INCLUDED_)
#define AFX_SETVIEWDLG_H__7CEED6F7_B96B_41A5_93A1_0308E61984DD__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// SetViewDlg.h : header file
//

#include "isiteimage.h"

/////////////////////////////////////////////////////////////////////////////
// SetViewDlg dialog

class SetViewDlg : public CDialog
{
// Construction
public:
	SetViewDlg(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(SetViewDlg)
	enum { IDD = IDD_SETVIEWLDG };
	CEdit	m_EditZoomLevel;
	CEdit	m_EditWidth;
	CEdit	m_EditTop;
	CEdit	m_EditLeft;
	CEdit	m_EditCenter;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(SetViewDlg)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(SetViewDlg)
	virtual void OnOK();
	virtual void OnCancel();
	virtual BOOL OnInitDialog();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()

private:

	CiSiteImage *m_pImageCtrl;

public:

	void SetImageControl(CiSiteImage *pControl);
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_SETVIEWDLG_H__7CEED6F7_B96B_41A5_93A1_0308E61984DD__INCLUDED_)
