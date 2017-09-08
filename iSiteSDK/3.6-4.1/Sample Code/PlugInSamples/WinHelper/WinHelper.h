/* this ALWAYS GENERATED file contains the definitions for the interfaces */


/* File created by MIDL compiler version 5.01.0164 */
/* at Wed Nov 02 11:09:51 2005
 */
/* Compiler settings for D:\depot\projects\StentorSoft3.5\Products\Client\iSiteSDK3.5\PlugInSamples\WinHelper\WinHelper.idl:
    Oicf (OptLev=i2), W1, Zp8, env=Win32, ms_ext, c_ext
    error checks: allocation ref bounds_check enum stub_data 
*/
//@@MIDL_FILE_HEADING(  )


/* verify that the <rpcndr.h> version is high enough to compile this file*/
#ifndef __REQUIRED_RPCNDR_H_VERSION__
#define __REQUIRED_RPCNDR_H_VERSION__ 440
#endif

#include "rpc.h"
#include "rpcndr.h"

#ifndef __RPCNDR_H_VERSION__
#error this stub requires an updated version of <rpcndr.h>
#endif // __RPCNDR_H_VERSION__

#ifndef COM_NO_WINDOWS_H
#include "windows.h"
#include "ole2.h"
#endif /*COM_NO_WINDOWS_H*/

#ifndef __WinHelper_h__
#define __WinHelper_h__

