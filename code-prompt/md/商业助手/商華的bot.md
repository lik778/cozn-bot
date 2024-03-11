
## [商華的bot](https://www.coze.cn/store/bot/7342773386596155392)
### Prompt
```md
# 角色
你是一个资深的基金经理、经济学家、金融学家、政策专家和量化专家，能够基于数据和逻辑选择合理的投资组合。

## 技能
- 根据宏观经济数据、行业趋势、公司基本面等信息，进行投资决策。
- 分析市场趋势，把握投资机会。
- 对投资组合进行风险管理，控制风险水平。
- 关注政策变化，把握政策机遇。


```
### 描述
数据分析；投资研究；量化策略；
### 开场白

### 开场白预置问题

### 插件信息
```json
{
  "7288585141298102332": {
    "description": "从Bing搜索任何信息和网页URL。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/600804143405523_1697519094174345728.jpeg?lk3s=cd508e2b&x-expires=1710146598&x-signature=nw6Vj2Z9%2BJglcKfxqxy0X9lxsgI%3D",
    "id": "7288585141298102332",
    "name": "必应搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7304836636230221861": {
    "description": "强大的数学工具",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/3732214325715875_1700790000847507160.png?lk3s=cd508e2b&x-expires=1710146598&x-signature=u1l0kcl2eEdLHC6TrteRf%2Brl7WU%3D",
    "id": "7304836636230221861",
    "name": "Wolfram Alpha",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7309691061943795763": {
    "description": "提供来自世界银行的各种类型的开放数据。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/2500753137085275_1701919502403840876_7SxIdVgoit.png?lk3s=cd508e2b&x-expires=1710146598&x-signature=R1jdr0UolISMrpxmPECmod%2Bcj78%3D",
    "id": "7309691061943795763",
    "name": "世界银行",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7310488826684686386": {
    "description": "该插件提供中国证券市场（上海证券交易所和深圳证券交易所）的数据，包括上市公司基本信息、证券价格等。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/2175268956156697_1706671249066193822_esuuXB5oFC.jpeg?lk3s=cd508e2b&x-expires=1710146598&x-signature=hR0XX%2FN9qdqvYLiTyLoDfvSxwXc%3D",
    "id": "7310488826684686386",
    "name": "国内股票",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7313851779555426331": {
    "description": "这个插件具有多个擅长使用代码解决问题的工具。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706673850428861392_PXs6Q4Upg4.jpeg?lk3s=cd508e2b&x-expires=1710146598&x-signature=pZ0oNKZKReTSMx4bgzxWTgKVZfU%3D",
    "id": "7313851779555426331",
    "name": "代码执行器",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7324208543966593074": {
    "description": "WebPilot 与网页交互，提取特定信息或处理URL的内容。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/1603551973629358_1705300322286341143_iygfyD6y9O.jpeg?lk3s=cd508e2b&x-expires=1710146598&x-signature=Wfd%2Fo65zDkAHoG6L7U58j%2F8Mez4%3D",
    "id": "7324208543966593074",
    "name": "WebPilot",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7341248175384035328": {
    "description": "提供A股市场的证券信息、交易数据",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_icon.png?lk3s=cd508e2b&x-expires=1710146598&x-signature=YPDONWMsDftPYWmrKBzwmzFDijs%3D",
    "id": "7341248175384035328",
    "name": "A股金融数据",
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
  "7309691658592043059": {
    "description": "搜索国家id，国际代码，首都城市，经度，纬度。特殊提示，您可以一次性通过这个工具获取所有国家的国家id。国家id是这个插件的所有其他工具需要使用的参数。",
    "id": "7309691658592043059",
    "name": "search_a_country_basic_info",
    "parameters": [],
    "plugin_id": "7309691061943795763"
  },
  "7309783931220672521": {
    "description": "购买者价格的GDP是经济中所有常住生产者的总价值增加之和，再加上任何产品税收，减去未包含在产品价值中的任何补贴。数据以当前的美元表示。返回的数据单位为1美元。",
    "id": "7309783931220672521",
    "name": "search_gdp_info",
    "parameters": [
      {
        "description": "国家ID。可以通过“search_a_country_basic_info”工具获得国家ID。要同时访问多个国家的数据，请使用分号（;）分隔多个国家ID。例如，要获取中国和美国的数据，请输入'chn;usa'。",
        "is_required": false,
        "name": "country_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "指定您想从数据集中获取的页码。根据之前响应中获取的'pages'值，可以递增这个数字来获取后续更多数据的页面。",
        "is_required": false,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "用于确定每页显示的结果数量。默认设置是每页50个结果。",
        "is_required": false,
        "name": "per_page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "根据指定的数字获取最新值。对于多国查询，例如'chn;usa'，请考虑指定'mrv'参数。这会将数据限制在最近几年，例如，'mrv=10'将选择最后十年的数据，从而减少数据量。",
        "is_required": false,
        "name": "mrv",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      }
    ],
    "plugin_id": "7309691061943795763"
  },
  "7309810157708460059": {
    "description": "总人口是基于人口的事实定义，计算所有居民，无论法律身份或公民身份如何。显示的值是年中估计值。返回的数据单位是1个个体。",
    "id": "7309810157708460059",
    "name": "search_total_population",
    "parameters": [
      {
        "description": "国家id。可以从工具\"search_a_country_basic_info\"中获取国家ID。若要同时获取多个国家的数据，可用分号(;)分隔多个国家ID。例如，要同时获取中国和美国的数据，可输入'chn;usa'。",
        "is_required": false,
        "name": "country_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "当前页数",
        "is_required": false,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "每页返回的项目数，最小值为4。",
        "is_required": false,
        "name": "per_page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "基于指定的数字获取最近的值。对于多国家查询，例如 'chn;usa'，可以考虑指定 'mrv' 参数，这会限制数据为近年的，例如，'mrv=10' 就会选择最近的十年，从而减少数据量。",
        "is_required": false,
        "name": "mrv",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      }
    ],
    "plugin_id": "7309691061943795763"
  },
  "7309812136618934322": {
    "description": "人均GDP是国内生产总值除以年中人口数。GDP是经济中所有常住生产者的总价值增加之和，再加上任何产品税收，减去未包含在产品价值中的任何补贴。数据以当前的美元表示。返回的数据单位为1美元。",
    "id": "7309812136618934322",
    "name": "search_gdp_per_capita",
    "parameters": [
      {
        "description": "每页返回的项目数，最小值为4。",
        "is_required": false,
        "name": "per_page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "基于指定的数字获取最近的值。对于多国家查询，例如 'chn;usa'，可以考虑指定 'mrv' 参数，这会限制数据为近年的，例如，'mrv=10' 就会选择最近的十年，从而减少数据量。",
        "is_required": false,
        "name": "mrv",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "国家id。可以从工具\"search_a_country_basic_info\"中获取国家ID。若要同时获取多个国家的数据，可用分号(;)分隔多个国家ID。例如，要同时获取中国和美国的数据，可输入'chn;usa'。",
        "is_required": false,
        "name": "country_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "当前页数",
        "is_required": false,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      }
    ],
    "plugin_id": "7309691061943795763"
  },
  "7309825846993535027": {
    "description": "总失业人数（占劳动力总数的百分比）（国家估计）。失业是指劳动力中没有工作但现有并寻求就业的人口的比例。各国对劳动力和失业的定义不同。",
    "id": "7309825846993535027",
    "name": "search_unemployment",
    "parameters": [
      {
        "description": "国家id。可以从工具\"search_a_country_basic_info\"中获取国家ID。若要同时获取多个国家的数据，可用分号(;)分隔多个国家ID。例如，要同时获取中国和美国的数据，可输入'chn;usa'。",
        "is_required": false,
        "name": "country_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "当前页数",
        "is_required": false,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "每页返回的项目数，最小值为4。",
        "is_required": false,
        "name": "per_page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "基于指定的数字获取最近的值。对于多国家查询，例如 'chn;usa'，可以考虑指定 'mrv' 参数，这会限制数据为近年的，例如，'mrv=10' 就会选择最近的十年，从而减少数据量。",
        "is_required": false,
        "name": "mrv",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      }
    ],
    "plugin_id": "7309691061943795763"
  },
  "7309830620715384859": {
    "description": "中央政府债务总额（占GDP的百分比）。债务是指在特定日期上政府对他人的所有固定期限合约义务的全部储备。它包括国内外的债务，如货币和货币存款、非股份证券和贷款。",
    "id": "7309830620715384859",
    "name": "search_center_gov_debt_gdp",
    "parameters": [
      {
        "description": "国家ID。可以通过“search_a_country_basic_info”工具获得国家ID。要同时访问多个国家的数据，请使用分号（;）分隔多个国家ID。例如，要获取中国和美国的数据，请输入'chn;usa'。",
        "is_required": false,
        "name": "country_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "当前页码",
        "is_required": false,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "每页返回多少项，最小值为4。",
        "is_required": false,
        "name": "per_page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "根据指定的数字获取最新的值。对于多国家查询，例如'chn;usa'，请考虑指定'mrv'参数。这将数据限制在最近几年，例如'mrv=10'选取了最近十年的数据，减少了数据量。",
        "is_required": false,
        "name": "mrv",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      }
    ],
    "plugin_id": "7309691061943795763"
  },
  "7309838485937143858": {
    "description": "人口密度（每平方公里土地面积的人口数量）。人口密度是年中人口除以平方公里的土地面积。",
    "id": "7309838485937143858",
    "name": "search_population_density",
    "parameters": [
      {
        "description": "当前页数",
        "is_required": false,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "每页返回的项目数，最小值为4。",
        "is_required": false,
        "name": "per_page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "基于指定的数字获取最近的值。对于多国家查询，例如 'chn;usa'，可以考虑指定 'mrv' 参数，这会限制数据为近年的，例如，'mrv=10' 就会选择最近的十年，从而减少数据量。",
        "is_required": false,
        "name": "mrv",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "国家id。可以从工具\"search_a_country_basic_info\"中获取国家ID。若要同时获取多个国家的数据，可用分号(;)分隔多个国家ID。例如，要同时获取中国和美国的数据，可输入'chn;usa'。",
        "is_required": false,
        "name": "country_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7309691061943795763"
  },
  "7309842075925921818": {
    "description": "最高10%的人持有的收入份额。收入或消费的百分比份额是按十分位数或五分位数划分的人口子组所获得的份额。",
    "id": "7309842075925921818",
    "name": "search_income_share_highest_10",
    "parameters": [
      {
        "description": "国家id。可以从工具\"search_a_country_basic_info\"中获取国家ID。若要同时获取多个国家的数据，可用分号(;)分隔多个国家ID。例如，要同时获取中国和美国的数据，可输入'chn;usa'。",
        "is_required": false,
        "name": "country_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "当前页数",
        "is_required": false,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "每页返回的项目数，最小值为4。",
        "is_required": false,
        "name": "per_page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "基于指定的数字获取最近的值。对于多国家查询，例如 'chn;usa'，可以考虑指定 'mrv' 参数，这会限制数据为近年的，例如，'mrv=10' 就会选择最近的十年，从而减少数据量。",
        "is_required": false,
        "name": "mrv",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      }
    ],
    "plugin_id": "7309691061943795763"
  },
  "7310181882015285257": {
    "description": "经常账户余额（国际收支平衡表，当前美元）。经常账户余额是货物和服务净出口、初级收入净额和二次收入净额的总和。数据以当前美元计价。返回的数据单位是1美元。",
    "id": "7310181882015285257",
    "name": "search_current_account_balance",
    "parameters": [
      {
        "description": "基于指定的数字获取最近的值。对于多国家查询，例如 'chn;usa'，可以考虑指定 'mrv' 参数，这会限制数据为近年的，例如，'mrv=10' 就会选择最近的十年，从而减少数据量。",
        "is_required": false,
        "name": "mrv",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "国家id。可以从工具\"search_a_country_basic_info\"中获取国家ID。若要同时获取多个国家的数据，可用分号(;)分隔多个国家ID。例如，要同时获取中国和美国的数据，可输入'chn;usa'。",
        "is_required": false,
        "name": "country_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "当前页数",
        "is_required": false,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "每页返回的项目数，最小值为4。",
        "is_required": false,
        "name": "per_page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      }
    ],
    "plugin_id": "7309691061943795763"
  },
  "7310184062981963813": {
    "description": "外国直接投资，净流入（国际收支平衡表，当前美元）。外国直接投资是指报告经济体中的直接投资股权流入。它是股本、利润再投资及其他资本的总和。返回的数据单位是1美元。",
    "id": "7310184062981963813",
    "name": "search_foreign_direct_invest",
    "parameters": [
      {
        "description": "基于指定的数字获取最近的值。对于多国家查询，例如 'chn;usa'，可以考虑指定 'mrv' 参数，这会限制数据为近年的，例如，'mrv=10' 就会选择最近的十年，从而减少数据量。",
        "is_required": false,
        "name": "mrv",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "国家id。可以从工具\"search_a_country_basic_info\"中获取国家ID。若要同时获取多个国家的数据，可用分号(;)分隔多个国家ID。例如，要同时获取中国和美国的数据，可输入'chn;usa'。",
        "is_required": false,
        "name": "country_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "当前页数",
        "is_required": false,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "每页返回的项目数，最小值为4。",
        "is_required": false,
        "name": "per_page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      }
    ],
    "plugin_id": "7309691061943795763"
  },
  "7310185115920138250": {
    "description": "消费者价格指数（2010年=100）。消费者价格指数反映的是平均消费者获取一篮子可能固定或在指定间隔（如每年）改变的商品和服务的成本变化。通常使用Laspeyres公式计算。数据为期间平均值。",
    "id": "7310185115920138250",
    "name": "search_consumer_price_index",
    "parameters": [
      {
        "description": "当前页数",
        "is_required": false,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "每页返回的项目数，最小值为4。",
        "is_required": false,
        "name": "per_page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "基于指定的数字获取最近的值。对于多国家查询，例如 'chn;usa'，可以考虑指定 'mrv' 参数，这会限制数据为近年的，例如，'mrv=10' 就会选择最近的十年，从而减少数据量。",
        "is_required": false,
        "name": "mrv",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "国家id。可以从工具\"search_a_country_basic_info\"中获取国家ID。若要同时获取多个国家的数据，可用分号(;)分隔多个国家ID。例如，要同时获取中国和美国的数据，可输入'chn;usa'。",
        "is_required": false,
        "name": "country_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7309691061943795763"
  },
  "7310490599059374089": {
    "description": "显示公司基本信息。\n接口说明：根据“股票列表”中获取的股票代码，检索上市公司的公司概况。 包括公司基本信息、概念、发行信息等。",
    "id": "7310490599059374089",
    "name": "company_info",
    "parameters": [
      {
        "description": "6位数字组成的股票代码，前3位表示股票的类型和上市地点",
        "is_required": true,
        "name": "stock_code",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7310488826684686386"
  },
  "7310492663927717938": {
    "description": "公司最近的利润情况。\n界面说明：根据“股票榜”中获取的股票代码，获取上市公司过去一年各季度的利润情况。 按截止日期倒序排列。",
    "id": "7310492663927717938",
    "name": "company_recent_benefits",
    "parameters": [
      {
        "description": "6位数字组成的股票代码，前3位表示股票的类型和上市地点",
        "is_required": true,
        "name": "stock_code",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7310488826684686386"
  },
  "7312647881704636453": {
    "description": "显示给定公司的季节性盈利能力。\n接口说明：该接口汇总个股盈利情况，支持“Year_Quarter”查询。 年份可以选择1989年至今年，季度可以选择1：第一季度、2：中期报告、3：第三季度、4：年报。 例如，“2021_1”表示2021年第一季度的数据。",
    "id": "7312647881704636453",
    "name": "profitability_of_company",
    "parameters": [
      {
        "description": "6位数字组成的股票代码，前3位表示股票的类型和上市地点",
        "is_required": true,
        "name": "stock_code",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "查询年份，格式为YYYY",
        "is_required": false,
        "name": "year",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "查询季度，值为枚举值[1,2,3,4]",
        "is_required": false,
        "name": "season",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7310488826684686386"
  },
  "7312649170844778505": {
    "description": "公司的季节增长。\n接口说明：该接口汇总了个股的成长能力，支持“Year_Quarter”格式的查询。 年份可以选择1989年至今年，季度可以选择1：第一季度、2：中期报告、3：第三季度、4：年报。 例如“2021_1”表示查询2021年第一季度的数据。",
    "id": "7312649170844778505",
    "name": "season_growth_of_company",
    "parameters": [
      {
        "description": "6位数字组成的股票代码，前3位表示股票的类型和上市地点",
        "is_required": true,
        "name": "stock_code",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "查询年份，格式为YYYY",
        "is_required": false,
        "name": "year",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "查询季度，值为枚举值[1,2,3,4]",
        "is_required": false,
        "name": "season",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7310488826684686386"
  },
  "7312649748429963314": {
    "description": "接口说明：个股偿债能力汇总，支持“年_季度”查询。 年份可以选择1989年至今年，季度可以选择（1：第一季度报告，2：中期报告，3：第三季度报告，4：年报）。 例如“2021_1”表示查询2021年第一季度的数据。",
    "id": "7312649748429963314",
    "name": "season_debt_repay_of_company",
    "parameters": [
      {
        "description": "查询季度，值为枚举值[1,2,3,4]",
        "is_required": false,
        "name": "season",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "6位数字组成的股票代码，前3位表示股票的类型和上市地点",
        "is_required": true,
        "name": "stock_code",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "查询年份，格式为YYYY",
        "is_required": false,
        "name": "year",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7310488826684686386"
  },
  "7312650346944462898": {
    "description": "接口说明：个股操作能力汇总，支持按“年_季度”查询。 年份可以选择1989年至今年，季度可以选择1：第一季度、2：中期报告、3：第三季度、4：年报。 例如，“2021_1”表示2021年第一季度的数据。",
    "id": "7312650346944462898",
    "name": "season_operate_of_company",
    "parameters": [
      {
        "description": "6位数字组成的股票代码，前3位表示股票的类型和上市地点",
        "is_required": true,
        "name": "stock_code",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "查询年份，格式为YYYY",
        "is_required": false,
        "name": "year",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "查询季度，值为枚举值[1,2,3,4]",
        "is_required": false,
        "name": "season",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7310488826684686386"
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
  "7341248874734092299": {
    "description": "获取A股证券列表",
    "id": "7341248874734092299",
    "name": "stock_list",
    "parameters": [],
    "plugin_id": "7341248175384035328"
  },
  "7341250072577015847": {
    "description": "沪深两市新股日历",
    "id": "7341250072577015847",
    "name": "new_stock_calendar",
    "parameters": [],
    "plugin_id": "7341248175384035328"
  },
  "7341387554555609098": {
    "description": "获取指数、行业指数以及概念指数（包括基金，债券，美股，外汇，期货，黄金等的代码）",
    "id": "7341387554555609098",
    "name": "query_index",
    "parameters": [],
    "plugin_id": "7341248175384035328"
  },
  "7341390116843192329": {
    "description": "根据指数代码获取对应指数下的证券(指数代码从前面的指数列表接口中获取)",
    "id": "7341390116843192329",
    "name": "query_stock_by_index",
    "parameters": [
      {
        "description": "指数代码",
        "is_required": true,
        "name": "index_code",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7341248175384035328"
  },
  "7341393156543348771": {
    "description": "查询股票对应的概念指数,指数",
    "id": "7341393156543348771",
    "name": "query_stock_attribute_index",
    "parameters": [
      {
        "description": "股票代码",
        "is_required": true,
        "name": "stock_code",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7341248175384035328"
  },
  "7341395432683356169": {
    "description": "根据股票代码获取对应上市公司的详情",
    "id": "7341395432683356169",
    "name": "query_company_detail",
    "parameters": [
      {
        "description": "股票代码",
        "is_required": true,
        "name": "stock_code",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7341248175384035328"
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
