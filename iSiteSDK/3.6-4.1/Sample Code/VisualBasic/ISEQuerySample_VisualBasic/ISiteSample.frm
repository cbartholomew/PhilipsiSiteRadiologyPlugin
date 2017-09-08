VERSION 5.00
Object = "{831FDD16-0C5C-11D2-A9FC-0000F8754DA1}#2.0#0"; "MSCOMCTL.OCX"
Object = "{3B7C8863-D78F-101B-B9B5-04021C009402}#1.2#0"; "RICHTX32.OCX"
Object = "{D335FE4C-E657-45de-8148-CD1209D4E12A}#4.1#0"; "isite.ocx"
Begin VB.Form ISiteQuerySample 
   Caption         =   "ISite 4.1 Enterprise Query Sample"
   ClientHeight    =   11085
   ClientLeft      =   4320
   ClientTop       =   2985
   ClientWidth     =   9390
   LinkTopic       =   "Form1"
   ScaleHeight     =   11085
   ScaleWidth      =   9390
   Begin VB.Frame fraTab 
      Height          =   5895
      Index           =   1
      Left            =   360
      TabIndex        =   19
      Top             =   4680
      Width           =   8655
      Begin VB.TextBox Matches 
         Height          =   285
         Left            =   1920
         TabIndex        =   21
         Text            =   "0"
         Top             =   360
         Width           =   975
      End
      Begin VB.TextBox Returns 
         Height          =   285
         Left            =   4800
         TabIndex        =   20
         Text            =   "0"
         Top             =   360
         Width           =   855
      End
      Begin RichTextLib.RichTextBox QueryResultsEdit 
         Height          =   4935
         Left            =   240
         TabIndex        =   22
         Top             =   720
         Width           =   8175
         _ExtentX        =   14420
         _ExtentY        =   8705
         _Version        =   393217
         ScrollBars      =   3
         TextRTF         =   $"ISiteSample.frx":0000
      End
      Begin VB.Label Label8 
         Caption         =   "Number of Matches:"
         Height          =   255
         Left            =   240
         TabIndex        =   24
         Top             =   375
         Width           =   1575
      End
      Begin VB.Label Label9 
         Caption         =   "Number of Returns:"
         Height          =   255
         Left            =   3120
         TabIndex        =   23
         Top             =   375
         Width           =   1575
      End
   End
   Begin VB.Frame fraTab 
      Height          =   5895
      Index           =   0
      Left            =   360
      TabIndex        =   18
      Top             =   4920
      Width           =   8665
      Begin MSComctlLib.ListView lvResults 
         Height          =   5535
         Left            =   120
         TabIndex        =   25
         Top             =   240
         Width           =   8415
         _ExtentX        =   14843
         _ExtentY        =   9763
         View            =   3
         LabelWrap       =   -1  'True
         HideSelection   =   -1  'True
         _Version        =   393217
         ForeColor       =   -2147483640
         BackColor       =   -2147483643
         BorderStyle     =   1
         Appearance      =   1
         NumItems        =   4
         BeginProperty ColumnHeader(1) {BDD1F052-858B-11D1-B16A-00C0F0283628} 
            Key             =   "PatientName"
            Object.Tag             =   "PatientName"
            Text            =   "Patient Name"
            Object.Width           =   6703
         EndProperty
         BeginProperty ColumnHeader(2) {BDD1F052-858B-11D1-B16A-00C0F0283628} 
            SubItemIndex    =   1
            Key             =   "MRN"
            Object.Tag             =   "MRN"
            Text            =   "Patient ID"
            Object.Width           =   2117
         EndProperty
         BeginProperty ColumnHeader(3) {BDD1F052-858B-11D1-B16A-00C0F0283628} 
            SubItemIndex    =   2
            Key             =   "Accession"
            Object.Tag             =   "Accession"
            Text            =   "Accession"
            Object.Width           =   2117
         EndProperty
         BeginProperty ColumnHeader(4) {BDD1F052-858B-11D1-B16A-00C0F0283628} 
            SubItemIndex    =   3
            Key             =   "StudyDate"
            Object.Tag             =   "StudyDate"
            Text            =   "Study Date/Time"
            Object.Width           =   3704
         EndProperty
      End
   End
   Begin MSComctlLib.TabStrip tabResults 
      Height          =   6495
      Left            =   240
      TabIndex        =   17
      Top             =   4440
      Width           =   8895
      _ExtentX        =   15690
      _ExtentY        =   11456
      _Version        =   393216
      BeginProperty Tabs {1EFB6598-857C-11D1-B16A-00C0F0283628} 
         NumTabs         =   2
         BeginProperty Tab1 {1EFB659A-857C-11D1-B16A-00C0F0283628} 
            Caption         =   "Results"
            Key             =   "Results"
            Object.Tag             =   "Results"
            Object.ToolTipText     =   "Displays the results in a list control"
            ImageVarType    =   2
         EndProperty
         BeginProperty Tab2 {1EFB659A-857C-11D1-B16A-00C0F0283628} 
            Caption         =   "Raw XML"
            Key             =   "RawXML"
            Object.Tag             =   "RawXML"
            Object.ToolTipText     =   "Displays the results in raw XML"
            ImageVarType    =   2
         EndProperty
      EndProperty
   End
   Begin VB.Frame Frame2 
      Caption         =   "iSite Enterprise"
      Height          =   1455
      Left            =   240
      TabIndex        =   11
      Top             =   2760
      Width           =   8895
      Begin VB.CommandButton RunQueryBtn 
         Caption         =   "Run Query"
         Height          =   375
         Left            =   5040
         TabIndex        =   16
         Top             =   960
         Width           =   1575
      End
      Begin VB.ComboBox QueryTypeCombo 
         Height          =   315
         ItemData        =   "ISiteSample.frx":009C
         Left            =   1920
         List            =   "ISiteSample.frx":00AC
         Style           =   2  'Dropdown List
         TabIndex        =   15
         Top             =   840
         Width           =   2295
      End
      Begin VB.TextBox QueryStringEdit 
         Height          =   285
         Left            =   1920
         TabIndex        =   14
         Text            =   "x00100010=""test*"""
         Top             =   480
         Width           =   5655
      End
      Begin VB.Label Label7 
         Caption         =   "Query Type:"
         Height          =   255
         Left            =   480
         TabIndex        =   13
         Top             =   840
         Width           =   1095
      End
      Begin VB.Label Label6 
         Caption         =   "Query String:"
         Height          =   255
         Left            =   480
         TabIndex        =   12
         Top             =   480
         Width           =   1095
      End
   End
   Begin VB.Frame Frame1 
      Caption         =   "Initialization Parameters"
      Height          =   2535
      Left            =   240
      TabIndex        =   0
      Top             =   120
      Width           =   8895
      Begin VB.TextBox Authsource 
         Height          =   285
         Left            =   2160
         TabIndex        =   27
         Text            =   "iSite"
         Top             =   2160
         Width           =   1695
      End
      Begin VB.TextBox Password 
         Height          =   285
         IMEMode         =   3  'DISABLE
         Left            =   2160
         PasswordChar    =   "*"
         TabIndex        =   10
         Text            =   "stentor"
         Top             =   1800
         Width           =   1695
      End
      Begin VB.TextBox UserName 
         Height          =   285
         Left            =   2160
         TabIndex        =   9
         Text            =   "iuser"
         Top             =   1440
         Width           =   1695
      End
      Begin VB.TextBox ServerPort 
         Height          =   285
         Left            =   2160
         TabIndex        =   8
         Text            =   "6464"
         Top             =   1080
         Width           =   1695
      End
      Begin VB.TextBox URL 
         Height          =   285
         Left            =   2160
         TabIndex        =   7
         Text            =   "http://192.168.2.10/iSuite"
         Top             =   720
         Width           =   3255
      End
      Begin VB.TextBox ServerIP 
         Height          =   285
         Left            =   2160
         TabIndex        =   6
         Text            =   "192.168.1.10"
         Top             =   360
         Width           =   1695
      End
      Begin VB.Label Label10 
         Caption         =   "Authsource:"
         Height          =   255
         Left            =   360
         TabIndex        =   26
         Top             =   2160
         Width           =   1335
      End
      Begin VB.Label Label5 
         Caption         =   "Password:"
         Height          =   255
         Left            =   360
         TabIndex        =   5
         Top             =   1800
         Width           =   1455
      End
      Begin VB.Label Label4 
         Caption         =   "User Name:"
         Height          =   255
         Left            =   360
         TabIndex        =   4
         Top             =   1440
         Width           =   1575
      End
      Begin VB.Label Label3 
         Caption         =   "Server Port:"
         Height          =   255
         Left            =   360
         TabIndex        =   3
         Top             =   1080
         Width           =   1455
      End
      Begin VB.Label Label2 
         Caption         =   "ImageSuite URL:"
         Height          =   255
         Left            =   360
         TabIndex        =   2
         Top             =   720
         Width           =   1455
      End
      Begin VB.Label Label1 
         Caption         =   "Server IP:"
         Height          =   255
         Left            =   360
         TabIndex        =   1
         Top             =   360
         Width           =   1455
      End
   End
   Begin ISITELib.iSiteNonVisual iSiteNonVisual1 
      Height          =   1125
      Left            =   5520
      TabIndex        =   28
      Top             =   2520
      Visible         =   0   'False
      Width           =   3000
      _Version        =   196613
      _ExtentX        =   2355
      _ExtentY        =   2566
      _StockProps     =   0
      WorkstationLocation=   ""
   End
