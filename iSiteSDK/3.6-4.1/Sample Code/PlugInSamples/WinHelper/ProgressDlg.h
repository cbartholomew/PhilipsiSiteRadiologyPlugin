#if !defined(AFX_PROGRESSDLG_H__38A5D490_8754_4CEB_B9FB_8C1021FD7247__INCLUDED_)
#define AFX_PROGRESSDLG_H__38A5D490_8754_4CEB_B9FB_8C1021FD7247__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// ProgressDlg.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CProgressDlg dialog

class CProgressDlg : public CDialog
{
// Construction
public:
	CProgressDlg(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CProgressDlg)
	enum { IDD = IDD_PROGRESS_DLG };
	CProgressCtrl	m_ProgressCtrl;
	CString	m_ProgressText;
	//}}AFX_DATA

  void SetStartImage(int nImage);
  void SetEndImage(int nEndImage);
  // returns false if the dialog was cancelled
  bool SetCurrentImage(int nCurrentImage);

  BOOL Create(CWnd *pParent=NULL);
	virtual BOOL DestroyWindow();

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CProgressDlg)
protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL
	virtual BOOL PreTranslateMessage(MSG* pMsg);

  void OnCancel();

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CProgressDlg)
	virtual BOOL OnInitDialog();
	afx_msg void OnDestroy();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()

  void PumpMessages();

  int m_nStartImage;
  int m_nEndImage;
  int m_nCurrentImage;
};

inline void CProgressDlg::SetStartImage(int nImage)
{
  m_nStartImage = nImage;
}

inline void CProgressDlg::SetEndImage(int nEndImage)
{
  m_nEndImage = nEndImage;
}


//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_PROGRESSDLG_H__38A5D490_8754_4CEB_B9FB_8C1021FD7247__INCLUDED_)
