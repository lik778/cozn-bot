
## [旅行助手 store](https://www.coze.cn/store/bot/7342462036871233574)
### Prompt
```md

```
### 描述
推荐旅行攻略，查询景点天气
### 开场白

### 开场白预置问题

### 插件信息
```json
{
  "7288584252030189623": {
    "description": "Bing 图像搜索API允许用户在全球范围内查找图片。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/2175268956156697_1709192841685149969_qPefr5tCsS.png?lk3s=cd508e2b&x-expires=1710076249&x-signature=HEodku1qbuiAXMNcL2c6Kk6Zu6Q%3D",
    "id": "7288584252030189623",
    "name": "必应图片搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7288585141298102332": {
    "description": "从Bing搜索任何信息和网页URL。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/600804143405523_1697519094174345728.jpeg?lk3s=cd508e2b&x-expires=1710076249&x-signature=8%2F3NtWlp%2F%2F8GuyFkQJb%2F%2FnBbrQ8%3D",
    "id": "7288585141298102332",
    "name": "必应搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7326774526069489701": {
    "description": "天气Plugin。提供省、市、区县的未来40天的天气情况，包括温度、湿度、日夜风向等。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/3503520560195028_1706621033925555371_rPUemhsbVg.webp?lk3s=cd508e2b&x-expires=1710076249&x-signature=kINXFyTcD6HP1MGqttSAXA%2Fg3B4%3D",
    "id": "7326774526069489701",
    "name": "墨迹天气",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7340949847966580788": {
    "description": "搜索搜索搜索结果",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/275321114075152_1709198064531046871_yCXs3Bcqh3.jpg?lk3s=cd508e2b&x-expires=1710076249&x-signature=cKpSvMuWsxUOSCH5GQ3oC79ydSM%3D",
    "id": "7340949847966580788",
    "name": "搜狗搜索",
    "plugin_status": 4,
    "plugin_type": 1
  }
}
```
### 插件详细设置
```json
{
  "7288584252030206007": {
    "description": "必应图像搜索API允许您的用户在全球范围内找到图片。",
    "id": "7288584252030206007",
    "name": "bingImageSearch",
    "parameters": [
      {
        "description": "响应中返回的搜索结果数量。默认为10，最大值为50。实际返回结果的数量可能会少于请求的数量。",
        "is_required": false,
        "name": "count",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "从结果中返回前要跳过的基于零的偏移量。默认为0。",
        "is_required": false,
        "name": "offset",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "用户的搜索查询词。查询词不能为空。",
        "is_required": true,
        "name": "query",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7288584252030189623"
  },
  "7288585141298118716": {
    "description": "必应搜索引擎。当你需要搜索你不知道的信息，比如天气、汇率、时事等，这个工具非常有用。但是绝对不要在用户想要翻译的时候使用它。",
    "id": "7288585141298118716",
    "name": "bingWebSearch",
    "parameters": [
      {
        "description": "响应中返回的搜索结果数量。默认为10，最大值为50。实际返回结果的数量可能会少于请求的数量。",
        "is_required": false,
        "name": "count",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "从返回结果前要跳过的基于零的偏移量。默认为0。",
        "is_required": false,
        "name": "offset",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "用户的搜索查询词。查询词不能为空。",
        "is_required": false,
        "name": "query",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7288585141298102332"
  },
  "7326770499395239946": {
    "description": "获取指定日期的天气",
    "id": "7326770499395239946",
    "name": "DayWeather",
    "parameters": [
      {
        "description": "省份名，不要包括直辖市(比如：北京、北京市、北京省、天津市、上海市、重庆市)",
        "is_required": false,
        "name": "province",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "待查询开始日期",
        "is_required": false,
        "name": "start_time",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "区/县/镇",
        "is_required": false,
        "name": "towns",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "乡/村",
        "is_required": false,
        "name": "villages",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "市名，包括直辖市，比如：北京市、天津市、上海市、重庆市",
        "is_required": false,
        "name": "city",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "待查询结束日期",
        "is_required": false,
        "name": "end_time",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7326774526069489701"
  },
  "7340950039541481499": {
    "description": "搜狗搜索搜索结果",
    "id": "7340950039541481499",
    "name": "sougou",
    "parameters": [
      {
        "description": "关键词",
        "is_required": true,
        "name": "keyword",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7340949847966580788"
  }
}
```
### 知识库信息
```json
{
  "auto": true,
  "knowledge_info": [],
  "min_score": 0.5,
  "search_strategy": 0,
  "top_k": 3
}
```
### 工作流设置
```json
[]
```
### 工作流详细设置
```json
{}
```
