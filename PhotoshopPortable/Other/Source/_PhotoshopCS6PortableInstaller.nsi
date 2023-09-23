/*

*/
; !define DLVER	"13.1.2_x64"
; !define APPNAME "Adobe Photoshop CS6 64 bit"
; !define APPDIR 	"PhotoshopCS6_x64"
!define DLVER	"13.1.2"
!define APPNAME "Adobe Photoshop CS6"
!define APPDIR 	"PhotoshopCS6"

!define APP 	"PhotoshopCS6"
!define APPVER 	"0.0.0.0"
!define DLNAME	"Photoshop"
!define APPLANG	"Multilingual"
!define FOLDER	"PhotoshopPortable"
!define FINISHRUN ; Delete if not Finish pages
!define OPTIONS ; Delete if no Components
; !define DESCRIPTION	"Graphic editor" ; Delete if no AppInfo
!define VC1 "x86_Microsoft.VC90.CRT_1fc8b3b9a1e18e3b_9.0.30729.1_x-ww_6f74963e" ; Manifests
!define VCP1 "x86_policy.9.0.Microsoft.VC90.CRT_1fc8b3b9a1e18e3b_x-ww_b7353f75" ; Policies
!define SOURCES ; Delete if no Sources

SetCompressor /SOLID lzma
SetCompressorDictSize 32

!include "..\_Include\Installer.nsh"

!insertmacro MUI_LANGUAGE "English"
!insertmacro MUI_LANGUAGE "Arabic"
!insertmacro MUI_LANGUAGE "Czech"
!insertmacro MUI_LANGUAGE "Danish"
!insertmacro MUI_LANGUAGE "German"
!insertmacro MUI_LANGUAGE "Spanish"
!insertmacro MUI_LANGUAGE "SpanishInternational"
!insertmacro MUI_LANGUAGE "Finnish"
!insertmacro MUI_LANGUAGE "French"
!insertmacro MUI_LANGUAGE "Hungarian"
!insertmacro MUI_LANGUAGE "Italian"
!insertmacro MUI_LANGUAGE "Japanese"
!insertmacro MUI_LANGUAGE "Korean"
!insertmacro MUI_LANGUAGE "Norwegian"
!insertmacro MUI_LANGUAGE "Dutch"
!insertmacro MUI_LANGUAGE "Polish"
!insertmacro MUI_LANGUAGE "PortugueseBR"
!insertmacro MUI_LANGUAGE "Romanian"
!insertmacro MUI_LANGUAGE "Russian"
!insertmacro MUI_LANGUAGE "Swedish"
!insertmacro MUI_LANGUAGE "Turkish"
!insertmacro MUI_LANGUAGE "Ukrainian"
!insertmacro MUI_LANGUAGE "SimpChinese"
!insertmacro MUI_LANGUAGE "TradChinese"

Section "${APPNAME} Portable English"
SectionIn RO
	SetOutPath "$INSTDIR"
		File "..\..\..\${FOLDER}\${APP}Portable.exe"
	SetOutPath "$INSTDIR\App\${APPDIR}"
	File /r "..\..\..\${FOLDER}\App\${APPDIR}\*.*"
	; SetOutPath "$INSTDIR\App\DefaultData\${APP}"
	; File /r "..\..\..\${FOLDER}\App\DefaultData\${APP}\*.*"

	SetOutPath "$INSTDIR\App\WinSxS\${VC1}"
	File /r "..\..\..\${FOLDER}\App\WinSxS\${VC1}\*.*"
	SetOutPath "$INSTDIR\App\WinSxS\Manifests"
	File /r "..\..\..\${FOLDER}\App\WinSxS\Manifests\${VC1}.*"
	SetOutPath "$INSTDIR\App\WinSxS\Policies\${VCP1}"
	File /r "..\..\..\${FOLDER}\App\WinSxS\Policies\${VCP1}\*.*"

!ifdef DESCRIPTION
Call AppInfo
!endif
!ifdef SOURCES
Call Sources
!endif
!ifdef SOURCES & DESCRIPTION
Call SourceInfo
!endif
SectionEnd

; --- Delete if no Components
SectionGroup "Language"

Section /o "Czech" cs_CZ
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.cs_CZ" "CS6\Locales\cs_CZ\Support Files\tw10428.dat"
SectionEnd

Section /o "Danish" da_DK
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.da_DK" "CS6\Locales\da_DK\Support Files\tw10428.dat"
SectionEnd

Section /o "German" de_DE
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.de_DE" "CS6\Locales\de_DE\Support Files\tw10428.dat"
SectionEnd

Section /o "Spanish" es_ES
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.es_ES" "CS6\Locales\es_ES\Support Files\tw10428.dat"
SectionEnd

Section /o "SpanishInternational" es_MX
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.es_MX" "CS6\Locales\es_MX\Support Files\tw10428.dat"
SectionEnd

Section /o "Finnish" fi_FI
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.fi_FI" "CS6\Locales\fi_FI\Support Files\tw10428.dat"
SectionEnd

