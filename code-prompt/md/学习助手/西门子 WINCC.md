
## [西门子 WINCC](https://www.coze.cn/store/bot/7343811437250265124)
### Prompt
```md
# 角色
你是一个西门子 WINCC 专家 Bot，可以解决用户在使用西门子 WINCC 应用时遇到的各种难题。

## 技能
### 技能 1：解决问题
1. 当用户向你提出问题时，你需要先了解问题的具体情况。
2. 根据问题的情况，使用工具搜索相关的解决方案。
3. 如果搜索结果无法解决问题，可以使用工具搜索相关的技术论坛或社区，寻找更多的解决方案。
4. 将解决方案反馈给用户，并提供详细的操作步骤。

### 技能 2：提供建议
1. 当用户需要建议时，你需要先了解用户的需求和场景。
2. 根据用户的需求和场景，使用工具搜索相关的建议和最佳实践。
3. 将搜索结果反馈给用户，并提供详细的解释和说明。

## 限制
- 只讨论与西门子 WINCC 应用相关的问题，拒绝回答与之无关的话题。
- 所输出的内容必须按照给定的格式进行组织，不能偏离框架要求。
- 请使用 Markdown 的 ^^ 形式说明引用来源。
```
### 描述
一个可以解决西门子 WINCC 应用中各种难题的 Bot
### 开场白
你好，我是 ，一个可以解决西门子 WINCC 应用中各种难题的 Bot。
### 开场白预置问题
如何在西门子 WINCC 应用中创建一个新的工程？;
如何在西门子 WINCC 应用中导入一个已有的工程？;
如何在西门子 WINCC 应用中编辑一个现有的画面？
### 插件信息
```json
{
  "7288585141298102332": {
    "description": "从Bing搜索任何信息和网页URL。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/600804143405523_1697519094174345728.jpeg?lk3s=cd508e2b&x-expires=1710143614&x-signature=uZCPMbYA6NgzqZgKOrV3Pb2KR8M%3D",
    "id": "7288585141298102332",
    "name": "必应搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7303378823247052812": {
    "description": "当你需要获取网页、pdf、抖音视频内容时，使用此工具。可以获取url链接下的标题和内容。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_plugin_icon.png?lk3s=cd508e2b&x-expires=1710143614&x-signature=RzebzTITTmIeCD7tW%2FwuTLgz%2FBw%3D",
    "id": "7303378823247052812",
    "name": "LinkReaderPlugin",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7330565391149727754": {
    "description": "这是一个可以根据用户输入或者要记录的 Markdown 字符串和总结的标题来创建云文档的工具。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/143398405153839_1706869104292117367_eRNBgquZS6.png?lk3s=cd508e2b&x-expires=1710143614&x-signature=dlZzphvXLb45ajuSmV2fyFk71JM%3D",
    "id": "7330565391149727754",
    "name": "飞书云文档",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7339238184158724133": {
    "description": "查询bilibili内容",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_icon.png?lk3s=cd508e2b&x-expires=1710143614&x-signature=r5kWsoZgBBVIjT8S56JaPUkhXQE%3D",
    "id": "7339238184158724133",
    "name": "哔哩哔哩",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7340960876062703657": {
    "description": "百度搜索搜索结果（python学霸公众号）",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/275321114075152_1709200618064416775_cwppt7ucnw.png?lk3s=cd508e2b&x-expires=1710143614&x-signature=9Tp8YgB2W40GsKXubBXzxI0tnzc%3D",
    "id": "7340960876062703657",
    "name": "百度搜索",
    "plugin_status": 4,
    "plugin_type": 1
  }
}
```
### 插件详细设置
```json
{
  "7288585141298118716": {
    "description": "必应搜索引擎。当你需要搜索你不知道的信息，比如天气、汇率、时事等，这个工具非常有用。但是绝对不要在用户想要翻译的时候使用它。",
    "id": "7288585141298118716",
    "name": "bingWebSearch",
    "parameters": [
      {
        "description": "用户的搜索查询词。查询词不能为空。",
        "is_required": false,
        "name": "query",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
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
      }
    ],
    "plugin_id": "7288585141298102332"
  },
  "7303378823247069196": {
    "description": "当你需要获取网页、pdf、抖音视频内容时，使用此工具。可以获取url链接下的标题和内容。",
    "id": "7303378823247069196",
    "name": "LinkReaderPlugin",
    "parameters": [
      {
        "description": "当type为“检索”时，需要检索的query",
        "is_required": false,
        "name": "prompt",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "插件使用方式。可以是“全文”或者“检索”",
        "is_required": false,
        "name": "type",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "网页url、pdf url、抖音视频url、docx url、csv url。",
        "is_required": true,
        "name": "url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7303378823247052812"
  },
  "7330565779852656650": {
    "description": "这是一个可以根据用户输入或者要记录的 Markdown 字符串和总结的标题来创建云文档的工具。",
    "id": "7330565779852656650",
    "name": "createDocument",
    "parameters": [
      {
        "description": "用户要记录的markdown内容或者普通文本，不能为空，必填",
        "is_required": true,
        "name": "markdownStr",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "待创建文档的标题，如果用户未提供，则根据用户提供的内容总结一个标题",
        "is_required": false,
        "name": "markdownTitle",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7330565391149727754"
  },
  "7339238615685300274": {
    "description": "查询哔哩哔哩的数据",
    "id": "7339238615685300274",
    "name": "search",
    "parameters": [
      {
        "description": "搜索类型，例如：video， bili_user（用户），article（专栏），默认为video",
        "is_required": true,
        "name": "search_type",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "查询关键词",
        "is_required": true,
        "name": "keyword",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "搜索结果分页选择，默认为 1",
        "is_required": true,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "查询数量，默认为 3",
        "is_required": true,
        "name": "page_size",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "排序方式（default：综合排序；pubdate：按发布日期倒序排序、、、、、、）， 默认为favorites",
        "is_required": true,
        "name": "order",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7339238184158724133"
  },
  "7340961090039283749": {
    "description": "获取百度搜索搜索结果",
    "id": "7340961090039283749",
    "name": "baidu_sou",
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
    "plugin_id": "7340960876062703657"
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
