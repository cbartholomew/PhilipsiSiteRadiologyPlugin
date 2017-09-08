VERSION 5.00
Object = "{D335FE4C-E657-45de-8148-CD1209D4E12A}#4.1#0"; "isite.ocx"
Begin VB.Form iSiteDisplay 
   Caption         =   "iSite 4.1 Enterprise"
   ClientHeight    =   9150
   ClientLeft      =   2460
   ClientTop       =   2205
   ClientWidth     =   12750
   LinkTopic       =   "Form2"
   ScaleHeight     =   9150
   ScaleWidth      =   12750
   Begin ISITELib.iSiteEnterprise iSiteEnterprise1 
      Height          =   14895
      Left            =   0
      TabIndex        =   0
      Top             =   0
      Width           =   18975
      _Version        =   262144
      _ExtentX        =   33470
      _ExtentY        =   26273
      _StockProps     =   0
      Options         =   "StentorBackEnd"
   End
End
Attribute VB_Name = "iSiteDisplay"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Public ExamID As String

Private Sub Form_Load()
    If InitializeEnterpriseCtrl() Then
        Call OpenCanvasPage
    End If
End Sub

Function InitializeEnterpriseCtrl() _
    ' Set these default options
    iSiteEnterprise1.Options = "StentorBackEnd,DisableAutoLogout,HideFolders,HideCloseTabButton,DisablePreferences"

    ' Initialize the visual control
    InitializeEnterpriseCtrl = iSiteEnterprise1.Initialize(iSiteSample.iSiteNonVisual1)
    If InitializeEnterpriseCtrl = False Then
        MsgBox "Error Initializing Enterprise Control"
    End If
End Function

Function OpenCanvasPage() _
    ' just a sanity check
    If ExamID <> "" Then
        ' Note that openning the exam will also open the patient so we will
        ' have to close the patient as well as the exam later
        OpenCanvas = iSiteEnterprise1.OpenCanvasPage(ExamID, "", 1, 0, 1)
        If OpenCanvas = False Then
            Dim errCode
            errCode = iSiteNonVisual1.GetLastErrorCode()
            MsgBox "Error Opening Canvas Page. Last error code: " & errCode
        End If
    End If
End Function



