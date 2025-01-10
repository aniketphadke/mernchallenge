import React, { useState } from &#39;react&#39;;
import MonthDropdown from &#39;./components/MonthDropdown&#39;;
import TransactionsTable from &#39;./components/TransactionsTable&#39;;
import Statistics from &#39;./components/Statistics&#39;;
import PriceBarChart from &#39;./components/BarChart&#39;;
import CategoryPieChart from &#39;./components/PieChart&#39;;
function App() {
const [selectedMonth, setSelectedMonth] = useState(&#39;March&#39;); // Default
month
return (
&lt;div&gt;
&lt;h1&gt;MERN Coding Challenge&lt;/h1&gt;

&lt;MonthDropdown selectedMonth={selectedMonth}
onChange={setSelectedMonth} /&gt;
&lt;Statistics selectedMonth={selectedMonth} /&gt;
&lt;TransactionsTable selectedMonth={selectedMonth} /&gt;
&lt;PriceBarChart selectedMonth={selectedMonth} /&gt;
&lt;CategoryPieChart selectedMonth={selectedMonth} /&gt;
&lt;/div&gt;
);
}
export default App;