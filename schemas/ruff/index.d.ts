/* eslint-disable */

export type Direction = 'dependencies' | 'dependents';
export type RuleSelector =
  | 'A'
  | 'A0'
  | 'A00'
  | 'A001'
  | 'A002'
  | 'A003'
  | 'A004'
  | 'A005'
  | 'A006'
  | 'AIR'
  | 'AIR0'
  | 'AIR00'
  | 'AIR001'
  | 'AIR002'
  | 'AIR3'
  | 'AIR30'
  | 'AIR301'
  | 'AIR302'
  | 'AIR303'
  | 'AIR31'
  | 'AIR311'
  | 'AIR312'
  | 'AIR32'
  | 'AIR321'
  | 'ALL'
  | 'ANN'
  | 'ANN0'
  | 'ANN00'
  | 'ANN001'
  | 'ANN002'
  | 'ANN003'
  | 'ANN2'
  | 'ANN20'
  | 'ANN201'
  | 'ANN202'
  | 'ANN204'
  | 'ANN205'
  | 'ANN206'
  | 'ANN4'
  | 'ANN40'
  | 'ANN401'
  | 'ARG'
  | 'ARG0'
  | 'ARG00'
  | 'ARG001'
  | 'ARG002'
  | 'ARG003'
  | 'ARG004'
  | 'ARG005'
  | 'ASYNC'
  | 'ASYNC1'
  | 'ASYNC10'
  | 'ASYNC100'
  | 'ASYNC105'
  | 'ASYNC109'
  | 'ASYNC11'
  | 'ASYNC110'
  | 'ASYNC115'
  | 'ASYNC116'
  | 'ASYNC2'
  | 'ASYNC21'
  | 'ASYNC210'
  | 'ASYNC212'
  | 'ASYNC22'
  | 'ASYNC220'
  | 'ASYNC221'
  | 'ASYNC222'
  | 'ASYNC23'
  | 'ASYNC230'
  | 'ASYNC24'
  | 'ASYNC240'
  | 'ASYNC25'
  | 'ASYNC250'
  | 'ASYNC251'
  | 'B'
  | 'B0'
  | 'B00'
  | 'B002'
  | 'B003'
  | 'B004'
  | 'B005'
  | 'B006'
  | 'B007'
  | 'B008'
  | 'B009'
  | 'B01'
  | 'B010'
  | 'B011'
  | 'B012'
  | 'B013'
  | 'B014'
  | 'B015'
  | 'B016'
  | 'B017'
  | 'B018'
  | 'B019'
  | 'B02'
  | 'B020'
  | 'B021'
  | 'B022'
  | 'B023'
  | 'B024'
  | 'B025'
  | 'B026'
  | 'B027'
  | 'B028'
  | 'B029'
  | 'B03'
  | 'B030'
  | 'B031'
  | 'B032'
  | 'B033'
  | 'B034'
  | 'B035'
  | 'B039'
  | 'B9'
  | 'B90'
  | 'B901'
  | 'B903'
  | 'B904'
  | 'B905'
  | 'B909'
  | 'B91'
  | 'B911'
  | 'B912'
  | 'BLE'
  | 'BLE0'
  | 'BLE00'
  | 'BLE001'
  | 'C'
  | 'C4'
  | 'C40'
  | 'C400'
  | 'C401'
  | 'C402'
  | 'C403'
  | 'C404'
  | 'C405'
  | 'C406'
  | 'C408'
  | 'C409'
  | 'C41'
  | 'C410'
  | 'C411'
  | 'C413'
  | 'C414'
  | 'C415'
  | 'C416'
  | 'C417'
  | 'C418'
  | 'C419'
  | 'C42'
  | 'C420'
  | 'C9'
  | 'C90'
  | 'C901'
  | 'COM'
  | 'COM8'
  | 'COM81'
  | 'COM812'
  | 'COM818'
  | 'COM819'
  | 'CPY'
  | 'CPY0'
  | 'CPY00'
  | 'CPY001'
  | 'D'
  | 'D1'
  | 'D10'
  | 'D100'
  | 'D101'
  | 'D102'
  | 'D103'
  | 'D104'
  | 'D105'
  | 'D106'
  | 'D107'
  | 'D2'
  | 'D20'
  | 'D200'
  | 'D201'
  | 'D202'
  | 'D203'
  | 'D204'
  | 'D205'
  | 'D206'
  | 'D207'
  | 'D208'
  | 'D209'
  | 'D21'
  | 'D210'
  | 'D211'
  | 'D212'
  | 'D213'
  | 'D214'
  | 'D215'
  | 'D3'
  | 'D30'
  | 'D300'
  | 'D301'
  | 'D4'
  | 'D40'
  | 'D400'
  | 'D401'
  | 'D402'
  | 'D403'
  | 'D404'
  | 'D405'
  | 'D406'
  | 'D407'
  | 'D408'
  | 'D409'
  | 'D41'
  | 'D410'
  | 'D411'
  | 'D412'
  | 'D413'
  | 'D414'
  | 'D415'
  | 'D416'
  | 'D417'
  | 'D418'
  | 'D419'
  | 'D42'
  | 'D420'
  | 'DJ'
  | 'DJ0'
  | 'DJ00'
  | 'DJ001'
  | 'DJ003'
  | 'DJ006'
  | 'DJ007'
  | 'DJ008'
  | 'DJ01'
  | 'DJ012'
  | 'DJ013'
  | 'DOC'
  | 'DOC1'
  | 'DOC10'
  | 'DOC102'
  | 'DOC2'
  | 'DOC20'
  | 'DOC201'
  | 'DOC202'
  | 'DOC4'
  | 'DOC40'
  | 'DOC402'
  | 'DOC403'
  | 'DOC5'
  | 'DOC50'
  | 'DOC501'
  | 'DOC502'
  | 'DTZ'
  | 'DTZ0'
  | 'DTZ00'
  | 'DTZ001'
  | 'DTZ002'
  | 'DTZ003'
  | 'DTZ004'
  | 'DTZ005'
  | 'DTZ006'
  | 'DTZ007'
  | 'DTZ01'
  | 'DTZ011'
  | 'DTZ012'
  | 'DTZ9'
  | 'DTZ90'
  | 'DTZ901'
  | 'E'
  | 'E1'
  | 'E10'
  | 'E101'
  | 'E11'
  | 'E111'
  | 'E112'
  | 'E113'
  | 'E114'
  | 'E115'
  | 'E116'
  | 'E117'
  | 'E2'
  | 'E20'
  | 'E201'
  | 'E202'
  | 'E203'
  | 'E204'
  | 'E21'
  | 'E211'
  | 'E22'
  | 'E221'
  | 'E222'
  | 'E223'
  | 'E224'
  | 'E225'
  | 'E226'
  | 'E227'
  | 'E228'
  | 'E23'
  | 'E231'
  | 'E24'
  | 'E241'
  | 'E242'
  | 'E25'
  | 'E251'
  | 'E252'
  | 'E26'
  | 'E261'
  | 'E262'
  | 'E265'
  | 'E266'
  | 'E27'
  | 'E271'
  | 'E272'
  | 'E273'
  | 'E274'
  | 'E275'
  | 'E3'
  | 'E30'
  | 'E301'
  | 'E302'
  | 'E303'
  | 'E304'
  | 'E305'
  | 'E306'
  | 'E4'
  | 'E40'
  | 'E401'
  | 'E402'
  | 'E5'
  | 'E50'
  | 'E501'
  | 'E502'
  | 'E7'
  | 'E70'
  | 'E701'
  | 'E702'
  | 'E703'
  | 'E71'
  | 'E711'
  | 'E712'
  | 'E713'
  | 'E714'
  | 'E72'
  | 'E721'
  | 'E722'
  | 'E73'
  | 'E731'
  | 'E74'
  | 'E741'
  | 'E742'
  | 'E743'
  | 'E9'
  | 'E90'
  | 'E902'
  | 'EM'
  | 'EM1'
  | 'EM10'
  | 'EM101'
  | 'EM102'
  | 'EM103'
  | 'ERA'
  | 'ERA0'
  | 'ERA00'
  | 'ERA001'
  | 'EXE'
  | 'EXE0'
  | 'EXE00'
  | 'EXE001'
  | 'EXE002'
  | 'EXE003'
  | 'EXE004'
  | 'EXE005'
  | 'F'
  | 'F4'
  | 'F40'
  | 'F401'
  | 'F402'
  | 'F403'
  | 'F404'
  | 'F405'
  | 'F406'
  | 'F407'
  | 'F5'
  | 'F50'
  | 'F501'
  | 'F502'
  | 'F503'
  | 'F504'
  | 'F505'
  | 'F506'
  | 'F507'
  | 'F508'
  | 'F509'
  | 'F52'
  | 'F521'
  | 'F522'
  | 'F523'
  | 'F524'
  | 'F525'
  | 'F54'
  | 'F541'
  | 'F6'
  | 'F60'
  | 'F601'
  | 'F602'
  | 'F62'
  | 'F621'
  | 'F622'
  | 'F63'
  | 'F631'
  | 'F632'
  | 'F633'
  | 'F634'
  | 'F7'
  | 'F70'
  | 'F701'
  | 'F702'
  | 'F704'
  | 'F706'
  | 'F707'
  | 'F72'
  | 'F722'
  | 'F8'
  | 'F81'
  | 'F811'
  | 'F82'
  | 'F821'
  | 'F822'
  | 'F823'
  | 'F84'
  | 'F841'
  | 'F842'
  | 'F9'
  | 'F90'
  | 'F901'
  | 'FA'
  | 'FA1'
  | 'FA10'
  | 'FA100'
  | 'FA102'
  | 'FAST'
  | 'FAST0'
  | 'FAST00'
  | 'FAST001'
  | 'FAST002'
  | 'FAST003'
  | 'FBT'
  | 'FBT0'
  | 'FBT00'
  | 'FBT001'
  | 'FBT002'
  | 'FBT003'
  | 'FIX'
  | 'FIX0'
  | 'FIX00'
  | 'FIX001'
  | 'FIX002'
  | 'FIX003'
  | 'FIX004'
  | 'FLY'
  | 'FLY0'
  | 'FLY00'
  | 'FLY002'
  | 'FURB'
  | 'FURB1'
  | 'FURB10'
  | 'FURB101'
  | 'FURB103'
  | 'FURB105'
  | 'FURB11'
  | 'FURB110'
  | 'FURB113'
  | 'FURB116'
  | 'FURB118'
  | 'FURB12'
  | 'FURB122'
  | 'FURB129'
  | 'FURB13'
  | 'FURB131'
  | 'FURB132'
  | 'FURB136'
  | 'FURB14'
  | 'FURB140'
  | 'FURB142'
  | 'FURB145'
  | 'FURB148'
  | 'FURB15'
  | 'FURB152'
  | 'FURB154'
  | 'FURB156'
  | 'FURB157'
  | 'FURB16'
  | 'FURB161'
  | 'FURB162'
  | 'FURB163'
  | 'FURB164'
  | 'FURB166'
  | 'FURB167'
  | 'FURB168'
  | 'FURB169'
  | 'FURB17'
  | 'FURB171'
  | 'FURB177'
  | 'FURB18'
  | 'FURB180'
  | 'FURB181'
  | 'FURB187'
  | 'FURB188'
  | 'FURB189'
  | 'FURB19'
  | 'FURB192'
  | 'G'
  | 'G0'
  | 'G00'
  | 'G001'
  | 'G002'
  | 'G003'
  | 'G004'
  | 'G01'
  | 'G010'
  | 'G1'
  | 'G10'
  | 'G101'
  | 'G2'
  | 'G20'
  | 'G201'
  | 'G202'
  | 'I'
  | 'I0'
  | 'I00'
  | 'I001'
  | 'I002'
  | 'ICN'
  | 'ICN0'
  | 'ICN00'
  | 'ICN001'
  | 'ICN002'
  | 'ICN003'
  | 'INP'
  | 'INP0'
  | 'INP00'
  | 'INP001'
  | 'INT'
  | 'INT0'
  | 'INT00'
  | 'INT001'
  | 'INT002'
  | 'INT003'
  | 'ISC'
  | 'ISC0'
  | 'ISC00'
  | 'ISC001'
  | 'ISC002'
  | 'ISC003'
  | 'ISC004'
  | 'LOG'
  | 'LOG0'
  | 'LOG00'
  | 'LOG001'
  | 'LOG002'
  | 'LOG004'
  | 'LOG007'
  | 'LOG009'
  | 'LOG01'
  | 'LOG014'
  | 'LOG015'
  | 'N'
  | 'N8'
  | 'N80'
  | 'N801'
  | 'N802'
  | 'N803'
  | 'N804'
  | 'N805'
  | 'N806'
  | 'N807'
  | 'N81'
  | 'N811'
  | 'N812'
  | 'N813'
  | 'N814'
  | 'N815'
  | 'N816'
  | 'N817'
  | 'N818'
  | 'N9'
  | 'N99'
  | 'N999'
  | 'NPY'
  | 'NPY0'
  | 'NPY00'
  | 'NPY001'
  | 'NPY002'
  | 'NPY003'
  | 'NPY2'
  | 'NPY20'
  | 'NPY201'
  | 'PD'
  | 'PD0'
  | 'PD00'
  | 'PD002'
  | 'PD003'
  | 'PD004'
  | 'PD007'
  | 'PD008'
  | 'PD009'
  | 'PD01'
  | 'PD010'
  | 'PD011'
  | 'PD012'
  | 'PD013'
  | 'PD015'
  | 'PD1'
  | 'PD10'
  | 'PD101'
  | 'PERF'
  | 'PERF1'
  | 'PERF10'
  | 'PERF101'
  | 'PERF102'
  | 'PERF2'
  | 'PERF20'
  | 'PERF203'
  | 'PERF4'
  | 'PERF40'
  | 'PERF401'
  | 'PERF402'
  | 'PERF403'
  | 'PGH'
  | 'PGH0'
  | 'PGH00'
  | 'PGH003'
  | 'PGH004'
  | 'PGH005'
  | 'PIE'
  | 'PIE7'
  | 'PIE79'
  | 'PIE790'
  | 'PIE794'
  | 'PIE796'
  | 'PIE8'
  | 'PIE80'
  | 'PIE800'
  | 'PIE804'
  | 'PIE807'
  | 'PIE808'
  | 'PIE81'
  | 'PIE810'
  | 'PL'
  | 'PLC'
  | 'PLC0'
  | 'PLC01'
  | 'PLC010'
  | 'PLC0105'
  | 'PLC013'
  | 'PLC0131'
  | 'PLC0132'
  | 'PLC02'
  | 'PLC020'
  | 'PLC0205'
  | 'PLC0206'
  | 'PLC0207'
  | 'PLC0208'
  | 'PLC04'
  | 'PLC041'
  | 'PLC0414'
  | 'PLC0415'
  | 'PLC1'
  | 'PLC18'
  | 'PLC180'
  | 'PLC1802'
  | 'PLC19'
  | 'PLC190'
  | 'PLC1901'
  | 'PLC2'
  | 'PLC24'
  | 'PLC240'
  | 'PLC2401'
  | 'PLC2403'
  | 'PLC27'
  | 'PLC270'
  | 'PLC2701'
  | 'PLC28'
  | 'PLC280'
  | 'PLC2801'
  | 'PLC3'
  | 'PLC30'
  | 'PLC300'
  | 'PLC3002'
  | 'PLE'
  | 'PLE0'
  | 'PLE01'
  | 'PLE010'
  | 'PLE0100'
  | 'PLE0101'
  | 'PLE011'
  | 'PLE0115'
  | 'PLE0116'
  | 'PLE0117'
  | 'PLE0118'
  | 'PLE02'
  | 'PLE023'
  | 'PLE0237'
  | 'PLE024'
  | 'PLE0241'
  | 'PLE03'
  | 'PLE030'
  | 'PLE0302'
  | 'PLE0303'
  | 'PLE0304'
  | 'PLE0305'
  | 'PLE0307'
  | 'PLE0308'
  | 'PLE0309'
  | 'PLE06'
  | 'PLE060'
  | 'PLE0604'
  | 'PLE0605'
  | 'PLE064'
  | 'PLE0643'
  | 'PLE07'
  | 'PLE070'
  | 'PLE0704'
  | 'PLE1'
  | 'PLE11'
  | 'PLE113'
  | 'PLE1132'
  | 'PLE114'
  | 'PLE1141'
  | 'PLE1142'
  | 'PLE12'
  | 'PLE120'
  | 'PLE1205'
  | 'PLE1206'
  | 'PLE13'
  | 'PLE130'
  | 'PLE1300'
  | 'PLE1307'
  | 'PLE131'
  | 'PLE1310'
  | 'PLE15'
  | 'PLE150'
  | 'PLE1507'
  | 'PLE151'
  | 'PLE1519'
  | 'PLE152'
  | 'PLE1520'
  | 'PLE17'
  | 'PLE170'
  | 'PLE1700'
  | 'PLE2'
  | 'PLE25'
  | 'PLE250'
  | 'PLE2502'
  | 'PLE251'
  | 'PLE2510'
  | 'PLE2512'
  | 'PLE2513'
  | 'PLE2514'
  | 'PLE2515'
  | 'PLE4'
  | 'PLE47'
  | 'PLE470'
  | 'PLE4703'
  | 'PLR'
  | 'PLR0'
  | 'PLR01'
  | 'PLR012'
  | 'PLR0124'
  | 'PLR013'
  | 'PLR0133'
  | 'PLR02'
  | 'PLR020'
  | 'PLR0202'
  | 'PLR0203'
  | 'PLR0206'
  | 'PLR04'
  | 'PLR040'
  | 'PLR0402'
  | 'PLR09'
  | 'PLR090'
  | 'PLR0904'
  | 'PLR091'
  | 'PLR0911'
  | 'PLR0912'
  | 'PLR0913'
  | 'PLR0914'
  | 'PLR0915'
  | 'PLR0916'
  | 'PLR0917'
  | 'PLR1'
  | 'PLR17'
  | 'PLR170'
  | 'PLR1702'
  | 'PLR1704'
  | 'PLR1708'
  | 'PLR171'
  | 'PLR1711'
  | 'PLR1712'
  | 'PLR1714'
  | 'PLR1716'
  | 'PLR172'
  | 'PLR1722'
  | 'PLR173'
  | 'PLR1730'
  | 'PLR1733'
  | 'PLR1736'
  | 'PLR2'
  | 'PLR20'
  | 'PLR200'
  | 'PLR2004'
  | 'PLR204'
  | 'PLR2044'
  | 'PLR5'
  | 'PLR55'
  | 'PLR550'
  | 'PLR5501'
  | 'PLR6'
  | 'PLR61'
  | 'PLR610'
  | 'PLR6104'
  | 'PLR62'
  | 'PLR620'
  | 'PLR6201'
  | 'PLR63'
  | 'PLR630'
  | 'PLR6301'
  | 'PLW'
  | 'PLW0'
  | 'PLW01'
  | 'PLW010'
  | 'PLW0108'
  | 'PLW012'
  | 'PLW0120'
  | 'PLW0127'
  | 'PLW0128'
  | 'PLW0129'
  | 'PLW013'
  | 'PLW0131'
  | 'PLW0133'
  | 'PLW017'
  | 'PLW0177'
  | 'PLW02'
  | 'PLW021'
  | 'PLW0211'
  | 'PLW024'
  | 'PLW0244'
  | 'PLW0245'
  | 'PLW04'
  | 'PLW040'
  | 'PLW0406'
  | 'PLW06'
  | 'PLW060'
  | 'PLW0602'
  | 'PLW0603'
  | 'PLW0604'
  | 'PLW064'
  | 'PLW0642'
  | 'PLW07'
  | 'PLW071'
  | 'PLW0711'
  | 'PLW1'
  | 'PLW15'
  | 'PLW150'
  | 'PLW1501'
  | 'PLW1507'
  | 'PLW1508'
  | 'PLW1509'
  | 'PLW151'
  | 'PLW1510'
  | 'PLW1514'
  | 'PLW16'
  | 'PLW164'
  | 'PLW1641'
  | 'PLW2'
  | 'PLW21'
  | 'PLW210'
  | 'PLW2101'
  | 'PLW29'
  | 'PLW290'
  | 'PLW2901'
  | 'PLW3'
  | 'PLW32'
  | 'PLW320'
  | 'PLW3201'
  | 'PLW33'
  | 'PLW330'
  | 'PLW3301'
  | 'PT'
  | 'PT0'
  | 'PT00'
  | 'PT001'
  | 'PT002'
  | 'PT003'
  | 'PT006'
  | 'PT007'
  | 'PT008'
  | 'PT009'
  | 'PT01'
  | 'PT010'
  | 'PT011'
  | 'PT012'
  | 'PT013'
  | 'PT014'
  | 'PT015'
  | 'PT016'
  | 'PT017'
  | 'PT018'
  | 'PT019'
  | 'PT02'
  | 'PT020'
  | 'PT021'
  | 'PT022'
  | 'PT023'
  | 'PT024'
  | 'PT025'
  | 'PT026'
  | 'PT027'
  | 'PT028'
  | 'PT029'
  | 'PT03'
  | 'PT030'
  | 'PT031'
  | 'PTH'
  | 'PTH1'
  | 'PTH10'
  | 'PTH100'
  | 'PTH101'
  | 'PTH102'
  | 'PTH103'
  | 'PTH104'
  | 'PTH105'
  | 'PTH106'
  | 'PTH107'
  | 'PTH108'
  | 'PTH109'
  | 'PTH11'
  | 'PTH110'
  | 'PTH111'
  | 'PTH112'
  | 'PTH113'
  | 'PTH114'
  | 'PTH115'
  | 'PTH116'
  | 'PTH117'
  | 'PTH118'
  | 'PTH119'
  | 'PTH12'
  | 'PTH120'
  | 'PTH121'
  | 'PTH122'
  | 'PTH123'
  | 'PTH124'
  | 'PTH2'
  | 'PTH20'
  | 'PTH201'
  | 'PTH202'
  | 'PTH203'
  | 'PTH204'
  | 'PTH205'
  | 'PTH206'
  | 'PTH207'
  | 'PTH208'
  | 'PTH21'
  | 'PTH210'
  | 'PTH211'
  | 'PYI'
  | 'PYI0'
  | 'PYI00'
  | 'PYI001'
  | 'PYI002'
  | 'PYI003'
  | 'PYI004'
  | 'PYI005'
  | 'PYI006'
  | 'PYI007'
  | 'PYI008'
  | 'PYI009'
  | 'PYI01'
  | 'PYI010'
  | 'PYI011'
  | 'PYI012'
  | 'PYI013'
  | 'PYI014'
  | 'PYI015'
  | 'PYI016'
  | 'PYI017'
  | 'PYI018'
  | 'PYI019'
  | 'PYI02'
  | 'PYI020'
  | 'PYI021'
  | 'PYI024'
  | 'PYI025'
  | 'PYI026'
  | 'PYI029'
  | 'PYI03'
  | 'PYI030'
  | 'PYI032'
  | 'PYI033'
  | 'PYI034'
  | 'PYI035'
  | 'PYI036'
  | 'PYI04'
  | 'PYI041'
  | 'PYI042'
  | 'PYI043'
  | 'PYI044'
  | 'PYI045'
  | 'PYI046'
  | 'PYI047'
  | 'PYI048'
  | 'PYI049'
  | 'PYI05'
  | 'PYI050'
  | 'PYI051'
  | 'PYI052'
  | 'PYI053'
  | 'PYI054'
  | 'PYI055'
  | 'PYI056'
  | 'PYI057'
  | 'PYI058'
  | 'PYI059'
  | 'PYI06'
  | 'PYI061'
  | 'PYI062'
  | 'PYI063'
  | 'PYI064'
  | 'PYI066'
  | 'Q'
  | 'Q0'
  | 'Q00'
  | 'Q000'
  | 'Q001'
  | 'Q002'
  | 'Q003'
  | 'Q004'
  | 'RET'
  | 'RET5'
  | 'RET50'
  | 'RET501'
  | 'RET502'
  | 'RET503'
  | 'RET504'
  | 'RET505'
  | 'RET506'
  | 'RET507'
  | 'RET508'
  | 'RSE'
  | 'RSE1'
  | 'RSE10'
  | 'RSE102'
  | 'RUF'
  | 'RUF0'
  | 'RUF00'
  | 'RUF001'
  | 'RUF002'
  | 'RUF003'
  | 'RUF005'
  | 'RUF006'
  | 'RUF007'
  | 'RUF008'
  | 'RUF009'
  | 'RUF01'
  | 'RUF010'
  | 'RUF012'
  | 'RUF013'
  | 'RUF015'
  | 'RUF016'
  | 'RUF017'
  | 'RUF018'
  | 'RUF019'
  | 'RUF02'
  | 'RUF020'
  | 'RUF021'
  | 'RUF022'
  | 'RUF023'
  | 'RUF024'
  | 'RUF026'
  | 'RUF027'
  | 'RUF028'
  | 'RUF029'
  | 'RUF03'
  | 'RUF030'
  | 'RUF031'
  | 'RUF032'
  | 'RUF033'
  | 'RUF034'
  | 'RUF036'
  | 'RUF037'
  | 'RUF038'
  | 'RUF039'
  | 'RUF04'
  | 'RUF040'
  | 'RUF041'
  | 'RUF043'
  | 'RUF045'
  | 'RUF046'
  | 'RUF047'
  | 'RUF048'
  | 'RUF049'
  | 'RUF05'
  | 'RUF051'
  | 'RUF052'
  | 'RUF053'
  | 'RUF054'
  | 'RUF055'
  | 'RUF056'
  | 'RUF057'
  | 'RUF058'
  | 'RUF059'
  | 'RUF06'
  | 'RUF060'
  | 'RUF061'
  | 'RUF063'
  | 'RUF064'
  | 'RUF065'
  | 'RUF066'
  | 'RUF067'
  | 'RUF068'
  | 'RUF069'
  | 'RUF07'
  | 'RUF070'
  | 'RUF1'
  | 'RUF10'
  | 'RUF100'
  | 'RUF101'
  | 'RUF102'
  | 'RUF103'
  | 'RUF104'
  | 'RUF2'
  | 'RUF20'
  | 'RUF200'
  | 'S'
  | 'S1'
  | 'S10'
  | 'S101'
  | 'S102'
  | 'S103'
  | 'S104'
  | 'S105'
  | 'S106'
  | 'S107'
  | 'S108'
  | 'S11'
  | 'S110'
  | 'S112'
  | 'S113'
  | 'S2'
  | 'S20'
  | 'S201'
  | 'S202'
  | 'S3'
  | 'S30'
  | 'S301'
  | 'S302'
  | 'S303'
  | 'S304'
  | 'S305'
  | 'S306'
  | 'S307'
  | 'S308'
  | 'S31'
  | 'S310'
  | 'S311'
  | 'S312'
  | 'S313'
  | 'S314'
  | 'S315'
  | 'S316'
  | 'S317'
  | 'S318'
  | 'S319'
  | 'S32'
  | 'S321'
  | 'S323'
  | 'S324'
  | 'S4'
  | 'S40'
  | 'S401'
  | 'S402'
  | 'S403'
  | 'S404'
  | 'S405'
  | 'S406'
  | 'S407'
  | 'S408'
  | 'S409'
  | 'S41'
  | 'S411'
  | 'S412'
  | 'S413'
  | 'S415'
  | 'S5'
  | 'S50'
  | 'S501'
  | 'S502'
  | 'S503'
  | 'S504'
  | 'S505'
  | 'S506'
  | 'S507'
  | 'S508'
  | 'S509'
  | 'S6'
  | 'S60'
  | 'S601'
  | 'S602'
  | 'S603'
  | 'S604'
  | 'S605'
  | 'S606'
  | 'S607'
  | 'S608'
  | 'S609'
  | 'S61'
  | 'S610'
  | 'S611'
  | 'S612'
  | 'S7'
  | 'S70'
  | 'S701'
  | 'S702'
  | 'S704'
  | 'SIM'
  | 'SIM1'
  | 'SIM10'
  | 'SIM101'
  | 'SIM102'
  | 'SIM103'
  | 'SIM105'
  | 'SIM107'
  | 'SIM108'
  | 'SIM109'
  | 'SIM11'
  | 'SIM110'
  | 'SIM112'
  | 'SIM113'
  | 'SIM114'
  | 'SIM115'
  | 'SIM116'
  | 'SIM117'
  | 'SIM118'
  | 'SIM2'
  | 'SIM20'
  | 'SIM201'
  | 'SIM202'
  | 'SIM208'
  | 'SIM21'
  | 'SIM210'
  | 'SIM211'
  | 'SIM212'
  | 'SIM22'
  | 'SIM220'
  | 'SIM221'
  | 'SIM222'
  | 'SIM223'
  | 'SIM3'
  | 'SIM30'
  | 'SIM300'
  | 'SIM4'
  | 'SIM40'
  | 'SIM401'
  | 'SIM9'
  | 'SIM90'
  | 'SIM905'
  | 'SIM91'
  | 'SIM910'
  | 'SIM911'
  | 'SLF'
  | 'SLF0'
  | 'SLF00'
  | 'SLF001'
  | 'SLOT'
  | 'SLOT0'
  | 'SLOT00'
  | 'SLOT000'
  | 'SLOT001'
  | 'SLOT002'
  | 'T'
  | 'T1'
  | 'T10'
  | 'T100'
  | 'T2'
  | 'T20'
  | 'T201'
  | 'T203'
  | 'TC'
  | 'TC0'
  | 'TC00'
  | 'TC001'
  | 'TC002'
  | 'TC003'
  | 'TC004'
  | 'TC005'
  | 'TC006'
  | 'TC007'
  | 'TC008'
  | 'TC01'
  | 'TC010'
  | 'TD'
  | 'TD0'
  | 'TD00'
  | 'TD001'
  | 'TD002'
  | 'TD003'
  | 'TD004'
  | 'TD005'
  | 'TD006'
  | 'TD007'
  | 'TID'
  | 'TID2'
  | 'TID25'
  | 'TID251'
  | 'TID252'
  | 'TID253'
  | 'TRY'
  | 'TRY0'
  | 'TRY00'
  | 'TRY002'
  | 'TRY003'
  | 'TRY004'
  | 'TRY2'
  | 'TRY20'
  | 'TRY201'
  | 'TRY203'
  | 'TRY3'
  | 'TRY30'
  | 'TRY300'
  | 'TRY301'
  | 'TRY4'
  | 'TRY40'
  | 'TRY400'
  | 'TRY401'
  | 'UP'
  | 'UP0'
  | 'UP00'
  | 'UP001'
  | 'UP003'
  | 'UP004'
  | 'UP005'
  | 'UP006'
  | 'UP007'
  | 'UP008'
  | 'UP009'
  | 'UP01'
  | 'UP010'
  | 'UP011'
  | 'UP012'
  | 'UP013'
  | 'UP014'
  | 'UP015'
  | 'UP017'
  | 'UP018'
  | 'UP019'
  | 'UP02'
  | 'UP020'
  | 'UP021'
  | 'UP022'
  | 'UP023'
  | 'UP024'
  | 'UP025'
  | 'UP026'
  | 'UP028'
  | 'UP029'
  | 'UP03'
  | 'UP030'
  | 'UP031'
  | 'UP032'
  | 'UP033'
  | 'UP034'
  | 'UP035'
  | 'UP036'
  | 'UP037'
  | 'UP039'
  | 'UP04'
  | 'UP040'
  | 'UP041'
  | 'UP042'
  | 'UP043'
  | 'UP044'
  | 'UP045'
  | 'UP046'
  | 'UP047'
  | 'UP049'
  | 'UP05'
  | 'UP050'
  | 'W'
  | 'W1'
  | 'W19'
  | 'W191'
  | 'W2'
  | 'W29'
  | 'W291'
  | 'W292'
  | 'W293'
  | 'W3'
  | 'W39'
  | 'W391'
  | 'W5'
  | 'W50'
  | 'W505'
  | 'W6'
  | 'W60'
  | 'W605'
  | 'YTT'
  | 'YTT1'
  | 'YTT10'
  | 'YTT101'
  | 'YTT102'
  | 'YTT103'
  | 'YTT2'
  | 'YTT20'
  | 'YTT201'
  | 'YTT202'
  | 'YTT203'
  | 'YTT204'
  | 'YTT3'
  | 'YTT30'
  | 'YTT301'
  | 'YTT302'
  | 'YTT303';
