//{{AFX_INCLUDES()
#include "isiteimage.h"
//}}AFX_INCLUDES
#if !defined(AFX_ISEIMAGEDLG_H__9D058700_58B4_454E_8134_25F705622F41__INCLUDED_)
#define AFX_ISEIMAGEDLG_H__9D058700_58B4_454E_8134_25F705622F41__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// ISEImageDlg.h : header file
//

#include "iSiteNonVisual.h"

/////////////////////////////////////////////////////////////////////////////
// CISEImageDlg dialog

class CISEImageDlg : public CDialog
{
// Construction
public:
	
	CISEImageDlg(const CString StudyUID, 
				 const CString SeriesUID, 
				 const CString ImageUID, 
				 CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CISEImageDlg)
	enum { IDD = IDD_ISEIMAGE_DIALOG };
	CiSiteImage	m_ImageCtrl;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CISEImageDlg)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:
	
	virtual void OnCancel();
	BOOL InitializeCtrl();
	BOOL OpenImage();
	BOOL CloseImage();
	BOOL OpenStack();
	BOOL CloseStack();

private:
	
	CString m_Directory;

	void GetImageUIDs(CStringArray& saImageUIDs); 
	void GetDICOMInstance(LPCTSTR ImageUID, LPCTSTR Path);
	void SelectDirectory();
	void FreeShellHandle(void *p);


// Implementation
public:
	CString			m_ExamID;
	CString			m_StudyUID;
	CString			m_SeriesUID;
	CString			m_ImageUID;
	CStringArray	m_ImageList;
	CiSiteNonVisual *m_pNonVisualCtrl;

	bool			m_singleImage;
	bool			m_Flip;
	int				m_Rotate;
	int				m_CurrImage;

	//Methods
	void SetNonVisualControl(CiSiteNonVisual *NonVisualControl);

	// Generated message map functions
	//{{AFX_MSG(CISEImageDlg)
	virtual BOOL OnInitDialog();
	afx_msg void OnButtonFirst();
	afx_msg void OnButtonLast();
	afx_msg void OnButtonNext();
	afx_msg void OnButtonPrev();
	afx_msg void OnButtonRotate();
	afx_msg void OnButtonFlip();
	afx_msg void OnButtonWindowInfo();
	afx_msg void OnButtonWindowInfoStatic();
	afx_msg void OnButtonLookupDicomValue();
	afx_msg void OnButtonSetView();
	afx_msg void OnSize(UINT nType, int cx, int cy);
	afx_msg void OnButtonDICOMInstance();
	afx_msg void OnOpenStack();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_ISEIMAGEDLG_H__9D058700_58B4_454E_8134_25F705622F41__INCLUDED_)
