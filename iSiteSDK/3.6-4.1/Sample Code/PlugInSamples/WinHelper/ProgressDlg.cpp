// ProgressDlg.cpp : implementation file
//

#include "stdafx.h"
#include "resource.h"
#include "ProgressDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CProgressDlg dialog


CProgressDlg::CProgressDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CProgressDlg::IDD, pParent)
{
	//{{AFX_DATA_INIT(CProgressDlg)
	m_ProgressText = _T("");
	//}}AFX_DATA_INIT

  m_nStartImage = 0;
  m_nEndImage   = 1;
  m_nCurrentImage = 0;
}


void CProgressDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CProgressDlg)
	DDX_Control(pDX, IDC_PROGRESS_CTRL, m_ProgressCtrl);
	DDX_Text(pDX, IDC_PROGRESS_STATIC, m_ProgressText);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CProgressDlg, CDialog)
	//{{AFX_MSG_MAP(CProgressDlg)
	ON_WM_DESTROY()
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CProgressDlg message handlers

BOOL CProgressDlg::OnInitDialog() 
{
	CDialog::OnInitDialog();

  m_ProgressCtrl.SetRange(m_nStartImage, m_nEndImage);

  // This will cause the initial update
  m_nCurrentImage = m_nStartImage;

	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

bool CProgressDlg::SetCurrentImage(int nCurrentImage)
{
	if(IsWindow(m_hWnd))
  {
    m_nCurrentImage = nCurrentImage;

    m_ProgressText.Format("Image %3d of %d", m_nCurrentImage, m_nEndImage);

    m_ProgressCtrl.SetPos(m_nCurrentImage);

    UpdateData(FALSE);
    UpdateWindow();

    // yield for a little bit.
    // we need to do this to allow the user to either cancel or use the product
    // while the download is taking place.  It also allows paint messages to go through.
    // NOTE: this does have the ability to slow things down if the user gets busy.
    PumpMessages();

    return true;
  }
  else
  {
    return false;
  }
}


void CProgressDlg::OnDestroy() 
{
	CDialog::OnDestroy();
}

BOOL CProgressDlg::DestroyWindow()
{
	if(IsWindow(m_hWnd))
  {
    return CDialog::DestroyWindow();
  }
  return FALSE;
}

void CProgressDlg::OnCancel()
{
  CDialog::DestroyWindow();
}

BOOL CProgressDlg::Create(CWnd *pParent)
{
    // Get the true parent of the dialog
    m_pParentWnd = CWnd::GetSafeOwner(pParent);

    if(!CDialog::Create(CProgressDlg::IDD, pParent))
    {
      return FALSE;
    }
    return TRUE;
}

BOOL CProgressDlg::PreTranslateMessage(MSG* pMsg) 
{
	// Prevent the return key from closing the dialog
  if(pMsg->message == WM_KEYDOWN && pMsg->wParam == VK_RETURN)
  {
    return FALSE;
  }
	return CDialog::PreTranslateMessage(pMsg);
}

void CProgressDlg::PumpMessages()
{
  // Must call Create() before using the dialog
	if(IsWindow(m_hWnd))
  {
    MSG msg;
    // Handle dialog messages
    while(PeekMessage(&msg, NULL, 0, 0, PM_REMOVE))
    {
      // This is because one of the messages we can pump is the WM_DESTROY
      // for this window.
    	if(IsWindow(m_hWnd))
      {
        if(!IsDialogMessage(&msg))
        {
          TranslateMessage(&msg);
          DispatchMessage(&msg);  
        }
      }
      else
        break;  // get out if dialog is destroyed.
    }
  }
}

