VERSION 5.00
Begin VB.Form ISiteLoginFrm 
   Caption         =   "ISiteLoginFrm"
   ClientHeight    =   1875
   ClientLeft      =   60
   ClientTop       =   345
   ClientWidth     =   4935
   LinkTopic       =   "Form1"
   ScaleHeight     =   1875
   ScaleWidth      =   4935
   StartUpPosition =   3  'Windows Default
   Begin VB.TextBox ServerIP 
      Height          =   285
      Left            =   1440
      TabIndex        =   5
      Text            =   "10.2.3.43"
      Top             =   240
      Width           =   1935
   End
   Begin VB.TextBox ServerURL 
      Height          =   285
      Left            =   1440
      TabIndex        =   4
      Text            =   "http://10.2.3.43/iSuite"
      Top             =   600
      Width           =   1935
   End
   Begin VB.TextBox UserName 
      Height          =   285
      Left            =   1440
      TabIndex        =   3
      Text            =   "iuser"
      Top             =   960
      Width           =   1935
   End
   Begin VB.TextBox Password 
      Height          =   285
      IMEMode         =   3  'DISABLE
      Left            =   1440
      PasswordChar    =   "*"
      TabIndex        =   2
      Text            =   "stentor"
      Top             =   1320
      Width           =   1935
   End
   Begin VB.CommandButton Login 
      Caption         =   "Login"
      Height          =   375
      Left            =   3840
      TabIndex        =   1
      Top             =   240
      Width           =   975
   End
   Begin VB.CommandButton Exit 
      Caption         =   "Exit"
      Height          =   375
      Left            =   3840
      TabIndex        =   0
      Top             =   720
      Width           =   975
   End
   Begin VB.Label Label1 
      Caption         =   "Server IP"
      Height          =   255
      Index           =   0
      Left            =   120
      TabIndex        =   9
      Top             =   240
      Width           =   1215
   End
   Begin VB.Label Label2 
      Caption         =   "Server URL"
      Height          =   255
      Index           =   0
      Left            =   120
      TabIndex        =   8
      Top             =   600
      Width           =   1215
   End
   Begin VB.Label Label3 
      Caption         =   "User Name"
      Height          =   255
      Index           =   1
      Left            =   120
      TabIndex        =   7
      Top             =   960
      Width           =   1215
   End
   Begin VB.Label Label2 
      Caption         =   "Server URL"
      Height          =   255
      Index           =   1
      Left            =   120
      TabIndex        =   6
      Top             =   1320
      Width           =   1215
   End
End
Attribute VB_Name = "ISiteLoginFrm"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
'*********************************************************
' iSiteLogin Form
'*********************************************************
' Simple Form for Single image Display Login.
'
Option Explicit

Private Sub Exit_Click()
    End
End Sub

'**********************************************************
' Form_Load
'   Load the login dialog
Private Sub Form_Load()
    Dim success
    success = InitializeNonVisualCtrl()
End Sub

'**********************************************************
' Login_Click
'   Login to the server and show single image display
Private Sub Login_Click()
    Dim Login
    Dim oSiteImage As ISiteImageFrm
    ' Call the single Image Control
    If iSiteNonVisual1.GetCurrentUser() = "" Then
        Login = iSiteNonVisual1.Login(UserName.Text, Password.Text, "ISite", "", "")
        If Login = False Then
            MsgBox "Error logging in"
            Exit Sub
        End If
    End If
        
    Set oSiteImage = New ISiteImageFrm
    oSiteImage.Initialize iSiteNonVisual1
    oSiteImage.Show 1   'Modal
       
    Set oSiteImage = Nothing
    
    ' Make sure we are logging out.
    If (iSiteNonVisual1.GetCurrentUser() = "") Then
        iSiteNonVisual1.Logout
    End If
    
End Sub

'**********************************************************
' InitializeNonVisualCtrl
'   Initialize the non visual control.
Private Function InitializeNonVisualCtrl() _
As Boolean

    InitializeNonVisualCtrl = False

    ' already initialized?
    If iSiteNonVisual1.Initialized = True Then
        InitializeNonVisualCtrl = True
    Else
        ' Set the required parameters
        iSiteNonVisual1.iSyntaxServerIP = ServerIP.Text
        iSiteNonVisual1.ImageSuiteURL = ServerURL.Text
        ' Give the initialize a try
        InitializeNonVisualCtrl = iSiteNonVisual1.Initialize()

        If InitializeNonVisualCtrl <> True Then
            MsgBox "Error Initializing NonVisual Control"
        End If
    End If
End Function

