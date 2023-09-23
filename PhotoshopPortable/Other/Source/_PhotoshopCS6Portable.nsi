; NSIS with Registry.nsh in Include and Registry.dll, FindProcDLL.dll, KillProcDLL.dll and SimpleSC.dll in Plugins

; **************************************************************************
; === Define constants ===
; **************************************************************************
!define /date VER	"%Y.%m.%d.%H"
!define APPNAME "Adobe Photoshop CS6"
!define APP "PhotoshopCS6"
!define APPDIR "App\PhotoshopCS6"
!define APPEXE "Photoshop.exe"
!define APPSWITCH ""

; --- Define RegKeys ---
	!define REGKEY1 "HKEY_LOCAL_MACHINE\SOFTWARE\Adobe"
	!define REGKEY2 "HKEY_CURRENT_USER\Software\Adobe"
	!define REGKEY3 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\.psb"
	!define REGKEY4 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Photoshop.Application"
	!define REGKEY5 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Photoshop.Image"
	!define REGKEY6 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Photoshop.PlugIn"
	!define REGKEY7 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\.psd"
	!define REGKEY8 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Photoshop.Image.13"
	!define REGKEY9 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Photoshop.Application.60.1"
	!define REGKEY10 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Photoshop.Application.60"
	!define REGKEY11 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{098a6e1b-2858-452a-861e-768ecf77342b}"
	!define REGKEY12 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{12b598b3-499f-4789-b6a4-900f0125e6eb}"
	!define REGKEY13 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{13c5c35e-b099-4275-80b6-cf17de8f2336}"
	!define REGKEY14 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{177e3ca8-73ea-4d4e-a6f0-e2aef336f273}"
	!define REGKEY15 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{1ad38eeb-c67d-4fac-bdf4-779f0cfc85ab}"
	!define REGKEY16 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{1db7f789-1d27-49dd-a0c2-91b13f4ecca4}"
	!define REGKEY17 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{1f7a215c-382b-4973-8093-bc1090a0107b}"
	!define REGKEY18 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{24f0ab76-0d84-4c40-8b96-570fb3985310}"
	!define REGKEY19 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{299fcd63-098d-4039-8aec-f4d83de04865}"
	!define REGKEY20 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{2bd9d654-530e-4ba5-b6d2-b0eb1fea1b32}"
	!define REGKEY21 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{2c253307-8cd7-4747-ad28-64d9d88fe2d9}"
	!define REGKEY22 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{2c7f9b6c-0676-4acc-91b9-53bbe3d4f5ed}"
	!define REGKEY23 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{3407d9a0-a820-4be5-8e28-410d677488aa}"
	!define REGKEY24 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{3DF5B659-0B42-44EA-975F-7FB720964C5A}"
	!define REGKEY25 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{47473c27-0ef2-4604-aec9-85bce5364137}"
	!define REGKEY26 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{48f059ef-bc3e-4763-b820-aa3bb88875ff}"
	!define REGKEY27 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{4a304587-695b-482a-a48d-cdc2c9ac597a}"
	!define REGKEY28 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{568c23fd-cee1-4e9c-a743-5335a23a9134}"
	!define REGKEY29 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{599d4b7a-8c9f-41d0-afbc-54cc1d0f957a}"
	!define REGKEY30 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{6DECC242-87EF-11cf-86B4-444553540000}"
	!define REGKEY31 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{6a16cf17-ee0b-4a2f-9f9a-76fac0d51ec5}"
	!define REGKEY32 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{77afa639-a23d-4710-94a0-5d5de8f19677}"
	!define REGKEY33 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{7bdd6e7b-8ff7-4977-8e6a-5b62cfa47268}"
	!define REGKEY34 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{8aea5346-0dd7-4d56-ae28-0c993f35b6f1}"
	!define REGKEY35 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{8fd90215-58cf-4301-9f13-b0c26ba9fabf}"
	!define REGKEY36 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{96d48725-75bf-4733-962f-120c5681ade4}"
	!define REGKEY37 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{99aea70e-4d13-44bf-a878-33345cbfcbc8}"
	!define REGKEY38 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{9e582123-c2ba-4a25-9e56-3fd3baf8cb71}"
	!define REGKEY39 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{9e6aaf3b-3cd1-47fd-a80a-ebb7adbc53ad}"
	!define REGKEY40 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{9f67edb6-f1d0-458e-b254-67379cabaaa0}"
	!define REGKEY41 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{9fe8667d-3d4d-4509-8c39-659f961e10c6}"
	!define REGKEY42 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{a24cee4d-f054-4189-865a-df11d77ba60b}"
	!define REGKEY43 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{a2770b5c-794a-41fd-8370-feff0ca6fbf9}"
	!define REGKEY44 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{a2dfd5e5-3983-4121-ac5d-e51e392f4dff}"
	!define REGKEY45 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{a5f25dbb-333f-4397-8d33-99e7d9b84e1c}"
	!define REGKEY46 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{a9701d4d-73d2-4547-9ca9-3e655c9d8327}"
	!define REGKEY47 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{b46396c2-8295-4754-b3a0-65c6512fb8f5}"
	!define REGKEY48 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{ba94feb3-1812-4d0b-8954-4aac46c6fc24}"
	!define REGKEY49 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{c21b3526-8bac-496a-8e87-d2edb1fc87d5}"
	!define REGKEY50 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{cbc6639c-1c24-4820-80d9-1166c7d59782}"
	!define REGKEY51 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{d2616c9b-22b5-491b-8285-ff1b2b0b944a}"
	!define REGKEY52 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{d26a2bbd-cb80-486d-bc0e-1218f778d385}"
	!define REGKEY53 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{d8cdc179-c3d5-4eed-a042-938683c29355}"
	!define REGKEY54 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{e548108c-5b87-4bd5-bd88-c034db5b10e4}"
	!define REGKEY55 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{e595896f-0407-4659-994f-19235ffb4d97}"
	!define REGKEY56 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{ecc0e713-bc0d-4c54-86ca-777823d0dbe4}"
	!define REGKEY57 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{ecf6155e-bfaa-40f5-8438-f967fde1f5ff}"
	!define REGKEY58 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{fa15f3c2-ce4f-4df2-a37a-adae44a50d55}"
	!define REGKEY59 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{fbbc7d1e-78ab-432d-970a-daaea9aa1c4d}"
	!define REGKEY60 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{ff49950b-15cf-4228-833c-aaa05baf919e}"
	!define REGKEY61 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\FileType\{3DF5B659-0B42-44EA-975F-7FB720964C5A}"
	!define REGKEY62 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{01CD87DE-1F53-485D-A096-0D318611AB6D}"
	!define REGKEY63 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{064BBE94-396D-4B25-9071-AC5B14D0487F}"
	!define REGKEY64 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{09DA6B10-9684-44EE-A575-01F54660BDDC}"
	!define REGKEY65 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{16BE80A3-57B1-4871-83AC-7F844EEEB1CA}"
	!define REGKEY66 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{1B28B8CD-7578-415F-AC67-DC22A69F4C07}"
	!define REGKEY67 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{22D0B851-E811-40E2-9A79-E84EA602C9F1}"
	!define REGKEY68 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{288BC58E-AB6A-467C-B244-D225349E3EB3}"
	!define REGKEY69 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{29C13F49-BCEF-4FE2-BFC7-6F03B82B726F}"
	!define REGKEY70 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{2DC64F97-8C69-4016-A8EB-89A00217291F}"
	!define REGKEY71 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{2EB2592D-F02D-4117-A22C-26E5CDFAEEE2}"
	!define REGKEY72 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{323DD2BC-0205-4A44-9F8E-0CF2556F00DF}"
	!define REGKEY73 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{372B4D75-EB10-4D0A-8203-5778D521253D}"
	!define REGKEY74 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{376C4F3B-0345-440B-90D9-FE78AECA249C}"
	!define REGKEY75 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{38FB4290-9DF6-11D1-B032-00C04FD7EC47}"
	!define REGKEY76 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{436CE722-7369-4395-ACC2-2DE7A09269DF}"
	!define REGKEY77 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{45F1195F-3554-4B3F-A00A-E1D189C0DC3E}"
	!define REGKEY78 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{46AB9A1D-1B32-4C59-8142-B223ECCF1F74}"
	!define REGKEY79 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{46DFAF34-75E0-470E-8217-B0C763137DD0}"
	!define REGKEY80 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{478BF855-E42A-4D63-8C9D-F562DE5FF7A8}"
	!define REGKEY81 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{4B9E6B85-0613-4873-8AB7-575CD2226768}"
	!define REGKEY82 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{4D40BE2D-FE11-4060-B52A-DE31C837D51D}"
	!define REGKEY83 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{50D0174F-484D-4A2B-8BF0-A21B84167D82}"
	!define REGKEY84 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{5148663B-F632-4AB0-9484-2DBC197CEA82}"
	!define REGKEY85 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{55031766-E456-4E54-A0D0-8E545601A2D8}"
	!define REGKEY86 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{5DE90358-4D0B-4FA1-BA3E-C91BBA863F32}"
	!define REGKEY87 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{5F168D2A-F9EA-4866-8C55-4875E0940622}"
	!define REGKEY88 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{632F36B3-1D76-48BE-ADC3-D7FB62A0C2FB}"
	!define REGKEY89 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{643099A1-0B67-4920-9B14-E14BE8F63D5F}"
	!define REGKEY90 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{65D1B010-0D87-481C-B2E6-22EFB5A54129}"
	!define REGKEY91 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{662506C7-6AAE-4422-ACA4-C63627CB1868}"
	!define REGKEY92 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{66869370-9672-492D-93AC-0ADD62F427F1}"
	!define REGKEY93 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{68F15227-7568-47E1-A4F8-5615C24BDD28}"
	!define REGKEY94 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{69172A3F-E06E-42E6-B733-4DC36E2AC948}"
	!define REGKEY95 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{6B785D83-5B5F-4402-A712-BAEBD8C5B812}"
	!define REGKEY96 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{70A60330-E866-46AA-A715-ABF418C41453}"
	!define REGKEY97 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{726B458C-74B0-47AE-B390-99753B55DF2E}"
	!define REGKEY98 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{746FEF90-A182-4BD0-A4F6-BB6BBAE87A78}"
	!define REGKEY99 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{750824C6-C347-4CDB-AA96-8ABA1EBDF9EA}"
	!define REGKEY100 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{7CA9DE40-9EB3-11D1-B033-00C04FD7EC47}"
	!define REGKEY101 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{7D14BA29-1672-482F-8F48-9DA1E94800FD}"
	!define REGKEY102 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{7E8F9046-9F8E-4594-A22C-9F6B4C227CD7}"
	!define REGKEY103 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{8214A53C-0E67-49D4-A65A-D56F07B17D37}"
	!define REGKEY104 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{84ADBF06-8354-4B5C-9CB1-EA2565B66C7C}"
	!define REGKEY105 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{861C9290-2A0C-4614-8606-706B31BFD45B}"
	!define REGKEY106 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{89417281-E1AF-4800-B82A-9F37ED0478EF}"
	!define REGKEY107 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{8B0CB532-4ACC-4BF3-9E42-0949B679D120}"
	!define REGKEY108 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{8B4F1F1E-4ED7-4291-AE61-76ADF4D1D50B}"
	!define REGKEY109 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{9077D1E1-8959-11CF-86B4-444553540000}"
	!define REGKEY110 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{90CED625-8D78-11CF-86B4-444553540000}"
	!define REGKEY111 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{90CED626-8D78-11CF-86B4-444553540000}"
	!define REGKEY112 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{91A3D47B-9579-4013-9206-7B6859439DA2}"
	!define REGKEY113 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{91B5F8AE-3CC5-4775-BCD3-FF1E0724BB01}"
	!define REGKEY114 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{9414F179-C905-11d1-92CC-00600808FC44}"
	!define REGKEY115 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{94C016CD-178F-4FD7-85BB-F5925A34A122}"
	!define REGKEY116 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{94C4A25A-2C91-4514-A783-3173AFC48430}"
	!define REGKEY117 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{95D69B63-B319-44D3-8307-C988E96E7E58}"
	!define REGKEY118 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{97C81476-3F5D-4934-8CAA-1ED0242105B0}"
	!define REGKEY119 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{9A37A0AC-E951-4B16-A548-886B77338DE0}"
	!define REGKEY120 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{9E01C1DA-DF69-4C2C-85EC-616370DF1CF0}"
	!define REGKEY121 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{ABD0F9CE-822B-4BB1-A811-3EC852B43C0F}"
	!define REGKEY122 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{B0D18870-EAC3-4D35-8612-6F734B3FA656}"
	!define REGKEY123 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{B125A66B-4C94-4E55-AF2F-57EC4DCB484B}"
	!define REGKEY124 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{B1ADEFB6-C536-42D6-8A83-397354A769F8}"
	!define REGKEY125 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{B249C0B0-A004-11D1-B036-00C04FD7EC47}"
	!define REGKEY126 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{B249C0B1-A004-11D1-B036-00C04FD7EC47}"
	!define REGKEY127 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{B3C35001-B625-48D7-9D3B-C9D66D9CF5F1}"
	!define REGKEY128 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{B6D22EB9-EC6D-46DB-B52A-5561433A1217}"
	!define REGKEY129 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{B7283EEC-23B1-49A6-B151-0E97E4AF353C}"
	!define REGKEY130 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{BBCE52D6-5D4B-4691-99E3-62C174BD2855}"
	!define REGKEY131 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{C1C35524-2AA4-4630-80B9-011EFE3D5779}"
	!define REGKEY132 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{C2783141-B50D-4F0C-9E2E-BF76EA8A4E60}"
	!define REGKEY133 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{C88838E3-5A82-4EE7-A66C-E0360C9B0356}"
	!define REGKEY134 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{D2D1665E-C1B9-4CA0-8AC9-529F6A3D9002}"
	!define REGKEY135 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{D334A509-00F8-4092-A9AF-6E1176D06536}"
	!define REGKEY136 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{D54491EF-6F09-4DE3-B49A-D57EDB2F40B8}"
	!define REGKEY137 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{D74B820F-AA86-42DD-8D85-F4D67A62F200}"
	!define REGKEY138 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{DC865034-A587-4CC4-8A5A-453032562BE4}"
	!define REGKEY139 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{DDA16C46-15B2-472D-A659-41AA7BFDC4FD}"
	!define REGKEY140 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{DFF407C7-3BCC-45AC-B6CC-EE6D52032D85}"
	!define REGKEY141 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{E7A940CD-9AC7-4D76-975D-24D6BA0FDD16}"
	!define REGKEY142 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{EC6A366C-F901-488D-A2C3-9E2E78B72DC6}"
	!define REGKEY143 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{EDC373C3-FE30-40BA-A31C-0251CA7456F1}"
	!define REGKEY144 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{EE8364D9-B811-4C7D-A3A8-97C4EBFAB83A}"
	!define REGKEY145 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{F1AF982E-2BBD-406D-9FD6-CA6C898A7FFE}"
	!define REGKEY146 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{F4D7F5C2-37DB-4DF7-8A7D-528902056596}"
	!define REGKEY147 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{F4E21694-AEBF-44FB-90AB-EECD58C1B6F3}"
	!define REGKEY148 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{F715C957-54CE-4E55-9856-591D4CD082FD}"
	!define REGKEY149 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{F867E6C9-B5DB-4C5A-B3BA-63224D08A01B}"
	!define REGKEY150 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{F91F9C5B-AC34-45B7-AFF2-871D9DD2E8EC}"
	!define REGKEY151 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Interface\{FC08B435-5F19-49DF-ABE7-ADCE9F0729FF}"
	!define REGKEY152 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\TypeLib\{4B0AB3E1-80F1-11cf-86B4-444553540000}"
	!define REGKEY153 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\TypeLib\{E891EE9A-D0AE-4CB4-8871-F92C0109F18E}"
	!define REGKEY154 "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\MCD"
	!define REGKEY155 "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\StillImage"
	!define REGKEY156 "HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{33AF501D-76E9-4E7D-9944-FECAC958E757}"
	!define REGKEY157 "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\StillImage"

