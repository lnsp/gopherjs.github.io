t��Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �Y ��crypto/sha512sha512cryptohash��
$$ exports $$
pv0sha512crypto/sha512BlockSize$!�	New   HashhashhashWriterioio 
Write p2nerr6  BlockSize    
Reset    Size    Sum b2 2   	New384   : 	New512_224   : 	New512_256   : Size$!�Size224$!8Size256$!@Size384$!`	Sum384 data2sum384`2 	Sum512 data2 �2 	Sum512_224 data2sum22482 	Sum512_256 data2sum256@2 AA=$packages["crypto"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["hash"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} D�FD=$pkg.digest=$newType(0,$kindStruct,"sha512.digest","digest","crypto/sha512",function(h_,x_,nx_,len_,function$4_){this.$val=this;if(arguments.length===0){this.h=P.zero();this.x=Q.zero();this.nx=0;this.len=new $Uint64(0,0);this.function$4=0;return;}this.h=h_;this.x=x_;this.nx=nx_;this.len=len_;this.function$4=function$4_;});��X.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([R],[$Int,$error],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([R],[R],false)},{prop:"checkSum",name:"checkSum",pkg:"crypto/sha512",typ:$funcType([],[S],false)}];�7D.init([{prop:"h",name:"h",pkg:"crypto/sha512",typ:P,tag:""},{prop:"x",name:"x",pkg:"crypto/sha512",typ:Q,tag:""},{prop:"nx",name:"nx",pkg:"crypto/sha512",typ:$Int,tag:""},{prop:"len",name:"len",pkg:"crypto/sha512",typ:$Uint64,tag:""},{prop:"function$4",name:"function",pkg:"crypto/sha512",typ:A.Hash,tag:""}]);digestcrypto.Hashcrypto/sha512.Pcrypto/sha512.Qcrypto/sha512.Rcrypto/sha512.Scrypto/sha512.Xcrypto/sha512.digest OO=$sliceType($Uint64);O PP=$arrayType($Uint64,8);P QQ=$arrayType($Uint8,128);Q RR=$sliceType($Uint8);R SS=$arrayType($Uint8,64);S TT=$arrayType($Uint8,48);T UU=$arrayType($Uint8,28);U VV=$arrayType($Uint8,32);V WW=$arrayType($Uint64,80);W XX=$ptrType(D);Xcrypto/sha512.digest M_K �
�    M=new O([new $Uint64(1116352408,3609767458),new $Uint64(1899447441,602891725),new $Uint64(3049323471,3964484399),new $Uint64(3921009573,2173295548),new $Uint64(961987163,4081628472),new $Uint64(1508970993,3053834265),new $Uint64(2453635748,2937671579),new $Uint64(2870763221,3664609560),new $Uint64(3624381080,2734883394),new $Uint64(310598401,1164996542),new $Uint64(607225278,1323610764),new $Uint64(1426881987,3590304994),new $Uint64(1925078388,4068182383),new $Uint64(2162078206,991336113),new $Uint64(2614888103,633803317),new $Uint64(3248222580,3479774868),new $Uint64(3835390401,2666613458),new $Uint64(4022224774,944711139),new $Uint64(264347078,2341262773),new $Uint64(604807628,2007800933),new $Uint64(770255983,1495990901),new $Uint64(1249150122,1856431235),new $Uint64(1555081692,3175218132),new $Uint64(1996064986,2198950837),new $Uint64(2554220882,3999719339),new $Uint64(2821834349,766784016),new $Uint64(2952996808,2566594879),new $Uint64(3210313671,3203337956),new $Uint64(3336571891,1034457026),new $Uint64(3584528711,2466948901),new $Uint64(113926993,3758326383),new $Uint64(338241895,168717936),new $Uint64(666307205,1188179964),new $Uint64(773529912,1546045734),new $Uint64(1294757372,1522805485),new $Uint64(1396182291,2643833823),new $Uint64(1695183700,2343527390),new $Uint64(1986661051,1014477480),new $Uint64(2177026350,1206759142),new $Uint64(2456956037,344077627),new $Uint64(2730485921,1290863460),new $Uint64(2820302411,3158454273),new $Uint64(3259730800,3505952657),new $Uint64(3345764771,106217008),new $Uint64(3516065817,3606008344),new $Uint64(3600352804,1432725776),new $Uint64(4094571909,1467031594),new $Uint64(275423344,851169720),new $Uint64(430227734,3100823752),new $Uint64(506948616,1363258195),new $Uint64(659060556,3750685593),new $Uint64(883997877,3785050280),new $Uint64(958139571,3318307427),new $Uint64(1322822218,3812723403),new $Uint64(1537002063,2003034995),new $Uint64(1747873779,3602036899),new $Uint64(1955562222,1575990012),new $Uint64(2024104815,1125592928),new $Uint64(2227730452,2716904306),new $Uint64(2361852424,442776044),new $Uint64(2428436474,593698344),new $Uint64(2756734187,3733110249),new $Uint64(3204031479,2999351573),new $Uint64(3329325298,3815920427),new $Uint64(3391569614,3928383900),new $Uint64(3515267271,566280711),new $Uint64(3940187606,3454069534),new $Uint64(4118630271,4000239992),new $Uint64(116418474,1914138554),new $Uint64(174292421,2731055270),new $Uint64(289380356,3203993006),new $Uint64(460393269,320620315),new $Uint64(685471733,587496836),new $Uint64(852142971,1086792851),new $Uint64(1017036298,365543100),new $Uint64(1126000580,2618297676),new $Uint64(1288033470,3409855158),new $Uint64(1501505948,4234509866),new $Uint64(1607167915,987167468),new $Uint64(1816402316,1246189591)]);_Kcrypto/sha512.Ocrypto/sha512._K crypto/sha512.initC��C=function(){var $ptr;  [A.RegisterHash(6,H);  �A.RegisterHash(7,E);  �A.RegisterHash(14,F);  �A.RegisterHash(15,G);    };	    C();crypto.RegisterHashcrypto/sha512.Newcrypto/sha512.New384crypto/sha512.New512_224crypto/sha512.New512_256crypto/sha512.init (*crypto/sha512.digest).Reset��D.ptr.prototype.Reset=function(){var $ptr,a,b;  �a=this;  �b=a.function$4;  �if(b===6){  �a.h[0]=new $Uint64(3418070365,3238371032);  �a.h[1]=new $Uint64(1654270250,914150663);  	a.h[2]=new $Uint64(2438529370,812702999);  	$a.h[3]=new $Uint64(355462360,4144912697);  	9a.h[4]=new $Uint64(1731405415,4290775857);  	Na.h[5]=new $Uint64(2394180231,1750603025);  	ca.h[6]=new $Uint64(3675008525,1694076839);  	xa.h[7]=new $Uint64(1203062813,3204075428);  	�}else if(b===14){  	�a.h[0]=new $Uint64(2352822216,424955298);  	�a.h[1]=new $Uint64(1944164710,2312950998);  	�a.h[2]=new $Uint64(502970286,855612546);  	�a.h[3]=new $Uint64(1738396948,1479516111);  	�a.h[4]=new $Uint64(258812777,2077511080);  
a.h[5]=new $Uint64(2011393907,79989058);  
$a.h[6]=new $Uint64(1067287976,1780299464);  
9a.h[7]=new $Uint64(286451373,2446758561);  
M}else if(b===15){  
ga.h[0]=new $Uint64(573645204,4230739756);  
|a.h[1]=new $Uint64(2673172387,3360449730);  
�a.h[2]=new $Uint64(596883563,1867755857);  
�a.h[3]=new $Uint64(2520282905,1497426621);  
�a.h[4]=new $Uint64(2519219938,2827943907);  
�a.h[5]=new $Uint64(3193839141,1401305490);  
�a.h[6]=new $Uint64(721525244,746961066);  
�a.h[7]=new $Uint64(246885852,2177182882);    }else{  a.h[0]=new $Uint64(1779033703,4089235720);  *a.h[1]=new $Uint64(3144134277,2227873595);  ;a.h[2]=new $Uint64(1013904242,4271175723);  La.h[3]=new $Uint64(2773480762,1595750129);  ]a.h[4]=new $Uint64(1359893119,2917565137);  na.h[5]=new $Uint64(2600822924,725511199);  a.h[6]=new $Uint64(528734635,4215389547);  �a.h[7]=new $Uint64(1541459225,327033209);    }  �a.nx=0;  �a.len=new $Uint64(0,0);    };D.prototype.Reset=function(){return this.$val.Reset();};digestcrypto/sha512.digest crypto/sha512.NewE��E=function(){var $ptr,a;  a=new D.ptr(P.zero(),Q.zero(),0,new $Uint64(0,0),7);  8a.Reset();  Creturn a;    };$pkg.New=E;Newcrypto/sha512.Newcrypto/sha512.Pcrypto/sha512.Qcrypto/sha512.digest crypto/sha512.New512_224F��F=function(){var $ptr,a;  �a=new D.ptr(P.zero(),Q.zero(),0,new $Uint64(0,0),14);  �a.Reset();  �return a;    };$pkg.New512_224=F;
New512_224crypto/sha512.New512_224crypto/sha512.Pcrypto/sha512.Qcrypto/sha512.digest crypto/sha512.New512_256G��G=function(){var $ptr,a;  ca=new D.ptr(P.zero(),Q.zero(),0,new $Uint64(0,0),15);  �a.Reset();  �return a;    };$pkg.New512_256=G;
New512_256crypto/sha512.New512_256crypto/sha512.Pcrypto/sha512.Qcrypto/sha512.digest crypto/sha512.New384H��H=function(){var $ptr,a;  a=new D.ptr(P.zero(),Q.zero(),0,new $Uint64(0,0),6);  )a.Reset();  4return a;    };$pkg.New384=H;New384crypto/sha512.New384crypto/sha512.Pcrypto/sha512.Qcrypto/sha512.digest (*crypto/sha512.digest).Size�D.ptr.prototype.Size=function(){var $ptr,a,b;  Fa=this;  _b=a.function$4;  tif(b===14){  �return 28;  �}else if(b===15){  �return 32;  �}else if(b===6){  �return 48;    }else{  �return 64;    }    };D.prototype.Size=function(){return this.$val.Size();};digestcrypto/sha512.digest !(*crypto/sha512.digest).BlockSize��D.ptr.prototype.BlockSize=function(){var $ptr,a;  a=this;  .return 128;    };D.prototype.BlockSize=function(){return this.$val.BlockSize();};digestcrypto/sha512.digest (*crypto/sha512.digest).Write�bD.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h;b=0;c=$ifaceNil;  Hd=this;  zb=a.$length;  �d.len=(e=d.len,f=new $Uint64(0,b),new $Uint64(e.$high+f.$high,e.$low+f.$low));    if(d.nx>0){  �g=$copySlice($subslice(new R(d.x),d.nx),a);  �d.nx=d.nx+(g)>>0;    if(d.nx===128){  �N(d,new R(d.x));  �d.nx=0;    }  a=$subslice(a,g);    }    if(a.$length>=128){  1h=(a.$length&~127)>>0;  NN(d,$subslice(a,0,h));  `a=$subslice(a,h);    }    if(a.$length>0){  �d.nx=$copySlice(new R(d.x),a);    }  �return[b,c];    };D.prototype.Write=function(a){return this.$val.Write(a);};digestcrypto/sha512.Rcrypto/sha512.blockcrypto/sha512.digest (*crypto/sha512.digest).Sum��D.ptr.prototype.Sum=function(a){var $ptr,a,b,c,d,e;  �b=this;  c=new D.ptr();  %$copy(c,b,D);  /d=$clone(c.checkSum(),S);  Ee=c.function$4;  Zif(e===6){  preturn $appendSlice(a,$subslice(new R(d),0,48));  �}else if(e===14){  �return $appendSlice(a,$subslice(new R(d),0,28));  �}else if(e===15){  �return $appendSlice(a,$subslice(new R(d),0,32));    }else{  !return $appendSlice(a,new R(d));    }    };D.prototype.Sum=function(a){return this.$val.Sum(a);};digestcrypto/sha512.Rcrypto/sha512.Scrypto/sha512.checkSum~crypto/sha512.digest  (*crypto/sha512.digest).checkSum��D.ptr.prototype.checkSum=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;  Ka=this;  �b=a.len;  �c=$clone(Q.zero(),Q);  �c[0]=128;    if((d=$div64(b,new $Uint64(0,128),true),(d.$high<0||(d.$high===0&&d.$low<112)))){  �a.Write($subslice(new R(c),0,$flatten64((e=$div64(b,new $Uint64(0,128),true),new $Uint64(0-e.$high,112-e.$low)))));    }else{  a.Write($subslice(new R(c),0,$flatten64((f=$div64(b,new $Uint64(0,128),true),new $Uint64(0-f.$high,240-f.$low)))));    }  Wb=$shiftLeft64(b,(3));  fg=0;while(true){if(!(g<16)){break;}  �((g<0||g>=c.length)?$throwRuntimeError("index out of range"):c[g]=($shiftRightUint64(b,((120-(8*g>>>0)>>>0))).$low<<24>>>24));  |g=g+(1)>>>0;    }  �a.Write($subslice(new R(c),0,16));    if(!((a.nx===0))){  �$panic(new $String("d.nx != 0"));    }  �h=new O(a.h);    if(a.function$4===6){  h=$subslice(new O(a.h),0,6);    }  -i=$clone(S.zero(),S);  @j=h;k=0;while(true){if(!(k<j.$length)){break;}l=k;m=((k<0||k>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+k]);  X(n=l*8>>0,((n<0||n>=i.length)?$throwRuntimeError("index out of range"):i[n]=($shiftRightUint64(m,56).$low<<24>>>24)));  v(o=(l*8>>0)+1>>0,((o<0||o>=i.length)?$throwRuntimeError("index out of range"):i[o]=($shiftRightUint64(m,48).$low<<24>>>24)));  �(p=(l*8>>0)+2>>0,((p<0||p>=i.length)?$throwRuntimeError("index out of range"):i[p]=($shiftRightUint64(m,40).$low<<24>>>24)));  �(q=(l*8>>0)+3>>0,((q<0||q>=i.length)?$throwRuntimeError("index out of range"):i[q]=($shiftRightUint64(m,32).$low<<24>>>24)));  �(r=(l*8>>0)+4>>0,((r<0||r>=i.length)?$throwRuntimeError("index out of range"):i[r]=($shiftRightUint64(m,24).$low<<24>>>24)));  �(s=(l*8>>0)+5>>0,((s<0||s>=i.length)?$throwRuntimeError("index out of range"):i[s]=($shiftRightUint64(m,16).$low<<24>>>24)));  (t=(l*8>>0)+6>>0,((t<0||t>=i.length)?$throwRuntimeError("index out of range"):i[t]=($shiftRightUint64(m,8).$low<<24>>>24)));  5(u=(l*8>>0)+7>>0,((u<0||u>=i.length)?$throwRuntimeError("index out of range"):i[u]=(m.$low<<24>>>24)));    k++;}  Rreturn i;    };D.prototype.checkSum=function(){return this.$val.checkSum();};digest	checkSum~crypto/sha512.Ocrypto/sha512.Qcrypto/sha512.Rcrypto/sha512.Scrypto/sha512.digest crypto/sha512.Sum512I��I=function(a){var $ptr,a,b;  �b=new D.ptr(P.zero(),Q.zero(),0,new $Uint64(0,0),7);  �b.Reset();  �b.Write(a);  �return b.checkSum();    };$pkg.Sum512=I;Sum512crypto/sha512.Pcrypto/sha512.Qcrypto/sha512.Sum512crypto/sha512.checkSum~crypto/sha512.digest crypto/sha512.Sum384J��J=function(a){var $ptr,a,b,c,d;b=T.zero();  zc=new D.ptr(P.zero(),Q.zero(),0,new $Uint64(0,0),6);  �c.Reset();  �c.Write(a);  �d=$clone(c.checkSum(),S);  �$copySlice(new R(b),$subslice(new R(d),0,48));  �return b;    };$pkg.Sum384=J;Sum384crypto/sha512.Pcrypto/sha512.Qcrypto/sha512.Rcrypto/sha512.Scrypto/sha512.Sum384crypto/sha512.Tcrypto/sha512.checkSum~crypto/sha512.digest crypto/sha512.Sum512_224K��K=function(a){var $ptr,a,b,c,d;b=U.zero();  kc=new D.ptr(P.zero(),Q.zero(),0,new $Uint64(0,0),14);  �c.Reset();  �c.Write(a);  �d=$clone(c.checkSum(),S);  �$copySlice(new R(b),$subslice(new R(d),0,28));  �return b;    };$pkg.Sum512_224=K;
Sum512_224crypto/sha512.Pcrypto/sha512.Qcrypto/sha512.Rcrypto/sha512.Scrypto/sha512.Sum512_224crypto/sha512.Ucrypto/sha512.checkSum~crypto/sha512.digest crypto/sha512.Sum512_256L��L=function(a){var $ptr,a,b,c,d;b=V.zero();  `c=new D.ptr(P.zero(),Q.zero(),0,new $Uint64(0,0),15);  �c.Reset();  �c.Write(a);  �d=$clone(c.checkSum(),S);  �$copySlice(new R(b),$subslice(new R(d),0,32));  �return b;    };$pkg.Sum512_256=L;
Sum512_256crypto/sha512.Pcrypto/sha512.Qcrypto/sha512.Rcrypto/sha512.Scrypto/sha512.Sum512_256crypto/sha512.Vcrypto/sha512.checkSum~crypto/sha512.digest crypto/sha512.blockN��N=function(a,b){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,c,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,d,da,db,dc,dd,de,df,dg,dh,di,dj,dk,dl,dm,dn,dp,dq,dr,ds,dt,du,dv,dw,dx,dy,dz,e,ea,eb,ec,ed,ee,ef,eg,eh,ei,ej,ek,el,em,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;   �c=$clone(W.zero(),W);   �d=a.h[0];e=a.h[1];f=a.h[2];g=a.h[3];h=a.h[4];i=a.h[5];j=a.h[6];k=a.h[7];l=d;m=e;n=f;o=g;p=h;q=i;r=j;s=k;  !cwhile(true){if(!(b.$length>=128)){break;}  !t=0;while(true){if(!(t<16)){break;}  !�u=t*8>>0;  !�((t<0||t>=c.length)?$throwRuntimeError("index out of range"):c[t]=(v=(w=(x=(y=(z=(aa=(ab=$shiftLeft64(new $Uint64(0,((u<0||u>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+u])),56),ac=$shiftLeft64(new $Uint64(0,(ad=u+1>>0,((ad<0||ad>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+ad]))),48),new $Uint64(ab.$high|ac.$high,(ab.$low|ac.$low)>>>0)),ae=$shiftLeft64(new $Uint64(0,(af=u+2>>0,((af<0||af>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+af]))),40),new $Uint64(aa.$high|ae.$high,(aa.$low|ae.$low)>>>0)),ag=$shiftLeft64(new $Uint64(0,(ah=u+3>>0,((ah<0||ah>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+ah]))),32),new $Uint64(z.$high|ag.$high,(z.$low|ag.$low)>>>0)),ai=$shiftLeft64(new $Uint64(0,(aj=u+4>>0,((aj<0||aj>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+aj]))),24),new $Uint64(y.$high|ai.$high,(y.$low|ai.$low)>>>0)),ak=$shiftLeft64(new $Uint64(0,(al=u+5>>0,((al<0||al>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+al]))),16),new $Uint64(x.$high|ak.$high,(x.$low|ak.$low)>>>0)),am=$shiftLeft64(new $Uint64(0,(an=u+6>>0,((an<0||an>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+an]))),8),new $Uint64(w.$high|am.$high,(w.$low|am.$low)>>>0)),ao=new $Uint64(0,(ap=u+7>>0,((ap<0||ap>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+ap]))),new $Uint64(v.$high|ao.$high,(v.$low|ao.$low)>>>0)));  !�t=t+(1)>>0;    }  "Zaq=16;while(true){if(!(aq<80)){break;}  "tas=(ar=aq-2>>0,((ar<0||ar>=c.length)?$throwRuntimeError("index out of range"):c[ar]));  "�bb=(at=(au=(av=$shiftRightUint64(as,19),aw=$shiftLeft64(as,45),new $Uint64(av.$high|aw.$high,(av.$low|aw.$low)>>>0)),ax=(ay=$shiftRightUint64(as,61),az=$shiftLeft64(as,3),new $Uint64(ay.$high|az.$high,(ay.$low|az.$low)>>>0)),new $Uint64(au.$high^ax.$high,(au.$low^ax.$low)>>>0)),ba=$shiftRightUint64(as,6),new $Uint64(at.$high^ba.$high,(at.$low^ba.$low)>>>0));  "�bd=(bc=aq-15>>0,((bc<0||bc>=c.length)?$throwRuntimeError("index out of range"):c[bc]));  "�bm=(be=(bf=(bg=$shiftRightUint64(bd,1),bh=$shiftLeft64(bd,63),new $Uint64(bg.$high|bh.$high,(bg.$low|bh.$low)>>>0)),bi=(bj=$shiftRightUint64(bd,8),bk=$shiftLeft64(bd,56),new $Uint64(bj.$high|bk.$high,(bj.$low|bk.$low)>>>0)),new $Uint64(bf.$high^bi.$high,(bf.$low^bi.$low)>>>0)),bl=$shiftRightUint64(bd,7),new $Uint64(be.$high^bl.$high,(be.$low^bl.$low)>>>0));  #((aq<0||aq>=c.length)?$throwRuntimeError("index out of range"):c[aq]=(bn=(bo=(bp=(bq=aq-7>>0,((bq<0||bq>=c.length)?$throwRuntimeError("index out of range"):c[bq])),new $Uint64(bb.$high+bp.$high,bb.$low+bp.$low)),new $Uint64(bo.$high+bm.$high,bo.$low+bm.$low)),br=(bs=aq-16>>0,((bs<0||bs>=c.length)?$throwRuntimeError("index out of range"):c[bs])),new $Uint64(bn.$high+br.$high,bn.$low+br.$low)));  "kaq=aq+(1)>>0;    }  #Ebt=l;bu=m;bv=n;bw=o;bx=p;by=q;bz=r;ca=s;cb=bt;cc=bu;cd=bv;ce=bw;cf=bx;cg=by;ch=bz;ci=ca;  #�cj=0;while(true){if(!(cj<80)){break;}  #�de=(ck=(cl=(cm=(cn=(co=(cp=(cq=$shiftRightUint64(cf,14),cr=$shiftLeft64(cf,50),new $Uint64(cq.$high|cr.$high,(cq.$low|cr.$low)>>>0)),cs=(ct=$shiftRightUint64(cf,18),cu=$shiftLeft64(cf,46),new $Uint64(ct.$high|cu.$high,(ct.$low|cu.$low)>>>0)),new $Uint64(cp.$high^cs.$high,(cp.$low^cs.$low)>>>0)),cv=(cw=$shiftRightUint64(cf,41),cx=$shiftLeft64(cf,23),new $Uint64(cw.$high|cx.$high,(cw.$low|cx.$low)>>>0)),new $Uint64(co.$high^cv.$high,(co.$low^cv.$low)>>>0)),new $Uint64(ci.$high+cn.$high,ci.$low+cn.$low)),cy=(cz=new $Uint64(cf.$high&cg.$high,(cf.$low&cg.$low)>>>0),da=(db=new $Uint64(~cf.$high,~cf.$low>>>0),new $Uint64(db.$high&ch.$high,(db.$low&ch.$low)>>>0)),new $Uint64(cz.$high^da.$high,(cz.$low^da.$low)>>>0)),new $Uint64(cm.$high+cy.$high,cm.$low+cy.$low)),dc=((cj<0||cj>=M.$length)?$throwRuntimeError("index out of range"):M.$array[M.$offset+cj]),new $Uint64(cl.$high+dc.$high,cl.$low+dc.$low)),dd=((cj<0||cj>=c.length)?$throwRuntimeError("index out of range"):c[cj]),new $Uint64(ck.$high+dd.$high,ck.$low+dd.$low));  $dw=(df=(dg=(dh=(di=$shiftRightUint64(cb,28),dj=$shiftLeft64(cb,36),new $Uint64(di.$high|dj.$high,(di.$low|dj.$low)>>>0)),dk=(dl=$shiftRightUint64(cb,34),dm=$shiftLeft64(cb,30),new $Uint64(dl.$high|dm.$high,(dl.$low|dm.$low)>>>0)),new $Uint64(dh.$high^dk.$high,(dh.$low^dk.$low)>>>0)),dn=(dp=$shiftRightUint64(cb,39),dq=$shiftLeft64(cb,25),new $Uint64(dp.$high|dq.$high,(dp.$low|dq.$low)>>>0)),new $Uint64(dg.$high^dn.$high,(dg.$low^dn.$low)>>>0)),dr=(ds=(dt=new $Uint64(cb.$high&cc.$high,(cb.$low&cc.$low)>>>0),du=new $Uint64(cb.$high&cd.$high,(cb.$low&cd.$low)>>>0),new $Uint64(dt.$high^du.$high,(dt.$low^du.$low)>>>0)),dv=new $Uint64(cc.$high&cd.$high,(cc.$low&cd.$low)>>>0),new $Uint64(ds.$high^dv.$high,(ds.$low^dv.$low)>>>0)),new $Uint64(df.$high+dr.$high,df.$low+dr.$low));  $�ci=ch;  $�ch=cg;  $�cg=cf;  $�cf=new $Uint64(ce.$high+de.$high,ce.$low+de.$low);  $�ce=cd;  $�cd=cc;  $�cc=cb;  $�cb=new $Uint64(de.$high+dw.$high,de.$low+dw.$low);  #�cj=cj+(1)>>0;    }  $�l=(dx=cb,new $Uint64(l.$high+dx.$high,l.$low+dx.$low));  $�m=(dy=cc,new $Uint64(m.$high+dy.$high,m.$low+dy.$low));  $�n=(dz=cd,new $Uint64(n.$high+dz.$high,n.$low+dz.$low));  $�o=(ea=ce,new $Uint64(o.$high+ea.$high,o.$low+ea.$low));  %p=(eb=cf,new $Uint64(p.$high+eb.$high,p.$low+eb.$low));  %q=(ec=cg,new $Uint64(q.$high+ec.$high,q.$low+ec.$low));  %r=(ed=ch,new $Uint64(r.$high+ed.$high,r.$low+ed.$low));  %#s=(ee=ci,new $Uint64(s.$high+ee.$high,s.$low+ee.$low));  %.b=$subslice(b,128);    }  %Aef=l;eg=m;eh=n;ei=o;ej=p;ek=q;el=r;em=s;a.h[0]=ef;a.h[1]=eg;a.h[2]=eh;a.h[3]=ei;a.h[4]=ej;a.h[5]=ek;a.h[6]=el;a.h[7]=em;    };blockcrypto/sha512.Wcrypto/sha512._Kcrypto/sha512.block ��{"Base":9652,"Files":[{"Name":"/usr/local/go/src/crypto/sha512/sha512.go","Base":1,"Size":6369,"Lines":[0,55,109,159,160,240,285,300,301,310,320,328,330,331,345,389,430,482,534,536,537,545,600,611,612,674,688,689,751,765,766,824,838,839,902,955,972,974,975,983,1000,1032,1064,1096,1128,1160,1192,1224,1256,1288,1320,1352,1384,1416,1448,1480,1512,1544,1576,1608,1640,1672,1704,1736,1768,1800,1832,1864,1896,1928,1960,1992,2024,2026,2027,2086,2107,2127,2149,2163,2180,2202,2204,2205,2232,2253,2274,2295,2316,2337,2358,2379,2400,2421,2442,2467,2488,2509,2530,2551,2572,2593,2614,2635,2660,2681,2702,2723,2744,2765,2786,2807,2828,2838,2855,2872,2889,2906,2923,2940,2957,2974,2977,2987,2998,3000,3001,3064,3087,3126,3137,3147,3149,3150,3224,3254,3297,3308,3318,3320,3321,3395,3425,3468,3479,3489,3491,3492,3558,3584,3623,3634,3644,3646,3647,3677,3698,3723,3740,3765,3782,3803,3820,3830,3844,3847,3849,3850,3904,3905,3960,3973,3994,4009,4036,4048,4069,4089,4101,4105,4117,4120,4142,4171,4189,4201,4204,4221,4246,4249,4257,4259,4260,4302,4369,4387,4397,4419,4440,4461,4500,4525,4564,4589,4628,4638,4670,4673,4675,4676,4717,4779,4793,4812,4827,4847,4879,4889,4925,4928,4929,4949,4960,4993,5029,5032,5052,5053,5069,5090,5093,5094,5107,5141,5155,5158,5159,5182,5205,5235,5267,5299,5331,5363,5395,5426,5452,5455,5456,5471,5473,5474,5525,5563,5601,5612,5627,5648,5650,5651,5702,5752,5790,5801,5816,5837,5869,5877,5879,5880,5939,5993,6035,6046,6061,6082,6114,6122,6124,6125,6184,6238,6280,6291,6306,6327,6359,6367],"Infos":null},{"Name":"/usr/local/go/src/crypto/sha512/sha512block.go","Base":6371,"Size":3280,"Lines":[0,55,109,159,160,177,178,200,258,288,289,304,305,324,345,366,387,408,429,450,471,492,513,534,555,576,597,618,639,660,681,702,723,744,765,786,807,828,849,870,891,912,933,954,975,996,1017,1038,1059,1080,1101,1122,1143,1164,1185,1206,1227,1248,1269,1290,1311,1332,1353,1374,1395,1416,1437,1458,1479,1500,1521,1542,1563,1584,1605,1626,1647,1668,1689,1710,1731,1752,1773,1794,1815,1836,1857,1878,1899,1920,1941,1962,1983,2004,2006,2007,2043,2061,2175,2198,2226,2240,2332,2413,2417,2446,2462,2531,2548,2613,2614,2651,2655,2656,2715,2716,2744,2864,2865,2975,2976,2985,2994,3003,3017,3026,3035,3044,3059,3063,3064,3074,3084,3094,3104,3114,3124,3134,3144,3145,3161,3164,3165,3278],"Infos":null}]}
 