End
Attribute VB_Name = "ISiteQuerySample"
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
        iSiteNonVisual1.ImageSuiteURL = url.Text

        ' Give the initialize a try
        InitializeNonVisualCtrl = iSiteNonVisual1.Initialize()

        If InitializeNonVisualCtrl <> True Then
            MsgBox "Error Initializing NonVisual Control"
        End If
    End If
End Function

Sub OpenExam()
    Dim ExamID

    ' find the exam id based on patient id & accession
    ExamID = iSiteNonVisual1.FindExam(Accession.Text, PatientID.Text, Organization.Text)

    ' Did we found it?
    If ExamID <> "" Then
        ' pass the exam id & nonvisual ctrl over to the dialog and display the exam
        ' the dialog will take care of openning and closing it.
        ISiteDisplay.ExamID = ExamID
        ISiteDisplay.Show vbModal
    Else
        MsgBox "Error Finding Exam"
    End If
End Sub

Function Login() _
As Boolean

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



Private Sub Form_Load()
   ' The name of the TabStrip is "tabResults."
   ' The Frame control is named "fraTab."
   For i = 0 To fraTab.count - 1
   With fraTab(i)
      .Move tabResults.ClientLeft, _
      tabResults.ClientTop, _
      tabResults.ClientWidth, _
      tabResults.ClientHeight
   End With
   Next i

   ' Bring the first fraTab control to the front.
   fraTab(0).ZOrder 0

    QueryTypeCombo.Text = "LOOKUP"
    
