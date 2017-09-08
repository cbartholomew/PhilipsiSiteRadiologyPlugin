// Helper.cpp : Implementation of CHelper
#include "stdafx.h"
#include "WinHelper.h"
#include "Helper.h"

/////////////////////////////////////////////////////////////////////////////
// CHelper


STDMETHODIMP CHelper::CreateProgressDlg(int nLower, int nUpper)
{
	AFX_MANAGE_STATE(AfxGetStaticModuleState())

  m_ProgressDlg.SetStartImage(nLower);
  m_ProgressDlg.SetEndImage(nUpper);

	CWnd *pWnd = NULL;
	pWnd = CWnd::FindWindow(NULL,"iSiteEnterprise");	 

	if (pWnd == NULL)
		pWnd = CWnd::FindWindow(NULL, "Philips iSite - Microsoft Internet Explorer");

	
	if (pWnd == NULL)
		pWnd = CWnd::FindWindow(NULL, "iSite Radiology");

	m_ProgressDlg.Create(pWnd); 
  m_ProgressDlg.ShowWindow(SW_SHOW); 
  m_ProgressDlg.UpdateWindow(); 

	return S_OK;
}

STDMETHODIMP CHelper::UpdateProgress(int nPos, VARIANT_BOOL *pSuccess)
{
	AFX_MANAGE_STATE(AfxGetStaticModuleState())

  *pSuccess = m_ProgressDlg.SetCurrentImage(nPos);

	return S_OK;
}

STDMETHODIMP CHelper::DestroyProgressDlg()
{
	AFX_MANAGE_STATE(AfxGetStaticModuleState())

	m_ProgressDlg.DestroyWindow();

	return S_OK;
}

STDMETHODIMP CHelper::BrowseForFolder(BSTR *Folder)
{
  try
  {
	  BROWSEINFO bi;
    ZeroMemory(&bi, sizeof(BROWSEINFO));
    LPITEMIDLIST pidl;
    char ach[255];
    CString strFolder;

    bi.hwndOwner = GetActiveWindow();
    bi.pidlRoot = NULL;
    bi.ulFlags = BIF_RETURNONLYFSDIRS;
    bi.lpszTitle = ("Temporary DICOM Image Folder");

    pidl = SHBrowseForFolder(&bi);
    if (pidl)
    {
      SHGetPathFromIDList(pidl, ach);
      FreeShellHandle(pidl);
		  strFolder = CString(ach);
    }

    *Folder = strFolder.AllocSysString();

  }
  catch (...)
  {
  }


	return S_OK;
}


void CHelper::FreeShellHandle(void *p) 
{ 
  try
  {
    IMalloc *pm; 
    SHGetMalloc(&pm);
    if (pm) 
    {
      pm->Free(p);
      pm->Release();
    }
  }
  catch (...)
  {
  }
}
