/**
 * 处理扣子插件商店的json数据 -> execl
 * 
*/


const fs = require('fs');
const XLSX = require('xlsx');

// 读取 code-plugin 文件夹中的所有文件
const files = fs.readdirSync('code-plugin');

// 存储已存在的产品名
const existingProducts = {};

// 存储所有产品数据
const allProducts = [];

// 遍历文件夹中的每个 JSON 文件
files.forEach(file => {
    if (file.endsWith('.json')) {
        const fileData = JSON.parse(fs.readFileSync('code-plugin/' + file, 'utf8'));
        const fileProducts = fileData.data.products;

        // 对每个产品进行去重操作
        fileProducts.forEach(product => {
            const productName = product.meta_info.name;
            if (!existingProducts[productName]) {
                console.log(product)
                existingProducts[productName] = true;
                allProducts.push({
                    '插件名': productName,
                    '所属类目': product.meta_info.category &&  product.meta_info.category.name ? product.meta_info.category.name : '推荐',
                    '插件类型': product.plugin_extra.tools[0].name,
                    '插件作用': product.meta_info.description,
                    '插件作者': product.meta_info.seller.name,
                    '使用人数': product.plugin_extra.bots_use_count,
                    '收藏人数': product.meta_info.favorite_count,
                });
            }
        });
    }
});

// 创建 Excel 文件
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.json_to_sheet(allProducts);

XLSX.utils.book_append_sheet(wb, ws, "插件数据");

// 保存 Excel 文件
XLSX.writeFile(wb, '扣子推荐插件数据.xlsx');

console.log('Excel 文件生成成功！');
