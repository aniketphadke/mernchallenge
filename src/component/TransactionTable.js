import React, { useState, useEffect } from &#39;react&#39;;
import API from &#39;../api&#39;;
const TransactionsTable = ({ selectedMonth }) =&gt; {
const [transactions, setTransactions] = useState([]);
const [search, setSearch] = useState(&#39;&#39;);
const [page, setPage] = useState(1);
const [total, setTotal] = useState(0);
const fetchTransactions = async () =&gt; {
const { data } = await API.get(&#39;/transactions&#39;, {
params: { month: selectedMonth, search, page, perPage: 10 },
});
setTransactions(data.transactions);
setTotal(data.total);
};
useEffect(() =&gt; {
fetchTransactions();
}, [selectedMonth, search, page]);
return (
&lt;div&gt;
&lt;h3&gt;Transactions&lt;/h3&gt;
&lt;input
type=&quot;text&quot;
placeholder=&quot;Search transactions...&quot;
value={search}
onChange={(e) =&gt; setSearch(e.target.value)}
/&gt;
&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;Title&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;th&gt;Price&lt;/th&gt;
&lt;th&gt;Date&lt;/th&gt;
&lt;th&gt;Sold&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
{transactions.map((t) =&gt; (

&lt;tr key={t.id}&gt;
&lt;td&gt;{t.title}&lt;/td&gt;
&lt;td&gt;{t.description}&lt;/td&gt;
&lt;td&gt;${t.price}&lt;/td&gt;
&lt;td&gt;{new Date(t.dateOfSale).toLocaleDateString()}&lt;/td&gt;
&lt;td&gt;{t.sold ? &#39;Yes&#39; : &#39;No&#39;}&lt;/td&gt;
&lt;/tr&gt;
))}
&lt;/tbody&gt;
&lt;/table&gt;
&lt;button disabled={page === 1} onClick={() =&gt; setPage(page - 1)}&gt;
Previous
&lt;/button&gt;
&lt;button
disabled={page * 10 &gt;= total}
onClick={() =&gt; setPage(page + 1)}
&gt;
Next
&lt;/button&gt;
&lt;/div&gt;
);
};
export default TransactionsTable;