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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �H���unicode/utf8utf8��
$$ exports $$
pv0utf8unicode/utf8$	DecodeLastRune p2r4size 	,DecodeLastRuneInString s r4size 	DecodeRune p2r4size 	$DecodeRuneInString s r4size 	EncodeRune p2r4  	FullRune p2   	 FullRuneInString s    MaxRune&!���	RuneCount p2  	"RuneCountInString s n RuneError&!��	RuneLen r4  RuneSelf$!�	RuneStart b2   UTFMax$!	
Valid p2   	ValidRune r4   	ValidString s    B��B=$pkg.acceptRange=$newType(0,$kindStruct,"utf8.acceptRange",true,"unicode/utf8",false,function(lo_,hi_){this.$val=this;if(arguments.length===0){this.lo=0;this.hi=0;return;}this.lo=lo_;this.hi=hi_;});��B.init("unicode/utf8",[{prop:"lo",name:"lo",exported:false,typ:$Uint8,tag:""},{prop:"hi",name:"hi",exported:false,typ:$Uint8,tag:""}]);acceptRangeunicode/utf8.acceptRange Afirst CacceptRanges ��    A=$toNativeArray($kindUint8,[240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,19,3,3,3,3,3,3,3,3,3,3,3,3,35,3,3,52,4,4,4,68,241,241,241,241,241,241,241,241,241,241,241]);firstunicode/utf8.first ��    C=$toNativeArray($kindStruct,[new B.ptr(128,191),new B.ptr(160,191),new B.ptr(128,159),new B.ptr(144,191),new B.ptr(128,143)]);acceptRangesunicode/utf8.acceptRangeunicode/utf8.acceptRanges unicode/utf8.FullRuneD� D=function(a){var $ptr,a,b,c,d,e,f,g;  �b=a.$length;    if(b===0){  �return false;    }  �d=(c=(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]),((c<0||c>=A.length)?$throwRuntimeError("index out of range"):A[c]));    if(b>=(((d&7)>>>0)>>0)){  return true;    }  ]f=$clone((e=d>>>4<<24>>>24,((e<0||e>=C.length)?$throwRuntimeError("index out of range"):C[e])),B);    if(b>1){  �g=(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]);    if(g<f.lo||f.hi<g){  �return true;    }else if(b>2&&((2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2])<128||191<(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]))){  �return true;    }    }  return false;    };$pkg.FullRune=D;FullRuneunicode/utf8.FullRuneunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.FullRuneInStringE�/E=function(a){var $ptr,a,b,c,d,e,f,g;  �b=a.length;    if(b===0){  �return false;    }  �d=(c=a.charCodeAt(0),((c<0||c>=A.length)?$throwRuntimeError("index out of range"):A[c]));    if(b>=(((d&7)>>>0)>>0)){  �return true;    }  'f=$clone((e=d>>>4<<24>>>24,((e<0||e>=C.length)?$throwRuntimeError("index out of range"):C[e])),B);    if(b>1){  Ug=a.charCodeAt(1);    if(g<f.lo||f.hi<g){  �return true;    }else if(b>2&&(a.charCodeAt(2)<128||191<a.charCodeAt(2))){  �return true;    }    }  �return false;    };$pkg.FullRuneInString=E;FullRuneInStringunicode/utf8.FullRuneInStringunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.DecodeRuneF�F=function(a){var $ptr,a,aa,ab,ac,ad,ae,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;b=0;c=0;  �d=a.$length;    if(d<1){    e=65533;f=0;b=e;c=f;return[b,c];    }  g=(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]);  *h=((g<0||g>=A.length)?$throwRuntimeError("index out of range"):A[g]);    if(h>=240){  i=((h>>0)<<31>>0)>>31>>0;    j=((((0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0])>>0)&~i)>>0)|(65533&i);k=1;b=j;c=k;return[b,c];    }  nl=(h&7)>>>0;  {n=$clone((m=h>>>4<<24>>>24,((m<0||m>=C.length)?$throwRuntimeError("index out of range"):C[m])),B);    if(d<(l>>0)){    o=65533;p=1;b=o;c=p;return[b,c];    }  �q=(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]);    if(q<n.lo||n.hi<q){    r=65533;s=1;b=r;c=s;return[b,c];    }    if(l===2){    t=((((g&31)>>>0)>>0)<<6>>0)|(((q&63)>>>0)>>0);u=2;b=t;c=u;return[b,c];    }  Pv=(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]);    if(v<128||191<v){    w=65533;x=1;b=w;c=x;return[b,c];    }    if(l===3){    y=(((((g&15)>>>0)>>0)<<12>>0)|((((q&63)>>>0)>>0)<<6>>0))|(((v&63)>>>0)>>0);z=3;b=y;c=z;return[b,c];    }  �aa=(3>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]);    if(aa<128||191<aa){    ab=65533;ac=1;b=ab;c=ac;return[b,c];    }    ad=((((((g&7)>>>0)>>0)<<18>>0)|((((q&63)>>>0)>>0)<<12>>0))|((((v&63)>>>0)>>0)<<6>>0))|(((aa&63)>>>0)>>0);ae=4;b=ad;c=ae;return[b,c];    };$pkg.DecodeRune=F;
DecodeRuneunicode/utf8.DecodeRuneunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.DecodeRuneInStringG��G=function(a){var $ptr,a,aa,ab,ac,ad,ae,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;b=0;c=0;  od=a.length;    if(d<1){    e=65533;f=0;b=e;c=f;return[b,c];    }  �g=a.charCodeAt(0);  �h=((g<0||g>=A.length)?$throwRuntimeError("index out of range"):A[g]);    if(h>=240){  �i=((h>>0)<<31>>0)>>31>>0;    j=(((a.charCodeAt(0)>>0)&~i)>>0)|(65533&i);k=1;b=j;c=k;return[b,c];    }  �l=(h&7)>>>0;  �n=$clone((m=h>>>4<<24>>>24,((m<0||m>=C.length)?$throwRuntimeError("index out of range"):C[m])),B);    if(d<(l>>0)){    o=65533;p=1;b=o;c=p;return[b,c];    }  Gq=a.charCodeAt(1);    if(q<n.lo||n.hi<q){    r=65533;s=1;b=r;c=s;return[b,c];    }    if(l===2){    t=((((g&31)>>>0)>>0)<<6>>0)|(((q&63)>>>0)>>0);u=2;b=t;c=u;return[b,c];    }  �v=a.charCodeAt(2);    if(v<128||191<v){    w=65533;x=1;b=w;c=x;return[b,c];    }    if(l===3){    y=(((((g&15)>>>0)>>0)<<12>>0)|((((q&63)>>>0)>>0)<<6>>0))|(((v&63)>>>0)>>0);z=3;b=y;c=z;return[b,c];    }  jaa=a.charCodeAt(3);    if(aa<128||191<aa){    ab=65533;ac=1;b=ab;c=ac;return[b,c];    }    ad=((((((g&7)>>>0)>>0)<<18>>0)|((((q&63)>>>0)>>0)<<12>>0))|((((v&63)>>>0)>>0)<<6>>0))|(((aa&63)>>>0)>>0);ae=4;b=ad;c=ae;return[b,c];    };$pkg.DecodeRuneInString=G;DecodeRuneInStringunicode/utf8.DecodeRuneInStringunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.DecodeLastRuneH��H=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;c=0;   d=a.$length;    if(d===0){    e=65533;f=0;b=e;c=f;return[b,c];    }   Eg=d-1>>0;   Wb=(((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g])>>0);    if(b<128){    h=b;i=1;b=h;c=i;return[b,c];    }  !	j=d-4>>0;    if(j<0){  !-j=0;    }  !=g=g-(1)>>0;    while(true){if(!(g>=j)){break;}    if(N(((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g]))){  !|break;    }  !Tg=g-(1)>>0;    }    if(g<0){  !�g=0;    }  !�k=F($subslice(a,g,d));b=k[0];c=k[1];    if(!(((g+c>>0)===d))){    l=65533;m=1;b=l;c=m;return[b,c];    }    n=b;o=c;b=n;c=o;return[b,c];    };$pkg.DecodeLastRune=H;DecodeLastRuneunicode/utf8.DecodeLastRuneunicode/utf8.DecodeRuneunicode/utf8.RuneStart #unicode/utf8.DecodeLastRuneInStringI�YI=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;c=0;  $d=a.length;    if(d===0){    e=65533;f=0;b=e;c=f;return[b,c];    }  $?g=d-1>>0;  $Qb=(a.charCodeAt(g)>>0);    if(b<128){    h=b;i=1;b=h;c=i;return[b,c];    }  %j=d-4>>0;    if(j<0){  %'j=0;    }  %7g=g-(1)>>0;    while(true){if(!(g>=j)){break;}    if(N(a.charCodeAt(g))){  %vbreak;    }  %Ng=g-(1)>>0;    }    if(g<0){  %�g=0;    }  %�k=G(a.substring(g,d));b=k[0];c=k[1];    if(!(((g+c>>0)===d))){    l=65533;m=1;b=l;c=m;return[b,c];    }    n=b;o=c;b=n;c=o;return[b,c];    };$pkg.DecodeLastRuneInString=I;DecodeLastRuneInString#unicode/utf8.DecodeLastRuneInStringunicode/utf8.DecodeRuneInStringunicode/utf8.RuneStart unicode/utf8.RuneLenJ�%J=function(a){var $ptr,a;    if(a<0){  &�return-1;    }else if(a<=127){  &�return 1;    }else if(a<=2047){  'return 2;    }else if(55296<=a&&a<=57343){  'Jreturn-1;    }else if(a<=65535){  'kreturn 3;    }else if(a<=1114111){  '�return 4;    }  '�return-1;    };$pkg.RuneLen=J;RuneLenunicode/utf8.RuneLen unicode/utf8.EncodeRuneK�'K=function(a,b){var $ptr,a,b,c;  (�c=(b>>>0);    if(c<=127){  (�(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(b<<24>>>24));  (�return 1;    }else if(c<=2047){  (�(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=((192|((b>>6>>0)<<24>>>24))>>>0));  )(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=((128|(((b<<24>>>24)&63)>>>0))>>>0));  )4return 2;    }else if((c>1114111)||(55296<=c&&c<=57343)){  )zb=65533;  )�(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=((224|((b>>12>>0)<<24>>>24))>>>0));  )�(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=((128|((((b>>6>>0)<<24>>>24)&63)>>>0))>>>0));  )�(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=((128|(((b<<24>>>24)&63)>>>0))>>>0));  *return 3;    }else if(c<=65535){  )�(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=((224|((b>>12>>0)<<24>>>24))>>>0));  )�(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=((128|((((b>>6>>0)<<24>>>24)&63)>>>0))>>>0));  )�(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=((128|(((b<<24>>>24)&63)>>>0))>>>0));  *return 3;    }else{  *(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=((240|((b>>18>>0)<<24>>>24))>>>0));  *1(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=((128|((((b>>12>>0)<<24>>>24)&63)>>>0))>>>0));  *Q(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=((128|((((b>>6>>0)<<24>>>24)&63)>>>0))>>>0));  *p(3>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=((128|(((b<<24>>>24)&63)>>>0))>>>0));  *�return 4;    }    };$pkg.EncodeRune=K;
EncodeRuneunicode/utf8.EncodeRune unicode/utf8.RuneCountL�mL=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;  +8b=a.$length;  +Jc=0;  +Ud=0;while(true){if(!(d<b)){break;}  +ic=c+(1)>>0;  +oe=((d<0||d>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+d]);    if(e<128){  +�d=d+(1)>>0;  +�continue;    }  +�f=((e<0||e>=A.length)?$throwRuntimeError("index out of range"):A[e]);    if(f===241){  +�d=d+(1)>>0;  +�continue;    }  +�g=(((f&7)>>>0)>>0);    if((d+g>>0)>b){  ,'d=d+(1)>>0;  ,Ccontinue;    }  ,Ri=$clone((h=f>>>4<<24>>>24,((h<0||h>=C.length)?$throwRuntimeError("index out of range"):C[h])),B);  ,tk=(j=d+1>>0,((j<0||j>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+j]));    if(k<i.lo||i.hi<k){  ,�g=1;    }else if(g===2){    }else{  ,�m=(l=d+2>>0,((l<0||l>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+l]));    if(m<128||191<m){  ,�g=1;    }else if(g===3){    }else{  -&o=(n=d+3>>0,((n<0||n>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+n]));    if(o<128||191<o){  -Mg=1;    }    }    }  -\d=d+(g)>>0;    }  -jreturn c;    };$pkg.RuneCount=L;	RuneCountunicode/utf8.RuneCountunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.RuneCountInStringM�}M=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l;b=0;  -�c=a.length;  -�d=0;while(true){if(!(d<c)){break;}  .e=a.charCodeAt(d);    if(e<128){  .Ed=d+(1)>>0;  .b=b+(1)>>0;    continue;    }  .[f=((e<0||e>=A.length)?$throwRuntimeError("index out of range"):A[e]);    if(f===241){  .{d=d+(1)>>0;  .b=b+(1)>>0;    continue;    }  .�g=(((f&7)>>>0)>>0);    if((d+g>>0)>c){  .�d=d+(1)>>0;  .b=b+(1)>>0;    continue;    }  .�i=$clone((h=f>>>4<<24>>>24,((h<0||h>=C.length)?$throwRuntimeError("index out of range"):C[h])),B);  /j=a.charCodeAt((d+1>>0));    if(j<i.lo||i.hi<j){  /Dg=1;    }else if(g===2){    }else{  /qk=a.charCodeAt((d+2>>0));    if(k<128||191<k){  /�g=1;    }else if(g===3){    }else{  /�l=a.charCodeAt((d+3>>0));    if(l<128||191<l){  /�g=1;    }    }    }  /�d=d+(g)>>0;  .b=b+(1)>>0;    }    b=b;return b;    };$pkg.RuneCountInString=M;RuneCountInStringunicode/utf8.RuneCountInStringunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.RuneStartNUN=function(a){var $ptr,a;  0�return!((((a&192)>>>0)===128));    };$pkg.RuneStart=N;	RuneStartunicode/utf8.RuneStart unicode/utf8.ValidO�TO=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n;  1bb=a.$length;  1sc=0;while(true){if(!(c<b)){break;}  1�d=((c<0||c>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+c]);    if(d<128){  1�c=c+(1)>>0;  1�continue;    }  1�e=((d<0||d>=A.length)?$throwRuntimeError("index out of range"):A[d]);    if(e===241){  1�return false;    }  2f=(((e&7)>>>0)>>0);    if((c+f>>0)>b){  24return false;    }  2\h=$clone((g=e>>>4<<24>>>24,((g<0||g>=C.length)?$throwRuntimeError("index out of range"):C[g])),B);  2~j=(i=c+1>>0,((i<0||i>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+i]));    if(j<h.lo||h.hi<j){  2�return false;    }else if(f===2){    }else{  2�l=(k=c+2>>0,((k<0||k>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+k]));    if(l<128||191<l){  3return false;    }else if(f===3){    }else{  38n=(m=c+3>>0,((m<0||m>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+m]));    if(n<128||191<n){  3_return false;    }    }    }  3rc=c+(f)>>0;    }  3�return true;    };$pkg.Valid=O;Validunicode/utf8.Validunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.ValidStringP�3P=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k;  4b=a.length;  4c=0;while(true){if(!(c<b)){break;}  4'd=a.charCodeAt(c);    if(d<128){  4Jc=c+(1)>>0;  4Qcontinue;    }  4`e=((d<0||d>=A.length)?$throwRuntimeError("index out of range"):A[d]);    if(e===241){  4�return false;    }  4�f=(((e&7)>>>0)>>0);    if((c+f>>0)>b){  4�return false;    }  4�h=$clone((g=e>>>4<<24>>>24,((g<0||g>=C.length)?$throwRuntimeError("index out of range"):C[g])),B);  5i=a.charCodeAt((c+1>>0));    if(i<h.lo||h.hi<i){  5Preturn false;    }else if(f===2){    }else{  5�j=a.charCodeAt((c+2>>0));    if(j<128||191<j){  5�return false;    }else if(f===3){    }else{  5�k=a.charCodeAt((c+3>>0));    if(k<128||191<k){  6 return false;    }    }    }  6c=c+(f)>>0;    }  6!return true;    };$pkg.ValidString=P;ValidStringunicode/utf8.ValidStringunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.ValidRuneQ��Q=function(a){var $ptr,a;    if(a<0){  6�return false;    }else if(55296<=a&&a<=57343){  7*return false;    }else if(a>1114111){  7Lreturn false;    }  7]return true;    };$pkg.ValidRune=Q;	ValidRuneunicode/utf8.ValidRune ��{"Base":14188,"Files":[{"Name":"/var/folders/g3/yrvdj9f55ll7jy7l5ygz82yc0000gn/T/gopherjs_playground.gGBRTLEEbM/goroot/src/unicode/utf8/utf8.go","Base":1,"Size":14186,"Lines":[0,55,109,159,160,238,323,336,337,394,449,524,525,565,573,654,757,820,911,913,914,977,985,1008,1031,1033,1034,1042,1066,1090,1114,1138,1162,1186,1187,1214,1241,1268,1295,1296,1317,1339,1361,1362,1416,1442,1468,1469,1545,1618,1690,1732,1762,1790,1821,1852,1883,1914,1945,1976,2007,2009,2010,2076,2100,2164,2242,2320,2398,2476,2554,2632,2710,2788,2852,2930,3008,3086,3164,3242,3320,3398,3476,3478,3479,3557,3570,3596,3639,3683,3685,3686,3723,3741,3759,3777,3795,3813,3815,3816,3903,3999,4030,4043,4056,4071,4074,4092,4112,4154,4157,4187,4217,4229,4278,4293,4345,4360,4364,4367,4381,4383,4384,4448,4487,4500,4513,4528,4531,4549,4569,4612,4615,4645,4675,4687,4736,4751,4803,4818,4822,4825,4839,4841,4842,4919,4997,5072,5113,5116,5191,5263,5307,5354,5367,5379,5401,5404,5416,5432,5446,5516,5588,5633,5691,5737,5740,5753,5783,5801,5823,5826,5838,5877,5899,5902,5916,5963,5966,5978,6007,6029,6032,6046,6114,6117,6129,6158,6180,6183,6271,6273,6274,6350,6428,6506,6516,6519,6594,6666,6710,6765,6778,6790,6812,6815,6827,6843,6857,6927,6999,7044,7102,7148,7151,7164,7194,7212,7234,7237,7249,7288,7310,7313,7327,7374,7377,7389,7418,7440,7443,7457,7525,7528,7540,7569,7591,7594,7682,7684,7685,7765,7843,7918,7959,7962,8037,8109,8153,8204,8219,8234,8256,8259,8277,8297,8316,8330,8333,8383,8436,8455,8476,8490,8500,8503,8541,8568,8577,8581,8584,8600,8612,8615,8651,8675,8697,8700,8716,8718,8719,8798,8878,8949,8969,8972,9047,9119,9163,9222,9237,9252,9274,9277,9295,9315,9334,9348,9351,9401,9454,9473,9494,9508,9518,9521,9559,9586,9595,9599,9602,9618,9630,9633,9677,9701,9723,9726,9742,9744,9745,9813,9883,9910,9920,9933,9945,9966,9977,9998,10009,10055,10067,10088,10099,10119,10130,10133,10144,10146,10147,10236,10279,10319,10396,10422,10443,10460,10471,10492,10517,10545,10556,10615,10631,10645,10666,10692,10723,10751,10762,10772,10798,10830,10861,10889,10900,10903,10905,10906,10973,11031,11062,11076,11087,11110,11116,11128,11148,11170,11177,11189,11193,11209,11224,11243,11255,11259,11280,11299,11327,11339,11343,11374,11425,11437,11461,11509,11521,11545,11593,11605,11609,11621,11624,11634,11636,11637,11703,11746,11760,11787,11799,11819,11841,11848,11860,11864,11880,11895,11914,11926,11930,11951,11970,11998,12010,12014,12045,12096,12108,12132,12180,12192,12216,12264,12276,12280,12292,12295,12305,12307,12308,12385,12463,12482,12536,12537,12612,12640,12653,12675,12688,12709,12716,12728,12732,12749,12764,12805,12809,12830,12848,12885,12889,12920,12971,12987,13011,13059,13075,13099,13147,13163,13167,13179,13182,13195,13197,13198,13279,13313,13326,13348,13361,13382,13389,13401,13405,13422,13437,13478,13482,13503,13521,13558,13562,13593,13644,13660,13684,13732,13748,13772,13820,13836,13840,13852,13855,13868,13870,13871,13935,14005,14035,14045,14058,14073,14119,14134,14153,14168,14171,14184],"Infos":null}]}
 