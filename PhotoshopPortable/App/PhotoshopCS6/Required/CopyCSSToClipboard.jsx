// Copyright 2012 Adobe Systems Incorporated.  All Rights reserved.

// IMPORTANT: This file MUST be written out from ESTK with the option to write the UTF-8
// signature turned ON (Edit > Preferences > Documents > UTF-8 Signature).  Otherwise,
// the script fails when run from Photoshop with "JavaScript code was missing" on
// non-English Windows systems.

//
// Extract CSS from the current layer selection and copy it to the clipboard.
//

/*
@@@BUILDINFO@@@ CopyCSSToClipboard.jsx 1.0.0.0
*/

$.localize = true;

// Constants for accessing PS event functionality.  In the interests of speed
// we're defnining just the ones used here, rather than sucking in a general defs file.
const classApplication				= app.charIDToTypeID('capp');
const classLayer					= app.charIDToTypeID('Lyr ');
const classLayerEffects            = app.charIDToTypeID('Lefx');
const classProperty					= app.charIDToTypeID('Prpr');
const enumTarget					= app.charIDToTypeID('Trgt');
const eventGet						= app.charIDToTypeID('getd');
const eventHide                    = app.charIDToTypeID('Hd  ');
const eventShow                    = app.charIDToTypeID('Shw ');
const keyTarget						= app.charIDToTypeID('null');
const keyTextData					= app.charIDToTypeID('TxtD');
const typeNULL                     = app.charIDToTypeID('null');
const typeOrdinal					= app.charIDToTypeID('Ordn');

const ktextToClipboardStr			= app.stringIDToTypeID( "textToClipboard" );

const kprogressFinishStr		= app.stringIDToTypeID( "progressFinish" );
const kprogressStartStr			= app.stringIDToTypeID( "progressStart" );
const kprogressStartTaskStr		= app.stringIDToTypeID( "progressStartTask" );
const kprogressUpdateStr		= app.stringIDToTypeID( "progressUpdate" );
const kprogressTotalStr			= app.stringIDToTypeID( "progressTotal" );
const kprogressDoneStr			= app.stringIDToTypeID( "progressDone" );
const kcancelStr					= app.stringIDToTypeID( "cancel" );

// SheetKind definitions from USheet.h
const kAnySheet				= 0;
const kPixelSheet			= 1;
const kAdjustmentSheet		= 2;
const kTextSheet			= 3;
const kVectorSheet			= 4;
const kSmartObjectSheet		= 5;
const kVideoSheet			= 6;
const kLayerGroupSheet		= 7;
const k3DSheet				= 8;
const kGradientSheet		= 9;
const kPatternSheet			= 10;
const kSolidColorSheet		= 11;
const kBackgroundSheet		= 12;
const kHiddenSectionBounder	= 13;

const unitAngle		= app.charIDToTypeID('#Ang');
const unitDensity	= app.charIDToTypeID('#Rsl');
const unitDistance	= app.charIDToTypeID('#Rlt');
const unitNone		= app.charIDToTypeID('#Nne');
const unitPercent	= app.charIDToTypeID('#Prc');
const unitPixels	= app.charIDToTypeID('#Pxl');
const unitMillimeters= app.charIDToTypeID('#Mlm');
const unitPoints	= app.charIDToTypeID('#Pnt');

const enumRulerCm		= app.charIDToTypeID('RrCm');
const enumRulerInches	= app.charIDToTypeID('RrIn');
const enumRulerPercent	= app.charIDToTypeID('RrPr');
const enumRulerPicas	= app.charIDToTypeID('RrPi');
const enumRulerPixels	= app.charIDToTypeID('RrPx');
const enumRulerPoints	= app.charIDToTypeID('RrPt');

// Tables to convert Photoshop UnitTypes into CSS types
var unitIDToCSS = {};
unitIDToCSS[unitAngle]			= "deg";
unitIDToCSS[unitDensity]		= "DEN	";	// Not supported in CSS
unitIDToCSS[unitDistance]		= "DIST";	// Not supported in CSS
unitIDToCSS[unitNone]			= "";		// Not supported in CSS
unitIDToCSS[unitPercent]		= "%";
unitIDToCSS[unitPixels]			= "px";
unitIDToCSS[unitMillimeters]	= "mm";
unitIDToCSS[unitPoints]			= "pt";

unitIDToCSS[enumRulerCm]		= "cm";
unitIDToCSS[enumRulerInches]	= "in";
unitIDToCSS[enumRulerPercent]	= "%";
unitIDToCSS[enumRulerPicas]		= "pc";
unitIDToCSS[enumRulerPixels]	= "px";
unitIDToCSS[enumRulerPoints]	= "pt";

// Pixel units in Photoshop are hardwired to 72 DPI (points),
// regardless of the doc resolution.
var unitIDToPt = {};
unitIDToPt[unitPixels]			= 1;
unitIDToPt[enumRulerPixels]		= 1;
unitIDToPt[Units.PIXELS]		= 1;
unitIDToPt[unitPoints]			= 1;
unitIDToPt[enumRulerPoints]		= 1;
unitIDToPt[Units.POINTS]		= 1;
unitIDToPt[unitMillimeters]		= UnitValue(1, "mm").as('pt');
unitIDToPt[Units.MM]			= UnitValue(1, "mm").as('pt');
unitIDToPt[enumRulerCm]			= UnitValue(1, "cm").as('pt');
unitIDToPt[Units.CM]			= UnitValue(1, "cm").as('pt');
unitIDToPt[enumRulerInches]		= UnitValue(1, "in").as('pt');
unitIDToPt[Units.INCHES]		= UnitValue(1, "in").as('pt');
unitIDToPt[enumRulerPicas]		= UnitValue(1, "pc").as('pt');
unitIDToPt[Units.PICAS]			= UnitValue(1, "pc").as('pt');

// Fortunately, both CSS and the DOM unit values use the same
// unit abbreviations.
var DOMunitToCSS = {};
DOMunitToCSS[Units.CM]			= "cm";
DOMunitToCSS[Units.INCHES]		= "in";
DOMunitToCSS[Units.MM]			= "mm";
DOMunitToCSS[Units.PERCENT]		= "%";
DOMunitToCSS[Units.PICAS]		= "pc";
DOMunitToCSS[Units.PIXELS]		= "px";
DOMunitToCSS[Units.POINTS]		= "pt";
DOMunitToCSS[TypeUnits.MM]		= "mm";
DOMunitToCSS[TypeUnits.PIXELS]	= "px";
DOMunitToCSS[TypeUnits.POINTS]	= "pt";

// Clean up some pretty noisy FP numbers...
function round1k( x ) { return Math.round( x * 1000 ) / 1000; }

