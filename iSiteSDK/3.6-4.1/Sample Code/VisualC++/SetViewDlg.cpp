// SetViewDlg.cpp : implementation file
//

#include "stdafx.h"
#include "ISESample.h"
#include "SetViewDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// SetViewDlg dialog


SetViewDlg::SetViewDlg(CWnd* pParent /*=NULL*/)
	: CDialog(SetViewDlg::IDD, pParent)
{
	//{{AFX_DATA_INIT(SetViewDlg)
	//}}AFX_DATA_INIT
}


void SetViewDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(SetViewDlg)
	DDX_Control(pDX, IDC_EDIT_ZOOM_LEVEL, m_EditZoomLevel);
	DDX_Control(pDX, IDC_EDIT_WINDOW_WIDTH, m_EditWidth);
	DDX_Control(pDX, IDC_EDIT_WINDOW_TOP, m_EditTop);
	DDX_Control(pDX, IDC_EDIT_WINDOW_LEFT, m_EditLeft);
	DDX_Control(pDX, IDC_EDIT_WINDOW_CONTER, m_EditCenter);
	//}}AFX_DATA_MAP
}

BEGIN_MESSAGE_MAP(SetViewDlg, CDialog)
	//{{AFX_MSG_MAP(SetViewDlg)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// SetViewDlg message handlers

BOOL SetViewDlg::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	// TODO: Add extra initialization here
	
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

void SetViewDlg::OnOK() 
{
	try
	{
		UpdateData(TRUE);
		
		if (m_pImageCtrl != NULL)
		{
			CString csZoom;
			m_EditZoomLevel.GetWindowText(csZoom);
			if (csZoom.IsEmpty())
			{
				AfxMessageBox("Please enter a Zoom value or click the cancel button.");
				return;
			}
			short ZoomLevel = (short) atoi(csZoom);

			CString csTop;
			m_EditTop.GetWindowText(csTop);
			if (csTop.IsEmpty())
			{
				AfxMessageBox("Please enter a Top value or click the cancel button.");
				return;
			}
			short Top = (short) atoi(csTop);

			CString csLeft;
			m_EditLeft.GetWindowText(csLeft);
			if (csLeft.IsEmpty())
			{
				AfxMessageBox("Please enter a Left value or click the cancel button.");
				return;
			}
			short Left = (short) atoi(csLeft);

			CString csWindowWidth;
			m_EditWidth.GetWindowText(csWindowWidth);
			if (csWindowWidth.IsEmpty())
			{
				AfxMessageBox("Please enter a Window Width value or click the cancel button.");
				return;
			}
			long WindowWidth = (long) atoi(csWindowWidth);

			CString csWindowCenter;
			m_EditCenter.GetWindowText(csWindowCenter);
			if (csWindowCenter.IsEmpty())
			{
				AfxMessageBox("Please enter a Window Center value or click the cancel button.");
				return;
			}
			long WindowCenter = (long) atoi(csWindowCenter);

			m_pImageCtrl->SetWindowView(ZoomLevel, Top, Left, WindowWidth, WindowCenter);
		}

		CDialog::OnOK();
	}
	catch(...)
	{
		CDialog::OnOK();
		return;
	}
}

void SetViewDlg::OnCancel() 
{
	// TODO: Add extra cleanup here
	
	CDialog::OnCancel();
}

void SetViewDlg::SetImageControl(CiSiteImage *pControl)
{
	if (pControl != NULL)
	{
		m_pImageCtrl = pControl;
	}
}