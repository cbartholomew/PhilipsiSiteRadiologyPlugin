

function InjectVisualControl(ClassID, DivID)
{
	var iSiteVisualObject = document.createElement('object');
	var d = document.getElementById(DivID);
	d.appendChild(iSiteVisualObject);
	iSiteVisualObject.id = "iSite";
	iSiteVisualObject.classid = ClassID; 
	iSiteVisualObject.width = "100%";
	iSiteVisualObject.height = "100%";
}