; C:\Documents and Settings\All Users\Application Data\regid.1986-12.com.adobe

	!define LOCALDIR1 "$APPDATA\Adobe"
	!define SUBDIR1 ""
	!define PORTABLEDIR1 "$EXEDIR\Data\${APP}\AppData"

	!define LOCALDIR2 "$LOCALAPPDATA\Adobe"
	!define SUBDIR2 ""
	!define PORTABLEDIR2 "$EXEDIR\Data\${APP}\LocalAppData"

	!define LOCALDIR3 "$COMMONFILES\Adobe"
	!define LOCALDIR364 "$COMMONFILES64\Adobe"
	!define SUBDIR3 ""
	!define PORTABLEDIR3 "$EXEDIR\Data\${APP}\CommonFiles\Adobe"
	; !define DEFAULTPORTABLEDIR3 "$EXEDIR\App\DefaultData\${APP}\CommonFiles\Adobe"
	; !define PORTABLEDIR3 "$EXEDIR\App\DefaultData\${APP}\CommonFiles\Adobe"

	!define LOCALDIR4 "$APPDATA\\regid.1986-12.com.adobe"
	!define SUBDIR4 ""

; --- Define Visual C++ ---
	!define VC1 "x86_Microsoft.VC90.CRT_1fc8b3b9a1e18e3b_9.0.30729.1_x-ww_6f74963e" ; Manifests
	!define VCP1 "x86_policy.9.0.Microsoft.VC90.CRT_1fc8b3b9a1e18e3b_x-ww_b7353f75" ; Policies
	; !define VC2 "x86_Microsoft.VC80.CRT_1fc8b3b9a1e18e3b_8.0.50727.762_x-ww_6b128700" ; Manifests
	; !define VCP2 "x86_policy.8.0.Microsoft.VC80.CRT_1fc8b3b9a1e18e3b_x-ww_77c24773" ; Policies