// Strip off the unit string and return UnitValue as an actual number
function stripUnits( x ) { return Number( x.replace(/[^0-9.-]+/g, "") ); }

// Convert a "3.0pt" style string or number to a DOM UnitValue
function makeUnitVal( v )
{
	if (typeof v == "string")
		return UnitValue( stripUnits( v ), v.replace(/[0-9.-]+/g, "" ) );
	if (typeof v == "number")
		return UnitValue( v, DOMunitToCSS[app.preferences.rulerUnits] );
}

// Convert a pixel measurement into a UnitValue in rulerUnits
function pixelsToAppUnits( v )
{
	if (app.preferences.rulerUnits == Units.PIXELS)
		return UnitValue( v, "px" );
	else
	{
		// Divide by doc's DPI, convert to inch, then convert to ruler units.
		var appUnits = DOMunitToCSS[app.preferences.rulerUnits];
		return UnitValue( (UnitValue( v / app.activeDocument.resolution, "in" )).as(appUnits), appUnits );
	}
}

// Format a DOM UnitValue as a CSS string, using the rulerUnits units.
UnitValue.prototype.asCSS = function()
{
	var cssUnits = DOMunitToCSS[app.preferences.rulerUnits];
	return round1k( this.as(cssUnits) ) + cssUnits;
}

// Return the absolute value of a UnitValue as a UnitValue
UnitValue.prototype.abs = function()
{
	return UnitValue( Math.abs( this.value ), this.type );
}

// Base object to scope the rest of the functions in.
function CSSToClipboard()
{
	this.pluginName = "CSSToClipboard";
	this.cssText = "";
	this.indentSpaces = "";
	this.browserTags = ["-moz-", "-webkit-"];
	this.currentLayer = null;

	this.groupLevel = 0;
	this.currentLeft = 0;
	this.currentTop = 0;
	
	this.totalProgressSteps = 0;
	this.currentProgressStep = 0;
	this.aborted = false;
	
	this.descCache = {};
	
	// Work-around for screwy layer indexing.
	this.documentIndexOffset = 0;
	try {
		// This throws an error if there's no background
		if (app.activeDocument.backgroundLayer)
			this.documentIndexOffset = 1;
	}
	catch (err)
	{}
}

cssToClip = new CSSToClipboard();

cssToClip.getCurrentLayer = function()
{
	return this.currentLayer ? this.currentLayer : app.activeDocument.activeLayer;
}

// Listen carefully:  When the Photoshop DOM *reports an index to you*, it uses one based
// indexing.  When *you request* layer info with ref.putIndex( classLayer, index ),
// it uses *zero* based indexing.  The DOM should probably stick to the zero-based
// index, so the adjustment is made here.
// Oh god, it gets worse...the indexing is zero based if there's no background layer.
cssToClip.getCurrentLayerIndex = function()
{
	return this.getCurrentLayer().itemIndex - this.documentIndexOffset;
}

cssToClip.isCSSLayerKind = function( layerKind )
{
	if (typeof layerKind == "undefined")
		layerKind = this.getLayerAttr("layerKind");

	switch (layerKind)
	{
	case kVectorSheet:	return true;
	case kTextSheet:		return true;
	case kPixelSheet:		return true;
	case kLayerGroupSheet:  return true;
	}
	return false
}

// Call Photoshop to copy text to the system clipboard
cssToClip.copyTextToClipboard = function( txt )
{
	var testStrDesc = new ActionDescriptor();

	testStrDesc.putString( keyTextData, txt );
	executeAction( ktextToClipboardStr, testStrDesc, DialogModes.NO );
}

cssToClip.copyCSSToClipboard = function()
{
	this.copyTextToClipboard( this.cssText );
}

// The following methods provide an interface to the Photoshop
// progress bar.  Note when invoked from scripts, the events
// these call modify the progress bar behavior so other tasks in
// Photoshop do NOT access the progress bar.  Thus, if the script
// invokes a task in PS that would cause a progess bar to appear, 
// using these events will supress it.  This needs to be done so fast
// PS events (which happen all the time) don't supress the progress 
// bar for scripts.
cssToClip.startProgress = function( titleStr )
{
	this.totalProgressSteps = 0;
	this.currentProgress = 0;
	var testStrDesc = new ActionDescriptor();

	testStrDesc.putString( keyTextData, titleStr );
	executeAction( kprogressStartStr, testStrDesc, DialogModes.NO );
}

// You MUST call this when finished, otherwise the progress bar won't
// function correctly for other tasks in Photoshop.
cssToClip.finishProgress = function()
{
	if (this.totalProgressSteps == 0)	// Not started/already finished.
		return;
	var desc = new ActionDescriptor();
	executeAction( kprogressFinishStr, desc, DialogModes.NO );
	this.totalProgressSteps = 0;
	this.currentProgress = 0;
}

// You must set cssToClip.totalProgressSteps to the total number of
// steps to complete before calling this or nextProgress().
cssToClip.updateProgress = function( done )
{
	if (this.totalProgressSteps == 0)
		alert("Update: Progress not started?")
		
	var resultDesc, desc = new ActionDescriptor()
	desc.putInteger( kprogressTotalStr, this.totalProgressSteps );
	desc.putInteger( kprogressDoneStr, done );
	resultDesc = executeAction( kprogressUpdateStr, desc, DialogModes.NO );
	var aborted = resultDesc.getBoolean( kcancelStr );
	if ((done == this.totalProgressSteps) || aborted)
		this.finishProgress();
	return aborted;
}

cssToClip.nextProgress = function()
{
	this.currentProgressStep++;
	return this.updateProgress( this.currentProgressStep );
}

// A sample object descriptor path looks like:
// AGMStrokeStyleInfo.strokeStyleContent.'Clr '.'Rd  '
// This converts either OSType or string IDs.
cssToClip.makeID = function( keyStr )
{
	if (keyStr[0] == "'")	// Keys with single quotes 'ABCD' are charIDs.
		return app.charIDToTypeID( eval(keyStr) );
	else
		return app.stringIDToTypeID( keyStr );
}

