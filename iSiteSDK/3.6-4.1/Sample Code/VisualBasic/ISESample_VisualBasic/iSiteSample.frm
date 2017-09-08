VERSION 5.00
Object = "{D335FE4C-E657-45de-8148-CD1209D4E12A}#4.1#0"; "isite.ocx"
Begin VB.Form iSiteSample 
   Caption         =   "iSite 4.1 Enterprise Sample"
   ClientHeight    =   5055
   ClientLeft      =   4320
   ClientTop       =   2985
   ClientWidth     =   8370
   LinkTopic       =   "Form1"
   ScaleHeight     =   5055
   ScaleWidth      =   8370
   Begin ISITELib.iSiteNonVisual iSiteNonVisual1 
      Height          =   2535
      Left            =   5880
      TabIndex        =   21
      Top             =   480
      Visible         =   0   'False
      Width           =   2295
      _Version        =   262144
      _ExtentX        =   4048
      _ExtentY        =   4471
      _StockProps     =   0
      Options         =   "StentorBackEnd"
      WorkstationLocation=   ""
   End
   Begin VB.CommandButton ShowExam 
      Caption         =   "Show Exam"
      Height          =   495
      Left            =   5640
      TabIndex        =   10
      Top             =   3720
      Width           =   1695
   End
   Begin VB.Frame Frame2 
      Caption         =   "iSite Enterprise"
      Height          =   1575
      Left            =   240
      TabIndex        =   16
      Top             =   3240
      Width           =   7815
      Begin VB.TextBox Organization 
         Height          =   285
         Left            =   2160
         TabIndex        =   9
         Text            =   "Default"
         Top             =   1080
         Width           =   1935
      End
      Begin VB.TextBox Accession 
         Height          =   285
         Left            =   2160
         TabIndex        =   8
         Text            =   "4295009"
         Top             =   720
         Width           =   1935
      End
      Begin VB.TextBox PatientID 
         Height          =   285
         IMEMode         =   3  'DISABLE
         Left            =   2160
         TabIndex        =   7
         Text            =   "111111111"
         Top             =   360
         Width           =   1935
      End
      Begin VB.Label Label8 
         Caption         =   "Organization:"
         Height          =   255
         Left            =   360
         TabIndex        =   19
         Top             =   1080
         Width           =   1455
      End
      Begin VB.Label Label7 
         Caption         =   "Accession ID:"
         Height          =   255
         Left            =   360
         TabIndex        =   18
         Top             =   720
         Width           =   1455
      End
      Begin VB.Label Label6 
         Caption         =   "Patient ID:"
         Height          =   255
         Left            =   360
         TabIndex        =   17
         Top             =   360
         Width           =   1455
      End
   End
   Begin VB.Frame Frame1 
      Caption         =   "Initialization Parameters"
      Height          =   2655
      Left            =   240
      TabIndex        =   0
      Top             =   360
      Width           =   5535
      Begin VB.TextBox Authsource 
         Height          =   285
         Left            =   2160
         TabIndex        =   6
         Text            =   "iSite"
         Top             =   2160
         Width           =   1695
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
         Text            =   "iuser"
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
         Text            =   "http://eng-mp10/iSiteWeb/WorkList/PrimaryWorkList.ashx"
         Top             =   720
         Width           =   3255
      End
      Begin VB.TextBox ServerIP 
         Height          =   285
         Left            =   2160
         TabIndex        =   1
         Text            =   "eng-mp10"
         Top             =   360
         Width           =   1695
      End
      Begin VB.Label Label9 
         Caption         =   "Authsource:"
         Height          =   255
         Left            =   360
         TabIndex        =   20
         Top             =   2160
         Width           =   1215
      End
      Begin VB.Label Label5 
         Caption         =   "Password:"
         Height          =   255
         Left            =   360
         TabIndex        =   15
         Top             =   1800
         Width           =   1455
      End
      Begin VB.Label Label4 
         Caption         =   "User Name:"
         Height          =   255
         Left            =   360
         TabIndex        =   14
         Top             =   1440
         Width           =   1575
      End
      Begin VB.Label Label3 
         Caption         =   "Server Port:"
         Height          =   255
         Left            =   360
         TabIndex        =   13
         Top             =   1080
         Width           =   1455
      End
      Begin VB.Label Label2 
         Caption         =   "ImageSuite URL:"
         Height          =   255
         Left            =   360
         TabIndex        =   12
         Top             =   720
         Width           =   1455
      End
      Begin VB.Label Label1 
         Caption         =   "Server IP:"
         Height          =   255
         Left            =   360
         TabIndex        =   11
         Top             =   360
         Width           =   1455
      End
   End
End
Attribute VB_Name = "iSiteSample"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False

Private Sub ShowExam_Click()

If InitializeNonVisualCtrl() Then
    ' log in
    If Login() Then
        ' Show exam
        Call OpenExam
    End If
End If

End Sub

Function InitializeNonVisualCtrl() _
As Boolean

    InitializeNonVisualCtrl = False

    ' already initialized?
    If iSiteNonVisual1.Initialized = True Then
        InitializeNonVisualCtrl = True
    Else
        ' Set the required parameters
        iSiteNonVisual1.iSyntaxServerIP = ServerIP.Text
        iSiteNonVisual1.iSyntaxServerPort = ServerPort.Text
        iSiteNonVisual1.ImageSuiteURL = URL.Text
        iSiteNonVisual1.ImageSuiteDSN = "iSite"

        ' Set these default options
        iSiteNonVisual1.Options = "StentorBackEnd,HideLogoutButton,HideCloseTabButton "


        ' Give the initialize a try
        InitializeNonVisualCtrl = iSiteNonVisual1.Initialize()

        If InitializeNonVisualCtrl <> True Then
            MsgBox "Error Initializing NonVisual Control"
        End If
    End If
End Function

Sub OpenExam()
    Dim ExamID

    MsgBox ("Accession: " & Accession.Text & " MRN: " & PatientID.Text & " Org: " & Organization.Text)
    ' find the exam id based on patient id & accession
    ExamID = iSiteNonVisual1.FindExam(Accession.Text, PatientID.Text, Organization.Text)

    ' Did we found it?
    If ExamID <> "" Then
        ' pass the exam id & nonvisual ctrl over to the dialog and display the exam
        ' the dialog will take care of openning and closing it.
        iSiteDisplay.ExamID = ExamID
        iSiteDisplay.Show vbModal
    Else
        Dim errCode
        errCode = iSiteNonVisual1.GetLastErrorCode()
        MsgBox "Error Finding Exam. Last error code: " & errCode
    End If
End Sub

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

