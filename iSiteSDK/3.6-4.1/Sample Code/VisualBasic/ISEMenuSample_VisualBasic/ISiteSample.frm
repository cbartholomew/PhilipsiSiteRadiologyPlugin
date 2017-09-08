VERSION 5.00
Object = "{D335FE4C-E657-45de-8148-CD1209D4E12A}#4.1#0"; "isite.ocx"
Begin VB.Form ISiteMenuSample 
   Caption         =   "ISite Enterprise Menu Sample"
   ClientHeight    =   7875
   ClientLeft      =   4320
   ClientTop       =   2985
   ClientWidth     =   9390
   LinkTopic       =   "Form1"
   ScaleHeight     =   7875
   ScaleWidth      =   9390
   Begin VB.Frame Frame2 
      Height          =   4935
      Left            =   120
      TabIndex        =   21
      Top             =   2640
      Width           =   8895
      Begin VB.TextBox SOPUIDEdit 
         Height          =   285
         Left            =   2880
         TabIndex        =   15
         Top             =   3720
         Width           =   5535
      End
      Begin VB.TextBox CanvasPageIDEdit 
         Height          =   285
         Left            =   2880
         TabIndex        =   11
         Top             =   1800
         Width           =   2295
      End
      Begin VB.TextBox StudyUIDEdit 
         Height          =   285
         Left            =   2880
         TabIndex        =   13
         Top             =   2760
         Width           =   5535
      End
      Begin VB.TextBox SeriesUIDEdit 
         Height          =   285
         Left            =   2880
         TabIndex        =   14
         Top             =   3240
         Width           =   5535
      End
      Begin VB.TextBox ShelfIDEdit 
         Height          =   285
         Left            =   2880
         TabIndex        =   12
         Top             =   2280
         Width           =   2295
      End
      Begin VB.TextBox ExamMenuIntExamID 
         Height          =   285
         Left            =   2880
         TabIndex        =   10
         Top             =   840
         Width           =   2295
      End
      Begin VB.Label Label12 
         Caption         =   "SOP Instance UID:"
         Height          =   255
         Left            =   1080
         TabIndex        =   29
         Top             =   3720
         Width           =   1575
      End
      Begin VB.Label Label13 
         Caption         =   "Internal Exam ID:"
         Height          =   255
         Left            =   1080
         TabIndex        =   28
         Top             =   840
         Width           =   1575
      End
      Begin VB.Label Label11 
         Caption         =   "CanvasPage ID:"
         Height          =   255
         Left            =   1080
         TabIndex        =   27
         Top             =   1815
         Width           =   1455
      End
      Begin VB.Label Label10 
         Caption         =   "Study UID:"
         Height          =   255
         Left            =   1080
         TabIndex        =   26
         Top             =   2775
         Width           =   1215
      End
      Begin VB.Label Label9 
         Caption         =   "Series UID:"
         Height          =   255
         Left            =   1080
         TabIndex        =   25
         Top             =   3255
         Width           =   1335
      End
      Begin VB.Label Label8 
         Caption         =   "Shelf ID:"
         Height          =   255
         Left            =   1080
         TabIndex        =   24
         Top             =   2295
         Width           =   1335
      End
      Begin VB.Label Label7 
         Caption         =   "View Menu Item Response:"
         Height          =   255
         Left            =   480
         TabIndex        =   23
         Top             =   1320
         Width           =   2175
      End
      Begin VB.Label Label6 
         Caption         =   "Exam Menu Item Response:"
         Height          =   255
         Left            =   480
         TabIndex        =   22
         Top             =   360
         Width           =   2175
      End
   End
   Begin VB.Frame Frame1 
      Caption         =   "Initialization Parameters"
      Height          =   2655
      Left            =   120
      TabIndex        =   0
      Top             =   120
      Width           =   8895
      Begin VB.TextBox Authsource 
         Height          =   285
         Left            =   2160
         TabIndex        =   6
         Text            =   "iSite"
         Top             =   2160
         Width           =   1695
      End
      Begin VB.CommandButton AddExamMenuItemBtn 
         Caption         =   "Add Exam Menu Item"
         Enabled         =   0   'False
         Height          =   375
         Left            =   6000
         TabIndex        =   9
         Top             =   1680
         Width           =   1695
      End
      Begin VB.CommandButton AddViewMenuItemBtn 
         Caption         =   "Add View Menu Item"
         Enabled         =   0   'False
         Height          =   375
         Left            =   6000
         TabIndex        =   8
         Top             =   1200
         Width           =   1695
      End
      Begin VB.CommandButton LaunchServer 
         Caption         =   "Launch iSite"
         Height          =   375
         Left            =   6000
         TabIndex        =   7
         Top             =   600
         Width           =   1575
      End
      Begin VB.TextBox Password 
         Height          =   285
         IMEMode         =   3  'DISABLE
         Left            =   2160
         PasswordChar    =   "*"
         TabIndex        =   5
         Text            =   "password"
         Top             =   1800
         Width           =   1695
      End
      Begin VB.TextBox UserName 
         Height          =   285
         Left            =   2160
         TabIndex        =   4
         Text            =   "user"
         Top             =   1440
         Width           =   1695
      End
      Begin VB.TextBox ServerPort 
         Height          =   285
         Left            =   2160
         TabIndex        =   3
         Text            =   "6464"
         Top             =   1080
         Width           =   1695
      End
      Begin VB.TextBox URL 
         Height          =   285
         Left            =   2160
         TabIndex        =   2
         Text            =   "http://192.168.55.1/iSuite"
         Top             =   720
         Width           =   3255
      End
      Begin VB.TextBox ServerIP 
         Height          =   285
         Left            =   2160
         TabIndex        =   1
         Text            =   "192.168.55.1"
         Top             =   360
         Width           =   1695
      End
      Begin VB.Label Label14 
         Caption         =   "AuthSource:"
         Height          =   255
         Left            =   360
         TabIndex        =   30
         Top             =   2160
         Width           =   1575
      End
      Begin VB.Label Label5 
         Caption         =   "Password:"
         Height          =   255
         Left            =   360
         TabIndex        =   20
         Top             =   1800
         Width           =   1455
      End
      Begin VB.Label Label4 
         Caption         =   "User Name:"
         Height          =   255
         Left            =   360
         TabIndex        =   19
         Top             =   1440
         Width           =   1575
      End
      Begin VB.Label Label3 
         Caption         =   "Server Port:"
         Height          =   255
         Left            =   360
         TabIndex        =   18
         Top             =   1080
         Width           =   1455
      End
      Begin VB.Label Label2 
         Caption         =   "ImageSuite URL:"
         Height          =   255
         Left            =   360
         TabIndex        =   17
         Top             =   720
         Width           =   1455
      End
      Begin VB.Label Label1 
         Caption         =   "Server IP:"
         Height          =   255
         Left            =   360
         TabIndex        =   16
         Top             =   360
         Width           =   1455
      End
   End
   Begin ISITELib.iSiteNonVisual iSiteNonVisual1 
      Height          =   1125
      Left            =   5760
      TabIndex        =   31
      Top             =   7560
      Visible         =   0   'False
      Width           =   3000
      _Version        =   196613
      _ExtentX        =   1085
      _ExtentY        =   1931
      _StockProps     =   0
      WorkstationLocation=   ""
   End