// It turns out no matter what your PS units pref is set to, the DOM/PSEvent
// system happily hands you values in whatever whacky units it feels like.
// This normalizes the unit output to the ruler setting, for consistency in CSS.
cssToClip.getPSUnitValue = function( desc, ID )
{
	var srcUnitsID = desc.getUnitDoubleType( ID );
	
	if (srcUnitsID == unitNone)	// Um, unitless unitvalues are just...numbers.
		return round1k( desc.getUnitDoubleValue( ID ));
	
	// Angles and percentages are typically things like gradient parameters,
	// and should be left as-is.
	if ((srcUnitsID == unitAngle) || (srcUnitsID == unitPercent))
		return round1k(desc.getUnitDoubleValue( ID )) + unitIDToCSS[srcUnitsID];
		
	// Skip conversion if coming and going in pixels
	if (((srcUnitsID == unitPixels) || (srcUnitsID == enumRulerPixels))
		&& (app.preferences.rulerUnits == Units.PIXELS))
			return round1k(desc.getUnitDoubleValue( ID )) + "px";

	// Other units to pixels must first convert to points, 
	// then expanded by the actual doc resolution (measured in DPI)
	if (app.preferences.rulerUnits == Units.PIXELS)
		return round1k( desc.getUnitDoubleValue( ID ) * unitIDToPt[srcUnitsID] 
								* app.activeDocument.resolution / 72 ) + "px";
								
	var DOMunitStr = DOMunitToCSS[app.preferences.rulerUnits];

	// Pixels must be explictly converted to other units
	if ((srcUnitsID == unitPixels) || (srcUnitsID == enumRulerPixels))
		return pixelsToAppUnits( desc.getUnitDoubleValue( ID ) ).as(DOMunitStr) + DOMunitStr;
	
	// Otherwise, let Photoshop do generic conversion.
	return round1k( UnitValue( desc.getUnitDoubleValue( ID ), 
	                          unitIDToCSS[srcUnitsID] 
					      ).as( DOMunitStr ) ) + DOMunitStr;
}	

// For non-recursive types, return the value.  Note unit types are
// returned as strings with the unit suffix, if you want just the number 
// you'll need to strip off the type and convert it to Number()
cssToClip.getFlatType = function( desc, ID )
{
	switch (desc.getType( ID ))
	{
	case DescValueType.BOOLEANTYPE:	return desc.getBoolean( ID );
	case DescValueType.STRINGTYPE:		return desc.getString( ID );
	case DescValueType.INTEGERTYPE:	return desc.getInteger( ID );
	case DescValueType.DOUBLETYPE:	return desc.getDouble( ID );
	case DescValueType.UNITDOUBLE:	return this.getPSUnitValue( desc, ID );
	case DescValueType.ENUMERATEDTYPE: return typeIDToStringID( desc.getEnumerationValue(ID) );
	default: return desc.getType(ID).toString();
	}
}

ActionDescriptor.prototype.getFlatType = function( ID )
{
	return cssToClip.getFlatType( this, ID );
}

ActionList.prototype.getFlatType = function( index )
{
	// Share the ActionDesciptor code via duck typing
	return cssToClip.getFlatType( this, index );
}

// Traverse the desc object using the keyList (see below)
cssToClip.traverseObject = function( desc, keyList, firstListItemOnly )
{
	if (typeof(keyList) == 'string')	// Make keyList an array if not already
		keyList = keyList.split('.');
		
	if (typeof( firstListItemOnly ) == "undefined")
		firstListItemOnly = true;

	if (desc.typename == "ActionDescriptor") 
	{
		// If there are no more keys to traverse, just return this object.
		if (keyList.length == 0)
			return desc;
		
		keyStr = keyList.shift();
		keyID = this.makeID(keyStr);
		
		if (desc.hasKey( keyID))
			switch (desc.getType( keyID ))
			{
			case DescValueType.OBJECTTYPE:
				return this.traverseObject( desc.getObjectValue( keyID ), keyList, firstListItemOnly );
			case DescValueType.LISTTYPE:
				return this.traverseObject( desc.getList( keyID ), keyList, firstListItemOnly );
			default: return desc.getFlatType( keyID );
			}
		else
			return null;
	}

	if ((desc.typename == "ActionList") && (desc.count > 0))
	{
		// Instead of ID, pass list item #.  Duck typing.
		if (firstListItemOnly)
			switch (desc.getType( 0 ))
			{
			case DescValueType.OBJECTTYPE:
				return this.traverseObject( desc.getObjectValue( 0 ), keyList, firstListItemOnly );
			case DescValueType.LISTTYPE:
				return this.traverseObject( desc.getList( 0 ), keyList, firstListItemOnly );
			default: return desc.getFlatType( 0 );	
			}
		else
		{
			var i, result = [];
			for (i = 0; i < desc.count; ++i)
				switch (desc.getType(i))
				{
				case DescValueType.OBJECTTYPE:
					result.push( this.traverseObject( desc.getObjectValue( i ), keyList, firstListItemOnly  ));
					break;
				case DescValueType.LISTTYPE:
					result.push( this.traverseObject( desc.getList( i ), keyList, firstListItemOnly ));
					break;
				default:
					result.push( desc.getFlatType( i ) );
				}
			return result;
		}
	}
}

// The above routine can be refactored directly into these two, someday.
ActionDescriptor.prototype.getVal = function( keyList, firstListItemOnly  )
{
	return cssToClip.traverseObject( this, keyList, firstListItemOnly  );
}

ActionList.prototype.getVal = function( keyList, firstListItemOnly )
{
	return cssToClip.traverseObject( this, keyList, firstListItemOnly );
}

cssToClip.showLayerEffects = function( isOn, layerIndex )
{
	if (typeof layerIndex == "undefined")
		layerIndex = Number(this.getCurrentLayerIndex());

	var desc = new ActionDescriptor();	// Ever wonder why PS events is so damn slow?
	var list = new ActionList();
	var ref = new ActionReference();
	ref.putClass( classLayerEffects );
	ref.putIndex( classLayer, layerIndex );
	list.putReference( ref );
	desc.putList( typeNULL, list );
	executeAction( isOn ? eventShow : eventHide, desc, DialogModes.NO );
}

// Traverse the object described the string in the current layer.
// Objects take the form of the nested descriptor IDs (the code above figures out the types on the fly).
// So 
//     AGMStrokeStyleInfo.strokeStyleContent.'Clr '.'Rd  '
// translates to doing a eventGet of stringIDToTypeID("AGMStrokeStyleInfo") on the current layer,
// then doing:
//   desc.getObject(s2ID("AGMStrokeStyleInfo"))
//		.getObject(s2ID("strokeStyleContent)).getObject(c2ID('Clr ')).getDouble('Rd  ');
// 
cssToClip.getLayerAttr = function( keyString, layerDesc )
{
	var layerDesc;
	var keyList = keyString.split('.');
	
	if ((typeof(layerDesc) == "undefined") || (layerDesc == null))
	{
		// Cache the IDs, because some (e.g., Text) take a while to get.
		var layerID = this.getCurrentLayer().id;
		if (typeof this.descCache[[layerID, keyList[0]]] == "undefined")
		{
			var ref = new ActionReference();
			ref.putProperty( classProperty, this.makeID(keyList[0]));
			ref.putIndex( classLayer, Number(this.getCurrentLayerIndex()) );
			layerDesc = executeActionGet( ref );
			this.descCache[[layerID, keyList[0]]] = layerDesc;
		}
		else
			layerDesc = this.descCache[[layerID, keyList[0]]];
	}

	return layerDesc.getVal( keyList );
}