; **************************************************************************
; === Best Compression ===
; **************************************************************************
SetCompressor /SOLID lzma
SetCompressorDictSize 32

; **************************************************************************
; === Includes ===
; **************************************************************************
!include "..\_Include\Launcher.nsh" 
!include "LogicLib.nsh"
!include "x64.nsh"

; **************************************************************************
; === Set basic information ===
; **************************************************************************
Name "${APPNAME} Portable"
OutFile "..\..\..\PhotoshopPortable\${APP}Portable.exe"
Icon "${APP}.ico"

; **************************************************************************
; === MultiLang ===
; **************************************************************************
Var LNG
Function MultiLang
StrCpy $LNG ""
System::Call 'kernel32::GetUserDefaultLangID() i .r0'
StrCmp $0 "1033" 0 +2
StrCpy $LNG ""
StrCmp $0 "1029" 0 +2
StrCpy $LNG "cs_CZ"
StrCmp $0 "1030" 0 +2
StrCpy $LNG "da_DK"
StrCmp $0 "1031" 0 +2
StrCpy $LNG "de_DE"
StrCmp $0 "1034" 0 +2
StrCpy $LNG "es_ES"
StrCmp $0 "3082" 0 +2
StrCpy $LNG "es_MX"
StrCmp $0 "1035" 0 +2
StrCpy $LNG "fi_FI"
StrCmp $0 "1036" 0 +2
StrCpy $LNG "fr_FR"
StrCmp $0 "1038" 0 +2
StrCpy $LNG "hu_HU"
StrCmp $0 "1040" 0 +2
StrCpy $LNG "it_IT"
StrCmp $0 "1041" 0 +2
StrCpy $LNG "ja_JP"
StrCmp $0 "1042" 0 +2
StrCpy $LNG "ko_KR"
StrCmp $0 "1044" 0 +2
StrCpy $LNG "nb_NO"
StrCmp $0 "1043" 0 +2
StrCpy $LNG "nl_NL"
StrCmp $0 "1045" 0 +2
StrCpy $LNG "pl_PL"
StrCmp $0 "1046" 0 +2
StrCpy $LNG "pt_BR"
StrCmp $0 "1048" 0 +2
StrCpy $LNG "ro_RO"
StrCmp $0 "1049" 0 +2
StrCpy $LNG "ru_RU"
StrCmp $0 "1053" 0 +2
StrCpy $LNG "sv_SE"
StrCmp $0 "1055" 0 +2
StrCpy $LNG "tr_TR"
StrCmp $0 "1058" 0 +2
StrCpy $LNG "uk_UA"
StrCmp $0 "2052" 0 +2
StrCpy $LNG "zh_CN"
StrCmp $0 "1028" 0 +2
StrCpy $LNG "zh_TW"
StrCmp $0 "1025" 0 +2
StrCpy $LNG "en_AE"
ReadINIStr $0 "$EXEDIR\${APP}Portable.ini" "${APP}Portable" "Language"
StrCmp $0 "" 0 +2
WriteINIStr "$EXEDIR\${APP}Portable.ini" "${APP}Portable" "Language" "$LNG"
FunctionEnd

