# Microsoft Developer Studio Project File - Name="ISESample" - Package Owner=<4>
# Microsoft Developer Studio Generated Build File, Format Version 6.00
# ** DO NOT EDIT **

# TARGTYPE "Win32 (x86) Application" 0x0101

CFG=ISESample - Win32 Debug
!MESSAGE This is not a valid makefile. To build this project using NMAKE,
!MESSAGE use the Export Makefile command and run
!MESSAGE 
!MESSAGE NMAKE /f "ISESample.mak".
!MESSAGE 
!MESSAGE You can specify a configuration when running NMAKE
!MESSAGE by defining the macro CFG on the command line. For example:
!MESSAGE 
!MESSAGE NMAKE /f "ISESample.mak" CFG="ISESample - Win32 Debug"
!MESSAGE 
!MESSAGE Possible choices for configuration are:
!MESSAGE 
!MESSAGE "ISESample - Win32 Release" (based on "Win32 (x86) Application")
!MESSAGE "ISESample - Win32 Debug" (based on "Win32 (x86) Application")
!MESSAGE 

# Begin Project
# PROP AllowPerConfigDependencies 0
# PROP Scc_ProjName "Perforce Project"
# PROP Scc_LocalPath "."
CPP=cl.exe
MTL=midl.exe
RSC=rc.exe

!IF  "$(CFG)" == "ISESample - Win32 Release"

# PROP BASE Use_MFC 6
# PROP BASE Use_Debug_Libraries 0
# PROP BASE Output_Dir "Release"
# PROP BASE Intermediate_Dir "Release"
# PROP BASE Target_Dir ""
# PROP Use_MFC 6
# PROP Use_Debug_Libraries 0
# PROP Output_Dir "Release"
# PROP Intermediate_Dir "Release"
# PROP Target_Dir ""
# ADD BASE CPP /nologo /MD /W3 /GX /O2 /D "WIN32" /D "NDEBUG" /D "_WINDOWS" /D "_AFXDLL" /Yu"stdafx.h" /FD /c
# ADD CPP /nologo /MD /W3 /GX /O2 /D "WIN32" /D "NDEBUG" /D "_WINDOWS" /D "_AFXDLL" /D "_MBCS" /Yu"stdafx.h" /FD /c
# ADD BASE MTL /nologo /D "NDEBUG" /mktyplib203 /win32
# ADD MTL /nologo /D "NDEBUG" /mktyplib203 /win32
# ADD BASE RSC /l 0x409 /d "NDEBUG" /d "_AFXDLL"
# ADD RSC /l 0x409 /d "NDEBUG" /d "_AFXDLL"
BSC32=bscmake.exe
# ADD BASE BSC32 /nologo
# ADD BSC32 /nologo
LINK32=link.exe
# ADD BASE LINK32 /nologo /subsystem:windows /machine:I386
# ADD LINK32 /nologo /subsystem:windows /machine:I386

!ELSEIF  "$(CFG)" == "ISESample - Win32 Debug"

# PROP BASE Use_MFC 6
# PROP BASE Use_Debug_Libraries 1
# PROP BASE Output_Dir "Debug"
# PROP BASE Intermediate_Dir "Debug"
# PROP BASE Target_Dir ""
# PROP Use_MFC 6
# PROP Use_Debug_Libraries 1
# PROP Output_Dir "Debug"
# PROP Intermediate_Dir "Debug"
# PROP Target_Dir ""
# ADD BASE CPP /nologo /MDd /W3 /Gm /GX /ZI /Od /D "WIN32" /D "_DEBUG" /D "_WINDOWS" /D "_AFXDLL" /Yu"stdafx.h" /FD /GZ /c
# ADD CPP /nologo /MDd /W3 /Gm /GX /ZI /Od /D "WIN32" /D "_DEBUG" /D "_WINDOWS" /D "_AFXDLL" /D "_MBCS" /FR /Yu"stdafx.h" /FD /GZ /c
# ADD BASE MTL /nologo /D "_DEBUG" /mktyplib203 /win32
# ADD MTL /nologo /D "_DEBUG" /mktyplib203 /win32
# ADD BASE RSC /l 0x409 /d "_DEBUG" /d "_AFXDLL"
# ADD RSC /l 0x409 /d "_DEBUG" /d "_AFXDLL"
BSC32=bscmake.exe
# ADD BASE BSC32 /nologo
# ADD BSC32 /nologo
LINK32=link.exe
# ADD BASE LINK32 /nologo /subsystem:windows /debug /machine:I386 /pdbtype:sept
# ADD LINK32 /nologo /subsystem:windows /debug /machine:I386 /pdbtype:sept