// Get a list of descriptors.  Returns NULL if one of them is unavailable.
cssToClip.getLayerAttrList = function( keyString )
{
	var i, keyList = keyString.split('.');
	var descList = [];
	// First item from the layer
	var desc = this.getLayerAttr( keyList[0] );
	if (! desc)
		return null;
	descList.push( desc );
	if (keyList.length == 1)
		return descList;
	
	for (i = 1; i < keyList.length; ++i)
	{
		desc =  descList[i-1].getVal( keyList[i] );
		if (desc == null) return null;
		descList.push( desc );
	}
	return descList;
}	

// Like getLayerAttr, but returns an app attribute.
cssToClip.getAppAttr = function( keyStr )
{
	var keyList = keyStr.split('.');
	var ref = new ActionReference();
	var args = new ActionDescriptor();
	ref.putProperty( classApplication, this.makeID( keyList[0] ) );
	ref.putEnumerated( classApplication, typeOrdinal, enumTarget );
	args.putReference( keyTarget, ref );
	
	appDesc = executeAction( eventGet, args, DialogModes.NO );
	
	return appDesc.getVal( keyList );
}

// If the desc has a 'Clr ' object, create CSS "rgb( rrr, ggg, bbb )" output from it.
cssToClip.descToCSSColor = function( colorDesc, colorPath )
{
	function roundColor( x ) { x = Math.round(x); return (x > 255) ? 255 : x; }

	var i, rgb = ["'Rd  '", "'Grn '","'Bl  '"];	// Note double quotes around single quotes
	var rgbTxt = [];
	// See if the color is really there
	colorDesc = this.getLayerAttr( colorPath, colorDesc );
	if (! colorDesc)
		return null;

	for (i in rgb)
		rgbTxt.push( roundColor(colorDesc.getVal( rgb[i] )) );
	return "rgb( " + rgbTxt.join(", ") + " )";
}

cssToClip.pushIndent = function()
{
	this.indentSpaces += "  ";
}

cssToClip.popIndent = function()
{
	if (this.indentSpaces.length < 2)
		alert("Error - indent underflow");
	this.indentSpaces = this.indentSpaces.slice(0,-2);
}

cssToClip.addText = function( text )
{
	this.cssText += (this.indentSpaces + text + "\n");
//	$.writeln(text);	// debug
}

//
// Add a line of CSS to the output.  Note items delimited
// in $'s are substituted with values looked up from the layer data
// e.g.: 
//     border-width: $AGMStrokeStyleInfo.strokeStyleLineWidth$;"
// puts the stroke width into the output.  If the descriptor isn't
// found, no output is generated.
//
cssToClip.addStyleLine = function( cssText, baseDesc, browserTagList )
{
	var i, subs = cssText.match(/[$]([^$]+)[$]/g);
	if (typeof browserTagList == "undefined")
		browserTagList = null;
	
	var replacementFailed = false;
	
	function testAndReplace( item )
	{
		if (item != null)
			cssText = cssText.replace(/[$]([^$]+)[$]/, item );
		else
			replacementFailed = true;
	}
		
	if (subs)
	{
		// Stupid JS regex leaves whole match in capture group!
		for (i = 0; i < subs.length; ++i)
			subs[i] = subs[i].split('$')[1];

		if (typeof(baseDesc) == "undefined")
			baseDesc = null;
		if (! subs)
			alert('Missing substitution text in CSS spec');
			
		for (i = 0; i < subs.length; ++i)
		{
			// Handle color as a special case
			if (subs[i].match(/'Clr '/))
				testAndReplace( this.descToCSSColor( baseDesc, subs[i] ) );
			else if (subs[i].match(/(^|[.])color$/))
				testAndReplace( this.descToCSSColor( baseDesc, subs[i] ) );
			else
				testAndReplace( this.getLayerAttr( subs[i], baseDesc ) );
		}
	}
	if (! replacementFailed)
	{
		if (browserTagList)
			for (i in browserTagList)
				this.addText( browserTagList[i] + cssText );
		else
			this.addText( cssText );
	}
	return !replacementFailed;
}

// Text items need to try both the base and the default descriptors
cssToClip.addStyleLine2 = function( cssText, baseDesc, backupDesc )
{
	if (! this.addStyleLine( cssText, baseDesc ) && backupDesc)
		this.addStyleLine( cssText, backupDesc );
}

