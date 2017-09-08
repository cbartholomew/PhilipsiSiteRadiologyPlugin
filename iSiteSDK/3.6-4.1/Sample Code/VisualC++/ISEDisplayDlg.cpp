// ISEDisplayDlg.cpp : implementation file
//

#include "stdafx.h"
#include "ISESample.h"
#include "ISEDisplayDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CISEDisplayDlg dialog


CISEDisplayDlg::CISEDisplayDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CISEDisplayDlg::IDD, pParent)
{
	//{{AFX_DATA_INIT(CISEDisplayDlg)
		// NOTE: the ClassWizard will add member initialization here
	//}}AFX_DATA_INIT
}


void CISEDisplayDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CISEDisplayDlg)
	DDX_Control(pDX, IDC_ISITEENTERPRISECTRL1, m_EnterpriseCtrl);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CISEDisplayDlg, CDialog)
	//{{AFX_MSG_MAP(CISEDisplayDlg)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CISEDisplayDlg message handlers


BOOL CISEDisplayDlg::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	if (InitializeEnterpriseCtrl())
	{
		OpenCanvasPage();
	}
	
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

void CISEDisplayDlg::OnCancel()
{
	CDialog::OnCancel();
}

BOOL CISEDisplayDlg::InitializeEnterpriseCtrl()
{
	BOOL bRet = false;

	if (m_pNonVisualCtrl != NULL)
	{
		// Set these default options
		m_EnterpriseCtrl.SetOptions("DisableAutoLogout,HideFolders,HideCloseTabButton,DisablePreferences");
		
		// Initialize the visual control 
		bRet = m_EnterpriseCtrl.Initialize(m_pNonVisualCtrl->GetControlUnknown());
		if(bRet == FALSE)
		{
			AfxMessageBox("Error Initializing Enterprise Control");
		}
	}

	return bRet;
}

BOOL CISEDisplayDlg::OpenCanvasPage()
{
	BOOL bRet = false;

	// just a sanity check
	if (m_ExamID.IsEmpty())
	{
		AfxMessageBox("Exam not found. Exam Id is blank.");

	}

		m_canvasPageID = m_EnterpriseCtrl.OpenCanvasPage(m_ExamID, "", TRUE, FALSE, TRUE);

		if (m_canvasPageID.IsEmpty())
		{
			AfxMessageBox("Error Opening CanvasPage");
		}
		else
	{
			bRet = true;
	}

	return bRet;
}

void CISEDisplayDlg::SetExamID(const CString &csExamID)
{
	if (!csExamID.IsEmpty())
	{
		m_ExamID = csExamID;
	}
}

void CISEDisplayDlg::SetNonVisualControl(CiSiteNonVisual *NonVisualControl)
{
	if (NonVisualControl != NULL)
	{
		m_pNonVisualCtrl = NonVisualControl;
	}
}
