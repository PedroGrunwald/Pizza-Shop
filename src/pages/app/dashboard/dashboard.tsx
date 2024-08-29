import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenual";
import { MonthOrdersAmountCard } from "./month-orders-amount-card.tsx";
import { DayOrdersAmountCard } from "./day-orders-amount-card.tsx";
import { MonthCanceledOrdersAmount } from "./month-canceled-orders-amount";
import { RevenueChart } from "./revenue-chart.tsx";
import { PopularProductsChart } from "./popular-products-chart.tsx";

export function Dashboard() {
  return (
    <>
      <Helmet title="login" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmount />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart/>
          <PopularProductsChart/>
        </div>
      </div>
    </>
  );
}