// Checks the geometry, and returns "ellipse", "roundrect" 
// or "null" (if the points don't match round rect/ellipse pattern).
// NOTE: All of this should go away when the DAG metadata is available
// to just tell you what the radius is.
// NOTE2: The path for a shape is ONLY visible when that shape is the active
// layer.  So you must set the shape in question to be the active layer before
// calling this function.  This really slows down the script, unfortunately.
cssToClip.extractShapeGeometry = function()
{
	// We accept a shape as conforming if the coords are within "magnitude"
	// of the overall size.
	function near(a,b, magnitude)
	{
		a = Math.abs(a);  b = Math.abs(b);
		return Math.abs(a-b) < (Math.max(a,b)/magnitude);
	}
	function sameCoord( pathPt, xy )
	{
		return (pathPt.rightDirection[xy] == pathPt.anchor[xy])
				&& (pathPt.leftDirection[xy] == pathPt.anchor[xy]);
	}

	function dumpPts( pts )	// For debug viewing in Matlab
	{
		function pt2str( pt ) { return "[" + Math.floor(pt[0]) + ", " + Math.floor(pt[1]) + "]"; }
		var i;
		for (i = 0; i < pts.length; ++i)
			$.writeln( "[" + [pt2str(pts[i].rightDirection), pt2str(pts[i].anchor), pt2str(pts[i].leftDirection)].join( "; " ) + "];" );
	}

	// See problem 1, http://www.graphics.stanford.edu/courses/cs248-98-fall/Final/q1.html
	const kEllipseDist = 4*(Math.sqrt(2) - 1)/3;

	if (app.activeDocument.pathItems.length == 0)
		return null;	// No path
	
	// Grab the path name from the layer name (it's auto-generated)
	var i, pathName = localize("$$$/ShapeLayerPathName=^0 Shape Path");
	var path = app.activeDocument.pathItems[pathName.replace(/[^]0/,app.activeDocument.activeLayer.name)];
	
	// If we have a plausible path, walk the geometry and see if it matches a shape we know about.
	if ((path.kind == PathKind.VECTORMASK) && (path.subPathItems.length == 1))
	{
		var subPath = path.subPathItems[0];
		if (subPath.closed && (subPath.pathPoints.length == 4))	// Ellipse?
		{
			function next(index) { return (index + 1) % 4; }
			function prev(index) { return (index > 0) ? (index-1) : 3; }
			var pts = subPath.pathPoints;
			
			// dumpPts( pts );
			for (i = 0; i < 4; ++i)
			{
				var xy = i % 2;	// 0 = x, 1 = y, alternates as we traverse the oval sides
				if (! sameCoord( pts[i], 1-xy )) return null;
				if (! near( pts[i].leftDirection[xy] - pts[i].anchor[xy], 
							 (pts[next(i)].anchor[xy] - pts[i].anchor[xy]) * kEllipseDist, 100)) return null;
				if (! near( pts[i].anchor[xy] - pts[i].rightDirection[xy],
							   (pts[prev(i)].anchor[xy] - pts[i].anchor[xy]) * kEllipseDist, 100)) return null;
			}
			// Return the X,Y radius
			return [pts[1].anchor[0] - pts[0].anchor[0], pts[1].anchor[1] - pts[0].anchor[1], "ellipse"];
		}
		else if (subPath.closed && (subPath.pathPoints.length == 8))	// RoundRect?
		{
			var pts = subPath.pathPoints;
			//dumpPts( pts );
			function sameCoord2( pt, xy, io )
			{
				return (sameCoord( pt, xy ) 
							&& ( ((io == 0) && (pt.rightDirection[1-xy] == pt.anchor[1-xy]))
									|| ((io == 1) && (pt.leftDirection[1-xy] == pt.anchor[1-xy])) ) );
			}
			function next(index) { return (index + 1) % 8; }
			function prev(index) { return (index > 0) ? (index-1) : 7; }
			function arm( pt, xy, io ) { return (io == 0) ? pt.rightDirection[xy] : pt.leftDirection[xy]; }
			
			for (i = 0; i < 8; ++i)
			{
				var io = i % 2;			// Incoming / Outgoing vector on the anchor point
				var hv = (i >> 1) % 2;	// Horizontal / Vertical side of the round rect
				if (! sameCoord2( pts[i], 1-hv, 1-io )) return null;
				if (io == 0) 
				{
					if( ! near( arm( pts[i], hv, io ) - pts[i].anchor[hv], 
								   (pts[prev(i)].anchor[hv] - pts[i].anchor[hv])*kEllipseDist, 10 ) )
					return null;
				}
				else
				{
					if( ! near( arm( pts[i], hv, io ) - pts[i].anchor[hv], 
								   (pts[next(i)].anchor[hv] - pts[i].anchor[hv])*kEllipseDist, 10 ) )
					return null;
				}
			}
			return [pts[2].anchor[0] - pts[1].anchor[0], pts[2].anchor[1] - pts[1].anchor[1], "round rect"];
		}
	}
}

// Gradient format: linear-gradient( <angle>, rgb( rr, gg, bb ) xx%, rgb( rr, gg, bb ), yy%, ... );
cssToClip.gradientToCSS = function()
{
	var descList = this.getLayerAttrList( "adjustment.gradient" );

	// If there's no adjustment layer, see if we have one from layerFX...
	if (! descList) 
	{
		descList = this.getLayerAttrList( "layerEffects.gradientFill.gradient" );
		if (descList)
			descList = descList.slice(1);	// toss "layerEffects"
	}
	if (descList)
	{
		var psGrad = descList[1];
		var gradType = descList[0].getVal( "type" );
		if (!(( gradType == "linear") || (gradType == "radial")) )
			return null;		// must be radial or linear
		var maxVal = psGrad.getVal( "interpolation" );
		var angle = descList[0].getVal( "angle" );
		var c, colorStops = psGrad.getVal( "colors", false );
		
		var cssStops = []
		for (c in colorStops)
			cssStops.push( this.descToCSSColor( colorStops[c], "'Clr '" ) + " " +
								round1k((colorStops[c].getVal( "location" )*100) / maxVal) + "%" );
		if (gradType == "linear")
			return gradType + "-gradient( " + angle + ", " + cssStops.join(", ") + ");";
		// Radial - right now gradient is always centered (50% 50%)
		if (gradType == "radial")
			return gradType + "-gradient( 50% 50%, circle closest-side, " + cssStops.join(", ") + ");";
	}
	else
		return null;
}

// Translate Photoshop drop shadow.  May need work with layerEffects.scale,
// and need to figure out what's up with the global angle.
cssToClip.addDropShadow = function( shadowType, boundsInfo )
{
	var dsDesc = this.getLayerAttr( "layerEffects.dropShadow" );
	if (! dsDesc || ! dsDesc.getVal( "enabled"))
		return;
	
	var xoff, yoff, angle;
	var fxScale = this.getLayerAttr( "layerEffects.scale" );
	if (fxScale)
		fxScale = stripUnits( fxScale ) / 100;	// Assume percent
	else
		fxScale = 1;
	// Assumes degrees, PS users aren't into radians.
	if (dsDesc.getVal( "useGlobalAngle" ))
		angle = stripUnits( cssToClip.getAppAttr( "globalAngle.globalLightingAngle" ) ) * (Math.PI/180.0);
	else
		angle = stripUnits( dsDesc.getVal( "localLightingAngle" ) ) * (Math.PI/180.0);
	// Photoshop describes the drop shadow in polar coordinates, while CSS uses cartesian coords.
	var distance = dsDesc.getVal( "distance" );
	var distUnits = distance.replace( /[\d.]+/g, "" );
	distance = stripUnits( distance );
	var xoff = round1k(-Math.cos(angle) * distance) + distUnits;
	var yoff = round1k(  Math.sin(angle) * distance) + distUnits;

	// You say CSS was designed by committee?  Really?
	if (shadowType == "box-shadow")
	{
		this.addStyleLine(shadowType + ": "+xoff+" " + yoff+" $blur$ $chokeMatte$ $color$;", dsDesc );
		boundsInfo.hasDropShadow = true;
	}
	if (shadowType == "text-shadow")
		this.addStyleLine(shadowType + ": " + xoff + " " + yoff + " $blur$ $color$;", dsDesc );
}

cssToClip.addOpacity = function()
{
	var opacity = this.getLayerAttr("opacity");
	if ((typeof opacity == "number") && (opacity < 255))
		this.addText( "opacity: " + round1k(opacity / 255) + ";" );
}

function BoundsParameters()
{
	this.borderWidth = 0;
	this.textOffset = null;
	this.hasDropShadow = false;
}

