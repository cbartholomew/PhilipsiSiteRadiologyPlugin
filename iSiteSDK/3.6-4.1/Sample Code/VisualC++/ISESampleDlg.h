// ISESampleDlg.h : header file
//
//{{AFX_INCLUDES()
#include "isitenonvisual.h"
//}}AFX_INCLUDES

#if !defined(AFX_ISESAMPLEDLG_H__1A81A364_FE66_4206_8DA9_EB1EC9E84034__INCLUDED_)
#define AFX_ISESAMPLEDLG_H__1A81A364_FE66_4206_8DA9_EB1EC9E84034__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

/////////////////////////////////////////////////////////////////////////////
// CISESampleDlg dialog

class CISESampleDlg : public CDialog
{
// Construction
public:
	CISESampleDlg(CWnd* pParent = NULL);	// standard constructor

// Dialog Data
	//{{AFX_DATA(CISESampleDlg)
	enum { IDD = IDD_ISESAMPLE_DIALOG };
	CEdit	m_URLCtrl;
	CEdit	m_ServerIPCtrl;
	CString	m_Accession;
	CString	m_Organization;
	CString	m_Password;
	CString	m_PatientID;
	CString	m_ServerIP;
	CString	m_ServerPort;
	CString	m_URL;
	CString	m_User;
	CString	m_Authsource;
	CiSiteNonVisual	m_NonVisualCtrl;
	//}}AFX_DATA

	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CISESampleDlg)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);	// DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:
	HICON m_hIcon;

	// Generated message map functions
	//{{AFX_MSG(CISESampleDlg)
	virtual BOOL OnInitDialog();
	afx_msg void OnSysCommand(UINT nID, LPARAM lParam);
	afx_msg void OnPaint();
	afx_msg HCURSOR OnQueryDragIcon();
	afx_msg void OnButtonShowExam();
	afx_msg void OnImagesTestimage();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()

	// find exam and open it.
	virtual void OnCancel();
	void OpenExam();
	BOOL Login();
	BOOL Logout();
	BOOL InitializeNonVisualCtrl();

};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_ISESAMPLEDLG_H__1A81A364_FE66_4206_8DA9_EB1EC9E84034__INCLUDED_)
