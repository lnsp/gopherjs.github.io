����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �K��runtime/pprofpprofiosync�\
$$ exports $$
pv0
pprofruntime/pprof
	Lookup name  Profile 
name   mu 
Mutexsyncsync
state sema Lockm@   Unlockm@    m    
count      
write   Writerioio 
Write p2nerr6    6  WriteTop<wV
debug 6  <	StartCPUProfile wV 6 	StopCPUProfile    	 WriteHeapProfile wV 6 AA=$packages["io"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["sync"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} C�kC=$pkg.Profile=$newType(0,$kindStruct,"pprof.Profile",true,"runtime/pprof",true,function(name_,mu_,m_,count_,write_){this.$val=this;if(arguments.length===0){this.name="";this.mu=new B.Mutex.ptr(0,0);this.m=false;this.count=$throwNilPointerError;this.write=$throwNilPointerError;return;}this.name=name_;this.mu=mu_;this.m=m_;this.count=count_;this.write=write_;});aH.methods=[{prop:"WriteTo",name:"WriteTo",pkg:"",typ:$funcType([A.Writer,$Int],[$error],false)}];�.C.init("runtime/pprof",[{prop:"name",name:"name",exported:false,typ:$String,tag:""},{prop:"mu",name:"mu",exported:false,typ:B.Mutex,tag:""},{prop:"m",name:"m",exported:false,typ:J,tag:""},{prop:"count",name:"count",exported:false,typ:K,tag:""},{prop:"write",name:"write",exported:false,typ:L,tag:""}]);Profile	io.Writerruntime/pprof.Hruntime/pprof.Iruntime/pprof.Jruntime/pprof.Kruntime/pprof.Lruntime/pprof.Profile
sync.Mutex HH=$ptrType(C);Hruntime/pprof.Profile II=$sliceType($Uintptr);I JJ=$mapType($emptyInterface,I);Jruntime/pprof.I KK=$funcType([],[$Int],false);K L,L=$funcType([A.Writer,$Int],[$error],false);L	io.Writer  (*runtime/pprof.Profile).WriteTo��C.ptr.prototype.WriteTo=function(a,b){var $ptr,a,b,c;   �c=this;  return $ifaceNil;    };C.prototype.WriteTo=function(a,b){return this.$val.WriteTo(a,b);};Profileruntime/pprof.Profile runtime/pprof.StartCPUProfileDMD=function(a){var $ptr,a;  :return $ifaceNil;    };$pkg.StartCPUProfile=D;StartCPUProfileruntime/pprof.StartCPUProfile runtime/pprof.StopCPUProfileE3E=function(){var $ptr;    };$pkg.StopCPUProfile=E;StopCPUProfileruntime/pprof.StopCPUProfile runtime/pprof.WriteHeapProfileFNF=function(a){var $ptr,a;  �return $ifaceNil;    };$pkg.WriteHeapProfile=F;WriteHeapProfileruntime/pprof.WriteHeapProfile runtime/pprof.LookupG@G=function(a){var $ptr,a;  �return H.nil;    };$pkg.Lookup=G;Lookupruntime/pprof.Hruntime/pprof.Lookupruntime/pprof.Profile ��{"Base":464,"Files":[{"Name":"/src/runtime/pprof/pprof.go","Base":1,"Size":462,"Lines":[0,13,14,28,29,38,44,52,54,55,77,91,109,142,160,194,196,197,255,267,269,270,312,324,326,327,351,353,354,397,409,411,412,448,460],"Infos":null}]}
 