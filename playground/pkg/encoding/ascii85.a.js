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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �>���encoding/ascii85ascii85iostrconv�[
$$ exports $$
pv0ascii85 encoding/ascii85"CorruptInputError 

Errore8    	Decode dst2src>
flush ndstnsrcerr6 	Encode dst2srcB  	MaxEncodedLen n  	NewDecoder rReaderioio Read p2nerr6   H 	NewEncoder wWriter 
Write p2nerr6   WriteCloserCloser 
Close   6  R   AA=$packages["io"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["strconv"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} F�CF=$pkg.encoder=$newType(0,$kindStruct,"ascii85.encoder",true,"encoding/ascii85",false,function(err_,w_,buf_,nbuf_,out_){this.$val=this;if(arguments.length===0){this.err=$ifaceNil;this.w=$ifaceNil;this.buf=L.zero();this.nbuf=0;this.out=M.zero();return;}this.err=err_;this.w=w_;this.buf=buf_;this.nbuf=nbuf_;this.out=out_;});��N.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([K],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];�.F.init("encoding/ascii85",[{prop:"err",name:"err",exported:false,typ:$error,tag:""},{prop:"w",name:"w",exported:false,typ:A.Writer,tag:""},{prop:"buf",name:"buf",exported:false,typ:L,tag:""},{prop:"nbuf",name:"nbuf",exported:false,typ:$Int,tag:""},{prop:"out",name:"out",exported:false,typ:M,tag:""}]);encoderencoding/ascii85.Kencoding/ascii85.Lencoding/ascii85.Mencoding/ascii85.Nencoding/ascii85.encoder	io.Writer GnG=$pkg.CorruptInputError=$newType(8,$kindInt64,"ascii85.CorruptInputError",true,"encoding/ascii85",true,null);QG.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];CorruptInputError"encoding/ascii85.CorruptInputError J��J=$pkg.decoder=$newType(0,$kindStruct,"ascii85.decoder",true,"encoding/ascii85",false,function(err_,readErr_,r_,buf_,nbuf_,out_,outbuf_){this.$val=this;if(arguments.length===0){this.err=$ifaceNil;this.readErr=$ifaceNil;this.r=$ifaceNil;this.buf=M.zero();this.nbuf=0;this.out=K.nil;this.outbuf=M.zero();return;}this.err=err_;this.readErr=readErr_;this.r=r_;this.buf=buf_;this.nbuf=nbuf_;this.out=out_;this.outbuf=outbuf_;});TO.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([K],[$Int,$error],false)}];��J.init("encoding/ascii85",[{prop:"err",name:"err",exported:false,typ:$error,tag:""},{prop:"readErr",name:"readErr",exported:false,typ:$error,tag:""},{prop:"r",name:"r",exported:false,typ:A.Reader,tag:""},{prop:"buf",name:"buf",exported:false,typ:M,tag:""},{prop:"nbuf",name:"nbuf",exported:false,typ:$Int,tag:""},{prop:"out",name:"out",exported:false,typ:K,tag:""},{prop:"outbuf",name:"outbuf",exported:false,typ:M,tag:""}]);decoderencoding/ascii85.Kencoding/ascii85.Mencoding/ascii85.Oencoding/ascii85.decoder	io.Reader KK=$sliceType($Uint8);K LL=$arrayType($Uint8,4);L MM=$arrayType($Uint8,1024);M NN=$ptrType(F);Nencoding/ascii85.encoder OO=$ptrType(J);Oencoding/ascii85.decoder encoding/ascii85.EncodeC�	�C=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i;    if(b.$length===0){  Greturn 0;    }  Uc=0;  ]while(true){if(!(b.$length>0)){break;}  r(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=0);  (1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=0);  �(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=0);  �(3>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=0);  �(4>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+4]=0);  �d=0;    e=b.$length;    if(e===(3)){  Rd=(d|((((2>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])>>>0)<<8>>>0)))>>>0;  �d=(d|((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>0)<<16>>>0)))>>>0;  �d=(d|((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>0)<<24>>>0)))>>>0;    }else if(e===(2)){  �d=(d|((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>0)<<16>>>0)))>>>0;  �d=(d|((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>0)<<24>>>0)))>>>0;    }else if(e===(1)){  �d=(d|((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>0)<<24>>>0)))>>>0;    }else{  "d=(d|(((3>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+3])>>>0)))>>>0;  Rd=(d|((((2>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])>>>0)<<8>>>0)))>>>0;  �d=(d|((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>0)<<16>>>0)))>>>0;  �d=(d|((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>0)<<24>>>0)))>>>0;    }    if((d===0)&&b.$length>=4){  -(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=122);  =a=$subslice(a,1);  Nb=$subslice(b,4);  _c=c+(1)>>0;  fcontinue;    }  �f=4;while(true){if(!(f>=0)){break;}  �((f<0||f>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+f]=(33+((g=d%85,g===g?g:$throwRuntimeError("integer divide by zero"))<<24>>>24)<<24>>>24));  �d=(h=d/(85),(h===h&&h!==1/0&&h!==-1/0)?h>>>0:$throwRuntimeError("integer divide by zero"));  �f=f-(1)>>0;    }  )i=5;    if(b.$length<4){  Gi=i-((4-b.$length>>0))>>0;  \b=K.nil;    }else{  tb=$subslice(b,4);    }  �a=$subslice(a,i);  �c=c+(i)>>0;    }  �return c;    };$pkg.Encode=C;Encodeencoding/ascii85.Encodeencoding/ascii85.K encoding/ascii85.MaxEncodedLenD��D=function(a){var $ptr,a,b;  return $imul((b=((a+3>>0))/4,(b===b&&b!==1/0&&b!==-1/0)?b>>0:$throwRuntimeError("integer divide by zero")),5);    };$pkg.MaxEncodedLen=D;MaxEncodedLenencoding/ascii85.MaxEncodedLen encoding/ascii85.NewEncoderEiE=function(a){var $ptr,a;  �return new F.ptr($ifaceNil,a,L.zero(),0,M.zero());    };$pkg.NewEncoder=E;
NewEncoderencoding/ascii85.Lencoding/ascii85.Mencoding/ascii85.NewEncoderencoding/ascii85.encoder !(*encoding/ascii85.encoder).Write�	�F.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  	\d=this;    if(!($interfaceIsEqual(d.err,$ifaceNil))){    e=0;f=d.err;b=e;c=f;return[b,c];    }  	�if(d.nbuf>0){$s=1;continue;}$s=2;continue;    case 1:  	�g=0;  	�g=0;while(true){if(!(g<a.$length&&d.nbuf<4)){break;}  
(h=d.buf,i=d.nbuf,((i<0||i>=h.length)?$throwRuntimeError("index out of range"):h[i]=((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g])));  
/d.nbuf=d.nbuf+(1)>>0;  
g=g+(1)>>0;    }  
>b=b+(g)>>0;  
Ga=$subslice(a,g);    if(d.nbuf<4){  
freturn[b,c];    }  
sj=C($subslice(new K(d.out),0),$subslice(new K(d.buf),0));  
�l=d.w.Write($subslice(new K(d.out),0,j));$s=3;case 3:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;d.err=k[1];    if(!($interfaceIsEqual(d.err,$ifaceNil))){    m=b;n=d.err;b=m;c=n;return[b,c];    }  
�d.nbuf=0;    case 2:  case 4:if(!(a.$length>=4)){$s=5;continue;}  )o=816;    if(o>a.$length){  Xo=a.$length;    }  jo=o-((p=o%4,p===p?p:$throwRuntimeError("integer divide by zero")))>>0;  yif(o>0){$s=6;continue;}$s=7;continue;    case 6:  �q=C($subslice(new K(d.out),0),$subslice(a,0,o));  �s=d.w.Write($subslice(new K(d.out),0,q));$s=8;case 8:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}r=s;d.err=r[1];    if(!($interfaceIsEqual(d.err,$ifaceNil))){    t=b;u=d.err;b=t;c=u;return[b,c];    }    case 7:  b=b+(o)>>0;  a=$subslice(a,o);    $s=4;continue;case 5:  7v=0;while(true){if(!(v<a.$length)){break;}  S(w=d.buf,((v<0||v>=w.length)?$throwRuntimeError("index out of range"):w[v]=((v<0||v>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+v])));  Kv=v+(1)>>0;    }  gd.nbuf=a.$length;  xb=b+(a.$length)>>0;  �return[b,c];    }return;}if($f===undefined){$f={$blk:F.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.Write=function(a){return this.$val.Write(a);};encoderencoding/ascii85.Encodeencoding/ascii85.Kencoding/ascii85.encoder !(*encoding/ascii85.encoder).Close�
F.ptr.prototype.Close=function(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:   a=this;  Vif($interfaceIsEqual(a.err,$ifaceNil)&&a.nbuf>0){$s=1;continue;}$s=2;continue;    case 1:  xb=C($subslice(new K(a.out),0),$subslice(new K(a.buf),0,a.nbuf));  �a.nbuf=0;  �d=a.w.Write($subslice(new K(a.out),0,b));$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;a.err=c[1];    case 2:  �return a.err;    }return;}if($f===undefined){$f={$blk:F.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.Close=function(){return this.$val.Close();};encoderencoding/ascii85.Encodeencoding/ascii85.Kencoding/ascii85.encoder *(encoding/ascii85.CorruptInputError).Error��G.prototype.Error=function(){var $ptr,a;  !a=this;  Hreturn"illegal ascii85 data at input byte "+B.FormatInt(new $Int64(a.$high,a.$low),10);    };$ptrType(G).prototype.Error=function(){return this.$get().Error();};CorruptInputError"encoding/ascii85.CorruptInputErrorstrconv.FormatInt encoding/ascii85.DecodeH�LH=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;d=0;e=0;f=$ifaceNil;  �g=0;  �h=0;  �i=b;j=0;while(true){if(!(j<i.$length)){break;}k=j;l=((j<0||j>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+j]);    if((a.$length-d>>0)<4){  �return[d,e,f];    }    if(l<=32){  �j++;continue;    }else if((l===122)&&(h===0)){  $h=5;  .g=0;    }else if(33<=l&&l<=117){  Tg=($imul(g,85)>>>0)+((l-33<<24>>>24)>>>0)>>>0;  ph=h+(1)>>0;    }else{    m=0;n=0;o=new G(0,k);d=m;e=n;f=o;return[d,e,f];    }    if(h===5){  �e=k+1>>0;  �((d<0||d>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+d]=((g>>>24>>>0)<<24>>>24));  �(p=d+1>>0,((p<0||p>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+p]=((g>>>16>>>0)<<24>>>24)));  (q=d+2>>0,((q<0||q>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+q]=((g>>>8>>>0)<<24>>>24)));  %(r=d+3>>0,((r<0||r>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+r]=(g<<24>>>24)));  >d=d+(4)>>0;  Kh=0;  Ug=0;    }    j++;}    if(c){  pe=b.$length;    if(h>0){    if(h===1){    s=0;t=0;u=new G(0,b.$length);d=s;e=t;f=u;return[d,e,f];    }  �v=h;while(true){if(!(v<5)){break;}  jg=($imul(g,85)>>>0)+84>>>0;  �v=v+(1)>>0;    }  �w=0;while(true){if(!(w<(h-1>>0))){break;}  �((d<0||d>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+d]=((g>>>24>>>0)<<24>>>24));  �g=(x=(8),x<32?(g<<x):0)>>>0;  �d=d+(1)>>0;  �w=w+(1)>>0;    }    }    }  �return[d,e,f];    };$pkg.Decode=H;Decode"encoding/ascii85.CorruptInputErrorencoding/ascii85.Decode encoding/ascii85.NewDecoderIyI=function(a){var $ptr,a;  Hreturn new J.ptr($ifaceNil,$ifaceNil,a,M.zero(),0,K.nil,M.zero());    };$pkg.NewDecoder=I;
NewDecoderencoding/ascii85.Kencoding/ascii85.Mencoding/ascii85.NewDecoderencoding/ascii85.decoder  (*encoding/ascii85.decoder).Read�	J.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  #d=this;    if(a.$length===0){    e=0;f=$ifaceNil;b=e;c=f;return[b,c];    }    if(!($interfaceIsEqual(d.err,$ifaceNil))){    g=0;h=d.err;b=g;c=h;return[b,c];    }  �case 1:    if(d.out.$length>0){  �b=$copySlice(a,d.out);  d.out=$subslice(d.out,b);  return[b,c];    }  Ui=0;j=0;k=0;l=i;m=j;n=k;  jif(d.nbuf>0){$s=3;continue;}$s=4;continue;    case 3:  }o=H($subslice(new K(d.outbuf),0),$subslice(new K(d.buf),0,d.nbuf),!($interfaceIsEqual(d.readErr,$ifaceNil)));n=o[0];m=o[1];d.err=o[2];    if(n>0){  �d.out=$subslice(new K(d.outbuf),0,n);  �d.nbuf=$copySlice($subslice(new K(d.buf),0),$subslice(new K(d.buf),m,d.nbuf));  ,$s=1;continue;    }    if((n===0)&&$interfaceIsEqual(d.err,$ifaceNil)){  �p=0;  
q=0;while(true){if(!(q<d.nbuf)){break;}    if((r=d.buf,((q<0||q>=r.length)?$throwRuntimeError("index out of range"):r[q]))>32){  C(t=d.buf,((p<0||p>=t.length)?$throwRuntimeError("index out of range"):t[p]=(s=d.buf,((q<0||q>=s.length)?$throwRuntimeError("index out of range"):s[q]))));  _p=p+(1)>>0;    }  q=q+(1)>>0;    }  vd.nbuf=p;    }    case 4:    if(!($interfaceIsEqual(d.err,$ifaceNil))){    u=0;v=d.err;b=u;c=v;return[b,c];    }    if(!($interfaceIsEqual(d.readErr,$ifaceNil))){  d.err=d.readErr;    w=0;x=d.err;b=w;c=x;return[b,c];    }  Lz=d.r.Read($subslice(new K(d.buf),d.nbuf));$s=5;case 5:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}y=z;l=y[0];d.readErr=y[1];  wd.nbuf=d.nbuf+(l)>>0;    $s=1;continue;case 2:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:J.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.Read=function(a){return this.$val.Read(a);};decoderencoding/ascii85.Decodeencoding/ascii85.Kencoding/ascii85.decoder ��{"Base":7050,"Files":[{"Name":"/var/folders/g3/yrvdj9f55ll7jy7l5ygz82yc0000gn/T/gopherjs_playground.gGBRTLEEbM/goroot/src/encoding/ascii85/ascii85.go","Base":1,"Size":7048,"Lines":[0,55,109,159,160,216,293,309,310,319,325,336,338,339,342,353,357,358,417,480,483,547,613,684,687,751,781,816,836,847,850,851,859,879,892,905,918,931,944,945,1008,1023,1043,1054,1077,1092,1102,1130,1145,1155,1184,1199,1209,1238,1242,1243,1290,1321,1337,1354,1371,1378,1390,1394,1395,1443,1471,1500,1511,1515,1516,1574,1583,1603,1624,1637,1648,1665,1669,1685,1694,1697,1707,1709,1710,1788,1845,1846,1914,1976,2037,2105,2132,2202,2203,2225,2237,2253,2309,2352,2386,2388,2389,2444,2463,2481,2484,2485,2505,2522,2534,2579,2603,2615,2619,2628,2640,2658,2668,2672,2711,2768,2787,2791,2804,2807,2808,2835,2854,2881,2900,2915,2919,2934,2948,2986,3044,3064,3069,3073,3083,3096,3099,3100,3121,3152,3170,3173,3190,3203,3211,3213,3214,3268,3321,3355,3412,3445,3490,3503,3541,3544,3558,3560,3561,3564,3575,3579,3580,3609,3610,3654,3734,3736,3737,3795,3856,3920,3985,4040,4104,4165,4168,4228,4290,4347,4350,4408,4411,4482,4496,4508,4533,4558,4568,4572,4583,4600,4612,4640,4650,4659,4688,4716,4724,4735,4772,4776,4791,4807,4836,4867,4897,4922,4935,4945,4954,4958,4961,4973,4991,5005,5059,5108,5159,5213,5229,5274,5279,5308,5362,5420,5477,5495,5500,5531,5561,5573,5584,5589,5593,5596,5604,5606,5607,5662,5727,5728,5750,5765,5780,5799,5837,5850,5893,5913,5915,5916,5970,5988,6004,6007,6026,6044,6047,6048,6055,6099,6121,6143,6164,6174,6178,6179,6222,6247,6265,6344,6361,6390,6439,6475,6480,6514,6586,6644,6657,6691,6716,6744,6756,6763,6769,6786,6791,6795,6796,6852,6872,6891,6895,6919,6940,6959,6963,6964,6985,7028,7043,7046],"Infos":null}]}
 