End
Attribute VB_Name = "ISiteMenuSample"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim DisplayObject As ISiteDisplay
Attribute DisplayObject.VB_VarHelpID = -1

Function InitializeNonVisualCtrl() _
As Boolean

    InitializeNonVisualCtrl = False
    
    ' already initialized?
    If iSiteNonVisual1.Initialized <> True Then
        
        ' Set the required parameters
        iSiteNonVisual1.iSyntaxServerIP = ServerIP.Text
        iSiteNonVisual1.iSyntaxServerPort = ServerPort.Text
        iSiteNonVisual1.ImageSuiteURL = url.Text

        ' Initialize
        InitializeNonVisualCtrl = iSiteNonVisual1.Initialize()

        If InitializeNonVisualCtrl <> True Then
            MsgBox "Error Initializing NonVisual Control"
        End If
    End If
    
    If iSiteNonVisual1.Initialized = True Then
        InitializeNonVisualCtrl = Login()
    End If
    
End Function


Function Login() _
As Boolean

    Dim SecurityCodes
    Login = False

    ' test if we are logged in already
    If iSiteNonVisual1.GetCurrentUser() = "" Then
        Login = iSiteNonVisual1.Login(UserName.Text, Password.Text, Authsource.Text, "", "")
        If Login = False Then
            MsgBox "Error logging in"
        End If
    Else
        Login = True
    End If

End Function

Function Logout()
    Logout = iSiteNonVisual1.Logout()
    If Logout = False Then
        MsgBox "Error logging out"
    End If
End Function

Private Sub AddExamMenuItemBtn_Click()

    ISiteDisplay.iSiteEnterprise1.AddExamMenuItem ("Test Exam Menu Item")
    
End Sub

Private Sub AddViewMenuItemBtn_Click()

    ISiteDisplay.iSiteEnterprise1.AddViewMenuItem ("Test View Menu Item")
    
End Sub


Function FillViewResults(ContextRecord As String)
    Dim domdoc As New MSXML.DOMDocument
    Dim nodeList As IXMLDOMNodeList
    Dim str As String
        
    If (domdoc.loadXML(ContextRecord)) Then
        
        Set nodeList = domdoc.getElementsByTagName("WindowInfo")
        
        CanvasPageIDEdit.Text = nodeList.Item(0).selectSingleNode("CanvasPageID").Text
        ShelfIDEdit.Text = nodeList.Item(0).selectSingleNode("ShelfID").Text
        StudyUIDEdit.Text = nodeList.Item(0).selectSingleNode("x0020000D").Text
        SeriesUIDEdit.Text = nodeList.Item(0).selectSingleNode("x0020000E").Text
        SOPUIDEdit.Text = nodeList.Item(0).selectSingleNode("x00080018").Text

    End If
End Function


Private Sub LaunchServer_Click()

    ' test if we are logged in already
    If iSiteNonVisual1.SecurityCodes = "" Then
        'MsgBox "Calling Logout"
        'Call Logout
    Else
        'MsgBox "Calling Logout"
        'Call Logout
    End If
    If InitializeNonVisualCtrl() Then
        ' Run ISE
        ISiteDisplay.Show vbModaless
        AddViewMenuItemBtn.Enabled = True
        AddExamMenuItemBtn.Enabled = True
    End If

End Sub

Function OnISiteDisplayClose()

AddViewMenuItemBtn.Enabled = False
AddExamMenuItemBtn.Enabled = False

End Function

Function OnExamMenuEvent(IntExamID As String)

    ExamMenuIntExamID.Text = IntExamID

End Function

Function OnViewMenuEvent(ContextRecord As String)

    Call FillViewResults(ContextRecord)
    
End Function