!ENDIF 

# Begin Target

# Name "ISESample - Win32 Release"
# Name "ISESample - Win32 Debug"
# Begin Group "Source Files"

# PROP Default_Filter "cpp;c;cxx;rc;def;r;odl;idl;hpj;bat"
# Begin Source File

SOURCE=.\DICOMLookupDlg.cpp
# End Source File
# Begin Source File

SOURCE=.\ISEDisplayDlg.cpp
# End Source File
# Begin Source File

SOURCE=.\ISEImageDlg.cpp
# End Source File
# Begin Source File

SOURCE=.\ISESample.cpp
# End Source File
# Begin Source File

SOURCE=.\ISESample.rc
# End Source File
# Begin Source File

SOURCE=.\ISESampleDlg.cpp
# End Source File
# Begin Source File

SOURCE=.\isiteenterprise.cpp
# End Source File
# Begin Source File

SOURCE=.\isiteenterprise1.cpp
# End Source File
# Begin Source File

SOURCE=.\isiteimage.cpp
# End Source File
# Begin Source File

SOURCE=.\isiteimage1.cpp
# End Source File
# Begin Source File

SOURCE=.\isitenonvisual.cpp
# End Source File
# Begin Source File

SOURCE=.\isitenonvisual1.cpp
# End Source File
# Begin Source File

SOURCE=.\SetViewDlg.cpp
# End Source File
# Begin Source File

SOURCE=.\StdAfx.cpp
# ADD CPP /Yc"stdafx.h"
# End Source File
# End Group
# Begin Group "Header Files"

# PROP Default_Filter "h;hpp;hxx;hm;inl"
# Begin Source File

SOURCE=.\DICOMLookupDlg.h
# End Source File
# Begin Source File

SOURCE=.\ISEDisplayDlg.h
# End Source File
# Begin Source File

SOURCE=.\ISEImageDlg.h
# End Source File
# Begin Source File

SOURCE=.\ISESample.h
# End Source File
# Begin Source File

SOURCE=.\ISESampleDlg.h
# End Source File
# Begin Source File

SOURCE=.\isiteenterprise.h
# End Source File
# Begin Source File

SOURCE=.\isiteenterprise1.h
# End Source File
# Begin Source File

SOURCE=.\isiteimage.h
# End Source File
# Begin Source File

SOURCE=.\isiteimage1.h
# End Source File
# Begin Source File

SOURCE=.\isitenonvisual.h
# End Source File
# Begin Source File

SOURCE=.\isitenonvisual1.h
# End Source File
# Begin Source File

SOURCE=.\Resource.h
# End Source File
# Begin Source File

SOURCE=.\SetViewDlg.h
# End Source File
# Begin Source File

SOURCE=.\StdAfx.h
# End Source File
# End Group
# Begin Group "Resource Files"

# PROP Default_Filter "ico;cur;bmp;dlg;rc2;rct;bin;rgs;gif;jpg;jpeg;jpe"
# Begin Source File

SOURCE=.\res\ISESample.ico
# End Source File
# Begin Source File

SOURCE=.\res\ISESample.rc2
# End Source File
# End Group
# Begin Source File

