import React, { useState, useEffect } from &#39;react&#39;;
import API from &#39;../api&#39;;
const Statistics = ({ selectedMonth }) =&gt; {
const [stats, setStats] = useState({
totalSaleAmount: 0,
totalSoldItems: 0,
totalNotSoldItems: 0,
});
const fetchStatistics = async () =&gt; {
const { data } = await API.get(&#39;/statistics&#39;, { params: { month:
selectedMonth } });
setStats(data);
};
useEffect(() =&gt; {
fetchStatistics();
}, [selectedMonth]);
return (
&lt;div&gt;
&lt;h3&gt;Statistics&lt;/h3&gt;
&lt;p&gt;Total Sale Amount: ${stats.totalSaleAmount}&lt;/p&gt;
&lt;p&gt;Total Sold Items: {stats.totalSoldItems}&lt;/p&gt;
&lt;p&gt;Total Not Sold Items: {stats.totalNotSoldItems}&lt;/p&gt;
&lt;/div&gt;
);
};

export default Statistics;