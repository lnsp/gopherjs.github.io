t��Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �����path/filepathfilepathbyteserrorsosruntimesortstringsunicode/utf8��
$$ exports $$
pv0filepathpath/filepath.	Abs path    6 	Base path    	
Clean path    	Dir path    ErrBadPattern6	EvalSymlinks path    6 	Ext path    	FromSlash path    	Glob pattern matches err6 	HasPrefix p prefix    	
IsAbs path    	Join elem   ListSeparator&!t	
Match pattern name matched err6 	Rel basepath targpath    6 Separator&!^SkipDir6	
Split path dir file  	SplitList path    	ToSlash path    	VolumeName path    	Walk root walkFnWalkFunc  path infoFileInfoosos 
IsDir     ModTime   Timetimetimesec
 nsec locLocationname  zonezonename  offset 
isDST    txzoneTranswhen
 
index 
isstd  
isutc    cacheStart
 cacheEnd
 cacheZonez getlt  t Stringlt    lookupltsec

name offset
isDST 
start
end
 lookupFirstZonelt   firstZoneUsedlt    lookupNameltname unix
offset
isDST ok   TStringtn    Formattnlayout    AppendFormattnb2layout  2 
Aftertnun   Beforetnun   
Equaltnun   IsZerotn    abstn   locabstn name offsetabs Datetn year
month
MonthStringm�    day Yeartn   
Monthtn  � Daytn   Weekdaytn  WeekdayStringd�     ISOWeektn yearweek 
Clocktn hourminsec Hourtn   Minutetn   Secondtn   Nanosecondtn   YearDaytn   AddtndDuration

Stringd�    Nanosecondsd�  
 Secondsd�   Minutesd�   
Hoursd�    n Subtnun � AddDatetn
yearsmonthsdays n datetnfull year
month�dayyday UTCtn  n 
Localtn  n Intnloct n Locationtn  t Zonetn name offset Unixtn  
 UnixNanotn  
 MarshalBinarytn  2 6 UnmarshalBinarytndata2 6 GobEncodetn  2 6 GobDecodetndata2 6 MarshalJSONtn  2 6 UnmarshalJSONtndata2err6 MarshalTexttn  2 6 UnmarshalTexttndata2err6 Truncatetnd� n 
