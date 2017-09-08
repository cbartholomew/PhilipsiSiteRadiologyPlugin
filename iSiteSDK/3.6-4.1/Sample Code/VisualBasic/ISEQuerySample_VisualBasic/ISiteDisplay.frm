VERSION 5.00
Object = "{D335FE4C-E657-45de-8148-CD1209D4E12A}#4.1#0"; "isite.ocx"
Begin VB.Form ISiteDisplay 
   Caption         =   "iSite Enterprise"
   ClientHeight    =   9180
   ClientLeft      =   2460
   ClientTop       =   2205
   ClientWidth     =   13155
   LinkTopic       =   "Form2"
   ScaleHeight     =   9180
   ScaleWidth      =   13155
   Begin ISITELib.iSiteEnterprise iSiteEnterprise1 
      Height          =   9015
      Left            =   120
      TabIndex        =   1
      Top             =   120
      Width           =   12975
      _Version        =   196611
      _ExtentX        =   22886
      _ExtentY        =   15901
      _StockProps     =   0
   End
End
Attribute VB_Name = "ISiteDisplay"
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
    iSiteEnterprise1.Options = "DisableAutoLogout,HideFolders,HideLogoutButton,HideCloseTabButton,DisablePreferences"

    ' Initialize the visual control
    InitializeEnterpriseCtrl = iSiteEnterprise1.Initialize(ISiteSample.iSiteNonVisual1)
    If InitializeEnterpriseCtrl = False Then
        MsgBox "Error Initializing Enterprise Control"
    End If
End Function

Function OpenCanvasPage()
    ' just a sanity check
    If ExamID <> "" Then
        ' Note that openning the exam will also open the patient so we will
        ' have to close the patient as well as the exam later
        CanvasPage = iSiteEnterprise1.OpenCanvasPage(ExamID, "", 1, 0, 1)
        If CanvasPage = False Then
            MsgBox "Error Opening CanvasPage"
        End If
    End If
End Function



