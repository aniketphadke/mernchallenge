import React, { useEffect, useState } from &#39;react&#39;;
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from
&#39;recharts&#39;;
import API from &#39;../api&#39;;
const PriceBarChart = ({ selectedMonth }) =&gt; {
const [data, setData] = useState([]);
const fetchBarChart = async () =&gt; {
const { data } = await API.get(&#39;/bar-chart&#39;, { params: { month:
selectedMonth } });
const formattedData = Object.keys(data).map((range) =&gt; ({
range,
count: data[range],
}));
setData(formattedData);
};
useEffect(() =&gt; {
fetchBarChart();
}, [selectedMonth]);
return (
&lt;div&gt;
&lt;h3&gt;Price Range Bar Chart&lt;/h3&gt;
&lt;BarChart width={600} height={300} data={data}&gt;
&lt;CartesianGrid strokeDasharray=&quot;3 3&quot; /&gt;
&lt;XAxis dataKey=&quot;range&quot; /&gt;
&lt;YAxis /&gt;
&lt;Tooltip /&gt;
&lt;Bar dataKey=&quot;count&quot; fill=&quot;#8884d8&quot; /&gt;
&lt;/BarChart&gt;
&lt;/div&gt;
);
};
export default PriceBarChart;