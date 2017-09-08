// ISEImageDlg.cpp : implementation file
//

#include "stdafx.h"
#include "ISESample.h"
#include "ISEImageDlg.h"
#include "DICOMLookupDlg.h"
#include "SetViewDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CISEImageDlg dialog


CISEImageDlg::CISEImageDlg(const CString StudyUID, 
						   const CString SeriesUID, 
						   const CString ImageUID, 
						   CWnd* pParent /*=NULL*/)

	: CDialog(CISEImageDlg::IDD, pParent), 
	m_StudyUID(StudyUID), 
	m_SeriesUID(SeriesUID), 
	m_ImageUID(ImageUID)
{
	//{{AFX_DATA_INIT(CISEImageDlg)
		// NOTE: the ClassWizard will add member initialization here
	//}}AFX_DATA_INIT
	m_pNonVisualCtrl = NULL;
	m_Flip = false;
	m_Rotate = 0;
}


void CISEImageDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CISEImageDlg)
	DDX_Control(pDX, IDC_ISITEIMAGECTRL1, m_ImageCtrl);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CISEImageDlg, CDialog)
	//{{AFX_MSG_MAP(CISEImageDlg)
	ON_BN_CLICKED(IDC_BUTTON_FIRST, OnButtonFirst)
	ON_BN_CLICKED(IDC_BUTTON_LAST, OnButtonLast)
	ON_BN_CLICKED(IDC_BUTTON_NEXT, OnButtonNext)
	ON_BN_CLICKED(IDC_BUTTON_PREV, OnButtonPrev)
	ON_BN_CLICKED(IDC_BUTTON_ROTATE, OnButtonRotate)
	ON_BN_CLICKED(IDC_BUTTON_FLIP, OnButtonFlip)
	ON_BN_CLICKED(IDC_BUTTON_WNDINFO, OnButtonWindowInfo)
	ON_BN_CLICKED(IDC_BUTTON_WNDINFOS, OnButtonWindowInfoStatic)
	ON_BN_CLICKED(IDC_BUTTON_DICOMVALUE, OnButtonLookupDicomValue)
	ON_BN_CLICKED(IDC_BUTTON_SETVIEW, OnButtonSetView)
	ON_WM_SIZE()
	ON_BN_CLICKED(IDC_BUTTON_DICOMINSTANCE, OnButtonDICOMInstance)
	ON_BN_CLICKED(IDC_OPEN_STACK, OnOpenStack)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CISEImageDlg message handlers


BOOL CISEImageDlg::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	InitializeCtrl();
	OpenImage();
	
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

BOOL CISEImageDlg::InitializeCtrl()
{
	BOOL bRet = false;

	if (m_pNonVisualCtrl != NULL)
	{
		// Set these default options
		// Initialize the visual control
		bRet = m_ImageCtrl.Initialize(m_pNonVisualCtrl->GetControlUnknown());
		if(bRet == FALSE)
		{
			AfxMessageBox("Error Initializing Image Control");
		}
	}
	
	return bRet;
}

// ***********************************************
// Opens an image
//
BOOL CISEImageDlg::OpenImage()
{
	m_singleImage = true;
	
	if (m_ImageCtrl.DisplayImage(m_StudyUID, m_SeriesUID, m_ImageUID))
	{
		// Disable the buttons
		((CButton *) GetDlgItem(IDC_BUTTON_FIRST))->EnableWindow(FALSE);
		((CButton *) GetDlgItem(IDC_BUTTON_NEXT))->EnableWindow(FALSE);
		((CButton *) GetDlgItem(IDC_BUTTON_PREV))->EnableWindow(FALSE);
		((CButton *) GetDlgItem(IDC_BUTTON_LAST))->EnableWindow(FALSE);
		return TRUE;
	}
	
	return FALSE;
}

// ***********************************************
// Opens a stack of images.
//
BOOL CISEImageDlg::OpenStack()
{
	m_singleImage = false;
	BOOL bRet = m_ImageCtrl.DisplayStack(m_StudyUID, m_SeriesUID);

	if (bRet == FALSE)
	{
		return FALSE;
	}

	CString strInfo = m_ImageCtrl.GetStaticWindowInfo();
	int nStart = strInfo.Find("<ImageUIDs>");
	int nEnd   = strInfo.Find("</ImageUIDs>");

	CString strData = strInfo.Mid(nStart + 12, nEnd - nStart);

	m_ImageList.RemoveAll();
	strData.TrimLeft();
	strData.TrimRight();
	while (!strData.IsEmpty())
	{
		nStart = strData.Find( "<UID>" );
		nEnd   = strData.Find( "</UID>" );
		if (nStart == -1 && nEnd == -1 )
		{
				break;
		}
		
		m_ImageList.Add(strData.Mid(nStart + 5, nEnd - nStart - 5));
		strData = strData.Mid(nEnd + 6);
		strData.TrimLeft();
		strData.TrimRight();
	}		
	m_CurrImage = 0;

	// Dispaly the prev button
	((CButton *) GetDlgItem(IDC_BUTTON_PREV))->EnableWindow(FALSE);
	((CButton *) GetDlgItem(IDC_BUTTON_FIRST))->EnableWindow(TRUE);
	((CButton *) GetDlgItem(IDC_BUTTON_NEXT))->EnableWindow(TRUE);
	((CButton *) GetDlgItem(IDC_BUTTON_LAST))->EnableWindow(TRUE);
	
	return bRet;
}


