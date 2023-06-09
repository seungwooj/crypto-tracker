import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}
interface ChartProps {
    coinId: string;
}

function Chart({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(
        ["ohlcv", coinId],
        () => fetchCoinHistory(coinId),
        { refetchInterval: 5000 }
    );
    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: "price",
                            data:
                                data?.map((price) => parseFloat(price.close)) ??
                                [],
                        },
                    ]}
                    options={{
                        theme: { mode: "dark" },
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: { show: false },
                            background: "transparant",
                        },
                        stroke: { curve: "smooth", width: 3 },
                        grid: { show: false },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            axisBorder: { show: false },
                            axisTicks: { show: false },
                            labels: { show: false },
                            type: "datetime",
                            categories: data?.map((price) =>
                                new Date(price.time_close * 1000).toISOString()
                            ),
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                gradientToColors: ["#0be881"],
                                stops: [0, 100],
                            },
                        },
                        colors: ["#0fbcf9"],
                        tooltip: {
                            y: {
                                formatter: (value: number) =>
                                    `$${value.toFixed(2)}`,
                            },
                        },
                    }}
                />
            )}
        </div>
    );
}

export default Chart;