; **************************************************************************
; === Other Actions ===
; **************************************************************************
Function Init
	CreateDirectory "$EXEDIR\Data"
	${vc::CopyLocal} "${VC1}" "${VCP1}"
	; ${vc::CopyLocal} "${VC2}" "${VCP2}"

CreateDirectory "$EXEDIR\Data\${APP}\Settings"
WriteRegStr HKEY_CURRENT_USER "Software\Adobe\Photoshop\60.0" "SettingsFilePath" "$EXEDIR\Data\${APP}\Settings\"
${If} ${RunningX64}
${AndIf} ${FileExists} "$EXEDIR\${APPDIR}_x64\${APPEXE}"
WriteINIStr "$EXEDIR\${APP}Portable.ini" "${APP}Portable" "x64" "true"
ReadINIStr $0 "$EXEDIR\${APP}Portable.ini" "${APP}Portable" "Language"
IfFileExists "$EXEDIR\${APPDIR}_x64\Locales\en_US\Support Files\tw10428.$0" 0 +2
Rename "$EXEDIR\${APPDIR}_x64\Locales\en_US\Support Files\tw10428.$0" "$EXEDIR\${APPDIR}_x64\Locales\en_US\Support Files\tw10428.dat"
${Else}
WriteINIStr "$EXEDIR\${APP}Portable.ini" "${APP}Portable" "x64" "false"
ReadINIStr $0 "$EXEDIR\${APP}Portable.ini" "${APP}Portable" "Language"
IfFileExists "$EXEDIR\${APPDIR}\Locales\en_US\Support Files\tw10428.$0" 0 +2
Rename "$EXEDIR\${APPDIR}\Locales\en_US\Support Files\tw10428.$0" "$EXEDIR\${APPDIR}\Locales\en_US\Support Files\tw10428.dat"
${EndIf}

ReadINIStr $0 "$EXEDIR\${APP}Portable.ini" "${APP}Portable" "Extended"
StrCmp $0 "false" +3
WriteINIStr "$EXEDIR\${APP}Portable.ini" "${APP}Portable" "Extended" "true"
Call Extended

FunctionEnd

Function Extended
SetOutPath "$COMMONFILES\Adobe\SLCache"
File "CS6\SLC\UGhvdG9zaG9wLUNTNi1XaW4tR017fH1lbl9VUw==.slc"	# en_US
File "CS6\SLC\UGhvdG9zaG9wLUNTNi1XaW4tR017fH1BTEw=.slc"	# ALL
File "CS6\SLC\UGhvdG9zaG9wLUNTNi1XaW4tR017fH1MaWNMb2M=.slc"	 #LicLoc
File "CS6\SLC\X19zbGNfZmVhdHVyZXNfXw==.slc"	# ALL


FunctionEnd


Function Close
	${vc::DelLocal} "${VC1}" "${VCP1}"
	; ${vc::DelLocal} "${VC2}" "${VCP2}"

DeleteRegValue HKEY_CURRENT_USER "Software\Adobe\Photoshop\60.0" "SettingsFilePath" 

; ReadRegStr $0 HKEY_CURRENT_USER "Software\Adobe\Photoshop\60.0" "uiLanguageKey CS6"
; WriteINIStr "$EXEDIR\${APP}Portable.ini" "${APP}Portable" "Language" "$0"

ReadINIStr $0 "$EXEDIR\${APP}Portable.ini" "${APP}Portable" "Language"
ReadINIStr $1 "$EXEDIR\${APP}Portable.ini" "${APP}Portable" "x64"
${If} $1 == 'true'
SetRegView 64
Rename "$EXEDIR\${APPDIR}_x64\Locales\en_US\Support Files\tw10428.dat" "$EXEDIR\${APPDIR}_x64\Locales\en_US\Support Files\tw10428.$0"
${Else}
Rename "$EXEDIR\${APPDIR}\Locales\en_US\Support Files\tw10428.dat" "$EXEDIR\${APPDIR}\Locales\en_US\Support Files\tw10428.$0"
${EndIf}