BOOL CISEImageDlg::CloseImage()
{
	return TRUE;
}

BOOL CISEImageDlg::CloseStack()
{
	return TRUE;
}

void CISEImageDlg::OnCancel()
{
	CDialog::OnCancel();
}

void CISEImageDlg::OnButtonFirst() 
{
	if (m_singleImage)
	{
		return;
	}
	
	m_CurrImage = 0;
	m_ImageCtrl.SetWindowImage(m_ImageList.ElementAt(m_CurrImage));
	
	((CButton *) GetDlgItem(IDC_BUTTON_FIRST))->EnableWindow(TRUE);
	((CButton *) GetDlgItem(IDC_BUTTON_NEXT))->EnableWindow(TRUE);
	((CButton *) GetDlgItem(IDC_BUTTON_PREV))->EnableWindow(FALSE);
	((CButton *) GetDlgItem(IDC_BUTTON_LAST))->EnableWindow(TRUE);

	this->RedrawWindow();
}

void CISEImageDlg::OnButtonLast() 
{
	if (m_singleImage)
	{
		return;
	}
	
	m_CurrImage = m_ImageList.GetSize() - 1;
	m_ImageCtrl.SetWindowImage(m_ImageList.ElementAt(m_CurrImage));
	((CButton *) GetDlgItem(IDC_BUTTON_NEXT))->EnableWindow(FALSE);

	((CButton *) GetDlgItem(IDC_BUTTON_FIRST))->EnableWindow(TRUE);
	((CButton *) GetDlgItem(IDC_BUTTON_NEXT))->EnableWindow(FALSE);
	((CButton *) GetDlgItem(IDC_BUTTON_PREV))->EnableWindow(TRUE);
	((CButton *) GetDlgItem(IDC_BUTTON_LAST))->EnableWindow(TRUE);

	this->RedrawWindow();
}

void CISEImageDlg::OnButtonNext() 
{
	if (m_singleImage)
	{
		return;
	}

	if (m_CurrImage < m_ImageList.GetSize() - 1)
	{
		m_CurrImage++;
	}
	
	m_ImageCtrl.SetWindowImage(m_ImageList.ElementAt(m_CurrImage));

	// Enable the button
	((CButton *) GetDlgItem(IDC_BUTTON_LAST))->EnableWindow(TRUE);
	((CButton *) GetDlgItem(IDC_BUTTON_NEXT))->EnableWindow(TRUE);
	((CButton *) GetDlgItem(IDC_BUTTON_PREV))->EnableWindow(TRUE);
	((CButton *) GetDlgItem(IDC_BUTTON_FIRST))->EnableWindow(TRUE);		
	if (m_CurrImage == m_ImageList.GetSize() - 1)
	{
		// This is the last item
		((CButton *) GetDlgItem(IDC_BUTTON_NEXT))->EnableWindow(FALSE);			
	} 

	m_ImageCtrl.UpdateData();

	RedrawWindow();
}

void CISEImageDlg::OnButtonPrev() 
{
	if (m_singleImage)
	{
		return;
	}
	
	if (m_CurrImage >= 1)
	{
		m_CurrImage--;
	}

	m_ImageCtrl.SetWindowImage( m_ImageList.ElementAt(m_CurrImage));

	// Enable the button
	((CButton *) GetDlgItem(IDC_BUTTON_LAST))->EnableWindow(TRUE);
	((CButton *) GetDlgItem(IDC_BUTTON_NEXT))->EnableWindow(TRUE);
	((CButton *) GetDlgItem(IDC_BUTTON_PREV))->EnableWindow(TRUE);
	((CButton *) GetDlgItem(IDC_BUTTON_FIRST))->EnableWindow(TRUE);		
	
	if (m_CurrImage == 0)
	{
		// This is the last item
		((CButton *) GetDlgItem(IDC_BUTTON_PREV))->EnableWindow(FALSE);			
	}
	
	RedrawWindow();
}

void CISEImageDlg::OnButtonRotate() 
{
	m_Rotate = (m_Rotate + 1) % 4;
	m_ImageCtrl.SetRotationOrientation(m_Flip, m_Rotate);		
}

