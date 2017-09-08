/* this file contains the actual definitions of */
/* the IIDs and CLSIDs */

/* link this file in with the server and any clients */


/* File created by MIDL compiler version 5.01.0164 */
/* at Wed Nov 02 11:09:51 2005
 */
/* Compiler settings for D:\depot\projects\StentorSoft3.5\Products\Client\iSiteSDK3.5\PlugInSamples\WinHelper\WinHelper.idl:
    Oicf (OptLev=i2), W1, Zp8, env=Win32, ms_ext, c_ext
    error checks: allocation ref bounds_check enum stub_data 
*/
//@@MIDL_FILE_HEADING(  )
#ifdef __cplusplus
extern "C"{
#endif 


#ifndef __IID_DEFINED__
#define __IID_DEFINED__

typedef struct _IID
{
    unsigned long x;
    unsigned short s1;
    unsigned short s2;
    unsigned char  c[8];
} IID;

#endif // __IID_DEFINED__

#ifndef CLSID_DEFINED
#define CLSID_DEFINED
typedef IID CLSID;
#endif // CLSID_DEFINED

const IID IID_IHelper = {0x2EB8C9F9,0x4E3E,0x4707,{0xA2,0xA9,0xE4,0xA1,0x12,0xB3,0xE2,0x50}};


const IID LIBID_WINHELPERLib = {0xA9C940A5,0x6E3E,0x44BA,{0xA6,0xAB,0x49,0xAD,0xAA,0xD8,0xF1,0x95}};


const CLSID CLSID_Helper = {0x43EACD67,0xF4C7,0x43A1,{0xB9,0x22,0x27,0x18,0xB7,0xB3,0xB8,0x40}};


#ifdef __cplusplus
}
#endif