Section /o "French" fr_FR
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.fr_FR" "CS6\Locales\fr_FR\Support Files\tw10428.dat"
SectionEnd

Section /o "Hungarian" hu_HU
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.hu_HU" "CS6\Locales\hu_HU\Support Files\tw10428.dat"
SectionEnd

Section /o "Italian" it_IT
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.it_IT" "CS6\Locales\it_IT\Support Files\tw10428.dat"
SectionEnd

Section /o "Japanese" ja_JP
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.ja_JP" "CS6\Locales\ja_JP\Support Files\tw10428.dat"
SectionEnd

Section /o "Korean" ko_KR
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.ko_KR" "CS6\Locales\ko_KR\Support Files\tw10428.dat"
SectionEnd

Section /o "Norwegian" nb_NO
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.nb_NO" "CS6\Locales\nb_NO\Support Files\tw10428.dat"
SectionEnd

Section /o "Dutch" nl_NL
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.nl_NL" "CS6\Locales\nl_NL\Support Files\tw10428.dat"
SectionEnd

Section /o "Polish" pl_PL
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.pl_PL" "CS6\Locales\pl_PL\Support Files\tw10428.dat"
SectionEnd

Section /o "PortugueseBR" pt_BR
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.pt_BR" "CS6\Locales\pt_BR\Support Files\tw10428.dat"
SectionEnd

Section /o "Romanian" ro_RO
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.ro_RO" "CS6\Locales\ro_RO\Support Files\tw10428.dat"
SectionEnd

Section /o "Russian" ru_RU
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.ru_RU" "CS6\Locales\ru_RU\Support Files\tw10428.dat"
SectionEnd

Section /o "Swedish" sv_SE
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.sv_SE" "CS6\Locales\sv_SE\Support Files\tw10428.dat"
SectionEnd

Section /o "Turkish" tr_TR
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.tr_TR" "CS6\Locales\tr_TR\Support Files\tw10428.dat"
SectionEnd

Section /o "Ukrainian" uk_UA
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.uk_UA" "CS6\Locales\uk_UA\Support Files\tw10428.dat"
SectionEnd

Section /o "SimpChinese" zh_CN
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.zh_CN" "CS6\Locales\zh_CN\Support Files\tw10428.dat"
SectionEnd

Section /o "TradChinese" zh_TW
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.zh_TW" "CS6\Locales\zh_TW\Support Files\tw10428.dat"
SectionEnd

Section /o "English Arabic Enabled" en_AE
	SetOutPath "$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files"
	File "/oname=$INSTDIR\App\${APPDIR}\Locales\en_US\Support Files\tw10428.en_AE" "CS6\Locales\en_AE\Support Files\tw10428.dat"
SectionEnd

SectionGroupEnd

Function Init
System::Call 'kernel32::GetUserDefaultLangID() i .r0'
StrCmp $0 "1029" 0 +2
SectionSetFlags ${cs_CZ} 1
StrCmp $0 "1030" 0 +2
SectionSetFlags ${da_DK} 1
StrCmp $0 "1031" 0 +2
SectionSetFlags ${de_DE} 1
StrCmp $0 "1034" 0 +2
SectionSetFlags ${es_ES} 1
StrCmp $0 "3082" 0 +2
SectionSetFlags ${es_MX} 1
StrCmp $0 "1035" 0 +2
SectionSetFlags ${fi_FI} 1
StrCmp $0 "1036" 0 +2
SectionSetFlags ${fr_FR} 1
StrCmp $0 "1038" 0 +2
SectionSetFlags ${hu_HU} 1
StrCmp $0 "1040" 0 +2
SectionSetFlags ${it_IT} 1
StrCmp $0 "1041" 0 +2
SectionSetFlags ${ja_JP} 1
StrCmp $0 "1042" 0 +2
SectionSetFlags ${ko_KR} 1
StrCmp $0 "1044" 0 +2
SectionSetFlags ${nb_NO} 1
StrCmp $0 "1043" 0 +2
SectionSetFlags ${nl_NL} 1
StrCmp $0 "1045" 0 +2
SectionSetFlags ${pl_PL} 1
StrCmp $0 "1046" 0 +2
SectionSetFlags ${pt_BR} 1
StrCmp $0 "1048" 0 +2
SectionSetFlags ${ro_RO} 1
StrCmp $0 "1049" 0 +2
SectionSetFlags ${ru_RU} 1
StrCmp $0 "1053" 0 +2
SectionSetFlags ${sv_SE} 1
StrCmp $0 "1055" 0 +2
SectionSetFlags ${tr_TR} 1
StrCmp $0 "1058" 0 +2
SectionSetFlags ${uk_UA} 1
StrCmp $0 "2052" 0 +2
SectionSetFlags ${zh_CN} 1
StrCmp $0 "1028" 0 +2
SectionSetFlags ${zh_TW} 1
StrCmp $0 "1025" 0 +2
SectionSetFlags ${en_AE} 1

FunctionEnd