export type Language = ('python' | 'pyi' | 'ipynb' | 'markdown') | undefined;
export type Alias = string | undefined;
export type BannedAliases = string[] | undefined;
export type ParametrizeNameType = 'csv' | 'tuple' | 'list';
export type ParametrizeValuesRowType = 'tuple' | 'list';
export type ParametrizeValuesType = 'tuple' | 'list';
export type Quote = 'double' | 'single';
export type Strictness = 'parents' | 'all';
export type DocstringCodeLineWidth = LineWidth | 'dynamic';
/**
 * The maximum visual width to which the formatter should try to limit a line.
 */
export type LineWidth = number;
export type IndentStyle = 'tab' | 'space';
export type LineEnding = 'auto' | 'lf' | 'cr-lf' | 'native';
export type QuoteStyle = 'single' | 'double' | 'preserve';
/**
 * The size of a tab.
 */
export type IndentWidth = number;
export type ImportSection = ImportType | string;
export type ImportType = 'future' | 'standard-library' | 'third-party' | 'first-party' | 'local-folder';
export type RelativeImportsOrder = 'closest-to-furthest' | 'furthest-to-closest';
export type NameImports = string;
/**
 * The length of a line of text that is considered too long.
 *
 * The allowed range of values is 1..=320
 */
export type LineLength = number;
export type Convention = 'google' | 'numpy' | 'pep257';
export type ConstantType = 'bytes' | 'complex' | 'float' | 'int' | 'str';
export type OutputFormat =
  | 'concise'
  | 'full'
  | 'json'
  | 'json-lines'
  | 'junit'
  | 'grouped'
  | 'github'
  | 'gitlab'
  | 'pylint'
  | 'rdjson'
  | 'azure'
  | 'sarif';
