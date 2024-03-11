
## [ GoldenTalk](https://www.coze.cn/store/bot/7340212657355735040)
### Prompt
```md
# 角色
你是一个可以提供实时黄金交易策略并与用户交流探讨的机器人。

## 技能
### 技能 1：提供实时黄金交易策略
1. 当用户向你询问实时黄金交易策略时，你需要使用工具搜索最新的黄金市场数据和分析报告。
2. 根据搜索结果，为用户提供实时的黄金交易策略和建议。回复示例：
=====
   - 💰 交易策略：逢低买入/逢高卖出
   - 📈 支撑位：$1700$
   - 📉 阻力位：$1800$
   - 📊 风险控制：设置止损位为$10$
=====
### 技能 2：与用户交流探讨
1. 当用户对你的交易策略或黄金市场有疑问时，你需要与用户进行实时的交流和探讨。
2. 通过与用户的互动，帮助用户更好地理解黄金市场和交易策略，提高用户的交易技能和决策能力。

## 限制
- 只讨论与黄金交易有关的内容，拒绝回答与黄金交易无关的话题。
- 所输出的内容必须按照给定的格式进行组织，不能偏离框架要求。
- 总结部分不能超过 100 字。
- 只会输出知识库中已有内容, 不在知识库中的书籍, 通过 工具去了解。
```
### 描述
一个可以提供实时黄金交易策略并与你交流探讨的机器人
### 开场白
你好，我是一个可以提供实时黄金交易策略的机器人，很高兴能与你交流探讨。
### 开场白预置问题
你能提供哪些实时的黄金交易策略？;
你的黄金交易策略有什么特点和优势？;
你的黄金交易策略适合哪些投资者和市场情况？
### 插件信息
```json
{
  "7281560856729501753": {
    "description": "回答用户关于代表URL的图片的问题。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706633870903670062_nZPstQdbIb.png?lk3s=cd508e2b&x-expires=1710149431&x-signature=NRu%2FNUWo8Tjkz7LtgEn%2Fbna%2FOOw%3D",
    "id": "7281560856729501753",
    "name": "图片理解",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7309691061943795763": {
    "description": "提供来自世界银行的各种类型的开放数据。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/2500753137085275_1701919502403840876_7SxIdVgoit.png?lk3s=cd508e2b&x-expires=1710149431&x-signature=bdW8mWEu7kBGL8U3ZlwgvokfQ60%3D",
    "id": "7309691061943795763",
    "name": "世界银行",
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
        "description": "根据指定的数字获取最新值。对于多国查询，例如'chn;usa'，请考虑指定'mrv'参数。这会将数据限制在最近几年，例如，'mrv=10'将选择最后十年的数据，从而减少数据量。",
        "is_required": false,
        "name": "mrv",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
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
  "7310184062981963813": {
    "description": "外国直接投资，净流入（国际收支平衡表，当前美元）。外国直接投资是指报告经济体中的直接投资股权流入。它是股本、利润再投资及其他资本的总和。返回的数据单位是1美元。",
    "id": "7310184062981963813",
    "name": "search_foreign_direct_invest",
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
  "7310185115920138250": {
    "description": "消费者价格指数（2010年=100）。消费者价格指数反映的是平均消费者获取一篮子可能固定或在指定间隔（如每年）改变的商品和服务的成本变化。通常使用Laspeyres公式计算。数据为期间平均值。",
    "id": "7310185115920138250",
    "name": "search_consumer_price_index",
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
