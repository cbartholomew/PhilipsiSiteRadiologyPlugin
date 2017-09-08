// ISESampleDlg.cpp : implementation file
//

#include "stdafx.h"
#include "ISESample.h"
#include "ISESampleDlg.h"
#include "ISEDisplayDlg.h"
#include "ISEImageDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CAboutDlg dialog used for App About

class CAboutDlg : public CDialog
{
public:
	CAboutDlg();

// Dialog Data
	//{{AFX_DATA(CAboutDlg)
	enum { IDD = IDD_ABOUTBOX };
	//}}AFX_DATA

	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CAboutDlg)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:
	//{{AFX_MSG(CAboutDlg)
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

CAboutDlg::CAboutDlg() : CDialog(CAboutDlg::IDD)
{
	//{{AFX_DATA_INIT(CAboutDlg)
	//}}AFX_DATA_INIT
}

void CAboutDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CAboutDlg)
	//}}AFX_DATA_MAP
}

BEGIN_MESSAGE_MAP(CAboutDlg, CDialog)
	//{{AFX_MSG_MAP(CAboutDlg)
		// No message handlers
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CISESampleDlg dialog

CISESampleDlg::CISESampleDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CISESampleDlg::IDD, pParent)
{
	//{{AFX_DATA_INIT(CISESampleDlg)
	m_Accession = _T("323434");
	m_Organization = _T("DEFAULT");
	m_Password = _T("password");
	m_PatientID = _T("64565");
	m_ServerIP = _T("eng-mp10");
	m_ServerPort = _T("6464");
	m_URL = _T("http://eng-mp10/iSiteWeb/WorkList/PrimaryWorkList.ashx");
	m_User = _T("iuser");
	m_Authsource = _T("iSite");
	//}}AFX_DATA_INIT
	// Note that LoadIcon does not require a subsequent DestroyIcon in Win32
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
}

void CISESampleDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CISESampleDlg)
	DDX_Control(pDX, IDC_EDIT_URL, m_URLCtrl);
	DDX_Control(pDX, IDC_EDIT_SERVERIP, m_ServerIPCtrl);
	DDX_Text(pDX, IDC_EDIT_ACCESSION, m_Accession);
	DDX_Text(pDX, IDC_EDIT_ORGANIZATION, m_Organization);
	DDX_Text(pDX, IDC_EDIT_PASSWORD, m_Password);
	DDX_Text(pDX, IDC_EDIT_PATIENTID, m_PatientID);
	DDX_Text(pDX, IDC_EDIT_SERVERIP, m_ServerIP);
	DDX_Text(pDX, IDC_EDIT_SERVERPORT, m_ServerPort);
	DDX_Text(pDX, IDC_EDIT_URL, m_URL);
	DDX_Text(pDX, IDC_EDIT_USER, m_User);
	DDX_Control(pDX, IDC_ISITENONVISUALCTRL1, m_NonVisualCtrl);
	DDX_Text(pDX, IDC_EDIT_AUTHSOURCE, m_Authsource);
	//}}AFX_DATA_MAP
}

BEGIN_MESSAGE_MAP(CISESampleDlg, CDialog)
	//{{AFX_MSG_MAP(CISESampleDlg)
	ON_WM_SYSCOMMAND()
	ON_WM_PAINT()
	ON_WM_QUERYDRAGICON()
	ON_BN_CLICKED(IDC_BUTTON_SHOWEXAM, OnButtonShowExam)
	ON_COMMAND(ID_IMAGES_TESTIMAGE, OnImagesTestimage)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CISESampleDlg message handlers

BOOL CISESampleDlg::OnInitDialog()
{
	CDialog::OnInitDialog();

	// Add "About..." menu item to system menu.

	// IDM_ABOUTBOX must be in the system command range.
	ASSERT((IDM_ABOUTBOX & 0xFFF0) == IDM_ABOUTBOX);
	ASSERT(IDM_ABOUTBOX < 0xF000);

	CMenu* pSysMenu = GetSystemMenu(FALSE);
	if (pSysMenu != NULL)
	{
		CString strAboutMenu;
		strAboutMenu.LoadString(IDS_ABOUTBOX);
		if (!strAboutMenu.IsEmpty())
		{
			pSysMenu->AppendMenu(MF_SEPARATOR);
			pSysMenu->AppendMenu(MF_STRING, IDM_ABOUTBOX, strAboutMenu);
		}
	}

	// Set the icon for this dialog.  The framework does this automatically
	//  when the application's main window is not a dialog
	SetIcon(m_hIcon, TRUE);			// Set big icon
	SetIcon(m_hIcon, FALSE);		// Set small icon
	
	// TODO: Add extra initialization here
	
	return TRUE;  // return TRUE  unless you set the focus to a control
}

void CISESampleDlg::OnSysCommand(UINT nID, LPARAM lParam)
{
	if ((nID & 0xFFF0) == IDM_ABOUTBOX)
	{
		CAboutDlg dlgAbout;
		dlgAbout.DoModal();
	}
	else
	{
		CDialog::OnSysCommand(nID, lParam);
	}
}