Roundtnd� n  Mode   FileModeStringm�    
IsDirm�    IsRegularm�    Permm�  �  Name     Size   
 Sys       err6 6   6 b5GG=$packages["bytes"];a    $r=G.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["errors"];a    $r=A.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["os"];a    $r=B.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["runtime"];a    $r=C.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["sort"];a    $r=D.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["strings"];a    $r=E.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["unicode/utf8"];a    $r=F.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} O�QO=$pkg.lazybuf=$newType(0,$kindStruct,"filepath.lazybuf","lazybuf","path/filepath",function(path_,buf_,w_,volAndPath_,volLen_){this.$val=this;if(arguments.length===0){this.path="";this.buf=AR.nil;this.w=0;this.volAndPath="";this.volLen=0;return;}this.path=path_;this.buf=buf_;this.w=w_;this.volAndPath=volAndPath_;this.volLen=volLen_;});�	AS.methods=[{prop:"index",name:"index",pkg:"path/filepath",typ:$funcType([$Int],[$Uint8],false)},{prop:"append",name:"append",pkg:"path/filepath",typ:$funcType([$Uint8],[],false)},{prop:"string",name:"string",pkg:"path/filepath",typ:$funcType([],[$String],false)}];�LO.init([{prop:"path",name:"path",pkg:"path/filepath",typ:$String,tag:""},{prop:"buf",name:"buf",pkg:"path/filepath",typ:AR,tag:""},{prop:"w",name:"w",pkg:"path/filepath",typ:$Int,tag:""},{prop:"volAndPath",name:"volAndPath",pkg:"path/filepath",typ:$String,tag:""},{prop:"volLen",name:"volLen",pkg:"path/filepath",typ:$Int,tag:""}]);lazybufpath/filepath.ARpath/filepath.ASpath/filepath.lazybuf AA[AA=$pkg.WalkFunc=$newType(4,$kindFunc,"filepath.WalkFunc","WalkFunc","path/filepath",null);4AA.init([$String,B.FileInfo,$error],[$error],false);WalkFuncos.FileInfopath/filepath.WalkFunc AQAQ=$sliceType($String);AQ ARAR=$sliceType($Uint8);AR ASAS=$ptrType(O);ASpath/filepath.lazybuf ErrBadPattern SkipDir ABlstat 9    $pkg.ErrBadPattern=A.New("syntax error in pattern");
errors.Newpath/filepath.ErrBadPattern /    $pkg.SkipDir=A.New("skip this directory");
errors.Newpath/filepath.SkipDir     AB=B.Lstat;lstatos.Lstatpath/filepath.lstat path/filepath.MatchH��H=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;c=false;d=$ifaceNil;  Pattern:while(true){if(!(a.length>0)){break;}  8e=false;  Hf="";  Wg=I(a);e=g[0];f=g[1];a=g[2];    if(e&&f===""){    h=E.Index(b,"/")<0;i=$ifaceNil;c=h;d=i;return[c,d];    }  @j=J(f,b);k=j[0];l=j[1];m=j[2];    if(l&&((k.length===0)||a.length>0)){  3b=k;  ?continue;    }    if(!($interfaceIsEqual(m,$ifaceNil))){    n=false;o=m;c=n;d=o;return[c,d];    }    if(e){  �p=0;while(true){if(!(p<b.length&&!((b.charCodeAt(p)===47)))){break;}  q=J(f,b.substring((p+1>>0)));r=q[0];s=q[1];t=q[2];    if(s){    if((a.length===0)&&r.length>0){  �p=p+(1)>>0;    continue;    }  �b=r;  �continue Pattern;    }    if(!($interfaceIsEqual(t,$ifaceNil))){    u=false;v=t;c=u;d=v;return[c,d];    }  �p=p+(1)>>0;    }    }    w=false;x=$ifaceNil;c=w;d=x;return[c,d];    }    y=b.length===0;z=$ifaceNil;c=y;d=z;return[c,d];    };$pkg.Match=H;Matchpath/filepath.Matchpath/filepath.matchChunkpath/filepath.scanChunkstrings.Index path/filepath.scanChunkI�/I=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j;b=false;c="";d="";  
 while(true){if(!(a.length>0&&(a.charCodeAt(0)===42))){break;}  
.a=a.substring(1);  
Fb=true;    }  
Ve=false;  
lf=0;  
}f=0;Scan:while(true){if(!(f<a.length)){break;}  
�g=a.charCodeAt(f);  
�if(g===92){    if((f+1>>0)<a.length){  9f=f+(1)>>0;    }  J}else if(g===91){  We=true;  h}else if(g===93){  ue=false;  �}else if(g===42){    if(!e){  �break Scan;    }    }  
�f=f+(1)>>0;    }    h=b;i=a.substring(0,f);j=a.substring(f);b=h;c=i;d=j;return[b,c,d];    };	scanChunkpath/filepath.scanChunk path/filepath.matchChunkJ�J=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c="";d=false;e=$ifaceNil;  �while(true){if(!(a.length>0)){break;}    if(b.length===0){  return[c,d,e];    }  +f=a.charCodeAt(0);  ?if(f===91){  bg=F.DecodeRuneInString(b);h=g[0];i=g[1];  �b=b.substring(i);  �a=a.substring(1);    if(a.length===0){  .e=$pkg.ErrBadPattern;  Freturn[c,d,e];    }  lj=a.charCodeAt(0)===94;    if(j){  �a=a.substring(1);    }  �k=false;  �l=0;  �while(true){    if(a.length>0&&(a.charCodeAt(0)===93)&&l>0){  1a=a.substring(1);  Hbreak;    }  \m=0;n=0;o=m;p=n;  oq=K(a);o=q[0];a=q[1];e=q[2];    if(!($interfaceIsEqual(e,$ifaceNil))){  �return[c,d,e];    }  �p=o;    if(a.charCodeAt(0)===45){  �r=K(a.substring(1));p=r[0];a=r[1];e=r[2];    if(!($interfaceIsEqual(e,$ifaceNil))){  return[c,d,e];    }    }    if(o<=h&&h<=p){  Gk=true;    }  ^l=l+(1)>>0;    }    if(k===j){  �return[c,d,e];    }  �}else if(f===63){    if(b.charCodeAt(0)===47){  �return[c,d,e];    }  �s=F.DecodeRuneInString(b);t=s[1];  �b=b.substring(t);  a=a.substring(1);  }else if(f===92){  Ha=a.substring(1);    if(a.length===0){  xe=$pkg.ErrBadPattern;  �return[c,d,e];    }    if(!((a.charCodeAt(0)===b.charCodeAt(0)))){  �return[c,d,e];    }  �b=b.substring(1);  �a=a.substring(1);    }else{    if(!((a.charCodeAt(0)===b.charCodeAt(0)))){  �return[c,d,e];    }  �b=b.substring(1);  �a=a.substring(1);    }    }    u=b;v=true;w=$ifaceNil;c=u;d=v;e=w;return[c,d,e];    };
matchChunkpath/filepath.ErrBadPatternpath/filepath.getEscpath/filepath.matchChunkunicode/utf8.DecodeRuneInString path/filepath.getEscK�K=function(a){var $ptr,a,b,c,d,e,f;b=0;c="";d=$ifaceNil;    if((a.length===0)||(a.charCodeAt(0)===45)||(a.charCodeAt(0)===93)){  �d=$pkg.ErrBadPattern;  
return[b,c,d];    }    if((a.charCodeAt(0)===92)&&true){  Ja=a.substring(1);    if(a.length===0){  vd=$pkg.ErrBadPattern;  �return[b,c,d];    }    }  �e=F.DecodeRuneInString(a);b=e[0];f=e[1];    if((b===65533)&&(f===1)){  �d=$pkg.ErrBadPattern;    }  c=a.substring(f);    if(c.length===0){  -d=$pkg.ErrBadPattern;    }  Ereturn[b,c,d];    };getEscpath/filepath.ErrBadPatternpath/filepath.getEscunicode/utf8.DecodeRuneInString path/filepath.GlobL��L=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=AQ.nil;c=$ifaceNil;    if(!N(a)){  Ad=B.Lstat(a);c=d[1];    if(!($interfaceIsEqual(c,$ifaceNil))){    e=AQ.nil;f=$ifaceNil;b=e;c=f;return[b,c];    }    g=new AQ([a]);h=$ifaceNil;b=g;c=h;return[b,c];    }  �i=T(a);j=i[0];k=i[1];  �l=j;  �if(l===""){  �j=".";  �}else if(l==="/"){    }else{  j=j.substring(0,(j.length-1>>0));    }  Vif(!N(j)){$s=1;continue;}$s=2;continue;    case 1:    n=M(j,k,AQ.nil);$s=3;case 3:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}m=n;b=m[0];c=m[1];return[b,c];    case 2:  �o=AQ.nil;  �q=L(j);$s=4;case 4:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}p=q;o=p[0];c=p[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  �return[b,c];    }  �r=o;s=0;case 5:if(!(s<r.$length)){$s=6;continue;}t=((s<0||s>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+s]);  �v=M(t,k,b);$s=7;case 7:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}u=v;b=u[0];c=u[1];    if(!($interfaceIsEqual(c,$ifaceNil))){   return[b,c];    }    s++;$s=5;continue;case 6:  /return[b,c];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:L};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Glob=L;Globos.Lstatpath/filepath.AQpath/filepath.Globpath/filepath.Splitpath/filepath.globpath/filepath.hasMeta path/filepath.globM�!M=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);d=AQ.nil;e=$ifaceNil;  ^d=c;  kf=B.Stat(a);g=f[0];h=f[1];    if(!($interfaceIsEqual(h,$ifaceNil))){  �return[d,e];    }  �i=g.IsDir();$s=3;case 3:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}if(!i){$s=1;continue;}$s=2;continue;    case 1:  �return[d,e];    case 2:  �j=B.Open(a);k=j[0];h=j[1];    if(!($interfaceIsEqual(h,$ifaceNil))){  �return[d,e];    }  �$deferred.push([$methodVal(k,"Close"),[]]);  l=k.Readdirnames(-1);m=l[0];  &$r=D.Strings(m);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  <n=m;o=0;while(true){if(!(o<n.$length)){break;}p=((o<0||o>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+o]);  Xq=H(b,p);r=q[0];s=q[1];    if(!($interfaceIsEqual(s,$ifaceNil))){    t=d;u=s;d=t;e=u;return[d,e];    }    if(r){  �d=$append(d,U(new AQ([a,p])));    }    o++;}  �return[d,e];    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return[d,e];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:M};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};globos.Openos.Statpath/filepath.AQpath/filepath.Joinpath/filepath.Matchpath/filepath.globsort.Strings path/filepath.hasMetaNCN=function(a){var $ptr,a;  �return E.IndexAny(a,"*?[")>=0;    };hasMetapath/filepath.hasMetastrings.IndexAny (*path/filepath.lazybuf).index�*O.ptr.prototype.index=function(a){var $ptr,a,b,c;  Ib=this;    if(!(b.buf===AR.nil)){  ~return(c=b.buf,((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]));    }  �return b.path.charCodeAt(a);    };O.prototype.index=function(a){return this.$val.index(a);};lazybufindex~path/filepath.ARpath/filepath.lazybuf (*path/filepath.lazybuf).append��O.ptr.prototype.append=function(a){var $ptr,a,b,c,d;  �b=this;    if(b.buf===AR.nil){    if(b.w<b.path.length&&(b.path.charCodeAt(b.w)===a)){   b.w=b.w+(1)>>0;   return;    }   "b.buf=$makeSlice(AR,b.path.length);   F$copyString(b.buf,b.path.substring(0,b.w));    }   d(c=b.buf,d=b.w,((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]=a));   tb.w=b.w+(1)>>0;    };O.prototype.append=function(a){return this.$val.append(a);};lazybufappend~path/filepath.ARpath/filepath.lazybuf (*path/filepath.lazybuf).string�&O.ptr.prototype.string=function(){var $ptr,a;   �a=this;    if(a.buf===AR.nil){   �return a.volAndPath.substring(0,(a.volLen+a.w>>0));    }   �return a.volAndPath.substring(0,a.volLen)+$bytesToString($subslice(a.buf,0,a.w));    };O.prototype.string=function(){return this.$val.string();};lazybufstring~path/filepath.ARpath/filepath.lazybuf path/filepath.CleanP��P=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l;  %4b=a;  %Jc=AJ(a);  %ia=a.substring(c);    if(a===""){    if(c>1&&!((b.charCodeAt(1)===58))){  %�return R(b);    }  %�return b+".";    }  &d=B.IsPathSeparator(a.charCodeAt(0));  '=e=a.length;  'Mf=new O.ptr(a,AR.nil,0,b,c);  '�g=0;h=0;i=g;j=h;    if(d){  '�f.append(47);  '�k=1;l=1;i=k;j=l;    }  '�while(true){if(!(i<e)){break;}  '�if(B.IsPathSeparator(a.charCodeAt(i))){  (9i=i+(1)>>0;  (?}else if((a.charCodeAt(i)===46)&&(((i+1>>0)===e)||B.IsPathSeparator(a.charCodeAt((i+1>>0))))){  (�i=i+(1)>>0;  (�}else if((a.charCodeAt(i)===46)&&(a.charCodeAt((i+1>>0))===46)&&(((i+2>>0)===e)||B.IsPathSeparator(a.charCodeAt((i+2>>0))))){  )"i=i+(2)>>0;  )8if(f.w>j){  )ff.w=f.w-(1)>>0;  )rwhile(true){if(!(f.w>j&&!B.IsPathSeparator(f.index(f.w)))){break;}  )�f.w=f.w-(1)>>0;    }  )�}else if(!d){    if(f.w>0){  *+f.append(47);    }  *Kf.append(46);  *_f.append(46);  *sj=f.w;    }    }else{    if(d&&!((f.w===1))||!d&&!((f.w===0))){  *�f.append(47);    }  +0while(true){if(!(i<e&&!B.IsPathSeparator(a.charCodeAt(i)))){break;}  +gf.append(a.charCodeAt(i));  +]i=i+(1)>>0;    }    }    }    if(f.w===0){  +�f.append(46);    }  +�return R(f.string());    };$pkg.Clean=P;Clean	os.IsPathSeparatorpath/filepath.ARpath/filepath.Cleanpath/filepath.FromSlashpath/filepath.append~path/filepath.index~path/filepath.lazybufpath/filepath.string~path/filepath.volumeNameLen path/filepath.ToSlashQaQ=function(a){var $ptr,a;  ,�return a;  ,�return E.Replace(a,"/","/",-1);    };$pkg.ToSlash=Q;ToSlashpath/filepath.ToSlashstrings.Replace path/filepath.FromSlashRcR=function(a){var $ptr,a;  .return a;  .return E.Replace(a,"/","/",-1);    };$pkg.FromSlash=R;	FromSlashpath/filepath.FromSlashstrings.Replace path/filepath.SplitListSCS=function(a){var $ptr,a;  /�return AL(a);    };$pkg.SplitList=S;	SplitListpath/filepath.SplitListpath/filepath.splitList path/filepath.SplitT�T=function(a){var $ptr,a,b,c,d,e,f,g;b="";c="";  0�d=AH(a);  1e=a.length-1>>0;  1%while(true){if(!(e>=d.length&&!B.IsPathSeparator(a.charCodeAt(e)))){break;}  1[e=e-(1)>>0;    }    f=a.substring(0,(e+1>>0));g=a.substring((e+1>>0));b=f;c=g;return[b,c];    };$pkg.Split=T;Splitos.IsPathSeparatorpath/filepath.Splitpath/filepath.VolumeName path/filepath.JoinU>U=function(a){var $ptr,a;  2�return AN(a);    };$pkg.Join=U;Joinpath/filepath.Joinpath/filepath.join path/filepath.ExtV��V=function(a){var $ptr,a,b;  3�b=a.length-1>>0;while(true){if(!(b>=0&&!B.IsPathSeparator(a.charCodeAt(b)))){break;}    if(a.charCodeAt(b)===46){  3�return a.substring(b);    }  3�b=b-(1)>>0;    }  4return"";    };$pkg.Ext=V;Extos.IsPathSeparatorpath/filepath.Ext path/filepath.EvalSymlinksW��W=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  5/b=AP(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:W};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};$pkg.EvalSymlinks=W;EvalSymlinkspath/filepath.EvalSymlinkspath/filepath.evalSymlinks path/filepath.AbsX��X=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  6mb=AM(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:X};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Abs=X;Abspath/filepath.Abspath/filepath.abs path/filepath.unixAbsY�nY=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(AI(a)){  6�return[P(a),$ifaceNil];    }  6�c=B.Getwd();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  7return["",e];    }  7return[U(new AQ([d,a])),$ifaceNil];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Y};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};unixAbsos.Getwdpath/filepath.AQpath/filepath.Cleanpath/filepath.IsAbspath/filepath.Joinpath/filepath.unixAbs path/filepath.RelZ�_Z=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;  9Xc=AH(a);  9yd=AH(b);  9�e=P(a);  9�f=P(b);    if(f===e){  9�return[".",$ifaceNil];    }  9�e=e.substring(c.length);  :f=f.substring(d.length);    if(e==="."){  :?e="";    }  :�g=e.length>0&&(e.charCodeAt(0)===47);  :�h=f.length>0&&(f.charCodeAt(0)===47);    if(!(g===h)||!(c===d)){  ;2return["",A.New("Rel: can't make "+f+" relative to "+e)];    }  ;�i=e.length;  ;�j=f.length;  ;�k=0;l=0;m=0;n=0;o=k;p=l;q=m;r=n;  <while(true){  <while(true){if(!(p<i&&!((e.charCodeAt(p)===47)))){break;}  <6p=p+(1)>>0;    }  <Awhile(true){if(!(r<j&&!((f.charCodeAt(r)===47)))){break;}  <kr=r+(1)>>0;    }    if(!(f.substring(q,r)===e.substring(o,p))){  <�break;    }    if(p<i){  <�p=p+(1)>>0;    }    if(r<j){  <�r=r+(1)>>0;    }  <�o=p;  <�q=r;    }    if(e.substring(o,p)===".."){  =return["",A.New("Rel: can't make "+f+" relative to "+e)];    }    if(!((o===i))){  =�s=E.Count(e.substring(o,i),"/");  =�t=2+(s*3>>0)>>0;    if(!((j===q))){  =�t=t+(((1+j>>0)-q>>0))>>0;    }  >u=$makeSlice(AR,t);  >5v=$copyString(u,"..");  >Pw=0;while(true){if(!(w<s)){break;}  >k((v<0||v>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+v]=47);  >�$copyString($subslice(u,(v+1>>0)),"..");  >�v=v+(3)>>0;  >bw=w+(1)>>0;    }    if(!((q===j))){  >�((v<0||v>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+v]=47);  >�$copyString($subslice(u,(v+1>>0)),f.substring(q));    }  >�return[$bytesToString(u),$ifaceNil];    }  ?return[f.substring(q),$ifaceNil];    };$pkg.Rel=Z;Rel
errors.Newpath/filepath.ARpath/filepath.Cleanpath/filepath.Relpath/filepath.VolumeNamestrings.Count path/filepath.walkAC�
hAC=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  D�d=c(a,b,$ifaceNil);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;  D�if(!($interfaceIsEqual(e,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  D�f=b.IsDir();$s=6;case 6:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}if(f&&$interfaceIsEqual(e,$pkg.SkipDir)){$s=4;continue;}$s=5;continue;    case 4:  D�return $ifaceNil;    case 5:  Ereturn e;    case 3:  Eg=b.IsDir();$s=9;case 9:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}if(!g){$s=7;continue;}$s=8;continue;    case 7:  E-return $ifaceNil;    case 8:  E=i=AE(a);$s=10;case 10:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;j=h[0];e=h[1];  E_if(!($interfaceIsEqual(e,$ifaceNil))){$s=11;continue;}$s=12;continue;    case 11:  Eqk=c(a,b,e);$s=13;case 13:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}return k;    case 12:  E�l=j;m=0;case 14:if(!(m<l.$length)){$s=15;continue;}n=((m<0||m>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+m]);  E�o=U(new AQ([a,n]));  E�q=AB(o);$s=16;case 16:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}p=q;r=p[0];s=p[1];  E�if(!($interfaceIsEqual(s,$ifaceNil))){$s=17;continue;}$s=18;continue;    case 17:  Ft=c(o,r,s);$s=20;case 20:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}u=t;if(!($interfaceIsEqual(u,$ifaceNil))&&!($interfaceIsEqual(u,$pkg.SkipDir))){$s=21;continue;}$s=22;continue;    case 21:  FWreturn u;    case 22:    $s=19;continue;case 18:  Fuv=AC(o,r,c);$s=23;case 23:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}s=v;  F�if(!($interfaceIsEqual(s,$ifaceNil))){$s=24;continue;}$s=25;continue;    case 24:  F�w=r.IsDir();$s=28;case 28:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}if(!w||!($interfaceIsEqual(s,$pkg.SkipDir))){$s=26;continue;}$s=27;continue;    case 26:  F�return s;    case 27:    case 25:    case 19:    m++;$s=14;continue;case 15:  F�return $ifaceNil;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:AC};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.$s=$s;$f.$r=$r;return $f;};walkpath/filepath.AQpath/filepath.Joinpath/filepath.SkipDirpath/filepath.lstatpath/filepath.readDirNamespath/filepath.walk path/filepath.WalkAD��AD=function(a,b){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  H�c=B.Lstat(a);d=c[0];e=c[1];  H�if(!($interfaceIsEqual(e,$ifaceNil))){$s=1;continue;}$s=2;continue;    case 1:  H�f=b(a,$ifaceNil,e);$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}return f;    case 2:  Ig=AC(a,d,b);$s=4;case 4:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}return g;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:AD};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Walk=AD;Walkos.Lstatpath/filepath.Walkpath/filepath.walk path/filepath.readDirNamesAE��AE=function(a){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  I�b=B.Open(a);c=b[0];d=b[1];    if(!($interfaceIsEqual(d,$ifaceNil))){  Jreturn[AQ.nil,d];    }  Je=c.Readdirnames(-1);f=e[0];d=e[1];  J8c.Close();    if(!($interfaceIsEqual(d,$ifaceNil))){  JUreturn[AQ.nil,d];    }  Ji$r=D.Strings(f);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  J~return[f,$ifaceNil];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:AE};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};readDirNamesos.Openpath/filepath.AQpath/filepath.readDirNamessort.Strings path/filepath.BaseAF��AF=function(a){var $ptr,a,b;    if(a===""){  K�return".";    }  K�while(true){if(!(a.length>0&&B.IsPathSeparator(a.charCodeAt((a.length-1>>0))))){break;}  L"a=a.substring(0,(a.length-1>>0));    }  L^a=a.substring(AH(a).length);  L�b=a.length-1>>0;  L�while(true){if(!(b>=0&&!B.IsPathSeparator(a.charCodeAt(b)))){break;}  L�b=b-(1)>>0;    }    if(b>=0){  L�a=a.substring((b+1>>0));    }    if(a===""){  MEreturn"/";    }  Mbreturn a;    };$pkg.Base=AF;Baseos.IsPathSeparatorpath/filepath.Basepath/filepath.VolumeName path/filepath.DirAG��AG=function(a){var $ptr,a,b,c,d;  Ob=AH(a);  O%c=a.length-1>>0;  O9while(true){if(!(c>=b.length&&!B.IsPathSeparator(a.charCodeAt(c)))){break;}  Ooc=c-(1)>>0;    }  Owd=P(a.substring(b.length,(c+1>>0)));  O�return b+d;    };$pkg.Dir=AG;Diros.IsPathSeparatorpath/filepath.Cleanpath/filepath.Dirpath/filepath.VolumeName path/filepath.VolumeNameAHUAH=function(a){var $ptr,a;  P�return a.substring(0,AJ(a));    };$pkg.VolumeName=AH;
VolumeNamepath/filepath.VolumeNamepath/filepath.volumeNameLen path/filepath.IsAbsAINAI=function(a){var $ptr,a;  Rreturn E.HasPrefix(a,"/");    };$pkg.IsAbs=AI;IsAbspath/filepath.IsAbsstrings.HasPrefix path/filepath.volumeNameLenAJ/AJ=function(a){var $ptr,a;  R�return 0;    };volumeNameLenpath/filepath.volumeNameLen path/filepath.HasPrefixAKTAK=function(a,b){var $ptr,a,b;  S;return E.HasPrefix(a,b);    };$pkg.HasPrefix=AK;	HasPrefixpath/filepath.HasPrefixstrings.HasPrefix path/filepath.splitListALiAL=function(a){var $ptr,a;    if(a===""){  S�return new AQ([]);    }  S�return E.Split(a,":");    };	splitListpath/filepath.AQpath/filepath.splitListstrings.Split path/filepath.absAM��AM=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  Tb=Y(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:AM};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};abspath/filepath.abspath/filepath.unixAbs path/filepath.joinAN�AN=function(a){var $ptr,a,b,c,d,e;  T�b=a;c=0;while(true){if(!(c<b.$length)){break;}d=c;e=((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]);    if(!(e==="")){  T�return P(E.Join($subslice(a,d),"/"));    }    c++;}  T�return"";    };joinpath/filepath.Cleanpath/filepath.joinstrings.Join path/filepath.walkSymlinksAO��AO=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  V=b=a;  V�c=$clone(new G.Buffer.ptr(),G.Buffer);  V�d=0;case 1:if(!(!(a===""))){$s=2;continue;}    if(d>255){  Wreturn["",A.New("EvalSymlinks: too many links in "+b)];    }  W�e=-1;  W�f=a;g=0;while(true){if(!(g<f.length)){break;}h=$decodeRune(f,g);i=g;j=h[0];    if(j<128&&B.IsPathSeparator((j<<24>>>24))){  W�e=i;  W�break;    }    g+=h[1];}  X k="";    if(e===-1){  Xl=a;m="";k=l;a=m;    }else{  X<n=a.substring(0,e);o=a.substring((e+1>>0));k=n;a=o;    }  Xbif(k===""){$s=3;continue;}$s=4;continue;    case 3:    if(c.Len()===0){  X�c.WriteRune(47);    }  V�d=d+(1)>>0;    $s=1;continue;    case 4:  X�p=B.Lstat(c.String()+k);q=p[0];r=p[1];    if(!($interfaceIsEqual(r,$ifaceNil))){  Yreturn["",r];    }  Y"s=q.Mode();$s=7;case 7:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}if(((s&134217728)>>>0)===0){$s=5;continue;}$s=6;continue;    case 5:  YHc.WriteString(k);    if(!(a==="")||((c.Len()===2)&&(k.length===2)&&(k.charCodeAt(1)===58))){  Y�c.WriteRune(47);    }  V�d=d+(1)>>0;    $s=1;continue;    case 6:  Z t=B.Readlink(c.String()+k);u=t[0];r=t[1];    if(!($interfaceIsEqual(r,$ifaceNil))){  Z>return["",r];    }    if(AI(u)||B.IsPathSeparator(u.charCodeAt(0))){  Z�c.Reset();    }  Z�a=u+"/"+a;  V�d=d+(1)>>0;    $s=1;continue;case 2:  Z�return[P(c.String()),$ifaceNil];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:AO};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.$s=$s;$f.$r=$r;return $f;};walkSymlinksbytes.Buffer
errors.Newos.IsPathSeparatoros.Lstatos.Readlinkpath/filepath.Cleanpath/filepath.IsAbspath/filepath.walkSymlinks path/filepath.evalSymlinksAP��AP=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  [:b=AO(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:AP};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};evalSymlinkspath/filepath.evalSymlinkspath/filepath.walkSymlinks �i{"Base":23383,"Files":[{"Name":"/usr/local/go/src/path/filepath/match.go","Base":1,"Size":7116,"Lines":[0,55,109,159,160,177,178,187,197,203,214,222,233,249,251,252,313,371,372,439,465,468,480,493,502,567,626,666,718,781,817,820,840,898,934,988,991,1061,1128,1145,1148,1213,1232,1235,1296,1305,1329,1345,1364,1408,1435,1494,1552,1556,1597,1637,1702,1772,1792,1839,1851,1863,1867,1885,1906,1910,1922,1963,1984,2044,2092,2104,2169,2211,2226,2233,2247,2269,2275,2295,2318,2324,2329,2333,2353,2356,2384,2386,2387,2461,2493,2558,2603,2627,2641,2644,2662,2673,2679,2715,2737,2750,2784,2839,2867,2876,2882,2887,2899,2917,2929,2948,2960,2977,2992,2997,3001,3004,3044,3046,3047,3110,3169,3244,3313,3335,3354,3364,3368,3388,3400,3422,3460,3473,3494,3555,3601,3625,3649,3660,3665,3688,3718,3734,3756,3761,3784,3802,3817,3826,3883,3906,3917,3923,3943,3995,4007,4013,4025,4050,4107,4120,4127,4133,4161,4179,4185,4198,4203,4228,4239,4244,4245,4257,4283,4294,4299,4337,4350,4371,4372,4385,4419,4441,4466,4491,4503,4509,4514,4529,4530,4541,4566,4577,4582,4595,4616,4620,4623,4644,4646,4647,4726,4789,4849,4871,4880,4883,4935,4955,4978,5001,5011,5015,5018,5058,5094,5116,5119,5139,5162,5184,5187,5195,5197,5198,5261,5329,5397,5447,5450,5525,5592,5609,5667,5691,5737,5756,5760,5792,5795,5796,5825,5839,5849,5861,5886,5899,5909,5968,5971,5972,5992,6022,6025,6026,6042,6062,6079,6088,6091,6114,6154,6172,6182,6186,6189,6197,6199,6200,6265,6324,6384,6419,6492,6505,6530,6547,6556,6559,6577,6586,6589,6613,6630,6639,6642,6659,6660,6692,6713,6714,6741,6777,6795,6812,6816,6831,6862,6866,6869,6877,6879,6880,6949,6973,7006,7071,7114],"Infos":null},{"Name":"/usr/local/go/src/path/filepath/path.go","Base":7118,"Size":13541,"Lines":[0,55,109,159,160,240,316,319,401,475,492,493,502,512,518,526,537,539,540,590,648,714,771,793,812,831,847,866,882,884,885,923,942,960,963,981,983,984,1019,1038,1083,1092,1102,1106,1142,1170,1173,1189,1196,1198,1199,1235,1254,1291,1294,1348,1350,1351,1359,1393,1431,1433,1434,1493,1558,1614,1617,1678,1744,1815,1869,1923,1987,2020,2023,2100,2144,2147,2206,2233,2236,2292,2320,2372,2405,2427,2458,2480,2497,2541,2561,2595,2599,2627,2630,2669,2670,2686,2745,2799,2861,2926,2942,3012,3031,3044,3068,3087,3090,3091,3104,3115,3151,3176,3183,3253,3269,3276,3366,3409,3419,3431,3455,3476,3488,3554,3567,3573,3590,3653,3672,3699,3705,3725,3745,3764,3769,3780,3805,3831,3885,3911,3916,3935,3989,4013,4018,4022,4025,4026,4057,4074,4092,4095,4096,4128,4130,4131,4199,4264,4297,4332,4355,4369,4372,4430,4432,4433,4505,4574,4601,4638,4661,4675,4678,4736,4738,4739,4816,4874,4953,5031,5070,5094,5096,5097,5161,5220,5284,5309,5372,5417,5442,5462,5515,5521,5524,5555,5557,5558,5627,5693,5727,5797,5823,5858,5877,5879,5880,5933,5991,6048,6059,6090,6161,6183,6202,6206,6209,6220,6222,6223,6298,6308,6385,6447,6496,6523,6525,6526,6577,6643,6712,6774,6814,6832,6834,6835,6879,6897,6923,6926,6949,6966,6983,6986,7014,7016,7017,7094,7156,7233,7303,7355,7432,7507,7561,7594,7627,7652,7677,7696,7714,7717,7745,7773,7791,7803,7806,7871,7925,7979,8034,8110,8113,8187,8204,8221,8245,8252,8293,8301,8305,8346,8354,8358,8392,8401,8405,8420,8428,8432,8447,8455,8459,8469,8479,8482,8508,8584,8587,8602,8657,8713,8734,8750,8773,8777,8805,8828,8858,8880,8905,8915,8919,8935,8957,8987,8991,9017,9020,9043,9045,9046,9115,9187,9219,9267,9268,9342,9415,9486,9561,9630,9633,9711,9787,9863,9946,10029,10094,10167,10230,10297,10298,10334,10335,10381,10447,10479,10496,10534,10548,10552,10565,10568,10569,10589,10602,10605,10606,10640,10657,10690,10693,10694,10724,10755,10790,10808,10885,10900,10905,10916,10958,10977,11022,11038,11044,11049,11053,11056,11068,11070,11071,11147,11226,11301,11372,11418,11458,11506,11535,11552,11584,11587,11620,11622,11623,11688,11727,11781,11809,11826,11844,11847,11881,11892,11909,11927,11930,11951,11970,11972,11973,12015,12091,12134,12215,12247,12264,12277,12280,12308,12370,12401,12404,12431,12468,12494,12514,12560,12566,12569,12582,12602,12605,12644,12661,12688,12691,12704,12706,12707,12788,12858,12882,12924,13004,13086,13117,13142,13162,13215,13221,13224,13260,13278,13280,13281,13324,13374,13429,13466,13504,13539],"Infos":null},{"Name":"/usr/local/go/src/path/filepath/path_unix.go","Base":20660,"Size":1103,"Lines":[0,55,109,159,160,229,230,247,248,265,266,313,344,381,383,384,455,482,520,530,532,533,606,646,683,685,686,725,742,762,765,816,818,819,859,881,883,884,918,983,1009,1024,1083,1087,1090,1101],"Infos":null},{"Name":"/usr/local/go/src/path/filepath/symlink.go","Base":21764,"Size":1501,"Lines":[0,55,109,159,160,177,178,187,196,206,212,214,215,241,242,291,312,334,390,448,468,499,518,594,598,599,632,645,672,729,739,749,754,758,773,788,810,821,855,859,860,875,896,925,952,957,969,973,974,1012,1030,1048,1052,1089,1109,1176,1203,1208,1220,1224,1225,1274,1317,1335,1353,1357,1407,1420,1424,1465,1468,1499],"Infos":null},{"Name":"/usr/local/go/src/path/filepath/symlink_unix.go","Base":23266,"Size":116,"Lines":[0,19,20,37,38,87,114],"Infos":null}]}
 