FunctionEnd

; **************************************************************************
; ==== Running ====
; **************************************************************************

Section "Main"

	Call CheckRegWrite
	Call CheckRunExe
	Call CheckGoodExit


	Call BackupLocalKeys
	Call RestorePortableKeys

	Call BackupLocalDirs
	Call RestorePortableDirs

	Call MultiLang
	Call Init

		Call SplashLogo
		Call Launch

	Call Restore

SectionEnd

Function Restore

	Call Close

	Call BackupPortableDirs
	Call RestoreLocalDirs

	Call BackupPortableKeys
	Call RestoreLocalKeys

FunctionEnd

; **************************************************************************
; === Run Application ===
; **************************************************************************
Function Launch
${If} ${RunningX64}
${AndIf} ${FileExists} "$EXEDIR\${APPDIR}_x64\${APPEXE}"
SetOutPath "$EXEDIR\${APPDIR}_x64"
${GetParameters} $0
ExecWait `"$EXEDIR\${APPDIR}_x64\${APPEXE}"${APPSWITCH} $0`
${Else}
SetOutPath "$EXEDIR\${APPDIR}"
${GetParameters} $0
ExecWait `"$EXEDIR\${APPDIR}\${APPEXE}"${APPSWITCH} $0`
${EndIf}
WriteINIStr "$EXEDIR\Data\${APP}Portable.ini" "${APP}Portable" "GoodExit" "true"
newadvsplash::stop
FunctionEnd

; **************************************************************************
; ==== Actions on Registry Keys =====
; **************************************************************************
Function BackupLocalKeys
${If} ${RunningX64}
${AndIf} ${FileExists} "$EXEDIR\${APPDIR}_x64\${APPEXE}"
SetRegView 64
${Else}
${EndIf}

${registry::BackupKey} "${REGKEY1}"
${registry::BackupKey} "${REGKEY2}"
${registry::BackupKey} "${REGKEY3}"
${registry::BackupKey} "${REGKEY4}"
${registry::BackupKey} "${REGKEY5}"
${registry::BackupKey} "${REGKEY6}"
${registry::BackupKey} "${REGKEY7}"
${registry::BackupKey} "${REGKEY8}"
${registry::BackupKey} "${REGKEY9}"
${registry::BackupKey} "${REGKEY10}"
${registry::BackupKey} "${REGKEY11}"
${registry::BackupKey} "${REGKEY12}"
${registry::BackupKey} "${REGKEY13}"
${registry::BackupKey} "${REGKEY14}"
${registry::BackupKey} "${REGKEY15}"
${registry::BackupKey} "${REGKEY16}"
${registry::BackupKey} "${REGKEY17}"
${registry::BackupKey} "${REGKEY18}"
${registry::BackupKey} "${REGKEY19}"
${registry::BackupKey} "${REGKEY20}"
${registry::BackupKey} "${REGKEY21}"
${registry::BackupKey} "${REGKEY22}"
${registry::BackupKey} "${REGKEY23}"
${registry::BackupKey} "${REGKEY24}"
${registry::BackupKey} "${REGKEY25}"
${registry::BackupKey} "${REGKEY26}"
${registry::BackupKey} "${REGKEY27}"
${registry::BackupKey} "${REGKEY28}"
${registry::BackupKey} "${REGKEY29}"
${registry::BackupKey} "${REGKEY30}"
${registry::BackupKey} "${REGKEY31}"
${registry::BackupKey} "${REGKEY32}"
${registry::BackupKey} "${REGKEY33}"
${registry::BackupKey} "${REGKEY34}"
${registry::BackupKey} "${REGKEY35}"
${registry::BackupKey} "${REGKEY36}"
${registry::BackupKey} "${REGKEY37}"
${registry::BackupKey} "${REGKEY38}"
${registry::BackupKey} "${REGKEY39}"
${registry::BackupKey} "${REGKEY40}"
${registry::BackupKey} "${REGKEY41}"
${registry::BackupKey} "${REGKEY42}"
${registry::BackupKey} "${REGKEY43}"
${registry::BackupKey} "${REGKEY44}"
${registry::BackupKey} "${REGKEY45}"
${registry::BackupKey} "${REGKEY46}"
${registry::BackupKey} "${REGKEY47}"
${registry::BackupKey} "${REGKEY48}"
${registry::BackupKey} "${REGKEY49}"
${registry::BackupKey} "${REGKEY50}"
${registry::BackupKey} "${REGKEY51}"
${registry::BackupKey} "${REGKEY52}"
${registry::BackupKey} "${REGKEY53}"
${registry::BackupKey} "${REGKEY54}"
${registry::BackupKey} "${REGKEY55}"
${registry::BackupKey} "${REGKEY56}"
${registry::BackupKey} "${REGKEY57}"
${registry::BackupKey} "${REGKEY58}"
${registry::BackupKey} "${REGKEY59}"
${registry::BackupKey} "${REGKEY60}"
${registry::BackupKey} "${REGKEY61}"
${registry::BackupKey} "${REGKEY62}"
${registry::BackupKey} "${REGKEY63}"
${registry::BackupKey} "${REGKEY64}"
${registry::BackupKey} "${REGKEY65}"
${registry::BackupKey} "${REGKEY66}"
${registry::BackupKey} "${REGKEY67}"
${registry::BackupKey} "${REGKEY68}"
${registry::BackupKey} "${REGKEY69}"
${registry::BackupKey} "${REGKEY70}"
${registry::BackupKey} "${REGKEY71}"
${registry::BackupKey} "${REGKEY72}"
${registry::BackupKey} "${REGKEY73}"
${registry::BackupKey} "${REGKEY74}"
${registry::BackupKey} "${REGKEY75}"
${registry::BackupKey} "${REGKEY76}"
${registry::BackupKey} "${REGKEY77}"
${registry::BackupKey} "${REGKEY78}"
${registry::BackupKey} "${REGKEY79}"
${registry::BackupKey} "${REGKEY80}"
${registry::BackupKey} "${REGKEY81}"
${registry::BackupKey} "${REGKEY82}"
${registry::BackupKey} "${REGKEY83}"
${registry::BackupKey} "${REGKEY84}"
${registry::BackupKey} "${REGKEY85}"
${registry::BackupKey} "${REGKEY86}"
${registry::BackupKey} "${REGKEY87}"
${registry::BackupKey} "${REGKEY88}"
${registry::BackupKey} "${REGKEY89}"
${registry::BackupKey} "${REGKEY90}"
${registry::BackupKey} "${REGKEY91}"
${registry::BackupKey} "${REGKEY92}"
${registry::BackupKey} "${REGKEY93}"
${registry::BackupKey} "${REGKEY94}"
${registry::BackupKey} "${REGKEY95}"
${registry::BackupKey} "${REGKEY96}"
${registry::BackupKey} "${REGKEY97}"
${registry::BackupKey} "${REGKEY98}"
${registry::BackupKey} "${REGKEY99}"
${registry::BackupKey} "${REGKEY100}"
${registry::BackupKey} "${REGKEY101}"
${registry::BackupKey} "${REGKEY102}"
${registry::BackupKey} "${REGKEY103}"
${registry::BackupKey} "${REGKEY104}"
${registry::BackupKey} "${REGKEY105}"
${registry::BackupKey} "${REGKEY106}"
${registry::BackupKey} "${REGKEY107}"
${registry::BackupKey} "${REGKEY108}"
${registry::BackupKey} "${REGKEY109}"
${registry::BackupKey} "${REGKEY110}"
${registry::BackupKey} "${REGKEY111}"
${registry::BackupKey} "${REGKEY112}"
${registry::BackupKey} "${REGKEY113}"
${registry::BackupKey} "${REGKEY114}"
${registry::BackupKey} "${REGKEY115}"
${registry::BackupKey} "${REGKEY116}"
${registry::BackupKey} "${REGKEY117}"
${registry::BackupKey} "${REGKEY118}"
${registry::BackupKey} "${REGKEY119}"
${registry::BackupKey} "${REGKEY120}"
${registry::BackupKey} "${REGKEY121}"
${registry::BackupKey} "${REGKEY122}"
${registry::BackupKey} "${REGKEY123}"
${registry::BackupKey} "${REGKEY124}"
${registry::BackupKey} "${REGKEY125}"
${registry::BackupKey} "${REGKEY126}"
${registry::BackupKey} "${REGKEY127}"
${registry::BackupKey} "${REGKEY128}"
${registry::BackupKey} "${REGKEY129}"
${registry::BackupKey} "${REGKEY130}"
${registry::BackupKey} "${REGKEY131}"
${registry::BackupKey} "${REGKEY132}"
${registry::BackupKey} "${REGKEY133}"
${registry::BackupKey} "${REGKEY134}"
${registry::BackupKey} "${REGKEY135}"
${registry::BackupKey} "${REGKEY136}"
${registry::BackupKey} "${REGKEY137}"
${registry::BackupKey} "${REGKEY138}"
${registry::BackupKey} "${REGKEY139}"
${registry::BackupKey} "${REGKEY140}"
${registry::BackupKey} "${REGKEY141}"
${registry::BackupKey} "${REGKEY142}"
${registry::BackupKey} "${REGKEY143}"
${registry::BackupKey} "${REGKEY144}"
${registry::BackupKey} "${REGKEY145}"
${registry::BackupKey} "${REGKEY146}"
${registry::BackupKey} "${REGKEY147}"
${registry::BackupKey} "${REGKEY148}"
${registry::BackupKey} "${REGKEY149}"
${registry::BackupKey} "${REGKEY150}"
${registry::BackupKey} "${REGKEY151}"
${registry::BackupKey} "${REGKEY152}"
${registry::BackupKey} "${REGKEY153}"
${registry::BackupKey} "${REGKEY154}"
${registry::BackupKey} "${REGKEY155}"
${registry::BackupKey} "${REGKEY156}"
${registry::BackupKey} "${REGKEY157}"
; ${registry::BackupKey} "${REGKEY158}"
FunctionEnd