#ifdef __cplusplus
extern "C"{
#endif 

/* Forward Declarations */ 

#ifndef __IHelper_FWD_DEFINED__
#define __IHelper_FWD_DEFINED__
typedef interface IHelper IHelper;
#endif 	/* __IHelper_FWD_DEFINED__ */


#ifndef __Helper_FWD_DEFINED__
#define __Helper_FWD_DEFINED__

#ifdef __cplusplus
typedef class Helper Helper;
#else
typedef struct Helper Helper;
#endif /* __cplusplus */

#endif 	/* __Helper_FWD_DEFINED__ */


/* header files for imported files */
#include "oaidl.h"
#include "ocidl.h"

void __RPC_FAR * __RPC_USER MIDL_user_allocate(size_t);
void __RPC_USER MIDL_user_free( void __RPC_FAR * ); 

#ifndef __IHelper_INTERFACE_DEFINED__
#define __IHelper_INTERFACE_DEFINED__

/* interface IHelper */
/* [unique][helpstring][dual][uuid][object] */ 


EXTERN_C const IID IID_IHelper;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("2EB8C9F9-4E3E-4707-A2A9-E4A112B3E250")
    IHelper : public IDispatch
    {
    public:
        virtual /* [helpstring][id] */ HRESULT STDMETHODCALLTYPE CreateProgressDlg( 
            /* [in] */ int nLower,
            /* [in] */ int nUpper) = 0;
        
        virtual /* [helpstring][id] */ HRESULT STDMETHODCALLTYPE UpdateProgress( 
            /* [in] */ int nPos,
            /* [retval][out] */ VARIANT_BOOL __RPC_FAR *pSuccess) = 0;
        
        virtual /* [helpstring][id] */ HRESULT STDMETHODCALLTYPE DestroyProgressDlg( void) = 0;
        
        virtual /* [helpstring][id] */ HRESULT STDMETHODCALLTYPE BrowseForFolder( 
            /* [retval][out] */ BSTR __RPC_FAR *Folder) = 0;
        
    };
    
#else 	/* C style interface */

    typedef struct IHelperVtbl
    {
        BEGIN_INTERFACE
        
        HRESULT ( STDMETHODCALLTYPE __RPC_FAR *QueryInterface )( 
            IHelper __RPC_FAR * This,
            /* [in] */ REFIID riid,
            /* [iid_is][out] */ void __RPC_FAR *__RPC_FAR *ppvObject);
        
        ULONG ( STDMETHODCALLTYPE __RPC_FAR *AddRef )( 
            IHelper __RPC_FAR * This);
        
        ULONG ( STDMETHODCALLTYPE __RPC_FAR *Release )( 
            IHelper __RPC_FAR * This);
        
        HRESULT ( STDMETHODCALLTYPE __RPC_FAR *GetTypeInfoCount )( 
            IHelper __RPC_FAR * This,
            /* [out] */ UINT __RPC_FAR *pctinfo);
        
        HRESULT ( STDMETHODCALLTYPE __RPC_FAR *GetTypeInfo )( 
            IHelper __RPC_FAR * This,
            /* [in] */ UINT iTInfo,
            /* [in] */ LCID lcid,
            /* [out] */ ITypeInfo __RPC_FAR *__RPC_FAR *ppTInfo);
        
        HRESULT ( STDMETHODCALLTYPE __RPC_FAR *GetIDsOfNames )( 
            IHelper __RPC_FAR * This,
            /* [in] */ REFIID riid,
            /* [size_is][in] */ LPOLESTR __RPC_FAR *rgszNames,
            /* [in] */ UINT cNames,
            /* [in] */ LCID lcid,
            /* [size_is][out] */ DISPID __RPC_FAR *rgDispId);
        
        /* [local] */ HRESULT ( STDMETHODCALLTYPE __RPC_FAR *Invoke )( 
            IHelper __RPC_FAR * This,
            /* [in] */ DISPID dispIdMember,
            /* [in] */ REFIID riid,
            /* [in] */ LCID lcid,
            /* [in] */ WORD wFlags,
            /* [out][in] */ DISPPARAMS __RPC_FAR *pDispParams,
            /* [out] */ VARIANT __RPC_FAR *pVarResult,
            /* [out] */ EXCEPINFO __RPC_FAR *pExcepInfo,
            /* [out] */ UINT __RPC_FAR *puArgErr);
        
        /* [helpstring][id] */ HRESULT ( STDMETHODCALLTYPE __RPC_FAR *CreateProgressDlg )( 
            IHelper __RPC_FAR * This,
            /* [in] */ int nLower,
            /* [in] */ int nUpper);
        
        /* [helpstring][id] */ HRESULT ( STDMETHODCALLTYPE __RPC_FAR *UpdateProgress )( 
            IHelper __RPC_FAR * This,
            /* [in] */ int nPos,
            /* [retval][out] */ VARIANT_BOOL __RPC_FAR *pSuccess);
        
        /* [helpstring][id] */ HRESULT ( STDMETHODCALLTYPE __RPC_FAR *DestroyProgressDlg )( 
            IHelper __RPC_FAR * This);
        
        /* [helpstring][id] */ HRESULT ( STDMETHODCALLTYPE __RPC_FAR *BrowseForFolder )( 
            IHelper __RPC_FAR * This,
            /* [retval][out] */ BSTR __RPC_FAR *Folder);
        
        END_INTERFACE
    } IHelperVtbl;

    interface IHelper
    {
        CONST_VTBL struct IHelperVtbl __RPC_FAR *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IHelper_QueryInterface(This,riid,ppvObject)	\
    (This)->lpVtbl -> QueryInterface(This,riid,ppvObject)

#define IHelper_AddRef(This)	\
    (This)->lpVtbl -> AddRef(This)

#define IHelper_Release(This)	\
    (This)->lpVtbl -> Release(This)


#define IHelper_GetTypeInfoCount(This,pctinfo)	\
    (This)->lpVtbl -> GetTypeInfoCount(This,pctinfo)

#define IHelper_GetTypeInfo(This,iTInfo,lcid,ppTInfo)	\
    (This)->lpVtbl -> GetTypeInfo(This,iTInfo,lcid,ppTInfo)

#define IHelper_GetIDsOfNames(This,riid,rgszNames,cNames,lcid,rgDispId)	\
    (This)->lpVtbl -> GetIDsOfNames(This,riid,rgszNames,cNames,lcid,rgDispId)

#define IHelper_Invoke(This,dispIdMember,riid,lcid,wFlags,pDispParams,pVarResult,pExcepInfo,puArgErr)	\
    (This)->lpVtbl -> Invoke(This,dispIdMember,riid,lcid,wFlags,pDispParams,pVarResult,pExcepInfo,puArgErr)


#define IHelper_CreateProgressDlg(This,nLower,nUpper)	\
    (This)->lpVtbl -> CreateProgressDlg(This,nLower,nUpper)

#define IHelper_UpdateProgress(This,nPos,pSuccess)	\
    (This)->lpVtbl -> UpdateProgress(This,nPos,pSuccess)

#define IHelper_DestroyProgressDlg(This)	\
    (This)->lpVtbl -> DestroyProgressDlg(This)

#define IHelper_BrowseForFolder(This,Folder)	\
    (This)->lpVtbl -> BrowseForFolder(This,Folder)

#endif /* COBJMACROS */


#endif 	/* C style interface */



/* [helpstring][id] */ HRESULT STDMETHODCALLTYPE IHelper_CreateProgressDlg_Proxy( 
    IHelper __RPC_FAR * This,
    /* [in] */ int nLower,
    /* [in] */ int nUpper);


void __RPC_STUB IHelper_CreateProgressDlg_Stub(
    IRpcStubBuffer *This,
    IRpcChannelBuffer *_pRpcChannelBuffer,
    PRPC_MESSAGE _pRpcMessage,
    DWORD *_pdwStubPhase);


/* [helpstring][id] */ HRESULT STDMETHODCALLTYPE IHelper_UpdateProgress_Proxy( 
    IHelper __RPC_FAR * This,
    /* [in] */ int nPos,
    /* [retval][out] */ VARIANT_BOOL __RPC_FAR *pSuccess);


void __RPC_STUB IHelper_UpdateProgress_Stub(
    IRpcStubBuffer *This,
    IRpcChannelBuffer *_pRpcChannelBuffer,
    PRPC_MESSAGE _pRpcMessage,
    DWORD *_pdwStubPhase);


/* [helpstring][id] */ HRESULT STDMETHODCALLTYPE IHelper_DestroyProgressDlg_Proxy( 
    IHelper __RPC_FAR * This);


void __RPC_STUB IHelper_DestroyProgressDlg_Stub(
    IRpcStubBuffer *This,
    IRpcChannelBuffer *_pRpcChannelBuffer,
    PRPC_MESSAGE _pRpcMessage,
    DWORD *_pdwStubPhase);


/* [helpstring][id] */ HRESULT STDMETHODCALLTYPE IHelper_BrowseForFolder_Proxy( 
    IHelper __RPC_FAR * This,
    /* [retval][out] */ BSTR __RPC_FAR *Folder);


void __RPC_STUB IHelper_BrowseForFolder_Stub(
    IRpcStubBuffer *This,
    IRpcChannelBuffer *_pRpcChannelBuffer,
    PRPC_MESSAGE _pRpcMessage,
    DWORD *_pdwStubPhase);



#endif 	/* __IHelper_INTERFACE_DEFINED__ */



#ifndef __WINHELPERLib_LIBRARY_DEFINED__
#define __WINHELPERLib_LIBRARY_DEFINED__

/* library WINHELPERLib */
/* [helpstring][version][uuid] */ 


EXTERN_C const IID LIBID_WINHELPERLib;

EXTERN_C const CLSID CLSID_Helper;

#ifdef __cplusplus

class DECLSPEC_UUID("43EACD67-F4C7-43A1-B922-2718B7B3B840")
Helper;
#endif
#endif /* __WINHELPERLib_LIBRARY_DEFINED__ */

/* Additional Prototypes for ALL interfaces */

unsigned long             __RPC_USER  BSTR_UserSize(     unsigned long __RPC_FAR *, unsigned long            , BSTR __RPC_FAR * ); 
unsigned char __RPC_FAR * __RPC_USER  BSTR_UserMarshal(  unsigned long __RPC_FAR *, unsigned char __RPC_FAR *, BSTR __RPC_FAR * ); 
unsigned char __RPC_FAR * __RPC_USER  BSTR_UserUnmarshal(unsigned long __RPC_FAR *, unsigned char __RPC_FAR *, BSTR __RPC_FAR * ); 
void                      __RPC_USER  BSTR_UserFree(     unsigned long __RPC_FAR *, BSTR __RPC_FAR * ); 

/* end of Additional Prototypes */

#ifdef __cplusplus
}
#endif

#endif