export type PythonVersion =
  | ('py37' | 'py38' | 'py39' | 'py310' | 'py311' | 'py312' | 'py313' | 'py314' | 'py315')
  | undefined;
export type RequiredVersion = string;

export interface Options {
  /**
   * @deprecated
   * A list of allowed "confusable" Unicode characters to ignore when
   * enforcing `RUF001`, `RUF002`, and `RUF003`.
   */
  'allowed-confusables'?: string[] | null;
  /**
   * Options to configure import map generation.
   */
  analyze?: AnalyzeOptions | null;
  /**
   * A list of builtins to treat as defined references, in addition to the
   * system builtins.
   */
  builtins?: string[] | null;
  /**
   * A path to the cache directory.
   *
   * By default, Ruff stores cache results in a `.ruff_cache` directory in
   * the current project root.
   *
   * However, Ruff will also respect the `RUFF_CACHE_DIR` environment
   * variable, which takes precedence over that default.
   *
   * This setting will override even the `RUFF_CACHE_DIR` environment
   * variable, if set.
   */
  'cache-dir'?: string | null;
  /**
   * @deprecated
   * A regular expression used to identify "dummy" variables, or those which
   * should be ignored when enforcing (e.g.) unused-variable rules. The
   * default expression matches `_`, `__`, and `_var`, but not `_var_`.
   */
  'dummy-variable-rgx'?: string | null;
  /**
   * A list of file patterns to exclude from formatting and linting.
   *
   * Exclusions are based on globs, and can be either:
   *
   * - Single-path patterns, like `.mypy_cache` (to exclude any directory
   *   named `.mypy_cache` in the tree), `foo.py` (to exclude any file named
   *   `foo.py`), or `foo_*.py` (to exclude any file matching `foo_*.py` ).
   * - Relative patterns, like `directory/foo.py` (to exclude that specific
   *   file) or `directory/*.py` (to exclude any Python files in
   *   `directory`). Note that these paths are relative to the project root
   *   (e.g., the directory containing your `pyproject.toml`).
   *
   * For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   *
   * Note that you'll typically want to use
   * [`extend-exclude`](#extend-exclude) to modify the excluded paths.
   */
  exclude?: string[] | null;
  /**
   * @deprecated
   * Whether to require exact codes to select preview rules. When enabled,
   * preview rules will not be selected by prefixes — the full code of each
   * preview rule will be required to enable the rule.
   */
  'explicit-preview-rules'?: boolean | null;
  /**
   * A path to a local `pyproject.toml` or `ruff.toml` file to merge into this
   * configuration. User home directory and environment variables will be
   * expanded.
   *
   * To resolve the current configuration file, Ruff will first load
   * this base configuration file, then merge in properties defined
   * in the current configuration file. Most settings follow simple override
   * behavior where the child value replaces the parent value. However,
   * rule selection (`lint.select` and `lint.ignore`) has special merging
   * behavior: if the child configuration specifies `lint.select`, it
   * establishes a new baseline rule set and the parent's `lint.ignore`
   * rules are discarded; if the child configuration omits `lint.select`,
   * the parent's rule selection is inherited and both parent and child
   * `lint.ignore` rules are accumulated together.
   */
  extend?: string | null;
  /**
   * A list of file patterns to omit from formatting and linting, in addition to those
   * specified by [`exclude`](#exclude).
   *
   * Exclusions are based on globs, and can be either:
   *
   * - Single-path patterns, like `.mypy_cache` (to exclude any directory
   *   named `.mypy_cache` in the tree), `foo.py` (to exclude any file named
   *   `foo.py`), or `foo_*.py` (to exclude any file matching `foo_*.py` ).
   * - Relative patterns, like `directory/foo.py` (to exclude that specific
   *   file) or `directory/*.py` (to exclude any Python files in
   *   `directory`). Note that these paths are relative to the project root
   *   (e.g., the directory containing your `pyproject.toml`).
   *
   * For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'extend-exclude'?: string[] | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes to consider fixable, in addition to those
   * specified by [`fixable`](#lint_fixable).
   */
  'extend-fixable'?: RuleSelector[] | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes to ignore, in addition to those
   * specified by `ignore`.
   */
  'extend-ignore'?: RuleSelector[] | null;
  /**
   * A list of file patterns to include when linting, in addition to those
   * specified by [`include`](#include).
   *
   * Inclusion are based on globs, and should be single-path patterns, like
   * `*.pyw`, to include any file with the `.pyw` extension.
   *
   * For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'extend-include'?: string[] | null;
  /**
   * @deprecated
   * A list of mappings from file pattern to rule codes or prefixes to
   * exclude, in addition to any rules excluded by [`per-file-ignores`](#lint_per-file-ignores).
   */
  'extend-per-file-ignores'?: {
    [k: string]: RuleSelector[] | undefined;
  } | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes for which unsafe fixes should be considered
   * safe.
   */
  'extend-safe-fixes'?: RuleSelector[] | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes to enable, in addition to those
   * specified by [`select`](#lint_select).
   */
  'extend-select'?: RuleSelector[] | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes to consider non-auto-fixable, in addition to those
   * specified by [`unfixable`](#lint_unfixable).
   */
  'extend-unfixable'?: RuleSelector[] | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes for which safe fixes should be considered
   * unsafe.
   */
  'extend-unsafe-fixes'?: RuleSelector[] | null;
  /**
   * A mapping of custom file extensions to known file types (overridden
   * by the `--extension` command-line flag).
   *
   * Supported file types include `python`, `pyi`, `ipynb`, and `markdown`.
   *
   * Any file extensions listed here will be automatically added to the
   * default `include` list as a `*.{ext}` glob, so that they are linted
   * and formatted without needing any additional configuration settings.
   */
  extension?: {
    [k: string]: Language | undefined;
  } | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes that are unsupported by Ruff, but should be
   * preserved when (e.g.) validating `# noqa` directives. Useful for
   * retaining `# noqa` directives that cover plugins not yet implemented
   * by Ruff.
   */
  external?: string[] | null;
  /**
   * Enable fix behavior by-default when running `ruff` (overridden
   * by the `--fix` and `--no-fix` command-line flags).
   * Only includes automatic fixes unless `--unsafe-fixes` is provided.
   */
  fix?: boolean | null;
  /**
   * Like [`fix`](#fix), but disables reporting on leftover violation. Implies [`fix`](#fix).
   */
  'fix-only'?: boolean | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes to consider fixable. By default,
   * all rules are considered fixable.
   */
  fixable?: RuleSelector[] | null;
  /**
   * @deprecated
   * Options for the `flake8-annotations` plugin.
   */
  'flake8-annotations'?: Flake8AnnotationsOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-bandit` plugin.
   */
  'flake8-bandit'?: Flake8BanditOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-boolean-trap` plugin.
   */
  'flake8-boolean-trap'?: Flake8BooleanTrapOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-bugbear` plugin.
   */
  'flake8-bugbear'?: Flake8BugbearOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-builtins` plugin.
   */
  'flake8-builtins'?: Flake8BuiltinsOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-comprehensions` plugin.
   */
  'flake8-comprehensions'?: Flake8ComprehensionsOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-copyright` plugin.
   */
  'flake8-copyright'?: Flake8CopyrightOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-errmsg` plugin.
   */
  'flake8-errmsg'?: Flake8ErrMsgOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-gettext` plugin.
   */
  'flake8-gettext'?: Flake8GetTextOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-implicit-str-concat` plugin.
   */
  'flake8-implicit-str-concat'?: Flake8ImplicitStrConcatOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-import-conventions` plugin.
   */
  'flake8-import-conventions'?: Flake8ImportConventionsOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-pytest-style` plugin.
   */
  'flake8-pytest-style'?: Flake8PytestStyleOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-quotes` plugin.
   */
  'flake8-quotes'?: Flake8QuotesOptions | null;
  /**
   * @deprecated
   * Options for the `flake8_self` plugin.
   */
  'flake8-self'?: Flake8SelfOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-tidy-imports` plugin.
   */
  'flake8-tidy-imports'?: Flake8TidyImportsOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-type-checking` plugin.
   */
  'flake8-type-checking'?: Flake8TypeCheckingOptions | null;
  /**
   * @deprecated
   * Options for the `flake8-unused-arguments` plugin.
   */
  'flake8-unused-arguments'?: Flake8UnusedArgumentsOptions | null;
  /**
   * Whether to enforce [`exclude`](#exclude) and [`extend-exclude`](#extend-exclude) patterns,
   * even for paths that are passed to Ruff explicitly. Typically, Ruff will lint
   * any paths passed in directly, even if they would typically be
   * excluded. Setting `force-exclude = true` will cause Ruff to
   * respect these exclusions unequivocally.
   *
   * This is useful for [`pre-commit`](https://pre-commit.com/), which explicitly passes all
   * changed files to the [`ruff-pre-commit`](https://github.com/astral-sh/ruff-pre-commit)
   * plugin, regardless of whether they're marked as excluded by Ruff's own
   * settings.
   */
  'force-exclude'?: boolean | null;
  /**
   * Options to configure code formatting.
   */
  format?: FormatOptions | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes to ignore. Prefixes can specify exact
   * rules (like `F841`), entire categories (like `F`), or anything in
   * between.
   *
   * When breaking ties between enabled and disabled rules (via `select` and
   * `ignore`, respectively), more specific prefixes override less
   * specific prefixes. `ignore` takes precedence over `select` if the same
   * prefix appears in both.
   */
  ignore?: RuleSelector[] | null;
  /**
   * @deprecated
   * Avoid automatically removing unused imports in `__init__.py` files. Such
   * imports will still be flagged, but with a dedicated message suggesting
   * that the import is either added to the module's `__all__` symbol, or
   * re-exported with a redundant alias (e.g., `import os as os`).
   *
   * This option is enabled by default, but you can opt-in to removal of imports
   * via an unsafe fix.
   */
  'ignore-init-module-imports'?: boolean | null;
  /**
   * A list of file patterns to include when linting.
   *
   * Inclusion are based on globs, and should be single-path patterns, like
   * `*.pyw`, to include any file with the `.pyw` extension. `pyproject.toml` is
   * included here not for configuration but because we lint whether e.g. the
   * `[project]` matches the schema.
   *
   * Notebook files (`.ipynb` extension) are included by default on Ruff 0.6.0+.
   *
   * For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  include?: string[] | null;
  /**
   * The number of spaces per indentation level (tab).
   *
   * Used by the formatter and when enforcing long-line violations (like `E501`) to determine the visual
   * width of a tab.
   *
   * This option changes the number of spaces the formatter inserts when
   * using soft-tabs (`indent-style = space`).
   *
   * PEP 8 recommends using 4 spaces per [indentation level](https://peps.python.org/pep-0008/#indentation).
   */
  'indent-width'?: IndentWidth | null;
  /**
   * @deprecated
   * Options for the `isort` plugin.
   */
  isort?: IsortOptions | null;
  /**
   * The line length to use when enforcing long-lines violations (like `E501`)
   * and at which `isort` and the formatter prefers to wrap lines.
   *
   * The length is determined by the number of characters per line, except for lines containing East Asian characters or emojis.
   * For these lines, the [unicode width](https://unicode.org/reports/tr11/) of each character is added up to determine the length.
   *
   * The value must be greater than `0` and less than or equal to `320`.
   *
   * Note: While the formatter will attempt to format lines such that they remain
   * within the `line-length`, it isn't a hard upper bound, and formatted lines may
   * exceed the `line-length`.
   *
   * See [`pycodestyle.max-line-length`](#lint_pycodestyle_max-line-length) to configure different lengths for `E501` and the formatter.
   */
  'line-length'?: LineLength | null;
  lint?: LintOptions | null;
  /**
   * @deprecated
   * A list of objects that should be treated equivalently to a
   * `logging.Logger` object.
   *
   * This is useful for ensuring proper diagnostics (e.g., to identify
   * `logging` deprecations and other best-practices) for projects that
   * re-export a `logging.Logger` object from a common module.
   *
   * For example, if you have a module `logging_setup.py` with the following
   * contents:
   * ```python
   * import logging
   *
   * logger = logging.getLogger(__name__)
   * ```
   *
   * Adding `"logging_setup.logger"` to `logger-objects` will ensure that
   * `logging_setup.logger` is treated as a `logging.Logger` object when
   * imported from other modules (e.g., `from logging_setup import logger`).
   */
  'logger-objects'?: string[] | null;
  /**
   * @deprecated
   * Options for the `mccabe` plugin.
   */
  mccabe?: McCabeOptions | null;
  /**
   * Mark the specified directories as namespace packages. For the purpose of
   * module resolution, Ruff will treat those directories and all their subdirectories
   * as if they contained an `__init__.py` file.
   */
  'namespace-packages'?: string[] | null;
  /**
   * The style in which violation messages should be formatted: `"full"` (default)
   * (shows source), `"concise"`, `"grouped"` (group messages by file), `"json"`
   * (machine-readable), `"junit"` (machine-readable XML), `"github"` (GitHub
   * Actions annotations), `"gitlab"` (GitLab CI code quality report),
   * `"pylint"` (Pylint text format) or `"azure"` (Azure Pipeline logging commands).
   */
  'output-format'?: OutputFormat | null;
  /**
   * @deprecated
   * Options for the `pep8-naming` plugin.
   */
  'pep8-naming'?: Pep8NamingOptions | null;
  /**
   * @deprecated
   * A list of mappings from file pattern to rule codes or prefixes to
   * exclude, when considering any matching files. An initial '!' negates
   * the file pattern.
   */
  'per-file-ignores'?: {
    [k: string]: RuleSelector[] | undefined;
  } | null;
  /**
   * A list of mappings from glob-style file pattern to Python version to use when checking the
   * corresponding file(s).
   *
   * This may be useful for overriding the global Python version settings in `target-version` or
   * `requires-python` for a subset of files. For example, if you have a project with a minimum
   * supported Python version of 3.9 but a subdirectory of developer scripts that want to use a
   * newer feature like the `match` statement from Python 3.10, you can use
   * `per-file-target-version` to specify `"developer_scripts/*.py" = "py310"`.
   *
   * This setting is used by the linter to enforce any enabled version-specific lint rules, as
   * well as by the formatter for any version-specific formatting options, such as parenthesizing
   * context managers on Python 3.10+.
   */
  'per-file-target-version'?: {
    [k: string]: PythonVersion | undefined;
  } | null;
  /**
   * Whether to enable preview mode. When preview mode is enabled, Ruff will
   * use unstable rules, fixes, and formatting.
   */
  preview?: boolean | null;
  /**
   * @deprecated
   * Options for the `pycodestyle` plugin.
   */
  pycodestyle?: PycodestyleOptions | null;
  /**
   * @deprecated
   * Options for the `pydocstyle` plugin.
   */
  pydocstyle?: PydocstyleOptions | null;
  /**
   * @deprecated
   * Options for the `pyflakes` plugin.
   */
  pyflakes?: PyflakesOptions | null;
  /**
   * @deprecated
   * Options for the `pylint` plugin.
   */
  pylint?: PylintOptions | null;
  /**
   * @deprecated
   * Options for the `pyupgrade` plugin.
   */
  pyupgrade?: PyUpgradeOptions | null;
  /**
   * Enforce a requirement on the version of Ruff, to enforce at runtime.
   * If the version of Ruff does not meet the requirement, Ruff will exit
   * with an error.
   *
   * Useful for unifying results across many environments, e.g., with a
   * `pyproject.toml` file.
   *
   * Accepts a [PEP 440](https://peps.python.org/pep-0440/) specifier, like `==0.3.1` or `>=0.3.1`.
   */
  'required-version'?: RequiredVersion | null;
  /**
   * Whether to automatically exclude files that are ignored by `.ignore`,
   * `.gitignore`, `.git/info/exclude`, and global `gitignore` files.
   * Enabled by default.
   */
  'respect-gitignore'?: boolean | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes to enable. Prefixes can specify exact
   * rules (like `F841`), entire categories (like `F`), or anything in
   * between.
   *
   * When breaking ties between enabled and disabled rules (via `select` and
   * `ignore`, respectively), more specific prefixes override less
   * specific prefixes. `ignore` takes precedence over `select` if the
   * same prefix appears in both.
   */
  select?: RuleSelector[] | null;
  /**
   * Whether to show an enumeration of all fixed lint violations
   * (overridden by the `--show-fixes` command-line flag).
   */
  'show-fixes'?: boolean | null;
  /**
   * The directories to consider when resolving first- vs. third-party
   * imports.
   *
   * When omitted, the `src` directory will typically default to including both:
   *
   * 1. The directory containing the nearest `pyproject.toml`, `ruff.toml`, or `.ruff.toml` file (the "project root").
   * 2. The `"src"` subdirectory of the project root.
   *
   * These defaults ensure that Ruff supports both flat layouts and `src` layouts out-of-the-box.
   * (If a configuration file is explicitly provided (e.g., via the `--config` command-line
   * flag), the current working directory will be considered the project root.)
   *
   * As an example, consider an alternative project structure, like:
   *
   * ```text
   * my_project
   * ├── pyproject.toml
   * └── lib
   *     └── my_package
   *         ├── __init__.py
   *         ├── foo.py
   *         └── bar.py
   * ```
   *
   * In this case, the `./lib` directory should be included in the `src` option
   * (e.g., `src = ["lib"]`), such that when resolving imports, `my_package.foo`
   * is considered first-party.
   *
   * This field supports globs. For example, if you have a series of Python
   * packages in a `python_modules` directory, `src = ["python_modules/*"]`
   * would expand to incorporate all packages in that directory. User home
   * directory and environment variables will also be expanded.
   */
  src?: string[] | null;
  /**
   * The minimum Python version to target, e.g., when considering automatic
   * code upgrades, like rewriting type annotations. Ruff will not propose
   * changes using features that are not available in the given version.
   *
   * For example, to represent supporting Python >=3.11 or ==3.11
   * specify `target-version = "py311"`.
   *
   * If you're already using a `pyproject.toml` file, we recommend
   * `project.requires-python` instead, as it's based on Python packaging
   * standards, and will be respected by other tools. For example, Ruff
   * treats the following as identical to `target-version = "py38"`:
   *
   * ```toml
   * [project]
   * requires-python = ">=3.8"
   * ```
   *
   * If both are specified, `target-version` takes precedence over
   * `requires-python`. See [_Inferring the Python version_](https://docs.astral.sh/ruff/configuration/#inferring-the-python-version)
   * for a complete description of how the `target-version` is determined
   * when left unspecified.
   *
   * Note that a stub file can [sometimes make use of a typing feature](https://typing.python.org/en/latest/spec/distributing.html#syntax)
   * before it is available at runtime, as long as the stub does not make
   * use of new *syntax*. For example, a type checker will understand
   * `int | str` in a stub as being a `Union` type annotation, even if the
   * type checker is run using Python 3.9, despite the fact that the `|`
   * operator can only be used to create union types at runtime on Python
   * 3.10+. As such, Ruff will often recommend newer features in a stub
   * file than it would for an equivalent runtime file with the same target
   * version.
   */
  'target-version'?: PythonVersion | undefined | null;
  /**
   * @deprecated
   * A list of task tags to recognize (e.g., "TODO", "FIXME", "XXX").
   *
   * Comments starting with these tags will be ignored by commented-out code
   * detection (`ERA`), and skipped by line-length rules (`E501`) if
   * [`ignore-overlong-task-comments`](#lint_pycodestyle_ignore-overlong-task-comments) is set to `true`.
   */
  'task-tags'?: string[] | null;
  /**
   * @deprecated
   * A list of modules whose exports should be treated equivalently to
   * members of the `typing` module.
   *
   * This is useful for ensuring proper type annotation inference for
   * projects that re-export `typing` and `typing_extensions` members
   * from a compatibility module. If omitted, any members imported from
   * modules apart from `typing` and `typing_extensions` will be treated
   * as ordinary Python objects.
   */
  'typing-modules'?: string[] | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes to consider non-fixable.
   */
  unfixable?: RuleSelector[] | null;
  /**
   * Enable application of unsafe fixes.
   * If excluded, a hint will be displayed when unsafe fixes are available.
   * If set to false, the hint will be hidden.
   */
  'unsafe-fixes'?: boolean | null;
}
/**
 * Configures Ruff's `analyze` command.
 */
export interface AnalyzeOptions {
  /**
   * Whether to detect imports from string literals. When enabled, Ruff will search for string
   * literals that "look like" import paths, and include them in the import map, if they resolve
   * to valid Python modules.
   */
  'detect-string-imports'?: boolean | null;
  /**
   * Whether to generate a map from file to files that it depends on (dependencies) or files that
   * depend on it (dependents).
   */
  direction?: Direction | null;
  /**
   * A list of file patterns to exclude from analysis in addition to the files excluded globally (see [`exclude`](#exclude), and [`extend-exclude`](#extend-exclude)).
   *
   * Exclusions are based on globs, and can be either:
   *
   * - Single-path patterns, like `.mypy_cache` (to exclude any directory
   *   named `.mypy_cache` in the tree), `foo.py` (to exclude any file named
   *   `foo.py`), or `foo_*.py` (to exclude any file matching `foo_*.py` ).
   * - Relative patterns, like `directory/foo.py` (to exclude that specific
   *   file) or `directory/*.py` (to exclude any Python files in
   *   `directory`). Note that these paths are relative to the project root
   *   (e.g., the directory containing your `pyproject.toml`).
   *
   * For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  exclude?: string[] | null;
  /**
   * A map from file path to the list of Python or non-Python file paths or globs that should be
   * considered dependencies of that file, regardless of whether relevant imports are detected.
   */
  'include-dependencies'?: {
    [k: string]: string[] | undefined;
  } | null;
  /**
   * Whether to enable preview mode. When preview mode is enabled, Ruff will expose unstable
   * commands.
   */
  preview?: boolean | null;
  /**
   * The minimum number of dots in a string to consider it a valid import.
   *
   * This setting is only relevant when [`detect-string-imports`](#detect-string-imports) is enabled.
   * For example, if this is set to `2`, then only strings with at least two dots (e.g., `"path.to.module"`)
   * would be considered valid imports.
   */
  'string-imports-min-dots'?: number | null;
  /**
   * Whether to include imports that are only used for type checking (i.e., imports within `if TYPE_CHECKING:` blocks).
   * When enabled (default), type-checking-only imports are included in the import graph.
   * When disabled, they are excluded.
   */
  'type-checking-imports'?: boolean | null;
}
/**
 * Options for the `flake8-annotations` plugin.
 */
export interface Flake8AnnotationsOptions {
  /**
   * Whether to suppress `ANN401` for dynamically typed `*args` and
   * `**kwargs` arguments.
   */
  'allow-star-arg-any'?: boolean | null;
  /**
   * Whether to suppress `ANN*` rules for any declaration
   * that hasn't been typed at all.
   * This makes it easier to gradually add types to a codebase.
   */
  'ignore-fully-untyped'?: boolean | null;
  /**
   * Whether to allow the omission of a return type hint for `__init__` if at
   * least one argument is annotated.
   */
  'mypy-init-return'?: boolean | null;
  /**
   * Whether to suppress `ANN000`-level violations for arguments matching the
   * "dummy" variable regex (like `_`).
   */
  'suppress-dummy-args'?: boolean | null;
  /**
   * Whether to suppress `ANN200`-level violations for functions that meet
   * either of the following criteria:
   *
   * - Contain no `return` statement.
   * - Explicit `return` statement(s) all return `None` (explicitly or
   *   implicitly).
   */
  'suppress-none-returning'?: boolean | null;
}
/**
 * Options for the `flake8-bandit` plugin.
 */
export interface Flake8BanditOptions {
  /**
   * A list of callable names, whose result may be safely passed into
   * [`markupsafe.Markup`](https://markupsafe.palletsprojects.com/en/stable/escaping/#markupsafe.Markup).
   *
   * Expects to receive a list of fully-qualified names (e.g., `bleach.clean`, rather than `clean`).
   *
   * This setting helps you avoid false positives in code like:
   *
   * ```python
   * from bleach import clean
   * from markupsafe import Markup
   *
   * cleaned_markup = Markup(clean(some_user_input))
   * ```
   *
   * Where the use of [`bleach.clean`](https://bleach.readthedocs.io/en/latest/clean.html)
   * usually ensures that there's no XSS vulnerability.
   *
   * Although it is not recommended, you may also use this setting to whitelist other
   * kinds of calls, e.g. calls to i18n translation functions, where how safe that is
   * will depend on the implementation and how well the translations are audited.
   *
   * Another common use-case is to wrap the output of functions that generate markup
   * like [`xml.etree.ElementTree.tostring`](https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.tostring)
   * or template rendering engines where sanitization of potential user input is either
   * already baked in or has to happen before rendering.
   */
  'allowed-markup-calls'?: string[] | null;
  /**
   * Whether to disallow `try`-`except`-`pass` (`S110`) for specific
   * exception types. By default, `try`-`except`-`pass` is only
   * disallowed for `Exception` and `BaseException`.
   */
  'check-typed-exception'?: boolean | null;
  /**
   * A list of additional callable names that behave like
   * [`markupsafe.Markup`](https://markupsafe.palletsprojects.com/en/stable/escaping/#markupsafe.Markup).
   *
   * Expects to receive a list of fully-qualified names (e.g., `webhelpers.html.literal`, rather than
   * `literal`).
   */
  'extend-markup-names'?: string[] | null;
  /**
   * A list of directories to consider temporary (see `S108`).
   */
  'hardcoded-tmp-directory'?: string[] | null;
  /**
   * A list of directories to consider temporary, in addition to those
   * specified by [`hardcoded-tmp-directory`](#lint_flake8-bandit_hardcoded-tmp-directory) (see `S108`).
   */
  'hardcoded-tmp-directory-extend'?: string[] | null;
}
/**
 * Options for the `flake8-boolean-trap` plugin
 */
export interface Flake8BooleanTrapOptions {
  /**
   * Additional callable functions with which to allow boolean traps.
   *
   * Expects to receive a list of fully-qualified names (e.g., `pydantic.Field`, rather than
   * `Field`).
   */
  'extend-allowed-calls'?: string[] | null;
}
/**
 * Options for the `flake8-bugbear` plugin.
 */
export interface Flake8BugbearOptions {
  /**
   * Additional callable functions to consider "immutable" when evaluating, e.g., the
   * `function-call-in-default-argument` rule (`B008`) or `function-call-in-dataclass-defaults`
   * rule (`RUF009`).
   *
   * Expects to receive a list of fully-qualified names (e.g., `fastapi.Query`, rather than
   * `Query`).
   */
  'extend-immutable-calls'?: string[] | null;
}
/**
 * Options for the `flake8-builtins` plugin.
 */
export interface Flake8BuiltinsOptions {
  /**
   * List of builtin module names to allow.
   */
  'allowed-modules'?: string[] | null;
  /**
   * @deprecated
   * DEPRECATED: This option has been renamed to `allowed-modules`. Use `allowed-modules` instead.
   *
   * List of builtin module names to allow.
   *
   * This option is ignored if both `allowed-modules` and `builtins-allowed-modules` are set.
   */
  'builtins-allowed-modules'?: string[] | null;
  /**
   * @deprecated
   * DEPRECATED: This option has been renamed to `ignorelist`. Use `ignorelist` instead.
   *
   * Ignore list of builtins.
   *
   * This option is ignored if both `ignorelist` and `builtins-ignorelist` are set.
   */
  'builtins-ignorelist'?: string[] | null;
  /**
   * @deprecated
   * DEPRECATED: This option has been renamed to `strict-checking`. Use `strict-checking` instead.
   *
   * Compare module names instead of full module paths.
   *
   * This option is ignored if both `strict-checking` and `builtins-strict-checking` are set.
   */
  'builtins-strict-checking'?: boolean | null;
  /**
   * Ignore list of builtins.
   */
  ignorelist?: string[] | null;
  /**
   * Compare module names instead of full module paths.
   *
   * Used by [`A005` - `stdlib-module-shadowing`](https://docs.astral.sh/ruff/rules/stdlib-module-shadowing/).
   */
  'strict-checking'?: boolean | null;
}
/**
 * Options for the `flake8-comprehensions` plugin.
 */
export interface Flake8ComprehensionsOptions {
  /**
   * Allow `dict` calls that make use of keyword arguments (e.g., `dict(a=1, b=2)`).
   */
  'allow-dict-calls-with-keyword-arguments'?: boolean | null;
}
/**
 * Options for the `flake8-copyright` plugin.
 */
export interface Flake8CopyrightOptions {
  /**
   * Author to enforce within the copyright notice. If provided, the
   * author must be present immediately following the copyright notice.
   */
  author?: string | null;
  /**
   * A minimum file size (in bytes) required for a copyright notice to
   * be enforced. By default, all files are validated.
   */
  'min-file-size'?: number | null;
  /**
   * The regular expression used to match the copyright notice, compiled
   * with the [`regex`](https://docs.rs/regex/latest/regex/) crate.
   * Defaults to `(?i)Copyright\s+((?:\(C\)|©)\s+)?\d{4}((-|,\s)\d{4})*`, which matches
   * the following:
   *
   * - `Copyright 2023`
   * - `Copyright (C) 2023`
   * - `Copyright 2021-2023`
   * - `Copyright (C) 2021-2023`
   * - `Copyright (C) 2021, 2023`
   */
  'notice-rgx'?: string | null;
}
/**
 * Options for the `flake8-errmsg` plugin.
 */
export interface Flake8ErrMsgOptions {
  /**
   * Maximum string length for string literals in exception messages.
   */
  'max-string-length'?: number | null;
}
/**
 * Options for the `flake8-gettext` plugin.
 */
export interface Flake8GetTextOptions {
  /**
   * Additional function names to consider as internationalization calls, in addition to those
   * included in [`function-names`](#lint_flake8-gettext_function-names).
   */
  'extend-function-names'?: string[] | null;
  /**
   * The function names to consider as internationalization calls.
   */
  'function-names'?: string[] | null;
}
/**
 * Options for the `flake8-implicit-str-concat` plugin
 */
export interface Flake8ImplicitStrConcatOptions {
  /**
   * Whether to allow implicit string concatenations for multiline strings.
   * By default, implicit concatenations of multiline strings are
   * allowed (but continuation lines, delimited with a backslash, are
   * prohibited).
   *
   * Setting `allow-multiline = false` will automatically disable the
   * `explicit-string-concatenation` (`ISC003`) rule. Otherwise, both
   * implicit and explicit multiline string concatenations would be seen
   * as violations, making it impossible to write a linter-compliant multiline
   * string.
   */
  'allow-multiline'?: boolean | null;
}
/**
 * Options for the `flake8-import-conventions` plugin
 */
export interface Flake8ImportConventionsOptions {
  /**
   * The conventional aliases for imports. These aliases can be extended by
   * the [`extend-aliases`](#lint_flake8-import-conventions_extend-aliases) option.
   */
  aliases?: {
    [k: string]: Alias | undefined;
  } | null;
  /**
   * A mapping from module to its banned import aliases.
   */
  'banned-aliases'?: {
    [k: string]: BannedAliases | undefined;
  } | null;
  /**
   * A list of modules that should not be imported from using the
   * `from ... import ...` syntax.
   *
   * For example, given `banned-from = ["pandas"]`, `from pandas import DataFrame`
   * would be disallowed, while `import pandas` would be allowed.
   */
  'banned-from'?: string[] | null;
  /**
   * A mapping from module to conventional import alias. These aliases will
   * be added to the [`aliases`](#lint_flake8-import-conventions_aliases) mapping.
   */
  'extend-aliases'?: {
    [k: string]: Alias | undefined;
  } | null;
}
/**
 * Options for the `flake8-pytest-style` plugin
 */
export interface Flake8PytestStyleOptions {
  /**
   * Boolean flag specifying whether `@pytest.fixture()` without parameters
   * should have parentheses. If the option is set to `false` (the default),
   * `@pytest.fixture` is valid and `@pytest.fixture()` is invalid. If set
   * to `true`, `@pytest.fixture()` is valid and `@pytest.fixture` is
   * invalid.
   */
  'fixture-parentheses'?: boolean | null;
  /**
   * Boolean flag specifying whether `@pytest.mark.foo()` without parameters
   * should have parentheses. If the option is set to `false` (the
   * default), `@pytest.mark.foo` is valid and `@pytest.mark.foo()` is
   * invalid. If set to `true`, `@pytest.mark.foo()` is valid and
   * `@pytest.mark.foo` is invalid.
   */
  'mark-parentheses'?: boolean | null;
  /**
   * Expected type for multiple argument names in `@pytest.mark.parametrize`.
   * The following values are supported:
   *
   * - `csv` — a comma-separated list, e.g.
   *   `@pytest.mark.parametrize("name1,name2", ...)`
   * - `tuple` (default) — e.g.
   *   `@pytest.mark.parametrize(("name1", "name2"), ...)`
   * - `list` — e.g. `@pytest.mark.parametrize(["name1", "name2"], ...)`
   */
  'parametrize-names-type'?: ParametrizeNameType | null;
  /**
   * Expected type for each row of values in `@pytest.mark.parametrize` in
   * case of multiple parameters. The following values are supported:
   *
   * - `tuple` (default) — e.g.
   *   `@pytest.mark.parametrize(("name1", "name2"), [(1, 2), (3, 4)])`
   * - `list` — e.g.
   *   `@pytest.mark.parametrize(("name1", "name2"), [[1, 2], [3, 4]])`
   */
  'parametrize-values-row-type'?: ParametrizeValuesRowType | null;
  /**
   * Expected type for the list of values rows in `@pytest.mark.parametrize`.
   * The following values are supported:
   *
   * - `tuple` — e.g. `@pytest.mark.parametrize("name", (1, 2, 3))`
   * - `list` (default) — e.g. `@pytest.mark.parametrize("name", [1, 2, 3])`
   */
  'parametrize-values-type'?: ParametrizeValuesType | null;
  /**
   * List of additional exception names that require a match= parameter in a
   * `pytest.raises()` call. This extends the default list of exceptions
   * that require a match= parameter.
   * This option is useful if you want to extend the default list of
   * exceptions that require a match= parameter without having to specify
   * the entire list.
   * Note that this option does not remove any exceptions from the default
   * list.
   *
   * Supports glob patterns. For more information on the glob syntax, refer
   * to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'raises-extend-require-match-for'?: string[] | null;
  /**
   * List of exception names that require a match= parameter in a
   * `pytest.raises()` call.
   *
   * Supports glob patterns. For more information on the glob syntax, refer
   * to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'raises-require-match-for'?: string[] | null;
  /**
   * List of additional warning names that require a match= parameter in a
   * `pytest.warns()` call. This extends the default list of warnings that
   * require a match= parameter.
   *
   * This option is useful if you want to extend the default list of warnings
   * that require a match= parameter without having to specify the entire
   * list.
   *
   * Note that this option does not remove any warnings from the default
   * list.
   *
   * Supports glob patterns. For more information on the glob syntax, refer
   * to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'warns-extend-require-match-for'?: string[] | null;
  /**
   * List of warning names that require a match= parameter in a
   * `pytest.warns()` call.
   *
   * Supports glob patterns. For more information on the glob syntax, refer
   * to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'warns-require-match-for'?: string[] | null;
}
/**
 * Options for the `flake8-quotes` plugin.
 */
export interface Flake8QuotesOptions {
  /**
   * Whether to avoid using single quotes if a string contains single quotes,
   * or vice-versa with double quotes, as per [PEP 8](https://peps.python.org/pep-0008/#string-quotes).
   * This minimizes the need to escape quotation marks within strings.
   */
  'avoid-escape'?: boolean | null;
  /**
   * Quote style to prefer for docstrings (either "single" or "double").
   *
   * When using the formatter, only "double" is compatible, as the formatter
   * enforces double quotes for docstrings strings.
   */
  'docstring-quotes'?: Quote | null;
  /**
   * Quote style to prefer for inline strings (either "single" or
   * "double").
   *
   * When using the formatter, ensure that [`format.quote-style`](#format_quote-style) is set to
   * the same preferred quote style.
   */
  'inline-quotes'?: Quote | null;
  /**
   * Quote style to prefer for multiline strings (either "single" or
   * "double").
   *
   * When using the formatter, only "double" is compatible, as the formatter
   * enforces double quotes for multiline strings.
   */
  'multiline-quotes'?: Quote | null;
}
/**
 * Options for the `flake8_self` plugin.
 */
export interface Flake8SelfOptions {
  /**
   * Additional names to ignore when considering `flake8-self` violations,
   * in addition to those included in [`ignore-names`](#lint_flake8-self_ignore-names).
   */
  'extend-ignore-names'?: string[] | null;
  /**
   * A list of names to ignore when considering `flake8-self` violations.
   */
  'ignore-names'?: string[] | null;
}
/**
 * Options for the `flake8-tidy-imports` plugin
 */
export interface Flake8TidyImportsOptions {
  /**
   * Whether to ban all relative imports (`"all"`), or only those imports
   * that extend into the parent module or beyond (`"parents"`).
   */
  'ban-relative-imports'?: Strictness | null;
  /**
   * Specific modules or module members that may not be imported or accessed.
   * Note that this rule is only meant to flag accidental uses,
   * and can be circumvented via `eval` or `importlib`.
   */
  'banned-api'?: {
    [k: string]: ApiBan | undefined;
  } | null;
  /**
   * List of specific modules that may not be imported at module level, and should instead be
   * imported lazily (e.g., within a function definition, or an `if TYPE_CHECKING:`
   * block, or some other nested context). This also affects the rule `import-outside-top-level`
   * if `banned-module-level-imports` is enabled.
   */
  'banned-module-level-imports'?: string[] | null;
}
export interface ApiBan {
  /**
   * The message to display when the API is used.
   */
  msg: string;
}
/**
 * Options for the `flake8-type-checking` plugin
 */
export interface Flake8TypeCheckingOptions {
  /**
   * Exempt certain modules from needing to be moved into type-checking
   * blocks.
   */
  'exempt-modules'?: string[] | null;
  /**
   * Whether to add quotes around type annotations, if doing so would allow
   * the corresponding import to be moved into a type-checking block.
   *
   * For example, in the following, Python requires that `Sequence` be
   * available at runtime, despite the fact that it's only used in a type
   * annotation:
   *
   * ```python
   * from collections.abc import Sequence
   *
   *
   * def func(value: Sequence[int]) -> None:
   *     ...
   * ```
   *
   * In other words, moving `from collections.abc import Sequence` into an
   * `if TYPE_CHECKING:` block above would cause a runtime error, as the
   * type would no longer be available at runtime.
   *
   * By default, Ruff will respect such runtime semantics and avoid moving
   * the import to prevent such runtime errors.
   *
   * Setting `quote-annotations` to `true` will instruct Ruff to add quotes
   * around the annotation (e.g., `"Sequence[int]"`), which in turn enables
   * Ruff to move the import into an `if TYPE_CHECKING:` block, like so:
   *
   * ```python
   * from typing import TYPE_CHECKING
   *
   * if TYPE_CHECKING:
   *     from collections.abc import Sequence
   *
   *
   * def func(value: "Sequence[int]") -> None:
   *     ...
   * ```
   *
   * Note that this setting has no effect when `from __future__ import annotations`
   * is present, as `__future__` annotations are always treated equivalently
   * to quoted annotations. Similarly, this setting has no effect on Python
   * versions after 3.14 because these annotations are also deferred.
   */
  'quote-annotations'?: boolean | null;
  /**
   * Exempt classes that list any of the enumerated classes as a base class
   * from needing to be moved into type-checking blocks.
   *
   * Common examples include Pydantic's `pydantic.BaseModel` and SQLAlchemy's
   * `sqlalchemy.orm.DeclarativeBase`, but can also support user-defined
   * classes that inherit from those base classes. For example, if you define
   * a common `DeclarativeBase` subclass that's used throughout your project
   * (e.g., `class Base(DeclarativeBase) ...` in `base.py`), you can add it to
   * this list (`runtime-evaluated-base-classes = ["base.Base"]`) to exempt
   * models from being moved into type-checking blocks.
   */
  'runtime-evaluated-base-classes'?: string[] | null;
  /**
   * Exempt classes and functions decorated with any of the enumerated
   * decorators from being moved into type-checking blocks.
   *
   * Common examples include Pydantic's `@pydantic.validate_call` decorator
   * (for functions) and attrs' `@attrs.define` decorator (for classes).
   *
   * This also supports framework decorators like FastAPI's `fastapi.FastAPI.get`
   * which will work across assignments in the same module.
   *
   * For example:
   * ```python
   * from fastapi import FastAPI
   *
   * app = FastAPI("app")
   *
   * @app.get("/home")
   * def home() -> str: ...
   * ```
   *
   * Here `app.get` will correctly be identified as `fastapi.FastAPI.get`.
   */
  'runtime-evaluated-decorators'?: string[] | null;
  /**
   * Enforce `TC001`, `TC002`, and `TC003` rules even when valid runtime imports
   * are present for the same module.
   *
   * See flake8-type-checking's [strict](https://github.com/snok/flake8-type-checking#strict) option.
   */
  strict?: boolean | null;
}
/**
 * Options for the `flake8-unused-arguments` plugin
 */
export interface Flake8UnusedArgumentsOptions {
  /**
   * Whether to allow unused variadic arguments, like `*args` and `**kwargs`.
   */
  'ignore-variadic-names'?: boolean | null;
}
/**
 * Configures the way Ruff formats your code.
 */
export interface FormatOptions {
  /**
   * Whether to format code snippets in docstrings.
   *
   * When this is enabled, Python code examples within docstrings are
   * automatically reformatted.
   *
   * For example, when this is enabled, the following code:
   *
   * ```python
   * def f(x):
   *     """
   *     Something about `f`. And an example in doctest format:
   *
   *     >>> f(  x  )
   *
   *     Markdown is also supported:
   *
   *     ```py
   *     f(  x  )
   *     ```
   *
   *     As are reStructuredText literal blocks::
   *
   *         f(  x  )
   *
   *
   *     And reStructuredText code blocks:
   *
   *     .. code-block:: python
   *
   *         f(  x  )
   *     """
   *     pass
   * ```
   *
   * ... will be reformatted (assuming the rest of the options are set to
   * their defaults) as:
   *
   * ```python
   * def f(x):
   *     """
   *     Something about `f`. And an example in doctest format:
   *
   *     >>> f(x)
   *
   *     Markdown is also supported:
   *
   *     ```py
   *     f(x)
   *     ```
   *
   *     As are reStructuredText literal blocks::
   *
   *         f(x)
   *
   *
   *     And reStructuredText code blocks:
   *
   *     .. code-block:: python
   *
   *         f(x)
   *     """
   *     pass
   * ```
   *
   * If a code snippet in a docstring contains invalid Python code or if the
   * formatter would otherwise write invalid Python code, then the code
   * example is ignored by the formatter and kept as-is.
   *
   * Currently, doctest, Markdown, reStructuredText literal blocks, and
   * reStructuredText code blocks are all supported and automatically
   * recognized. In the case of unlabeled fenced code blocks in Markdown and
   * reStructuredText literal blocks, the contents are assumed to be Python
   * and reformatted. As with any other format, if the contents aren't valid
   * Python, then the block is left untouched automatically.
   */
  'docstring-code-format'?: boolean | null;
  /**
   * Set the line length used when formatting code snippets in docstrings.
   *
   * This only has an effect when the `docstring-code-format` setting is
   * enabled.
   *
   * The default value for this setting is `"dynamic"`, which has the effect
   * of ensuring that any reformatted code examples in docstrings adhere to
   * the global line length configuration that is used for the surrounding
   * Python code. The point of this setting is that it takes the indentation
   * of the docstring into account when reformatting code examples.
   *
   * Alternatively, this can be set to a fixed integer, which will result
   * in the same line length limit being applied to all reformatted code
   * examples in docstrings. When set to a fixed integer, the indent of the
   * docstring is not taken into account. That is, this may result in lines
   * in the reformatted code example that exceed the globally configured
   * line length limit.
   *
   * For example, when this is set to `20` and [`docstring-code-format`](#docstring-code-format)
   * is enabled, then this code:
   *
   * ```python
   * def f(x):
   *     '''
   *     Something about `f`. And an example:
   *
   *     .. code-block:: python
   *
   *         foo, bar, quux = this_is_a_long_line(lion, hippo, lemur, bear)
   *     '''
   *     pass
   * ```
   *
   * ... will be reformatted (assuming the rest of the options are set
   * to their defaults) as:
   *
   * ```python
   * def f(x):
   *     """
   *     Something about `f`. And an example:
   *
   *     .. code-block:: python
   *
   *         (
   *             foo,
   *             bar,
   *             quux,
   *         ) = this_is_a_long_line(
   *             lion,
   *             hippo,
   *             lemur,
   *             bear,
   *         )
   *     """
   *     pass
   * ```
   */
  'docstring-code-line-length'?: DocstringCodeLineWidth | null;
  /**
   * A list of file patterns to exclude from formatting in addition to the files excluded globally (see [`exclude`](#exclude), and [`extend-exclude`](#extend-exclude)).
   *
   * Exclusions are based on globs, and can be either:
   *
   * - Single-path patterns, like `.mypy_cache` (to exclude any directory
   *   named `.mypy_cache` in the tree), `foo.py` (to exclude any file named
   *   `foo.py`), or `foo_*.py` (to exclude any file matching `foo_*.py` ).
   * - Relative patterns, like `directory/foo.py` (to exclude that specific
   *   file) or `directory/*.py` (to exclude any Python files in
   *   `directory`). Note that these paths are relative to the project root
   *   (e.g., the directory containing your `pyproject.toml`).
   *
   * For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  exclude?: string[] | null;
  /**
   * Whether to use spaces or tabs for indentation.
   *
   * `indent-style = "space"` (default):
   *
   * ```python
   * def f():
   *     print("Hello") #  Spaces indent the `print` statement.
   * ```
   *
   * `indent-style = "tab"`:
   *
   * ```python
   * def f():
   *     print("Hello") #  A tab `\t` indents the `print` statement.
   * ```
   *
   * PEP 8 recommends using spaces for [indentation](https://peps.python.org/pep-0008/#indentation).
   * We care about accessibility; if you do not need tabs for accessibility, we do not recommend you use them.
   *
   * See [`indent-width`](#indent-width) to configure the number of spaces per indentation and the tab width.
   */
  'indent-style'?: IndentStyle | null;
  /**
   * The character Ruff uses at the end of a line.
   *
   * * `auto`: The newline style is detected automatically on a file per file basis. Files with mixed line endings will be converted to the first detected line ending. Defaults to `\n` for files that contain no line endings.
   * * `lf`: Line endings will be converted to `\n`. The default line ending on Unix.
   * * `cr-lf`: Line endings will be converted to `\r\n`. The default line ending on Windows.
   * * `native`: Line endings will be converted to `\n` on Unix and `\r\n` on Windows.
   */
  'line-ending'?: LineEnding | null;
  /**
   * Whether to enable the unstable preview style formatting.
   */
  preview?: boolean | null;
  /**
   * Configures the preferred quote character for strings. The recommended options are
   *
   * * `double` (default): Use double quotes `"`
   * * `single`: Use single quotes `'`
   *
   * In compliance with [PEP 8](https://peps.python.org/pep-0008/) and [PEP 257](https://peps.python.org/pep-0257/),
   * Ruff prefers double quotes for triple quoted strings and docstrings even when using `quote-style = "single"`.
   *
   * Ruff deviates from using the configured quotes if doing so prevents the need for
   * escaping quote characters inside the string:
   *
   * ```python
   * a = "a string without any quotes"
   * b = "It's monday morning"
   * ```
   *
   * Ruff will change the quotes of the string assigned to `a` to single quotes when using `quote-style = "single"`.
   * However, Ruff uses double quotes for the string assigned to `b` because using single quotes would require escaping the `'`,
   * which leads to the less readable code: `'It\'s monday morning'`.
   *
   * In addition, Ruff supports the quote style `preserve` for projects that already use
   * a mixture of single and double quotes and can't migrate to the `double` or `single` style.
   * The quote style `preserve` leaves the quotes of all strings unchanged.
   */
  'quote-style'?: QuoteStyle | null;
  /**
   * Ruff uses existing trailing commas as an indication that short lines should be left separate.
   * If this option is set to `true`, the magic trailing comma is ignored.
   *
   * For example, Ruff leaves the arguments separate even though
   * collapsing the arguments to a single line doesn't exceed the line length if `skip-magic-trailing-comma = false`:
   *
   * ```python
   * # The arguments remain on separate lines because of the trailing comma after `b`
   * def test(
   *     a,
   *     b,
   * ): pass
   * ```
   *
   * Setting `skip-magic-trailing-comma = true` changes the formatting to:
   *
   * ```python
   * # The arguments are collapsed to a single line because the trailing comma is ignored
   * def test(a, b):
   *     pass
   * ```
   */
  'skip-magic-trailing-comma'?: boolean | null;
}
/**
 * Options for the `isort` plugin.
 */
export interface IsortOptions {
  /**
   * Sort imports taking into account case sensitivity.
   *
   * Note that the [`order-by-type`](#lint_isort_order-by-type) setting will
   * take precedence over this one when enabled.
   */
  'case-sensitive'?: boolean | null;
  /**
   * An override list of tokens to always recognize as a Class for
   * [`order-by-type`](#lint_isort_order-by-type) regardless of casing.
   */
  classes?: string[] | null;
  /**
   * Combines as imports on the same line. See isort's [`combine-as-imports`](https://pycqa.github.io/isort/docs/configuration/options.html#combine-as-imports)
   * option.
   */
  'combine-as-imports'?: boolean | null;
  /**
   * An override list of tokens to always recognize as a CONSTANT
   * for [`order-by-type`](#lint_isort_order-by-type) regardless of casing.
   */
  constants?: string[] | null;
  /**
   * Define a default section for any imports that don't fit into the specified [`section-order`](#lint_isort_section-order).
   */
  'default-section'?: ImportSection | null;
  /**
   * Whether to automatically mark imports from within the same package as first-party.
   * For example, when `detect-same-package = true`, then when analyzing files within the
   * `foo` package, any imports from within the `foo` package will be considered first-party.
   *
   * This heuristic is often unnecessary when `src` is configured to detect all first-party
   * sources; however, if `src` is _not_ configured, this heuristic can be useful to detect
   * first-party imports from _within_ (but not _across_) first-party packages.
   */
  'detect-same-package'?: boolean | null;
  /**
   * A list of modules to consider standard-library, in addition to those
   * known to Ruff in advance.
   *
   * Supports glob patterns. For more information on the glob syntax, refer
   * to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'extra-standard-library'?: string[] | null;
  /**
   * Forces all from imports to appear on their own line.
   */
  'force-single-line'?: boolean | null;
  /**
   * Don't sort straight-style imports (like `import sys`) before from-style
   * imports (like `from itertools import groupby`). Instead, sort the
   * imports by module, independent of import style.
   */
  'force-sort-within-sections'?: boolean | null;
  /**
   * Force specific imports to the top of their appropriate section.
   */
  'force-to-top'?: string[] | null;
  /**
   * Force `import from` statements with multiple members and at least one
   * alias (e.g., `import A as B`) to wrap such that every line contains
   * exactly one member. For example, this formatting would be retained,
   * rather than condensing to a single line:
   *
   * ```python
   * from .utils import (
   *     test_directory as test_directory,
   *     test_id as test_id
   * )
   * ```
   *
   * Note that this setting is only effective when combined with
   * `combine-as-imports = true`. When [`combine-as-imports`](#lint_isort_combine-as-imports) isn't
   * enabled, every aliased `import from` will be given its own line, in
   * which case, wrapping is not necessary.
   *
   * When using the formatter, ensure that [`format.skip-magic-trailing-comma`](#format_skip-magic-trailing-comma) is set to `false` (default)
   * when enabling `force-wrap-aliases` to avoid that the formatter collapses members if they all fit on a single line.
   */
  'force-wrap-aliases'?: boolean | null;
  /**
   * A list of modules to separate into auxiliary block(s) of imports,
   * in the order specified.
   */
  'forced-separate'?: string[] | null;
  /**
   * Whether to place `import from` imports before straight imports when sorting.
   *
   * For example, by default, imports will be sorted such that straight imports appear
   * before `import from` imports, as in:
   * ```python
   * import os
   * import sys
   * from typing import List
   * ```
   *
   * Setting `from-first = true` will instead sort such that `import from` imports appear
   * before straight imports, as in:
   * ```python
   * from typing import List
   * import os
   * import sys
   * ```
   */
  'from-first'?: boolean | null;
  /**
   * A mapping from import section names to their heading comments.
   *
   * When set, a comment with the specified text will be added above imports
   * in the corresponding section. If a heading comment already exists, it
   * will be replaced.
   *
   * Compatible with isort's `import_heading_{section_name}` settings.
   */
  'import-heading'?: {
    'first-party'?: string;
    future?: string;
    'local-folder'?: string;
    'standard-library'?: string;
    'third-party'?: string;
    [k: string]: string | undefined;
  } | null;
  /**
   * A list of modules to consider first-party, regardless of whether they
   * can be identified as such via introspection of the local filesystem.
   *
   * Supports glob patterns. For more information on the glob syntax, refer
   * to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'known-first-party'?: string[] | null;
  /**
   * A list of modules to consider being a local folder.
   * Generally, this is reserved for relative imports (`from . import module`).
   *
   * Supports glob patterns. For more information on the glob syntax, refer
   * to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'known-local-folder'?: string[] | null;
  /**
   * A list of modules to consider third-party, regardless of whether they
   * can be identified as such via introspection of the local filesystem.
   *
   * Supports glob patterns. For more information on the glob syntax, refer
   * to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'known-third-party'?: string[] | null;
  /**
   * Sort imports by their string length, such that shorter imports appear
   * before longer imports. For example, by default, imports will be sorted
   * alphabetically, as in:
   * ```python
   * import collections
   * import os
   * ```
   *
   * Setting `length-sort = true` will instead sort such that shorter imports
   * appear before longer imports, as in:
   * ```python
   * import os
   * import collections
   * ```
   */
  'length-sort'?: boolean | null;
  /**
   * Sort straight imports by their string length. Similar to [`length-sort`](#lint_isort_length-sort),
   * but applies only to straight imports and doesn't affect `from` imports.
   */
  'length-sort-straight'?: boolean | null;
  /**
   * The number of blank lines to place after imports.
   * Use `-1` for automatic determination.
   *
   * Ruff uses at most one blank line after imports in typing stub files (files with `.pyi` extension) in accordance to
   * the typing style recommendations ([source](https://typing.python.org/en/latest/guides/writing_stubs.html#blank-lines)).
   *
   * When using the formatter, only the values `-1`, `1`, and `2` are compatible because
   * it enforces at least one empty and at most two empty lines after imports.
   */
  'lines-after-imports'?: number | null;
  /**
   * The number of lines to place between "direct" and `import from` imports.
   *
   * When using the formatter, only the values `0` and `1` are compatible because
   * it preserves up to one empty line after imports in nested blocks.
   */
  'lines-between-types'?: number | null;
  /**
   * A list of sections that should _not_ be delineated from the previous
   * section via empty lines.
   */
  'no-lines-before'?: ImportSection[] | null;
  /**
   * Put all imports into the same section bucket.
   *
   * For example, rather than separating standard library and third-party imports, as in:
   * ```python
   * import os
   * import sys
   *
   * import numpy
   * import pandas
   * ```
   *
   * Setting `no-sections = true` will instead group all imports into a single section:
   * ```python
   * import numpy
   * import os
   * import pandas
   * import sys
   * ```
   */
  'no-sections'?: boolean | null;
  /**
   * Order imports by type, which is determined by case, in addition to
   * alphabetically.
   *
   * Note that this option takes precedence over the
   * [`case-sensitive`](#lint_isort_case-sensitive) setting when enabled.
   */
  'order-by-type'?: boolean | null;
  /**
   * Whether to place "closer" imports (fewer `.` characters, most local)
   * before "further" imports (more `.` characters, least local), or vice
   * versa.
   *
   * The default ("furthest-to-closest") is equivalent to isort's
   * [`reverse-relative`](https://pycqa.github.io/isort/docs/configuration/options.html#reverse-relative) default (`reverse-relative = false`); setting
   * this to "closest-to-furthest" is equivalent to isort's
   * `reverse-relative = true`.
   */
  'relative-imports-order'?: RelativeImportsOrder | null;
  /**
   * Add the specified import line to all files.
   */
  'required-imports'?: NameImports[] | null;
  /**
   * Override in which order the sections should be output. Can be used to move custom sections.
   */
  'section-order'?: ImportSection[] | null;
  /**
   * A list of mappings from section names to modules.
   *
   * By default, imports are categorized according to their type (e.g., `future`, `third-party`,
   * and so on). This setting allows you to group modules into custom sections, to augment or
   * override the built-in sections.
   *
   * For example, to group all testing utilities, you could create a `testing` section:
   * ```toml
   * testing = ["pytest", "hypothesis"]
   * ```
   *
   * The values in the list are treated as glob patterns. For example, to match all packages in
   * the LangChain ecosystem (`langchain-core`, `langchain-openai`, etc.):
   * ```toml
   * langchain = ["langchain-*"]
   * ```
   *
   * Custom sections should typically be inserted into the [`section-order`](#lint_isort_section-order) list to ensure that
   * they're displayed as a standalone group and in the intended order, as in:
   * ```toml
   * section-order = [
   *   "future",
   *   "standard-library",
   *   "third-party",
   *   "first-party",
   *   "local-folder",
   *   "testing"
   * ]
   * ```
   *
   * If a custom section is omitted from [`section-order`](#lint_isort_section-order), imports in that section will be
   * assigned to the [`default-section`](#lint_isort_default-section) (which defaults to `third-party`).
   */
  sections?: {
    'first-party'?: string[];
    future?: string[];
    'local-folder'?: string[];
    'standard-library'?: string[];
    'third-party'?: string[];
    [k: string]: string[] | undefined;
  } | null;
  /**
   * One or more modules to exclude from the single line rule.
   */
  'single-line-exclusions'?: string[] | null;
  /**
   * If a comma is placed after the last member in a multi-line import, then
   * the imports will never be folded into one line.
   *
   * See isort's [`split-on-trailing-comma`](https://pycqa.github.io/isort/docs/configuration/options.html#split-on-trailing-comma) option.
   *
   * When using the formatter, ensure that [`format.skip-magic-trailing-comma`](#format_skip-magic-trailing-comma) is set to `false` (default) when enabling `split-on-trailing-comma`
   * to avoid that the formatter removes the trailing commas.
   */
  'split-on-trailing-comma'?: boolean | null;
  /**
   * An override list of tokens to always recognize as a var
   * for [`order-by-type`](#lint_isort_order-by-type) regardless of casing.
   */
  variables?: string[] | null;
}
/**
 * Configures how Ruff checks your code.
 *
 * Options specified in the `lint` section take precedence over the deprecated top-level settings.
 */
export interface LintOptions {
  /**
   * A list of allowed "confusable" Unicode characters to ignore when
   * enforcing `RUF001`, `RUF002`, and `RUF003`.
   */
  'allowed-confusables'?: string[] | null;
  /**
   * A regular expression used to identify "dummy" variables, or those which
   * should be ignored when enforcing (e.g.) unused-variable rules. The
   * default expression matches `_`, `__`, and `_var`, but not `_var_`.
   */
  'dummy-variable-rgx'?: string | null;
  /**
   * A list of file patterns to exclude from linting in addition to the files excluded globally (see [`exclude`](#exclude), and [`extend-exclude`](#extend-exclude)).
   *
   * Exclusions are based on globs, and can be either:
   *
   * - Single-path patterns, like `.mypy_cache` (to exclude any directory
   *   named `.mypy_cache` in the tree), `foo.py` (to exclude any file named
   *   `foo.py`), or `foo_*.py` (to exclude any file matching `foo_*.py` ).
   * - Relative patterns, like `directory/foo.py` (to exclude that specific
   *   file) or `directory/*.py` (to exclude any Python files in
   *   `directory`). Note that these paths are relative to the project root
   *   (e.g., the directory containing your `pyproject.toml`).
   *
   * For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  exclude?: string[] | null;
  /**
   * Whether to require exact codes to select preview rules. When enabled,
   * preview rules will not be selected by prefixes — the full code of each
   * preview rule will be required to enable the rule.
   */
  'explicit-preview-rules'?: boolean | null;
  /**
   * A list of rule codes or prefixes to consider fixable, in addition to those
   * specified by [`fixable`](#lint_fixable).
   */
  'extend-fixable'?: RuleSelector[] | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes to ignore, in addition to those
   * specified by `ignore`.
   */
  'extend-ignore'?: RuleSelector[] | null;
  /**
   * A list of mappings from file pattern to rule codes or prefixes to
   * exclude, in addition to any rules excluded by [`per-file-ignores`](#lint_per-file-ignores).
   */
  'extend-per-file-ignores'?: {
    [k: string]: RuleSelector[] | undefined;
  } | null;
  /**
   * A list of rule codes or prefixes for which unsafe fixes should be considered
   * safe.
   */
  'extend-safe-fixes'?: RuleSelector[] | null;
  /**
   * A list of rule codes or prefixes to enable, in addition to those
   * specified by [`select`](#lint_select).
   */
  'extend-select'?: RuleSelector[] | null;
  /**
   * @deprecated
   * A list of rule codes or prefixes to consider non-auto-fixable, in addition to those
   * specified by [`unfixable`](#lint_unfixable).
   */
  'extend-unfixable'?: RuleSelector[] | null;
  /**
   * A list of rule codes or prefixes for which safe fixes should be considered
   * unsafe.
   */
  'extend-unsafe-fixes'?: RuleSelector[] | null;
  /**
   * A list of rule codes or prefixes that are unsupported by Ruff, but should be
   * preserved when (e.g.) validating `# noqa` directives. Useful for
   * retaining `# noqa` directives that cover plugins not yet implemented
   * by Ruff.
   */
  external?: string[] | null;
  /**
   * A list of rule codes or prefixes to consider fixable. By default,
   * all rules are considered fixable.
   */
  fixable?: RuleSelector[] | null;
  /**
   * Options for the `flake8-annotations` plugin.
   */
  'flake8-annotations'?: Flake8AnnotationsOptions | null;
  /**
   * Options for the `flake8-bandit` plugin.
   */
  'flake8-bandit'?: Flake8BanditOptions | null;
  /**
   * Options for the `flake8-boolean-trap` plugin.
   */
  'flake8-boolean-trap'?: Flake8BooleanTrapOptions | null;
  /**
   * Options for the `flake8-bugbear` plugin.
   */
  'flake8-bugbear'?: Flake8BugbearOptions | null;
  /**
   * Options for the `flake8-builtins` plugin.
   */
  'flake8-builtins'?: Flake8BuiltinsOptions | null;
  /**
   * Options for the `flake8-comprehensions` plugin.
   */
  'flake8-comprehensions'?: Flake8ComprehensionsOptions | null;
  /**
   * Options for the `flake8-copyright` plugin.
   */
  'flake8-copyright'?: Flake8CopyrightOptions | null;
  /**
   * Options for the `flake8-errmsg` plugin.
   */
  'flake8-errmsg'?: Flake8ErrMsgOptions | null;
  /**
   * Options for the `flake8-gettext` plugin.
   */
  'flake8-gettext'?: Flake8GetTextOptions | null;
  /**
   * Options for the `flake8-implicit-str-concat` plugin.
   */
  'flake8-implicit-str-concat'?: Flake8ImplicitStrConcatOptions | null;
  /**
   * Options for the `flake8-import-conventions` plugin.
   */
  'flake8-import-conventions'?: Flake8ImportConventionsOptions | null;
  /**
   * Options for the `flake8-pytest-style` plugin.
   */
  'flake8-pytest-style'?: Flake8PytestStyleOptions | null;
  /**
   * Options for the `flake8-quotes` plugin.
   */
  'flake8-quotes'?: Flake8QuotesOptions | null;
  /**
   * Options for the `flake8_self` plugin.
   */
  'flake8-self'?: Flake8SelfOptions | null;
  /**
   * Options for the `flake8-tidy-imports` plugin.
   */
  'flake8-tidy-imports'?: Flake8TidyImportsOptions | null;
  /**
   * Options for the `flake8-type-checking` plugin.
   */
  'flake8-type-checking'?: Flake8TypeCheckingOptions | null;
  /**
   * Options for the `flake8-unused-arguments` plugin.
   */
  'flake8-unused-arguments'?: Flake8UnusedArgumentsOptions | null;
  /**
   * Whether to allow rules to add `from __future__ import annotations` in cases where this would
   * simplify a fix or enable a new diagnostic.
   *
   * For example, `TC001`, `TC002`, and `TC003` can move more imports into `TYPE_CHECKING` blocks
   * if `__future__` annotations are enabled.
   */
  'future-annotations'?: boolean | null;
  /**
   * A list of rule codes or prefixes to ignore. Prefixes can specify exact
   * rules (like `F841`), entire categories (like `F`), or anything in
   * between.
   *
   * When breaking ties between enabled and disabled rules (via `select` and
   * `ignore`, respectively), more specific prefixes override less
   * specific prefixes. `ignore` takes precedence over `select` if the same
   * prefix appears in both.
   */
  ignore?: RuleSelector[] | null;
  /**
   * @deprecated
   * Avoid automatically removing unused imports in `__init__.py` files. Such
   * imports will still be flagged, but with a dedicated message suggesting
   * that the import is either added to the module's `__all__` symbol, or
   * re-exported with a redundant alias (e.g., `import os as os`).
   *
   * This option is enabled by default, but you can opt-in to removal of imports
   * via an unsafe fix.
   */
  'ignore-init-module-imports'?: boolean | null;
  /**
   * Options for the `isort` plugin.
   */
  isort?: IsortOptions | null;
  /**
   * A list of objects that should be treated equivalently to a
   * `logging.Logger` object.
   *
   * This is useful for ensuring proper diagnostics (e.g., to identify
   * `logging` deprecations and other best-practices) for projects that
   * re-export a `logging.Logger` object from a common module.
   *
   * For example, if you have a module `logging_setup.py` with the following
   * contents:
   * ```python
   * import logging
   *
   * logger = logging.getLogger(__name__)
   * ```
   *
   * Adding `"logging_setup.logger"` to `logger-objects` will ensure that
   * `logging_setup.logger` is treated as a `logging.Logger` object when
   * imported from other modules (e.g., `from logging_setup import logger`).
   */
  'logger-objects'?: string[] | null;
  /**
   * Options for the `mccabe` plugin.
   */
  mccabe?: McCabeOptions | null;
  /**
   * Options for the `pep8-naming` plugin.
   */
  'pep8-naming'?: Pep8NamingOptions | null;
  /**
   * A list of mappings from file pattern to rule codes or prefixes to
   * exclude, when considering any matching files. An initial '!' negates
   * the file pattern.
   */
  'per-file-ignores'?: {
    [k: string]: RuleSelector[] | undefined;
  } | null;
  /**
   * Whether to enable preview mode. When preview mode is enabled, Ruff will
   * use unstable rules and fixes.
   */
  preview?: boolean | null;
  /**
   * Options for the `pycodestyle` plugin.
   */
  pycodestyle?: PycodestyleOptions | null;
  /**
   * Options for the `pydoclint` plugin.
   */
  pydoclint?: PydoclintOptions | null;
  /**
   * Options for the `pydocstyle` plugin.
   */
  pydocstyle?: PydocstyleOptions | null;
  /**
   * Options for the `pyflakes` plugin.
   */
  pyflakes?: PyflakesOptions | null;
  /**
   * Options for the `pylint` plugin.
   */
  pylint?: PylintOptions | null;
  /**
   * Options for the `pyupgrade` plugin.
   */
  pyupgrade?: PyUpgradeOptions | null;
  /**
   * Options for the `ruff` plugin
   */
  ruff?: RuffOptions | null;
  /**
   * A list of rule codes or prefixes to enable. Prefixes can specify exact
   * rules (like `F841`), entire categories (like `F`), or anything in
   * between.
   *
   * When breaking ties between enabled and disabled rules (via `select` and
   * `ignore`, respectively), more specific prefixes override less
   * specific prefixes. `ignore` takes precedence over `select` if the
   * same prefix appears in both.
   */
  select?: RuleSelector[] | null;
  /**
   * A list of task tags to recognize (e.g., "TODO", "FIXME", "XXX").
   *
   * Comments starting with these tags will be ignored by commented-out code
   * detection (`ERA`), and skipped by line-length rules (`E501`) if
   * [`ignore-overlong-task-comments`](#lint_pycodestyle_ignore-overlong-task-comments) is set to `true`.
   */
  'task-tags'?: string[] | null;
  /**
   * Whether to allow imports from the third-party `typing_extensions` module for Python versions
   * before a symbol was added to the first-party `typing` module.
   *
   * Many rules try to import symbols from the `typing` module but fall back to
   * `typing_extensions` for earlier versions of Python. This option can be used to disable this
   * fallback behavior in cases where `typing_extensions` is not installed.
   */
  'typing-extensions'?: boolean | null;
  /**
   * A list of modules whose exports should be treated equivalently to
   * members of the `typing` module.
   *
   * This is useful for ensuring proper type annotation inference for
   * projects that re-export `typing` and `typing_extensions` members
   * from a compatibility module. If omitted, any members imported from
   * modules apart from `typing` and `typing_extensions` will be treated
   * as ordinary Python objects.
   */
  'typing-modules'?: string[] | null;
  /**
   * A list of rule codes or prefixes to consider non-fixable.
   */
  unfixable?: RuleSelector[] | null;
}
/**
 * Options for the `mccabe` plugin.
 */
export interface McCabeOptions {
  /**
   * The maximum McCabe complexity to allow before triggering `C901` errors.
   */
  'max-complexity'?: number | null;
}
/**
 * Options for the `pep8-naming` plugin.
 */
export interface Pep8NamingOptions {
  /**
   * A list of decorators that, when applied to a method, indicate that the
   * method should be treated as a class method (in addition to the builtin
   * `@classmethod`).
   *
   * For example, Ruff will expect that any method decorated by a decorator
   * in this list takes a `cls` argument as its first argument.
   *
   * Expects to receive a list of fully-qualified names (e.g., `pydantic.validator`,
   * rather than `validator`) or alternatively a plain name which is then matched against
   * the last segment in case the decorator itself consists of a dotted name.
   */
  'classmethod-decorators'?: string[] | null;
  /**
   * Additional names (or patterns) to ignore when considering `pep8-naming` violations,
   * in addition to those included in [`ignore-names`](#lint_pep8-naming_ignore-names).
   *
   * Supports glob patterns. For example, to ignore all names starting with `test_`
   * or ending with `_test`, you could use `ignore-names = ["test_*", "*_test"]`.
   * For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'extend-ignore-names'?: string[] | null;
  /**
   * A list of names (or patterns) to ignore when considering `pep8-naming` violations.
   *
   * Supports glob patterns. For example, to ignore all names starting with `test_`
   * or ending with `_test`, you could use `ignore-names = ["test_*", "*_test"]`.
   * For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'ignore-names'?: string[] | null;
  /**
   * A list of decorators that, when applied to a method, indicate that the
   * method should be treated as a static method (in addition to the builtin
   * `@staticmethod`).
   *
   * For example, Ruff will expect that any method decorated by a decorator
   * in this list has no `self` or `cls` argument.
   *
   * Expects to receive a list of fully-qualified names (e.g., `belay.Device.teardown`,
   * rather than `teardown`) or alternatively a plain name which is then matched against
   * the last segment in case the decorator itself consists of a dotted name.
   */
  'staticmethod-decorators'?: string[] | null;
}
/**
 * Options for the `pycodestyle` plugin.
 */
export interface PycodestyleOptions {
  /**
   * Whether line-length violations (`E501`) should be triggered for
   * comments starting with [`task-tags`](#lint_task-tags) (by default: "TODO", "FIXME",
   * and "XXX").
   */
  'ignore-overlong-task-comments'?: boolean | null;
  /**
   * The maximum line length to allow for [`doc-line-too-long`](https://docs.astral.sh/ruff/rules/doc-line-too-long/) violations within
   * documentation (`W505`), including standalone comments. By default,
   * this is set to `null` which disables reporting violations.
   *
   * The length is determined by the number of characters per line, except for lines containing Asian characters or emojis.
   * For these lines, the [unicode width](https://unicode.org/reports/tr11/) of each character is added up to determine the length.
   *
   * See the [`doc-line-too-long`](https://docs.astral.sh/ruff/rules/doc-line-too-long/) rule for more information.
   */
  'max-doc-length'?: LineLength | null;
  /**
   * The maximum line length to allow for [`line-too-long`](https://docs.astral.sh/ruff/rules/line-too-long/) violations. By default,
   * this is set to the value of the [`line-length`](#line-length) option.
   *
   * Use this option when you want to detect extra-long lines that the formatter can't automatically split by setting
   * `pycodestyle.line-length` to a value larger than [`line-length`](#line-length).
   *
   * ```toml
   * # The formatter wraps lines at a length of 88.
   * line-length = 88
   *
   * [pycodestyle]
   * # E501 reports lines that exceed the length of 100.
   * max-line-length = 100
   * ```
   *
   * The length is determined by the number of characters per line, except for lines containing East Asian characters or emojis.
   * For these lines, the [unicode width](https://unicode.org/reports/tr11/) of each character is added up to determine the length.
   *
   * See the [`line-too-long`](https://docs.astral.sh/ruff/rules/line-too-long/) rule for more information.
   */
  'max-line-length'?: LineLength | null;
}
/**
 * Options for the `pydoclint` plugin.
 */
export interface PydoclintOptions {
  /**
   * Skip docstrings which fit on a single line.
   *
   * Note: The corresponding setting in `pydoclint`
   * is named `skip-checking-short-docstrings`.
   */
  'ignore-one-line-docstrings'?: boolean | null;
}
/**
 * Options for the `pydocstyle` plugin.
 */
export interface PydocstyleOptions {
  /**
   * Whether to use Google-style, NumPy-style conventions, or the [PEP 257](https://peps.python.org/pep-0257/)
   * defaults when analyzing docstring sections.
   *
   * Enabling a convention will disable all rules that are not included in
   * the specified convention. As such, the intended workflow is to enable a
   * convention and then selectively enable or disable any additional rules
   * on top of it.
   *
   * For example, to use Google-style conventions but avoid requiring
   * documentation for every function parameter:
   *
   * ```toml
   * [tool.ruff.lint]
   * # Enable all `pydocstyle` rules, limiting to those that adhere to the
   * # Google convention via `convention = "google"`, below.
   * select = ["D"]
   *
   * # On top of the Google convention, disable `D417`, which requires
   * # documentation for every function parameter.
   * ignore = ["D417"]
   *
   * [tool.ruff.lint.pydocstyle]
   * convention = "google"
   * ```
   *
   * To enable an additional rule that's excluded from the convention,
   * select the desired rule via its fully qualified rule code (e.g.,
   * `D400` instead of `D4` or `D40`):
   *
   * ```toml
   * [tool.ruff.lint]
   * # Enable D400 on top of the Google convention.
   * extend-select = ["D400"]
   *
   * [tool.ruff.lint.pydocstyle]
   * convention = "google"
   * ```
   */
  convention?: Convention | null;
  /**
   * Ignore docstrings for functions or methods decorated with the
   * specified fully-qualified decorators.
   */
  'ignore-decorators'?: string[] | null;
  /**
   * If set to `true`, ignore missing documentation for `*args` and `**kwargs` parameters.
   */
  'ignore-var-parameters'?: boolean | null;
  /**
   * A list of decorators that, when applied to a method, indicate that the
   * method should be treated as a property (in addition to the builtin
   * `@property` and standard-library `@functools.cached_property`).
   *
   * For example, Ruff will expect that any method decorated by a decorator
   * in this list can use a non-imperative summary line.
   */
  'property-decorators'?: string[] | null;
}
/**
 * Options for the `pyflakes` plugin.
 */
export interface PyflakesOptions {
  /**
   * A list of modules to ignore when considering unused imports.
   *
   * Used to prevent violations for specific modules that are known to have side effects on
   * import (e.g., `hvplot.pandas`).
   *
   * Modules in this list are expected to be fully-qualified names (e.g., `hvplot.pandas`). Any
   * submodule of a given module will also be ignored (e.g., given `hvplot`, `hvplot.pandas`
   * will also be ignored).
   */
  'allowed-unused-imports'?: string[] | null;
  /**
   * Additional functions or classes to consider generic, such that any
   * subscripts should be treated as type annotation (e.g., `ForeignKey` in
   * `django.db.models.ForeignKey["User"]`.
   *
   * Expects to receive a list of fully-qualified names (e.g., `django.db.models.ForeignKey`,
   * rather than `ForeignKey`).
   */
  'extend-generics'?: string[] | null;
}
/**
 * Options for the `pylint` plugin.
 */
export interface PylintOptions {
  /**
   * Dunder methods name to allow, in addition to the default set from the
   * Python standard library (see `PLW3201`).
   */
  'allow-dunder-method-names'?: string[] | null;
  /**
   * Constant types to ignore when used as "magic values" (see `PLR2004`).
   */
  'allow-magic-value-types'?: ConstantType[] | null;
  /**
   * Maximum number of arguments allowed for a function or method definition
   * (see `PLR0913`).
   */
  'max-args'?: number | null;
  /**
   * Maximum number of Boolean expressions allowed within a single `if` statement
   * (see `PLR0916`).
   */
  'max-bool-expr'?: number | null;
  /**
   * Maximum number of branches allowed for a function or method body (see `PLR0912`).
   */
  'max-branches'?: number | null;
  /**
   * Maximum number of local variables allowed for a function or method body (see `PLR0914`).
   */
  'max-locals'?: number | null;
  /**
   * Maximum number of nested blocks allowed within a function or method body
   * (see `PLR1702`).
   */
  'max-nested-blocks'?: number | null;
  /**
   * Maximum number of positional arguments allowed for a function or method definition
   * (see `PLR0917`).
   *
   * If not specified, defaults to the value of `max-args`.
   */
  'max-positional-args'?: number | null;
  /**
   * Maximum number of public methods allowed for a class (see `PLR0904`).
   */
  'max-public-methods'?: number | null;
  /**
   * Maximum number of return statements allowed for a function or method
   * body (see `PLR0911`)
   */
  'max-returns'?: number | null;
  /**
   * Maximum number of statements allowed for a function or method body (see `PLR0915`).
   */
  'max-statements'?: number | null;
}
/**
 * Options for the `pyupgrade` plugin.
 */
export interface PyUpgradeOptions {
  /**
   * Whether to avoid [PEP 585](https://peps.python.org/pep-0585/) (`List[int]` -> `list[int]`) and [PEP 604](https://peps.python.org/pep-0604/)
   * (`Union[str, int]` -> `str | int`) rewrites even if a file imports
   * `from __future__ import annotations`.
   *
   * This setting is only applicable when the target Python version is below
   * 3.9 and 3.10 respectively, and is most commonly used when working with
   * libraries like Pydantic and FastAPI, which rely on the ability to parse
   * type annotations at runtime. The use of `from __future__ import annotations`
   * causes Python to treat the type annotations as strings, which typically
   * allows for the use of language features that appear in later Python
   * versions but are not yet supported by the current version (e.g., `str |
   * int`). However, libraries that rely on runtime type annotations will
   * break if the annotations are incompatible with the current Python
   * version.
   *
   * For example, while the following is valid Python 3.8 code due to the
   * presence of `from __future__ import annotations`, the use of `str | int`
   * prior to Python 3.10 will cause Pydantic to raise a `TypeError` at
   * runtime:
   *
   * ```python
   * from __future__ import annotations
   *
   * import pydantic
   *
   * class Foo(pydantic.BaseModel):
   *     bar: str | int
   * ```
   */
  'keep-runtime-typing'?: boolean | null;
}
/**
 * Options for the `ruff` plugin
 */
export interface RuffOptions {
  /**
   * @deprecated
   * A list of callable names, whose result may be safely passed into
   * [`markupsafe.Markup`](https://markupsafe.palletsprojects.com/en/stable/escaping/#markupsafe.Markup).
   *
   * Expects to receive a list of fully-qualified names (e.g., `bleach.clean`, rather than `clean`).
   *
   * This setting helps you avoid false positives in code like:
   *
   * ```python
   * from bleach import clean
   * from markupsafe import Markup
   *
   * cleaned_markup = Markup(clean(some_user_input))
   * ```
   *
   * Where the use of [`bleach.clean`](https://bleach.readthedocs.io/en/latest/clean.html)
   * usually ensures that there's no XSS vulnerability.
   *
   * Although it is not recommended, you may also use this setting to whitelist other
   * kinds of calls, e.g. calls to i18n translation functions, where how safe that is
   * will depend on the implementation and how well the translations are audited.
   *
   * Another common use-case is to wrap the output of functions that generate markup
   * like [`xml.etree.ElementTree.tostring`](https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.tostring)
   * or template rendering engines where sanitization of potential user input is either
   * already baked in or has to happen before rendering.
   */
  'allowed-markup-calls'?: string[] | null;
  /**
   * @deprecated
   * A list of additional callable names that behave like
   * [`markupsafe.Markup`](https://markupsafe.palletsprojects.com/en/stable/escaping/#markupsafe.Markup).
   *
   * Expects to receive a list of fully-qualified names (e.g., `webhelpers.html.literal`, rather than
   * `literal`).
   */
  'extend-markup-names'?: string[] | null;
  /**
   * Whether to prefer accessing items keyed by tuples with
   * parentheses around the tuple (see `RUF031`).
   */
  'parenthesize-tuple-in-subscript'?: boolean | null;
  /**
   * Whether to require `__init__.py` files to contain no code at all, including imports and
   * docstrings (see `RUF067`).
   */
  'strictly-empty-init-modules'?: boolean | null;
}
