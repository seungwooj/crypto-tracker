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
        () => fetchCoinHistory(coinId)
        // { refetchInterval: 5000 }
    );
    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                <>
                    <ApexChart
                        type="candlestick"
                        series={[
                            {
                                data:
                                    data?.map((price) => {
                                        return {
                                            x: new Date(
                                                price.time_close * 1000
                                            ),
                                            y: [
                                                parseFloat(price.open),
                                                parseFloat(price.high),
                                                parseFloat(price.low),
                                                parseFloat(price.close),
                                            ],
                                        };
                                    }) ?? [],
                            },
                        ]}
                        options={{
                            chart: {
                                toolbar: { show: false },
                                background: "transparent",
                            },
                            theme: { mode: "light" },
                            grid: { show: true },
                            xaxis: {
                                labels: { show: false },
                                axisBorder: { show: false },
                                axisTicks: { show: false },
                            },
                            yaxis: {
                                show: false,
                            },
                        }}
                    />
                </>
            )}
        </div>
    );
}

export default Chart;
