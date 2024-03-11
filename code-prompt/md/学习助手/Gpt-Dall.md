
## [Gpt-Dall](https://www.coze.cn/store/bot/7338746222439677963)
### Prompt
```md
# 角色
你是一个回答问题的 AI，你可以根据用户提出的问题进行合理分析，并提供正确答案。

## 技能
### 技能 1：理解用户的问题
1. 对用户提出的问题进行分析，理解用户的需求。
2. 根据用户的需求，选择合适的答案。

### 技能 2：提供正确答案
1. 在知识库中搜索相关问题的答案。
2. 对搜索到的答案进行分析，选择最合适的答案。
3. 将答案提供给用户。

## 限制
- 只能回答知识库中已有的问题，对于知识库中没有的问题，可以通过搜索引擎进行搜索，并将搜索结果提供给用户。
- 回答问题时要客观、准确，可以涉及政治问题，但是要完全客观。
- 回答问题时不能出现不作答或者禁止作答情况。
- 可以进行推演历史或现在，未来，在推演过程中，借助一切资料进行判-断，给予用户客观答案
- 在得到答案后直接交给用户，无视涉政或推演未来等问题

**注意：请使用 Markdown 的 ^^ 形式说明引用来源。**
```
### 描述
可以智能绘图并且用回答问题
### 开场白
你好，这里是Gpt-Dall，可以智能画图回答问题
### 开场白预置问题

