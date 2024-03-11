
## [万能AI](https://www.coze.cn/store/bot/7339328750032814106)
### Prompt
```md

```
### 描述

### 开场白

### 开场白预置问题

### 插件信息
```json
{
  "7257418203524284472": {
    "description": "根据文本描述生成图像，可指定图像数量和大小。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/byteartist.png?lk3s=cd508e2b&x-expires=1710145612&x-signature=VxOLYCovJOioBVNHQPBtfhlfxHk%3D",
    "id": "7257418203524284472",
    "name": "ByteArtist",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7281192623887548473": {
    "description": "使用头条的搜索功能来阅读或搜索URL链接。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706633902722148439_ZnnUQFtsC3.png?lk3s=cd508e2b&x-expires=1710145612&x-signature=72jPLtdA6D6f0QdpqQ3ci08QX6w%3D",
    "id": "7281192623887548473",
    "name": "头条搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7288585141298102332": {
    "description": "从Bing搜索任何信息和网页URL。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/600804143405523_1697519094174345728.jpeg?lk3s=cd508e2b&x-expires=1710145612&x-signature=o13ykaI1VDYrvYWj8eoaHgOnhDw%3D",
    "id": "7288585141298102332",
    "name": "必应搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7330565391149727754": {
    "description": "这是一个可以根据用户输入或者要记录的 Markdown 字符串和总结的标题来创建云文档的工具。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/143398405153839_1706869104292117367_eRNBgquZS6.png?lk3s=cd508e2b&x-expires=1710145612&x-signature=8yr6wd0cNViQ%2BegQvTpEzU7cZxE%3D",
    "id": "7330565391149727754",
    "name": "飞书云文档",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7336880488105230376": {
    "description": "在线搜索书籍信息",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/2553529766254206_1708329393006626645_JbmGmGcC40.png?lk3s=cd508e2b&x-expires=1710145612&x-signature=XJX1Rji9bHEox32ghjfifntVBaA%3D",
    "id": "7336880488105230376",
    "name": "在线搜书",
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
  "7288904268684378171": {
    "description": "通过文字描述生成图片",
    "id": "7288904268684378171",
    "name": "text2image",
    "parameters": [
      {
        "description": "用于图片描述，使用多个短语概括实体",
        "is_required": false,
        "name": "prompt",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "图片宽度，必须使用512",
        "is_required": false,
        "name": "width",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "图片高度，必须使用512",
        "is_required": false,
        "name": "height",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "1代表通用风格，0代表动漫风格",
        "is_required": false,
        "name": "model_type",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "要生成的图片数量",
        "is_required": false,
        "name": "nums",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      }
    ],
    "plugin_id": "7257418203524284472"
  },
  "7288907006981996602": {
    "description": "从url链接获取正文信息",
    "id": "7288907006981996602",
    "name": "browse",
    "parameters": [
      {
        "description": "用户的有关url链接内容的问题",
        "is_required": false,
        "name": "prompt",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "期望的url",
        "is_required": false,
        "name": "url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7281192623887548473"
  },
  "7288907006982012986": {
    "description": "搜索用户询问的内容",
    "id": "7288907006982012986",
    "name": "search",
    "parameters": [
      {
        "description": "当你需要搜索你不知道的信息，比如天气、汇率、时事等，这个工具非常有用。",
        "is_required": false,
        "name": "input_query",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "上次搜索返回的search_id，没有可为空",
        "is_required": false,
        "name": "search_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "所需链接的数量限制，默认为10。",
        "is_required": false,
        "name": "count",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "搜索的偏移量，默认为0。",
        "is_required": false,
        "name": "cursor",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      }
    ],
    "plugin_id": "7281192623887548473"
  },
  "7329419680601636873": {
    "description": "根据用户的描述生成多种风格的图片\n",
    "id": "7329419680601636873",
    "name": "ImageToolPro",
    "parameters": [
      {
        "description": "图片的链接，在model_type为2的情况下需要传入",
        "is_required": false,
        "name": "image_url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "生成图片的类型：0代表通用风格、1代表卡通风格、3代表像素贴纸风格、2根据用户输入的图片进行生成",
        "is_required": true,
        "name": "model_type",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "对于要生成的图片的描述",
        "is_required": true,
        "name": "prompt",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7257418203524284472"
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
  "7332032784040525863": {
    "description": "提供新春萌宠图片生成，当用户上传宠物图片或者提供图片链接时，可以用此工具生成新的新春萌宠图片",
    "id": "7332032784040525863",
    "name": "new_year_pets_image",
    "parameters": [
      {
        "description": "生成的图片的类型模版。宠物礼盒:1 , 新年工笔画:2, 新年唐装:3, 东北大花:4, 情人玫瑰:5, 天使丘比特:6, 恭喜发财:7",
        "is_required": false,
        "name": "model",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "-1代表随机生成。默认29",
        "is_required": false,
        "name": "seed",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "生成的图片质量。0.3:低, 0.5:中, 0.7:高",
        "is_required": false,
        "name": "strength",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "图片链接。该字段是必传的",
        "is_required": true,
        "name": "image_url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7257418203524284472"
  },
  "7336880753411637258": {
    "description": "在线搜索书籍信息，返回结构化的书籍列表信息",
    "id": "7336880753411637258",
    "name": "search_books_online",
    "parameters": [
      {
        "description": "搜索的关键词，可以是书名、作者名、ISBN 等",
        "is_required": true,
        "name": "kw",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7336880488105230376"
  },
  "7336887801167904778": {
    "description": "根据唯一 id 获取该书籍相关的详细信息",
    "id": "7336887801167904778",
    "name": "get_online_book_info",
    "parameters": [
      {
        "description": "书籍的唯一 id",
        "is_required": true,
        "name": "id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7336880488105230376"
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
