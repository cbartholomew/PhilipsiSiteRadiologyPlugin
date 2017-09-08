; CLW file contains information for the MFC ClassWizard

[General Info]
Version=1
LastClass=SetViewDlg
LastTemplate=CDialog
NewFileInclude1=#include "stdafx.h"
NewFileInclude2=#include "ISESample.h"

ClassCount=7
Class1=CISESampleApp
Class2=CISESampleDlg
Class3=CAboutDlg

ResourceCount=8
Resource1=IDD_DICOMLOOKUP
Resource2=IDR_MAINFRAME
Resource3=IDD_ISEDISPLAY_DIALOG
Class4=CISEDisplayDlg
Resource4=IDD_ISEIMAGE_DIALOG
Resource5=IDD_SETVIEWLDG
Class5=CISEImageDlg
Resource6=IDD_ISESAMPLE_DIALOG
Class6=DICOMLookupDlg
Resource7=IDD_ABOUTBOX
Class7=SetViewDlg
Resource8=IDR_IMAGES_MENU

[CLS:CISESampleApp]
Type=0
HeaderFile=ISESample.h
ImplementationFile=ISESample.cpp
Filter=N

[CLS:CISESampleDlg]
Type=0
HeaderFile=ISESampleDlg.h
ImplementationFile=ISESampleDlg.cpp
Filter=D
BaseClass=CDialog
VirtualFilter=dWC
LastObject=ID_IMAGES_TESTIMAGE

[CLS:CAboutDlg]
Type=0
HeaderFile=ISESampleDlg.h
ImplementationFile=ISESampleDlg.cpp
Filter=D
LastObject=CAboutDlg

[DLG:IDD_ABOUTBOX]
Type=1
Class=CAboutDlg
ControlCount=4
Control1=IDC_STATIC,static,1342177283
Control2=IDC_STATIC,static,1342308480
Control3=IDC_STATIC,static,1342308352
Control4=IDOK,button,1342373889

[DLG:IDD_ISESAMPLE_DIALOG]
Type=1
Class=CISESampleDlg
ControlCount=22
Control1=IDC_EDIT_SERVERIP,edit,1350631552
Control2=IDC_EDIT_URL,edit,1350631552
Control3=IDC_EDIT_SERVERPORT,edit,1350631552
Control4=IDC_EDIT_USER,edit,1350631552
Control5=IDC_EDIT_PASSWORD,edit,1350631584
Control6=IDC_EDIT_AUTHSOURCE,edit,1350631552
Control7=IDC_EDIT_PATIENTID,edit,1350631552
Control8=IDC_EDIT_ACCESSION,edit,1350631552
Control9=IDC_EDIT_ORGANIZATION,edit,1350631552
Control10=IDC_BUTTON_SHOWEXAM,button,1342242816
Control11=IDC_STATIC,static,1342308352
Control12=IDC_STATIC,static,1342308352
Control13=IDC_STATIC,static,1342308352
Control14=IDC_STATIC,button,1342177287
Control15=IDC_STATIC,static,1342308352
Control16=IDC_STATIC,static,1342308352
Control17=IDC_STATIC,static,1342308352
Control18=IDC_STATIC,button,1342177287
Control19=IDC_STATIC,static,1342308352
Control20=IDC_STATIC,static,1342308352
Control21=IDC_STATIC,static,1342308352
Control22=IDC_ISITENONVISUALCTRL1,{DD0E6EAF-2822-4d42-A2CF-7FED75DA06CA},1073807360

[DLG:IDD_ISEDISPLAY_DIALOG]
Type=1
Class=CISEDisplayDlg
ControlCount=1
Control1=IDC_ISITEENTERPRISECTRL1,{F21CDD6E-3FE2-4d78-8709-83D5D939B7B2},1342242816

[CLS:CISEDisplayDlg]
Type=0
HeaderFile=ISEDisplayDlg.h
ImplementationFile=ISEDisplayDlg.cpp
BaseClass=CDialog
Filter=D
VirtualFilter=dWC
LastObject=CISEDisplayDlg

[MNU:IDR_IMAGES_MENU]
Type=1
Class=?
Command1=ID_IMAGES_TESTIMAGE
CommandCount=1

[DLG:IDD_ISEIMAGE_DIALOG]
Type=1
Class=CISEImageDlg
ControlCount=13
Control1=IDC_BUTTON_FIRST,button,1342242816
Control2=IDC_BUTTON_NEXT,button,1342242816
Control3=IDC_BUTTON_PREV,button,1342242816
Control4=IDC_BUTTON_LAST,button,1342242816
Control5=IDC_BUTTON_ROTATE,button,1342242816
Control6=IDC_BUTTON_FLIP,button,1342242816
Control7=IDC_BUTTON_WNDINFO,button,1342242816
Control8=IDC_BUTTON_WNDINFOS,button,1342242816
Control9=IDC_BUTTON_DICOMVALUE,button,1342242816
Control10=IDC_BUTTON_SETVIEW,button,1342242816
Control11=IDC_BUTTON_DICOMINSTANCE,button,1342242816
Control12=IDC_OPEN_STACK,button,1342242816
Control13=IDC_ISITEIMAGECTRL1,{C4D73990-8C71-4806-9904-1509BB6C0BF7},1342242816

[CLS:CISEImageDlg]
Type=0
HeaderFile=ISEImageDlg.h
ImplementationFile=ISEImageDlg.cpp
BaseClass=CDialog
Filter=D
LastObject=CISEImageDlg
VirtualFilter=dWC

[DLG:IDD_DICOMLOOKUP]
Type=1
Class=DICOMLookupDlg
ControlCount=6
Control1=IDCANCEL,button,1342242816
Control2=IDC_STATIC,static,1342308352
Control3=IDC_COMBO_DICOM_VALUES,combobox,1344340226
Control4=IDC_BUTTON_LOOKUP,button,1342242816
Control5=IDC_STATIC,static,1342308352
Control6=IDC_STATIC_DICOM_RESULT,static,1342308352

[CLS:DICOMLookupDlg]
Type=0
HeaderFile=DICOMLookupDlg.h
ImplementationFile=DICOMLookupDlg.cpp
BaseClass=CDialog
Filter=D
LastObject=DICOMLookupDlg
VirtualFilter=dWC

[DLG:IDD_SETVIEWLDG]
Type=1
Class=SetViewDlg
ControlCount=12
Control1=IDOK,button,1342242817
Control2=IDCANCEL,button,1342242816
Control3=IDC_EDIT_ZOOM_LEVEL,edit,1350631552
Control4=IDC_EDIT_WINDOW_TOP,edit,1350631552
Control5=IDC_EDIT_WINDOW_LEFT,edit,1350631552
Control6=IDC_EDIT_WINDOW_CONTER,edit,1350631552
Control7=IDC_EDIT_WINDOW_WIDTH,edit,1350631552
Control8=IDC_STATIC,static,1342308352
Control9=IDC_STATIC,static,1342308352
Control10=IDC_STATIC,static,1342308352
Control11=IDC_STATIC,static,1342308352
Control12=IDC_STATIC,static,1342308352

[CLS:SetViewDlg]
Type=0
HeaderFile=SetViewDlg.h
ImplementationFile=SetViewDlg.cpp
BaseClass=CDialog
Filter=D
LastObject=ID_IMAGES_TESTIMAGE
VirtualFilter=dWC

