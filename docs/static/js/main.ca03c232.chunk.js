(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(a,i,t){a.exports={container:"Gears_container__34F6S"}},104:function(a){a.exports={v:"5.4.3",fr:30,ip:0,op:150,w:1080,h:1080,nm:"1080x1080",ddd:0,assets:[],layers:[{ddd:0,ind:4,ty:3,nm:"Null 2",sr:1,ks:{o:{a:0,k:0,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[596,217,0],ix:2},a:{a:0,k:[50,50,0],ix:1},s:{a:0,k:[32,32,100],ix:6}},ao:0,ip:0,op:150,st:0,bm:0},{ddd:0,ind:5,ty:3,nm:"Gear_CTRL",parent:4,sr:1,ks:{o:{a:0,k:0,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[0,0,0],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"Angle Control",np:3,mn:"ADBE Angle Control",ix:1,en:1,ef:[{ty:0,nm:"Angle",mn:"ADBE Angle Control-0001",ix:1,v:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},n:["0p667_1_0p333_0"],t:0,s:[0],e:[820]},{i:{x:[.833],y:[1]},o:{x:[.333],y:[0]},n:["0p833_1_0p333_0"],t:120,s:[820],e:[1080]},{t:149}],ix:1}}]},{ty:5,nm:"Main_Gear_Count",np:3,mn:"ADBE Slider Control",ix:2,en:1,ef:[{ty:0,nm:"Slider",mn:"ADBE Slider Control-0001",ix:1,v:{a:0,k:9,ix:1}}]}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:6,ty:4,nm:"3.4",cl:"4",parent:7,td:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:-1,ix:10},p:{a:0,k:[-47,14,0],ix:2},a:{a:0,k:[-48.5,15.5,0],ix:1},s:{a:0,k:[125,125,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.4,1,.456470983169,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,.919446399165,.239215671315,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-48.5,15.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:7,ty:4,nm:"4",parent:4,tt:2,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:"var $bm_rt;\nvar numTeeth, clockWise, mainGearTeeth, mainCtrl, offset, ratio;\nnumTeeth = effect('num_of_teeth')('Slider');\nclockWise = effect('clockwise')('Checkbox');\nmainGearTeeth = thisComp.layer('Gear_CTRL').effect('Main_Gear_Count')('Slider');\nmainCtrl = thisComp.layer('Gear_CTRL').effect('Angle Control')('Angle');\noffset = effect('Rotation Offset')('Slider');\n$bm_rt = ratio = div(mainGearTeeth, numTeeth);\nif (clockWise == 1) {\n    $bm_rt = sum(mul(ratio, mainCtrl), offset);\n} else {\n    $bm_rt = sum(mul(mul(ratio, mainCtrl), -1), offset);\n}"},p:{a:0,k:[-581.57,1069.133,0],ix:2},a:{a:0,k:[-47,14,0],ix:1},s:{a:0,k:[125,125,100],ix:6}},ao:0,ef:[{ty:5,nm:"num_of_teeth",np:3,mn:"ADBE Slider Control",ix:1,en:1,ef:[{ty:0,nm:"Slider",mn:"ADBE Slider Control-0001",ix:1,v:{a:0,k:6,ix:1}}]},{ty:5,nm:"clockwise",np:3,mn:"ADBE Checkbox Control",ix:2,en:1,ef:[{ty:7,nm:"Checkbox",mn:"ADBE Checkbox Control-0001",ix:1,v:{a:0,k:1,ix:1}}]},{ty:5,nm:"Rotation Offset",np:3,mn:"ADBE Slider Control",ix:3,en:1,ef:[{ty:0,nm:"Slider",mn:"ADBE Slider Control-0001",ix:1,v:{a:0,k:-99,ix:1}}]}],shapes:[{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:6,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:100,ix:6},is:{a:0,k:200,ix:8},or:{a:0,k:150,ix:7},os:{a:0,k:130,ix:9},ix:1,nm:"Polystar Path 1",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"st",c:{a:0,k:[.4,1,.456470983169,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.882352941176,.094117647059,.211764705882,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-47,14],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Polystar 12",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:8,ty:4,nm:"3.3",cl:"3",parent:9,td:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:-1,ix:10},p:{a:0,k:[-47,14,0],ix:2},a:{a:0,k:[-48.5,15.5,0],ix:1},s:{a:0,k:[125,125,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.4,1,.456470983169,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,.919446399165,.239215671315,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-48.5,15.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:9,ty:4,nm:"3",parent:4,tt:2,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:"var $bm_rt;\nvar numTeeth, clockWise, mainGearTeeth, mainCtrl, offset, ratio;\nnumTeeth = effect('num_of_teeth')('Slider');\nclockWise = effect('clockwise')('Checkbox');\nmainGearTeeth = thisComp.layer('Gear_CTRL').effect('Main_Gear_Count')('Slider');\nmainCtrl = thisComp.layer('Gear_CTRL').effect('Angle Control')('Angle');\noffset = effect('Rotation Offset')('Slider');\n$bm_rt = ratio = div(mainGearTeeth, numTeeth);\nif (clockWise == 1) {\n    $bm_rt = sum(mul(ratio, mainCtrl), offset);\n} else {\n    $bm_rt = sum(mul(mul(ratio, mainCtrl), -1), offset);\n}"},p:{a:0,k:[74.462,1069.96,0],ix:2},a:{a:0,k:[-47,14,0],ix:1},s:{a:0,k:[125,125,100],ix:6}},ao:0,ef:[{ty:5,nm:"num_of_teeth",np:3,mn:"ADBE Slider Control",ix:1,en:1,ef:[{ty:0,nm:"Slider",mn:"ADBE Slider Control-0001",ix:1,v:{a:0,k:6,ix:1}}]},{ty:5,nm:"clockwise",np:3,mn:"ADBE Checkbox Control",ix:2,en:1,ef:[{ty:7,nm:"Checkbox",mn:"ADBE Checkbox Control-0001",ix:1,v:{a:0,k:1,ix:1}}]},{ty:5,nm:"Rotation Offset",np:3,mn:"ADBE Slider Control",ix:3,en:1,ef:[{ty:0,nm:"Slider",mn:"ADBE Slider Control-0001",ix:1,v:{a:0,k:-43,ix:1}}]}],shapes:[{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:6,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:100,ix:6},is:{a:0,k:200,ix:8},or:{a:0,k:150,ix:7},os:{a:0,k:130,ix:9},ix:1,nm:"Polystar Path 1",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"st",c:{a:0,k:[.4,1,.456470983169,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.4,.603921568627,.956862745098,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-47,14],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Polystar 12",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:10,ty:4,nm:"2.2",cl:"2",parent:11,td:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:-1,ix:10},p:{a:0,k:[-47,14,0],ix:2},a:{a:0,k:[-48.5,15.5,0],ix:1},s:{a:0,k:[125,125,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.4,1,.456470983169,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[0,0,0,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-48.5,15.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:11,ty:4,nm:"2",parent:4,tt:2,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:"var $bm_rt;\nvar numTeeth, clockWise, mainGearTeeth, mainCtrl, offset, ratio;\nnumTeeth = effect('num_of_teeth')('Slider');\nclockWise = effect('clockwise')('Checkbox');\nmainGearTeeth = thisComp.layer('Gear_CTRL').effect('Main_Gear_Count')('Slider');\nmainCtrl = thisComp.layer('Gear_CTRL').effect('Angle Control')('Angle');\noffset = effect('Rotation Offset')('Slider');\n$bm_rt = ratio = div(mainGearTeeth, numTeeth);\nif (clockWise == 1) {\n    $bm_rt = sum(mul(ratio, mainCtrl), offset);\n} else {\n    $bm_rt = sum(mul(mul(ratio, mainCtrl), -1), offset);\n}"},p:{a:0,k:[-251.714,1064.989,0],ix:2},a:{a:0,k:[-47,14,0],ix:1},s:{a:0,k:[125,125,100],ix:6}},ao:0,ef:[{ty:5,nm:"num_of_teeth",np:3,mn:"ADBE Slider Control",ix:1,en:1,ef:[{ty:0,nm:"Slider",mn:"ADBE Slider Control-0001",ix:1,v:{a:0,k:6,ix:1}}]},{ty:5,nm:"clockwise",np:3,mn:"ADBE Checkbox Control",ix:2,en:1,ef:[{ty:7,nm:"Checkbox",mn:"ADBE Checkbox Control-0001",ix:1,v:{a:0,k:0,ix:1}}]},{ty:5,nm:"Rotation Offset",np:3,mn:"ADBE Slider Control",ix:3,en:1,ef:[{ty:0,nm:"Slider",mn:"ADBE Slider Control-0001",ix:1,v:{a:0,k:-49,ix:1}}]}],shapes:[{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:6,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:100,ix:6},is:{a:0,k:200,ix:8},or:{a:0,k:150,ix:7},os:{a:0,k:130,ix:9},ix:1,nm:"Polystar Path 1",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"st",c:{a:0,k:[.4,1,.456470983169,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.98431372549,.737254901961,.023529411765,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-47,14],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Polystar 12",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:12,ty:4,nm:"1.1",cl:"1",parent:13,td:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:-1,ix:10},p:{a:0,k:[-47,14,0],ix:2},a:{a:0,k:[-48.5,15.5,0],ix:1},s:{a:0,k:[118,118,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.4,1,.456470983169,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[0,0,0,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-48.5,15.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:13,ty:4,nm:"1",parent:4,tt:2,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:"var $bm_rt;\nvar numTeeth, clockWise, mainGearTeeth, mainCtrl, offset, ratio;\nnumTeeth = effect('num_of_teeth')('Slider');\nclockWise = effect('clockwise')('Checkbox');\nmainGearTeeth = thisComp.layer('Gear_CTRL').effect('Main_Gear_Count')('Slider');\nmainCtrl = thisComp.layer('Gear_CTRL').effect('Angle Control')('Angle');\noffset = effect('Rotation Offset')('Slider');\n$bm_rt = ratio = div(mainGearTeeth, numTeeth);\nif (clockWise == 1) {\n    $bm_rt = sum(mul(ratio, mainCtrl), offset);\n} else {\n    $bm_rt = sum(mul(mul(ratio, mainCtrl), -1), offset);\n}"},p:{a:0,k:[869.153,1067.59,0],ix:2},a:{a:0,k:[-47,14,0],ix:1},s:{a:0,k:[125,125,100],ix:6}},ao:0,ef:[{ty:5,nm:"num_of_teeth",np:3,mn:"ADBE Slider Control",ix:1,en:1,ef:[{ty:0,nm:"Slider",mn:"ADBE Slider Control-0001",ix:1,v:{a:0,k:6,ix:1}}]},{ty:5,nm:"clockwise",np:3,mn:"ADBE Checkbox Control",ix:2,en:1,ef:[{ty:7,nm:"Checkbox",mn:"ADBE Checkbox Control-0001",ix:1,v:{a:0,k:1,ix:1}}]},{ty:5,nm:"Rotation Offset",np:3,mn:"ADBE Slider Control",ix:3,en:1,ef:[{ty:0,nm:"Slider",mn:"ADBE Slider Control-0001",ix:1,v:{a:0,k:39,ix:1}}]}],shapes:[{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:6,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:100,ix:6},is:{a:0,k:200,ix:8},or:{a:0,k:150,ix:7},os:{a:0,k:130,ix:9},ix:1,nm:"Polystar Path 1",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"st",c:{a:0,k:[.4,1,.456470983169,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.894117647059,.086274509804,.223529411765,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-47,14],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Polystar 12",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:14,ty:4,nm:"1.3",cl:"3",parent:15,td:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:-1,ix:10},p:{a:0,k:[-64.971,8.5,0],ix:2},a:{a:0,k:[-48.5,15.5,0],ix:1},s:{a:0,k:[400,400,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.4,1,.456470983169,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[0,0,0,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-48.5,15.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:15,ty:4,nm:"Shape Layer 3",parent:4,tt:2,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:"var $bm_rt;\nvar numTeeth, clockWise, mainGearTeeth, mainCtrl, offset, ratio;\nnumTeeth = effect('num_of_teeth')('Slider');\nclockWise = effect('clockwise')('Checkbox');\nmainGearTeeth = thisComp.layer('Gear_CTRL').effect('Main_Gear_Count')('Slider');\nmainCtrl = thisComp.layer('Gear_CTRL').effect('Angle Control')('Angle');\noffset = effect('Rotation Offset')('Slider');\n$bm_rt = ratio = div(mainGearTeeth, numTeeth);\nif (clockWise == 1) {\n    $bm_rt = sum(mul(ratio, mainCtrl), offset);\n} else {\n    $bm_rt = sum(mul(mul(ratio, mainCtrl), -1), offset);\n}"},p:{a:0,k:[470.782,1064.122,0],ix:2},a:{a:0,k:[-65,8.5,0],ix:1},s:{a:0,k:[72,72,100],ix:6}},ao:0,ef:[{ty:5,nm:"num_of_teeth",np:3,mn:"ADBE Slider Control",ix:1,en:1,ef:[{ty:0,nm:"Slider",mn:"ADBE Slider Control-0001",ix:1,v:{a:0,k:9,ix:1}}]},{ty:5,nm:"clockwise",np:3,mn:"ADBE Checkbox Control",ix:2,en:1,ef:[{ty:7,nm:"Checkbox",mn:"ADBE Checkbox Control-0001",ix:1,v:{a:0,k:0,ix:1}}]},{ty:5,nm:"Rotation Offset",np:3,mn:"ADBE Slider Control",ix:3,en:1,ef:[{ty:0,nm:"Slider",mn:"ADBE Slider Control-0001",ix:1,v:{a:0,k:-12,ix:1}}]}],shapes:[{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:9,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:142,ix:6},is:{a:0,k:200,ix:8},or:{a:0,k:180,ix:7},os:{a:0,k:120,ix:9},ix:1,nm:"Polystar Path 1",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"st",c:{a:0,k:[.4,1,.456470983169,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.207843137255,.662745098039,.329411764706,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-65,8.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[196,196],ix:3},r:{a:0,k:-7.685,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Polystar 12",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:16,ty:4,nm:"1.2",cl:"2",parent:17,td:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[-64.971,8.5,0],ix:2},a:{a:0,k:[-48.5,15.5,0],ix:1},s:{a:0,k:[400,400,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.4,1,.456470983169,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[0,0,0,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-48.5,15.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:17,ty:4,nm:"Shape Layer 2",parent:4,tt:2,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:165.901,ix:10,x:"var $bm_rt;\n$bm_rt = $bm_neg(thisComp.layer('Gear_CTRL').effect('Angle Control')('Angle'));"},p:{a:0,k:[-987.994,1067.937,0],ix:2},a:{a:0,k:[-65,8.5,0],ix:1},s:{a:0,k:[72,72,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:9,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:142,ix:6},is:{a:0,k:200,ix:8},or:{a:0,k:180,ix:7},os:{a:0,k:120,ix:9},ix:1,nm:"Polystar Path 1",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"st",c:{a:0,k:[.4,1,.456470983169,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.258823529412,.521568627451,.956862745098,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-65,8.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[196,196],ix:3},r:{a:0,k:-7.685,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Polystar 12",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:150,st:0,bm:0}],markers:[]}},105:function(a,i,t){a.exports={container:"Home_container__3HKK4"}},108:function(a,i,t){a.exports={container:"Footer_container__188QZ"}},114:function(a,i,t){a.exports=t(253)},119:function(a,i,t){},253:function(a,i,t){"use strict";t.r(i);var e=t(0),n=t.n(e),r=t(101),o=t.n(r),m=(t(119),t(69)),l=t.n(m),x=t(112),k=t(19),s=t(102),c=t.n(s),p=t(103),h=t.n(p),d=t(104),f=function(){var a={loop:!0,autoplay:!0,animationData:d};return n.a.createElement("div",{className:h.a.container},n.a.createElement(c.a,{options:a}))},y=t(105),E=t.n(y),u=t(18),C=t.n(u),A=t(107),b=t.n(A),S=function(){return n.a.createElement("div",{className:E.a.container},n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Template project"),n.a.createElement(C.a,{variant:"body1"},"A simple scaffolded project utilising common frameworks.",n.a.createElement(b.a,null))))},B=t(108),_=t.n(B),D=function(){return n.a.createElement("footer",{className:_.a.container},n.a.createElement(C.a,{variant:"body1"},"App v","0.1.0"))},G=t(70),T=t.n(G),v=t(109),V=t.n(v),g=t(110),w=t.n(g),F=function(){return n.a.createElement("header",{className:T.a.container},n.a.createElement(V.a,{position:"static"},n.a.createElement(w.a,null,n.a.createElement(C.a,{variant:"h6",color:"inherit",className:T.a.grow},"Template App"))))},P=function(a){return n.a.createElement(n.a.Fragment,null,n.a.createElement(F,null),n.a.createElement("section",null,a.children),n.a.createElement(D,null))},$=t(111),R=Object($.createMuiTheme)({palette:{primary:{main:"#4285F4"}},overrides:{MuiButton:{root:{justifyContent:"center"}},MuiTypography:{body1:{color:"#232323"},h6:{color:"#4285F4"}}},typography:{useNextVariants:!0}}),W=function(){return n.a.createElement(l.a,{theme:R},n.a.createElement(x.a,null,n.a.createElement(P,null,n.a.createElement(k.c,null,n.a.createElement(k.a,{exact:!0,path:"/",component:S})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})},70:function(a,i,t){a.exports={container:"Navbar_container__Stw5O"}}},[[114,1,2]]]);
//# sourceMappingURL=main.ca03c232.chunk.js.map