Function RestorePortableKeys
${registry::RestoreKey} "$EXEDIR\Data\${APP}.reg" $R0
Sleep 200
${registry::Unload}
FunctionEnd

Function BackupPortableKeys
Delete "$EXEDIR\Data\${APP}.reg"
CreateDirectory "$EXEDIR\Data"
	${registry::SaveKey} "${REGKEY1}" "$EXEDIR\Data\${APP}.reg" "/A=1" $R0
	${registry::SaveKey} "${REGKEY2}" "$EXEDIR\Data\${APP}.reg" "/A=1" $R0
Sleep 100
FunctionEnd

Function RestoreLocalKeys
${registry::RestoreBackupKey} "${REGKEY1}"
${registry::RestoreBackupKey} "${REGKEY2}"
${registry::RestoreBackupKey} "${REGKEY3}"
${registry::RestoreBackupKey} "${REGKEY4}"
${registry::RestoreBackupKey} "${REGKEY5}"
${registry::RestoreBackupKey} "${REGKEY6}"
${registry::RestoreBackupKey} "${REGKEY7}"
${registry::RestoreBackupKey} "${REGKEY8}"
${registry::RestoreBackupKey} "${REGKEY9}"
${registry::RestoreBackupKey} "${REGKEY10}"
${registry::RestoreBackupKey} "${REGKEY11}"
${registry::RestoreBackupKey} "${REGKEY12}"
${registry::RestoreBackupKey} "${REGKEY13}"
${registry::RestoreBackupKey} "${REGKEY14}"
${registry::RestoreBackupKey} "${REGKEY15}"
${registry::RestoreBackupKey} "${REGKEY16}"
${registry::RestoreBackupKey} "${REGKEY17}"
${registry::RestoreBackupKey} "${REGKEY18}"
${registry::RestoreBackupKey} "${REGKEY19}"
${registry::RestoreBackupKey} "${REGKEY20}"
${registry::RestoreBackupKey} "${REGKEY21}"
${registry::RestoreBackupKey} "${REGKEY22}"
${registry::RestoreBackupKey} "${REGKEY23}"
${registry::RestoreBackupKey} "${REGKEY24}"
${registry::RestoreBackupKey} "${REGKEY25}"
${registry::RestoreBackupKey} "${REGKEY26}"
${registry::RestoreBackupKey} "${REGKEY27}"
${registry::RestoreBackupKey} "${REGKEY28}"
${registry::RestoreBackupKey} "${REGKEY29}"
${registry::RestoreBackupKey} "${REGKEY30}"
${registry::RestoreBackupKey} "${REGKEY31}"
${registry::RestoreBackupKey} "${REGKEY32}"
${registry::RestoreBackupKey} "${REGKEY33}"
${registry::RestoreBackupKey} "${REGKEY34}"
${registry::RestoreBackupKey} "${REGKEY35}"
${registry::RestoreBackupKey} "${REGKEY36}"
${registry::RestoreBackupKey} "${REGKEY37}"
${registry::RestoreBackupKey} "${REGKEY38}"
${registry::RestoreBackupKey} "${REGKEY39}"
${registry::RestoreBackupKey} "${REGKEY40}"
${registry::RestoreBackupKey} "${REGKEY41}"
${registry::RestoreBackupKey} "${REGKEY42}"
${registry::RestoreBackupKey} "${REGKEY43}"
${registry::RestoreBackupKey} "${REGKEY44}"
${registry::RestoreBackupKey} "${REGKEY45}"
${registry::RestoreBackupKey} "${REGKEY46}"
${registry::RestoreBackupKey} "${REGKEY47}"
${registry::RestoreBackupKey} "${REGKEY48}"
${registry::RestoreBackupKey} "${REGKEY49}"
${registry::RestoreBackupKey} "${REGKEY50}"
${registry::RestoreBackupKey} "${REGKEY51}"
${registry::RestoreBackupKey} "${REGKEY52}"
${registry::RestoreBackupKey} "${REGKEY53}"
${registry::RestoreBackupKey} "${REGKEY54}"
${registry::RestoreBackupKey} "${REGKEY55}"
${registry::RestoreBackupKey} "${REGKEY56}"
${registry::RestoreBackupKey} "${REGKEY57}"
${registry::RestoreBackupKey} "${REGKEY58}"
${registry::RestoreBackupKey} "${REGKEY59}"
${registry::RestoreBackupKey} "${REGKEY60}"
${registry::RestoreBackupKey} "${REGKEY61}"
${registry::RestoreBackupKey} "${REGKEY62}"
${registry::RestoreBackupKey} "${REGKEY63}"
${registry::RestoreBackupKey} "${REGKEY64}"
${registry::RestoreBackupKey} "${REGKEY65}"
${registry::RestoreBackupKey} "${REGKEY66}"
${registry::RestoreBackupKey} "${REGKEY67}"
${registry::RestoreBackupKey} "${REGKEY68}"
${registry::RestoreBackupKey} "${REGKEY69}"
${registry::RestoreBackupKey} "${REGKEY70}"
${registry::RestoreBackupKey} "${REGKEY71}"
${registry::RestoreBackupKey} "${REGKEY72}"
${registry::RestoreBackupKey} "${REGKEY73}"
${registry::RestoreBackupKey} "${REGKEY74}"
${registry::RestoreBackupKey} "${REGKEY75}"
${registry::RestoreBackupKey} "${REGKEY76}"
${registry::RestoreBackupKey} "${REGKEY77}"
${registry::RestoreBackupKey} "${REGKEY78}"
${registry::RestoreBackupKey} "${REGKEY79}"
${registry::RestoreBackupKey} "${REGKEY80}"
${registry::RestoreBackupKey} "${REGKEY81}"
${registry::RestoreBackupKey} "${REGKEY82}"
${registry::RestoreBackupKey} "${REGKEY83}"
${registry::RestoreBackupKey} "${REGKEY84}"
${registry::RestoreBackupKey} "${REGKEY85}"
${registry::RestoreBackupKey} "${REGKEY86}"
${registry::RestoreBackupKey} "${REGKEY87}"
${registry::RestoreBackupKey} "${REGKEY88}"
${registry::RestoreBackupKey} "${REGKEY89}"
${registry::RestoreBackupKey} "${REGKEY90}"
${registry::RestoreBackupKey} "${REGKEY91}"
${registry::RestoreBackupKey} "${REGKEY92}"
${registry::RestoreBackupKey} "${REGKEY93}"
${registry::RestoreBackupKey} "${REGKEY94}"
${registry::RestoreBackupKey} "${REGKEY95}"
${registry::RestoreBackupKey} "${REGKEY96}"
${registry::RestoreBackupKey} "${REGKEY97}"
${registry::RestoreBackupKey} "${REGKEY98}"
${registry::RestoreBackupKey} "${REGKEY99}"
${registry::RestoreBackupKey} "${REGKEY100}"
${registry::RestoreBackupKey} "${REGKEY101}"
${registry::RestoreBackupKey} "${REGKEY102}"
${registry::RestoreBackupKey} "${REGKEY103}"
${registry::RestoreBackupKey} "${REGKEY104}"
${registry::RestoreBackupKey} "${REGKEY105}"
${registry::RestoreBackupKey} "${REGKEY106}"
${registry::RestoreBackupKey} "${REGKEY107}"
${registry::RestoreBackupKey} "${REGKEY108}"
${registry::RestoreBackupKey} "${REGKEY109}"
${registry::RestoreBackupKey} "${REGKEY110}"
${registry::RestoreBackupKey} "${REGKEY111}"
${registry::RestoreBackupKey} "${REGKEY112}"
${registry::RestoreBackupKey} "${REGKEY113}"
${registry::RestoreBackupKey} "${REGKEY114}"
${registry::RestoreBackupKey} "${REGKEY115}"
${registry::RestoreBackupKey} "${REGKEY116}"
${registry::RestoreBackupKey} "${REGKEY117}"
${registry::RestoreBackupKey} "${REGKEY118}"
${registry::RestoreBackupKey} "${REGKEY119}"
${registry::RestoreBackupKey} "${REGKEY120}"
${registry::RestoreBackupKey} "${REGKEY121}"
${registry::RestoreBackupKey} "${REGKEY122}"
${registry::RestoreBackupKey} "${REGKEY123}"
${registry::RestoreBackupKey} "${REGKEY124}"
${registry::RestoreBackupKey} "${REGKEY125}"
${registry::RestoreBackupKey} "${REGKEY126}"
${registry::RestoreBackupKey} "${REGKEY127}"
${registry::RestoreBackupKey} "${REGKEY128}"
${registry::RestoreBackupKey} "${REGKEY129}"
${registry::RestoreBackupKey} "${REGKEY130}"
${registry::RestoreBackupKey} "${REGKEY131}"
${registry::RestoreBackupKey} "${REGKEY132}"
${registry::RestoreBackupKey} "${REGKEY133}"
${registry::RestoreBackupKey} "${REGKEY134}"
${registry::RestoreBackupKey} "${REGKEY135}"
${registry::RestoreBackupKey} "${REGKEY136}"
${registry::RestoreBackupKey} "${REGKEY137}"
${registry::RestoreBackupKey} "${REGKEY138}"
${registry::RestoreBackupKey} "${REGKEY139}"
${registry::RestoreBackupKey} "${REGKEY140}"
${registry::RestoreBackupKey} "${REGKEY141}"
${registry::RestoreBackupKey} "${REGKEY142}"
${registry::RestoreBackupKey} "${REGKEY143}"
${registry::RestoreBackupKey} "${REGKEY144}"
${registry::RestoreBackupKey} "${REGKEY145}"
${registry::RestoreBackupKey} "${REGKEY146}"
${registry::RestoreBackupKey} "${REGKEY147}"
${registry::RestoreBackupKey} "${REGKEY148}"
${registry::RestoreBackupKey} "${REGKEY149}"
${registry::RestoreBackupKey} "${REGKEY150}"
${registry::RestoreBackupKey} "${REGKEY151}"
${registry::RestoreBackupKey} "${REGKEY152}"
${registry::RestoreBackupKey} "${REGKEY153}"
${registry::RestoreBackupKey} "${REGKEY154}"
${registry::RestoreBackupKey} "${REGKEY155}"
${registry::RestoreBackupKey} "${REGKEY156}"
${registry::RestoreBackupKey} "${REGKEY157}"
; ${registry::RestoreBackupKey} "${REGKEY158}"
${registry::Unload}
FunctionEnd

