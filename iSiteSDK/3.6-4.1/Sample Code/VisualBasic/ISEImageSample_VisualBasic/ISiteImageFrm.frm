VERSION 5.00
Object = "{D335FE4C-E657-45de-8148-CD1209D4E12A}#4.1#0"; "isite.ocx"
Begin VB.Form ISiteImageFrm 
   Caption         =   "ISiteImageFrm"
   ClientHeight    =   6645
   ClientLeft      =   60
   ClientTop       =   630
   ClientWidth     =   7935
   LinkTopic       =   "Form1"
   ScaleHeight     =   6645
   ScaleWidth      =   7935
   Begin ISITELib.iSiteImage iSiteImage1 
      Height          =   6615
      Left            =   0
      TabIndex        =   0
      Top             =   0
      Width           =   7935
      _Version        =   196613
      _ExtentX        =   13996
      _ExtentY        =   11668
      _StockProps     =   0
   End
   Begin VB.Menu Image 
      Caption         =   "Image"
      Begin VB.Menu Open 
         Caption         =   "Open"
      End
      Begin VB.Menu Close 
         Caption         =   "Close"
      End
      Begin VB.Menu Space1 
         Caption         =   "-"
      End
      Begin VB.Menu Flip 
         Caption         =   "Flip"
      End
      Begin VB.Menu Rotate 
         Caption         =   "Rotate"
      End
      Begin VB.Menu Space2 
         Caption         =   "-"
      End
      Begin VB.Menu Content 
         Caption         =   "Content"
         Begin VB.Menu Dynamic 
            Caption         =   "Dynamic"
         End
         Begin VB.Menu Static 
            Caption         =   "Static"
         End
      End
      Begin VB.Menu Properties 
         Caption         =   "Properties"
      End
      Begin VB.Menu Space3 
         Caption         =   "-"
      End
      Begin VB.Menu About 
         Caption         =   "About"
      End
   End
End
Attribute VB_Name = "ISiteImageFrm"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
'*********************************************************
' iSiteImage Form
'*********************************************************
' Simple Form for Single image Display.
'

Option Explicit

Dim bOpen            As Boolean         ' is an image open
Dim bFlip            As Boolean         ' is the image flipped
Dim kRotate          As EImageRotation  ' The rotation of the image
Dim nonVisualControl As iSiteNonVisual  ' The non-visual control
'**********************************************************
' Initialize
'   Initialize the Image Ctrl.
Sub Initialize(ByRef ctrl As iSiteNonVisual)
    Set nonVisualControl = ctrl
    Call iSiteImage1.Initialize(nonVisualControl)
    bOpen = False
End Sub
'**********************************************************
' Close
'   Close the Image Ctrl.
Private Sub Close_Click()
    If (bOpen = True) Then
        iSiteImage1.CloseDisplay
        bOpen = False
        Refresh
    End If
End Sub

'**********************************************************
' Form_Load
'   Load the Image Display Form
Private Sub Form_Load()
    bFlip = False
    bOpen = False
    kRotate = Rotate0
End Sub

'**********************************************************
' Form_Resize
'   Resize the form
Private Sub Form_Resize()
    iSiteImage1.Top = Top
    iSiteImage1.Left = Left
    iSiteImage1.Height = Height
    iSiteImage1.Width = Width
End Sub

'**********************************************************
' Open_Click
'   The Open Menu item was clicked.
Private Sub Open_Click()
    Dim oOpenDlg
    Set oOpenDlg = New ISiteImageOpenDlg
    oOpenDlg.Show 1
    
    If (oOpenDlg.bOpenStack = True) Then
        If (bOpen = True) Then
            iSiteImage1.CloseDisplay
        End If
        bOpen = iSiteImage1.DisplayStack(oOpenDlg.StudyUID.Text, _
                                         oOpenDlg.SeriesUID.Text)
    ElseIf (oOpenDlg.bOpenImage = True) Then
        If (bOpen = True) Then
            iSiteImage1.CloseDisplay
        End If
        bOpen = iSiteImage1.DisplayImage(oOpenDlg.StudyUID.Text, _
                                         oOpenDlg.SeriesUID.Text, _
                                         oOpenDlg.ImageUID.Text)
    End If
    Set oOpenDlg = Nothing
End Sub
'**********************************************************
' Flip_Click
'   The Flip Menu item was clicked.
Private Sub Flip_Click()
    Dim success
    If (bOpen = True) Then
        bFlip = (Not bFlip)
        success = iSiteImage1.SetRotationOrientation(bFlip, kRotate)
    End If
End Sub
'**********************************************************
' Rotate_Click
'   The Rotate Menu item was clicked.
Private Sub Rotate_Click()
    Dim success
    If (bOpen = True) Then
        kRotate = (kRotate + 1) Mod 4
        success = iSiteImage1.SetRotationOrientation(bFlip, kRotate)
    End If
End Sub

'**********************************************************
' properties_Click
'   Show and change then properties of the window
Private Sub properties_Click()
    Dim dlgProp As iSiteImagePropDlg
    Dim strdata
    
    If (bOpen = True) Then
        Set dlgProp = New iSiteImagePropDlg
        ' get the context
        dlgProp.TopPos.Text = 0 ' CInt(iSiteImage1.GetDICOMValue("0x00700052"))
        dlgProp.CenterPos.Text = CInt(iSiteImage1.GetDICOMValue("0x00281050"))
        dlgProp.WidthPos.Text = CInt(iSiteImage1.GetDICOMValue("0x00281051"))
        dlgProp.LeftPos.Text = 0 ' CInt(iSiteImage1.GetDICOMValue("0x00700053"))
        dlgProp.Zoom.Text = 0
        
        dlgProp.Show 1
        
        If (dlgProp.bOK = True) Then
           Call iSiteImage1.SetWindowView(dlgProp.Zoom.Text, _
                                      dlgProp.TopPos.Text, _
                                      dlgProp.LeftPos.Text, _
                                      dlgProp.WidthPos.Text, _
                                      dlgProp.CenterPos.Text)
        End If
    End If
End Sub
'**********************************************************
' WinStatic_Click
'   Show the static window content
Private Sub Static_Click()
Dim context As String
    If (bOpen = True) Then
        context = iSiteImage1.GetStaticWindowInfo
        MsgBox (context)
    End If
End Sub
'**********************************************************
' WinDyn_Click
'   Show the dynamic window content
Private Sub Dynamic_Click()
    Dim context As String
    If (bOpen = True) Then
        context = iSiteImage1.GetWindowContext
        MsgBox (context)
    End If
End Sub
'**********************************************************
' About_Click
'   Show the about box
Private Sub About_Click()
    iSiteImage1.AboutBox
End Sub
