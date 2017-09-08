
WinHelperps.dll: dlldata.obj WinHelper_p.obj WinHelper_i.obj
	link /dll /out:WinHelperps.dll /def:WinHelperps.def /entry:DllMain dlldata.obj WinHelper_p.obj WinHelper_i.obj \
		kernel32.lib rpcndr.lib rpcns4.lib rpcrt4.lib oleaut32.lib uuid.lib \

.c.obj:
	cl /c /Ox /DWIN32 /D_WIN32_WINNT=0x0400 /DREGISTER_PROXY_DLL \
		$<

clean:
	@del WinHelperps.dll
	@del WinHelperps.lib
	@del WinHelperps.exp
	@del dlldata.obj
	@del WinHelper_p.obj
	@del WinHelper_i.obj