; **************************************************************************
; ==== Actions on Folders =====
; **************************************************************************
Function BackupLocalDirs
SetShellVarContext current
	${directory::BackupLocal} "${LOCALDIR1}" "${SUBDIR1}"
	${directory::BackupLocal} "${LOCALDIR2}" "${SUBDIR2}"
${If} ${RunningX64}
${AndIf} ${FileExists} "$EXEDIR\${APPDIR}_x64\${APPEXE}"
	${directory::BackupLocal} "${LOCALDIR364}" "${SUBDIR3}"
${Else}
	${directory::BackupLocal} "${LOCALDIR3}" "${SUBDIR3}"
${EndIf}

SetShellVarContext all
	${directory::BackupLocal} "${LOCALDIR1}" "${SUBDIR1}"
	${directory::BackupLocal} "${LOCALDIR4}" "${SUBDIR4}"
FunctionEnd

Function RestorePortableDirs
SetShellVarContext current
	CreateDirectory "${LOCALDIR1}${SUBDIR1}"
	CopyFiles /SILENT "${PORTABLEDIR1}\*.*" "${LOCALDIR1}${SUBDIR1}"
	CreateDirectory "${LOCALDIR2}${SUBDIR2}"
	CopyFiles /SILENT "${PORTABLEDIR2}\*.*" "${LOCALDIR2}${SUBDIR2}"
