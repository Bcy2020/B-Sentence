var sentence=[
"山有木兮木有枝，心悦君兮君不知。",
"人生若只如初见，何事秋风悲画扇。",
"曾经沧海难为水，除却巫山不是云。",
"十年生死两茫茫，不思量，自难忘。",
"相思本是无凭语,莫向花笺费泪行。",
"凄凉别後两应同,最是不胜清怨月明中。",
"这不是JC,而是我真的AK了IOI。",
"千金纵买相如赋,脉脉此情谁诉。",
"入我相思门,知我相思苦,长相思兮长相忆,短相思兮无穷极。",
"多情自古伤离别。更那堪,冷落清秋节。",
"静水流深，沧笙踏歌；三生阴晴圆缺，一朝悲欢离合。",
"山有木兮木有枝，心悦君兮君不知。",
"苍茫大地一剑尽挽破，何处繁华笙歌落。",
"斜倚云端千壶掩寂寞，纵使他人空笑我。",
"一朝春去红颜老，花落人亡两不知。",
"待浮花浪蕊俱尽，伴君幽独。",
"生能尽欢，死亦无憾。",
"蓄起亘古的情丝，揉碎殷红的相思。",
"玲珑骰子安红豆，入骨相思知不知。",
"万般故事，不过情伤；易水人去，明月如霜。",
"用我三生烟火，换你一世迷离。",
"寄君一曲，不问曲终人聚散。",
"小荷才露尖尖角，早有蜻蜓立上头。",
"水晶帘动微风起，满架蔷薇一院香。",
"蝉噪林逾静，鸟鸣山更幽。",
"柳庭风静人眠昼，昼眠人静风庭柳。",
"稻花香里说丰年。听取蛙声一片。",
"漠漠水田飞白鹭，阴阴夏木啭黄鹂。",
"草萤有耀终非火，荷露虽团岂是珠。",
"四月清和雨乍晴，南山当户转分明。",
"一番荷芰生池沼，槛前风送馨香。",
"水满有时观下鹭，草深无处不鸣蛙。",
"谷鸟吟晴日，江猿啸晚风。",
"菱叶萦波荷飐风，荷花深处小船通。",
"仲夏苦夜短，开轩纳微凉。",
"梅子青，梅子黄，菜肥麦熟养蚕忙。",
"荷花娇欲语，愁杀荡舟人。",
"雾柳暗时云度月，露荷翻处水流萤。",
"糁径杨花铺白毡，点溪荷叶叠青钱。",
"游女带花偎伴笑，争窈窕，竞折团荷遮晚照。",
"末将于禁，愿为曹家世代赴汤蹈火",
"面对就好，去经历就好。",
"春空千鹤若幻梦，夕波千鸟若长鸣。",
"现实尚未支离破碎，是因为梦想还在苦苦支撑。",
"沧海横流，方显英雄本色。",
"木叶飞舞之处，火亦生生不息",
"风筝的线你随时可以放开，只是别盼望我会回来。",
"I like you, but just like you.",
"对自己的爱好保持热情，不要太功利！",
"你驻足于春色中，于那独一无二的春色之中。",
"人心换不来人心，认真也得不到情深。做得再好，也会有人视而不见；说得再多，也会有人充耳不闻。",
"没有谁生来就是优秀的人，你可以不优秀，但是不可以失去动力，不求上进，荒废一生。",
"失败不好玩，有时还很惨。但是小心翼翼地过一个从不失败的人生，是更加惨不忍睹的事。",
"努力把日子都填满，别让孤单把你包围，请善待珍惜自己，给自己一个坚强的理由，生活中没有什么过不去的坎。",
"没有一条路是平坦的，没有一座山是毫无崎岖的，而大海更不会是风平浪静的。",
"回头有一路的故事，低头有坚定的脚步，抬头有清晰的远方。",
"心中有光的人，终会冲破一切黑暗和荆棘。",
"你不必逞强，时间会为你疗伤。",
"不乱于心，不困于情，不畏将来，不念过往，如此，安好。",
"心若没有栖息的地方，到哪里都是在流浪。",
"早知如此绊人心，何如当初莫相识。",
"可能我只是你生命里的一个过客，但你不会遇见第二个我。",
"青春是一本太仓促的书，我们含着泪，一读再读。",
"这世上所有的不公平都是因为当事人能力的不足。"
];
var len=sentence.length;
var randem=Math.floor(Math.random() * len);
document.getElementById("B-Sentence-chinese").innerHTML = sentence[randem];

function chinese_change(){
  randem=Math.floor(Math.random() * len);
  document.getElementById("B-Sentence-chinese").innerHTML = sentence[randem];
}