End Sub


Private Sub RunQueryBtn_Click()
    Dim queryResults
    If InitializeNonVisualCtrl() Then
        If Login() Then
            queryResults = iSiteNonVisual1.Query(QueryStringEdit.Text, QueryTypeCombo.Text, 200)
            If queryResults <> "" Then
                QueryResultsEdit.Text = queryResults
                ParseHeader (queryResults)
                FillResultsPage (queryResults)
            Else
                QueryResultsEdit.Text = "Query Failed"
            End If
        End If
    End If
End Sub

Function ParseHeader(queryResults As String)
    Dim domdoc As New MSXML.DOMDocument
    Dim nodeList As IXMLDOMNodeList

    If (domdoc.loadXML(queryResults)) Then

        Set nodeList = domdoc.getElementsByTagName("TotalMatches")
        If (nodeList.length > 0) Then
            Matches = nodeList.Item(0).Text
        End If
        
        Set nodeList = domdoc.getElementsByTagName("TotalReturns")
        If (nodeList.length > 0) Then
            Returns = nodeList.Item(0).Text
        End If
    
    End If
End Function
 
Private Sub tabResults_Click()
  fraTab(tabResults.SelectedItem.Index - 1).ZOrder 0
End Sub

Function FillResultsPage(queryResults As String)
    Dim domdoc As New MSXML.DOMDocument
    Dim nodeList As IXMLDOMNodeList
    Dim numReturns As Integer
    Dim itmX As ListItem
    Dim Name As String
    Dim MRN As String
    Dim Accession As String
    Dim StudyDate As String
    Dim i As Integer
    Dim count As Integer
        
    If (domdoc.loadXML(queryResults)) Then

        Set nodeList = domdoc.getElementsByTagName("TotalMatches")
        If (nodeList.length > 0) Then
            Matches = nodeList.Item(0).Text
        End If
        
        Set nodeList = domdoc.getElementsByTagName("TotalReturns")
        If (nodeList.length > 0) Then
            Returns = nodeList.Item(0).Text
            count = nodeList.Item(0).Text
        End If
        
        ' Clear all items from the list view
        lvResults.ListItems.Clear
        
        Set nodeList = domdoc.getElementsByTagName("Exam")
        For i = 0 To nodeList.length - 1
            ' Get XML items
            Name = nodeList.Item(i).selectSingleNode("x00100010").Text
            MRN = nodeList.Item(i).selectSingleNode("x00100020").Text
            Accession = nodeList.Item(i).selectSingleNode("x00080050").Text
            StudyDate = nodeList.Item(i).selectSingleNode("StudyDTTM").Text
            
            ' Add them to the list view
            AddEntry Name, MRN, Accession, StudyDate
        Next i
    End If
End Function

Function AddEntry(Name As String, MRN As String, Accession As String, StudyDate As String)
    Dim n As Integer

    With lvResults
    n = .ListItems.count + 1
        
    .ListItems.Add n, , Name
    
    ' add our subitems to the listview
    .ListItems(n).ListSubItems.Add 1, , MRN
    .ListItems(n).ListSubItems.Add 2, , Accession
    .ListItems(n).ListSubItems.Add 3, , StudyDate

    End With
    
End Function