cssToClip.addObjectBounds = function( boundsInfo )
{
	var curLayer = this.getCurrentLayer();
	var layerIndex = this.getCurrentLayerIndex();
	var saveLayer;
	
	// We need the bounds -without- any layer fx, and we must (ugh)
	// switch layers to the active layer in order to enable/disable it.
	if (boundsInfo.hasDropShadow) 
	{
		saveLayer = app.activeDocument.activeLayer;
		app.activeDocument.activeLayer = curLayer;
		this.showLayerEffects( false, layerIndex );
	}
	var bounds = curLayer.bounds;
	if (boundsInfo.hasDropShadow) 
	{
		this.showLayerEffects( true, layerIndex );
		app.activeDocument.activeLayer = saveLayer;
	}
	

	if ((this.groupLevel == 0) && boundsInfo.textOffset)
	{
		var boundsDesc = this.getLayerAttr( "bounds" );
		if (boundsDesc)
		{
			this.addText("position: absolute;" );
			this.addStyleLine("left: $left$;", boundsDesc );
			this.addStyleLine("top: $top$;", boundsDesc );
		}
	}
	else
	{
		if (boundsInfo.textOffset == null)
			boundsInfo.textOffset = [0, 0];

		// Go through the DOM to ensure we're working in Pixels
		var left = bounds[0];
		var top = bounds[1];
		
		// Intuitively you'd think this would be "relative", but you'd be wrong.
		// "Absolute" coordinates are relative to the container.
		this.addText("position: absolute;");
		this.addText("left: " + (left 
										- this.currentLeft
										+ boundsInfo.textOffset[0]).asCSS() +";");
		this.addText("top: " + (top
										- this.currentTop
										+ boundsInfo.textOffset[1]).asCSS() + ";");
	}

	// Go through the DOM to ensure we're working in Pixels
	var width = bounds[2] - bounds[0];
	var height = bounds[3] - bounds[1];

	// In CSS, the border width is added to the -outside- of the bounds.  In order to match
	// the default behavior in PS, we adjust it here.
	if (boundsInfo.borderWidth > 0)
	{
		width -=  2*boundsInfo.borderWidth;
		height -= 2*boundsInfo.borderWidth;
	}
	this.addText( "width: " + ((width < 0) ? 0 : width.asCSS()) + ";");
	this.addText( "height: " + ((height < 0) ? 0 : height.asCSS()) + ";");
}

// Only called for shape (vector) layers.
cssToClip.getShapeLayerCSS = function( boundsInfo )
{
	// If we have AGM stroke style info, generate that.
	var agmDesc = this.getLayerAttr( "AGMStrokeStyleInfo" );
	boundsInfo.borderWidth = 0;
	if (agmDesc && agmDesc.getVal( "strokeEnabled"))
	{
		// Assumes pixels!
		boundsInfo.borderWidth = makeUnitVal(agmDesc.getVal( "strokeStyleLineWidth" ));
		this.addStyleLine( "border-width: $strokeStyleLineWidth$;", agmDesc );
		this.addStyleLine( "border-color: $strokeStyleContent.color$;", agmDesc );
		var cap = agmDesc.getVal( "strokeStyleLineCapType" );
		var dashes = agmDesc.getVal( "strokeStyleLineDashSet", false );

		if (dashes && dashes.length > 0)
		{
			if ((cap == "strokeStyleRoundCap") && (dashes[0] == 0))
				this.addStyleLine("border-style: dotted;" );
			if ((cap == "strokeStyleButtCap") && (dashes[0] > 0))
				this.addStyleLine("border-style: dashed;");
		}
		else
			this.addStyleLine("border-style: solid;");
	}

	// Check for layerFX style borders
	var fxDesc = this.getLayerAttr( "layerEffects.frameFX" );
	if (fxDesc && fxDesc.getVal( "enabled" ) 
		&& (fxDesc.getVal( "paintType" ) == "solidColor"))
	{
		boundsInfo.borderWidth = makeUnitVal(fxDesc.getVal( "size" )); // Assumes pixels!
		this.addStyleLine("border-style: solid;");
		this.addStyleLine("border-width: $size$;", fxDesc );
		this.addStyleLine("border-color: $color$;", fxDesc );
	}

	// The Path for a shape *only* becomes visible when that shape is the active layer,
	// so we need to make the current layer active before we extract geometry information.
	// Yes, I know this is painfully slow, modifying the DOM or PS to behave otherwise is hard.
	var saveLayer = app.activeDocument.activeLayer;
	app.activeDocument.activeLayer = this.getCurrentLayer();
	var shapeGeom = this.extractShapeGeometry();
	app.activeDocument.activeLayer = saveLayer;
	
	// We assume path coordinates are in pixels, they're not stored as UnitValues in the DOM.
	if (shapeGeom)
	{
		// In CSS, the borderRadius needs to be added to the borderWidth, otherwise ovals
		// turn into rounded rects.
		if (shapeGeom[2] == "ellipse")
			this.addText("border-radius: 50%;");
		else
		{
			var radius =  Math.round((shapeGeom[0]+shapeGeom[1])/2);
			// Note: path geometry is -always- in points ... unless the ruler type is Pixels.
			radius = (app.preferences.rulerUnits == Units.PIXELS)
					? radius = pixelsToAppUnits( radius )
					: radius = UnitValue( radius, "pt" );

			cssToClip.addText( "border-radius: " + radius.asCSS() +";");
		}
	}

	var i, gradientCSS = this.gradientToCSS();
	if (!agmDesc 	// If AGM object, only fill if explictly turned on
		|| (agmDesc && agmDesc.getVal("fillEnabled")))
	{
		if (gradientCSS)
		{
			for (i in this.browserTags)
				this.addText( "background-image: " + this.browserTags[i] + gradientCSS);
		}
		else
			this.addStyleLine( "background-color: $adjustment.color$;" );
	}
			
	this.addDropShadow( "box-shadow", boundsInfo );
}

