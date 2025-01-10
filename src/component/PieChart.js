import React, { useEffect, useState } from &#39;react&#39;;
import { PieChart, Pie, Cell, Tooltip, Legend } from &#39;recharts&#39;;
import API from &#39;../api&#39;;
const COLORS = [&#39;#0088FE&#39;, &#39;#00C49F&#39;, &#39;#FFBB28&#39;, &#39;#FF8042&#39;];
const CategoryPieChart = ({ selectedMonth }) =&gt; {
const [data, setData] = useState([]);

const fetchPieChart = async () =&gt; {
const { data } = await API.get(&#39;/pie-chart&#39;, { params: { month:
selectedMonth } });
const formattedData = Object.keys(data).map((category) =&gt; ({
name: category,
value: data[category],
}));
setData(formattedData);
};
useEffect(() =&gt; {
fetchPieChart();
}, [selectedMonth]);
return (
&lt;div&gt;
&lt;h3&gt;Category Pie Chart&lt;/h3&gt;
&lt;PieChart width={400} height={400}&gt;
&lt;Pie
data={data}
cx={200}
cy={200}
labelLine={false}
label={({ name, value }) =&gt; `${name}: ${value}`}
outerRadius={120}
fill=&quot;#8884d8&quot;
dataKey=&quot;value&quot;
&gt;
{data.map((_, index) =&gt; (
&lt;Cell key={index} fill={COLORS[index % COLORS.length]} /&gt;
))}
&lt;/Pie&gt;
&lt;Tooltip /&gt;
&lt;Legend /&gt;
&lt;/PieChart&gt;
&lt;/div&gt;
);
};
export default CategoryPieChart;