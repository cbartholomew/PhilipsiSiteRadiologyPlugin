VERSION 5.00
Object = "{D335FE4C-E657-45de-8148-CD1209D4E12A}#4.1#0"; "isite.ocx"
Begin VB.Form ISiteDisplay 
   Caption         =   "iSite Enterprise"
   ClientHeight    =   8790
   ClientLeft      =   3705
   ClientTop       =   3390
   ClientWidth     =   12615
   LinkTopic       =   "Form2"
   ScaleHeight     =   8790
   ScaleWidth      =   12615
   Begin ISITELib.iSiteEnterprise iSiteEnterprise1 
      Height          =   8775
      Left            =   120
      TabIndex        =   0
      Top             =   0
      Width           =   12495
      _Version        =   196611
      _ExtentX        =   22040
      _ExtentY        =   15478
      _StockProps     =   0
   End
End
Attribute VB_Name = "ISiteDisplay"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Public examID As String

Private Sub Form_Load()
    Call InitializeEnterpriseCtrl
End Sub

Function InitializeEnterpriseCtrl()
    ' Set these default options
    iSiteEnterprise1.Options = "DisableAutoLogout,HideLogoutButton,HideCloseTabButton,DisablePreferences"

    ' Initialize the visual control
    InitializeEnterpriseCtrl = iSiteEnterprise1.Initialize(ISiteMenuSample.iSiteNonVisual1)
    If InitializeEnterpriseCtrl = False Then
    MsgBox "Error Initializing Enterprise Control"
    End If
End Function

Private Sub Form_Unload(Cancel As Integer)
    Call ISiteMenuSample.OnISiteDisplayClose
End Sub

Private Sub iSiteEnterprise1_EventExamMenuSelected(ByVal menuItem As String, ByVal examID As String)
    Call ISiteMenuSample.OnExamMenuEvent(examID)
End Sub

Private Sub iSiteEnterprise1_EventViewMenuSelected(ByVal menuItem As String, ByVal ContextRecord As String)
    Call ISiteMenuSample.OnViewMenuEvent(ContextRecord)
End Sub