// If you add a minimize button to your dialog, you will need the code below
// to draw the icon.  For MFC applications using the document/view model,
// this is automatically done for you by the framework.

void CISESampleDlg::OnPaint() 
{
	if (IsIconic())
	{
		CPaintDC dc(this); // device context for painting

		SendMessage(WM_ICONERASEBKGND, (WPARAM) dc.GetSafeHdc(), 0);

		// Center icon in client rectangle
		int cxIcon = GetSystemMetrics(SM_CXICON);
		int cyIcon = GetSystemMetrics(SM_CYICON);
		CRect rect;
		GetClientRect(&rect);
		int x = (rect.Width() - cxIcon + 1) / 2;
		int y = (rect.Height() - cyIcon + 1) / 2;

		// Draw the icon
		dc.DrawIcon(x, y, m_hIcon);
	}
	else
	{
		CDialog::OnPaint();
	}
}

// The system calls this to obtain the cursor to display while the user drags
//  the minimized window.
HCURSOR CISESampleDlg::OnQueryDragIcon()
{
	return (HCURSOR) m_hIcon;
}

void CISESampleDlg::OnButtonShowExam() 
{
	// Get and validate the data
	UpdateData(TRUE);
	
	// Initialize the non-visual control
	if (InitializeNonVisualCtrl())
	{
		// log in
		if (Login())
		{
			// Show exam
			OpenExam();
		}
	}
}

void CISESampleDlg::OnCancel() 
{
	try
	{
		Logout();

		CDialog::OnCancel();
	}
	catch(...)
	{
		return;
	}
}

void CISESampleDlg::OpenExam() 
{
	try
	{
		CString ExamID;

		// find the exam id based on patient id & accession
		ExamID = m_NonVisualCtrl.FindExam(m_Accession, m_PatientID, m_Organization);

		// Did we found it?
		if (ExamID.IsEmpty())
		{
			AfxMessageBox("Error Finding Exam");

		}
			CISEDisplayDlg ISEDlg;

			// pass the exam id & nonvisual ctrl over to the dialog and display the exam
			// the dialog will take care of opening and closing it.
			ISEDlg.SetExamID(ExamID);
			ISEDlg.SetNonVisualControl(&m_NonVisualCtrl);
			ISEDlg.DoModal();
		}
	catch(...)
	{
		return;
	}
}

BOOL CISESampleDlg::Login() 
{
	try
	{
		BOOL bRet = false;

		// test if we are logged in already
		if (m_NonVisualCtrl.GetCurrentUser().IsEmpty())
		{
			bRet = m_NonVisualCtrl.Login(m_User, m_Password, m_Authsource, "", "");
			if(bRet == FALSE)
			{
				AfxMessageBox("Error logging in");
			}
		}
		else
		{
			bRet = true;
		}

		return bRet;
	}
	catch(...)
	{
		return FALSE;
	}
}

BOOL CISESampleDlg::Logout() 
{
	try
	{
		BOOL bRet = true;

		// check if we are logged in.
		if (!m_NonVisualCtrl.GetCurrentUser().IsEmpty())
		{
			bRet = m_NonVisualCtrl.Logout();
			if(bRet == FALSE)
			{
				AfxMessageBox("Error logging out");
			}
		}

		return bRet;
	}
	catch(...)
	{
		return FALSE;
	}
}

BOOL CISESampleDlg::InitializeNonVisualCtrl() 
{
	try
	{
		BOOL bRet = false;

		// already initialized?
		if (m_NonVisualCtrl.GetInitialized())
		{
			bRet = true;
		}
		else
		{
			// Set the required parameters
			m_NonVisualCtrl.SetISyntaxServerIP(m_ServerIP);
			m_NonVisualCtrl.SetISyntaxServerPort(m_ServerPort);
			m_NonVisualCtrl.SetImageSuiteURL(m_URL);
			m_NonVisualCtrl.SetImageSuiteDSN("iSite");		
			m_NonVisualCtrl.SetOptions(_T("HideLogoutButton,HideCloseTabButton"));
			// Give the initialize a try
			bRet = m_NonVisualCtrl.Initialize();

			if(!bRet)
			{
				long lError = m_NonVisualCtrl.GetLastErrorCode();
				AfxMessageBox("Error Initializing NonVisual Control");
			}
		}

		return bRet;
	}
	catch(...)
	{
		return FALSE;
	}
}

void CISESampleDlg::OnImagesTestimage() 
{
	//NonVisualControl should already be initialized...but just in case, make sure.
	if (InitializeNonVisualCtrl())
	{
		if (Login())
		{
			//StudyUID, SeriesUID, ImageUID
			CISEImageDlg dlg("1.2.124.113532.128.147.147.112.19990820.171917.2416342", 
							 "1.2.840.113619.2.30.1.1762533576.1803.935176946.247", 
							 "1.2.840.113619.2.30.1.1762533576.1803.935176946.269");

			dlg.SetNonVisualControl(&m_NonVisualCtrl);
			dlg.DoModal();
		}
	}
}
