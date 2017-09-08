#if !defined(AFX_DICOMLOOKUPDLG_H__C66AC899_86C7_4037_815E_E2801B5C7935__INCLUDED_)
#define AFX_DICOMLOOKUPDLG_H__C66AC899_86C7_4037_815E_E2801B5C7935__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// DICOMLookupDlg.h : header file
//

#include "isiteimage.h"

/////////////////////////////////////////////////////////////////////////////
// DICOMLookupDlg dialog

class DICOMLookupDlg : public CDialog
{
// Construction
public:
	DICOMLookupDlg(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(DICOMLookupDlg)
	enum { IDD = IDD_DICOMLOOKUP };
	CStatic	m_ctrlDICOMResult;
	CComboBox	m_ctrlCICOMCombo;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(DICOMLookupDlg)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(DICOMLookupDlg)
	afx_msg void OnButtonLookup();
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

#endif // !defined(AFX_DICOMLOOKUPDLG_H__C66AC899_86C7_4037_815E_E2801B5C7935__INCLUDED_)