${If} ${RunningX64}
${AndIf} ${FileExists} "$EXEDIR\${APPDIR}_x64\${APPEXE}"
	CreateDirectory "${LOCALDIR364}${SUBDIR3}"
	CopyFiles /SILENT "${PORTABLEDIR3}\*.*" "${LOCALDIR364}${SUBDIR3}"
${Else}
	CreateDirectory "${LOCALDIR3}${SUBDIR3}"
	CopyFiles /SILENT "${PORTABLEDIR3}\*.*" "${LOCALDIR3}${SUBDIR3}"
${EndIf}
	; ${directory::RestorePortable} "${PORTABLEDIR3}" "${DEFAULTPORTABLEDIR3}" "${LOCALDIR3}" "${SUBDIR3}"

SetShellVarContext all
	CreateDirectory "${LOCALDIR1}${SUBDIR1}"
	CopyFiles /SILENT "${PORTABLEDIR1}All\*.*" "${LOCALDIR1}${SUBDIR1}"
FunctionEnd

Function BackupPortableDirs
SetShellVarContext current
	RMDir "/r" "${PORTABLEDIR1}"
	CreateDirectory "${PORTABLEDIR1}"
	CopyFiles /SILENT "${LOCALDIR1}${SUBDIR1}\*.*" "${PORTABLEDIR1}"
	RMDir "/r" "${PORTABLEDIR2}"
	CreateDirectory "${PORTABLEDIR2}"
	CopyFiles /SILENT "${LOCALDIR2}${SUBDIR2}\*.*" "${PORTABLEDIR2}"
	RMDir "/r" "${PORTABLEDIR3}"
	CreateDirectory "${PORTABLEDIR3}"
${If} ${RunningX64}
${AndIf} ${FileExists} "$EXEDIR\${APPDIR}_x64\${APPEXE}"
	CopyFiles /SILENT "${LOCALDIR364}${SUBDIR3}\*.*" "${PORTABLEDIR3}"
${Else}
	CopyFiles /SILENT "${LOCALDIR3}${SUBDIR3}\*.*" "${PORTABLEDIR3}"
${EndIf}
	; ${directory::BackupPortable} "${PORTABLEDIR3}" "${LOCALDIR3}" "${SUBDIR3}"

SetShellVarContext all
	RMDir "/r" "${PORTABLEDIR1}All"
	CreateDirectory "${PORTABLEDIR1}All"
	CopyFiles /SILENT "${LOCALDIR1}${SUBDIR1}\*.*" "${PORTABLEDIR1}All"
FunctionEnd

Function RestoreLocalDirs
SetShellVarContext current
	${directory::RestoreLocal} "${LOCALDIR1}" "${SUBDIR1}"
	${directory::RestoreLocal} "${LOCALDIR2}" "${SUBDIR2}"
${If} ${RunningX64}
${AndIf} ${FileExists} "$EXEDIR\${APPDIR}_x64\${APPEXE}"
	${directory::RestoreLocal} "${LOCALDIR364}" "${SUBDIR3}"
${Else}
	${directory::RestoreLocal} "${LOCALDIR3}" "${SUBDIR3}"
${EndIf}

SetShellVarContext all
	${directory::RestoreLocal} "${LOCALDIR1}" "${SUBDIR1}"
	${directory::RestoreLocal} "${LOCALDIR4}" "${SUBDIR4}"
FunctionEnd
