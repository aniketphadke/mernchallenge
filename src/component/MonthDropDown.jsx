import React from &#39;react&#39;;
const MonthDropdown = ({ selectedMonth, onChange }) =&gt; {
const months = [
&#39;January&#39;, &#39;February&#39;, &#39;March&#39;, &#39;April&#39;, &#39;May&#39;,
&#39;June&#39;, &#39;July&#39;, &#39;August&#39;, &#39;September&#39;, &#39;October&#39;,
&#39;November&#39;, &#39;December&#39;,
];

return (
&lt;select value={selectedMonth} onChange={(e) =&gt;
onChange(e.target.value)}&gt;
{months.map((month) =&gt; (
&lt;option key={month} value={month}&gt;{month}&lt;/option&gt;
))}
&lt;/select&gt;
);
};
export default MonthDropdown;