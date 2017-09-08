// DICOMLookupDlg.cpp : implementation file
//

#include "stdafx.h"
#include "ISESample.h"
#include "DICOMLookupDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// DICOMLookupDlg dialog


DICOMLookupDlg::DICOMLookupDlg(CWnd* pParent /*=NULL*/)
	: CDialog(DICOMLookupDlg::IDD, pParent), m_pImageCtrl(NULL)
{
	//{{AFX_DATA_INIT(DICOMLookupDlg)
		// NOTE: the ClassWizard will add member initialization here
	//}}AFX_DATA_INIT
}


void DICOMLookupDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(DICOMLookupDlg)
	DDX_Control(pDX, IDC_STATIC_DICOM_RESULT, m_ctrlDICOMResult);
	DDX_Control(pDX, IDC_COMBO_DICOM_VALUES, m_ctrlCICOMCombo);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(DICOMLookupDlg, CDialog)
	//{{AFX_MSG_MAP(DICOMLookupDlg)
	ON_BN_CLICKED(IDC_BUTTON_LOOKUP, OnButtonLookup)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// DICOMLookupDlg message handlers

BOOL DICOMLookupDlg::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	// TODO: Add extra initialization here
	
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

void DICOMLookupDlg::OnButtonLookup() 
{
	CString strSelection;
	CString strValue;
	int nCurr = m_ctrlCICOMCombo.GetCurSel();
	if (nCurr >= 0)
	{
		m_ctrlCICOMCombo.GetLBText(nCurr, strSelection);
	}
	else
	{
		m_ctrlCICOMCombo.GetWindowText(strSelection);
	}

	strValue = m_pImageCtrl->GetDICOMValue(strSelection);
	
	m_ctrlDICOMResult.SetWindowText(strValue);
}

void DICOMLookupDlg::OnCancel() 
{
	// TODO: Add extra cleanup here
	
	CDialog::OnCancel();
}

void DICOMLookupDlg::SetImageControl(CiSiteImage *pControl)
{
	if (pControl != NULL)
	{
		m_pImageCtrl = pControl;
	}
}
