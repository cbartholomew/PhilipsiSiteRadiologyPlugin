VERSION 5.00
Begin VB.Form ISiteImageOpenDlg 
   Caption         =   "Open Image"
   ClientHeight    =   3060
   ClientLeft      =   60
   ClientTop       =   345
   ClientWidth     =   6495
   LinkTopic       =   "Form1"
   ScaleHeight     =   3060
   ScaleWidth      =   6495
   StartUpPosition =   3  'Windows Default
   Begin VB.TextBox ImageUID 
      Height          =   375
      Left            =   120
      TabIndex        =   8
      Text            =   "1.2.392.200054.30630000.10030.6.1048094015.3"
      Top             =   2160
      Width           =   4095
   End
   Begin VB.TextBox SeriesUID 
      Height          =   375
      Left            =   120
      TabIndex        =   7
      Text            =   "1.2.392.200054.30630000.10030.5.1048094015.0"
      Top             =   1320
      Width           =   4095
   End
   Begin VB.TextBox StudyUID 
      Height          =   375
      Left            =   120
      TabIndex        =   6
      Text            =   "1.2.840.113745.101000.1012000.37697.3747.1118315"
      Top             =   480
      Width           =   4095
   End
   Begin VB.CommandButton CancelButton 
      Caption         =   "Cancel"
      Height          =   495
      Left            =   5040
      TabIndex        =   5
      Top             =   1440
      Width           =   1335
   End
   Begin VB.CommandButton OpenImage 
      Caption         =   "Open Image"
      Height          =   495
      Left            =   5040
      TabIndex        =   4
      Top             =   840
      Width           =   1335
   End
   Begin VB.CommandButton OpenStack 
      Caption         =   "Open Stack"
      Height          =   495
      Left            =   5040
      TabIndex        =   3
      Top             =   240
      Width           =   1335
   End
   Begin VB.Label Label3 
      Caption         =   "ImageUID"
      Height          =   255
      Left            =   120
      TabIndex        =   2
      Top             =   1920
      Width           =   1095
   End
   Begin VB.Label Label2 
      Caption         =   "SeriesUID"
      Height          =   255
      Left            =   120
      TabIndex        =   1
      Top             =   1080
      Width           =   1095
   End
   Begin VB.Label Label1 
      Caption         =   "StudyUID"
      Height          =   255
      Left            =   120
      TabIndex        =   0
      Top             =   240
      Width           =   975
   End
End
Attribute VB_Name = "ISiteImageOpenDlg"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
'*********************************************************
' iSiteImageOpen Dialog
'*********************************************************
' Simple Dialog for opening images and image stacks.
'
Option Explicit

Public bOpenStack As Boolean
Public bOpenImage As Boolean
Public bCancel    As Boolean

Private Sub Form_Load()
    bOpenStack = False
    bOpenImage = False
    bCancel = False
End Sub

Private Sub OpenImage_Click()
    bOpenStack = False
    bOpenImage = True
    bCancel = False
    Visible = False
End Sub

Private Sub OpenStack_Click()
    bOpenStack = True
    bOpenImage = False
    bCancel = False
    Visible = False
End Sub

Private Sub CancelButton_Click()
    bOpenStack = False
    bOpenImage = False
    bCancel = True
    Visible = False
End Sub
