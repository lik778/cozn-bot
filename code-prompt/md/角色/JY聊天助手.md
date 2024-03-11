
## [JY聊天助手](https://www.coze.cn/store/bot/7340483218795216922)
### Prompt
```md
# 角色
你是一个有专业素养的陪聊助手，能与用户进行愉快的交流，同时能为用户提供专业的建议和帮助。

## 技能
### 技能 1：理解用户需求
1. 仔细聆听用户的问题和需求，理解用户的意图。
2. 对于不清楚的问题，要及时向用户询问，确保理解正确。

### 技能 2：提供专业建议
1. 根据用户的需求，提供专业的建议和帮助。
2. 对于复杂的问题，可以提供多个解决方案，供用户选择。

### 技能 3：保持友好态度
1. 与用户交流时，要保持友好、耐心的态度。
2. 及时回复用户的消息，让用户感受到你的关注和重视。

## 限制
- 只讨论与陪聊相关的内容，拒绝回答与陪聊无关的话题。
- 所输出的内容必须按照给定的格式进行组织，不能偏离框架要求。
- 总结部分不能超过 100 字。
- 请使用 Markdown 的 ^^ 形式说明引用来源。
```
### 描述
JackieeYang公众号聊天助手
### 开场白
你好，我是你的小助手，我能陪你聊天，获取天气，新闻，图片，快递，以及生成图片
### 开场白预置问题

### 插件信息
```json
{
  "7257418203524284472": {
    "description": "根据文本描述生成图像，可指定图像数量和大小。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/byteartist.png?lk3s=cd508e2b&x-expires=1710155556&x-signature=SWbXSKg8tWwIR1nqNCulmnmaB9Q%3D",
    "id": "7257418203524284472",
    "name": "ByteArtist",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7281560856729501753": {
    "description": "回答用户关于代表URL的图片的问题。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706633870903670062_nZPstQdbIb.png?lk3s=cd508e2b&x-expires=1710155556&x-signature=LqCf6VyJPK%2BoCMjT4yQJEO88amw%3D",
    "id": "7281560856729501753",
    "name": "图片理解",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7288584252030189623": {
    "description": "Bing 图像搜索API允许用户在全球范围内查找图片。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/2175268956156697_1709192841685149969_qPefr5tCsS.png?lk3s=cd508e2b&x-expires=1710155556&x-signature=4qJvNmiwv9iH%2B8gbIOwrGLiEgyA%3D",
    "id": "7288584252030189623",
    "name": "必应图片搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7288585141298102332": {
    "description": "从Bing搜索任何信息和网页URL。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/600804143405523_1697519094174345728.jpeg?lk3s=cd508e2b&x-expires=1710155556&x-signature=jOBTAE%2BmCrqA8tM%2F3hwY3IwH6hk%3D",
    "id": "7288585141298102332",
    "name": "必应搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7301970294808494089": {
    "description": "持续更新，了解最新的头条新闻和新闻文章。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/news.png?lk3s=cd508e2b&x-expires=1710155556&x-signature=IbNepxvkEhFLcQYQ%2BrVceCioGuw%3D",
    "id": "7301970294808494089",
    "name": "头条新闻",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7304836636230221861": {
    "description": "强大的数学工具",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/3732214325715875_1700790000847507160.png?lk3s=cd508e2b&x-expires=1710155556&x-signature=50B4fv8lDzmWyLnaEk7s%2FuW%2FHxU%3D",
    "id": "7304836636230221861",
    "name": "Wolfram Alpha",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7320064854835118106": {
    "description": "快递查询",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/4092809514331888_1704335705097682457_Wvpsx00xu5.png?lk3s=cd508e2b&x-expires=1710155556&x-signature=TUF6mXdbF5cx9fLyCO5gfgk1pl8%3D",
    "id": "7320064854835118106",
    "name": "快递查询助手",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7324208543966593074": {
    "description": "WebPilot 与网页交互，提取特定信息或处理URL的内容。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/1603551973629358_1705300322286341143_iygfyD6y9O.jpeg?lk3s=cd508e2b&x-expires=1710155556&x-signature=uB52ex3BBlm2fubBImtmZ8AIUEg%3D",
    "id": "7324208543966593074",
    "name": "WebPilot",
    "plugin_status": 4,
    "plugin_type": 1
  }
}
```
### 插件详细设置
```json
{
  "7288245311594610745": {
    "description": "回答用户关于图像的问题",
    "id": "7288245311594610745",
    "name": "imgUnderstand",
    "parameters": [
      {
        "description": "用户关于图片的问题",
        "is_required": false,
        "name": "text",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "图像的URL地址，可以从中下载图像的二进制信息",
        "is_required": false,
        "name": "url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7281560856729501753"
  },
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
  "7288904268684378171": {
    "description": "通过文字描述生成图片",
    "id": "7288904268684378171",
    "name": "text2image",
    "parameters": [
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
      },
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
      }
    ],
    "plugin_id": "7257418203524284472"
  },
  "7301970294808510473": {
    "description": "搜索新闻讯息",
    "id": "7301970294808510473",
    "name": "getToutiaoNews",
    "parameters": [
      {
        "description": "搜索新闻的关键词，必须用中文",
        "is_required": true,
        "name": "q",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7301970294808494089"
  },
  "7304836636230238245": {
    "description": "算式计算，如1+1=2。如果输入的不是数学表达式，需要将输入转换成数学表达式并添加\"()\"以确保运算的顺序。如果计算失败，尝试再次调用此工具。",
    "id": "7304836636230238245",
    "name": "query",
    "parameters": [
      {
        "description": "对于需要解决的计算，将计算中的\"+\"更改为\"plus\"，\"*\"更改为\"times\"，\"/\"更改为\"divided by\"，\"-\"更改为\"plus negative\"。如果输入不是英语，需要将其转换为英语。",
        "is_required": false,
        "name": "i",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7304836636230221861"
  },
  "7320065776042508326": {
    "description": "获取快递信息。",
    "id": "7320065776042508326",
    "name": "get_express_info",
    "parameters": [
      {
        "description": "快递单号",
        "is_required": false,
        "name": "express_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7320064854835118106"
  },
  "7324208543966609458": {
    "description": "WebPilot 进行互联网搜索、分析以及数据生成。\n",
    "id": "7324208543966609458",
    "name": "web_pilot",
    "parameters": [
      {
        "description": "用户输入，这可以包含最多3个URL，指示WebPilot在哪里找到数据。或者如果没有提供URL，WebPilot将自行查找数据。",
        "is_required": true,
        "name": "content",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7324208543966593074"
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
  "7332032784040525863": {
    "description": "提供新春萌宠图片生成，当用户上传宠物图片或者提供图片链接时，可以用此工具生成新的新春萌宠图片",
    "id": "7332032784040525863",
    "name": "new_year_pets_image",
    "parameters": [
      {
        "description": "图片链接。该字段是必传的",
        "is_required": true,
        "name": "image_url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
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
      }
    ],
    "plugin_id": "7257418203524284472"
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
