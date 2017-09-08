/* this file contains the actual definitions of */
/* the IIDs and CLSIDs */

/* link this file in with the server and any clients */


/* File created by MIDL compiler version 5.01.0164 */
/* at Tue Nov 01 15:11:19 2005
 */
/* Compiler settings for C:\Temp\LogWriter\LogWriter.idl:
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

const IID IID_IWriter = {0x2E1CE394,0x569F,0x4DD9,{0x80,0x64,0x83,0x39,0xE1,0x6E,0xB6,0x60}};


const IID LIBID_LOGWRITERLib = {0xEFE28B5C,0xD02A,0x47A1,{0x8E,0x67,0x88,0xC5,0x1D,0x81,0x8C,0x82}};


const CLSID CLSID_Writer = {0x8848DC58,0xBEDD,0x4D31,{0x82,0xA6,0x0D,0x37,0x65,0x88,0x1F,0x5C}};


#ifdef __cplusplus
}
#endif

