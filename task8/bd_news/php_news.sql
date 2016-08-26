/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : php_news

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2016-04-05 17:22:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `catid` int(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `imgsrc` varchar(400) NOT NULL,
  `content` mediumtext NOT NULL,
  `date` datetime NOT NULL,
  `flag` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('1', '1', '合肥女孩隆胸后获得胸模比赛冠军', 'http://img1.gtimg.com/15/1555/155537/15553754_1200x1000_0.jpg', '24岁的王琪是合肥人，身高1.72米，大学的时候就开始做模特。2015年4月底，王琪参加安徽合肥时尚公主大赛，顺利晋级决赛，并最终获得最佳气质奖。但在王琪看来，自己一直游走在模特的边缘，甚至连内衣的广告都不敢接，最重要的原因是对自己的胸部不满意，而最近参加的胸模比赛也已经顺利晋级。于是王琪决定对自己的胸部动刀子，2015年7月中旬，王琪走进整形医院决定隆胸，并最后走进了手术室。一个多月后，胸模决赛中，王琪获得冠军。图为2015年3月14日，王琪参加合肥时尚公主选拔，准备参加才艺表演。', '2016-03-02 00:00:00', 'c');
INSERT INTO `news` VALUES ('2', '1', '16个月女婴仅剩2天生命 父亲为女儿办梦幻“婚礼', 'http://img1.gtimg.com/15/1555/155573/15557308_980x1200_0.jpg', '据每日邮报，31岁的英国父亲安迪-巴纳德为自己不到两岁的女儿举办了一场“婚礼”。由于脑瘤，小女儿被判断为最多只能再活2天，而这位父亲坚持要给女儿一场梦想中的婚礼。（独家稿件，不得转载。更多精彩内容，请关注腾讯新闻国际频道微信公众号“糖醋国际”。）', '2016-03-06 00:00:00', 'h');
INSERT INTO `news` VALUES ('3', '1', '印尼一名女性因婚外情遭受鞭刑', 'http://img1.gtimg.com/15/1563/156313/15631311_980x1200_0.jpg', '当地时间3月25日，每日邮报刊发一组照片，照片中一名来自印度尼西亚班达亚齐的女性在民众围观下接受“鞭刑”，原因是她的婚外情触犯了伊斯兰教教法。她哭喊着被迫当众下跪，一名戴着面具的行刑人不断抽打她的身体。行刑后的她虚弱到不能自己行走，而躺在担架上被抬走。', '2016-03-07 00:00:00', 'c');
INSERT INTO `news` VALUES ('4', '1', '滴滴程维：补贴永远会有 未来3年考虑盈利', 'http://img1.gtimg.com/tech/pics/hv1/85/76/2042/132800515.jpg', '程维表示，中国的企业应该抓住行业的窗口期，积极地走出去，实现国家化。', '2016-03-08 00:00:00', 'h');
INSERT INTO `news` VALUES ('5', '1', 'Snapchat斥资1亿美元收购表情符初创公司', 'http://img1.gtimg.com/tech/pics/hv1/81/69/2042/132798726.jpg', 'Bitstrips可制作看起来像用户本人的个性表情，Snapchat期望借此提高滤镜功能。', '2016-03-09 00:00:00', 'c');
INSERT INTO `news` VALUES ('6', '1', '苹果出狠招：要自己设计服务器以避开政府窥视', 'http://img1.gtimg.com/tech/pics/hv1/220/47/2042/132793255.jpg', '苹果怀疑从传统供应链中订购的服务器在交付途中受到拦截，并被添加了额外芯片。', '2016-03-08 00:00:00', 'c');
INSERT INTO `news` VALUES ('7', '2', '腾讯动漫今年动作连连：左拥日漫 右抱B站', 'http://img1.gtimg.com/tech/pics/hv1/150/61/2042/132796755.jpg', '腾讯动漫将在中国独家引进集英社《Jump+》漫画杂志。', '2016-03-08 00:00:00', 'c');
INSERT INTO `news` VALUES ('8', '2', '全球5亿台PC面临更换 笔记本市场再演圈地大战', 'http://www.52ij.com/uploads/allimg/160228/2125324I1-0.png', '随着二合一笔记本的推出，加之换机时间节点的到来，必然会掀起一轮热销潮', '2016-03-08 00:00:00', 'f');
INSERT INTO `news` VALUES ('9', '2', '老人公交上婉拒4人让座 称身上太脏就坐地板', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1395968536,4161460788&fm=80', '老人公交上婉拒4人让座 称身上太脏就坐地板', '2016-03-31 10:39:25', 'c');
INSERT INTO `news` VALUES ('10', '2', '网曝福建新娘超豪华嫁妆 床上铺成堆现金砖', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3800076261,2258588941&fm=80', '网曝福建新娘超豪华嫁妆 床上铺成堆现金砖', '2016-03-23 10:41:05', 'c');
INSERT INTO `news` VALUES ('11', '2', '苹果着急！iOS 9.3.1曝光：这下可以放心升了苹果着急！iOS 9.3.1曝光：这下可以放心升了', 'http://y2.ifengimg.com/a/2016_14/8bd2545b956fddd.jpg', '苹果着急！iOS 9.3.1曝光：这下可以放心升了', '2016-03-30 10:41:34', 'f');
INSERT INTO `news` VALUES ('12', '2', '中国造出世界最长厚壁无缝钢管 核电站就缺它', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1647074925,3732038750&fm=80', '中国造出世界最长厚壁无缝钢管 核电站就缺它', '2016-03-30 10:42:45', 'h');
INSERT INTO `news` VALUES ('13', '2', '男士内裤3条装，49返现36，百度用户只要13元', 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/a71ea8d3fd1f4134193b2fc0221f95cad1c85e7b.jpg', '男士内裤3条装，49返现36，百度用户只要13元', '2016-03-30 10:43:36', 'c');
INSERT INTO `news` VALUES ('14', '2', '飞机上女儿打翻了盘子，妈妈的反应把空姐惊呆了！很多父母看完感触颇深', 'http://img.mp.itc.cn/upload/20160328/177669bc356f492d8ca6d724235e40f3_th.jpg', '　6月17日，在从日本东京飞往美国加州圣何塞（San Jose）的飞机上，11岁的女儿和我刚刚用过午餐，那小小的餐桌上堆满了用过的餐巾纸、饮料杯、纸餐盘、饮料吸管等等，看上去一片狼藉。', '2016-03-30 10:44:07', 'c');
INSERT INTO `news` VALUES ('15', '2', '笔帽上的这个小孔能救命，90%的人不知道！', 'http://img.mp.itc.cn/upload/20160328/bfb74ad372154bd5b997c7b61f54cab7_th.jpg', '笔帽上的这个小孔能救命，90%的人不知道！', '2016-03-29 10:46:19', 'c');
INSERT INTO `news` VALUES ('16', '3', '32岁女子面如16岁少女 “冻龄”系颅咽管瘤作怪', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=569426603,4293405824&fm=80', '32岁女子面如16岁少女 “冻龄”系颅咽管瘤作怪', '2016-03-31 10:46:56', 'h');
INSERT INTO `news` VALUES ('17', '3', '传上海精子库告急捐精可获iPhone6s 官方回应', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=241465968,2867316128&fm=80', '传上海精子库告急捐精可获iPhone6s 官方回应', '2016-03-31 10:47:24', 'c');
INSERT INTO `news` VALUES ('18', '3', '　刘亦菲与宋承宪恋情曝光后引起热议，但却有媒体爆料称两人只是为新电影炒作造势，还有知情人称两人交往过，但其实已经分手', 'http://cnews.chinadaily.com.cn/img/attachement/jpg/site1/20160330/64006a47a3031865cc9219.jpg', '刘亦菲与宋承宪恋情曝光后引起热议，但却有媒体爆料称两人只是为新电影炒作造势，还有知情人称两人交往过，但其实已经分手。那么，刘亦菲和宋承宪的恋情究竟是怎么回事，宋承宪刘亦菲分手了吗?下面来看看。', '2016-03-31 10:50:12', 'c');
INSERT INTO `news` VALUES ('19', '3', '河正宇，这不是我们想要的许三观', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=421724045,1145660296&fm=80', '河正宇，这不是我们想要的许三观', '2016-03-31 10:50:35', 'c');
INSERT INTO `news` VALUES ('20', '3', '绝代双骄》演员现状：燕南天身家330亿', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=268303477,2327680264&fm=80', '绝代双骄》演员现状：燕南天身家330亿', '2016-03-31 10:51:01', 'c');
INSERT INTO `news` VALUES ('21', '3', 'Win10年度更新发布：功能全面升级', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=10492710,3770630083&fm=80', 'Win10年度更新发布：功能全面升级', '2016-03-31 10:51:24', 'c');
INSERT INTO `news` VALUES ('22', '3', '女孩独自爬山遇害 被发现时尸体半裸疑遭性侵', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251892715,2829815336&fm=80', '女孩独自爬山遇害 被发现时尸体半裸疑遭性侵', '2016-03-31 10:51:42', 'h');
INSERT INTO `news` VALUES ('23', '4', '济南小偷一日三餐吃泡面 为女主播一掷千金', 'http://h.hiphotos.baidu.com/image/h%3D200/sign=4e835c604dc2d562ed08d7edd71090f3/6609c93d70cf3bc768863fecd300baa1cd112a28.jpg', '济南小偷一日三餐吃泡面 为女主播一掷千金', '2016-03-31 10:52:29', 'f');
INSERT INTO `news` VALUES ('24', '4', '中国陆军电脑换装国产操作系统 都不用主机', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4283872653,71194647&fm=80', '中国陆军电脑换装国产操作系统 都不用主机', '2016-03-31 10:53:08', 'c');
INSERT INTO `news` VALUES ('25', '4', '微软主管表示：Win10免费升级请抓紧', 'http://img1.gtimg.com/news/pics/hv1/76/44/2047/133117471.jpg', '微软主管表示：Win10免费升级请抓紧', '2016-03-31 10:54:24', 'f');
INSERT INTO `news` VALUES ('26', '4', '记者暗拍吉林KTV：陪酒少女称给500元全脱', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3290081333,2752996281&fm=80', '记者暗拍吉林KTV：陪酒少女称给500元全脱', '2016-03-31 10:54:48', 'c');
INSERT INTO `news` VALUES ('27', '4', '赞！魅族手机惊艳亮相联通终端交易会', 'http://i8.hexunimg.cn/2016-03-30/183050370.jpg', '交易会在重庆开幕。本次会议由中国联通携手重庆市政府举办，魅族科技（MEIZU）作为智能终端厂商应邀出席，向参展各方展示了智能手机、智能配件等产品，受到体验者们的称赞。', '2016-03-31 10:55:14', 'c');
INSERT INTO `news` VALUES ('28', '4', '赵丽颖农村出身学历低演技来凑 童年照被扒证未整容', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=691709336,2985208672&fm=80', '赵丽颖农村出身学历低演技来凑 童年照被扒证未整容', '2016-03-31 10:56:47', 'h');
INSERT INTO `news` VALUES ('29', '4', '《女汉子》票房逆袭夺冠 赵丽颖展惊人“圈粉”功力', ' https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3145478109,3585230655&fm=80', '《女汉子》票房逆袭夺冠 赵丽颖展惊人“圈粉”功力', '2016-03-31 10:58:16', 'c');
INSERT INTO `news` VALUES ('30', '4', '张晋晒为贾静雯当替身旧照 一身女装模样青涩', 'http://y2.ifengimg.com/a/2016_14/2c2ceb5c662f499.jpg', '张晋晒为贾静雯当替身旧照 一身女装模样青涩', '2016-03-31 10:58:44', 'c');
INSERT INTO `news` VALUES ('31', '4', '拼了！宋小宝《喜剧人》变“美人鱼” 谢娜王祖蓝助阵', 'http://y1.ifengimg.com/cmpp/2016/03/30/11/a7236371-b668-4617-bce4-a409d01f812b_size87_w580_h387.jpg', '拼了！宋小宝《喜剧人》变“美人鱼” 谢娜王祖蓝助阵', '2016-03-31 11:09:12', 'f');
INSERT INTO `news` VALUES ('32', '1', '彭丽媛接待澳洲小学生 回答习大大忙不忙', 'http://y2.ifengimg.com/a/2016/0331/90481878388d60asize2547_w272_h480.gif', '2015年的初夏，幸福悄然而至。一群来自澳大利亚塔斯马尼亚州的孩子，第一次走进钓鱼台国宾馆，和“彭妈妈”面对面亲切聊天。对学习中文的他们来说，中国并不陌生。', '2016-03-31 15:55:29', 'c');
INSERT INTO `news` VALUES ('33', '1', '内蒙古原主席巴特尔调任国家民委主任(图/简历)', 'http://y3.ifengimg.com/a/2016_14/8a60ed9904917df.jpg', '据知情者透露，3月28日下午，国家民委召开干部大会，欢迎巴特尔主政国家民族事务委员会。', '2016-03-31 15:56:05', 'c');
INSERT INTO `news` VALUES ('34', '1', '陈光标视频回应“失联传闻”：手下传谣(图)', 'http://y1.ifengimg.com/a/2016_14/c99e19b44092215.jpg', '3月30日晚，素有“中国首善”之称的江苏黄埔再生资源利用有限公司董事长陈光标，被网传涉嫌诈骗被抓。', '2016-03-31 15:56:31', 'c');
INSERT INTO `news` VALUES ('35', '1', '太阳花女王”刘乔安被起诉', 'http://y2.ifengimg.com/a/2016_14/af32a3988bf9564.jpg', '中央社消息，太阳花女王刘乔安疑涉人口贩运去年遭检警约谈，台北地检署今天侦查终结，认定包括刘乔安在内的戴女、钟女等3人曾仲介他人赴国...', '2016-03-31 15:56:59', 'c');
INSERT INTO `news` VALUES ('36', '1', '包贝尔婚礼 柳岩遭伴郎团戏弄险被扔下水', 'http://img1.gtimg.com/ent/pics/hv1/253/125/2045/133008253_small.jpg', '包贝尔婚礼 柳岩遭伴郎团戏弄险被扔下水', '2016-03-31 16:00:06', 'c');
INSERT INTO `news` VALUES ('37', '1', '撒贝宁妻子身份成谜 所谓前夫真是外交人员？', 'http://img1.gtimg.com/ent/pics/hv1/134/88/2044/132933674_small.jpg', '撒贝宁妻子身份成谜 所谓前夫真是外交人员？', '2016-03-31 16:00:27', 'c');
INSERT INTO `news` VALUES ('38', '1', '窦靖童迪丽热巴张天爱……她们“攻”气十足', 'http://img1.gtimg.com/15/1561/156131/15613106_small.jpg', '窦靖童迪丽热巴张天爱……她们“攻”气十足', '2016-03-31 16:00:57', 'c');
INSERT INTO `news` VALUES ('39', '1', '御姐变身小清新 能看出这个清秀女生是秦海璐吗', 'http://img1.gtimg.com/ent/pics/hv1/14/61/2045/132991694.png', '御姐变身小清新 能看出这个清秀女生是秦海璐吗', '2016-03-31 16:02:01', 'c');
INSERT INTO `news` VALUES ('40', '1', '无意间的小发现 海涛疑似与沈梦辰同桌并肩用餐', 'http://img1.gtimg.com/ent/pics/hv1/40/8/2044/132913180.jpg', '无意间的小发现 海涛疑似与沈梦辰同桌并肩用餐', '2016-03-31 16:02:30', 'c');
