t��Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �q!��encoding/csvcsvbufiobyteserrorsfmtiostringsunicodeunicode/utf8�	
$$ exports $$
pv0csvencoding/csvErrBareQuote6ErrFieldCount6ErrQuote6 ErrTrailingComma6	NewReader rReaderioio Read p2nerr6   Reader 
Comma4 Comment4 FieldsPerRecord LazyQuotes  TrailingComma   TrimLeadingSpace  line  column  r Reader
bufio
bufiobuf2 rd: r w err6 lastByte lastRuneSize $
ResetbJr:  
resetbJbuf2r:  fillbJ   readErrbJ  6 PeekbJn 2 6 DiscardbJndiscardederr6 ReadbJp2nerr6 ReadBytebJ c2err6 UnreadBytebJ  6 ReadRunebJ r4sizeerr6 UnreadRunebJ  6 BufferedbJ   ReadSlicebJ
delim2line2err6 ReadLinebJ line2isPrefix err6 ReadBytesbJ
delim2line2err6 ReadStringbJ
delim2line err6 WriteTobJwWriter 
Write p2nerr6  n
err6 writeBufbJw� 
 6  
field Buffer
bytes
bytes
buf2 off runeBytes2 bootstrap�2 lastReadreadOp  .
Bytesb�  2 Stringb�    Lenb�   Capb�   Truncateb�n  
Resetb�   growb�n  Growb�n  
Writeb�p2nerr6 WriteStringb�s nerr6 ReadFromb�r:n
err6 WriteTob�w�n
err6 WriteByteb�c2 6 WriteRuneb�r4nerr6 Readb�p2nerr6 Nextb�n 2 ReadByteb� c2err6 ReadRuneb� r4sizeerr6 UnreadRuneb�  6 UnreadByteb�  6 ReadBytesb�
delim2line2err6 readSliceb�
delim2line2err6 ReadStringb�
delim2line err6  
errorrDerr6 6 ReadrD record err6 ReadAllrD records err6 readRunerD  4 6 skiprD
delim4 6 parseRecordrD fields err6 parseFieldrD haveField 
delim4err6  	NewWriter w� Writer 
Comma4 UseCRLF  w Writererr6 buf2 n wr� 
Resetb�w�  
Flushb�  6 
flushb�  6 Availableb�   Bufferedb�   
Writeb�p2nnerr6 WriteByteb�c2 6 WriteRuneb�r4sizeerr6 WriteStringb�s   6 ReadFromb�r:n
err6  