SOURCE=.\ReadMe.txt
# End Source File
# End Target
# End Project
# Section ISESample : {45099EB8-9E7A-4E10-A34D-B9C5F210D55A}
# 	2:5:Class:CiSiteImage
# 	2:10:HeaderFile:isiteimage.h
# 	2:8:ImplFile:isiteimage.cpp
# End Section
# Section ISESample : {D532EB23-D3ED-4EF1-BC90-360AA2CA2388}
# 	2:5:Class:CiSiteNonVisual
# 	2:10:HeaderFile:isitenonvisual.h
# 	2:8:ImplFile:isitenonvisual.cpp
# End Section
# Section ISESample : {E40D9297-AFA0-4D4B-91D4-9A9E49DFC407}
# 	2:5:Class:CiSiteNonVisual1
# 	2:10:HeaderFile:isitenonvisual1.h
# 	2:8:ImplFile:isitenonvisual1.cpp
# End Section
# Section ISESample : {D6613A22-14C4-40E1-9E41-B5EB428FCEA9}
# 	2:5:Class:CiSiteEnterprise
# 	2:10:HeaderFile:isiteenterprise.h
# 	2:8:ImplFile:isiteenterprise.cpp
# End Section
# Section ISESample : {46CF8BCA-84A1-4437-847A-DC29496E01A5}
# 	2:21:DefaultSinkHeaderFile:isitenonvisual.h
# 	2:16:DefaultSinkClass:CiSiteNonVisual
# End Section
# Section ISESample : {11F110A2-BF9D-4795-9CE3-067740380A3F}
# 	2:21:DefaultSinkHeaderFile:isiteimage.h
# 	2:16:DefaultSinkClass:CiSiteImage
# End Section
# Section ISESample : {368EB419-014E-4FBB-9AEB-FE47FDB6436B}
# 	2:21:DefaultSinkHeaderFile:isiteenterprise.h
# 	2:16:DefaultSinkClass:CiSiteEnterprise
# End Section
# Section ISESample : {D833D762-1E4A-4747-ACF0-5351C19DEBEC}
# 	2:5:Class:CiSiteImage
# 	2:10:HeaderFile:isiteimage.h
# 	2:8:ImplFile:isiteimage.cpp
# End Section
# Section ISESample : {D765861F-36F0-4465-BD94-1B027F99E44A}
# 	2:21:DefaultSinkHeaderFile:isiteenterprise.h
# 	2:16:DefaultSinkClass:CiSiteEnterprise
# End Section
# Section ISESample : {A8A05DD2-35E5-45B7-B5C7-934F7397475E}
# 	2:21:DefaultSinkHeaderFile:isiteimage1.h
# 	2:16:DefaultSinkClass:CiSiteImage1
# End Section
# Section ISESample : {E799584B-665C-443D-A563-DE95022A4347}
# 	2:5:Class:CiSiteImage1
# 	2:10:HeaderFile:isiteimage1.h
# 	2:8:ImplFile:isiteimage1.cpp
# End Section
# Section ISESample : {DE968799-1CE9-410E-A0B5-97758D8A13D9}
# 	2:5:Class:CiSiteEnterprise
# 	2:10:HeaderFile:isiteenterprise.h
# 	2:8:ImplFile:isiteenterprise.cpp
# End Section
# Section ISESample : {908BB23E-569C-490B-8E25-CAFDD6271D95}
# 	2:21:DefaultSinkHeaderFile:isiteenterprise1.h
# 	2:16:DefaultSinkClass:CiSiteEnterprise1
# End Section
# Section ISESample : {D0BE2767-CD10-4B56-8795-C6BC37A8572F}
# 	2:21:DefaultSinkHeaderFile:isitenonvisual.h
# 	2:16:DefaultSinkClass:CiSiteNonVisual
# End Section
# Section ISESample : {A34DB1A0-978C-4EEC-8DDA-93849CFD2B17}
# 	2:21:DefaultSinkHeaderFile:isiteimage.h
# 	2:16:DefaultSinkClass:CiSiteImage
# End Section
# Section ISESample : {8E62F1EA-1792-4F33-BE22-0834A9BBCCBF}
# 	2:5:Class:CiSiteEnterprise1
# 	2:10:HeaderFile:isiteenterprise1.h
# 	2:8:ImplFile:isiteenterprise1.cpp
# End Section
# Section ISESample : {EF53A421-0315-4622-8FBF-D995FA4D8A53}
# 	2:21:DefaultSinkHeaderFile:isitenonvisual1.h
# 	2:16:DefaultSinkClass:CiSiteNonVisual1
# End Section
# Section ISESample : {416388B6-20A5-48B3-A93C-552AE169833F}
# 	2:5:Class:CiSiteNonVisual
# 	2:10:HeaderFile:isitenonvisual.h
# 	2:8:ImplFile:isitenonvisual.cpp
# End Section
