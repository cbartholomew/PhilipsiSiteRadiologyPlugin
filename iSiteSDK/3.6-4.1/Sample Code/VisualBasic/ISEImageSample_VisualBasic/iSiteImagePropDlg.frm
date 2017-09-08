VERSION 5.00
Begin VB.Form iSiteImagePropDlg 
   Caption         =   "iSiteImagePropDlg"
   ClientHeight    =   2295
   ClientLeft      =   60
   ClientTop       =   345
   ClientWidth     =   4815
   LinkTopic       =   "Form1"
   ScaleHeight     =   2295
   ScaleWidth      =   4815
   StartUpPosition =   3  'Windows Default
   Begin VB.CommandButton OKButton 
      Caption         =   "OK"
      Height          =   375
      Left            =   3360
      TabIndex        =   6
      Top             =   240
      Width           =   1215
   End
   Begin VB.CommandButton CancelButton 
      Caption         =   "Cancel"
      Height          =   375
      Left            =   3360
      TabIndex        =   5
      Top             =   720
      Width           =   1215
   End
   Begin VB.TextBox TopPos 
      Height          =   285
      Left            =   1440
      TabIndex        =   4
      Top             =   240
      Width           =   1335
   End
   Begin VB.TextBox LeftPos 
      Height          =   285
      Left            =   1440
      TabIndex        =   3
      Top             =   600
      Width           =   1335
   End
   Begin VB.TextBox CenterPos 
      Height          =   285
      Left            =   1440
      TabIndex        =   2
      Top             =   960
      Width           =   1335
   End
   Begin VB.TextBox WidthPos 
      Height          =   285
      Left            =   1440
      TabIndex        =   1
      Top             =   1320
      Width           =   1335
   End
   Begin VB.TextBox Zoom 
      Height          =   285
      Left            =   1440
      TabIndex        =   0
      Top             =   1680
      Width           =   1335
   End
   Begin VB.Label Label1 
      Caption         =   "Image Center"
      Height          =   255
      Left            =   240
      TabIndex        =   11
      Top             =   960
      Width           =   1095
   End
   Begin VB.Label Label2 
      Caption         =   "Image Left"
      Height          =   255
      Left            =   240
      TabIndex        =   10
      Top             =   600
      Width           =   1095
   End
   Begin VB.Label Label3 
      Caption         =   "Image Top"
      Height          =   255
      Left            =   240
      TabIndex        =   9
      Top             =   240
      Width           =   1095
   End
   Begin VB.Label Label4 
      Caption         =   "Image Width"
      Height          =   255
      Left            =   240
      TabIndex        =   8
      Top             =   1320
      Width           =   1095
   End
   Begin VB.Label Label5 
      Caption         =   "Image Zoom"
      Height          =   255
      Left            =   240
      TabIndex        =   7
      Top             =   1680
      Width           =   1095
   End
End
Attribute VB_Name = "iSiteImagePropDlg"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False

Option Explicit

Public bOK As Boolean
Public bCancel As Boolean


Private Sub Form_Load()
    bOK = False
    bCancel = False
End Sub

Private Sub OKButton_Click()
    bOK = True
    bCancel = False
    Visible = False
End Sub

Private Sub CancelButton_Click()
    bOK = True
    bCancel = False
    Visible = False
End Sub
