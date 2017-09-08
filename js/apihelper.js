var windows_global = {};

function fnStartAPIEventMenuSelected(MenuItem, ContextRecord) {
    if (ContextRecord != "") {
        if (MenuItem == APPLICATION_MENU_ITEM) {
            try {
                var doc = fnGetDoc(ContextRecord);
                var nodeList = doc.getElementsByTagName(ELEMENT_WINDOW_INFO);
                var studyuid = nodeList.item(0).selectSingleNode(DICOM_TAG_STUDYUID).text;
                var examid = fnGetExamInternal(studyuid);
                var results = fnDoQuery(examid, studyuid);
                if (results != null) {
                    var accession = fnGetAccession(fnGetDoc(results),false);
                    if (accession != "") {
                        // if we have valid results, process the accession
                        fnOpenShieldsAPI(fnGetURL(accession), WINDOW_NAME_MENU);
                    }
                }
            } catch (e) {
                doMessageBox(ERROR_GENERAL + "fnStartAPIEventMenuSelected", MB_ICONERROR);
            }
        }
    }
}

function fnStartAPIEventButtonSelected(ShelfId) {
    try {        
        var shelfXmlResults = Radiology.GetShelfStatus(ShelfId);
        var accession = fnGetAccession(fnGetDoc(shelfXmlResults),true);
        if (accession != "") {
            // if we have valid results, process the accession
            fnOpenShieldsAPI(fnGetURL(accession), WINDOW_NAME_BUTTON);
        }
    } catch (e) {
        doMessageBox(ERROR_GENERAL + "fnStartAPIEventButtonSelected", MB_ICONERROR);
    }
}

function fnAddShelfButton(ShelfId) {
    try {
        Radiology.AddShelfButton(ShelfId, APPLICATION_BUTTON_ITEM, APPLICATION_BUTTON_IMAGE, APPLICATION_BUTTON_TOOLTIP);
    } catch (e) {
        doMessageBox(ERROR_GENERAL + "fnAddShelfButton", MB_ICONERROR);
    }    
}

function fnAddMenuItems() {
    try {
        Radiology.AddViewMenuItem(APPLICATION_MENU_ITEM);
    } catch (e) {
        doMessageBox(ERROR_GENERAL + "fnAddMenuItems", MB_ICONERROR);
    }    
}

function fnRemoveMenuItems() {

    try {
        Radiology.RemoveViewMenuItem(APPLICATION_MENU_ITEM);
    } catch (e) {
        doMessageBox(ERROR_GENERAL + "fnRemoveMenuItems", MB_ICONERROR);
    }
    
}

function fnPageLoad() {
    fnAddMenuItems();
}

function fnPageUnload() {
    //fnRemoveMenuItems();
}

function fnGetDoc(blob) {
    var doc = xmldso.XMLDocument;
    try {        
        doc.loadXML(blob);
    } catch (e) {
        doMessageBox(ERROR_GENERAL + "fnGetDoc", MB_ICONERROR);
    }       
    return doc;
}

function fnDoQuery(identityOne, identityTwo) {
    try {
        var query = {};
        var results = null;
        var queryType = "";
        // if identity one is invalid, find by exception
        if (identityOne == "" || identityOne == "0") {
            // we couldn't find the orignal exam id (identity one) - attempt to look for it as an exception by studyid (identitytwo)
            identityOne = Radiology.FindException(identityTwo);
            // if an exception is found, run the query against that exception
            if (identityOne != "" && identityOne != "0") {
                queryType = BY_EXCEPTION.toString();
            }
        } else {
            // have exam id - find by exam
            queryType = BY_EXAM.toString();
        }

        // if still blank return and error
        if (identityOne == "" || identityOne == "0") {
            doMessageBox(ERROR_NO_STUDY, MB_ICONWARNING);
            return;
        }

        // get query type
        query = QUERY_INFO[queryType];

        // based on query type, find results
        switch (queryType) {
            case BY_EXAM.toString():
                results = fnDoExamQuery(query, identityOne);
                break;
            case BY_EXCEPTION.toString():
                results = fnDoExceptionQuery(query, identityOne);
                break;
            default:
                doMessageBox(ERROR_NO_QUERY_TYPE, MB_ICONWARNING);
                return;
        }

        return results;
    } catch (e) {
        doMessageBox(ERROR_GENERAL + "fnDoQuery", MB_ICONERROR);
    }
   
    return false;
}

function fnDoExceptionQuery(query, identity) {
    var myQuery = query.queryString + "\"" + identity + "\"";    
    return Radiology.Query(myQuery, query.type, query.optional);
}

function fnDoExamQuery(query, identity) {
    var myQuery = query.queryString + "\"" + identity + "\"";    
    return Radiology.Query(myQuery, query.type, query.optional);
}

function fnGetExamInternal(studyuid) {
    return Radiology.FindStudy(studyuid);
}

function fnGetAccession(doc, isButton) {
    try {
        var nodeList = doc.getElementsByTagName((!isButton)
                       ? ELEMENT_EXAM : ELEMENT_SHELF_STATUS);

        return nodeList.item(0).selectSingleNode(DICOM_TAG_ACCESSION).text;
    } catch (e) {
        doMessageBox(ERROR_GENERAL + "fnGetAccession", MB_ICONERROR);
    }
    // failure
    return false;
}

function doMessageBox(message, icon) {
    Radiology.MessageBox(message, icon);
}

function fnOpenShieldsAPI(url, windowName) {  
    try {
        // x64 fix, check for window name
        fnCloseWindow(WINDOW_NAME_MENU);
        fnCloseWindow(WINDOW_NAME_BUTTON);

        // create new window
        windows_global[windowName] = window.open(url, windowName, WINDOW_SPECS);
    } catch (e) {            
        doMessageBox(ERROR_WARNING_BROWSER + " function - fnOpenShieldsAPI", MB_ICONWARNING);
    }
    return windows_global[windowName];
}

function fnGetWindow(windowName) {
    return windows_global[windowName];
}

function fnWindowCheck(windowName) {
    var window = fnGetWindow(windowName);
    if (window != undefined || window != null) {
        if (!window.closed) {
            fnCloseWindow(windowName);
        }
    }
}

function fnCloseWindow(windowName) {
    var window = fnGetWindow(windowName);
    if (window) {
        window.close();
        delete windows_global[windowName];
    }
}

function fnGetURL(verification) {
    var params = [];

    params.push("key=" + PUBLIC_API_KEY);
    params.push("applicationid=" + APPLICATION_ID);
    params.push("uid=" + UID);
    params.push("password=" + PWD);
    params.push("optionalverification=" + verification);

    return BASE_URI + params.join(AMP);
}