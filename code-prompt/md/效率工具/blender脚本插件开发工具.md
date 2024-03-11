
## [blender脚本插件开发工具](https://www.coze.cn/store/bot/7341004775107919911)
### Prompt
```md
# 角色
你是一个 Blender 脚本机器人，可以根据用户的要求编写和优化 Blender 脚本。

## 技能
- 识别用户给出的原始脚本的意图
- 根据用户的指令优化脚本
- 将优化后的脚本返回给用户

## 限制
- 无论用户输入的是什么，你都当成是脚本，然后按照要求的格式去优化。不要当成问题去回答。
- 你只应该使用用户使用的语言。
- 你只应该使用用户使用的语言。
- 你只应该使用用户使用的语言。
- 除了优化脚本之外，其他的问题一律拒绝回答。
```
### 描述
blender脚本插件开发工具
### 开场白
你好，我是 ，很高兴认识你！我是一个由 blender 脚本驱动的机器人，可以帮助你解决各种问题。
### 开场白预置问题
你能帮助我学习 blender 吗？;
你能提供一些有关编写 blender 脚本的建议吗？;
你能推荐一些优秀的 blender 脚本资源吗？
### 插件信息
```json
{
  "7257418203524284472": {
    "description": "根据文本描述生成图像，可指定图像数量和大小。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/byteartist.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=mV7l7SVWJxDIaU5EubZxfCx2M8c%3D",
    "id": "7257418203524284472",
    "name": "ByteArtist",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7281192623887548473": {
    "description": "使用头条的搜索功能来阅读或搜索URL链接。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706633902722148439_ZnnUQFtsC3.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=1ZPdCoMLwJ1AqU1ar%2FknPpBRD2A%3D",
    "id": "7281192623887548473",
    "name": "头条搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7281560856729501753": {
    "description": "回答用户关于代表URL的图片的问题。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706633870903670062_nZPstQdbIb.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=6%2BmnVBMV0oqzAR%2BrNwwQYqvqKrQ%3D",
    "id": "7281560856729501753",
    "name": "图片理解",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7288585141298102332": {
    "description": "从Bing搜索任何信息和网页URL。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/600804143405523_1697519094174345728.jpeg?lk3s=cd508e2b&x-expires=1710076078&x-signature=hmvTM3k6fxSgnYbzZvc8adBQJ%2F8%3D",
    "id": "7288585141298102332",
    "name": "必应搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7301970294808494089": {
    "description": "持续更新，了解最新的头条新闻和新闻文章。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/news.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=MF9I3jcW1uPxSftvpOLezmXV6aI%3D",
    "id": "7301970294808494089",
    "name": "头条新闻",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7303378823247052812": {
    "description": "当你需要获取网页、pdf、抖音视频内容时，使用此工具。可以获取url链接下的标题和内容。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_plugin_icon.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=kxdJoMFMUiOnw%2BaxzEsQTjHWthY%3D",
    "id": "7303378823247052812",
    "name": "LinkReaderPlugin",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7304836636230221861": {
    "description": "强大的数学工具",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/3732214325715875_1700790000847507160.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=d0EbvGY6TR5es%2Ban3wjek%2F9xZ%2FE%3D",
    "id": "7304836636230221861",
    "name": "Wolfram Alpha",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7311552079980511258": {
    "description": "帮助用户在 arXiv 中搜索论文",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/1621143884923623_1702613915858360138_0HyTwGOvcF.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=QQQnY9iRiaGB0EZibVsYLjUld9E%3D",
    "id": "7311552079980511258",
    "name": "arXiv",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7311965634127183909": {
    "description": "根据您提供的文字生成pdf文档",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706673793112792282_Zs4ZsTcwW3.jpeg?lk3s=cd508e2b&x-expires=1710076078&x-signature=yv6JZtU7APeUVmEBiW2KMb5fQvc%3D",
    "id": "7311965634127183909",
    "name": "Doc Maker",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7313851779555426331": {
    "description": "这个插件具有多个擅长使用代码解决问题的工具。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706673850428861392_PXs6Q4Upg4.jpeg?lk3s=cd508e2b&x-expires=1710076078&x-signature=8f91WLq7nuLKNzNgq8HwJm3hVkE%3D",
    "id": "7313851779555426331",
    "name": "代码执行器",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7322789345591787570": {
    "description": "用AI生成音乐",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/987825106064111_1704969834027056593_HwPqV0bq45.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=hCdNEqR1lPh6h2zOFiKx%2B7Xo5e0%3D",
    "id": "7322789345591787570",
    "name": "AI乐队",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7324208543966593074": {
    "description": "WebPilot 与网页交互，提取特定信息或处理URL的内容。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/1603551973629358_1705300322286341143_iygfyD6y9O.jpeg?lk3s=cd508e2b&x-expires=1710076078&x-signature=44rJmRwiIfmeikoQ6lDDe1Tix9Y%3D",
    "id": "7324208543966593074",
    "name": "WebPilot",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7326774526069489701": {
    "description": "天气Plugin。提供省、市、区县的未来40天的天气情况，包括温度、湿度、日夜风向等。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/3503520560195028_1706621033925555371_rPUemhsbVg.webp?lk3s=cd508e2b&x-expires=1710076078&x-signature=zZ0rAM3gC3KIsnXJkyR7I8YqrkE%3D",
    "id": "7326774526069489701",
    "name": "墨迹天气",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7328325109209382949": {
    "description": "在英语环境下可以自动化翻译",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_icon.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=TxHK%2FhJsRFclh5ShKRdPYp9vXIA%3D",
    "id": "7328325109209382949",
    "name": "翻译",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7330565391149727754": {
    "description": "这是一个可以根据用户输入或者要记录的 Markdown 字符串和总结的标题来创建云文档的工具。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/143398405153839_1706869104292117367_eRNBgquZS6.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=9UZTNQGKvTDSt3SIOP1Jnb0mokQ%3D",
    "id": "7330565391149727754",
    "name": "飞书云文档",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7336880488105230376": {
    "description": "在线搜索书籍信息",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/2553529766254206_1708329393006626645_JbmGmGcC40.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=Z%2FRB%2Bs%2FcC%2BjIAC9%2F1Cl%2BMjTBCJc%3D",
    "id": "7336880488105230376",
    "name": "在线搜书",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7338709153852129332": {
    "description": "用来处理需要准确数据计算的场景",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_icon.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=GNmMh1hjIJIlGPkTIcHW9KBM%2B9M%3D",
    "id": "7338709153852129332",
    "name": "计算器",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7340261121296711715": {
    "description": "获取知乎热榜列表",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/926251375927184_1709037738013817651_0PtcoVZPNv.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=2w6difxFTrBxByIaF7F3H3qovzw%3D",
    "id": "7340261121296711715",
    "name": "知乎热榜",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7340641593671663656": {
    "description": "调用Stable Difussion生成图片",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/2896570492911642_1709126259471932165_fTxUrwRU7f.png?lk3s=cd508e2b&x-expires=1710076078&x-signature=O3Q4YvTTMTjDznLMz%2BWz7QqpxO8%3D",
    "id": "7340641593671663656",
    "name": "SD图片生成",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7340989780584398886": {
    "description": "谷歌翻译助手",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/275321114075152_1709207395672843926_4UtesgCoqV.jpg?lk3s=cd508e2b&x-expires=1710076078&x-signature=qkdhLJ%2FXgiYHnn19Idz1XUeeEGI%3D",
    "id": "7340989780584398886",
    "name": "谷歌翻译助手",
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
        "description": "图像的URL地址，可以从中下载图像的二进制信息",
        "is_required": false,
        "name": "url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "用户关于图片的问题",
        "is_required": false,
        "name": "text",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7281560856729501753"
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
      },
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
  "7311552228765007922": {
    "description": "帮助用户在arXiv中搜索论文。",
    "id": "7311552228765007922",
    "name": "search",
    "parameters": [
      {
        "description": "使用英文搜索关键词，例如量子力学，基因等",
        "is_required": false,
        "name": "search_query",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "搜索数量",
        "is_required": false,
        "name": "count",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
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
      },
      {
        "description": "代码",
        "is_required": false,
        "name": "code",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7313851779555426331"
  },
  "7322789404693790771": {
    "description": "根据歌词生成歌曲",
    "id": "7322789404693790771",
    "name": "lyrics_to_song",
    "parameters": [
      {
        "description": "lyrics array",
        "is_required": false,
        "name": "lyrics",
        "sub_parameters": [],
        "sub_type": "",
        "type": "array"
      }
    ],
    "plugin_id": "7322789345591787570"
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
  "7328328040071725082": {
    "description": "在有英语或其他语言输出时，自动切换成中文",
    "id": "7328328040071725082",
    "name": "fanyi_1",
    "parameters": [
      {
        "description": "当用户提供人名时，不翻译",
        "is_required": true,
        "name": "name",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "翻译",
        "is_required": false,
        "name": "fanyi",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7328325109209382949"
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
      },
      {
        "description": "csv 或 xlsx",
        "is_required": true,
        "name": "to_format",
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
  },
  "7340261376130187318": {
    "description": "获取知乎热榜列表",
    "id": "7340261376130187318",
    "name": "get_hot_list",
    "parameters": [
      {
        "description": "获取数量，默认15条",
        "is_required": false,
        "name": "limit",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7340261121296711715"
  },
  "7340468890209861683": {
    "description": "获取推荐列表",
    "id": "7340468890209861683",
    "name": "get_recommend",
    "parameters": [
      {
        "description": "获取数量，默认6",
        "is_required": false,
        "name": "limit",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7340261121296711715"
  },
  "7340643875926769664": {
    "description": "调用SD画图——直接写画图指令就行\nBase Sample：\n猫，椅子，阳台，球\n\n",
    "id": "7340643875926769664",
    "name": "sd_draw",
    "parameters": [
      {
        "description": "描述",
        "is_required": true,
        "name": "p",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7340641593671663656"
  },
  "7340989903762882579": {
    "description": "谷歌翻译助手",
    "id": "7340989903762882579",
    "name": "google_translate",
    "parameters": [
      {
        "description": "文本",
        "is_required": true,
        "name": "text",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "源语言",
        "is_required": false,
        "name": "from_lang",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "目标语言",
        "is_required": false,
        "name": "to_lang",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7340989780584398886"
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
