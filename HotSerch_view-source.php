<?php
$url = 'http://top.baidu.com/buzz?b=1';
$content = file_get_contents($url);
preg_match_all('/<td\sclass="keyword">\s+(<a\s.*href.*>.*<\/a>)\s+.*<\/td>/isU', $content, $match); //正则爬取热榜标题数据
#print_r($match);
$arr = array();
foreach($match[1] as $k => $v){
	$v = mb_convert_encoding($v, 'UTF-8', 'GBK');
	array_push($arr, strip_tags($v));
}
print_r($arr);
$arrjson=json_encode($arr);
echo <<<eot
	<script type="text/javascript">
		var HotDataJson=$arrjson;
	</script>
eot
?>