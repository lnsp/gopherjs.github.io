t��Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �+���sync/atomicatomicgithub.com/gopherjs/gopherjs/js�!
$$ exports $$
pv0atomicsync/atomic<	AddInt32 addr
delta  	AddInt64 addr

delta
 
 	AddUint32 addr
delta  	AddUint64 addr
delta  	AddUintptr addr
delta  	&CompareAndSwapInt32 addroldnew   	&CompareAndSwapInt64 addr
old
new
   	*CompareAndSwapPointer addr0old0new0   	(CompareAndSwapUint32 addroldnew   	(CompareAndSwapUint64 addroldnew   	*CompareAndSwapUintptr addroldnew   	LoadInt32 addr  	LoadInt64 addr
 
 	LoadPointer addr0 0 	LoadUint32 addr  	LoadUint64 addr  	LoadUintptr addr  	StoreInt32 addrval  	StoreInt64 addr
val
  	StorePointer addr0val0  	StoreUint32 addrval  	StoreUint64 addrval  	StoreUintptr addrval  	SwapInt32 addrnew  	SwapInt64 addr
new
 
 	SwapPointer addr0new0 0 	SwapUint32 addrnew  	SwapUint64 addrnew  	SwapUintptr addrnew  
Value v    Loadv� x   
Storev�x    &A/A=$packages["github.com/gopherjs/gopherjs/js"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AF��AF=$pkg.Value=$newType(0,$kindStruct,"atomic.Value","Value","sync/atomic",function(v_){this.$val=this;if(arguments.length===0){this.v=$ifaceNil;return;}this.v=v_;});��AJ.methods=[{prop:"Load",name:"Load",pkg:"",typ:$funcType([],[$emptyInterface],false)},{prop:"Store",name:"Store",pkg:"",typ:$funcType([$emptyInterface],[],false)}];LAF.init([{prop:"v",name:"v",pkg:"sync/atomic",typ:$emptyInterface,tag:""}]);Valuesync/atomic.AJsync/atomic.Value AG��AG=$pkg.ifaceWords=$newType(0,$kindStruct,"atomic.ifaceWords","ifaceWords","sync/atomic",function(typ_,data_){this.$val=this;if(arguments.length===0){this.typ=0;this.data=0;return;}this.typ=typ_;this.data=data_;});��AG.init([{prop:"typ",name:"typ",pkg:"sync/atomic",typ:$UnsafePointer,tag:""},{prop:"data",name:"data",pkg:"sync/atomic",typ:$UnsafePointer,tag:""}]);
ifaceWordssync/atomic.ifaceWords AJAJ=$ptrType(AF);AJsync/atomic.Value sync/atomic.SwapInt32BnB=function(ad,ae){var $ptr,ad,ae,af;   �af=ad.$get();   �ad.$set(ae);   �return af;    };$pkg.SwapInt32=B;	SwapInt32sync/atomic.SwapInt32 sync/atomic.SwapInt64CnC=function(ad,ae){var $ptr,ad,ae,af;   �af=ad.$get();   �ad.$set(ae);   �return af;    };$pkg.SwapInt64=C;	SwapInt64sync/atomic.SwapInt64 sync/atomic.SwapUint32DoD=function(ad,ae){var $ptr,ad,ae,af;  ?af=ad.$get();  Mad.$set(ae);  Zreturn af;    };$pkg.SwapUint32=D;
SwapUint32sync/atomic.SwapUint32 sync/atomic.SwapUint64EoE=function(ad,ae){var $ptr,ad,ae,af;  �af=ad.$get();  �ad.$set(ae);  �return af;    };$pkg.SwapUint64=E;
SwapUint64sync/atomic.SwapUint64 sync/atomic.SwapUintptrFpF=function(ad,ae){var $ptr,ad,ae,af;  �af=ad.$get();  ad.$set(ae);  return af;    };$pkg.SwapUintptr=F;SwapUintptrsync/atomic.SwapUintptr sync/atomic.SwapPointerGpG=function(ad,ae){var $ptr,ad,ae,af;  saf=ad.$get();  �ad.$set(ae);  �return af;    };$pkg.SwapPointer=G;SwapPointersync/atomic.SwapPointer sync/atomic.CompareAndSwapInt32H��H=function(ad,ae,af){var $ptr,ad,ae,af;    if(ad.$get()===ae){  �ad.$set(af);  �return true;    }  return false;    };$pkg.CompareAndSwapInt32=H;CompareAndSwapInt32sync/atomic.CompareAndSwapInt32 sync/atomic.CompareAndSwapInt64I��I=function(ad,ae,af){var $ptr,ad,ae,af,ag;    if((ag=ad.$get(),(ag.$high===ae.$high&&ag.$low===ae.$low))){  nad.$set(af);  |return true;    }  �return false;    };$pkg.CompareAndSwapInt64=I;CompareAndSwapInt64sync/atomic.CompareAndSwapInt64  sync/atomic.CompareAndSwapUint32J��J=function(ad,ae,af){var $ptr,ad,ae,af;    if(ad.$get()===ae){  �ad.$set(af);  �return true;    }  return false;    };$pkg.CompareAndSwapUint32=J;CompareAndSwapUint32 sync/atomic.CompareAndSwapUint32  sync/atomic.CompareAndSwapUint64K��K=function(ad,ae,af){var $ptr,ad,ae,af,ag;    if((ag=ad.$get(),(ag.$high===ae.$high&&ag.$low===ae.$low))){  tad.$set(af);  �return true;    }  �return false;    };$pkg.CompareAndSwapUint64=K;CompareAndSwapUint64 sync/atomic.CompareAndSwapUint64 !sync/atomic.CompareAndSwapUintptrL��L=function(ad,ae,af){var $ptr,ad,ae,af;    if(ad.$get()===ae){  �ad.$set(af);  return true;    }  return false;    };$pkg.CompareAndSwapUintptr=L;CompareAndSwapUintptr!sync/atomic.CompareAndSwapUintptr !sync/atomic.CompareAndSwapPointerM��M=function(ad,ae,af){var $ptr,ad,ae,af;    if(ad.$get()===ae){  �ad.$set(af);  �return true;    }  �return false;    };$pkg.CompareAndSwapPointer=M;CompareAndSwapPointer!sync/atomic.CompareAndSwapPointer sync/atomic.AddInt32NsN=function(ad,ae){var $ptr,ad,ae,af;  �af=ad.$get()+ae>>0;  ad.$set(af);  return af;    };$pkg.AddInt32=N;AddInt32sync/atomic.AddInt32 sync/atomic.AddUint32OuO=function(ad,ae){var $ptr,ad,ae,af;  Saf=ad.$get()+ae>>>0;  iad.$set(af);  vreturn af;    };$pkg.AddUint32=O;	AddUint32sync/atomic.AddUint32 sync/atomic.AddInt64P��P=function(ad,ae){var $ptr,ad,ae,af,ag;  �ag=(af=ad.$get(),new $Int64(af.$high+ae.$high,af.$low+ae.$low));  �ad.$set(ag);  �return ag;    };$pkg.AddInt64=P;AddInt64sync/atomic.AddInt64 sync/atomic.AddUint64Q��Q=function(ad,ae){var $ptr,ad,ae,af,ag;  ag=(af=ad.$get(),new $Uint64(af.$high+ae.$high,af.$low+ae.$low));  1ad.$set(ag);  >return ag;    };$pkg.AddUint64=Q;	AddUint64sync/atomic.AddUint64 sync/atomic.AddUintptrRvR=function(ad,ae){var $ptr,ad,ae,af;  �af=ad.$get()+ae>>>0;  �ad.$set(af);  �return af;    };$pkg.AddUintptr=R;
AddUintptrsync/atomic.AddUintptr sync/atomic.LoadInt32SIS=function(ad){var $ptr,ad;  �return ad.$get();    };$pkg.LoadInt32=S;	LoadInt32sync/atomic.LoadInt32 sync/atomic.LoadInt64TIT=function(ad){var $ptr,ad;  return ad.$get();    };$pkg.LoadInt64=T;	LoadInt64sync/atomic.LoadInt64 sync/atomic.LoadUint32UJU=function(ad){var $ptr,ad;  Hreturn ad.$get();    };$pkg.LoadUint32=U;
LoadUint32sync/atomic.LoadUint32 sync/atomic.LoadUint64VJV=function(ad){var $ptr,ad;  �return ad.$get();    };$pkg.LoadUint64=V;
LoadUint64sync/atomic.LoadUint64 sync/atomic.LoadUintptrWKW=function(ad){var $ptr,ad;  �return ad.$get();    };$pkg.LoadUintptr=W;LoadUintptrsync/atomic.LoadUintptr sync/atomic.LoadPointerXKX=function(ad){var $ptr,ad;  	return ad.$get();    };$pkg.LoadPointer=X;LoadPointersync/atomic.LoadPointer sync/atomic.StoreInt32YKY=function(ad,ae){var $ptr,ad,ae;  	?ad.$set(ae);    };$pkg.StoreInt32=Y;
StoreInt32sync/atomic.StoreInt32 sync/atomic.StoreInt64ZKZ=function(ad,ae){var $ptr,ad,ae;  	yad.$set(ae);    };$pkg.StoreInt64=Z;
StoreInt64sync/atomic.StoreInt64 sync/atomic.StoreUint32AANAA=function(ad,ae){var $ptr,ad,ae;  	�ad.$set(ae);    };$pkg.StoreUint32=AA;StoreUint32sync/atomic.StoreUint32 sync/atomic.StoreUint64ABNAB=function(ad,ae){var $ptr,ad,ae;  	�ad.$set(ae);    };$pkg.StoreUint64=AB;StoreUint64sync/atomic.StoreUint64 sync/atomic.StoreUintptrACOAC=function(ad,ae){var $ptr,ad,ae;  
3ad.$set(ae);    };$pkg.StoreUintptr=AC;StoreUintptrsync/atomic.StoreUintptr sync/atomic.StorePointerADOAD=function(ad,ae){var $ptr,ad,ae;  
�ad.$set(ae);    };$pkg.StorePointer=AD;StorePointersync/atomic.StorePointer (*sync/atomic.Value).Load��AF.ptr.prototype.Load=function(){var $ptr,ad,ae;ad=$ifaceNil;  
�ae=this;    ad=ae.v;return ad;    };AF.prototype.Load=function(){return this.$val.Load();};Valuesync/atomic.Value (*sync/atomic.Value).Store��AF.ptr.prototype.Store=function(ad){var $ptr,ad,ae;  
�ae=this;    if($interfaceIsEqual(ad,$ifaceNil)){   $panic(new $String("sync/atomic: store of nil value into Value"));    }    if(!($interfaceIsEqual(ae.v,$ifaceNil))&&!(ad.constructor===ae.v.constructor)){  �$panic(new $String("sync/atomic: store of inconsistently typed value into Value"));    }  �ae.v=ad;    };AF.prototype.Store=function(ad){return this.$val.Store(ad);};Valuesync/atomic.Value sync/atomic.panic64AEtAE=function(){var $ptr;  !�$panic(new $String("sync/atomic: broken 64-bit atomic operations (buggy QEMU)"));    };panic64sync/atomic.panic64 sync/atomic.runtime_procPinAHWAH=function(){$panic("Native function not implemented: sync/atomic.runtime_procPin");};runtime_procPinsync/atomic.runtime_procPin sync/atomic.runtime_procUnpinAIYAI=function(){$panic("Native function not implemented: sync/atomic.runtime_procUnpin");};runtime_procUnpinsync/atomic.runtime_procUnpin �	{"Base":11174,"Files":[{"Name":"/tmp/tempgopathforplaygroundupdate/src/github.com/gopherjs/gopherjs/compiler/natives/sync/atomic/atomic.go","Base":1,"Size":3060,"Lines":[0,13,14,29,30,39,49,50,85,87,88,135,149,162,174,176,177,224,238,251,263,265,266,317,331,344,356,358,359,410,424,437,449,451,452,507,521,534,546,548,549,625,639,652,664,666,667,728,747,761,775,778,792,794,795,856,875,889,903,906,920,922,923,987,1006,1020,1034,1037,1051,1053,1054,1118,1137,1151,1165,1168,1182,1184,1185,1252,1271,1285,1299,1302,1316,1318,1319,1400,1419,1433,1447,1450,1464,1466,1467,1515,1537,1550,1562,1564,1565,1617,1639,1652,1664,1666,1667,1715,1737,1750,1762,1764,1765,1817,1839,1852,1864,1866,1867,1923,1945,1958,1970,1972,1973,2009,2023,2025,2026,2062,2076,2078,2079,2118,2132,2134,2135,2174,2188,2190,2191,2233,2247,2249,2250,2306,2320,2322,2323,2365,2378,2380,2381,2423,2436,2438,2439,2484,2497,2499,2500,2545,2558,2560,2561,2609,2622,2624,2625,2687,2700,2702,2703,2744,2756,2758,2759,2798,2813,2867,2870,2975,3046,3049,3058],"Infos":null},{"Name":"/usr/local/go/src/sync/atomic/doc.go","Base":3062,"Size":5655,"Lines":[0,56,110,160,161,223,278,281,341,414,475,509,549,552,625,643,646,661,676,690,693,763,806,809,830,846,862,867,883,886,957,975,978,996,1012,1015,1085,1148,1166,1169,1184,1185,1194,1204,1206,1207,1305,1308,1403,1406,1489,1566,1638,1657,1658,1742,1793,1794,1878,1929,1930,2015,2070,2071,2156,2211,2212,2298,2357,2358,2444,2524,2525,2608,2677,2678,2761,2830,2831,2915,2987,2988,3072,3144,3145,3231,3306,3307,3400,3489,3490,3560,3612,3613,3684,3774,3838,3894,3895,3965,4017,4018,4089,4179,4243,4299,4300,4372,4432,4433,4470,4510,4511,4548,4588,4589,4627,4670,4671,4709,4752,4753,4792,4838,4839,4878,4938,4939,4987,5027,5028,5076,5116,5117,5166,5209,5210,5259,5302,5303,5353,5399,5400,5450,5510,5511,5568,5585,5653],"Infos":null},{"Name":"/usr/local/go/src/sync/atomic/value.go","Base":8718,"Size":2455,"Lines":[0,55,109,159,160,175,176,185,195,197,198,274,333,386,445,465,480,482,483,537,562,583,604,606,607,663,732,773,813,842,890,926,939,942,973,1014,1028,1044,1052,1054,1055,1098,1181,1242,1281,1296,1350,1353,1393,1434,1441,1471,1489,1525,1583,1642,1692,1713,1787,1811,1824,1829,1857,1892,1925,1948,1958,1962,1997,2034,2092,2132,2144,2148,2207,2228,2300,2304,2338,2347,2350,2352,2353,2407,2430],"Infos":null}]}
 