// Only called for text layers.
cssToClip.getTextLayerCSS = function( boundsInfo )
{
	function isStyleOn( textDesc, styleKey, onText )
	{
		var styleText = textDesc.getVal( styleKey );
		return (styleText && (styleText.search( onText ) >= 0));
	}

	var cssUnits = DOMunitToCSS[app.preferences.rulerUnits];
	boundsInfo.textOffset = [UnitValue( 0, cssUnits ), UnitValue( 0, cssUnits )];

	var textDesc = this.getLayerAttr( "textKey.textStyleRange.textStyle" );
	var defaultDesc = this.getLayerAttr( "textKey.paragraphStyleRange.paragraphStyle.defaultStyle" );
	if (textDesc)
	{
		this.addStyleLine2( "font-size: $size$;", textDesc, defaultDesc );
		this.addStyleLine2( 'font-family: "$fontName$";', textDesc, defaultDesc );
		this.addStyleLine( "color: $color$;", textDesc );	// Color can just default to black
		
		// This table is: [PS Style event key ; PS event value keyword to search for ; corresponding CSS]
		var styleTable = [["fontStyleName",		"Bold",				"font-weight: bold;"],
								["fontStyleName",		"Italic",				"font-style: italic;"],
								["strikethrough",		"StrikethroughOn",	"text-decoration: line-through;"],
								["underline",				"underlineOn",	 "text-decoration: underline;"],
								 // Need RE, otherwise conflicts w/"smallCaps"
								["fontCaps",				/^allCaps/,		 	"text-transform: uppercase;"], 
								["fontCaps",				"smallCaps",		 "font-variant: small-caps;"],
								// These should probably also modify the font size?
								["baseline",				"superScript",	 	"vertical-align: super;"],
								["baseline",				"subScript",			"vertical-align: sub;"]];

		var i;
		for (i in styleTable)
			if (isStyleOn( textDesc, styleTable[i][0], styleTable[i][1] ))
				this.addText( styleTable[i][2] );

		// Synthesize the line-height from the "leading" (line spacing) / font-size
		var fontSize = textDesc.getVal( "size" );
		if (! fontSize && defaultDesc) fontSize = defaultDesc.getVal( "size" );
		var fontLeading = textDesc.getVal( "leading" );
		if (fontSize && fontLeading)
		{
			// Strip off the units; this keeps it as a relative measure.
			fontSize = stripUnits( fontSize );
			fontLeading = stripUnits( fontLeading );
			this.addText( "line-height: " + round1k(fontLeading / fontSize) + ";" );
		}
				
		var pgraphStyle = this.getLayerAttr( "textKey.paragraphStyleRange.paragraphStyle" );
		if (pgraphStyle)
		{
			this.addStyleLine( "text-align: $align$;", pgraphStyle );
			var lineIndent = pgraphStyle.getVal( "firstLineIndent" );
			if (lineIndent && (stripUnits(lineIndent) != 0))
				this.addStyleLine( "text-indent: $firstLineIndent$;", pgraphStyle );
			// PS startIndent for whole 'graph, CSS is?
		}

		// Matrix: [xx xy 0; yx yy 0; tx ty 1], if not identiy, then add it.
		var textXform = this.getLayerAttr( "textKey.transform" );
		if (textXform)
		{
			function xfm(key) { return textXform.getVal( key ); }
			if (! ((xfm( "xx" ) == 1) && (xfm( "xy" ) == 0)
			   && (xfm("yx") == 0) && (xfm("yy") == 1)
			   && (xfm("tx") == 0) && (xfm("ty") == 0)))
				this.addStyleLine( "transform: matrix( $xx$, $xy$, $yx$, $yy$, $tx$, $ty$);", textXform, this.browserTags );
		}
	
		this.addDropShadow( "text-shadow", boundsInfo );
		// text-indent text-align letter-spacing line-height
		
		var baseDesc = this.getLayerAttr( "textKey" );
		function txtBnd( id ) { return makeUnitVal(baseDesc.getVal(id)); }
		boundsInfo.textOffset = [txtBnd("bounds.left") - txtBnd("boundingBox.left"),
										txtBnd("bounds.top") - txtBnd("boundingBox.top")];
	}
}

cssToClip.getPixelLayerCSS = function()
{
	var name = this.getLayerAttr( "name" );
	// If suffix isn't present, add one.
	if (name.search( /[.]((\w){3,4})$/ ) < 0)
		this.addStyleLine( 'background-image: url("images/$name$.png");');
	else
		this.addStyleLine( 'background-image: url("images/$name$");');
}

// Recursively count the number of layers in the group, for progress bar
cssToClip.countGroupLayers = function( layerGroup )
{	
	var i, j, count = 1;	// Count yourself
	const supportedLayers = [LayerKind.NORMAL, LayerKind.TEXT,
								LayerKind.SOLIDFILL, LayerKind.GRADIENTFILL,
								LayerKind.PATTERNFILL];
	for (i = 0; i < layerGroup.layers.length; ++i)
	{
		if (layerGroup.layers[i].visible)
		{
			if (layerGroup.layers[i].typename == "LayerSet")
				count += this.countGroupLayers( layerGroup.layers[i] );
			else
			{
				// Only count layer types we support
				var layerKind = layerGroup.layers[i].kind;
				for (j in supportedLayers)
					if (layerKind == supportedLayers[j])
					{
						count++;
						break;
					}
			}
		}
	}
	return count;
}

// The CSS for nested DIVs (essentially; what's going on with groups) 
// are NOT specified hierarchically.  So we need to finish this group's
// output, then create the CSS for everything in it.
cssToClip.pushGroupLevel = function()
{
	if (this.groupLevel == 0)
	{
		this.startProgress(localize("$$$/Photoshop/Progress/CopyCSSProgress=Copying CSS...") );
		this.totalProgressSteps = this.countGroupLayers( this.getCurrentLayer() );
	}
	this.groupLevel++;
}

cssToClip.popGroupLevel = function()
{
	var i, saveGroupLayer = this.getCurrentLayer();
	var saveLeft = this.currentLeft, saveTop = this.currentTop;
	var bounds = this.getCurrentLayer().bounds;
	
	this.currentLeft = bounds[0];
	this.currentTop = bounds[1];
	var notAborted = true;

	for (i = 0; ((i < saveGroupLayer.layers.length) && notAborted); ++i)
	{
		this.currentLayer = saveGroupLayer.layers[i];
		if (this.isCSSLayerKind())
			notAborted = this.gatherLayerCSS();		
	}
	this.currentLayer = saveGroupLayer;
	this.groupLevel--;
	this.currentLeft = saveLeft;
	this.currentTop = saveTop;
	return notAborted;
}