void CISEImageDlg::OnButtonFlip() 
{
	m_Flip = (! m_Flip);
	m_ImageCtrl.SetRotationOrientation(m_Flip, m_Rotate);	
}

void CISEImageDlg::OnButtonWindowInfo() 
{
	CString strContent = m_ImageCtrl.GetWindowContext();
	AfxMessageBox(strContent);
}

void CISEImageDlg::OnButtonWindowInfoStatic() 
{
	CString strContent = m_ImageCtrl.GetStaticWindowInfo();
	AfxMessageBox(strContent);	
}

void CISEImageDlg::OnButtonLookupDicomValue() 
{
	DICOMLookupDlg dlg;
	dlg.SetImageControl(&m_ImageCtrl);
	dlg.DoModal();
}

void CISEImageDlg::OnButtonSetView() 
{	
	SetViewDlg dlg;
	dlg.SetImageControl(&m_ImageCtrl);
	dlg.DoModal();
}

void CISEImageDlg::OnSize(UINT nType, int cx, int cy) 
{
	CDialog::OnSize(nType, cx, cy);
}

void CISEImageDlg::OnButtonDICOMInstance() 
{
	// Get the static info from the window
	CStringArray saImageUIDs;
	GetImageUIDs(saImageUIDs);	

	// Select the directory on where to save the data.
	SelectDirectory();

	for (int i =0; i < saImageUIDs.GetSize(); i++)
	{
		GetDICOMInstance(saImageUIDs.ElementAt(i), m_Directory);
	}
}

void CISEImageDlg::GetImageUIDs( CStringArray& saImageUIDs)
{
	CString strInfo = m_ImageCtrl.GetStaticWindowInfo();
	int nStart = strInfo.Find("<ImageUIDs>");
	int nEnd   = strInfo.Find("</ImageUIDs>");

	CString strData = strInfo.Mid(nStart + 12, nEnd - nStart);

	saImageUIDs.RemoveAll();
	strData.TrimLeft();
	strData.TrimRight();
	
	while (! strData.IsEmpty() )
	{
		nStart = strData.Find( "<UID>" );
		nEnd   = strData.Find( "</UID>" );
		
		if (nStart == -1 && nEnd == -1 )
		{
			break;
		}
		
		saImageUIDs.Add(strData.Mid( nStart + 5, nEnd - nStart - 5));
		strData = strData.Mid( nEnd + 6);
		strData.TrimLeft();
		strData.TrimRight();
	}			
}

void CISEImageDlg::GetDICOMInstance(LPCTSTR ImageUID, LPCTSTR Path)
{
	long nLength;
	VARIANT varData;
	
	nLength = m_ImageCtrl.GetDICOMInstance(ImageUID, &varData);
	
	if (nLength > 0)
	{
		CString filename = CString(Path) + CString(ImageUID) + _T(".dcm");
		CFile file;
		file.Open(filename, CFile::modeCreate | CFile::modeWrite, 0);
				
		SAFEARRAY *psa = varData.parray;
		unsigned char *pData = NULL;
		unsigned char *pRes = new unsigned char[nLength];

		HRESULT hr = SafeArrayAccessData(psa,  reinterpret_cast<void**>(&pData));
		if (pData && SUCCEEDED(hr))
		{
			memcpy(pRes, pData, nLength);
		}
		
		hr = SafeArrayUnaccessData(psa);
					
		file.WriteHuge(pRes, nLength);
		file.Close();

		// delete the SafeArray
		::SafeArrayDestroy(psa);
		
		// delete the data
		delete [] pRes;
	}
}


void CISEImageDlg::SelectDirectory()
{
	BROWSEINFO bi;
	ZeroMemory(&bi, sizeof(BROWSEINFO));
	LPITEMIDLIST pidl;
	char ach[255];

	bi.hwndOwner = GetSafeHwnd();
	bi.pidlRoot = NULL;
	bi.lpszTitle = ("Folder");

	pidl = SHBrowseForFolder(&bi);
	if (pidl)
	{
		SHGetPathFromIDList(pidl, ach);
		FreeShellHandle(pidl);
		m_Directory = CString(ach) + _T("\\");
	} 
	else
	{
		m_Directory = _T("C:\\Temp\\");
	}
}

void CISEImageDlg::FreeShellHandle(void *p) 
{ 
	IMalloc *pm; 
	SHGetMalloc(&pm);
	
	if (pm) 
	{
		pm->Free(p);
		pm->Release();
	}
} 

void CISEImageDlg::SetNonVisualControl(CiSiteNonVisual *NonVisualControl)
{
	if (NonVisualControl != NULL)
	{
		m_pNonVisualCtrl = NonVisualControl;
	}
}

void CISEImageDlg::OnOpenStack() 
{
	m_ImageCtrl.CloseDisplay();
	OpenStack();
}