Writew�record err6 
Flushw�   
Errorw�  6 WriteAllw�records err6  fieldNeedsQuotesw�
field     ParseError Line Column Err6 
Errore�    D�+AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["bytes"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["errors"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["fmt"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["io"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["strings"];a    $r=G.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["unicode"];a    $r=F.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} HH=$packages["unicode/utf8"];a    $r=H.$init();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} I�I=$pkg.ParseError=$newType(0,$kindStruct,"csv.ParseError","ParseError","encoding/csv",function(Line_,Column_,Err_){this.$val=this;if(arguments.length===0){this.Line=0;this.Column=0;this.Err=$ifaceNil;return;}this.Line=Line_;this.Column=Column_;this.Err=Err_;});QT.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];��I.init([{prop:"Line",name:"Line",pkg:"",typ:$Int,tag:""},{prop:"Column",name:"Column",pkg:"",typ:$Int,tag:""},{prop:"Err",name:"Err",pkg:"",typ:$error,tag:""}]);
ParseErrorencoding/csv.ParseErrorencoding/csv.T J��J=$pkg.Reader=$newType(0,$kindStruct,"csv.Reader","Reader","encoding/csv",function(Comma_,Comment_,FieldsPerRecord_,LazyQuotes_,TrailingComma_,TrimLeadingSpace_,line_,column_,r_,field_){this.$val=this;if(arguments.length===0){this.Comma=0;this.Comment=0;this.FieldsPerRecord=0;this.LazyQuotes=false;this.TrailingComma=false;this.TrimLeadingSpace=false;this.line=0;this.column=0;this.r=O.nil;this.field=new B.Buffer.ptr();return;}this.Comma=Comma_;this.Comment=Comment_;this.FieldsPerRecord=FieldsPerRecord_;this.LazyQuotes=LazyQuotes_;this.TrailingComma=TrailingComma_;this.TrimLeadingSpace=TrimLeadingSpace_;this.line=line_;this.column=column_;this.r=r_;this.field=field_;});�fU.methods=[{prop:"error",name:"error",pkg:"encoding/csv",typ:$funcType([$error],[$error],false)},{prop:"Read",name:"Read",pkg:"",typ:$funcType([],[P,$error],false)},{prop:"ReadAll",name:"ReadAll",pkg:"",typ:$funcType([],[Q,$error],false)},{prop:"readRune",name:"readRune",pkg:"encoding/csv",typ:$funcType([],[$Int32,$error],false)},{prop:"skip",name:"skip",pkg:"encoding/csv",typ:$funcType([$Int32],[$error],false)},{prop:"parseRecord",name:"parseRecord",pkg:"encoding/csv",typ:$funcType([],[P,$error],false)},{prop:"parseField",name:"parseField",pkg:"encoding/csv",typ:$funcType([],[$Bool,$Int32,$error],false)}];��J.init([{prop:"Comma",name:"Comma",pkg:"",typ:$Int32,tag:""},{prop:"Comment",name:"Comment",pkg:"",typ:$Int32,tag:""},{prop:"FieldsPerRecord",name:"FieldsPerRecord",pkg:"",typ:$Int,tag:""},{prop:"LazyQuotes",name:"LazyQuotes",pkg:"",typ:$Bool,tag:""},{prop:"TrailingComma",name:"TrailingComma",pkg:"",typ:$Bool,tag:""},{prop:"TrimLeadingSpace",name:"TrimLeadingSpace",pkg:"",typ:$Bool,tag:""},{prop:"line",name:"line",pkg:"encoding/csv",typ:$Int,tag:""},{prop:"column",name:"column",pkg:"encoding/csv",typ:$Int,tag:""},{prop:"r",name:"r",pkg:"encoding/csv",typ:O,tag:""},{prop:"field",name:"field",pkg:"encoding/csv",typ:B.Buffer,tag:""}]);Readerbytes.Bufferencoding/csv.Oencoding/csv.Pencoding/csv.Qencoding/csv.Readerencoding/csv.U L��L=$pkg.Writer=$newType(0,$kindStruct,"csv.Writer","Writer","encoding/csv",function(Comma_,UseCRLF_,w_){this.$val=this;if(arguments.length===0){this.Comma=0;this.UseCRLF=false;this.w=R.nil;return;}this.Comma=Comma_;this.UseCRLF=UseCRLF_;this.w=w_;});��V.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([P],[$error],false)},{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[],false)},{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$error],false)},{prop:"WriteAll",name:"WriteAll",pkg:"",typ:$funcType([Q],[$error],false)},{prop:"fieldNeedsQuotes",name:"fieldNeedsQuotes",pkg:"encoding/csv",typ:$funcType([$String],[$Bool],false)}];��L.init([{prop:"Comma",name:"Comma",pkg:"",typ:$Int32,tag:""},{prop:"UseCRLF",name:"UseCRLF",pkg:"",typ:$Bool,tag:""},{prop:"w",name:"w",pkg:"encoding/csv",typ:R,tag:""}]);Writerencoding/csv.Pencoding/csv.Qencoding/csv.Rencoding/csv.Vencoding/csv.Writer NN=$sliceType($emptyInterface);N OO=$ptrType(A.Reader);Obufio.Reader PP=$sliceType($String);P QQ=$sliceType(P);Qencoding/csv.P RR=$ptrType(A.Writer);Rbufio.Writer SS=$sliceType($Uint8);S TT=$ptrType(I);Tencoding/csv.ParseError UU=$ptrType(J);Uencoding/csv.Reader VV=$ptrType(L);Vencoding/csv.Writer ErrTrailingComma ErrBareQuote ErrQuote ErrFieldCount C    $pkg.ErrTrailingComma=C.New("extra delimiter at end of line");encoding/csv.ErrTrailingComma
errors.New <    $pkg.ErrBareQuote=C.New("bare \" in non-quoted-field");encoding/csv.ErrBareQuote
errors.New 3    $pkg.ErrQuote=C.New("extraneous \" in field");encoding/csv.ErrQuote
errors.New @    $pkg.ErrFieldCount=C.New("wrong number of fields in line");encoding/csv.ErrFieldCount
errors.New  (*encoding/csv.ParseError).Error�QI.ptr.prototype.Error=function(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �a=this;  �b=D.Sprintf("line %d, column %d: %s",new N([new $Int(a.Line),new $Int(a.Column),a.Err]));$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:I.ptr.prototype.Error};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.Error=function(){return this.$val.Error();};
ParseErrorencoding/csv.Nencoding/csv.ParseErrorfmt.Sprintf encoding/csv.NewReaderK��K=function(a){var $ptr,a;  �return new J.ptr(44,0,0,false,false,false,0,0,A.NewReader(a),new B.Buffer.ptr());    };$pkg.NewReader=K;	NewReaderbufio.NewReaderbufio.Readerbytes.Bufferencoding/csv.NewReaderencoding/csv.Oencoding/csv.Reader (*encoding/csv.Reader).error��J.ptr.prototype.error=function(a){var $ptr,a,b;  b=this;  *return new I.ptr(b.line,b.column,a);    };J.prototype.error=function(a){return this.$val.error(a);};Readererror~encoding/csv.ParseErrorencoding/csv.Reader (*encoding/csv.Reader).Read�mJ.ptr.prototype.Read=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=P.nil;b=$ifaceNil;  �c=this;   case 1:  (e=c.parseRecord();$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;a=d[0];b=d[1];    if(!(a===P.nil)){  ^$s=2;continue;    }    if(!($interfaceIsEqual(b,$ifaceNil))){    f=P.nil;g=b;a=f;b=g;return[a,b];    }    $s=1;continue;case 2:    if(c.FieldsPerRecord>0){    if(!((a.$length===c.FieldsPerRecord))){  �c.column=0;    h=a;i=c.error($pkg.ErrFieldCount);a=h;b=i;return[a,b];    }    }else if(c.FieldsPerRecord===0){  Yc.FieldsPerRecord=a.$length;    }    j=a;k=$ifaceNil;a=j;b=k;return[a,b];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:J.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.Read=function(){return this.$val.Read();};Readerencoding/csv.ErrFieldCountencoding/csv.Pencoding/csv.Readerencoding/csv.error~encoding/csv.parseRecord~ (*encoding/csv.Reader).ReadAll��J.ptr.prototype.ReadAll=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=Q.nil;b=$ifaceNil;  �c=this;  �case 1:  �e=c.Read();$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];    if($interfaceIsEqual(g,E.EOF)){    h=a;i=$ifaceNil;a=h;b=i;return[a,b];    }    if(!($interfaceIsEqual(g,$ifaceNil))){    j=Q.nil;k=g;a=j;b=k;return[a,b];    }  Ka=$append(a,f);    $s=1;continue;case 2:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:J.ptr.prototype.ReadAll};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.ReadAll=function(){return this.$val.ReadAll();};Readerencoding/csv.Pencoding/csv.Qencoding/csv.Readerio.EOF (*encoding/csv.Reader).readRune��J.ptr.prototype.readRune=function(){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  8a=this;  _c=a.r.ReadRune();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[2];  =if(d===13){$s=2;continue;}$s=3;continue;    case 2:  Og=a.r.ReadRune();$s=4;case 4:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;d=f[0];e=f[2];    if($interfaceIsEqual(e,$ifaceNil)){    if(!((d===10))){  �a.r.UnreadRune();  �d=13;    }    }    case 3:  �a.column=a.column+(1)>>0;  �return[d,e];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:J.ptr.prototype.readRune};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.readRune=function(){return this.$val.readRune();};Reader	readRune~encoding/csv.Reader (*encoding/csv.Reader).skip��J.ptr.prototype.skip=function(a){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  +b=this;  Pcase 1:  Xd=b.readRune();$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];f=c[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  �return f;    }    if(e===a){  �return $ifaceNil;    }    $s=1;continue;case 2:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:J.ptr.prototype.skip};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.skip=function(a){return this.$val.skip(a);};Readerskip~encoding/csv.Readerencoding/csv.readRune~ "(*encoding/csv.Reader).parseRecord��J.ptr.prototype.parseRecord=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=P.nil;b=$ifaceNil;  c=this;  �c.line=c.line+(1)>>0;  c.column=-1;  �e=c.r.ReadRune();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];b=d[2];    if(!($interfaceIsEqual(b,$ifaceNil))){    g=P.nil;h=b;a=g;b=h;return[a,b];    }  �if(!((c.Comment===0))&&(f===c.Comment)){$s=2;continue;}$s=3;continue;    case 2:    k=c.skip(10);$s=4;case 4:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}i=P.nil;j=k;a=i;b=j;return[a,b];    case 3:  7c.r.UnreadRune();  xcase 5:  �m=c.parseField();$s=7;case 7:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}l=m;n=l[0];o=l[1];p=l[2];    if(n){    if(c.FieldsPerRecord>0&&a===P.nil){  fa=$makeSlice(P,0,c.FieldsPerRecord);    }  �a=$append(a,c.field.String());    }    if((o===10)||$interfaceIsEqual(p,E.EOF)){    q=a;r=p;a=q;b=r;return[a,b];    }else if(!($interfaceIsEqual(p,$ifaceNil))){    s=P.nil;t=p;a=s;b=t;return[a,b];    }    $s=5;continue;case 6:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:J.ptr.prototype.parseRecord};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.parseRecord=function(){return this.$val.parseRecord();};ReaderparseRecord~encoding/csv.Pencoding/csv.Readerencoding/csv.parseField~encoding/csv.skip~io.EOF !(*encoding/csv.Reader).parseField��J.ptr.prototype.parseField=function(){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;ai=$f.ai;aj=$f.aj;ak=$f.ak;al=$f.al;am=$f.am;an=$f.an;ao=$f.ao;ap=$f.ap;aq=$f.aq;ar=$f.ar;as=$f.as;at=$f.at;au=$f.au;av=$f.av;aw=$f.aw;ax=$f.ax;ay=$f.ay;az=$f.az;b=$f.b;ba=$f.ba;bb=$f.bb;bc=$f.bc;bd=$f.bd;be=$f.be;bf=$f.bf;bg=$f.bg;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=false;b=0;c=$ifaceNil;  �d=this;  ,d.field.Reset();  >f=d.readRune();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[0];c=e[1];  Wcase 2:if(!($interfaceIsEqual(c,$ifaceNil)&&d.TrimLeadingSpace&&!((g===10))&&F.IsSpace(g))){$s=3;continue;}  �i=d.readRune();$s=4;case 4:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;g=h[0];c=h[1];    $s=2;continue;case 3:    if($interfaceIsEqual(c,E.EOF)&&!((d.column===0))){    j=true;k=0;l=c;a=j;b=k;c=l;return[a,b,c];    }    if(!($interfaceIsEqual(c,$ifaceNil))){    m=false;n=0;o=c;a=m;b=n;c=o;return[a,b,c];    }  +p=g;if(p===d.Comma){$s=5;continue;}if(p===10){$s=6;continue;}if(p===34){$s=7;continue;}$s=8;continue;  8case 5:    $s=9;continue;  ^case 6:    if(d.column===0){    q=false;r=g;s=$ifaceNil;a=q;b=r;c=s;return[a,b,c];    }    t=true;u=g;v=$ifaceNil;a=t;b=u;c=v;return[a,b,c];    $s=9;continue;  �case 7:  case 10:  x=d.readRune();$s=12;case 12:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}w=x;g=w[0];c=w[1];    if(!($interfaceIsEqual(c,$ifaceNil))){    if($interfaceIsEqual(c,E.EOF)){    if(d.LazyQuotes){    y=true;z=0;aa=c;a=y;b=z;c=aa;return[a,b,c];    }    ab=false;ac=0;ad=d.error($pkg.ErrQuote);a=ab;b=ac;c=ad;return[a,b,c];    }    ae=false;af=0;ag=c;a=ae;b=af;c=ag;return[a,b,c];    }  �ah=g;if(ah===34){$s=13;continue;}if(ah===10){$s=14;continue;}$s=15;continue;  �case 13:  �aj=d.readRune();$s=16;case 16:if($c){$c=false;aj=aj.$blk();}if(aj&&aj.$blk!==undefined){break s;}ai=aj;g=ai[0];c=ai[1];    if(!($interfaceIsEqual(c,$ifaceNil))||(g===d.Comma)){  =$s=11;continue s;    }    if(g===10){    ak=true;al=g;am=$ifaceNil;a=ak;b=al;c=am;return[a,b,c];    }    if(!((g===34))){    if(!d.LazyQuotes){  �d.column=d.column-(1)>>0;    an=false;ao=0;ap=d.error($pkg.ErrQuote);a=an;b=ao;c=ap;return[a,b,c];    }   d.field.WriteRune(34);    }    $s=15;continue;   3case 14:   Bd.line=d.line+(1)>>0;   Od.column=-1;    case 15:   ed.field.WriteRune(g);    $s=10;continue;case 11:    $s=9;continue;case 8:   �case 17:   �d.field.WriteRune(g);   �ar=d.readRune();$s=19;case 19:if($c){$c=false;ar=ar.$blk();}if(ar&&ar.$blk!==undefined){break s;}aq=ar;g=aq[0];c=aq[1];    if(!($interfaceIsEqual(c,$ifaceNil))||(g===d.Comma)){  !$s=18;continue;    }    if(g===10){    as=true;at=g;au=$ifaceNil;a=as;b=at;c=au;return[a,b,c];    }    if(!d.LazyQuotes&&(g===34)){    av=false;aw=0;ax=d.error($pkg.ErrBareQuote);a=av;b=aw;c=ax;return[a,b,c];    }    $s=17;continue;case 18:    case 9:    if(!($interfaceIsEqual(c,$ifaceNil))){    if($interfaceIsEqual(c,E.EOF)){    ay=true;az=0;ba=c;a=ay;b=az;c=ba;return[a,b,c];    }    bb=false;bc=0;bd=c;a=bb;b=bc;c=bd;return[a,b,c];    }    be=true;bf=g;bg=$ifaceNil;a=be;b=bf;c=bg;return[a,b,c];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:J.ptr.prototype.parseField};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.ai=ai;$f.aj=aj;$f.ak=ak;$f.al=al;$f.am=am;$f.an=an;$f.ao=ao;$f.ap=ap;$f.aq=aq;$f.ar=ar;$f.as=as;$f.at=at;$f.au=au;$f.av=av;$f.aw=aw;$f.ax=ax;$f.ay=ay;$f.az=az;$f.b=b;$f.ba=ba;$f.bb=bb;$f.bc=bc;$f.bd=bd;$f.be=be;$f.bf=bf;$f.bg=bg;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.parseField=function(){return this.$val.parseField();};ReaderparseField~encoding/csv.ErrBareQuoteencoding/csv.ErrQuoteencoding/csv.Readerencoding/csv.error~encoding/csv.readRune~io.EOFunicode.IsSpace encoding/csv.NewWriterM`M=function(a){var $ptr,a;  %�return new L.ptr(44,false,A.NewWriter(a));    };$pkg.NewWriter=M;	NewWriterbufio.NewWriterbufio.Writerencoding/csv.NewWriterencoding/csv.Rencoding/csv.Writer (*encoding/csv.Writer).Write�L.ptr.prototype.Write=function(a){var $ptr,a,aa,ab,ac,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=$ifaceNil;  &Yc=this;  &�d=a;e=0;case 1:if(!(e<d.$length)){$s=2;continue;}f=e;g=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  &�if(f>0){$s=3;continue;}$s=4;continue;    case 3:  &�i=c.w.WriteRune(c.Comma);$s=5;case 5:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;b=h[1];if(!($interfaceIsEqual(b,$ifaceNil))){$s=6;continue;}$s=7;continue;    case 6:  &�return b;    case 7:    case 4:  'qif(!c.fieldNeedsQuotes(g)){$s=8;continue;}$s=9;continue;    case 8:  '�k=c.w.WriteString(g);$s=10;case 10:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;b=j[1];if(!($interfaceIsEqual(b,$ifaceNil))){$s=11;continue;}$s=12;continue;    case 11:  '�return b;    case 12:  '�e++;$s=1;continue;    case 9:  '�l=c.w.WriteByte(34);$s=13;case 13:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}b=l;if(!($interfaceIsEqual(b,$ifaceNil))){$s=14;continue;}$s=15;continue;    case 14:  (return b;    case 15:  ("m=g;n=0;case 16:if(!(n<m.length)){$s=17;continue;}o=$decodeRune(m,n);p=o[0];  (@q=p;if(q===34){$s=18;continue;}if(q===13){$s=19;continue;}if(q===10){$s=20;continue;}$s=21;continue;  (Ocase 18:  (]s=c.w.WriteString("\"\"");$s=23;case 23:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}r=s;b=r[1];    $s=22;continue;  (case 19:  (�if(!c.UseCRLF){$s=24;continue;}$s=25;continue;    case 24:  (�t=c.w.WriteByte(13);$s=26;case 26:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}b=t;    case 25:    $s=22;continue;  (�case 20:  (�if(c.UseCRLF){$s=27;continue;}$s=28;continue;    case 27:  (�v=c.w.WriteString("\r\n");$s=30;case 30:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}u=v;b=u[1];    $s=29;continue;case 28:  )w=c.w.WriteByte(10);$s=31;case 31:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}b=w;    case 29:    $s=22;continue;case 21:  )Ly=c.w.WriteRune(p);$s=32;case 32:if($c){$c=false;y=y.$blk();}if(y&&y.$blk!==undefined){break s;}x=y;b=x[1];    case 22:    if(!($interfaceIsEqual(b,$ifaceNil))){  )�return b;    }    n+=o[1];$s=16;continue;case 17:  )�z=c.w.WriteByte(34);$s=33;case 33:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}b=z;if(!($interfaceIsEqual(b,$ifaceNil))){$s=34;continue;}$s=35;continue;    case 34:  )�return b;    case 35:    e++;$s=1;continue;case 2:  )�if(c.UseCRLF){$s=36;continue;}$s=37;continue;    case 36:  )�ab=c.w.WriteString("\r\n");$s=39;case 39:if($c){$c=false;ab=ab.$blk();}if(ab&&ab.$blk!==undefined){break s;}aa=ab;b=aa[1];    $s=38;continue;case 37:  *ac=c.w.WriteByte(10);$s=40;case 40:if($c){$c=false;ac=ac.$blk();}if(ac&&ac.$blk!==undefined){break s;}b=ac;    case 38:  *.return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:L.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Write=function(a){return this.$val.Write(a);};Writerencoding/csv.Writerencoding/csv.fieldNeedsQuotes~ (*encoding/csv.Writer).Flush��L.ptr.prototype.Flush=function(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  *�a=this;  *�b=a.w.Flush();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:L.ptr.prototype.Flush};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Flush=function(){return this.$val.Flush();};Writerencoding/csv.Writer (*encoding/csv.Writer).Error�;L.ptr.prototype.Error=function(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  +6a=this;  +Rc=a.w.Write(S.nil);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[1];  +lreturn d;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:L.ptr.prototype.Error};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Error=function(){return this.$val.Error();};Writerencoding/csv.Sencoding/csv.Writer (*encoding/csv.Writer).WriteAll��L.ptr.prototype.WriteAll=function(a){var $ptr,a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=$ifaceNil;  +�c=this;  ,d=a;e=0;case 1:if(!(e<d.$length)){$s=2;continue;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  ,)g=c.Write(f);$s=3;case 3:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}b=g;    if(!($interfaceIsEqual(b,$ifaceNil))){    b=b;return b;    }    e++;$s=1;continue;case 2:    h=c.w.Flush();$s=4;case 4:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}b=h;return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:L.ptr.prototype.WriteAll};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.WriteAll=function(a){return this.$val.WriteAll(a);};Writerencoding/csv.Writer '(*encoding/csv.Writer).fieldNeedsQuotes�hL.ptr.prototype.fieldNeedsQuotes=function(a){var $ptr,a,b,c,d;  /�b=this;    if(a===""){  /�return false;    }    if(a==="\\."||G.IndexRune(a,b.Comma)>=0||G.IndexAny(a,"\"\r\n")>=0){  0Ureturn true;    }  0fc=H.DecodeRuneInString(a);d=c[0];  0�return F.IsSpace(d);    };L.prototype.fieldNeedsQuotes=function(a){return this.$val.fieldNeedsQuotes(a);};WriterfieldNeedsQuotes~encoding/csv.Writerstrings.IndexAnystrings.IndexRuneunicode.IsSpaceunicode/utf8.DecodeRuneInString �	�{"Base":12461,"Files":[{"Name":"/usr/local/go/src/encoding/csv/reader.go","Base":1,"Size":8715,"Lines":[0,55,109,159,160,228,231,309,384,434,437,461,464,510,513,581,584,663,728,731,800,870,880,883,898,901,933,936,961,964,1001,1004,1074,1117,1120,1167,1170,1184,1187,1233,1236,1293,1296,1311,1334,1337,1351,1354,1370,1395,1407,1408,1417,1426,1435,1445,1452,1458,1469,1471,1472,1520,1568,1593,1640,1702,1736,1738,1739,1777,1848,1850,1851,1916,1922,2005,2067,2124,2189,2191,2192,2243,2246,2322,2396,2430,2433,2487,2490,2563,2597,2600,2664,2742,2815,2890,2948,2951,3023,3074,3077,3152,3173,3241,3303,3366,3410,3478,3523,3545,3567,3599,3630,3632,3633,3686,3724,3741,3755,3784,3787,3789,3790,3838,3880,3901,3919,3939,3954,3957,3959,3960,4037,4071,4126,4133,4165,4186,4195,4199,4217,4236,4240,4243,4244,4272,4312,4357,4398,4402,4438,4472,4475,4495,4497,4498,4549,4586,4662,4740,4753,4814,4821,4847,4868,4891,4895,4913,4932,4936,4972,4975,4977,4978,5050,5126,5169,5213,5243,5244,5307,5369,5435,5452,5482,5500,5519,5540,5554,5559,5563,5566,5578,5594,5596,5597,5668,5710,5717,5743,5761,5775,5779,5798,5812,5816,5819,5821,5822,5882,5944,6005,6063,6134,6144,6159,6160,6220,6279,6313,6314,6344,6361,6379,6382,6383,6423,6450,6453,6471,6472,6518,6525,6567,6584,6651,6706,6753,6803,6808,6853,6857,6895,6917,6942,6961,6965,6968,6970,6971,7041,7116,7138,7210,7227,7228,7253,7330,7355,7358,7359,7396,7418,7421,7438,7461,7464,7465,7478,7493,7515,7516,7528,7579,7600,7625,7629,7652,7653,7664,7682,7691,7699,7725,7744,7767,7790,7816,7823,7863,7869,7894,7899,7914,7927,7954,7991,8009,8015,8035,8061,8067,8086,8110,8127,8168,8175,8205,8233,8239,8253,8266,8284,8289,8314,8318,8319,8329,8349,8357,8382,8408,8444,8454,8459,8478,8503,8508,8543,8586,8591,8595,8598,8599,8616,8637,8660,8664,8687,8690,8691,8713],"Infos":null},{"Name":"/usr/local/go/src/encoding/csv/writer.go","Base":8717,"Size":3743,"Lines":[0,55,109,159,160,172,173,182,191,197,208,219,235,237,238,288,291,360,436,516,519,552,555,631,652,711,768,791,793,794,846,884,901,915,944,947,949,950,1026,1094,1148,1180,1193,1245,1256,1261,1265,1266,1321,1378,1412,1464,1475,1480,1492,1496,1540,1550,1554,1555,1584,1599,1612,1647,1661,1681,1712,1718,1732,1751,1789,1802,1833,1839,1851,1882,1887,1906,1917,1922,1926,1927,1971,1981,1985,1988,2004,2039,2049,2077,2080,2088,2090,2091,2154,2217,2244,2257,2259,2260,2339,2372,2398,2410,2412,2413,2492,2552,2586,2610,2628,2642,2646,2649,2669,2671,2672,2746,2806,2869,2942,3018,3091,3163,3232,3287,3362,3402,3459,3514,3532,3547,3550,3654,3668,3671,3672,3713,3741],"Infos":null}]}
 