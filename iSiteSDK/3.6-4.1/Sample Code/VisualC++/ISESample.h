// ISESample.h : main header file for the ISESAMPLE application
//

#if !defined(AFX_ISESAMPLE_H__EE015E4F_CEAB_4E93_A26D_2FA0568D5E92__INCLUDED_)
#define AFX_ISESAMPLE_H__EE015E4F_CEAB_4E93_A26D_2FA0568D5E92__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#ifndef __AFXWIN_H__
	#error include 'stdafx.h' before including this file for PCH
#endif

#include "resource.h"		// main symbols

/////////////////////////////////////////////////////////////////////////////
// CISESampleApp:
// See ISESample.cpp for the implementation of this class
//

class CISESampleApp : public CWinApp
{
public:
	CISESampleApp();

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CISESampleApp)
	public:
	virtual BOOL InitInstance();
	//}}AFX_VIRTUAL

// Implementation

	//{{AFX_MSG(CISESampleApp)
		// NOTE - the ClassWizard will add and remove member functions here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};


/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_ISESAMPLE_H__EE015E4F_CEAB_4E93_A26D_2FA0568D5E92__INCLUDED_)