// Gather the CSS info for the current layer, and add it to this.cssText
// Returns FALSE if the process was aborted.
cssToClip.gatherLayerCSS = function()
{
	// Script can't be called from PS context menu unless there is an active layer
	var curLayer = this.getCurrentLayer();

	// Skip invisible or non-css-able layers.
	var layerKind = this.getLayerAttr("layerKind");
	if ((! this.isCSSLayerKind( layerKind )) || (! curLayer.visible))
		return true;

	const kMaxLayerNameLength = 50;
	var badStuff = /[“”";!.?,'`@’#'$%^&*)(+=|}{><\x2F\s-]/g
	var layerName = curLayer.name.replace(badStuff, "_");
	// Text layer names may be arbitrarily long; keep it real
	if (layerName.length > kMaxLayerNameLength)
		layerName = layerName.slice(0, kMaxLayerNameLength-3) ;
	// Force the LayerID there, since otherwise layer names aren't guarenteed to be unique.
//	layerName += "_" + this.getLayerAttr("layerID");
	// Layers can't start with digits, force an _ in front in that case.
	if (layerName.match(/^[\d].*/))
		layerName = "_" + layerName;

	this.addText( "." + layerName + " {" );
	this.pushIndent();
	var boundsInfo = new BoundsParameters();

	switch (layerKind)
	{
	case kLayerGroupSheet:	this.pushGroupLevel();		break;
	case kVectorSheet:		this.getShapeLayerCSS( boundsInfo );	break;
	case kTextSheet:		this.getTextLayerCSS( boundsInfo );		break;
	case kPixelSheet:		this.getPixelLayerCSS();		break;
	}
	
	var aborted = false;
	if (this.groupLevel > 0)
		aborted = this.nextProgress();
	if (aborted)
		return false;

	this.addOpacity();
	this.addObjectBounds( boundsInfo );
	this.addStyleLine( "z-index: $itemIndex$;" );

	this.popIndent();
	this.addText("}");
	
	var notAborted = true;
	
	// If we're processing a group, now is the time to process the member layers.
	if ((curLayer.typename == "LayerSet")
	    && (this.groupLevel > 0))
		notAborted = this.popGroupLevel();

	return notAborted;
}

// Main entry point
cssToClip.copyLayerCSSToClipboard = function()
{
	var saveUnits = null;
	// There's no way to convert to/from percent.
	if (app.preferences.rulerUnits == Units.PERCENT)
	{
		saveUnits = app.preferences.rulerUnits;
		app.preferences.rulerUnits = Units.POINTS;
	}
	
	try {
		var elapsedTime, then = new Date();
		if (! this.gatherLayerCSS())
			return;						// aborted
		elapsedTime = new Date() - then;
	}
	catch (err)
	{
		// Copy CSS fails if a new doc pops open before it's finished, possible if Cmd-N is selected
		// before the progress bar is up.  This message isn't optimal, but it was too late to get a
		// proper error message translated, so this was close enough.
		alert( localize( "$$$/MaskPanel/MaskSelection/NoLayerSelected=No layer selected" ) );
	}
	
	cssToClip.copyCSSToClipboard();
	if (saveUnits)
		app.preferences.rulerUnits = saveUnits;
		
	this.finishProgress();	// Make sure the prog. bar is down, else Mac PS hangs.
	
	// We can watch this in ESTK without screwing up the app
	return ("time: " + (elapsedTime / 1000.0) + " sec");
}

// Debugging - recursively walk a descriptor and dump out all of the keys
// Note we only dump stringIDs.  If you look in UActions.cpp:CInitialStringToIDEntry,
// there is a table converting most (all?) charIDs into stringIDs.
cssToClip.dumpDesc = function( object, keyName )
{
	var i;
	if (typeof( keyName ) == "undefined")
		keyName = "";

	if (object.typename == "ActionDescriptor")
	{
		for (i = 0; i < object.count; ++i)
		{
			var key = object.getKey(i);
			if (object.getType( key ) == DescValueType.OBJECTTYPE)
				this.dumpDesc( object.getObjectValue( key ), keyName + "." + app.typeIDToStringID( key ) );
			else
			if (object.getType( key ) == DescValueType.LISTTYPE)
				this.dumpDesc( object.getList( key ), keyName + "." + app.typeIDToStringID( key ) );
			else
				$.writeln( keyName + "." + app.typeIDToStringID( key ) + ": " + object.getFlatType( key ) );
		}
	}
	else
	if (object.typename == "ActionList")
	{
		if (object.count == 0)
			$.writeln( keyName + " <empty list>" );
		else
		for (i = 0; i < object.count; ++i)
		{
			if ((object.getType(i) == DescValueType.OBJECTTYPE)
				|| (object.getType(i) == DescValueType.LISTTYPE))
				this.dumpDesc( object.getObjectValue(i), keyName + "[" + i + "]" );
			else
				$.writeln( keyName + "[" + i + "]" + object.getFlatType( i ) );
		}
	}
}

// Dump out a layer attribute as text.  This is how you learn what attributes are available.
// Note this only works for ActionDescriptor or ActionList layer attributes; for simple
// types just call cssToClip.getLayerAttr().
cssToClip.dumpLayerAttr = function( keyName )
{
	this.dumpDesc( this.getLayerAttr( keyName ), keyName );
}

cssToClip.dumpLayers = function( layerSet )
{
	var i;
	if (typeof layerSet == "undefined")
		layerSet = app.activeDocument;

	for (i= 0; i < layerSet.layers.length; ++i)
	{
		if (layerSet.layers[i].typename == "LayerSet")
			this.dumpLayers( layerSet.layers[i] );
		this.currentLayer = layerSet.layers[i];
		$.writeln("Layer[" + cssToClip.getLayerAttr( "itemIndex" ) + "/" + this.getCurrentLayerIndex() + "] name: " + cssToClip.getLayerAttr( "name" ) );
	}
}

function testProgress()
{
	var i, total = 10;
	cssToClip.startProgress( localize("$$$/Photoshop/Progress/CopyCSSProgress=Copying CSS..."), total );
	for (i = 0; i <= total; ++i)
	{
		if (cssToClip.updateProgress( i ))
		{
			$.writeln('cancelled');
			break;
		}
		$.sleep(800);
	}
	cssToClip.finishProgress();
}

// Print out some interesting objects
//runCopyCSSFromScript = true; cssToClip.dumpLayerAttr( "AGMStrokeStyleInfo" );
//runCopyCSSFromScript = true; cssToClip.dumpLayerAttr( "adjustment" );  // Gradient, etc.
//runCopyCSSFromScript = true; cssToClip.dumpLayerAttr( "layerEffects" );  // Layer FX, drop shadow, etc.
//runCopyCSSFromScript = true; cssToClip.dumpLayerAttr( "textKey" );
//runCopyCSSFromScript = true; cssToClip.dumpLayerAttr( "bounds" );
//runCopyCSSFromScript = true; cssToClip.dumpLayers();

// Some useful individual parameters
//runCopyCSSFromScript = true; $.writeln( cssToClip.getLayerAttr( "opacity" ) );
//runCopyCSSFromScript = true; $.writeln( cssToClip.getLayerAttr( "name" ));
//runCopyCSSFromScript = true; $.writeln( cssToClip.getLayerAttr( "itemIndex" ));
//runCopyCSSFromScript = true; $.writeln( cssToClip.getLayerAttr( "layerFXVisible" ));

// Debugging tests
//runCopyCSSFromScript = true; cssToClip.showLayerEffects( false, 4 );
//runCopyCSSFromScript = true; cssToClip.finishProgress();
//runCopyCSSFromScript = true; testProgress();
//runCopyCSSFromScript = true; cssToClip.countGroupLayers( cssToClip.getCurrentLayer() );

// Backdoor to allow using this script as a library; 
if ((typeof( runCopyCSSFromScript ) == 'undefined')
	|| (runCopyCSSFromScript == false))
	cssToClip.copyLayerCSSToClipboard();