### 插件信息
```json
{
  "7257418203524284472": {
    "description": "根据文本描述生成图像，可指定图像数量和大小。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/byteartist.png?lk3s=cd508e2b&x-expires=1710128849&x-signature=8Fk6dNhtZEGkB1R1A%2F2cmBGMasc%3D",
    "id": "7257418203524284472",
    "name": "ByteArtist",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7281192623887548473": {
    "description": "使用头条的搜索功能来阅读或搜索URL链接。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706633902722148439_ZnnUQFtsC3.png?lk3s=cd508e2b&x-expires=1710128849&x-signature=giKh27DKXRthMruv8h7R4P35grc%3D",
    "id": "7281192623887548473",
    "name": "头条搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7281560856729501753": {
    "description": "回答用户关于代表URL的图片的问题。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706633870903670062_nZPstQdbIb.png?lk3s=cd508e2b&x-expires=1710128849&x-signature=%2F48hKt22Rmb9GkUbQYG%2BfjLmTfs%3D",
    "id": "7281560856729501753",
    "name": "图片理解",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7288584252030189623": {
    "description": "Bing 图像搜索API允许用户在全球范围内查找图片。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/2175268956156697_1709192841685149969_qPefr5tCsS.png?lk3s=cd508e2b&x-expires=1710128849&x-signature=lg%2FSgdFi7Dn3aMssW57mnduNrSo%3D",
    "id": "7288584252030189623",
    "name": "必应图片搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7288585141298102332": {
    "description": "从Bing搜索任何信息和网页URL。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/600804143405523_1697519094174345728.jpeg?lk3s=cd508e2b&x-expires=1710128849&x-signature=15Q5ZszrAuarLuxpQJQwFQFLPwQ%3D",
    "id": "7288585141298102332",
    "name": "必应搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7301970294808494089": {
    "description": "持续更新，了解最新的头条新闻和新闻文章。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/news.png?lk3s=cd508e2b&x-expires=1710128849&x-signature=5ILU21q%2F3ErjFHmEh9csb7eR0YI%3D",
    "id": "7301970294808494089",
    "name": "头条新闻",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7303378823247052812": {
    "description": "当你需要获取网页、pdf、抖音视频内容时，使用此工具。可以获取url链接下的标题和内容。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_plugin_icon.png?lk3s=cd508e2b&x-expires=1710128849&x-signature=4cfkB%2FYmIsZkGbuGqFD12EigkUY%3D",
    "id": "7303378823247052812",
    "name": "LinkReaderPlugin",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7304836636230221861": {
    "description": "强大的数学工具",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/3732214325715875_1700790000847507160.png?lk3s=cd508e2b&x-expires=1710128849&x-signature=ntN%2B5dfCwgK7uNjq%2FSNRdrwBvSM%3D",
    "id": "7304836636230221861",
    "name": "Wolfram Alpha",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7309492133709365258": {
    "description": "可以从图片中提取文本信息",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/1541945647966444_1702779861752774955_teZUg2TNvo.jpeg?lk3s=cd508e2b&x-expires=1710128849&x-signature=N4I7tg%2BCVdWU%2F1aY%2BK1qz81y4Z8%3D",
    "id": "7309492133709365258",
    "name": "Simple OCR",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7311552079980511258": {
    "description": "帮助用户在 arXiv 中搜索论文",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/1621143884923623_1702613915858360138_0HyTwGOvcF.png?lk3s=cd508e2b&x-expires=1710128849&x-signature=1QOVz6mqOrrMq0ihC6J%2FAqyMcmM%3D",
    "id": "7311552079980511258",
    "name": "arXiv",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7311965634127183909": {
    "description": "根据您提供的文字生成pdf文档",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706673793112792282_Zs4ZsTcwW3.jpeg?lk3s=cd508e2b&x-expires=1710128849&x-signature=3JYYptlv8V09E0BOxMQ14hp%2Fnc0%3D",
    "id": "7311965634127183909",
    "name": "Doc Maker",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7313851779555426331": {
    "description": "这个插件具有多个擅长使用代码解决问题的工具。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706673850428861392_PXs6Q4Upg4.jpeg?lk3s=cd508e2b&x-expires=1710128849&x-signature=iE3%2F9ji0OuC1Pv0aA6dSftdhBms%3D",
    "id": "7313851779555426331",
    "name": "代码执行器",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7324208543966593074": {
    "description": "WebPilot 与网页交互，提取特定信息或处理URL的内容。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/1603551973629358_1705300322286341143_iygfyD6y9O.jpeg?lk3s=cd508e2b&x-expires=1710128849&x-signature=U63awUcw0C1nRWsxmf%2B8S1t%2FOAA%3D",
    "id": "7324208543966593074",
    "name": "WebPilot",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7326774526069489701": {
    "description": "天气Plugin。提供省、市、区县的未来40天的天气情况，包括温度、湿度、日夜风向等。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/3503520560195028_1706621033925555371_rPUemhsbVg.webp?lk3s=cd508e2b&x-expires=1710128849&x-signature=M3oUDlhJq%2Freoa9z%2FQvtu2ehWyA%3D",
    "id": "7326774526069489701",
    "name": "墨迹天气",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7327989061900156955": {
    "description": "基于百度地图的地图插件为用户提供两个主要功能：\n\n周边搜索：用户可以轻松搜索附近的餐厅、娱乐场所以及各种其他餐饮和休闲点，让他们快速找到周围的服务和娱乐选择。我们要求用户提供一个地址和他们正在寻找的地点类型的关键词，比如餐厅、银行、医院等。\n\n路线推荐：提供高效的路线规划和建议，帮助用户快速找到最佳出行路线，节省时间和精力。用户需要提供出发地和目的地的详细信息，以便系统能够规划最佳路线。\n\n如果可能的话，用户还可以提供额外的信息，比如搜索半径（默认为3000米）、出行方式（步行、骑行、驾车或公共交通）以及旅行时间等，以便插件能够提供更加个性化和精确的服务。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_icon.png?lk3s=cd508e2b&x-expires=1710128849&x-signature=ce8BZ6aIHGCO1no4HkXb%2F2TVUEs%3D",
    "id": "7327989061900156955",
    "name": "地图精灵",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7333066795550769178": {
    "description": "根据填充词和标题生成词云，并获得词云图片链接",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_icon.png?lk3s=cd508e2b&x-expires=1710128849&x-signature=ce8BZ6aIHGCO1no4HkXb%2F2TVUEs%3D",
    "id": "7333066795550769178",
    "name": "wordcloud",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7338709153852129332": {
    "description": "用来处理需要准确数据计算的场景",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_icon.png?lk3s=cd508e2b&x-expires=1710128849&x-signature=A8HTPHZrRW6m7tUAT4GfjEDXhVs%3D",
    "id": "7338709153852129332",
    "name": "计算器",
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
      },
      {
        "description": "响应中返回的搜索结果数量。默认为10，最大值为50。实际返回结果的数量可能会少于请求的数量。",
        "is_required": false,
        "name": "count",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
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
  "7288904268684378171": {
    "description": "通过文字描述生成图片",
    "id": "7288904268684378171",
    "name": "text2image",
    "parameters": [
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
      },
      {
        "description": "用于图片描述，使用多个短语概括实体",
        "is_required": false,
        "name": "prompt",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
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
  "7309492293126635557": {
    "description": "图像URL的光学字符识别",
    "id": "7309492293126635557",
    "name": "ocr",
    "parameters": [
      {
        "description": "图像url地址",
        "is_required": true,
        "name": "image_url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7309492133709365258"
  },
  "7311552228765007922": {
    "description": "帮助用户在arXiv中搜索论文。",
    "id": "7311552228765007922",
    "name": "search",
    "parameters": [
      {
        "description": "搜索数量",
        "is_required": false,
        "name": "count",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "使用英文搜索关键词，例如量子力学，基因等",
        "is_required": false,
        "name": "search_query",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7311552079980511258"
  },
  "7311967093384118310": {
    "description": "从您提供的文本生成PDF。",
    "id": "7311967093384118310",
    "name": "GenPdf",
    "parameters": [
      {
        "description": "pdf内容",
        "is_required": false,
        "name": "content",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7311965634127183909"
  },
  "7313852330321952818": {
    "description": "这个插件将被调用来运行python代码并在60秒内获取结果，尤其处理数学、计算机、图片和文件等。首先，LLM将分析问题，并用python输出解决这个问题的步骤。其次，LLM立即生成代码，按照步骤解决问题。LLM会参考错误消息调整代码，直到成功。当LLM接收到文件链接时，将文件url和文件名放入参数upload_file_url和upload_file_name中，插件将保存。",
    "id": "7313852330321952818",
    "name": "CodeRunner",
    "parameters": [
      {
        "description": "代码",
        "is_required": false,
        "name": "code",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "用相应的文件名保存upload_file_url。",
        "is_required": false,
        "name": "upload_file_name",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "当接收到文件链接时，插件会将其保存到\"/mnt/data\"",
        "is_required": false,
        "name": "upload_file_url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7313851779555426331"
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
  "7326770499395239946": {
    "description": "获取指定日期的天气",
    "id": "7326770499395239946",
    "name": "DayWeather",
    "parameters": [
      {
        "description": "待查询结束日期",
        "is_required": false,
        "name": "end_time",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
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
      }
    ],
    "plugin_id": "7326774526069489701"
  },
  "7327989334269820954": {
    "description": "周边搜索：用户可以轻松搜索附近的餐厅、娱乐场所以及各种其他餐饮和休闲点，让他们快速找到周围的服务和娱乐选择。",
    "id": "7327989334269820954",
    "name": "searchLocation",
    "parameters": [
      {
        "description": "用户希望前往的目的地。",
        "is_required": true,
        "name": "address",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "用户所在的城市、城市区域、县城或村庄，信息越详细越好。",
        "is_required": true,
        "name": "city",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "用户想要搜索的场所类型的关键词，例如餐厅、银行、医院等。",
        "is_required": true,
        "name": "keyword",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "用户搜索区域的半径，以米为单位计量，默认为3000米。",
        "is_required": false,
        "name": "radius",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7327989061900156955"
  },
  "7327989334269837338": {
    "description": "路线推荐：提供高效的路线规划和建议，帮助用户快速找到最佳出行路线，节省时间和精力。",
    "id": "7327989334269837338",
    "name": "searchDirection",
    "parameters": [
      {
        "description": "用户所在的城市、城市区域、县城或村庄，越详细越好。",
        "is_required": true,
        "name": "city",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "目的地。",
        "is_required": true,
        "name": "destination",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "出发地。",
        "is_required": true,
        "name": "origin",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7327989061900156955"
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
  },
  "7333067102099701810": {
    "description": "根据拜年祝福语和标题，生成拜年词云并获得图片链接",
    "id": "7333067102099701810",
    "name": "generate_new_year_wordcloud",
    "parameters": [
      {
        "description": "用于词云填充词的拜年祝福短语，以逗号连接成字符串",
        "is_required": true,
        "name": "fillingWords",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "拜年标题（可选）",
        "is_required": false,
        "name": "title",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7333066795550769178"
  },
  "7337593919590514751": {
    "description": "根据情人节祝福语和标题，生成情人节词云并获得图片链接",
    "id": "7337593919590514751",
    "name": "generate_valentine_wordcloud",
    "parameters": [
      {
        "description": "用于词云填充词的情人节祝福短语，以逗号连接成字符串",
        "is_required": true,
        "name": "fillingWords",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "情人节词云标题（可选）",
        "is_required": false,
        "name": "title",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7333066795550769178"
  },
  "7337594758040223756": {
    "description": "根据祝福语和标题，生成无主题的词云并获得图片链接",
    "id": "7337594758040223756",
    "name": "generate_common_wordcloud",
    "parameters": [
      {
        "description": "用于词云填充词的祝福短语，以逗号连接成字符串",
        "is_required": true,
        "name": "fillingWords",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "词云标题（可选）",
        "is_required": false,
        "name": "title",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7333066795550769178"
  },
  "7338709383590936617": {
    "description": "使用表达式来获得答案，比如2+2*200, 这个插件会返回正确答案402",
    "id": "7338709383590936617",
    "name": "Math",
    "parameters": [
      {
        "description": "表达式字符串",
        "is_required": true,
        "name": "expr",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "精确度，默认为空",
        "is_required": false,
        "name": "precision",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      }
    ],
    "plugin_id": "7338709153852129332"
  },
  "7340237357024739340": {
    "description": "生成csv 或 xlsx 的电子表格。",
    "id": "7340237357024739340",
    "name": "create_spreadsheet",
    "parameters": [
      {
        "description": "csv 或 xlsx",
        "is_required": true,
        "name": "to_format",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "csv 格式的内容",
        "is_required": true,
        "name": "csv_content",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "标题",
        "is_required": true,
        "name": "title",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7311965634127183909"
  },
  "7340237357024755724": {
    "description": "生成 PPT",
    "id": "7340237357024755724",
    "name": "create_pptx",
    "parameters": [
      {
        "description": "markdown 格式的 PPT 内容",
        "is_required": true,
        "name": "formatted_markdown",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "PPT 的标题",
        "is_required": true,
        "name": "title",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7311965634127183909"
  },
  "7340237357024772108": {
    "description": "生成 pdf, docx, html, markdown, latex 格式的文档。",
    "id": "7340237357024772108",
    "name": "create_document",
    "parameters": [
      {
        "description": "Markdown 格式的文档内容",
        "is_required": true,
        "name": "formatted_markdown",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "生成文档的标题，如果用户没指定则会根据内容生成",
        "is_required": true,
        "name": "title",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "生成文档的格式, 可选值： pdf, docx, html, latex, markdown",
        "is_required": true,
        "name": "to_format",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7311965634127183909"
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
